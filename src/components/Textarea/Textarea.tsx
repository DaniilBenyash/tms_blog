import React from "react";
import './Textarea.scss'

type TextareaProps = {
    placeholder: string,
    rows: number,
    label: string,
    onChange: (event: any) => void,
    value: any,
}

export const Textarea = ({placeholder, rows, label, onChange, value}: TextareaProps) => {
    return (
        <label className="textarea">
            {label}
            <textarea 
                className='textarea__form' 
                name='textarea' 
                rows={rows} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
            >
            </textarea>
        </label>   
    )
}