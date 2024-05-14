const hideEventViewer = () => {
    document.getElementById("eventViewer").classList.add("hide-event-viewer")
    document.getElementById("eventViewer").classList.remove("show-event-viewer")
    document.getElementById("opacityThingy").classList.add("lighten");
    document.getElementById("opacityThingy").classList.remove("darken");
}

const EventViewer = () => {
    return (
        <div className = "eventViewer" id = "eventViewer">
            <h2 id = "date">hi</h2>
            <h3>Events: </h3>
            <button onClick={hideEventViewer}>close</button>
        </div>
    )
}

export default EventViewer;