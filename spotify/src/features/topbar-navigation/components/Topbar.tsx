import React from "react";
import "./Topbar.css";

import spotifyIcon from "../../../assets/svg/spotify-icon.svg";
import homeIcon from "../../../assets/svg/home-icon.svg";
import browseIcon from "../../../assets/svg/browse-icon.svg";

import SearchIcon from "../../../assets/svg/search-icon";

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
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <form>
                        <input
                            className="search-bar"
                            type="text"
                            // id="fname"
                            // name="fname"
                            // value="John"
                            placeholder={"What do you want to play?"}
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
