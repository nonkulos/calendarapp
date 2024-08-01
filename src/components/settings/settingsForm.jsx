import {useState, useEffect} from "react";
import * as Realm from "realm-web";
import {username} from "../login/loginForm";
//import connect from "../../../server/database-stuff/connect.js";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
import {fetchCountries, fetchHolidays} from "../../client-server-stuff/fetchStuff.js";
//import addDocs from "../../../server/database-stuff/add_docs.js";

let countries = [];

const logOut = async () => {
    const user = await app.currentUser?.logOut();
    setUser(null);
}

const app = new Realm.App({ id: "calendar-database-cusojoa" });

const submitForm = (e) => {
    //const connection = connect();
    const currYear = document.getElementById("currMonth").innerHTML.slice(-4);
    console.log(currYear);
    e.preventDefault();
    fetchHolidays(document.getElementById("country").value, 2024).then((data) => console.log(data));
    handleFormSubmit(e, "settingStatus", "Settings Saved");
    addDocs();
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

            <input type="submit" value="Save Changes" onClick={submitForm}/>
            <br />

            <p id="settingStatus"></p>
            <div>{username != null ? <p>Currently logged in as {username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default SettingsForm