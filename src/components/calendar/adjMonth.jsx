import { useState } from 'react';
import calcNum from './createCalendar';
import backArrow from '../images/backArrow.png';
import forwardArrow from '../images/forwardArrow.png'

const Buttons = () => {
    const [currMonth, setCurrMonth] = useState(0)

    const day = new Date();
    day.setMonth(day.getMonth() + currMonth, 15)
    const rows = calcNum(day.getFullYear(), day.getMonth())

    return (
        <>
            <h4>{day.toLocaleString('en-US', {month: "long", year: "numeric"})}</h4>
            <table>{rows}</table>
            <div>
                <img src={backArrow} alt = "Previous Month" className = "prevMImg" />
                <button onClick = {() => setCurrMonth(currMonth - 1)} className = "prevMButton"></button>
                <img src={forwardArrow} alt = "Next Month" className = "nextMImg" />
                <button onClick = {() => setCurrMonth(currMonth + 1)} className = "nextMButton"></button>
            </div> 
        </>
    )
}

export default Buttons;