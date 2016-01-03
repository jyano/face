URLPLUG = function () {
	// Prototype for an observable<->URL binding plugin.
	(function () {
		var currentParams = {}, updateTimer, $ = window.jQuery;
		
		function ensureString(value) {
			return ((value === null) || (value === undefined)) ? value : value.toString();
		}
		
		// Gives an address (URL) to a view model state
		ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
			// When the observable changes, update the URL
			observable.subscribe(function (value) {
				var valueToWrite = value === defaultValue ? null : ensureString(value);
				if (currentParams[hashPropertyName] !== valueToWrite) {
					currentParams[hashPropertyName] = valueToWrite;
					queueAction(function () {
						for (var key in currentParams)
							$.address.parameter(key, currentParams[key]);
						$.address.update();
					});
				}
			});
			// When the URL changes, update the observable
			$.address.change(function (evt) {
				currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
				observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
			});
		}
		function queueAction(action) {
			if (updateTimer)
				clearTimeout(updateTimer);
			updateTimer = setTimeout(action, 0);
		}
		
		$.address.autoUpdate(false);
	})()
}
function ensureString(value) {
	return ((value === null) || (value === undefined)) ? value : value.toString();
}
URLBINDPLUGIN = function () {
// Prototype for an observable<->URL binding plugin.
	ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
		// When the observable changes, update the URL
		observable.subscribe(function (val) {
			var valueToWrite = val === defaultValue ? null : ensureString(val);
			if (currentParams[hashPropertyName] !== valueToWrite) {
				currentParams[hashPropertyName] = valueToWrite;
				queueAction(function () {
					for (var key in currentParams)
						$.address.parameter(key, currentParams[key])
					$.address.update()
				})
			}
		})
		// When the URL changes, update the observable
		$.address.change(function (evt) {
			currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
			observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
		})
	}
	var currentParams = {}, updateTimer
	// Gives an address (URL) to a view model state
	ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
		// Gives an address (URL) to a view model state
// $.address.autoUpdate(false)
// Prototype for an observable<->URL binding plugin.
		observable.subscribe(function (value) {
			// When the observable changes, update the URL
			var valueToWrite = value === defaultValue ? null : ensureString(value);
			if (currentParams[hashPropertyName] !== valueToWrite) {
				currentParams[hashPropertyName] = valueToWrite;
				queueAction(function () {
					for (var key in currentParams)
						$.address.parameter(key, currentParams[key]);
					$.address.update();
				});
			}
		})
		// When the URL changes, update the observable
		$.address.change(function (evt) {
			// CAN'T FIND '$.address'	
			currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
			observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
		})
	}
	function queueAction(action) {
		if (updateTimer) {
			clearTimeout(updateTimer)
		}
		updateTimer = setTimeout(action, 0);
	}
	
	function something() {
		var currentParams = {}, updateTimer
		// $.address.autoUpdate(false)
	}
}