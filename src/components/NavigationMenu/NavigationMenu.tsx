import React, { useState } from "react";
import './NavigationMenu.scss'

export const NavigationMenu = () => {
    const [navigationValue, setNavigationValue] = useState(false)
    const getClassButton = (event: any): void => {
        event.target.className = 'navigation-menu__nav-item'
        event.target.className += ' qwe'
    }
    return (
        <div className="navigation-menu">
            <button className="navigation-menu__nav-item" onClick={getClassButton}>All</button>
            <button className="navigation-menu__nav-item" onClick={getClassButton}>My favorites</button>
            <button className="navigation-menu__nav-item" onClick={getClassButton}>Popular</button>
        </div>
    )
}