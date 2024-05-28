import RegisterForm from "../components/registration/registrationForm";

const Register = () => {
  return (
    <>
      <div class="topbar registerTopbar">
        <h1>Register</h1>
      </div>
      <div class="register-main-content">
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;