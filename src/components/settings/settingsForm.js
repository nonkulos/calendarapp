const Form = () => {    
    return (
        <form>
            <p> Select Theme: </p>
            <input id = "lightTheme" type="radio" />
            <label for = "lightTheme">Light Theme</label>
            <input id = "darkTheme" type="radio" />
            <label for = "darkTheme">Dark Theme</label>

            <p>Receive Notifications From: </p>
            <input id = "e-mail" type = "checkbox" />
            <label for = "e-mail">E-Mail</label>
            <input id = "text" type = "checkbox" />
            <label for = "text">Text</label>

            <br />
            <br />

            <input type="submit" value="Save Changes"/>
        </form>
    )
}

export default Form