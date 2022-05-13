import React from "react";
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <button className="sideDrawerCloseButton" onClick={props.drawerClickHandler}>x</button>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">About</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;