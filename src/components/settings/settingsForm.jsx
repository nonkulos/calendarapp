import {useState, useEffect} from "react";
import {usersettings} from "../login/loginForm";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
import {fetchCountries, fetchHolidays} from "../../client-server-stuff/fetchStuff.js";

let countries = [];

const validateInfo = (country, phone) => {
    if (country === "default") {
        document.getElementById("settingStatus").innerHTML = "Please select a valid country";
        return false;
    }
    if (phone === "") {
        document.getElementById("settingStatus").innerHTML = "Please enter a valid phone number";
        return false;
    }
    return true;
}

const makePref = () =>{
    const newCountry = document.getElementById("updateCountry").value;
    const newPhone = document.getElementById("phone").value;
    const email = document.getElementById("e-mail").checked;
    const text = document.getElementById("text").checked;
    let notifPref;
    if(email && text){
        notifPref = "both";
    } else if(email){
        notifPref = "email";
    } else if(text){
        notifPref = "text";
    } else {
        notifPref = "none";
    }
    const newPref = {
        username: usersettings.username,
        country: newCountry,
        phone: newPhone,
        notifs: notifPref
    }
    return newPref;
}

const submitForm = (e) => {
    document.getElementById("settingStatus").innerHTML = "";
    document.getElementById("settingStatus").classList.remove("success");
    document.getElementById("settingStatus").classList.add("failed");
    const newCountry = document.getElementById("updateCountry").value;
    const newPhone = document.getElementById("phone").value;
    const currYear = document.getElementById("currMonth").innerHTML.slice(-4);
    console.log(currYear);
    e.preventDefault();
    if (validateInfo(newCountry, newPhone)) {
        const newPref = makePref();
        fetch("http://localhost:3001/updatePref", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPref)
        })
        .then((res) => {
            if (res.ok) {
                document.getElementById("settingStatus").classList.remove("failed");
                document.getElementById("settingStatus").classList.add("success");
                document.getElementById("settingStatus").innerHTML = "Preferences updated";
            }
        })
        .catch((e) => {
            console.error(e);
        });
    }
    //fetchHolidays(document.getElementById("updateCountry").value, 2024).then((data) => console.log(data));
}

const SettingsForm = () => {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState(null);
    console.log(usersettings);
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

            <p>Edit Phone Number: </p>
            <input  id = "phone" className = "widebar-input" type = "tel" />

            <br />
            <br />

            <button className="input-button" onClick={submitForm}>Save Changes</button>
            <br />

            <p id="settingStatus" className="failed"></p>
            <div className = "login-status">{usersettings != null ? <p>Currently logged in as {usersettings.username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default SettingsForm