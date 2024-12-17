import "./MainSongs.css";

import QuadImage from "../../components/QuadImage";

interface Props {
    title: string;
}

function MainSongsItem({ title }: Props) {
    return (
        <div className="main-songs-item">
            <div className="main-songs-item-image">
                <QuadImage />
            </div>
            <div className="main-songs-item-detail">{title}</div>
        </div>
    );
}

export default MainSongsItem;
