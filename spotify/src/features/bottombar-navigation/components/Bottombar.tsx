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
import UpIcon from "../../../assets/svg/up-icon";
import DownIcon from "../../../assets/svg/down-icon";

import InputBar from "./InputBar";

import number_to_string from "../../../utils/second_to_string";

interface Props {
    playing: boolean;
    setPlaying: (play: boolean) => void;
    progress: number;
    setProgress: (progress: number) => void;
    maxProgress: number;
    metadata: any;
    imageUrl: string;
    nowPlayingBar: boolean;
    setNowPlayingBar: (playing: boolean) => void;
}

function Sidebar({
    playing,
    setPlaying,
    progress,
    setProgress,
    maxProgress,
    metadata,
    imageUrl,
    nowPlayingBar,
    setNowPlayingBar,
}: Props) {
    const [volume, setVolume] = useState(50);
    const [songImageHover, setSongImageHover] = useState(false);

    return (
        <div className="bottombar">
            <div className="bottombar-song">
                <div>
                    <img
                        onClick={() => setNowPlayingBar(!nowPlayingBar)}
                        onMouseEnter={() => setSongImageHover(true)}
                        onMouseLeave={() => setSongImageHover(false)}
                        className="bottombar-song-image"
                        src={imageUrl}
                    ></img>
                    {songImageHover && (
                        <div
                            className="bottombar-song-image-collapse"
                            onClick={() => setNowPlayingBar(!nowPlayingBar)}
                            onMouseEnter={() => setSongImageHover(true)}
                            onMouseLeave={() => setSongImageHover(false)}
                        >
                            {nowPlayingBar ? <DownIcon /> : <UpIcon />}
                        </div>
                    )}
                </div>
                <div className="bottombar-song-details">
                    <div className="bottombar-song-details-title">
                        {metadata && metadata.title}
                    </div>
                    <div className="bottombar-song-details-author">
                        {metadata && metadata.name}
                    </div>
                </div>
            </div>
            <div className="bottombar-audio-controls">
                <div className="bottombar-audio-controls-player">
                    <ShuffleIcon />
                    <LastSongIcon />
                    <div
                        className="bottombar-audio-controls-player-button"
                        onClick={() => setPlaying(!playing)}
                    >
                        <PlayIcon />
                    </div>
                    <NextSongIcon />
                    <RepeatIcon />
                </div>
                <div className="bottombar-audio-controls-progress">
                    {number_to_string(progress)}{" "}
                    <InputBar
                        style={
                            {
                                "--progress-bar-transform":
                                    String((progress / maxProgress) * 100) +
                                    "%",
                            } as any
                        }
                        setValue={setProgress}
                        value={progress}
                    />{" "}
                    {number_to_string(maxProgress)}
                </div>
            </div>
            <div className="bottombar-controls">
                <NowPlayingIcon />
                <LyricsIcon />
                <QueueIcon />
                <ConnectToDeviceIcon />
                <VolumeIcon />
                <InputBar
                    style={
                        {
                            "--volume-bar-transform": String(volume) + "%",
                        } as any
                    }
                    setValue={setVolume}
                />
                <MiniplayerIcon />
                <FullscreenIcon />
            </div>
        </div>
    );
}

export default Sidebar;
