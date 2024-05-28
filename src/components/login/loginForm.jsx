const LoginForm = () => {    
    return (
        <form id = "login">
            <p>Username:</p>
            <input type="text" required className="widebar-input"/>
            <br />

            <p>Password:</p>   
            <input type="password" required className="widebar-input"/>
            <br />

            <input type="submit" value="Log In"/>
            <br />
            <br />
            <p>Don't have an account?</p>
            <a href = "register">Sign Up</a>
            <br />
            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default LoginForm