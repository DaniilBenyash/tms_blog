import React, { useState } from "react";
import './NavigationMenu.scss';
import { setTab } from '../../redux/reducers/tab';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const NavigationMenu = () => {
    const tab = useAppSelector(state => state.tab.value);
    const dispatch = useAppDispatch();

    const toggleTab = (newTab: string) => dispatch(setTab(newTab))

    return (
        <div className="navigation-menu">
            <button 
                className={`navigation-menu__nav-item ${tab === 'all' && 'navigation-menu__nav-item--border' }`} 
                onClick={() => toggleTab('all')}
            >
                All
            </button>
            <button 
                className={`navigation-menu__nav-item ${tab === 'favorite' && 'navigation-menu__nav-item--border' }`} 
                onClick={() => toggleTab('favorite')}
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