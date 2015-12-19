$.wg("ui.capt", {
	options: {
		loc: "bottom",
		c: "#fff", C: "#000"
	},
	_create: function () {
		var wg = this, q = wg.element, o = wg.options, tx = q.at("alt"), cap = $('<span>').A()
		cap.tx(tx)
		cap.C(o.C).col(o.c)
		cap.W(q.W())
		cap.iA(q).K("ui-widget ui-caption")
		cap.css({
			width: q.W() - _.pI(cap.pL()) - _.pI(cap.pR()),
			top: top(o.loc === "top"),
			left: q.os().left,
			display: "block"
		})
		// custom event:
		wg._trigger("added", null, cap);
		// that can be reacted to.
		// We call the _trigger() method of the plugin instance (which we stored in the variable wg)
		// and pass the method three arguments;
		// the first is the name of the event,
		// the second is for the event object
		// (we don't need to use this in our example plugin, hence the null value)
		// and the third is a reference to the caption element.
		// The widget factory will automatically pass the event object
		// (if supplied) and the data we pass in the third parameter to a callback function
		// that uses the added event. A developer could hook into this event using the following syntax:
		// $("element_caption_attached_to").capt({ added: function(e, ui){ //do stuff });
		//
		$(window).rz(function () {
			$l('wd.rz')
			cap.css({
				top: top(o.loc === "top"),
				left: q.os().left
			})
		})
		function top(bool) {
			return bool ?
					q.os().top :
			q.os().top + q.H() - cap.ouH() - _.pI(cap.pT()) + _.pI(cap.pB())
		}
	},
	destroy: function () {
		this.element.next().remove();
		$(window).unbind("resize")
	},
	_setOption: function (option, value) {
		$.Widget.prototype._setOption.apply(this, arguments)
		var el = this.element, cap = el.next(),
				capH = cap.outerHeight() - parseInt(cap.css("paddingTop"))
						+ parseInt(cap.css("paddingBottom"))
		switch (option) {
			case "loc":
				(value === "top") ? cap.css("top", el.os().top) :
						cap.css("top", el.os().top + el.H() - capH);
				break;
			case "color":
				el.next().css("color", value);
				break;
			case "backgroundColor":
				el.next().css("backgroundColor", value);
				break;
		}
	}
})
CAPT = function () {
	$CSS({'.ui-caption': {d: 'none', position: 'absolute', P: 10}})
	$.C('z')
	$.i('me').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	$.i('chicks').A().at('alt', 'wowowowowoowowo').capt({
		loc: "top"
	})
	//Once the caption has been inserted,
	// it needs to be sized and positioned;
	// the only way it can be sized accurately is if it already exists in the
	// DOM and has CSS rules applied to it, such as the font-size.
	// This is why we append the caption to the page, and then determine its exact dimensions,
	// which are then stored in the variables capW and capH.
	//Once the caption has been appended to the page (and only then) we can work set the correct width, H and position of each caption,
	// which we set using the css() method once again.
	// The captions are actually completely separate from the images;
	// they are inserted directly after each image and then positioned to appear to overlay the images, after all,
	// we can't append
	// the <span> as a child of the <img>.
	//This is fine, until the browser is resized, at which point the images move but the captions don't because they are absolutely positioned.
	// To remedy this, we've used a basic resize handler
	// attached to the window which simply repositions each caption to the new position of its image. This event handler is the last thing in our initialization method.
	//Another method that our plugin should expose is the destroy() method which is common to all jQuery UI plugins.
	// We must provide an implementation of this method in order to clean up after
	// our plugin. For our example plugin, the method can be as simple as this:
	//
	//All we need to do is remove the captions and unbind our window resize handler.
	// This method can be called by an implementer
	// using the plugin so we shouldn't begin this method name with an underscore.
	// To call this method,
	// the implementer would use
	// $("element_caption_attached_to").capt("destroy");
	// which is how any of our public methods would be called.
	//We start this method with an underscore because the implementer uses option,
	// not _setOption to actually change the options; we don't need to worry about how this is handled,
	// we just need to provide this method to deal with anything specific to our plugin.
	// Because this method already exists in the widget factory we should call the original method,
	// which we do first of all in our method using the prototype of the Widget object,
	// specifying the method name (_setOption in this case but we could do it for other built-in methods as well)
	// and use apply to call it.
	//The function will automatically receive two arguments
	// which are the option to change and the new value.
	// We cache some commonly used elements,
	// such as the image and the caption, and obtain the current H of each caption.
	// We then use a simple switch-case statement to handle each of our three options being changed.
	// Repositioning the captions is the most complex,
	// but is still quite trivial and similar to how we positioned them initially.
}