/* eslint-disable no-unused-vars */
import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setloginFailed] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        // localStorage.setItem("email", e.target.email.value);
        // localStorage.setItem("password", e.target.password.value);
        // window.location.href = "/product";
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res);
                window.location.href = '/product';
            } else {
                setloginFailed(res.response.data);
            }
        })
    }

    // useRef dengan props
    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm label="Username" type="text" name="username" placeholder="John Doe" ref={usernameRef} />
            <InputForm label="Password" type="password" name="password" placeholder="*****" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin;