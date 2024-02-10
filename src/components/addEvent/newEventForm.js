const Form = () => {
    return (
        <form>
            <p>Date of Event:</p>
            <input type="date" required/>

            <p>Event Name:</p>
            <input type="text" required />

            <br />
            <br />

            <input type="submit" value = "Save"/>
        </form>
    )
}

export default Form;