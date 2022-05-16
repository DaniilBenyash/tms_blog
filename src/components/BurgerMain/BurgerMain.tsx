import React, { useState } from "react";
import './BurgerMain.scss'
import { ReactComponent as Sun } from "./icon/sun.svg";
import { ReactComponent as Moon } from "./icon/moon.svg";
import { HeaderName } from "../HeaderName/HeaderName";
import { Button } from '../Button/Button'

type BurgerMainProps = {
    firstName?: string,
    lastName?: string,
}

export const BurgerMain = ({firstName, lastName}: BurgerMainProps) => {

    const [blackThemeValue, setBlackThemeValue] = useState(false);

    const switchBlackTheme = (boolean: boolean): void => {
        setBlackThemeValue(boolean)
    }  

    return (
        <div className={`burger-main ${blackThemeValue && "burger-main--black-theme"}`}>
            <div>
                <HeaderName 
                    firstName={firstName} 
                    lastName={lastName} 
                />
                <Button 
                    text='Home' 
                    onClick={() => console.log('Text')} 
                    className='button--style-burger-main' 
                    disabled={false}
                />
                <Button 
                    text='Add post' 
                    onClick={() => console.log('Text')} 
                    className='button--add-post button--style-burger-main' 
                    disabled={false}
                />
            </div>
            <div>
                <div className="burger-main__theme">
                    <Button 
                        icon={<Sun/>} 
                        onClick={() => switchBlackTheme(false)} 
                        className={`button--theme button--style-burger-main ${blackThemeValue && 'burger-main--black-theme-true'}`}
                        disabled={false}
                    />
                    <Button 
                        icon={<Moon/>} 
                        onClick={() => switchBlackTheme(true)} 
                        className={`button--style-burger-main ${!blackThemeValue && 'button--black-theme-false'}`}
                        disabled={false}
                    />
                </div>
                <Button 
                    text='Log Out' 
                    onClick={() => console.log('Text')} 
                    className='button--login-button button--style-burger-main' 
                    disabled={false}
                />
            </div>
        </div>
    )
}