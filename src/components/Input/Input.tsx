import React, { useEffect, useRef, useState } from 'react'
import './Input.scss'

type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string,
    onChange: (event: any) => void,
    value: any,
    error: any,
    ref?: any,
}

export const Input = ({label, placeholder, disabled, onChange, value, error, ref}: InputProps) => {
    
    return (
        <label className='input'>

            {label}

            <input 
                type='input' 
                ref={ref}
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