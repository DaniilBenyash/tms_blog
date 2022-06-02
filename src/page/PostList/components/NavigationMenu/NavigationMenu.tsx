import React from "react";
import './NavigationMenu.scss';
import { useTab } from '../../../../features/tab/useTab'

export const NavigationMenu = () => {
    
    const { tab, toggleTab } = useTab();

    return (
        <div className="navigation-menu">
            <button 
                className={`navigation-menu__nav-item ${tab === 'all' && 'navigation-menu__nav-item--border' }`} 
                onClick={() => toggleTab('all')}
            >
                All
            </button>
            <button 
                className={`navigation-menu__nav-item ${tab === 'favorites' && 'navigation-menu__nav-item--border' }`} 
                onClick={() => toggleTab('favorites')}
            >
                My favorites
            </button>
            <button 
                className={`navigation-menu__nav-item ${tab === 'popular' && 'navigation-menu__nav-item--border' }`} 
                onClick={() => toggleTab('popular')}
            >
                Popular
            </button>
        </div>
    )
}