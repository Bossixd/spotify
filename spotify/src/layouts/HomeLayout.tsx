import React from "react";
import Topbar from "../features/topbar-navigation/index";
import './HomeLayout.css';

function HomeLayout() {
    return (
        <div className="grid-container">
            <div className="grid-header">
                <Topbar />
            </div>
            <div className="grid-menu">Menu</div>
            <div className="grid-main">Main</div>
            <div className="grid-right">Right</div>
            <div className="grid-footer">Footer</div>
        </div>
    );
}

export default HomeLayout;
