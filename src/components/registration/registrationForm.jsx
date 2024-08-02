import { useState } from "react";
import * as Realm from "realm-web";

import { fetchCountries } from "../../client-server-stuff/fetchStuff.js";
import handleFormSubmit from "../../client-server-stuff/submitForm.js";

let countries = [];
const app = new Realm.App({ id: "calendar-database-cusojoa" });


const submitForm = async (e) => {
  e.preventDefault();
  document.getElementById("registerStatus").innerHTML = "";
  document.getElementById("registerStatus").classList.remove("success");
  document.getElementById("registerStatus").classList.add("failed");
  if(document.getElementById("username").value == "" || document.getElementById("password").value == "") {
    document.getElementById("registerStatus").innerHTML = "Please Fill Out All Required Fields";
    return;
  }
  if(document.getElementById("initCountry").value === "default") {
    document.getElementById("registerStatus").innerHTML = "Please Select A Country";
    return;
  }

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const country = document.getElementById("initCountry").value;
  const user = {
    "username": email,
    "country": country,
    "notifs": "text", // default notification setting
  }
  console.log(user);
  await app.emailPasswordAuth.registerUser({ email, password })
    .then(() => {
      fetch("http://localhost:3001/newUser", {
        method: "POST",
        body: user,
      })
        .then((res) => {
          document.getElementById("registerStatus").classList.remove("failed");
          document.getElementById("registerStatus").classList.add("success");
          document.getElementById("registerStatus").innerHTML = "Successfully Registered";
        })
        .catch((res) => {
          document.getElementById("registerStatus").innerHTML = "Failed to Save Data, Try Again Later";
          return;
        });
      console.log("User Registered");
    })
    /*.catch((res) => {
      switch(res.statusCode) {
        case 409:
          document.getElementById("registerStatus").innerHTML = "Username Already Exists";
          break;
        case 400:
          document.getElementById("registerStatus").innerHTML = "Password Must Between 6-128 Characters";
          break;
        default:
          document.getElementById("registerStatus").innerHTML = "An Error Occurred";
          break;
      }
      return;
    });*/
}

const RegisterForm = () => { 
  const [loaded, setLoaded] = useState(false);
  fetchCountries().then((data) => 
      {
          countries = data;
          setLoaded(true);
      });

  return (
    <>
      <form >
          <input type="text" placeholder="First Name" className="registrationInput"/>
          <br />
          <input type="text" placeholder="Last Name" className="registrationInput"/>
          <br />
          <input type="username" id = "username" placeholder="Username (Required)" className="registrationInput" required/>
          <br />
          <input type="password" id = "password" placeholder="Password (Required)" className="registrationInput" required/>
          <br />
          <select name="countries" id = "initCountry" required>
                <option value="default">Select Country (Required)</option>
                {
                    countries.map((country, i) => 
                        <option key = {i} value = {country.countryCode}>{country.name}</option>
                    )
                }
          </select>
          <br />
          <button className="input-button" onClick={submitForm}>Register</button>
      </form>
      <p id="registerStatus" className="failed"></p>
    </>
  );
}

export default RegisterForm;