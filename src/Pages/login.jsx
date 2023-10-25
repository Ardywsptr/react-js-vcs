import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

function LoginPage() {
    return (
        <AuthLayouts title="Login" >
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage;