import {useState} from "react";
import * as Realm from "realm-web";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
const submitForm = async (e, {setUser}) => {
    setUser(user);
    e.preventDefault();
    handleFormSubmit(e, "loginStatus", "Login Successful");
}

const app = new Realm.App({ id: "calendar-database-cusojoa" });

const UserDetail = ({ user }) => {
    const logout = async () => {
        const user = await app.currentUser?.logOut();
    }
    return (
        <>
          <p>Currently logged in as {user.profile.email}</p>
          <button onClick={logout}>Log Out</button>
        </>
    );
}

function Login({ setUser }) {
    const loginEmail = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const credentials = Realm.Credentials.emailPassword(email, password);
        const user = await app.logIn(credentials);
        return user;
    }

    return (
        <div>
            <form id="login">
            <p>Username:</p>
            <input type="text" id="email" required className="widebar-input"/>
            <br />

            <p>Password:</p>   
            <input type="password" id="password" required className="widebar-input"/>
            <br />
            <button onClick={loginEmail}>Log In</button>
            </form>
            
            <br />
            <br />
            <p>Don't have an account?</p>
            <a href = "register" target="_blank">Sign Up</a>
            <br />
        </div>
    );
  }
  
const LoginForm = () => {    
    const [user, setUser] = useState(app.currentUser);
    return (
        <div className="login-status">
            {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
        </div>
        
    )
}
//<input type="submit" value="Log In" onClick={submitForm}/>
export default LoginForm