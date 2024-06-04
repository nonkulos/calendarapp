import {useState} from "react";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
import fetchCountries from "../../client-server-stuff/fetchCountries.js";

let countries = [];

const submitForm = (e) => {
    e.preventDefault();
    handleFormSubmit(e, "settingStatus", "Settings Saved");
}

const SettingsForm = () => {
    const [loaded, setLoaded] = useState(false);
    fetchCountries().then((data) => 
        {
            countries = data;
            setLoaded(true);
        });

    return (
        <form id = "settings">
            <p>Choose Country: </p>
            <select name="countries" id = "country">
                <option value="default">Select Country</option>
                {
                    countries.map((country, i) => 
                        <option key = {i} value = {country.countryCode}>{country.name}</option>
                    )
                }
            </select>

            <p>Receive Notifications From: </p>
            <input id = "e-mail" type = "checkbox" />
            <label for = "e-mail">E-Mail</label>
            <br />
            <input id = "text" type = "checkbox" />
            <label for = "text">Text</label>

            <br />
            <br />

            <input type="submit" value="Save Changes" onClick={submitForm}/>
            <br />

            <p id="settingStatus"></p>

            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default SettingsForm