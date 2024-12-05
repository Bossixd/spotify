import "./MainSongs.css";

import image from "../../../assets/alan-walker.jpg";
import { useEffect, useState } from "react";

interface Props {
    title: string;
    recommendations: {
        imagePath: string;
        description: string;
    }[];
    width: number;
}

function MainSongsRec({ title, recommendations, width }: Props) {
    const [items, setItems] = useState(0);

    useEffect(() => {
        setItems(Math.min(recommendations.length, Math.round((width - 32) / 160)));
        document.documentElement.style.setProperty("--image-width", `${Math.floor(width/items - 32)}px`);
        document.documentElement.style.setProperty("--rec-width", `${Math.floor(width/items)}px`);
    }, [width])

    useEffect(() => {
        document.documentElement.style.setProperty("--image-width", `${Math.floor(width/items - 32)}px`);
        document.documentElement.style.setProperty("--rec-width", `${Math.floor(width/items)}px`);
    }, [items])
    return (
        <div className="main-songs-rec-section">
            <div className="main-songs-rec-title">{title}</div>
            <div className="main-songs-rec-items">
                {recommendations.slice(0, items).map((item) => (
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
