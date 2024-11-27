// import { useEffect, useState } from "react";
import "./MainSongs.css";

import SelectButton from "../../components/SelectButton";

function MainSongsHeader() {
    return (
        <div className="main-songs-header">
            <SelectButton title="Playlists" />
        </div>
    );
}

export default MainSongsHeader;