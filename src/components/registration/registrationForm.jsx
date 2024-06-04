import handleFormSubmit from "../../client-server-stuff/submitForm.js";

const submitForm = (e) => {
  e.preventDefault();
  handleFormSubmit(e, "registerStatus", "Successfully Registered, You Can Now Log In");

}

const RegisterForm = () => {
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
          <input type="submit" value="Register" className="registrationInput" onClick={submitForm}/>
      </form>
      <p id="registerStatus"></p>
    </>
  );
}

export default RegisterForm;