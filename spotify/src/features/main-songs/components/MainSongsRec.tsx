import "./MainSongs.css";

import image from "../../../assets/alan-walker.jpg";
import { useEffect, useState } from "react";
import { resolveObjectURL } from "buffer";

interface Props {
    recommendation: any;
    width: number;
}

function MainSongsRec({ recommendation, width }: Props) {
    const [items, setItems] = useState(0);
    const [recommendationItems, setRecommendationItems] = useState([]);

    useEffect(() => {
        // setItems(Math.min(recommendation.songs.length, Math.round((width - 32) / 160)));
        document.documentElement.style.setProperty(
            "--image-width",
            `${Math.floor(width / items - 32)}px`
        );
        document.documentElement.style.setProperty(
            "--rec-width",
            `${Math.floor(width / items)}px`
        );
    }, [width]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--image-width",
            `${Math.floor(width / items - 32)}px`
        );
        document.documentElement.style.setProperty(
            "--rec-width",
            `${Math.floor(width / items)}px`
        );
    }, [items]);

    useEffect(() => {
        if (recommendation != undefined) {
            console.log(recommendation);
            setRecommendationItems(
                recommendation.songs.slice(0, items).map((item: string) => (
                    <div className="main-songs-rec-item">
                        {item}
                        {/* <img
                            className="main-songs-rec-item-image"
                            src={image}
                        ></img>
                        <span className="main-songs-rec-item-detail">{item}</span> */}
                    </div>
                ))
            );
        }
    }, [recommendation]);

    return (
        <div className="main-songs-rec-section">
            <div className="main-songs-rec-title">
                {recommendation != null && recommendation.title}
            </div>
            <div className="main-songs-rec-items">{recommendationItems}</div>
        </div>
    );
}

export default MainSongsRec;
