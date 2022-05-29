import React from "react";
import './HeaderName.scss'
import { ReactComponent as User } from './icons/user.svg'


type HeaderNameProps = {
    firstName?: string,
    lastName?: string,
}

export const HeaderName = ({firstName, lastName}: HeaderNameProps) => {
    return (
        <div className="header-name">
            {!firstName && !lastName 
            ? 
            < User />
            : 
            <div className="header-name__profile">
                <div className="header-name__initials">
                    {firstName?.[0]}
                    {lastName && lastName[0]}
                </div>
                <p className="header-name__name">
                    {firstName}
                    {lastName}
                </p>
            </div>
            }
        </div>
    )
}