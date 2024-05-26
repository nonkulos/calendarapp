const AddForm = () => {
    return (
        <form id = "new">
            <p>Date of Event:</p>
            <input type="date" required/>

            <p>Event Name:</p>
            <input type="text" required />

            <br />
            <br />

            <input type="submit" value = "Save"/>
            <br />
            <br />
            <br />
            <br />
            <br />

            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default AddForm;