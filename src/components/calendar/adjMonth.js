import { useState } from 'react';
import calcNum from './Getdates';
import './Calendar.css'

const Buttons = () => {
    const [currMonth, setCurrMonth] = useState(0)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = new Date();
    day.setMonth(day.getMonth() + currMonth, 15)
    const rows = calcNum(day.getFullYear(), day.getMonth())

    return (
        <>
            <p>{`${months[day.getMonth()]} ${day.getFullYear()}`}</p>
            <table>{rows}</table>
            <button onClick = {() => setCurrMonth(currMonth - 1)}>Prev Month</button>
            <button onClick = {() => setCurrMonth(currMonth + 1)}>Next Month</button>
        </>
    )
}

export default Buttons;