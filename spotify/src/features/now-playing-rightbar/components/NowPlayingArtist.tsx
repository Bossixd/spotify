import "./NowPlaying.css";

import FollowButton from "../../follow-button/index";

interface Props {
    metadata: any;
    profileUrl: string;
}

function NowPlayingAuthor({ metadata, profileUrl }: Props) {
    return (
        <div className="nowplaying-author">
            <div className="nowplaying-author-about">About the author</div>
            <img src={profileUrl} />
            <div className="nowplaying-author-description">
                <div className="nowplaying-author-description-name">
                    {metadata && metadata.name}
                </div>
                <div className="nowplaying-author-description-count">
                    <div>{"13,000,000"} monthly listeners</div>
                    <FollowButton />
                </div>
                <span className="nowplaying-author-description-description">
                    {metadata && metadata.about}
                </span>
            </div>
        </div>
    );
}

export default NowPlayingAuthor;
