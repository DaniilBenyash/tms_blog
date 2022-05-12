import React, { useState } from "react";
import './Header.scss'
import { ReactComponent as Burger } from './icon/Burger.svg'
import { ReactComponent as CloseBurger } from './icon/closeBurger.svg';
import { ReactComponent as Search } from './icon/search.svg'
import { HeaderName } from "../HeaderName";

import { BurgerMain } from '../BurgerMain/BurgerMain'

export const Header = () => {
    
    const [burgerValue, setBurgerValue] = useState(false);
    const [searchValue, setSearchValue] = useState(false);
    
    return(
        <header className="header">

            <div className="header__left-content">

                <button className="header__burger" onClick={() => {setBurgerValue(burgerValue ? false : true)}}>
                    {burgerValue ? < CloseBurger />  : < Burger />}
                </button>

                {burgerValue && < BurgerMain firstName='Daniil' lastName='Benyash' />}
                

                {searchValue &&
                     <div className="header__search">

                        <input type="input" placeholder="Search..." className="header__search-input"/>

                        <button onClick={() => setSearchValue(false)} className="header__search-button-close">
                            < CloseBurger />
                        </button>
                        
                    </div>
                }
            </div>

            <div className="header__right-content">

                <button className="header__search-button-open" onClick={() => setSearchValue(searchValue ? false : true)}>
                    < Search />
                </button>

                < HeaderName firstName='Daniil' lastName='Benyash' />
            </div>
            
        </header>
    )
}