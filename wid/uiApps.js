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
Col = function(op){
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
				.K('changer').a2(q).C('z','w') 
		wd._on(bt, {click: "random"})
		wd._refresh()
	},
	// called when created, and later when changing options

	
	_refresh: function () {var wd = this, op = wd.options, q = wd.element
		
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
			return}
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
