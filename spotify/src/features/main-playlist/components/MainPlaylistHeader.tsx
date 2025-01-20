import "./MainPlaylist.css";
import QuadImage from "../../components/QuadImage";
import { useEffect, useState } from "react";

interface Props {
    width: number;
}

function MainPlaylistHeader({ width }: Props) {
    const [imageWidth, setImageWidth] = useState(230);
    const [fontSize, setFontSize] = useState(96);

    useEffect(() => {
        setImageWidth(width / 2);
        setFontSize((96 * Math.min(imageWidth, 172)) / 172);
        console.log(fontSize);
    }, [width]);

    return (
        <div
            className="main-playlist-header"
            style={{ height: Math.min(imageWidth, 250) + 20 }}
        >
            <div
                className="main-playlist-image"
                style={{ width: imageWidth, height: imageWidth }}
            >
                <QuadImage />
            </div>
            <div className="main-playlist-info">
                <div className="main-playlist-info-type">Playlist</div>
                <div
                    className="main-playlist-info-name"
                    style={{
                        height: (imageWidth < 172 ? Math.min(fontSize, 96) : "100%"),
                        fontSize: (imageWidth < 172 ? fontSize : 96),
                    }}
                >
                    Hehe
                </div>
                <div className="main-playlist-info-detail">
                    <div className="main-playlist-info-profile">
                        <img
                            className="main-playlist-info-profile-image"
                            src={require("../../../assets/alan-walker.jpg")}
                        />
                        {"Boss"}
                    </div>
                    •
                    <div className="main-playlist-info-time">
                        52 songs, about 2 hr 30 min
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPlaylistHeader;
