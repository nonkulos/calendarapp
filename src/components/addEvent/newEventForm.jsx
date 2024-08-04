import handleFormSubmit from "../../client-server-stuff/submitForm";
import { username } from "../login/loginForm";

const createEvent = () => {
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start").value;
    const endTime = document.getElementById("end").value;
    const eventName = document.getElementById("eventName").value;

    return {
        username: username,
        date: date,
        start: startTime,
        end: endTime,
        name: eventName
    }
}
const submitForm = (e) => {
    e.preventDefault();
    //validateEvent();
    const newEvent = createEvent();
    fetch("http://localhost:3001/newEvent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    })
    .then((res) => {
        document.getElementById("newEventStatus").innerHTML = "Event added successfully";
    })
    .catch((e) => {
        document.getElementById("newEventStatus").innerHTML = "Failed to add event";
        console.error(e)});
}

const AddForm = () => {
    return (
        <form id="new">
            <p>Date of Event:</p>
            <input type="date" id = "date" required className="widebar-input" />

            <p>Start Time of Event:</p>
            <input type="time" id = "start" required className="widebar-input" />

            <p>End Time of Event:</p>
            <input type="time" id = "end" required className="widebar-input" />

            <p>Event Name:</p>
            <input type="text" id = "eventName" required className="widebar-input" placeholder="Event" />

            <br />
            <br />

            <button className="input-button" onClick={submitForm}>Save</button>
            <br />
            <p id="newEventStatus"></p>

            <div className="login-status">{username != null ? <p>Currently logged in as {username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default AddForm;