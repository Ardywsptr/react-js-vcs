/* eslint-disable no-unused-vars */
import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Button";

function FormLogin() {
    function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem("email", e.target.email.value);
        localStorage.setItem("password", e.target.password.value);
        window.location.href = "/product";
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Email" type="email" name="email" placeholder="Example@gmail.com" />
            <InputForm label="Password" type="password" name="password" placeholder="*****" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;