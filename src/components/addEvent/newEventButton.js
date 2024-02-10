import React from "react";
import { useState } from 'react';
import Form from "./newEventForm"

const NewEventButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <button onClick={() => {setClicked(!clicked)}}>{clicked ? "Cancel" : "New Event"}</button>
            {clicked ? (<Form />) : (null)}
        </>
    )
}

export default NewEventButton