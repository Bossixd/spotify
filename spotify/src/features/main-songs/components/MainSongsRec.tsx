import "./MainSongs.css";

import image from "../../../assets/alan-walker.jpg";
import { useEffect } from "react";

interface Props {
    title: string;
    recommendations: {
        imagePath: string;
        description: string;
    }[];
}

function MainSongsRec({ title, recommendations }: Props) {
    useEffect(() => {
        // Set the value of the CSS variable
        document.documentElement.style.setProperty("--image-width", "250px");
    }, []);
    return (
        <div className="main-songs-rec-section">
            <div className="main-songs-rec-title">{title}</div>
            <div className="main-songs-rec-items">
                {recommendations.map((item) => (
                    <div className="main-songs-rec-item">
                        <img
                            className="main-songs-rec-item-image"
                            src={image}
                        ></img>
                        <span className="main-songs-rec-item-detail">
                            {item.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainSongsRec;
