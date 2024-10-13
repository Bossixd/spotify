import { useEffect, useState, useRef } from "react";
import "./Sidebar.css";

import SearchIcon from "../../../assets/svg/search-icon";
import RecentIcon from "../../../assets/svg/recent-icon";

function SidebarSearch() {
    const [searching, setSearching] = useState(false);
    const searchButtonRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searching) {
            inputRef.current!.focus();
        }
    }, [searching])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchButtonRef.current &&
                !searchButtonRef.current.contains(event.target as HTMLElement)
            ) {
                setSearching(false);
            }
        };

        document.addEventListener("mouseup", (event) =>
            handleClickOutside(event)
        );
        return () => {
            document.removeEventListener("mouseup", (event) =>
                handleClickOutside(event)
            );
        };
    }, []);

    return (
        <div className="sidebar-search">
            <div
                ref={searchButtonRef}
                className={`${searching ? "sidebar-bounding-box-searching" : ""}`}
            >
                <button
                    className="sidebar-button-search"
                    onMouseDown={() => setSearching(true)}
                >
                    <SearchIcon />
                </button>
                <form
                    className={`sidebar-searchbar-form ${!searching ? "hidden" : ""}`}>
                    <input
                        className="sidebar-searchbar"
                        type="text"
                        placeholder={"Search in Your Library"}
                        ref={inputRef}
                    />
                </form>
            </div>
            <div className="sidebar-recent">
                <div className="sidebar-recent-text">
                    {!searching && "Recents"}
                </div>
                <RecentIcon />
            </div>
        </div>
    );
}

export default SidebarSearch;
