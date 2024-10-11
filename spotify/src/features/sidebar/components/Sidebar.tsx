import "./Sidebar.css";

import SidebarTop from "./SidebarTop";
import SidebarNav from "./SidebarNav";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarTop />
            <SidebarNav />
        </div>
    );
}


export default Sidebar;
