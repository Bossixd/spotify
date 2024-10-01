import React from "react";
import "./Topbar.css";

import spotifyIcon from "../assets/spotify-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import searchIcon from "../assets/search-icon.svg";

function Topbar() {
    return (
        <div className="topbar">
            <div className="spotify-logo-bounding-box">
                <img src={spotifyIcon} className="spotify-icon" alt="" />
            </div>
            <div className="search-bounding-box">
              <div className="home-icon-bounding-box">
                <img src={homeIcon} className="home-icon" alt="" />
              </div>
              <div className="search-bar-bounding-box">
                <img src={searchIcon} className="search-icon" alt="" />
              </div>
            </div>
            <div className="setting-bounding-box">Settings</div>
        </div>
    );
}

export default Topbar;
