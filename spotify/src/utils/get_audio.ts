import { json } from "stream/consumers";

const get_audio = (
    audio: HTMLAudioElement,
    currentSongId: string,
    songId: string,
    setAudioUrl: (audioUrl: string) => void,
    metadata: any,
    setMetadata: (metadata: any) => void
) => {
    let metadataBuffer;
    if (currentSongId !== songId && audio !== null) {
        fetch("http://localhost:3001/get-metadata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                song_id: songId,
            }),
        }).then((response) => response.json()).then((data) => {
            setMetadata(data);
            metadataBuffer = data;
            return fetch("http://localhost:3001/get-audio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    audio_link: metadataBuffer.audio_link,
                }),
            })
        })
            .then((response) => response.blob())
            .then((blob) => {
                const audioUrl = URL.createObjectURL(blob);
                audio.src = audioUrl;
                audio.load();
            })
            .catch((error) => {
                console.error("Error fetching audio:", error);
            });
    }
};

export default get_audio;
