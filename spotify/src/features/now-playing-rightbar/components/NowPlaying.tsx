import "./NowPlaying.css";

import { useRef, useState } from "react";

import NowPlayingHeader from "./NowPlayingHeader";
import NowPlayingTitle from "./NowPlayingTitle";

import NowPlayingArtist from "./NowPlayingArtist";
import NowPlayingCredits from "./NowPlayingCredits";
import NowPlayingQueue from "./NowPlayingQueue";

interface Props {
    metadata: any;
    imageUrl: string
    profileUrl: string
    setNowPlayingBar: (play: boolean) => void
}

function NowPlaying({ metadata, imageUrl, profileUrl, setNowPlayingBar }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    return (
        <div>
            <NowPlayingHeader scroll={scroll} setNowPlayingBar={setNowPlayingBar}/>
            <div
                className="nowplaying"
                ref={elementRef}
                onScroll={() => setScroll(elementRef.current!.scrollTop)}
            >
                <img
                    className="nowplaying-image"
                    src={imageUrl}
                    alt="Song Image"
                />{" "}
                {/* Need to change this depending on song image */}
                <div className="nowplaying-seperator-top" />
                <NowPlayingTitle 
                    metadata={metadata}/>
                <NowPlayingArtist 
                    metadata={metadata}
                    profileUrl={profileUrl}
                />
                <NowPlayingCredits 
                    metadata={metadata}
                />
                <NowPlayingQueue />
                <div className="nowplaying-seperator-bottom"/>
            </div>
        </div>
    );
}

export default NowPlaying;
