import React, { useState, useEffect } from 'react';
import * as Realm from "realm-web";


import Buttons from '../components/calendar/adjMonth';
import Sidebar from '../components/sidebar/sidebar';
import Bar from '../components/topBar/barContents';
import EventViewer from '../components/eventViewer/eventViewer';

// Create a component that displays the given user's details
function UserDetail({ user }) {
    return (
      <div>
        <h1>Logged in with anonymous id: {user.id}</h1>
      </div>
    );
  }
  // Create a component that lets an anonymous user log in
  function Login({ setUser }) {
    const loginAnonymous = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
    };
    return <button onClick={loginAnonymous}>Log In</button>;
  }
  
const app = new Realm.App({ id: "calendar-database-cusojoa" });

const Homepage = () => {
    const [user, setUser] = React.useState(app.currentUser);
    const [message, setMessage] = useState("");

    useEffect(() => {
    fetch("https://localhost:3001")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
        <>
            <div className="topbar">
                <Bar />
            </div>
            <div className="widebar" id = "widebar" />
            <div>
                <Sidebar />
            </div>
            <div className="main-content text-center">
                <Buttons />
            </div>
            <EventViewer />
            <div className="opacityThingy" id = "opacityThingy"/>
        </>
    )
}
export default Homepage;