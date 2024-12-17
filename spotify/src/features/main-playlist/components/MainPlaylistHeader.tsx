import "./MainPlaylist.css";
import QuadImage from "../../components/QuadImage";

function MainPlaylistHeader() {
    return (
        <div className="main-playlist-header">
            <div className="main-playlist-image">
                <QuadImage />
            </div>
            <div className="main-playlist-info">
                <div className="main-playlist-info-type">Playlist</div>
                <div className="main-playlist-info-name">Hehe</div>
                <div className="main-playlist-info-detail">
                    <div className="main-playlist-info-profile">
                        <img
                            className="main-playlist-info-profile-image"
                            src={require("../../../assets/alan-walker.jpg")}
                        />
                        {"Boss"}
                    </div>
                    •<div className="main-playlist-info-time">52 songs, about 2 hr 30 min</div>
                </div>
            </div>
        </div>
    );
}

export default MainPlaylistHeader;