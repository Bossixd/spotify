import "./MainPlaylist.css";

import MainPlaylistHeader from "./MainPlaylistHeader";
import MainPlaylistBody from "./MainPlaylistBody";

function MainPlaylist() {
    return (
        <div className="main-playlist">
            <div className="main-playlist-main">
                <MainPlaylistHeader />
                <MainPlaylistBody />
            </div>
        </div>
    );
}

export default MainPlaylist;
