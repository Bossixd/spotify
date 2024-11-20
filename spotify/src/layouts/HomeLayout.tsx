import React, { useEffect, useState } from "react";
import Topbar from "../features/topbar-navigation/index";
import Sidebar from "../features/sidebar/index";
import Bottombar from "../features/bottombar-navigation/index";
import NowPlaying from "../features/now-playing-rightbar";
import "./HomeLayout.css";
import MusicPlayer from "../features/music-player";

import get_audio from "../utils/get_audio";

function HomeLayout() {
    const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentSongId, setCurrentSongId] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [metadata, setMetadata] = useState({});

    useEffect(() => {
        if (audio !== null) {
            const getAudioData = get_audio(
                audio,
                currentSongId,
                "6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc",
                setAudioUrl,
                setMetadata
            );
        }
        console.log(metadata);
    }, [audio]);

    useEffect(() => {
        if (audio !== null) {
            audio.src = audioUrl;
        }
    }, [audioUrl]);

    return (
        <div>
            <MusicPlayer
                playing={playing}
                songId="6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc"
                audio={audio}
                setAudio={setAudio}
                setProgress={setProgress}
            />
            <div className="grid-container">
                <div className="grid-header">
                    <Topbar />
                </div>
                <div className="grid-side">
                    <Sidebar />
                </div>
                <div className="grid-main">Main</div>
                <div className="grid-right">
                    <NowPlaying />
                </div>
            </div>
            <Bottombar
                playing={playing}
                setPlaying={setPlaying}
                progress={progress}
                setProgress={setProgress}
                maxProgress={
                    audio !== null && audio.duration ? audio.duration : 0
                }
            />
        </div>
    );
}

export default HomeLayout;
