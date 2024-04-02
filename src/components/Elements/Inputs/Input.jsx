/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name }, ref) => {
    return (
        <input type={type} className="w-full px-3 py-2 text-sm text-slate-700 border rounded placeholder:opacity-50" placeholder={placeholder} name={name} id={name} ref={ref} />
    );
});

export default Input;