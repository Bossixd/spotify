import "./Sidebar.css";

import SidebarNavButton from "./SidebarNavButton"

function SidebarNav() {
    const sampleData = ["Playlists", "Albums"]
    return (
        <div className="sidebar-nav">
            {sampleData.map((title) => <SidebarNavButton title={title} callback={() => {console.log(title)}} />)}
        </div>
    );
}


export default SidebarNav;
