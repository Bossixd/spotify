import "./MainSongs.css";
import MainSongsRecSection from "./MainSongsRecSection";

import recommendations from "../../../data/recommendations.json";

function MainSongsRecs() {
    return (
        <div className="main-songs-recs">
            <MainSongsRecSection title={"Made for Boss"} recommendations={recommendations}/>
        </div>
    );
}

export default MainSongsRecs;