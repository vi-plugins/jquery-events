///<reference types="jquery"/>

export default class JQueryPluginEvents {

	/**
	 * Wrap method calls with before and after events (jQuery trigger) on given element
	 *
	 * @param eventName - The event name postfix that will be prefixed with "before." and "after."
	 * @param fn - The function to wrap
	 * @param $element - The element that triggers the event
	 * @param scope - The function scope
	 * @param params - Array of params
	 * @returns {any}
	 */
	public static wrapEvents(eventName: string, fn: Function, $element: JQuery, scope: any, params: any): any {
		let event = $.Event('before.' + eventName);

		// trigger event before function is executed
		$element.trigger(event, params);

		// ignore default function and "after" event if prevented
		if (!event.isDefaultPrevented()) {

			// call wrapped function
			fn.apply(scope, params);

			// trigger event after function was executed
			$element.trigger('after.' + eventName, params);
		}

		return scope;
	}
}
