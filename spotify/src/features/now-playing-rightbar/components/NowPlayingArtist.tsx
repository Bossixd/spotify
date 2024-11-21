import "./NowPlaying.css";

import songAuthor from "../../../assets/song-author.png";

import FollowButton from "../../follow-button/index";

interface Props {
    metadata: any;
}

function NowPlayingAuthor({ metadata }: Props) {
    return (
        <div className="nowplaying-author">
            <div className="nowplaying-author-about">About the author</div>
            <img src={songAuthor} />
            <div className="nowplaying-author-description">
                <div className="nowplaying-author-description-name">
                    {metadata.name}
                </div>
                <div className="nowplaying-author-description-count">
                    <div>{"13,000,000"} monthly listeners</div>
                    <FollowButton />
                </div>
                <span className="nowplaying-author-description-description">
                    {metadata.about}
                </span>
            </div>
        </div>
    );
}

export default NowPlayingAuthor;
