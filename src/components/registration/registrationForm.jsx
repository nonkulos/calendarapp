const RegisterForm = () => {
  return (
    <form >
        <input type="text" placeholder="First Name" className="registrationInput"/>
        <br />
        <input type="text" placeholder="Last Name" className="registrationInput"/>
        <br />
        <input type="email" placeholder="Email" className="registrationInput"/>
        <br />
        <input type="password" placeholder="Password" className="registrationInput"/>
        <br />
        <input type="submit" value="Register" className="registrationInput"/>
    </form>
  );
}

export default RegisterForm;