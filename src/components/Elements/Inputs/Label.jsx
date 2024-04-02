/* eslint-disable react/prop-types */
const Label = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-bold text-slate-700">{children}</label>
    )
}

export default Label;