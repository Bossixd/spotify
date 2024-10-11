import "./Sidebar.css";

interface Props {
    title: string;
    callback: () => void;
}

function SidebarNavButton(props: Props) {
    const id = "sidebar-nav-button-" + props.title;
    return (
        <button id={id} className="sidebar-nav-button" onClick={props.callback}>
            <div>{props.title}</div>
        </button>
    );
}

export default SidebarNavButton;
