import { useState } from 'react';
import calcNum from './Getdates';
import './Calendar.css'

const Buttons = () => {
    const [currMonth, setCurrMonth] = useState(0);

    const daysToDisplay = 7;
    const weeksToDisplay = 6;

    const day = new Date();
    day.setMonth(day.getMonth() + currMonth, 15)

    const months = Array.from({length: 12}, (month, i) => {return new Date(2000, i).toLocaleString('en-US', {month: 'long'})});
    
    const rows = calcNum(day.getFullYear(), day.getMonth(), weeksToDisplay, daysToDisplay);

    return (
        <div>
            <p></p>
            <p>{`${months[day.getMonth()]} ${day.getFullYear()}`}</p>
            <table>{rows}</table>
            <button onClick = {() => {setCurrMonth(currMonth - 1)}}>Prev Month</button>
            <button onClick = {() => {setCurrMonth(currMonth + 1)}}>Next Month</button>
        </div>
    )
}

export default Buttons;