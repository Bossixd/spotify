import "./NowPlaying.css";

import { useRef, useState } from "react";

import NowPlayingHeader from "./NowPlayingHeader";
import NowPlayingTitle from "./NowPlayingTitle";

import songBackground from "../../../assets/song-background.png";
import NowPlayingArtist from "./NowPlayingArtist";
import NowPlayingCredits from "./NowPlayingCredits";
import NowPlayingQueue from "./NowPlayingQueue";

function NowPlaying() {
    const elementRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    return (
        <div>
            <NowPlayingHeader scroll={scroll}/>
            <div className="nowplaying" ref={elementRef} onScroll={() => setScroll(elementRef.current!.scrollTop)}>
                <img className="nowplaying-image" src={songBackground} alt="Song Image"/> {/* Need to change this depending on song image */}
                <div className="nowplaying-seperator-top" />
                <NowPlayingTitle />
                <NowPlayingArtist />
                <NowPlayingCredits />
                <NowPlayingQueue />
                <div className="nowplaying-seperator-bottom"/>
            </div>
        </div>
    );
}

export default NowPlaying;
