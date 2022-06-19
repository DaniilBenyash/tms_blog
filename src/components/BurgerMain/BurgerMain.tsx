import React from "react";
import './BurgerMain.scss'
import { ReactComponent as Sun } from "./icon/sun.svg";
import { ReactComponent as Moon } from "./icon/moon.svg";
import { HeaderName } from "../HeaderName/HeaderName";
import { Button } from '../Button/Button'
import { useTheme } from '../../features/theme/useTheme'
import { useUserInfo } from '../../features/userInfo/useUserInfo'
import { Link } from 'react-router-dom'

type BurgerMainProps = {
    username?: string,
}

export const BurgerMain = ({username}: BurgerMainProps) => {

    const { theme, toggleTheme } = useTheme();
    const { userInfo } = useUserInfo();

    return (
        <div className={`burger-main ${theme && "burger-main--dark-theme"}`}>
            <div>
                <HeaderName 
                    username={username} 
                />
                <Link to='/' className='burger-main__link burger-main__link_home'>Home</Link>
                <Link to='/' className='burger-main__link'>Add post</Link>
            </div>
            <div>
                <div className="burger-main__theme">
                    <Button 
                        icon={<Sun/>} 
                        onClick={() => toggleTheme(false)} 
                        className={`button--theme button--style-burger-main ${theme && 'button--dark-theme-false'}`}
                        disabled={false}
                    />
                    <Button 
                        icon={<Moon/>} 
                        onClick={() => toggleTheme(true)} 
                        className={`button--style-burger-main ${theme ? 'button--dark-theme-true' : 'button--dark-theme-false'}`}
                        disabled={false}
                    />
                </div>
                {userInfo
                ?
                <Button 
                    text='Log Out' 
                    onClick={() => console.log('Text')} 
                    className='button--login-button button--style-burger-main' 
                    disabled={false}
                />
                :
                <Link to='/sign-in' className='burger-main__link burger-main__link_sign-in' >Sign In</Link>}
                
            </div>
        </div>
    )
}