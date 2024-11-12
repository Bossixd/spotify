import "./NowPlaying.css";

import TripleDotIcon from "../../../assets/svg/triple-dot-icon";
import CrossIcon from "../../../assets/svg/cross-icon";

interface Props {
    scroll: number;
}

function NowPlayingSong({scroll}: Props) {
    return (
        <div className={"nowplaying-header-div " + (scroll > 100 ? "transparent" : "")}>
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
