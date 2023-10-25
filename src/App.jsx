/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Button({ variant, text }) {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant ? variant : "bg-green-700"} text-white`} type="submit">
      {text ? text : "Submit"}
    </button>
  )
}

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-600 items-center min-h-screen">
        <div className="flex gap-x-2">
          <Button variant="bg-red-700" text="Login" />
          <Button variant="bg-slate-700" text="Logout" />
          <Button variant="bg-black" text="Register" />
          <Button />
        </div>
      </div>
    </>
  )
}

export default App
