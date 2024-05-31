import handleFormSubmit from "../../client-server-stuff/client";

const SettingsForm = () => {    
    return (
        <form id = "settings">
            <p> Select Theme: </p>
            <input id = "lightTheme" type="radio" name="themeChoice"/>
            <label for = "lightTheme">Light Theme</label>
            <br />
            <input id = "darkTheme" type="radio" name="themeChoice"/>
            <label for = "darkTheme">Dark Theme</label>

            <p>Receive Notifications From: </p>
            <input id = "e-mail" type = "checkbox" />
            <label for = "e-mail">E-Mail</label>
            <br />
            <input id = "text" type = "checkbox" />
            <label for = "text">Text</label>

            <br />
            <br />

            <input type="submit" value="Save Changes" id="submitButton" onClick={handleFormSubmit}/>
            <br />

            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default SettingsForm