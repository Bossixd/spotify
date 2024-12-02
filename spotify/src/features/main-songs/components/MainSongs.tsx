// import { useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRecs from "./MainSongsRecs";

function MainSongs() {
    return (
        <div className="main-songs">
            <MainSongsHeader /> {/* Fixed at the TOP!!!!! */}
            <div className="main-songs-main">
                <div className="spacer"/>
                <MainSongsItems />
                <MainSongsRecs />
            </div>
        </div>
    );
}

export default MainSongs;