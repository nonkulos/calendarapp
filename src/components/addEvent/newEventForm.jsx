const AddForm = () => {
    return (
        <form id = "new">
            <p>Date of Event:</p>
            <input type="date" required className="widebar-input"/>

            <p>Event Name:</p>
            <input type="text" required className="widebar-input" placeholder = "Event"/>

            <br />
            <br />

            <input type="submit" value = "Save" />
            <br />
            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default AddForm;