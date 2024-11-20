import { json } from "stream/consumers";

const get_audio = (
    audio: HTMLAudioElement,
    currentSongId: string,
    songId: string,
    setAudioUrl: (audioUrl: string) => void,
    setMetadata: (metadata: any) => void
) => {
    if (currentSongId !== songId && audio !== null) {
        console.log("Here");
        fetch("http://localhost:3001/get-audio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                song_id: "6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc",
            }),
        })
            .then((response) => response.blob())
            .then((blob) => {
                console.log("Response: " + blob);
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
