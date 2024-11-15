import React from "react";
import Topbar from "../features/topbar-navigation/index";
import Sidebar from "../features/sidebar/index";
import Bottombar from "../features/bottombar-navigation/index";
import NowPlaying from "../features/now-playing-rightbar";
import "./HomeLayout.css";

function HomeLayout() {
    return (
        <div>
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
            <Bottombar />
        </div>
    );
}

export default HomeLayout;
