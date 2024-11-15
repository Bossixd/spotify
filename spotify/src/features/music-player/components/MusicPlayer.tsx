import { useEffect } from "react";
import "./MusicPlayer.css";

interface Props {
    playing: boolean;
    path: string;
}

function MusicPlayer({ playing, path }: Props) {
    const audio = document.getElementById('myAudio'); 
    useEffect(() => {
        if (audio !== null) {
            if (playing) {
                // @ts-ignore
                audio.play();
            } else {
                // @ts-ignore
                audio.pause();
            }
        }
    }, [playing]);
    return (
        <div>
            <audio
                id="myAudio"
                src={path}
                preload="auto"
            ></audio>
        </div>
    );
}

export default MusicPlayer;
