import React, { ReactElement } from 'react'
import './Button.scss'

type ButtonProps = {
    text?: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className: string,
    disabled: boolean,
    icon?: ReactElement
}
 
export const Button = ({onClick, text, className, disabled, icon}: ButtonProps) => {
    return (
        <button 
            type='button' 
            onClick={onClick} 
            className={`${className} button`} 
            disabled={disabled}>
            {icon}
            {text}
        </button>
    )
}