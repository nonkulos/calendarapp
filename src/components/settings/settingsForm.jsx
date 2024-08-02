import {useState, useEffect} from "react";
import * as Realm from "realm-web";
import {username} from "../login/loginForm";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
import {fetchCountries, fetchHolidays} from "../../client-server-stuff/fetchStuff.js";

let countries = [];

const logOut = async () => {
    const user = await app.currentUser?.logOut();
    setUser(null);
}

const app = new Realm.App({ id: "calendar-database-cusojoa" });

const submitForm = (e) => {
    const currYear = document.getElementById("currMonth").innerHTML.slice(-4);
    console.log(currYear);
    e.preventDefault();
    fetchHolidays(document.getElementById("updateCountry").value, 2024).then((data) => console.log(data));
    handleFormSubmit(e, "settingStatus", "Settings Saved");
}

const SettingsForm = () => {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState(null);
    fetchCountries().then((data) => 
        {
            countries = data;
            setLoaded(true);
        });

    return (
        <form id = "settings">
            <p>Choose Country: </p>
            <select name="countries" id = "updateCountry">
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

            <button className="input-button" onClick={submitForm}>Save Changes</button>
            <br />

            <p id="settingStatus"></p>
            <div>{username != null ? <p>Currently logged in as {username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default SettingsForm