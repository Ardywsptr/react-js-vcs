import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Full Name" type="text" name="fullName" placeholder="insert your full name here..." />
            <InputForm label="Email" type="email" name="email" placeholder="Example@gmail.com" />
            <InputForm label="Password" type="password" name="password" placeholder="*****" />
            <InputForm label="Confirm Password" type="password" name="confirm-password" placeholder="*****" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;