import "./NowPlaying.css";

import { useState } from "react";
import NowPlayingHeader from "./NowPlayingHeader";
import NowPlayingTitle from "./NowPlayingTitle";

import songBackground from "../../../assets/song-background.png";

function NowPlaying() {
    return (
        <div className="nowplaying">
            <img src={songBackground} />
            <NowPlayingHeader />
            <div className="nowplaying-seperator" />
            <NowPlayingTitle />
        </div>
    );
}

export default NowPlaying;
