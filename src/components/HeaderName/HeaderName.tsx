import React from "react";
import './HeaderName.scss'
import { ReactComponent as User } from './icons/user.svg'


type HeaderNameProps = {
    username?: string,
}

export const HeaderName = ({username}: HeaderNameProps) => {
    return (
        <div className="header-name">
            {!username
            ? 
            < User />
            : 
            <div className="header-name__profile">
                <div className="header-name__initials">
                    {username?.[0]}
                </div>
                <p className="header-name__name">
                    {username}
                </p>
            </div>
            }
        </div>
    )
}