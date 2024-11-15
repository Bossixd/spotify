import React from "react";
import Topbar from "../features/topbar-navigation/index";
import Sidebar from "../features/sidebar/index";
import Bottombar from "../features/bottombar-navigation/index";
import NowPlaying from "../features/now-playing-rightbar";
import "./HomeLayout.css";
import MusicPlayer from "../features/music-player";

function HomeLayout() {
    const [playing, setPlaying] = React.useState(false);

    return (
        <div>
            <MusicPlayer playing={playing} path="maozedong.mp3"/>
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
            <Bottombar playing={playing} setPlaying={setPlaying}/>
        </div>
    );
}

export default HomeLayout;
