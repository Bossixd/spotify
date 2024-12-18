import "./MainPlaylist.css";

import MainPlaylistHeader from "./MainPlaylistHeader";
import MainPlaylistBody from "./MainPlaylistBody";
import { useEffect } from "react";

interface Props {
    width: number;
}

function MainPlaylist({ width }: Props) {
    return (
        <div className="main-playlist">
            <div className="main-playlist-main">
                {/* <MainPlaylistHeader /> */}
                <MainPlaylistBody 
                    width={width}
                />
            </div>
        </div>
    );
}

export default MainPlaylist;
