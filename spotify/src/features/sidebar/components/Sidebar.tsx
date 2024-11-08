import "./Sidebar.css";

import SidebarTop from "./SidebarTop";
import SidebarNav from "./SidebarNav";
import SidebarSearchArea from "./SidebarSearchArea";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarTop />
            <SidebarNav />
            <SidebarSearchArea />
        </div>
    );
}


export default Sidebar;
