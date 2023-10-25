/* eslint-disable react/prop-types */
function Input({ type, placeholder, name }) {
    return (
        <input type={type} className="w-full px-3 py-2 text-sm text-slate-700 border rounded placeholder:opacity-50" placeholder={placeholder} name={name} id={name} />
    )
}

export default Input;