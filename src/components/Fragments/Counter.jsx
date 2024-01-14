import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div className="flex items-center justify-center my-5">
                <h1 className="text-3xl text-black mr-5">{this.state.count}</h1>
                <Button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</Button>
            </div>
        )
    }
}

export default Counter;