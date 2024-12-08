import "./NowPlaying.css";

import FollowButton from "../../follow-button/index";

import credits from "../../../data/credits.json";

interface Props {
    metadata: any;
}

function NowPlayingCredits({ metadata }: Props) {
    return (
        <div className="nowplaying-credits">
            <div className="nowplaying-credits-credits">
                <div>Credits</div>
                <div className="show-all">Show all</div> {/* Might add this as a new component*/}
            </div>
            {credits.map((person) => (
                <div className="nowplaying-credits-person">
                    <div className="nowplaying-credits-person-info">
                        <div className="name">{metadata && metadata.name}</div>
                        <div className="description">{person.description}</div>
                    </div>
                    {person.followable && <FollowButton />}
                </div>
            ))}
        </div>
    );
}

export default NowPlayingCredits;
