import React from 'react'
import './Button.css'

type ButtonProps = {
    text?: string,
    onClick: () => void,
    className: string,
    disabled: boolean,
    icon?: string 
}
 
export const Button = ({onClick, text, className, disabled, icon}: ButtonProps) => {
    return (
        <button type='button' onClick={onClick} className={` ${className} button`} disabled={disabled}>
            {icon && <img src={icon} alt='' className='icons'/>}
            {text}
        </button>
    )
}