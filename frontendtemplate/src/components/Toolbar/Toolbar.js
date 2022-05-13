import React from "react";
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li><a href="/">Producst</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;