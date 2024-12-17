import "./QuadImage.css";

interface Props {
}

function QuadImage({}: Props) {
    return (
        <div className="quad-image">
            <img className="test" src={require("../../assets/alan-walker.jpg")}/>
            <img className="test" src={require("../../assets/alan-walker.jpg")}/>
            <img className="test" src={require("../../assets/alan-walker.jpg")}/>
            <img className="test" src={require("../../assets/alan-walker.jpg")}/>
        </div>
    );
}

export default QuadImage;
