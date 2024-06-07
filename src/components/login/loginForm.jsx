import handleFormSubmit from "../../client-server-stuff/submitForm.js";

const submitForm = (e) => {
    e.preventDefault();
    handleFormSubmit(e, "loginStatus", "Login Successful");

}

const LoginForm = () => {    
    return (
        <form id = "login">
            <p>Username:</p>
            <input type="text" required className="widebar-input"/>
            <br />

            <p>Password:</p>   
            <input type="password" required className="widebar-input"/>
            <br />

            <input type="submit" value="Log In" onClick={submitForm}/>
            <br />
            <p id="loginStatus"></p>
            <br />
            <p>Don't have an account?</p>
            <a href = "register" target="_blank">Sign Up</a>
            <br />
            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default LoginForm