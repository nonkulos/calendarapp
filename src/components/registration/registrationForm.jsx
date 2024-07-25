import { useState } from "react";
import * as Realm from "realm-web";

import { fetchCountries } from "../../client-server-stuff/fetchStuff.js";
import handleFormSubmit from "../../client-server-stuff/submitForm.js";

let countries = [];
const app = new Realm.App({ id: "calendar-database-cusojoa" });

const registerUser = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await app.emailPasswordAuth.registerUser({ email, password });
  print(email);
  print(password);
}
const submitForm = (e) => {
  e.preventDefault();
  registerUser();
  handleFormSubmit(e, "registerStatus", "Successfully Registered, You Can Now Log In");
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
          <input type="email" id = "email" placeholder="Email" className="registrationInput"/>
          <br />
          <input type="password" id = "password" placeholder="Password" className="registrationInput"/>
          <br />
          <select name="countries" id = "initCountry">
                <option value="default">Select Country</option>
                {
                    countries.map((country, i) => 
                        <option key = {i} value = {country.countryCode}>{country.name}</option>
                    )
                }
          </select>
          <br />
          <input type="submit" value="Register" className="registrationInput" onClick={submitForm}/>
      </form>
      <p id="registerStatus"></p>
    </>
  );
}

export default RegisterForm;