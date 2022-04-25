import React, { useState } from 'react'
import './Input.css'

type InputProps = {
    className: string,
    placeholder: string,
    disabled: boolean,
    type: string,
    label: string,
}



export const Input = ({label, className, placeholder, disabled, type}: InputProps) => {

    const [inputValue, setInputValue] = useState('')

    const [error, setError] = useState('')

    const handleChange = (event: any): void => {

    setInputValue(event.target.value)

    if(event.target.value.length > 5){
        setError('error')
    }else{
        setError('')
    }
    }

    return (
        <label htmlFor="">
            {label}
            <input type={type} className={`${error && 'errorInput'} ${ className}`} placeholder={placeholder} disabled={disabled} value={inputValue} onChange={handleChange}/>
            {error && <p className='error'>Error text</p>}
        </label>
    )
}