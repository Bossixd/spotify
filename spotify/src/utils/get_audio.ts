import { json } from "stream/consumers";

const get_audio = (
    audio: HTMLAudioElement,
    currentSongId: string,
    songId: string,
    setAudioUrl: (audioUrl: string) => void,
    setImageUrl: (imageUrl: string) => void,
    setProfileUrl: (profileUrl: string) => void,
    metadata: any,
    setMetadata: (metadata: any) => void
) => {
    let metadataBuffer: any;
    // if (currentSongId !== songId && audio !== null) {
    //     fetch("http://localhost:3001/song/get-metadata", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             song_id: songId,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setMetadata(data);
    //             metadataBuffer = data;
    //             return fetch("http://localhost:3001/song/get-audio", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     audio_link: metadataBuffer.audio_link,
    //                 }),
    //             });
    //         })
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             const audioUrl = URL.createObjectURL(blob);
    //             audio.src = audioUrl;
    //             audio.load();
    //         })
    //         .then(() => {
    //             return fetch("http://localhost:3001/song/get-image", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     image_link: metadataBuffer.image_link,
    //                 }),
    //             });
    //         })
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             const imageUrl = URL.createObjectURL(blob);
    //             setImageUrl(imageUrl);
    //         })
    //         .then(() => {
    //             return fetch("http://localhost:3001/artists/get-image", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     image_link: metadataBuffer.profile_image_link,
    //                 }),
    //             });
    //         })
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             const profileUrl = URL.createObjectURL(blob);
    //             setProfileUrl(profileUrl);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching audio:", error);
    //         });
    // }
};

export default get_audio;
