import React, { useEffect, useState } from "react";
import MainSongs from "../features/main-songs/index";
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
    const [imageUrl, setImageUrl] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    const [metadata, setMetadata] = useState({});

    useEffect(() => {
        if (audio !== null) {
            const getAudioData = get_audio(
                audio,
                currentSongId,
                "6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc",
                setAudioUrl,
                setImageUrl,
                setProfileUrl,
                metadata,
                setMetadata
            );
        }
    }, [audio]);

    useEffect(() => {
        if (audio !== null) {
            audio.src = audioUrl;
        }
    }, [audioUrl]);

    const [nowPlayingBar, setNowPlayingBar] = useState(true);
    const [nowPlayingGrid, setNowPlayingGrid] = useState("right");

    useEffect(() => {
        if (!nowPlayingBar) {
            setNowPlayingGrid("main");
        } else {
            setNowPlayingGrid("right");
        }
    }, [nowPlayingBar]);

    const [sideBar, setSideBar] = useState(true);
    const [sideBarGrid, setSideBarGrid] = useState("420");

    useEffect(() => {
        if (!sideBar) {
            setSideBarGrid("72");
        } else {
            setSideBarGrid("420");
        }
    }, [sideBar]);

    return (
        <div>
            <MusicPlayer
                playing={playing}
                songId="6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc"
                audio={audio}
                setAudio={setAudio}
                setProgress={setProgress}
            />
            <div
                className="grid-container"
                style={{
                    gridTemplateAreas: `"header header header" "side main ${nowPlayingGrid}"`,
                    gridTemplateColumns: `${sideBarGrid}px auto 420px`,
                }}
            >
                <div className="grid-header">
                    <Topbar />
                </div>
                <div className="grid-side">
                    <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
                </div>
                <div className="grid-main">
                    <MainSongs />
                </div>
                {nowPlayingBar && (
                    <div className="grid-right">
                        <NowPlaying
                            metadata={metadata}
                            imageUrl={imageUrl}
                            profileUrl={profileUrl}
                            setNowPlayingBar={setNowPlayingBar}
                        />
                    </div>
                )}
            </div>
            <Bottombar
                playing={playing}
                setPlaying={setPlaying}
                progress={progress}
                setProgress={setProgress}
                maxProgress={
                    audio !== null && audio.duration ? audio.duration : 0
                }
                metadata={metadata}
                imageUrl={imageUrl}
                nowPlayingBar={nowPlayingBar}
                setNowPlayingBar={setNowPlayingBar}
            />
        </div>
    );
}

export default HomeLayout;
