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

function Sidebar() {
    const [volumeSelected, setVolumeSelected] = useState(false);
    const [volume, setVolume] = useState(50);
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
            <div className="bottombar-controls">
                <NowPlayingIcon />
                <LyricsIcon />
                <QueueIcon />
                <ConnectToDeviceIcon />
                <VolumeIcon />
                <input
                    className="bottombar-volume"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    onChange={(e) => {
                        setVolume(parseInt(e.target.value));
                    }}
                    style={{'--progress-bar-transform': String(volume) + "%"} as any}
                />
                <MiniplayerIcon />
                <FullscreenIcon />
            </div>
        </div>
    );
}

export default Sidebar;
