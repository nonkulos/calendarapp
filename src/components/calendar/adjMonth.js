import calcNum from './Getdates';
import './Calendar.css'
import {useState} from 'react';

const Buttons = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = new Date();
    const [currMonth, setCurrMonth] = useState(0)
    day.setMonth(day.getMonth() + currMonth, 15)
    const rows = calcNum(day.getFullYear(), day.getMonth())

    return (
        <div>
            <p>{`${months[day.getMonth()]} ${day.getFullYear()}`}</p>
            <table>{rows}</table>
            <button onClick = {() => {setCurrMonth(currMonth - 1)}}>Prev Month</button>
            <button onClick = {() => {setCurrMonth(currMonth + 1)}}>Next Month</button>
        </div>
    )
}

export default Buttons;