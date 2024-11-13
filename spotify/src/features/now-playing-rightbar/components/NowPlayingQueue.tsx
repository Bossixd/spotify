import "./NowPlaying.css";

function NowPlayingQueue() {
    return (
        <div className="nowplaying-queue">
            <div className="nowplaying-queue-queue">
                <div>Next in queue</div>
                <div className="open-queue">Open queue</div>{" "}
                {/* Might add this as a new component*/}
            </div>
            <div className="nowplaying-queue-song">
                <img
                    className="nowplaying-queue-image"
                    src={require("../../../assets/alan-walker.jpg")}
                    alt="Logo"
                />
                <div className="nowplaying-queue-title">
                    <div className="title">Naruto Shippuden</div>
                    <div className="author">Masashi Kishimoto</div>
                </div>
            </div>
        </div>
    );
}

export default NowPlayingQueue;
