import { useState } from "react";

import { fetchCountries } from "../../client-server-stuff/fetchStuff.js";
import handleFormSubmit from "../../client-server-stuff/submitForm.js";

let countries = [];
const submitForm = (e) => {
  e.preventDefault();
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
          <input type="email" placeholder="Email" className="registrationInput"/>
          <br />
          <input type="password" placeholder="Password" className="registrationInput"/>
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