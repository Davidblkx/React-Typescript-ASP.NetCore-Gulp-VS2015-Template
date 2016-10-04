"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="index.d.ts" />
var React = require('react');
var react_dom_1 = require('react-dom');
var Message_1 = require('./Message');
var Time_1 = require('./Time');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.call(this);
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Message_1.Message, {message: "Hello World!"}), 
            React.createElement(Time_1.Time, null)));
    };
    return HelloWorld;
}(React.Component));
react_dom_1.render(React.createElement(HelloWorld, null), document.getElementById('hello-world-content'));
//# sourceMappingURL=HelloWorld.js.map