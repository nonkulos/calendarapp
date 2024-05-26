import toggleWidebar from "../../style-stuff/logic/toggleWidebar";
import loginButton from '../images/loginButton.png';

const LoginButton = () => {
    const toggleLogin = () => {
        toggleWidebar("login");
    }
    return (
        <>
            <img src={loginButton} alt = "Log In" className = "loginButtonImg"/>
            <button onClick={toggleLogin} className = "loginButton">Log In</button>
        </>
    )
};

export default LoginButton;