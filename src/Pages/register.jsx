import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <AuthLayouts title="Register" >
            <FormRegister />
            <p className="text-sm mt-5 text-center">Have an account?
                <Link className="text-blue-600 font-bold" to="/login"> Sign in</Link>
            </p>
        </AuthLayouts>
    )
}

export default RegisterPage;