import handleFormSubmit from "../../client-server-stuff/submitForm";
import { usersettings } from "../login/loginForm";


const comparePrevEvents = (currEvents, startDate, endDate) => {
    for(let i = 0; i < currEvents.length; i++){
        const checkStart = new Date(`${currEvents[i].date}, ${currEvents[i].start}`)
        const checkEnd = new Date(`${currEvents[i].date}, ${currEvents[i].end}`)
        if((checkStart < endDate && checkStart >= startDate) || (checkEnd <= endDate && checkEnd > startDate) || (checkStart < startDate && checkEnd > endDate)){ 
            console.log("failed")
            document.getElementById("newEventStatus").innerHTML = "Event overlaps with previously set events.";
            return false
        }
    }
    return true
}

const fetchEvents = async () => {
    const date = document.getElementById("date").value;
    let result;
    const user = {
        name: usersettings.username,
        eventDate: date
    };
    await fetch("http://localhost:3001/findEvents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((res) => {
        result = res.json();
    })
    .catch((e) => console.error(e));
    return result;
}

const validateEvent = () => {
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start").value;
    const endTime = document.getElementById("end").value;
    const eventName = document.getElementById("eventName").value;

    const currDate = new Date()
    const startDate = new Date(`${date}, ${startTime}`)
    const endDate = new Date(`${date}, ${endTime}`)
    
    if(usersettings.username == null){
        document.getElementById("newEventStatus").innerHTML = "Please log in to add events";
        return false;
    }

    if(eventName=="" || date=="" || startTime=="" || endTime==""){ {
        document.getElementById("newEventStatus").innerHTML = "Missing required fields";
        return false;
    }}

    if(startDate < currDate){
        document.getElementById("newEventStatus").innerHTML = "Event date is set before current date.";
        return false;
    }

    if(endDate < startDate){
        document.getElementById("newEventStatus").innerHTML = "End time is set before start time.";
        return false;
    }
}

const createEvent = () => {
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start").value;
    const endTime = document.getElementById("end").value;
    const eventName = document.getElementById("eventName").value;

    return {
        username: usersettings.username,
        date: date,
        start: startTime,
        end: endTime,
        name: eventName
    }
}

const submitForm = async (e) => {
    document.getElementById("newEventStatus").innerHTML = "";
    document.getElementById("newEventStatus").classList.remove("success");
    document.getElementById("newEventStatus").classList.add("failed");
    const date = document.getElementById("date").value;
    const startTime = document.getElementById("start").value;
    const endTime = document.getElementById("end").value;
    const startDate = new Date(`${date}, ${startTime}`)
    const endDate = new Date(`${date}, ${endTime}`)
    
    e.preventDefault();
    console.log("start")
    if(!validateEvent()){
        console.log("stopping")
        return;
    };
    const passed = await fetchEvents().then(
        (res) => {
            console.log(res)
            return(comparePrevEvents(res, startDate, endDate));
        }
    )
    console.log(passed)
    if(passed){
        const newEvent = createEvent();
        fetch("http://localhost:3001/newEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
        .then((res) => {
            console.log("Done")
            document.getElementById("newEventStatus").classList.remove("failed");
            document.getElementById("newEventStatus").classList.add("success");
            document.getElementById("newEventStatus").innerHTML = "Event added successfully";
        })
        .catch((e) => {
            document.getElementById("newEventStatus").innerHTML = "Failed to add event";
            console.error(e)});
    }
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
            <p id="newEventStatus" className="failed"></p>

            <div className="login-status">{usersettings != null ? <p>Currently logged in as {usersettings.username}</p> : <p>Currently logged in as guest</p>}</div>
        </form>
    )
}

export default AddForm;