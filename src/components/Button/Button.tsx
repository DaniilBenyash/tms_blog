import React, { ReactElement } from 'react'
import './Button.scss'

type ButtonProps = {
    text?: string,
    type?: "button" | "submit" | "reset" | undefined
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className: string,
    disabled: boolean,
    icon?: ReactElement
}
 
export const Button = ({onClick, type, text, className, disabled, icon}: ButtonProps) => {
    return (
        <button 
            type={!type ? 'button' : type} 
            onClick={onClick} 
            className={`${className} button`} 
            disabled={disabled}>
            {icon}
            {text}
        </button>
    )
}