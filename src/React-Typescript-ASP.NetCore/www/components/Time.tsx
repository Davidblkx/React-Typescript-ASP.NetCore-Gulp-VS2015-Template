/// <reference path="index.d.ts" />
import * as React from 'react';

interface P { }
interface S {
    seconds: number
}

class Time extends React.Component<P, S>{
    interval: number = 0;

    constructor(state) {
        super(state);
        this.state = {
            seconds: 0
        }
    }

    updateTick = () => {
        const sec = this.state.seconds + 1;

        this.setState({
            seconds: sec
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds: {this.state.seconds}</div>
            );
    }
}

export {Time}