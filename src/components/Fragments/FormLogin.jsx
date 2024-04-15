/* eslint-disable no-unused-vars */
import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
    function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem("email", e.target.email.value);
        localStorage.setItem("password", e.target.password.value);
        window.location.href = "/product";
    }

    // useRef dengan props
    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Email" type="email" name="email" placeholder="Example@gmail.com" ref={emailRef} />
            <InputForm label="Password" type="password" name="password" placeholder="*****" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;