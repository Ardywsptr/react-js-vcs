/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor');
    }

    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount() {
        this.setState({ count: 10 });
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count === 10) {
            this.setState({ count: 0 })
        }
        console.log("componentDidUpdate");
    }

    render() {
        return (
            <div className="flex items-center justify-center my-5" >
                <h1 className="text-3xl text-black mr-5">{this.state.count}</h1>
                <Button onClick={this.handleCount}>+</Button>
                {console.log('render')}
            </div>
        )
    }
}

export default Counter