import React, { useState } from "react";
import './Header.scss';
import { ReactComponent as Burger } from './icon/Burger.svg';
import { ReactComponent as CloseBurger } from './icon/closeBurger.svg';
import { ReactComponent as Search } from './icon/search.svg';
import { HeaderName } from "./components/HeaderName/HeaderName";
import { Button } from '../Button/Button';
import { BurgerMain } from './components/BurgerMain/BurgerMain';
import { useSearchPosts } from "../../features/searchPosts";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const { setValueSearch } = useSearchPosts();

    const [burgerValue, setBurgerValue] = useState(false);
    const [searchValue, setSearchValue] = useState(false);

    const navigate = useNavigate();

    const searchInput = (event: any) => {
            console.log();
            if(!event.target.value){
                setValueSearch(null)
            } else {
                setValueSearch(event.target.value)
            }
            
            navigate('/search')
        
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
                <input type="input" placeholder="Search..." className="header__search-input" onChange={searchInput}/>
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