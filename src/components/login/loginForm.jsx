import {useState} from "react";
import * as Realm from "realm-web";

const app = new Realm.App({ id: "calendar-database-cusojoa" });
let username = "c";

const UserDetail = ({ user, setUser }) => {
    const logout = async () => {
        setUser(null);
        username = null;
        const user = await app.currentUser?.logOut();
    }
    return (
        <>
          <p>Currently logged in as {user.profile.email}</p>
          <input type="submit" value="Log Out" onClick={logout} />
        </>
    );
}

function Login({ user, setUser }) {
    const loginEmail = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const credentials = Realm.Credentials.emailPassword(email, password);
        try {
            const user = await app.logIn(credentials);
            username = user.profile.email;
            setUser(user);
        } catch (error) {
            document.getElementById("loginStatus").textContent = "Invalid username or password";
        }
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
            <input value="Log In" type="submit" onClick={loginEmail} />
            </form>
            
            <p id="loginStatus" className="failed"></p>
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
            {user ? <UserDetail user = {user} setUser={setUser} /> : <Login setUser={setUser} />}
        </div>
        
    )
}
export {LoginForm, username};