const LoginForm = () => {    
    return (
        <form id = "login">
            <p>Username:</p>
            <input type="text" required/>
            <br />

            <p>Password:</p>   
            <input type="password" required/>
            <br />

            <input type="submit" value="Log In"/>
            <br />
            <br />
            <p>Don't have an account?</p>
            <a href = "#">Sign Up</a>
            <br />
            <br />
            <br />
            <br />
            <br />

            <small>You are currently logged in as guest</small>
        </form>
    )
}

export default LoginForm