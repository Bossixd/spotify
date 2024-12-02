import "./MainSongs.css";
import MainSongsItem from "./MainSongsItem";

function MainSongsItems() {
    return (
        <div className="main-songs-items">
            <MainSongsItem title={"Playlist #1"}/>
            <MainSongsItem title={"Playlist #2"}/>
            <MainSongsItem title={"Playlist #3"}/>
            <MainSongsItem title={"Playlist #4"}/>
            <MainSongsItem title={"Playlist #5"}/>
            <MainSongsItem title={"Playlist #6"}/>
        </div>
    );
}

export default MainSongsItems;