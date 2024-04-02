/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const Button = ({ classname = "bg-blue-700", onClick, children, type = "button", }) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname ? classname : "bg-green-700"} text-white`} type={type} onClick={onClick}>
            {children ? children : "Submit"}
        </button>
    )
}

export default Button;