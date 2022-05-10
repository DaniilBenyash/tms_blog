import React from "react";
import './NavigationMenu.scss'

export const NavigationMenu = () => {
    return (
        <div className="navigation-menu">
            <button className="navigation-menu__nav-item">All</button>
            <button className="navigation-menu__nav-item">My favorites</button>
            <button className="navigation-menu__nav-item">Popular</button>
        </div>
    )
}