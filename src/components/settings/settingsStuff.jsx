import React from "react";
import settingsButton from "../images/settingsButton.png";
import toggleWidebar from "../../style-stuff/logic/toggleWidebar";

const toggleSettings = () => {
    toggleWidebar("settings");
}

const SettingButton = () => {
    return (
        <>
            <img src={settingsButton} alt = "Settings Button" className = "sidebar settingsButtonImg"/>
            <button onClick={toggleSettings} id = "settingsBtn" className = "sidebar settingsButton"></button>
        </>
    )
}

export default SettingButton