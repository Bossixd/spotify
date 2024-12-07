/*

For database connection: https://stackoverflow.com/questions/76899023/rds-while-connection-error-no-pg-hba-conf-entry-for-host
For Certificate authority download: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html#UsingWithRDS.SSL.RegionCertificates
(Check Certificate Authority on database page)

*/

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { Client } = require("pg");
fs = require("fs");

require("dotenv").config();

const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
});

// Initialize AWS S3
const s3 = new AWS.S3();

// Initialize PostgreSQL Client
const client = new Client({
    host: process.env.AWS_RDS_HOST,
    user: process.env.AWS_RDS_USER,
    password: process.env.AWS_RDS_PASSWORD,
    database: process.env.AWS_RDS_DATABASE,
    port: 5432,
    ssl: {
        require: true,
        rejectUnauthorized: true,
        ca: fs.readFileSync("ca.pem").toString(),
    },
});

// Connect to the PostgreSQL database
client.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the PostgreSQL database!");
});

app.get("/", (req, res) => {
    console.log("Here!");
    res.json({ message: "Complete" });
});

// Endpoint to fetch metadata
app.post("/song/get-metadata", async (req, res) => {
    const body = req.body;

    console.log("Song Id: " + body.song_id);

    try {
        const result = await client.query(
            "SELECT * FROM songs JOIN artists ON songs.artist_id = artists.id WHERE songs.id = $1",
            [body.song_id]
        );

        result.rows[0].about = result.rows[0].about.toString();

        if (result.rowCount === 0) {
            res.status(404).json({ error: "Song not found" });
        }
        console.log(result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
});

// Endpoint to fetch the MP3 file
app.post("/song/get-audio", async (req, res) => {
    const body = req.body;
    console.log("Audio Link: " + body.audio_link);

    const bucketName = "pattakit-spotify";

    try {
        const audioPath = `songs/audio/${body.audio_link}`;

        const params = {
            Bucket: bucketName,
            Key: audioPath,
        };

        s3.getObject(params, (err, data) => {
            if (err) {
                res.status(500).send("Error fetching file from S3");
                return;
            }

            res.setHeader("Content-Type", "image/mpeg");
            res.setHeader("Content-Length", data.ContentLength);
            res.send(data.Body);
        });
    } catch (err) {
        console.log("Error Get Audio");
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
});

// Endpoint to fetch image file
app.post("/song/get-image", async (req, res) => {
    const body = req.body;
    const bucketName = "pattakit-spotify";
    console.log("Image Link: " + body.image_link);

    try {
        const audioPath = `songs/image/${body.image_link}`;

        const audioParams = {
            Bucket: bucketName,
            Key: audioPath,
        };

        s3.getObject(audioParams, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error fetching file from S3");
                return;
            }

            res.setHeader("Content-Type", "audio/jpeg");
            res.setHeader("Content-Length", data.ContentLength);
            res.send(data.Body);
        });
    } catch (err) {
        console.log("Error Get Image");
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
});

app.post("/song/get-recommendations", async (req, res) => {
    const body = req.body;
    res.json([
        {
            title: "Song Recommendations",
            songs: ["44a075b3-3526-40f1-ab97-dacfb9041c13", "45c0abdd-7a90-4e85-8e41-df8606dea75b", "6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc"],
        },
    ]);
});

// Endpoint to fetch metadata
app.post("/artists/get-image", async (req, res) => {
    const body = req.body;
    const bucketName = "pattakit-spotify";

    try {
        const audioPath = `artists/profile_image/${body.image_link}`;
        console.log(body.image_link);

        const params = {
            Bucket: bucketName,
            Key: audioPath,
        };

        s3.getObject(params, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error fetching file from S3");
                return;
            }

            res.setHeader("Content-Type", "audio/mpeg");
            res.setHeader("Content-Length", data.ContentLength);
            res.send(data.Body);
        });
    } catch (err) {
        console.log("Error");
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
});

app.listen(3001);
