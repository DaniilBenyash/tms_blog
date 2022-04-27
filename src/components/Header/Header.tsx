import React, { useState } from "react";
import './Header.css'
import Burger from './icon/Burger.svg'
import closeBurger from './icon/closeBurger.svg'
import Search from './icon/search.svg'
import User from './icon/user.svg'

type HeaderProps = {
    firstName?: string,
    lastName?: string,
}

export const Header = ({firstName, lastName}: HeaderProps) => {
    
    const [burgerValue, setBurgerValue] = useState(false)
    const [searchValue, setSearchValue] = useState(false)
    
    return(
        <header className="header">

            <div className="header__left-content">

                <button className="header__burger" onClick={() => {setBurgerValue(burgerValue ? false : true)}}>
                    <img src={burgerValue ? closeBurger : Burger} alt="" />
                </button>

                {searchValue &&
                     <div className="header__search">

                        <input type="input" placeholder="Search..." className="header__search-input"/>

                        <button onClick={() => setSearchValue(false)} className="header__search-button-close">
                            <img src={closeBurger} alt="" />
                        </button>
                        
                    </div>
                }
                
            </div>

            <div className="header__right-content">

                <button className="header__search-button-open" onClick={() => setSearchValue(searchValue ? false : true)}>
                    <img src={Search} alt="" />
                </button>

                <div className="header__profile">
                    {!firstName ? 
                        <img src={User} alt="" /> 
                        : 
                        <div className="header__profile-name">
                            <div className="header__profile-name-initials">{firstName[0]}{lastName && lastName[0]}</div>
                            <p className="header__profile-name-text">{firstName} {lastName}</p>
                        </div>
                    }
                </div>
            </div>
            
        </header>
    )
}