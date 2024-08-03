import handleFormSubmit from "../../client-server-stuff/submitForm";
import {username} from "../login/loginForm";

const submitForm = (e) => {
    e.preventDefault();
    handleFormSubmit(e, "newEventStatus", "Event Added");
}

const AddForm = () => {
    return (
        <form id = "new">
            <p>Date of Event:</p>
            <input type="date" required className="widebar-input"/>

            <p>Event Name:</p>
            <input type="text" required className="widebar-input" placeholder = "Event"/>

            <br />
            <br />

            <button className="input-button" onClick={submitForm}>Save</button>
            <br />
            <p id="newEventStatus"></p>

            <div className = "login-status">{username != null ? <p>Currently logged in as {username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default AddForm;