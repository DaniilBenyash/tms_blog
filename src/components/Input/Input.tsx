import React, { useState } from 'react'
import './Input.css'

type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string,
}

export const Input = ({label, placeholder, disabled}: InputProps) => {

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
            <input type='input' className={`${error && 'errorInput'} input`}  placeholder={placeholder} disabled={disabled} value={inputValue} onChange={handleChange}/>
            {error && <p className='error'>Error text</p>}
        </label>
    )
}