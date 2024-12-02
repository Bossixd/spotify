import "./Sidebar.css";

import PinIcon from "../../../assets/svg/pin-icon";

interface SidebarSearchItemProps {
    title: string;
    pinned: boolean;
    type: string;
    comment: string;
    imagePath: string;
    sideBar: boolean;
}

function SidebarSearchItem({
    title,
    pinned,
    type,
    comment,
    imagePath,
    sideBar,
}: SidebarSearchItemProps) {
    return (
        <div className="sidebar-search-item">
            <img
                className="searchbar-search-item-image"
                src={require("../../../assets/alan-walker.jpg")}
                alt="Logo"
            />
            {sideBar && (
                <div className="searchbar-search-item-text">
                    <div className="searchbar-search-item-title">{title}</div>
                    <div className="searchbar-search-item-description">
                        {pinned ? (
                            <div className="searchbar-search-item-pin">
                                <PinIcon />
                            </div>
                        ) : null}
                        {type} • {comment}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SidebarSearchItem;
