import React from "react";
import './Textarea.css'

type TextareaProps = {
    placeholder: string,
    cols: number,
    rows: number,
    label: string,
}

export const Textarea = ({placeholder, cols, rows, label}: TextareaProps) => {
    return (
        <label>
            {label}
            <textarea className='textarea' name='textarea' cols={cols} rows={rows} placeholder={placeholder}></textarea>
        </label>
        
    )
}