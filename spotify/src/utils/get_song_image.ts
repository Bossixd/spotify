import backendUrl from "./backend_url";

const get_song_image = (
    songId: string,
    image_link: string,
    setAllImages: (imageUrl: any) => void,
) => {
    fetch(`http://${backendUrl}/song/get-image`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            image_link: image_link,
        }),
    })
        .then((response) => response.blob())
        .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            setAllImages((prevDict: {}) => ({
                ...prevDict,
                [songId]: imageUrl
            }));
        })
        .catch((error) => {
            console.error("Error fetching audio:", error);
        });
};

export default get_song_image;
