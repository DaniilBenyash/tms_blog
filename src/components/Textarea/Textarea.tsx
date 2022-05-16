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
        <label className="textarea">

            {label}

            <textarea 
                className='textarea__form' 
                name='textarea' cols={cols} 
                rows={rows} 
                placeholder={placeholder}
            >
            </textarea>
        </label>   
    )
}