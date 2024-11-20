import { useEffect, useState } from "react";
import "./MusicPlayer.css";

interface Props {
    playing: boolean;
    songId: string;
    audio: HTMLAudioElement | null;
    setAudio: (audio: HTMLAudioElement | null) => void;
    setProgress: (progress: number) => void;
}

function MusicPlayer({ playing, songId, audio, setAudio, setProgress }: Props) {
    const [currentSongId, setCurrentSongId] = useState("");
    useEffect(() => {
        setAudio(document.getElementById("myAudio") as HTMLAudioElement);
    }, [setAudio]);

    useEffect(() => {
        if (currentSongId !== songId && audio !== null) {
            setCurrentSongId(songId);
            console.log("Current song id: " + currentSongId);
        }
        if (audio !== null) {
            if (playing) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [playing]);

    useEffect(() => {
        if (audio !== null) {
            const updateProgress = () => {
                if (audio && audio.duration > 0) {
                    const progress = (audio.currentTime / audio.duration) * 100;
                    setProgress(progress);
                }
            };

            audio.addEventListener("timeupdate", updateProgress);

            return () => {
                audio.removeEventListener("timeupdate", updateProgress); // Clean up the listener on unmount
            };
        }
    }, [audio, setProgress]);

    return (
        <div>
            <audio id="myAudio" preload="auto"></audio>
        </div>
    );
}

export default MusicPlayer;
