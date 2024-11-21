import "./NowPlaying.css";

interface Props {
    metadata: any;
}

function NowPlayingTitle({ metadata }: Props) {
    return (
        <div className="nowplaying-title">
            <div className="nowplaying-title-text">
                <div className="nowplaying-title-title">{metadata.title}</div>
                <div className="nowplaying-title-author">
                    Rifujin na Magonote
                </div>
            </div>
            {/* <div></div> */}
        </div>
    );
}

export default NowPlayingTitle;
