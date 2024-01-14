import { useState } from "react";
import Button from "../Elements/Button";

function Counter() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div className="flex items-center justify-center my-5">
            <h1 className="text-3xl text-black mr-5">{count}</h1>
            <Button onClick={handleCount}>+</Button>
        </div>
    )
}

export default Counter;