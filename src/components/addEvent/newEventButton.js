import React from "react";
import newEventButton from "../images/newEventButton.png";
import toggleWidebar from "../../style-stuff/logic/toggleWidebar";

const NewEventButton = () => {

    const toggleNewEvent = () => {
        toggleWidebar("newevent");
    }

    return (
        <>
            <img src={newEventButton} alt = "Add New Event" className = "sidebar eventButtonImg"/>
            <button onClick={toggleNewEvent} id = "addBtn" className = "sidebar eventButton"></button>
        </>
    )
}

export default NewEventButton