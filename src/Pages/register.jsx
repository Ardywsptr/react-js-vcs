import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

function RegisterPage() {
    return (
        <AuthLayouts title="Register" >
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage;