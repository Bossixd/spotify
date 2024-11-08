import "./Sidebar.css";
import data from "../../../data/search.json";

import SidebarSearch from "./SidebarSearch";
import SidebarSearchItem from "./SidebarSearchItem";

function SidebarSearchArea() {
    return (
        <div className="sidebar-search-area">
            <SidebarSearch />
            <div className="sidebar-search-results">
                {data.map((item) => (
                    <SidebarSearchItem
                        title={item.title}
                        pinned={item.pinned}
                        type={item.type}
                        comment={item.comment}
                        imagePath={item.imagePath}
                    />
                ))}
            </div>
        </div>
    );
}

export default SidebarSearchArea;
