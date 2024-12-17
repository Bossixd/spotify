import { useRef, useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRec from "./MainSongsRec";

import useWindowDimensions from "../../../utils/use_window_dimensions";

interface Props {
    nowPlayingBarOpen: boolean;
    sideBarOpen: boolean;
    recommendations: any;
    allImages: any;
    setAllImages: (allImages: any) => void;
    allMetadata: any;
    setAllMetadata: (allMetadata: any) => void;
    setCurrentSongId: (currentSongId: string) => void;
}

function MainSongs({
    nowPlayingBarOpen,
    sideBarOpen,
    recommendations,
    allImages,
    setAllImages,
    allMetadata,
    setAllMetadata,
    setCurrentSongId,
}: Props) {
    const [width, setWidth] = useState(0);
    const windowDimensions = useWindowDimensions();

    useEffect(() => {
        setWidth(
            windowDimensions.width -
                (sideBarOpen ? 420 : 72) -
                (nowPlayingBarOpen ? 420 : 0) -
                16 -
                10 -
                16 -
                32
        );
    }, [windowDimensions, sideBarOpen, nowPlayingBarOpen]);

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
