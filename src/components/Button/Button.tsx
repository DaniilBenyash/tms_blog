import React from 'react'
import './Button.css'

type ButtonProps = {
    text?: string,
    onClick: () => void,
    className: string,
    disable: boolean,
    icon?: string 
}
const getIcon = (icon: string | undefined): React.ReactElement | undefined => {
    if(icon) return <img src={icon} alt='' className='icons'/>

    return 
}   
export const Button = ({onClick, text, className, disable, icon}: ButtonProps) => {
    return (
        <button type='button' onClick={onClick} className={className} disabled={disable}>{getIcon(icon)}{text}</button>
    )
}