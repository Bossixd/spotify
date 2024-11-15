import "./Bottombar.css";

import { useState } from "react";

import current from "../../../data/current.json";

import NowPlayingIcon from "../../../assets/svg/now-playing-icon";
import LyricsIcon from "../../../assets/svg/lyrics-icon";
import QueueIcon from "../../../assets/svg/queue-icon";
import ConnectToDeviceIcon from "../../../assets/svg/connect-to-device-icon";
import VolumeIcon from "../../../assets/svg/volume-icon";
import MiniplayerIcon from "../../../assets/svg/miniplayer-icon";
import FullscreenIcon from "../../../assets/svg/fullscreen-icon";

import PlayIcon from "../../../assets/svg/play-icon";
import NextSongIcon from "../../../assets/svg/next-song-icon";
import LastSongIcon from "../../../assets/svg/last-song-icon";
import ShuffleIcon from "../../../assets/svg/shuffle-icon";
import RepeatIcon from "../../../assets/svg/repeat-icon";

import InputBar from "./InputBar";

function Sidebar() {
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(50);
    return (
        <div className="bottombar">
            <div className="bottombar-song">
                <img
                    className="bottombar-song-image"
                    src={require("../../../assets/alan-walker.jpg")}
                />
                <div className="bottombar-song-details">
                    <div className="bottombar-song-details-title">
                        {current["title"]}
                    </div>
                    <div className="bottombar-song-details-author">
                        {current["author"]}
                    </div>
                </div>
            </div>
            <div className="bottombar-audio-controls">
                <div className="bottombar-audio-controls-player">
                    <ShuffleIcon />
                    <LastSongIcon />
                    <div className="bottombar-audio-controls-player-button">
                        <PlayIcon />
                    </div>
                    <NextSongIcon />
                    <RepeatIcon />
                </div>
                <div className="bottombar-audio-controls-progress">
                    0:02 <InputBar style={{"--progress-bar-transform": String(progress) + "%" } as any} setValue={setProgress}/> 3:15
                </div>
            </div>
            <div className="bottombar-controls">
                <NowPlayingIcon />
                <LyricsIcon />
                <QueueIcon />
                <ConnectToDeviceIcon />
                <VolumeIcon />
                <InputBar style={{"--volume-bar-transform": String(volume) + "%" } as any} setValue={setVolume}/>
                <MiniplayerIcon />
                <FullscreenIcon />
            </div>
        </div>
    );
}

export default Sidebar;
