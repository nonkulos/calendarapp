import { useState } from 'react';
import calcNum from './Getdates';
import './Calendar.css'

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
                <button onClick = {() => setCurrMonth(currMonth - 1)} className = "prevM">Prev Month</button>
                <button onClick = {() => setCurrMonth(currMonth + 1)} className = "nextM">Next Month</button>
            </div> 
        </>
    )
}

export default Buttons;