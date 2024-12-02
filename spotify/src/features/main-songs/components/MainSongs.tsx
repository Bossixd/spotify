// import { useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRec from "./MainSongsRec";

import recommendations from "../../../data/recommendations.json"

function MainSongs() {
    return (
        <div className="main-songs">
            <MainSongsHeader /> {/* Fixed at the TOP!!!!! */}
            <div className="main-songs-main">
                <div className="spacer"/>
                <MainSongsItems />
                <MainSongsRec title="Recommended for you" recommendations={recommendations}/>
                <MainSongsRec title="Recommended for you" recommendations={recommendations}/>
                <MainSongsRec title="Recommended for you" recommendations={recommendations}/>
                <MainSongsRec title="Recommended for you" recommendations={recommendations}/>
            </div>
        </div>
    );
}

export default MainSongs;