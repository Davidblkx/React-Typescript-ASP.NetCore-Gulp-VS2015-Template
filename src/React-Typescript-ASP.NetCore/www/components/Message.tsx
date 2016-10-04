/// <reference path="index.d.ts" />
import * as React from 'react';

interface P {
    message: string
}
interface S { }

class Message extends React.Component<P, S>{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                {this.props.message}
            </p>
            );
    }

}

export {Message};