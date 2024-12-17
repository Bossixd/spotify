import React, { useEffect, useState } from "react";
import MainSongs from "../features/main-songs/index";
import Topbar from "../features/topbar-navigation/index";
import Sidebar from "../features/sidebar/index";
import Bottombar from "../features/bottombar-navigation/index";
import NowPlaying from "../features/now-playing-rightbar";
import "./HomeLayout.css";
import MusicPlayer from "../features/music-player";

import get_audio from "../utils/get_audio";
import get_recommendations from "../utils/get_recommendations";
import MainPlaylist from "../features/main-playlist";

function HomeLayout() {
    const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [playing, setPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentSongId, setCurrentSongId] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [profileUrl, setProfileUrl] = useState("");

    useEffect(() => {
        if (audio == null) return;

        setPlaying(false);
        audio.currentTime = 0;
        setLoading(true);

        get_audio(
            audio!,
            currentSongId,
            setImageUrl,
            setProfileUrl,
            setLoading,
            allMetadata[currentSongId],
            allImages[currentSongId]
        );
    }, [currentSongId]);

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

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        get_recommendations(setRecommendations);
    }, []);

    const [allImages, setAllImages] = useState<any>({});
    const [allMetadata, setAllMetadata] = useState<any>({});

    /* 
        1. Make Main Playlist UI (May keep track of screen using some kind of enum)
        2. Make sidebar playlist contain many images and link to db
        3. Make main connedted to playlist
    */

    return (
        <div>
            <MusicPlayer
                playing={playing}
                songId=""
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
                    {/* <MainSongs 
                        nowPlayingBarOpen={nowPlayingBar}
                        sideBarOpen={sideBar}
                        recommendations={recommendations}
                        allImages={allImages}
                        setAllImages={setAllImages}
                        allMetadata={allMetadata}
                        setAllMetadata={setAllMetadata}
                        setCurrentSongId={setCurrentSongId}
                    /> */}
                    <MainPlaylist />
                </div>
                {nowPlayingBar && (
                    <div className="grid-right">
                        <NowPlaying
                            metadata={allMetadata[currentSongId]}
                            imageUrl={imageUrl}
                            profileUrl={profileUrl}
                            setNowPlayingBar={setNowPlayingBar}
                        />
                    </div>
                )}
            </div>
            <Bottombar
                audio={audio}
                playing={playing}
                setPlaying={setPlaying}
                progress={progress}
                setProgress={setProgress}
                maxProgress={
                    audio !== null && audio.duration ? audio.duration : 0
                }
                metadata={allMetadata[currentSongId]}
                imageUrl={imageUrl}
                nowPlayingBar={nowPlayingBar}
                setNowPlayingBar={setNowPlayingBar}
                loading={loading}
            />
        </div>
    );
}

export default HomeLayout;
