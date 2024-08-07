import { fetchHolidays } from "../../client-server-stuff/fetchStuff";
import { usersettings } from "../login/loginForm.jsx";

let holidayList = [];

const fetchCountry = async () => {
    if(usersettings == null){
        let holidayList = await fetchHolidays("US", 2021);
        return holidayList;
    } else {
    fetch("http://localhost:3001/findSettings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username: usersettings.username})
    }).then((res) => {
        console.log(res.json());
    }).catch((e) => {
        console.error(e);
    })
}
}

fetchCountry();

const hideEventViewer = () => {
    document.getElementById("eventViewer").classList.add("hide-event-viewer")
    document.getElementById("eventViewer").classList.remove("show-event-viewer")
    document.getElementById("opacityThingy").classList.add("lighten");
    document.getElementById("opacityThingy").classList.remove("darken");
}

const EventViewer = () => {
    console.log(holidayList)
    return (
        <div className = "eventViewer" id = "eventViewer">
            <h2 id = "date">hi</h2>
            <h3>Events: </h3>
            <button onClick={hideEventViewer}>close</button>
        </div>
    )
}

export default EventViewer;