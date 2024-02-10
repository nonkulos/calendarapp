import React from "react";
import { useState } from 'react';
import Form from './settingsForm'

const SettingButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <button onClick = {() => setClicked(!clicked)}>{clicked ? "Close Settings" : "Settings"}</button>
            {clicked ? (<Form />) : (null)}
        </>
    )
}

export default SettingButton