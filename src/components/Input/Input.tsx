import React, { useState } from 'react'
import './Input.css'

type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string,
    onChange: (event: any) => void,
    value: any,
    error: any,
}

export const Input = ({label, placeholder, disabled, onChange, value, error}: InputProps) => {

    return (
        <label className='input'>

            {label}

            <input type='input' className={`${error && 'input__form_error'} input__form`}
                placeholder={placeholder} disabled={disabled} value={value} onChange={onChange}
            />

            {error && <p className='input__error-text'>Error text</p>}
            
        </label>
    )
}