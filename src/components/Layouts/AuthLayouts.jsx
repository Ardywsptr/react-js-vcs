/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {

    const linkText = type === "login" ? " Register" : " Login";
    const linkUrl = type === "login" ? "/register" : "/login";

    return (
        <div className="flex justify-center items-center min-h-screen">

            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium textslate-500 mb-8">Welcome, Please enter your details</p>
                {children}
                {/* OPSI 3 */}
                <p className="text-sm mt-5 text-center">
                    {type === "login" ? "Don't have an account?" : "Already have an account?"}
                    <Link className="text-blue-600 font-bold" to={linkUrl}>{linkText}</Link>
                </p>
                {/* OPSI 1 */}
                {/* <p className="text-sm mt-5 text-center">
                    {type === "login" ? "Don't have an account?" : "Already have an account?"}
                    {type === "login" && <Link className="text-blue-600 font-bold" to="/register">Login</Link>}
                    {type === "register" && <Link className="text-blue-600 font-bold" to="/login">Register</Link>}
                </p> */}
                {/* OPSI 2 */}
                {/* <Navigation type={type} /> */}
            </div>
        </div>
    )
}

// function Navigation({ type }) {
//     if (type === "login") {
//         return (
//             <p className="text-sm mt-5 text-center">
//                 Dont have an account?
//                 <Link className="text-blue-600 font-bold" to="/register">Register</Link>
//             </p>
//         )
//     } else {
//         return (
//             <p className="text-sm mt-5 text-center">
//                 Already have an account?
//                 <Link className="text-blue-600 font-bold" to="/login">Login</Link>
//             </p>
//         )
//     }
// }


export default AuthLayouts;