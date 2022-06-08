import React, { useState } from "react";
import './Header.scss';
import { ReactComponent as Burger } from './icon/Burger.svg';
import { ReactComponent as CloseBurger } from './icon/closeBurger.svg';
import { ReactComponent as Search } from './icon/search.svg';
import { HeaderName } from "./components/HeaderName";
import { Button } from '../Button/Button';
import { BurgerMain } from './components/BurgerMain/BurgerMain';
import { usePosts } from "../../features/posts";
import { useFilterPosts } from "../../features/filterPosts";
import { Navigate, useNavigate } from "react-router-dom";

export const Header = () => {

    const { setValueFilter} = useFilterPosts();


    const [burgerValue, setBurgerValue] = useState(false);
    const [searchValue, setSearchValue] = useState(false);

    const navigate = useNavigate();

    const searchInput = (event: any) => {
        if(event.keyCode === 13){
            setValueFilter(event.target.value)
            navigate('/search')
        }
    }

    return(
        <header className="header">
            <div className="header__left-content">
                <Button 
                    icon={burgerValue ? <CloseBurger/>  : <Burger/>} 
                    onClick={() => setBurgerValue(previousValue => !previousValue)} 
                    className='button--burger' 
                    disabled={false}
                />
                {burgerValue 
                && 
                <BurgerMain 
                    firstName='Daniil' 
                    lastName='Benyash' 
                />}
                {searchValue 
                &&
                <div className="header__search">
                <input type="input" placeholder="Search..." className="header__search-input" onKeyUp={searchInput}/>
                <Button 
                    icon={<CloseBurger/>} 
                    onClick={() => setSearchValue(false)} 
                    className='button--search-close' 
                    disabled={false}
                />
                </div>
                }
            </div>
            <div className="header__right-content">
                <Button 
                    icon={<Search/>} 
                    onClick={() => setSearchValue(previousValue => !previousValue)} 
                    className='button--search-open' 
                    disabled={false}
                />
                <HeaderName 
                    firstName='Daniil' 
                    lastName='Benyash' 
                />
            </div>
        </header>
    )
}