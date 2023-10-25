/* eslint-disable react/prop-types */
function Button({ classname, children }) {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname ? classname : "bg-green-700"} text-white`} type="submit">
            {children ? children : "Submit"}
        </button>
    )
}

export default Button;