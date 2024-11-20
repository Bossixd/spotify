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

app.post("/get-metadata", async (req, res) => {
    const body = req.body;

    try {
        const result = await client.query("SELECT * FROM songs where id = $1", [
            body.song_id,
        ]);

        if (result.rowCount === 0) {
            res.status(404).json({ error: "Song not found" });
        }
        res.json(result.rows[0]);
        console.log(result.rows[0]);
    } catch (err) {
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
});

// Endpoint to fetch the MP3 file
app.post("/get-audio", async (req, res) => {
    const body = req.body;
    console.log(body);
    const bucketName = "pattakit-spotify";

    try {
        console.log("Error Here!");
        const audioPath = `songs/audio/${body.audio_link}.mp3`;
        console.log(audioPath);

        const params = {
            Bucket: bucketName,
            Key: audioPath,
        };
        console.log("Error Here!");
        s3.getObject(params, (err, data) => {
            console.log("Whatttttt");
            if (err) {
                console.log("Bruhhh");
                res.status(500).send("Error fetching file from S3");
                console.error(err);
                return;
            }

            res.setHeader("Content-Type", "audio/mpeg");
            res.setHeader("Content-Length", data.ContentLength);
            console.log(data.ContentLength);
            res.send(data.Body);
        });
        console.log("Error Here!");
    } catch (err) {
        console.log("Error!!!");
        res.status(500).json({
            error: "Failed to retrieve data from database",
        });
    }
    console.log("Error Here!");
});

app.listen(3001);
