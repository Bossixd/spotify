import { json } from "stream/consumers";

const get_audio = (
    songId: string,
    setAllMetadata: (metadata: any) => void
) => {
    let found = false;

    setAllMetadata((prevDict: { [songId: string]: any }) => {
        if (prevDict[songId] != undefined) {
            found = true;
        }
        return ({...prevDict});
    });

    if (found) return;

    fetch("http://localhost:3001/song/get-metadata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            song_id: songId,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            setAllMetadata((prevDict: {}) => ({
                ...prevDict,
                [songId]: data
            }));
        })
        .catch((error) => {
            console.error("Error fetching audio:", error);
        });
};

export default get_audio;
