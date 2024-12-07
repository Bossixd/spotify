import { useRef, useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRec from "./MainSongsRec";

import recommendations from "../../../data/recommendations.json";

import useWindowDimensions from "../../../utils/use_window_dimensions";

interface Props {
    nowPlayingBarOpen: boolean;
    sideBarOpen: boolean;
    recommendations: any;
}

function MainSongs({ nowPlayingBarOpen, sideBarOpen, recommendations }: Props) {
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

    console.log(recommendations);

    return (
        <div className="main-songs">
            <MainSongsHeader />
            <div className="main-songs-main">
                <MainSongsItems />
                {recommendations.forEach((recommendation: any) => (
                    <MainSongsRec
                        recommendation={recommendation}
                        width={width}
                    />
                ))}
                <MainSongsRec
                    // title="Recommended for you"
                    recommendation={recommendations[0]}
                    width={width}
                />
                <div className="spacer" />
            </div>
        </div>
    );
}

export default MainSongs;
