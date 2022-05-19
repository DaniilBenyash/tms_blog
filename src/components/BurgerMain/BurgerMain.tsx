import React, { useState } from "react";
import './BurgerMain.scss'
import { ReactComponent as Sun } from "./icon/sun.svg";
import { ReactComponent as Moon } from "./icon/moon.svg";
import { HeaderName } from "../HeaderName/HeaderName";
import { Button } from '../Button/Button'
import { setDarkTheme } from '../../redux/reducers/darkTheme'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type BurgerMainProps = {
    firstName?: string,
    lastName?: string,
}

export const BurgerMain = ({firstName, lastName}: BurgerMainProps) => {

    const darkTheme = useAppSelector(state => state.darkTheme.value)
    const dispatch = useAppDispatch()

    const toggleDarkTheme = (newTheme: boolean) => dispatch(setDarkTheme(newTheme))
    

    return (
        <div className={`burger-main ${darkTheme && "burger-main--dark-theme"}`}>
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
                        onClick={() => toggleDarkTheme(false)} 
                        className={`button--theme button--style-burger-main ${darkTheme && 'button--dark-theme-false'}`}
                        disabled={false}
                    />
                    <Button 
                        icon={<Moon/>} 
                        onClick={() => toggleDarkTheme(true)} 
                        className={`button--style-burger-main ${darkTheme ? 'button--dark-theme-true' : 'button--dark-theme-false'}`}
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