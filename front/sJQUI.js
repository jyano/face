$.wd = $.wg = $.wid = $.widget
UI_hide = function ($el) {
	return $el.rmK("ui-helper-hidden-accessible");
}
UI_btRm = function ($el) {
	$el.button.button("destroy").remove();
	return $el
}
$.fn.UIHide = function () {
	return this.K("ui-helper-hidden-accessible")
}
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
$.fn.dgb = $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.ef = $.fn.effect
$.fn.zLite = function (type, icon) {
	var e = this
	icon = icon ? icon : (type === 'highlight') ?
			'ui-icon-info' : 'ui-icon-alert'
	return e.each(function () {
		var d
		$(this).K('ui-widget')
		d = $.d([$.sp().K("ui-icon '+icon+'").css({float: 'left', 'margin-right': '3em'}),
			$(this).text()])
		d.K('ui-state-' + type + 'ui-corner-all').css({padding: '0 .7em'})
		$(this).html(d)
	})
}
$.fn.error = function () {
	this.zLite('error')
}
$.fn.highlight = function () {
	this.zLite('highlight')
}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.fI = $.fn.fadeIn
$.fn.wd = $.fn.wg = $.fn.wid = $.fn.widget
$.fn.hd = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'up') {
			o.d = 'up'
		}
		if (o.d == 'down') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.hide(ef, o, ms)
}
$.fn.sh = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'u') {
			o.d = 'up'
		}
		if (o.d == 'd') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.show(ef, o, ms)
}
$.fn.ps = $.fn.position
$.fn.tIx = function (a, b) {
	a = this.at('tabindex', a)
	if (b) {
		a.v(b)
	}
	return a
}
$.fn.dtp = $.fn.datepicker // CSS Framework
//   list of the class names
// used by jQuery UI.
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
//jqAnim:
$.fn.bt = function (op) {
	this.bt(op)
	return this
}
cols = {red: M.fl(M.r() * 256), green: M.fl(M.r() * 256), blue: M.fl(M.r() * 256)}
Col = function (op) {
	var rgb = "rgb(" + op.red + "," + op.green + "," + op.blue + ")"
	return rgb
}
$.wd("custom.colorize", {
	// default options
	options: {
		red: 255, green: 0, blue: 0,
		change: null,
		random: null
	},
	// the constructor
	_create: function () {
		var wd = this, q = wd.element
		// prevent double click to select text
		q.K('col').disableSelection()
		// bind click events on the changer button to the random method
		// _on won't call random when widget is disabled
		var bt = wd.changer = $.bt('change')
				.K('changer').a2(q).C('z', 'w')
		wd._on(bt, {click: "random"})
		wd._refresh()
	},
	// called when created, and later when changing options
	_refresh: function () {
		var wd = this, op = wd.options, q = wd.element
		q.C(Col(op))
		wd._trigger("change")
	},
	random: function (ev) {
		// a public method to change the color to a random value
		// can be called directly via .colorize( "random" )
		var wd = this, op = wd.options,
				q = wd.element
		// trigger an event, check if it's canceled
		if (wd._trigger("random", ev, cols)) {
			wd.option(cols)
		}
	},
	_destroy: function () {
		// events bound via _on are removed automatically
		// revert other modifications here
		var wd = this, op = wd.options,
				q = wd.element
		// remove generated elements
		wd.changer.rm()
		q.rmK("col").enableSelection()
				.C("transparent")
	},
	_setOptions: function () {
		// _setOptions is called with a hash of all options that are changing
		// always refresh when changing options
		var wd = this, op = wd.options,
				q = wd.element, g = G(arguments)
		// _super and _superApply handle keeping the right this-context
		wd._superApply(g)
		wd._refresh()
	},
	_setOption: function (k, v) {
		// _setOption is called for each individual option that is changing
		var wd = this, op = wd.options,
				q = wd.element
		// prevent invalid color values
		if (/red|green|blue/.test(k) && (v < 0 || v > 255)) {
			return
		}
		wd._super(k, v)
	}
})
// FROM THIS AMAZING VIDEO (not on youtube): https://vimeo.com/22686559
$.wg("aj.flb", {//filterable
	options: {k: ''},
	_create: function create() {
		var wg = this, q = wg.element, op = wg.options
		q.ch().K("ui-widget-content " + op.k)
		wg.filterIp = $.ip().iBf(q).wr($.dK('ui-widget-header', op.k))
		wg.timeout = false
		wg._on(q.ch(), {
			mouseenter: "_hover",
			mouseleave: "_hover"
		})
		this._focusable(ip)   // :toggles ui-state-focus
		// _hoverable works for ui-state-hover,
		// but we will do something slighty different in our hover
		this._on(ip, {
			keyup: "filter"
		})
	},
	_hover: function (e) {
		var q = $(e.target)
		q.tK("ui-state-active",
				e.type === "mouseenter")
		this._trigger("hover", e, {hovered: q})
	},
	_setOption: function (k, v) {
		var g = G(arguments)
		switch (k) {
			case "length":
				break
		}
		return this._superApply(g)
	},
	_destroy: function () {
		var wg = this
		wg.flIp.parent().rm()// Remove any new elements that you created
		wg.flEls.rK(
				"ui-widget-content ui-helper-hidden ui-state-active " +
				wg.op.k) // Remove classes you applied
		return wt._super()
	},
	filter: function filt(e) {
		var wg = this
		// Debounce the keyup event with a timeout, using the specified delay
		_.cT(wg.timeout)
		wg.timeout = wg._delay(
				function () {
					
					// Trigger a callback so the user
					// can respond to filtering being complete
					// Supply  an object of useful
					// parameters with the second argument to _trigger
					this._trigger("filtered", event, {
						visible: this.filterEls.filter(function () {
							var q = $(this)
							var matches = $REi(wg.filterIp.val()).test(q.text())
							q.tK("ui-helper-hidden", !matches)
							return matches
						})
					})
				},
				op.delay
		)
	}
})
//https://www.youtube.com/watch?v=fA1NW-T1QXc
