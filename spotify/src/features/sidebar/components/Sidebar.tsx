import "./Sidebar.css";

import SidebarTop from "./SidebarTop";
import SidebarNav from "./SidebarNav";
import SidebarSearchArea from "./SidebarSearchArea";

interface Props {
    sideBar: boolean;
    setSideBar: (sideBar: boolean) => void;
}

function Sidebar({ sideBar, setSideBar }: Props) {
    return (
        <div className="sidebar">
            <SidebarTop sideBar={sideBar} setSideBar={setSideBar} />
            {sideBar && <SidebarNav />}
            <SidebarSearchArea sideBar={sideBar} />
        </div>
    );
}

export default Sidebar;
