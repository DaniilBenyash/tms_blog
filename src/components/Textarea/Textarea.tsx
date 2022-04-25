import React from "react";
import './Textarea.css'

type TextareaProps = {
    className: string,
    name: string,
    placeholder: string,
    cols: number,
    rows: number,
    label: string,
}

export const Textarea = ({className, name, placeholder, cols, rows, label}: TextareaProps) => {
    return (
        <label>
            {label}
            <textarea className={className} name={name} cols={cols} rows={rows} placeholder={placeholder}></textarea>
        </label>
        
    )
}