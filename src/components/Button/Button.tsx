import React from 'react'
import './Button.css'

type ButtonProps = {
    text?: string,
    onClick: () => void,
    className: string,
    disable: boolean,
    icon?: string 
}
 
export const Button = ({onClick, text, className, disable, icon}: ButtonProps) => {
    return (
        <button type='button' onClick={onClick} className={className} disabled={disable}>
            {icon && <img src={icon} alt='' className='icons'/>}
            {text}
        </button>
    )
}