"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="index.d.ts" />
var React = require('react');
var Message = (function (_super) {
    __extends(Message, _super);
    function Message(props) {
        _super.call(this, props);
    }
    Message.prototype.render = function () {
        return (React.createElement("p", null, this.props.message));
    };
    return Message;
}(React.Component));
exports.Message = Message;
//# sourceMappingURL=Message.js.map