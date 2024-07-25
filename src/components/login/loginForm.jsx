import {useState} from "react";
import * as Realm from "realm-web";

import handleFormSubmit from "../../client-server-stuff/submitForm.js";
const submitForm = async (e, {setUser}) => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
    e.preventDefault();
    handleFormSubmit(e, "loginStatus", "Login Successful");

}

const app = new Realm.App({ id: "calendar-database-cusojoa" });

const UserDetail = ({ user }) => {
    const logoutAnonymous = async () => {
        const user = await app.currentUser.logOut();
        setUser(null);
    }
    return (
        <div>
          <button onClick={logoutAnonymous}>Log Out</button>
          <small>Logged in with anonymous id: {user.id}</small>
        </div>
    );
}

function Login({ setUser }) {
    const loginAnonymous = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
    };
    return (
        <form id="login">
        <p>Username:</p>
        <input type="text" required className="widebar-input"/>
        <br />

        <p>Password:</p>   
        <input type="password" required className="widebar-input"/>
        <br />
        <button onClick={loginAnonymous}>Log In</button>
        </form>
    );
  }
  
const LoginForm = () => {    
    const [user, setUser] = useState(app.currentUser);
    return (
        <div>
            <div className="login-status">
                {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
            </div>
            
            <br />
            <br />
            <p>Don't have an account?</p>
            <a href = "register" target="_blank">Sign Up</a>
            <br />
        </div>
    )
}
//<input type="submit" value="Log In" onClick={submitForm}/>
export default LoginForm