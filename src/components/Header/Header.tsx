import React, { useState } from "react";
import './Header.css'
import Burger from './icons/Burger.svg'
import closeBurger from './icons/closeBurger.svg'
import Search from './icons/search.svg'
import User from './icons/user.svg'

type HeaderProps = {
    firstName?: string,
    lastName?: string,
}

export const Header = ({firstName, lastName}: HeaderProps) => {
    const [burgerValue, setBurgerValue] = useState(false)
    const [searchValue, setSearchValue] = useState(false)
    
    return(
        <header className="header">

            <div className="leftHeader">

                <button className="burgerButton" onClick={() => {setBurgerValue(burgerValue ? false : true)}}>
                    <img src={burgerValue ? closeBurger : Burger} alt="" />
                </button>

                {searchValue &&
                     <div className="search">
                        <input type="input" placeholder="Search..."/>
                        <button onClick={() => setSearchValue(false)}>
                            <img src={closeBurger} alt="" />
                        </button>
                    </div>
                }
                
            </div>

            <div className="rightHeader">

                <button className="searchButton" onClick={() => setSearchValue(searchValue ? false : true)}>
                    <img src={Search} alt="" />
                </button>

                <div className="profileHeader">
                    {!firstName ? 
                        <img src={User} alt="" /> 
                        : 
                        <div className="name">
                            <div className="initials">{firstName[0]}{lastName && lastName[0]}</div>
                            <p>{firstName} {lastName}</p>
                        </div>
                    }
                </div>
            </div>
            
        </header>
    )
}