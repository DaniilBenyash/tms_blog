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
        <label className='input'>

            {label}

            <input type='input' className={`${error && 'input__form_error'} input__form`}
                placeholder={placeholder} disabled={disabled} value={inputValue} onChange={handleChange}
            />

            {error && <p className='input__error-text'>Error text</p>}
            
        </label>
    )
}