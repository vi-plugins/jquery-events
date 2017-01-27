/// <reference types="jquery" />
export default class JQueryPluginEvents {
    /**
     * Wrap method calls with before and after events (jQuery trigger) on given element
     *
     * @param $element - the element that triggers the event
     * @param eventName - the event name postfix that will be prefixed with "before." and "after."
     * @param fn - the function to wrap
     * @param params (optional) - Array of params attached to both triggered events
     * @returns {any} - returns the result, if any, of the given function call
     */
    static wrapEvents($element: JQuery, eventName: string, fn: Function, params?: any): any;
}
