import React from "react";
import { useState } from 'react';
import Form from './settingsForm';
import settingsButton from "../images/settingsButton.png";

const SettingButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <img src={settingsButton} alt = "Settings Button" className = "sidebar settingsButtonImg"/>
            <button onClick = {() => setClicked(!clicked)} className = "sidebar settingsButton"></button>
            {clicked ? (<Form />) : (null)}
        </>
    )
}

export default SettingButton