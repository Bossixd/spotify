import "./Sidebar.css";
import data from "../../../data/search.json";

import SidebarSearch from "./SidebarSearch";
import SidebarSearchItem from "./SidebarSearchItem";

interface Props {
    sideBar: boolean;
}

function SidebarSearchArea({ sideBar }: Props) {
    return (
        <div className="sidebar-search-area">
            {sideBar && <SidebarSearch />}
            <div className="sidebar-search-results">
                {data.map((item) => (
                    <SidebarSearchItem
                        title={item.title}
                        pinned={item.pinned}
                        type={item.type}
                        comment={item.comment}
                        imagePath={item.imagePath}
                        sideBar={sideBar}
                    />
                ))}
            </div>
        </div>
    );
}

export default SidebarSearchArea;
