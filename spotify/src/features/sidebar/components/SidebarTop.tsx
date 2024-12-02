import "./Sidebar.css";

import LibraryIcon from "../../../assets/svg/library-icon";
import LibraryOpenIcon from "../../../assets/svg/library-open-icon";
import AddIcon from "../../../assets/svg/add-icon";
import ArrowIcon from "../../../assets/svg/arrow-icon";

interface Props {
    sideBar: boolean;
    setSideBar: (sideBar: boolean) => void;
}

function SidebarTop({ sideBar, setSideBar }: Props) {
    return (
        <div className="sidebar-top">
            <button
                className="sidebar-your-library-bounding-box"
                onClick={() => setSideBar(!sideBar)}
            >
                <div className="library-logo-bounding-box">
                    {sideBar ? <LibraryIcon /> : <LibraryOpenIcon />}
                </div>
                {sideBar && (
                    <div className="sidebar-your-library-text">
                        Your Library
                    </div>
                )}
            </button>
            {sideBar && (
                <div className="sidebar-add-arrow-bounding-box">
                    <div className="sidebar-button">
                        <AddIcon />
                    </div>
                    <div className="sidebar-button">
                        <ArrowIcon />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SidebarTop;
