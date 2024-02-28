import { useState } from 'react';
import calcNum from './Getdates';
import backArrow from '../images/backArrow.png';
import forwardArrow from '../images/forwardArrow.png'

const Buttons = () => {
    const [currMonth, setCurrMonth] = useState(0)

    const day = new Date();
    day.setMonth(day.getMonth() + currMonth, 15)
    const rows = calcNum(day.getFullYear(), day.getMonth())

    return (
        <>
            <p>{day.toLocaleString('en-US', {month: "long", year: "numeric"})}</p>
            <table>{rows}</table>
            <div className = "row">
                <img src={backArrow} alt = "Previous Month" className = "prevMImg" />
                <button onClick = {() => setCurrMonth(currMonth - 1)} className = "prevMButton"></button>
                <img src={forwardArrow} alt = "Next Month" className = "nextMImg" />
                <button onClick = {() => setCurrMonth(currMonth + 1)} className = "nextMButton"></button>
            </div> 
        </>
    )
}

export default Buttons;