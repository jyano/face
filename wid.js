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
$.fn.wd=$.fn.wg = $.fn.wid = $.fn.widget
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
$.wd=$.wg = $.wid = $.widget
DPB = function () {
	$.x('b', 'dpb')
	$CSS({
		$dgb: {C: 'r', w: 100, h: 100},
		$dpb: {
			p: 'a',
			C: 'o', c: 'b',
			l: 250, t: 0, w: 400, h: 400,
			pad: 10
		}
	})
	dp = $.d(['Drop here']).id('dpb')
	dg = $.d(['Drag me']).id('dgb')
	$("#dgb").dgb()
	$("#dpb").dpb({
		drop: function () {
			dp.C($r()).A(dg.XY(0, 0))
		}
	})
	function alt() {
		JU30 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
		JU31 = DPB = function () {
			$.x('b', 'dpb')
			$CSS({
				$dgb: {C: 'r', w: 100, h: 100},
				$dpb: {
					p: 'a',
					C: 'o', c: 'b',
					l: 250, t: 0, w: 400, h: 400,
					pad: 10
				}
			})
			dp = $.d(['Drop here']).id('dpb')
			dg = $.d(['Drag me']).id('dgb')
			$("#dgb").dgb()
			$("#dpb").dpb({
				drop: function () {
					dp.C($r()).A(dg.XY(0, 0))
				}
			})
		}
		JU32 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
	}
}
PRG = UI3 = PROG = function () {
	l = $s({
		_wr: {
			P: 10, C: 'r',
			w: 100
		}
	})
	d = $.d()
	wr = d.progressbar({
		value: false
	}).D_('wr').dg()
	wr.A($.h1('hello'))
	d.bind("progressbarchange", function () {
		alert("The value has changed!");
	})
}
NV3 = AUTOCP = function () {
	$.x('x', 'autocp')
	availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
		"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
		"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
	$.d([
		$.lb('Tags:').for('tags'), $.ip().id('tags')
	]).K('ui-widget')
	$(function () {
		$("#tags").autocomplete({source: availableTags})
	})
	function other() {
		AUTOCOMP = function () {
			z()
			$.lb('Select a programming language: ', "autocomplete")
			$.ip().id("autocomplete")
			tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
			$("#autocomplete").autocomplete({
				source: function (request, response) {
					var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
					response($.grep(tags, function (item) {
						return matcher.test(item);
					}));
				}
			})
		}
	}
	
	alt = function () {
		NV4 = UI56 = AUTOCP = function () {
			$.x('x', 'autocp')
			availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
				"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
				"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
			$.d([
				$.lb('Tags:').for('tags'), $.ip().id('tags')
			]).K('ui-widget')
			$(function () {
				$("#tags").autocomplete({source: availableTags})
			})
			function other() {
				AUTOCOMP = function () {
					z()
					$.lb('Select a programming language: ', "autocomplete")
					$.ip().id("autocomplete")
					tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
					$("#autocomplete").autocomplete({
						source: function (request, response) {
							var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
							response($.grep(tags, function (item) {
								return matcher.test(item);
							}));
						}
					})
				}
			}
		}
	}
}
NV4 = MENU = function () {
	$CSS({'.ui-menu': {w: 150}})
	$.ul([
		$.li(['Hockey']),
		$.li(['Football', $.ul([
			$.li('Iain Hume'),
			$.li('Del Piero'),
			$.li('David James')])]),
		$.li(['Cricket', $.ul([
			$.li('Sachin'),
			$.li('Ganguly'),
			$.li('Dravid'),
			$.li('yano')
		])]).A(),
		$.li(['KickBoxing']).K('ui-state-disabled'),
		$.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
	]).id('menu')
	$("#menu").menu()
}
JU33 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$(window).resize(function () {
		ovL.WH($(document).W(),
				$(document).H()).hd().fI()
	})
}
UI1 = TIP = function () {
	$.p([
		$.a('text goes here: ').ti('description, yo'),
		$.ip().ti('little help..')
	])//.tooltip()
	$(document).tooltip()
}
UI2 = DIAL = function () {
	$.dlg = function (msg) {
		var dlg = $("#response-dialog")
		if (!dlg[0]) {
			dlg = $.d().at({
				title: "Messaage",
				id: "response-dialog"
			})
		}
		dlg.html(msg).dialog({
			autoOpen: true,
			width: 400, modal: true,
			closeOnEscape: true,
			buttons: {
				Ok: function () {
					dlg.dialog("close")
				}
			}
		})
	}
	$l('dial')
	$.x(null, 'dialog')
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(30, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
IP1 = FOC = SPANFOCUS = function () {
	$.sp('Some Span').id("my-span").at('tabindex', "0")
	$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
	$.sp('Some Span2').id("my-span2").at('tabindex', "0")
	document.getElementById('my-span').focus()
	document.getElementById('my-span2').focus()
}
IP2 = DATEPICK = function () {
	$.d().id("datepicker")
	$("#datepicker").datepicker()
	function alt() {
		$.p('Date: ').A($.ip().id('dtp'))
		$('#dtp').dtp()
		d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
	}
}
IP3 = SETRADIOBTUI = function () {
	
	/*
	 $.f([$.fs([$.lg('Favorite jQuery Project'),
	 $.dI('radio',[
	 $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
	 $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
	 $.lb('Color','color'), $.rb('project', 'color')
	 ])
	 ])])
	 */
	$.dI('radio', [
		$.lb('Sizzle', 'sizzle'), $.rb('project', 'sizzle'),
		$.lb('Qunitz', 'color'), $.rb('project', 'color'),
		$.lb('Color', 'qunit'), $.rb('project', 'qunit', '+')
	])
	$("#radio").buttonset()
}
IP4 = SLIDER = RANGEUI = function () {
	$s({_slider: {M: 12}});
	$.dI('slider').slider()
}
IP5 = NUMSPINN = function () {
	$.ip().A().C('o').spinner()
}
EF1 = COLORANIM = CANIM = function () {
	function alt() {
		JU1 = COLORANIM = CANIM = function () {
			$.x()
			$CSS(
					{
						$el: {
							C: '#aaa', c: '#006', fZ: 25,
							tA: 'c', P: '1em'
						}
					}
			)
			$.d().id('el').A('-color anim-')
			$.bt('anim!', function () {
						$("#el").an({
							c: 'g',
							C: "rgb(20,20,20)"
						})
					}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
			 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
			
			 The following properties are supported:
			
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
			
			 link
			 */
		}
	}
	
	$.x()
	$CSS(
			{
				$el: {
					C: '#aaa', c: '#006', fZ: 25,
					tA: 'c', P: '1em'
				}
			}
	)
	$.d().id('el').A('-color anim-')
	$.bt('anim!', function () {
				$("#el").an({
					c: 'g',
					C: "rgb(20,20,20)"
				})
			}
	)
	/*
	 Color Animation
	 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
	 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
	
	 The following properties are supported:
	
	 backgroundColor
	 borderBottomColor
	 borderLeftColor
	 borderRightColor
	 borderTopColor
	 color
	 columnRuleColor
	 outlineColor
	 textDecorationColor
	 textEmphasisColor
	 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
	 Class Animations
	 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
	
	 link
	 */
}
EF2 = HIGHLIGHT = HLT = function () {
	$s({
		p: {C: 'y', w: 200, B: '1px solid green'},
		d: {C: 'r', w: 100, h: 100}
	})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
	$.dK('target')
	$.bt('Highlight: ', function () {
		$(".target").ef("highlight",
				{color: "#669966"}, 3000)
	})
	function alt() {
		JU44 = HIGHLIGHT = HLT = function () {
			$.h({
				p: {C: 'y', w: 200, B: '1px solid green'},
				d: {C: 'r', w: 100, h: 100}
			})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
			$.dK('target')
			$.bt('Highlight: ', function () {
				$(".target").ef("highlight",
						{color: "#669966"}, 3000)
			})
		}
	}
}
EF3 = HIDESHOWNICE = HIDE = function () {
	$s({
		p: {C: '#bca', w: 200, bor: '1px solid green'},
		div: {w: 100, h: 100, C: 'r'}
	})
	$.p('$')
	$.bt('hd').id('hd')
	$.bt('sh').id('sh')
	d = $.dK('tg')
	$('#hd').$(function () {
		d.hd('sl', {d: 'r'}, 500)
	})
	$('#sh').$(function () {
		d.sh('sl', {d: 'd'}, 2000)
	})
	function alt() {
		JU33 = HIDESHOWNICE = HIDE = function () {
			$.s({
				p: {C: '#bca', w: 200, bor: '1px solid green'},
				div: {w: 100, h: 100, C: 'r'}
			})
			$.p('$')
			$.bt('hd').id('hd')
			$.bt('sh').id('sh')
			d = $.dK('tg')
			$('#hd').$(function () {
				d.hd('sl', {d: 'r'}, 500)
			})
			$('#sh').$(function () {
				d.sh('sl', {d: 'd'}, 2000)
			})
		}
	}
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
CWID = function () {
	$s({
		_col: {
			fS: 20, position: 'relative',
			w: 75, h: 75
		},
		_changer: {
			fS: 10, position: 'absolute',
			right: 0, bottom: 0
		}
	})
	$.dK('w1').A('color me')
	$.dK('w2').A('color me')
	$.dK('w3').A('color me')
	$(".w1").colorize()
	$(".w2").colorize({
		red: 60,
		blue: 60
	})
	// initialize with custom green value
	// and a random callback to allow only colors with enough green
	$(".w3").colorize({
		green: 128, random: function (event, ui) {
			return ui.green > 128
		}
	})
	function bts() {
		$.bt('Toggle disabled option', function () {
			// use the custom selector created for each widget to find all instances
			// all instances are toggled together,
			// so we can check the state from the first
			if ($(":custom-colorize").colorize("option", "disabled")) {
				$(":custom-colorize").colorize("enable")
			}
			else {
				$(":custom-colorize").colorize("disable")
			}
		})
		$.bt('Go green', function () {
			
			// click to set options after initialization
			var green = {red: 64, green: 250, blue: 8}
			$(":custom-colorize").colorize("option", green)
		})
	}
	
	bts()
}
//http://code.tutsplus.com/courses/jquery-ui-301-the-widget-factory/lessons/the-widget-method
ob = {
	_setOptions: function () {
		this._superApply(arguments)
	},
	_setOption: function (key, val) {
		this._super(key, val)
		if (key == 'buttons') {
			this.shell
					.fi('button').rm()
			this._createButtons()._renderMarkup()
		}
		else if (key == 'disabled') {
			this.shell.fi('button')
					.button('option', key, val)
		}
	},
	_create: function () {
		var wg = this
		var q = wg.element
		q.K('jy-clc')
		wg._createWrapper()
		wg._createButtons()
		wg._renderMarkup()
		wg._on({'click button': this._handleClick})
		wg._setup()
	},
	_setup: function () {
		this.curDp = [];
		this.runDp = [];
		this.numIp = false;
		return this
	},
	_createWrapper: function () {
		var wg = this
		this.shell = $('<div>').id('jy-clc-shell').A(
				$.dI('jy-clc-displays').A(
						$.dK('jy-clc-clculation'),
						$.dK('jy-clc-display').text(0)
				)
		)
		if (!this.options.showOnCreate) {
			this._hide(this.element, this.options.hide, function () {
				wg._trigger('hidden')
			})
		}
	},
	_createButtons: function () {
		var wg = this, ct = $.d().a2(this.shell)
		_.e(wg.options.buttons, function (ob, i) {
			var trgRes = wg._trigger('beforeAddButton', null, ob), bt
			if (!trgRes) {
				return
			}
			bt = $('<button>')
			bt.text(ob.l)
			bt.button()
			bt.a2(ct)
			if (ob.k) {
				bt.K(ob.k)
			}
			if (S(ob.a)) {
				bt.da('action', ob.a)
			}
			else if (F(ob.a)) {
				var fnN = 'custom' + i
				wg[_ + fnN] = ob.a
				bt.da('action', fnN)
			}
		})
		return wg
	},
	_renderMarkup: function () {
		this.shell.a2(this.element)
	},
	options: {
		buttons: [
			{l: 'MR'}, {l: 'MS'}, {l: 'MC'}, {l: ':)'},
			{l: 'Clear', a: 'clear'},
			{l: 'CE', a: 'clearEntry'},
			{l: '*', a: 'operator'},
			{l: 7, a: 'number'},
			{l: 8, a: 'number'}, {l: 9, a: 'number'},
			{l: '+', a: 'operator'},
			{l: 4, a: 'number'},
			{l: 5, a: 'number'}, {l: 6, a: 'number'},
			{l: '-', a: 'operator'},
			{l: 1, a: 'number'},
			{l: 2, a: 'number'}, {l: 3, a: 'number'},
			{l: '/', a: 'operator'},
			{l: 0, a: 'number'},
			{l: '.', a: 'dot'},
			{l: '=', a: 'equals'}
		],
		showOnCreate: false,
		show: true, hide: true,
		beforeAddButton: null,
		shown: null,
		hidden: null
	},
	show: function () {
		var wg = this
		this._show(this.element, this.options.show, function () {
			wg._trigger('shown')
		})
	},
	hide: function () {
		var wg = this
		this._hide(this.element, this.options.hide, function () {
			wg._trigger('hidden')
		})
	},
	_destroy: function () {
		var q = this.element
		q.rK('jy-clc')
		q.E()
	},
	_a2CurDp: function (a) {
		this.curDp.push(a);
		this._udDp()
		return this
	},
	_clear: function (e, ui) {
		this._setup()
		this._udDp()
		this._udRunDp()
		this.element.fi('.jy-clc-display').tx(0)
	},
	_clearEntry: function (e, q) {
		var wg = this, q = this.element
		wg.curDp = []
		wg._udDp()
	},
	_handleClick: function (e) {
		var bt = $(e.target).closest('button'),
				fn = bt.da('action')
		if (fn) {
			this['_' + fn](e, bt)
		}
	},
	_number: function (e, ui) {
		this.curDp.push(ui.text())
		this._udDp()
		this.numIp = true
	},
	_dot: function (e, ui) {
		var hasDot = false,
				len = _.z(this.curDp)
		if (!len) {
			this.curDp.push('0')
		}
		while (--len >= 0) {
			if (this.curDp[len] == '.') {
				hasDot = true;
				break;
			}
		}
		if (hasDot) {
			return false
		}
		else {
			this._a2CurDp('.')
			//this.curDp.push('.');this._udDp()
		}
	},
	_operator: function (e, o) {
		var wg = this,
				q = wg.element,
				curDp = wg.curDp, runDp = wg.runDp,
				dpEl = q.fi('.jy-clc-display'), arr, str, len, newStr
		//if someone clicks an op-bt before any num-bt clicked,
		//both curDp and runDp arrays will be empty.
		//so if they ARE empty, then we can push
		//whatever is on the 'main' display into current display
		//(at this point it would just be '0'..
		//but later on it could be calculation result)
		if (!_.z(curDp) && !_.z(wg.runDp)) {
			curDp.push(
					dpEl.tx()// <- whatever is currently being displayed
			)
		}
		//if it ends with a trailing dot, remove it
		else if (_.l(curDp) == '.') {
			curDp.pop()
		}
		//now we want to update the running display (above main display)
		//with buttons pressed so far
		//(we want to do this either if running display is empty
		// or numIp is true)
		if (!_.z(runDp) || wg.numIp) {
			arr = [curDp.join(''), ' ', o.tx(), ' ']
			//we space out operator for two reasons:
			//1)looks better
			//2)later on, we'll want to break this array up based on the spaces,
			//so that we can easily seperate out the nums and actual operators
			str = arr.join('')
			runDp.push(str)
		}
		//there's one more condition we need to check:
		//if somone one types two operators in a row
		//we want to replace existing operator with one clicked second
		//check if numIp is false   (set to false when operator bt clicked)
		else if (!wg.numIp) {
			len = _.z(runDp)
			newStr = runDp[len - 1]
					.replace(/[\*\-\+\/]/, o.tx())
			runDp.pop()
			runDp.pop(newStr)
		}
		wg.numIp = false
		wg._udRunDp()
		this._clculate()
	},
	_equals: function (e, o) {
		this._clculate(true)
	},
	_udDp: function (reset) {
		var wg = this, dpEl, dpVal
		if (notTooLong(this)) {
			dpEl = this.element.fi('.jy-clc-display')
			if (!_.z(wg.curDp)) {
				dpEl.tx(0)
			}
			else {
				dpVal = wg.curDp.join('');
				dpEl.tx(dpVal)
			}
			if (reset) {
				this.curDp = []
			}
		}
		function notTooLong(wg) {
			return wg.curDp.length < 18
		}
	},
	_udRunDp: function () {
		var wg = this,
				q = wg.element,
				runDp = wg.runDp,
				dpEl = q.fi('.jy-clc-clculation')
		dpEl.tx(runDp.join(''))
		wg.curDp = []
	}
}
//https://www.youtube.com/watch?v=yuqX4oarOwc&list=PLz_6dB4PItBGBrFeexo-BzO9JHDAhjnQq
ob._clculate = function (final) {
	var wg = this, q = wg.element,
			runDp = wg.runDp, tmp, trm, ops, res, run, dp, sum
	if (final) {
		sum = [
			q.fi('.jy-clc-clculation').tx(),
			q.fi('.jy-clc-display').tx()
		].join('')
		wg.curDp = [seqClc(sum)]
		wg._udDp()
		wg.runDp = []
		wg.numIp = false
		wg._udRunDp()
	}
	else if (_.z(runDp) > 1) {
		tmp = runDp.pop()
		trm = tmp.replace(/\s[\+\-\*\/']\s/, '')
		runDp.push(trm)
		res = seqClc(runDp.join(''))
		wg.curDp = [res]
		runDp.pop()
		runDp.push(tmp)
		wg._udDp(true)
	}
	function seqClc(str) {
		var ops = {
					'+': function (x, y) {
						return x + y
					},
					'-': function (x, y) {
						return x - y
					},
					'*': function (x, y) {
						return x * y
					},
					'/': function (x, y) {
						return x / y
					}
				},
				sumA = str.split(' '),
				left = +sumA[0],
				len = _.z(sumA),
				x
		for (x = 1; x < len; x = x + 2) {
			left = ops[sumA[x]](
					left, +sumA[x + 1]
			)
		}
		return left
	}
}
$.wg('jy.clc', ob)
buttons = [{l: 8, a: 'number'}, {l: 9, a: 'number'}, {l: '+', k: 'jy-clc-plus', a: 'operator'},
	{l: 4, k: 'jy-clc-clearfix', a: 'number'}] //{l:'Special', a:function(e,ui){$l('special clear!'+ ui)}}
CALC = function () {
	$s({bt: {w: 100, h: 120}, '.jy-clc-display': {fS: 50, c: 'r'}})
	$.a('hide').$(function () {
		$('#clc').clc('hide')
	})
	$.a('show').$(function () {
		$('#clc').clc('show')
	})
	$.a('change').$(function () {
		$('#clc').clc('option', 'buttons', buttons)
	})
	$.a('disabled').$(function () {
		$('#clc').clc('option', 'disabled', true)
	})
	$.a('disable').$(function () {
		$('#clc').clc('disable')
	})
	$.a('enabled').$(function () {
		$('#clc').clc('option', 'disabled', false)
	})
	$.a('enable').$(function () {
		$('#clc').clc('enable')
	})
	d = $.dI('clc').C('s')
	$('#clc').clc({
		//buttons:buttons,
		shown: function () {
			$Ms('shown')
		},
		hidden: function () {
			$Ms('hidden..')
		},
		beforeAddButton: function (ev, ob) {
			if (ob.l == 'MR' || ob.l == 'MS' || ob.l == 'MC') {
				return false
			}
		},
		showOnCreate: true,
		show: true
	})
	$('a').button()
}
// FROM THIS AMAZING VIDEO (not on youtube): https://vimeo.com/22686559
$.wg("aj.flb", {//filterable
	options: {k: ''},
	_create: create,
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
function create() {
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
}
$RE = function (rx, flags) {
	return new RegExp(rx, flags)
}
$REi = function (rx) {
	return new RegExp(rx, 'i')
}
//flilterbale?
SLIDES = function () {
	$Ms('SLIDES')
	$.ul([
		$.li('asdf').data('price', '23.23'),
		$.li('bsdf').data('price', '2.23'),
		$.li('xsdf').data('price', '213.23'),
		$.li('dsdf').data('price', '233'),
		$.li('asdf').data('price', '3.23')
	]).id('cheeses')
	$.dI('reg')
			.A('One pound of each would cost',
			$.sp().id('total')
	)
	total = $("#total")
	cheeses = $("#cheeses")
	reg = $("#reg")
	price = $.sp()
	$.bt('activate', function () {
		if (cheeses.is(":aj-flb")) {
			alert('cheese is!')
			return cheeses.flb("destroy")
		}
		cheeses.flb({
			k: "cheese",
			create: function () {
				reg.K("ui-widget-header cheese").sh()
			},
			filtered: function (ev, ui) {
				var t = 0
				ui.visible.each(function () {
					t += _.pF($(this).da("price"))
				})
				total.T(t.toFixed(2))
			},
			setOption: function (e, ui) {
				ui.option === "k" && reg.tK([ui.original, ui.current].join(' '))
			},
			hover: function (e, ui) {
				if (e.originalEvent.type === "mouseenter") {
					price.text(" - " + ui.hovered.data("price") + " per lb").a2(ui.hovered)
				}
				else {
					price.detach()
				}
			}
		})
		cheeses.on("flbdestroy", function (e, ui) {
			reg.rK("ui-widget-header " + ui.op.k).hd()
		})
		cheeses.flb("filter")
		_.in(3, function () {
			$.C('r')
			cheeses.flb("option", "k", "cheesePlease")
		})
	}).button({
		icons: {primary: "ui-icon-search"}
	})
}
// book, movement: pleasurable js (or javascript for pleasure)
