import React, { useEffect, useState } from "react";
import './Header.scss';
import { ReactComponent as Burger } from './icon/Burger.svg';
import { ReactComponent as CloseBurger } from './icon/closeBurger.svg';
import { ReactComponent as Search } from './icon/search.svg';
import { HeaderName } from "../HeaderName";
import { Button } from '../Button/Button';
import { BurgerMain } from '../BurgerMain/BurgerMain';
import { useUserInfo } from "../../features/userInfo";

export const Header = () => {

    const { userInfo } = useUserInfo();

    const [burgerValue, setBurgerValue] = useState(false);
    const [searchValue, setSearchValue] = useState(false);

    const [username, setUsername] = useState('')

    useEffect(() => {
        if(userInfo) {
            setUsername(userInfo?.username)
        }
    }, [userInfo])

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
                    username={username}  
                />}
                {searchValue 
                &&
                <div className="header__search">
                <input type="input" placeholder="Search..." className="header__search-input"/>
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
                    username={username} 
                />
            </div>
        </header>
    )
}