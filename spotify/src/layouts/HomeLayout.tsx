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
import get_song_image from "../utils/get_song_image";
import get_song_metadata from "../utils/get_song_metadata";
import { get } from "http";

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
                "44a075b3-3526-40f1-ab97-dacfb9041c13",
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

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        get_recommendations(setRecommendations);
    }, []);

    const [allImages, setAllImages] = useState({});
    const [allMetadata, setAllMetadata] = useState<any>({});

    // useEffect(() => {
    //     get_song_metadata("44a075b3-3526-40f1-ab97-dacfb9041c13", setAllMetadata);
    //     get_song_metadata("6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc", setAllMetadata);
    //     get_song_metadata("45c0abdd-7a90-4e85-8e41-df8606dea75b", setAllMetadata);
    // }, []);

    // useEffect(() => {
    //     if (allMetadata["44a075b3-3526-40f1-ab97-dacfb9041c13"]) {
    //         get_song_image("44a075b3-3526-40f1-ab97-dacfb9041c13", allMetadata["44a075b3-3526-40f1-ab97-dacfb9041c13"].image_link, setAllImages);
    //     }
    //     if (allMetadata["6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc"]) {
    //         get_song_image("6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc", allMetadata["6551ff8f-2fbc-4706-a8db-cf3e6f0c8ffc"].image_link, setAllImages);
    //     }
    //     if (allMetadata["45c0abdd-7a90-4e85-8e41-df8606dea75b"]) {
    //         get_song_image("45c0abdd-7a90-4e85-8e41-df8606dea75b", allMetadata["45c0abdd-7a90-4e85-8e41-df8606dea75b"].image_link, setAllImages);
    //     }
    // }, [allMetadata]);

    return (
        <div>
            <MusicPlayer
                playing={playing}
                songId="44a075b3-3526-40f1-ab97-dacfb9041c13"
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
                    <MainSongs 
                        nowPlayingBarOpen={nowPlayingBar}
                        sideBarOpen={sideBar}
                        recommendations={recommendations}
                        allImages={allImages}
                        setAllImages={setAllImages}
                        allMetadata={allMetadata}
                        setAllMetadata={setAllMetadata}
                    />
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
