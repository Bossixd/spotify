import backendUrl from "./backend_url";

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

    fetch(`http://${backendUrl}/song/get-metadata`, {
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
