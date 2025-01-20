import "./MainPlaylist.css";

import PauseIcon from "../../../assets/svg/pause-icon";
import PlayIcon from "../../../assets/svg/play-icon";
import TripleDotIcon from "../../../assets/svg/triple-dot-icon";
import MenuIcon from "../../../assets/svg/menu-icon";
import ClockIcon from "../../../assets/svg/clock-icon";

import playlist from "../../../data/playlist.json";
import { useEffect, useState } from "react";
import { title } from "process";

interface Props {
    width: number;
}

function MainPlaylistBody({ width }: Props) {
    const [includeAlbum, setIncludeAlbum] = useState(true);
    const [includeDate, setIncludeDate] = useState(true);

    const [titleWidth, setTitleWidth] = useState(256);
    const [albumWidth, setAlbumWidth] = useState(146);
    const [dateWidth, setDateWidth] = useState(146);

    useEffect(() => {
        if (width <= 542) setIncludeAlbum(false);
        else setIncludeAlbum(true);

        if (width <= 760) setIncludeDate(false);
        else setIncludeDate(true);
    }, [width]);

    useEffect(() => {
        const w = width - 50 - 12 - 16 - 16 - 12 - 12 - 12;
        if (includeAlbum && includeDate) {
            setTitleWidth(w / 2);
            setAlbumWidth(w / 4);
            setDateWidth(w / 4 - 24);
        } else if (includeAlbum) {
            setTitleWidth(w / 3 * 2);
            setAlbumWidth(w / 3);
        } else {
            setTitleWidth(w);
        }
    }, [width, includeAlbum, includeDate])

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--column-widths",
            `12px ${titleWidth}px ` +
                (includeAlbum ? `${albumWidth}px ` : "") +
                (includeDate ? `${dateWidth}px ` : "") +
                "50px"
        );
    }, [titleWidth, albumWidth, dateWidth])

    return (
        <div className="main-playlist-body">
            <div className="main-playlist-body-header">
                <div className="main-playlist-body-header-left">
                    <div className="main-playlist-body-play-button">
                        <PlayIcon />
                    </div>
                    <div className="main-playlist-body-dot-button">
                        <TripleDotIcon />
                    </div>
                </div>
                <div className="main-playlist-body-header-right">
                    List
                    <MenuIcon />
                </div>
            </div>
            <div className="main-playlist-body-songs">
                <div className="main-playlist-body-songs-header">
                    <div>#</div>
                    <div>Title</div>
                    {includeAlbum && <div>Album</div>}
                    {includeDate && <div>Date Added</div>}
                    <div>
                        <ClockIcon />
                    </div>
                </div>
                <div className="main-playlist-body-songs-items">
                    {playlist.map((item, index) => (
                        <div className="main-playlist-body-songs-item">
                            <div>
                                <span>{index + 1}</span>
                            </div>
                            <div>
                                <img
                                    className="main-playlist-body-songs-item-image"
                                    src={require("../../../assets/alan-walker.jpg")}
                                    alt="Logo"
                                />
                                <div className="main-playlist-body-songs-item-detail">
                                    <span className="title">{item.title}</span>
                                    <span>{item.author}</span>
                                </div>
                            </div>
                            {includeAlbum && (
                                <div>
                                    <span>{item.album}</span>
                                </div>
                            )}
                            {includeDate && (
                                <div>
                                    <span>{item.dateAdded}</span>
                                </div>
                            )}
                            <div>
                                <span>{item.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPlaylistBody;
