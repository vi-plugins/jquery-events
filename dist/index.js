"use strict";
///<reference types="jquery"/>
Object.defineProperty(exports, "__esModule", { value: true });
var JQueryPluginEvents = /** @class */ (function () {
    function JQueryPluginEvents() {
    }
    /**
     * Wrap method calls with before and after events (jQuery trigger) on given element
     *
     * @param $element - the element that triggers the event
     * @param eventName - the event name postfix that will be prefixed with "before." and "after."
     * @param fn - the function to wrap
     * @param params (optional) - Array of params attached to both triggered events
     * @returns {any} - returns the result, if any, of the given function call
     */
    JQueryPluginEvents.wrapEvents = function ($element, eventName, fn, params) {
        if (params === void 0) { params = []; }
        var event = $.Event('before.' + eventName);
        var result;
        if (!$.isFunction(fn)) {
            throw 'Invalid function provided to wrapEvents';
        }
        // trigger event before function is executed
        $element.trigger(event, params);
        // ignore default function and "after" event if prevented
        if (!event.isDefaultPrevented()) {
            // call wrapped function
            result = fn();
            // trigger event after function was executed
            $element.trigger('after.' + eventName, params);
        }
        return result;
    };
    return JQueryPluginEvents;
}());
exports.default = JQueryPluginEvents;
