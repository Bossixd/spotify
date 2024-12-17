import "./MainPlaylist.css";

import PauseIcon from "../../../assets/svg/pause-icon";
import PlayIcon from "../../../assets/svg/play-icon";
import TripleDotIcon from "../../../assets/svg/triple-dot-icon";
import MenuIcon from "../../../assets/svg/menu-icon";
import ClockIcon from "../../../assets/svg/clock-icon";

import playlist from "../../../data/playlist.json";

function MainPlaylistBody() {
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
                    <div>Album</div>
                    <div>Date Added</div>
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
                            <div className="title">
                                <img
                                    className="searchbar-search-item-image"
                                    src={require("../../../assets/alan-walker.jpg")}
                                    alt="Logo"
                                />
                                <span>{item.title}</span>
                            </div>
                            <div>
                                <span>{item.album}</span>
                            </div>
                            <div>
                                <span>{item.dateAdded}</span>
                            </div>
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
