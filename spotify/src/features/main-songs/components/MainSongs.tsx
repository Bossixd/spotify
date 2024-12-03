import { useRef, useEffect, useState } from "react";
import "./MainSongs.css";
import MainSongsHeader from "./MainSongsHeader";
import MainSongsItems from "./MainSongsItems";
import MainSongsRec from "./MainSongsRec";

import recommendations from "../../../data/recommendations.json";

function MainSongs() {
    const mainRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const resizeObserver = new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
        console.log(width);
    });

    useEffect(() => {
        const mainElement = document.querySelector(".main-songs");
        console.log(mainElement);
        if (mainElement) {
            resizeObserver.observe(mainElement);
        }
    }, [resizeObserver]);

    useEffect(() => {
        if (mainRef && mainRef.current) {
            setWidth(mainRef.current.offsetWidth);
            console.log(mainRef.current.offsetWidth);
        }
        console.log("Here");
    }, []);

    return (
        <div className="main-songs" ref={mainRef}>
            <MainSongsHeader /> {/* Fixed at the TOP!!!!! */}
            <div className="main-songs-main">
                <div className="spacer" />
                <MainSongsItems />
                <MainSongsRec
                    title="Recommended for you"
                    recommendations={recommendations}
                />
                <MainSongsRec
                    title="Recommended for you"
                    recommendations={recommendations}
                />
                <MainSongsRec
                    title="Recommended for you"
                    recommendations={recommendations}
                />
                <MainSongsRec
                    title="Recommended for you"
                    recommendations={recommendations}
                />
            </div>
        </div>
    );
}

export default MainSongs;
