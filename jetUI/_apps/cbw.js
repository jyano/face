CB1=UI13 = CBW = function () {
	z()
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
	$(html).A()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	// Create three checkbox instances.
	$(function () {
		$("input[type='checkbox']").checkbox();
	});
}
CB2 = UCBW1 = function () {
	z()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	s = $('<span>').A(
			$('<div>').A(
					$.cb().id('sm'),
					$.lb('Small', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('md'),
					$.lb('Medium', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('lg'),
					$.lb('Large', 'check').K('ui-widget'))
	).A()
	$("input[type='checkbox']").checkbox();
}
CB3 = UUI12 = CBW = function () {
	z()
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
	$(html).A()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	// Create three checkbox instances.
	$(function () {
		$("input[type='checkbox']").checkbox();
	});
}
CB4 = UCBW1 = function () {
	z()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	s = $('<span>').A(
			$('<div>').A(
					$.cb().id('sm'),
					$.lb('Small', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('md'),
					$.lb('Medium', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('lg'),
					$.lb('Large', 'check').K('ui-widget'))
	).A()
	$("input[type='checkbox']").checkbox();
}