import "./Sidebar.css";

import SelectButton from "../../components/SelectButton"

function SidebarNav() {
    const sampleData = ["Playlists", "Albums"]
    return (
        <div className="sidebar-nav">
            {sampleData.map((title) => <SelectButton title={title} callback={() => {console.log(title)}} />)}
        </div>
    );
}


export default SidebarNav;
