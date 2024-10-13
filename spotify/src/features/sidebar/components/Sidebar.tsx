import "./Sidebar.css";

import SidebarTop from "./SidebarTop";
import SidebarNav from "./SidebarNav";
import SidebarSearch from "./SidebarSearch";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarTop />
            <SidebarNav />
            <SidebarSearch />
        </div>
    );
}


export default Sidebar;
