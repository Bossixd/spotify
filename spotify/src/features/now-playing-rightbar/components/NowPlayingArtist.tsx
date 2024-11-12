import "./NowPlaying.css";

import songAuthor from "../../../assets/song-author.png";

import FollowButton from "../../follow-button/index"

function NowPlayingAuthor() {
    return (
        <div className="nowplaying-author">
            <div className="nowplaying-author-about">About the author</div>
            <img src={songAuthor} />
            <div className="nowplaying-author-description">
                <div className="nowplaying-author-description-name">
                    {"Rudeus Greyrat"}
                </div>
                <div className="nowplaying-author-description-count">
                    <div>{"13,000,000"} monthly listeners</div>
                    <FollowButton />
                </div>
                <span className="nowplaying-author-description-description">
                    {
                        "The series is about a jobless overweight man who dies after having a withdrawn life and reincarnates in a fantasy world while keeping his memories of his previous life, determined to enjoy his new life without regrets under the name Rudeus Greyrat."
                    }
                </span>
            </div>
        </div>
    );
}

export default NowPlayingAuthor;
