import "./Sidebar.css";

import LibraryIcon from "../../../assets/svg/library-icon";
import AddIcon from "../../../assets/svg/add-icon";
import ArrowIcon from "../../../assets/svg/arrow-icon";

function SidebarTop() {
    return (
        <div className="sidebar-top">
            <button className="sidebar-your-library-bounding-box">
                <div className="library-logo-bounding-box">
                    <LibraryIcon/>
                </div>
                <div className="sidebar-your-library-text">Your Library</div>
            </button>
            <div className="sidebar-add-arrow-bounding-box">
                <div className="sidebar-button">
                    <AddIcon/>
                </div>
                <div className="sidebar-button">
                    <ArrowIcon/>
                </div>
            </div>
        </div>
    );
}


export default SidebarTop;