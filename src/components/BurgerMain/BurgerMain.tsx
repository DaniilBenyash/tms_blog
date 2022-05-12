import React from "react";
import './BurgerMain.scss'
import { ReactComponent as Sun } from "./icon/sun.svg";
import { ReactComponent as Moon } from "./icon/moon.svg";
import { HeaderName } from "../HeaderName/HeaderName";

type BurgerMainProps = {
    firstName?: string,
    lastName?: string,
}

export const BurgerMain = ({firstName, lastName}: BurgerMainProps) => {
    return (
        <div className="burger-main">

            <div>
                <HeaderName firstName={firstName} lastName={lastName} />
                <button className="burger-main__button">Home</button>
                <button className="burger-main__button">Add post</button>
            </div>

            <div>

                <div className="burger-main__theme">
                    <button className="burger-main__theme-button burger-main__theme-button_border">< Sun /></button>
                    <button className="burger-main__theme-button">< Moon /></button>
                </div>

                <button className="burger-main__login-button">Log Out</button>

            </div>
        </div>
    )
}