const showEventViewer = (date, shift) => {
    let tempDay = new Date;
    tempDay.setMonth(date.getMonth());
    tempDay.setDate(date.getDate());
    tempDay.setDate(tempDay.getDate() - shift);
    const day = tempDay.toDateString();

    document.getElementById("date").innerHTML = day;

    document.getElementById("opacityThingy").style.zIndex = "20";
    document.getElementById("eventViewer").classList.add("show-event-viewer")
    document.getElementById("opacityThingy").classList.add("darken");
    document.getElementById("eventViewer").classList.remove("hide-event-viewer")
    document.getElementById("opacityThingy").classList.remove("lighten");
}

export default showEventViewer;