import {useState, useEffect} from "react";
import * as Realm from "realm-web";
//import connect from "../../../server/database-stuff/connect.js";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
import {fetchCountries, fetchHolidays} from "../../client-server-stuff/fetchStuff.js";
//import addDocs from "../../../server/database-stuff/add_docs.js";

let countries = [];

const app = new Realm.App({ id: "calendar-database-cusojoa" });

const UserDetail = ({ user }) => {
    return (
        <div>
          <small>Logged in with anonymous id: {user.id}</small>
        </div>
    );
}

function Login({ setUser }) {
    const loginAnonymous = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
    };
    return <button onClick={loginAnonymous}>Log In</button>;
  }

const submitForm = (e) => {
    const connection = connect();
    const currYear = document.getElementById("currMonth").innerHTML.slice(-4);
    console.log(currYear);
    e.preventDefault();
    fetchHolidays(document.getElementById("country").value, 2024).then((data) => console.log(data));
    handleFormSubmit(e, "settingStatus", "Settings Saved");
    addDocs();
}

const SettingsForm = () => {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState(app.currentUser);
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

            <div className="login-status">
                {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
            </div>
        </form>
    )
}

export default SettingsForm