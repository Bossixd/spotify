import "./MainSongs.css";

interface Props {
    title: string;
}

function MainSongsItem({ title }: Props) {
    return (
        <div className="main-songs-item">
            <div className="main-songs-item-image"></div>
            <div className="main-songs-item-detail">
                {title}
            </div>
        </div>
    );
}

export default MainSongsItem;