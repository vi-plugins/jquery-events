///<reference types="jquery"/>

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
	public static wrapEvents($element: JQuery, eventName: string, fn: Function, params: any = []): any {
		let event = $.Event('before.' + eventName);
		let result;

		if(!$.isFunction(fn)) {
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
	}
}
