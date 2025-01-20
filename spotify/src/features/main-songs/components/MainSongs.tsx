import { useRef, useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRec from "./MainSongsRec";

interface Props {
    width: number;
    recommendations: any;
    allImages: any;
    setAllImages: (allImages: any) => void;
    allMetadata: any;
    setAllMetadata: (allMetadata: any) => void;
    setCurrentSongId: (currentSongId: string) => void;
}

function MainSongs({
    width,
    recommendations,
    allImages,
    setAllImages,
    allMetadata,
    setAllMetadata,
    setCurrentSongId,
}: Props) {
    return (
        <div className="main-songs">
            <MainSongsHeader />
            <div className="main-songs-main">
                <MainSongsItems />
                {recommendations.map((recommendation: any) => (
                    <MainSongsRec
                        recommendation={recommendation}
                        width={width}
                        allImages={allImages}
                        setAllImages={setAllImages}
                        allMetadata={allMetadata}
                        setAllMetadata={setAllMetadata}
                        setCurrentSongId={setCurrentSongId}
                    />
                ))}
                <div className="spacer" />
            </div>
        </div>
    );
}

export default MainSongs;
