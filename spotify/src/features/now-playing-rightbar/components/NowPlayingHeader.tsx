import "./NowPlaying.css";

import TripleDotIcon from "../../../assets/svg/triple-dot-icon";
import CrossIcon from "../../../assets/svg/cross-icon";

function NowPlayingSong() {
    return (
        <div className="nowplaying-header-div">
            <div className="nowplaying-header-div-text">
                <div>Mushoku Tensei</div>
                <div>
                    <TripleDotIcon />
                    <CrossIcon />
                </div>
            </div>
        </div>
    );
}

export default NowPlayingSong;
