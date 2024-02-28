import React from "react";
import { useState } from 'react';
import Form from "./newEventForm";
import newEventButton from "../images/newEventButton.png"

const NewEventButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <img src={newEventButton} alt = "Add New Event" className = "sidebar eventButtonImg"/>
            <button onClick={() => {setClicked(!clicked)}} className = "sidebar eventButton"></button>
            {clicked ? (<Form />) : (null)}
        </>
    )
}

export default NewEventButton