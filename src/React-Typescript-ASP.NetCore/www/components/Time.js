"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="index.d.ts" />
var React = require('react');
var Time = (function (_super) {
    __extends(Time, _super);
    function Time(state) {
        var _this = this;
        _super.call(this, state);
        this.interval = 0;
        this.updateTick = function () {
            var sec = _this.state.seconds + 1;
            _this.setState({
                seconds: sec
            });
        };
        this.state = {
            seconds: 0
        };
    }
    Time.prototype.componentDidMount = function () {
        this.interval = setInterval(this.updateTick, 1000);
    };
    Time.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    Time.prototype.render = function () {
        return (React.createElement("div", null, 
            "Seconds: ", 
            this.state.seconds));
    };
    return Time;
}(React.Component));
exports.Time = Time;
//# sourceMappingURL=Time.js.map