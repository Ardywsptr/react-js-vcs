import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Button";

function FormLogin() {
    return (
        <form action="">
            <InputForm label="Email" type="email" name="email" placeholder="Example@gmail.com" />
            <InputForm label="Password" type="password" name="password" placeholder="*****" />
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin;