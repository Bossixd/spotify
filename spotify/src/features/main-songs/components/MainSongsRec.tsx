import "./MainSongs.css";

import image from "../../../assets/alan-walker.jpg";
import { useEffect, useState } from "react";
import { resolveObjectURL } from "buffer";

import get_song_image from "../../../utils/get_song_image";
import get_song_metadata from "../../../utils/get_song_metadata";

interface Props {
    recommendation: any;
    width: number;
    allImages: any;
    setAllImages: (allImages: any) => void;
    allMetadata: any;
    setAllMetadata: (allMetadata: any) => void;
}

function MainSongsRec({
    recommendation,
    width,
    allImages,
    setAllImages,
    allMetadata,
    setAllMetadata,
}: Props) {
    const [items, setItems] = useState(1);
    const [recommendationSongs, setRecommendationSongs] = useState([]);

    useEffect(() => {
        if (recommendation != undefined && recommendation.songs != undefined) {
            setItems(
                Math.min(
                    recommendation.songs.length,
                    Math.round((width - 32) / 160)
                )
            );

            setRecommendationSongs(recommendation.songs);
        }
        document.documentElement.style.setProperty(
            "--image-width",
            `${Math.min(Math.floor(width / items - 32), 218)}px`
        );
        document.documentElement.style.setProperty(
            "--rec-width",
            `${Math.min(Math.floor(width / items), 250)}px`
        );
    }, [recommendation, width, items]);

    useEffect(() => {
        recommendationSongs.forEach((songId: string) => {
            get_song_metadata(songId, setAllMetadata);
        })
    }, [recommendationSongs]);

    useEffect(() => {
        Object.keys(allMetadata).forEach((id: any) => {
            if (!allImages[id]) {
                get_song_image(id, allMetadata[id].image_link, setAllImages);
            }
        })
    }, [allMetadata]);

    return (
        <div className="main-songs-rec-section">
            <div className="main-songs-rec-title">
                {recommendation != null && recommendation.title}
            </div>
            <div className="main-songs-rec-items">
                {recommendationSongs.slice(0, items).map((songId: string) => (
                    <div className="main-songs-rec-item">
                        <img
                            className="main-songs-rec-item-image"
                            src={allImages[songId] != undefined ? allImages[songId] : ""}
                        ></img>
                        <span className="main-songs-rec-item-detail">
                            {allMetadata[songId] != undefined ? allMetadata[songId].title : ""}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainSongsRec;
