# jQuery Plugin Events

An event helper class written with TypeScript for the [jQuery Plugin Boilerplate](https://github.com/virtualidentityag/jquery-plugin-boilerplate)
It contains generic functions that simplify event handling within all kinds of plugins

## Naming convention

The naming convention pattern should be: `[?prefix].[action].[?area].[pluginName]`

- `prefix` (optional) - the prefix mostly describes the temporal state like `before` or `after`
- `action` - this is the most important part of the event name. It describes the action of that specific event
- `area` (optional) - if the action is not global or clear on its own, add an area where this action occurs.
- `pluginName` - surprise surprise.... this is the name of the plugin

### Examples
- `init.slider`
- `slide.carousel`
- `after.init.accordion`
- `change.header.table`
- `before.slide.carousel`
- `after.change.header.table`

## wrapEvents

This static function is used to automatically wrap jQuery events `before` and `after` a given function.
Because it uses jQuery [Events](https://api.jquery.com/category/events/event-object/) you can stop the ongoing process within the initial `before` event by setting `event.preventDefault()`

### Parameters
- `$element` - the jQuery element on which the event is fired
- `eventName` - the desired event name excluding the `before`/`after` prefixes
- `fn` - the function
- `params` (optional) - optional params that will be added to the events

### Example

#### import EventHelper from npm package
```typescript
import EventHelper from "jquery-plugin-events";
```

#### wrap events around the method
```typescript
EventHelper.wrapEvents('action.pluginName', () => {
	console.log('action goes here');
}, this.$element, this, ['some param']);
```

#### catch before and after event on the given element
```typescript
this.$element.on('before.action.pluginName', (e) => {
	console.log('before action');
	// prevent method and after-event of being executed
	// e.preventDefault();
});

this.$element.on('after.action.pluginName', () => {
	console.log('after action');
});
```
