import "./NowPlaying.css";

import TripleDotIcon from "../../../assets/svg/triple-dot-icon";
import CrossIcon from "../../../assets/svg/cross-icon";

interface Props {
    scroll: number;
    setNowPlayingBar: (play: boolean) => void;
}

function NowPlayingHeader({ scroll, setNowPlayingBar }: Props) {
    return (
        <div
            className={
                "nowplaying-header-div " + (scroll > 100 ? "transparent" : "")
            }
        >
            <div className="nowplaying-header-div-text">
                <div>Mushoku Tensei</div>
                <div className="nowplaying-header-button-holder">
                    <div className="nowplaying-header-button">
                        <button>
                            <TripleDotIcon />
                        </button>
                    </div>
                    <div
                        className="nowplaying-header-button"
                        onClick={() => setNowPlayingBar(false)}
                    >
                        <CrossIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NowPlayingHeader;
