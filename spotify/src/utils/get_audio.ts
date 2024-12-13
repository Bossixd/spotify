import backendUrl from "./backend_url";

const get_audio = (
    audio: HTMLAudioElement,
    currentSongId: string,
    setImageUrl: (imageUrl: string) => void,
    setProfileUrl: (profileUrl: string) => void,
    metadata: any,
    imageUrl: any
) => {
    if (audio !== null) {
        console.log("inside");
        console.log(metadata);
        setImageUrl(imageUrl);
        fetch(`http://${backendUrl}/song/get-audio`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                audio_link: metadata.audio_link,
            }),
        })
            .then((response) => response.blob())
            .then((blob) => {
                const audioUrl = URL.createObjectURL(blob);
                audio.src = audioUrl;
                audio.load();
            })
            .then(() => {
                return fetch(`http://${backendUrl}/artists/get-image`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        image_link: metadata.profile_image_link,
                    }),
                });
            })
            .then((response) => response.blob())
            .then((blob) => {
                const profileUrl = URL.createObjectURL(blob);
                setProfileUrl(profileUrl);
            })
            .catch((error) => {
                console.error("Error fetching audio:", error);
            });
    }
};

export default get_audio;
