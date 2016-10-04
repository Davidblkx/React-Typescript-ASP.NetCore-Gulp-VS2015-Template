/// <reference path="index.d.ts" />
import * as React from 'react';
import {render} from 'react-dom';
import {Message} from './Message';
import {Time} from './Time';

interface P { }
interface S { }

class HelloWorld extends React.Component<P, S>{

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Message message="Hello World!" />
                <Time />
            </div>
            );
    }
}

render(<HelloWorld />, document.getElementById('hello-world-content'));