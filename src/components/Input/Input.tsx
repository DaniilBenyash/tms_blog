import React, { useRef, useState } from 'react'
import './Input.scss'

type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string,
    onChange: (event: any) => void,
    value: any,
    error: any,
}

export const Input = ({label, placeholder, disabled, onChange, value, error}: InputProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    inputRef.current?.focus()
    
    return (
        <label className='input'>

            {label}

            <input 
                type='input' 
                ref={inputRef}
                className={`${error && 'input__form_error'} input__form`}
                placeholder={placeholder} 
                disabled={disabled} 
                value={value} 
                onChange={onChange}
            />

            {error && <p className='input__error-text'>Error text</p>}
            
        </label>
    )
}