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
$.fn.ps = $.fn.position
$.fn.tIx = function (a, b) {
	a = this.at('tabindex', a)
	if (b) {
		a.v(b)
	}
	return a
}
// CSS Framework
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
/*

 :data() Selector
 Selects elements which have data stored under the specified key.
 Also in: UI Core
 :focusable Selector
 Selects elements which can be focused.
 Also in: UI Core
 :tabbable Selector
 Selects elements which the user can focus via tabbing.
 */