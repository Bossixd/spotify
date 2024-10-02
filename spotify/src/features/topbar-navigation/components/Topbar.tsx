import React from "react";
import "./Topbar.css";

import spotifyIcon from "../../../assets/spotify-icon.svg";
import homeIcon from "../../../assets/home-icon.svg";
import searchIcon from "../../../assets/search-icon.svg";
import browseIcon from "../../../assets/browse-icon.svg";

import data from "../../../data/data.json";

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
                    <form>
                        <input
                            className="search-bar"
                            type="text"
                            // id="fname"
                            // name="fname"
                            // value="John"
                            placeholder={data.topbar["search-bar-placeholder"]}
                        />
                    </form>
                    <img src={browseIcon} className="browse-icon" alt="" />
                </div>
            </div>
            <div className="setting-bounding-box">Settings</div>
        </div>
    );
}

export default Topbar;
