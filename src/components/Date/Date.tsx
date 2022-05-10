import React from "react";
import './Date.scss'

type DateProps = {
    date: any
}
export const Date = ({date}: DateProps) => {
    return (
        <h4 className='date'>{date}</h4>
    )
}