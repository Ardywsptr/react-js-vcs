import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <AuthLayouts title="Login" >
            <FormLogin />
            <p className="text-sm mt-5 text-center">Dont have an account?
                <Link className="text-blue-600 font-bold" to="/register"> Sign up</Link>
            </p>
        </AuthLayouts>
    )
}

export default LoginPage;