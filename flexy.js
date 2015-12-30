SS408 = MOB = MEDIAOBJECT = function () {
	Med = function () {
		$.imgMur = function () {
			return $('<img src=http://www.fillmurray.com/50/50>')
		}
		return $.dK('med').A(
				$.imgMur(),
				$('<div>').K('content').A(yada(18))
		)
	}
	$CSS({
		bd: {P: 50},
		_ex: {B: '8px dashed black', C: 'g'},
		h2: {C: 'z', c: 'o', h: 50, tA: 'c', lH: 50},
		_meds: {C: '_b', dp: 'fl', wr: 'wr'},
		_med: {
			C: '_o', dp: 'fl', _w: 300,
			M: 20, h: 50,
			jfC: 'c'
		},
		i: {mR: 10},
		_content: {shr: 1, gr: 1},
		///
		'.search-group': {dp: 'fl', M: 10},
		ip: {P: 10}, _tIp: {fl: 1}
	})
	$.dK('ex').A(
			$.h2('media object'),
			$.dK('meds').A(
					Med(), Med(), Med()),
			$.hr(),
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('search-group').A(
							$.ip().ph('search').K('tIp'),
							$.sm())
			)
	)
}
SS384 = DVT5 = ALIGNCONTENT = function () {
	$s({
		bd: {tA: 'center'},
		_parent: {
			h: 200,
			dp: 'fl',
			B: '5px solid red',
			dir: 'row-reverse',
			wr: 'wrap',
			jfC: 'space-around',
			alI: 'stretch'
		},
		_item: {
			lH: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 20:30  children finally!!! ORDER
//2350 grow
SS309 = FLD2 = BASISD = function () {
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P: 10},
		_ch1: {
			C: "u",
			fl: '8 1 600px'
		},
		_ch2: {
			C: 'g',
			dp: 'fl',
			fl: '1 2 400px',
			wr: 'wr'
		},
		d: {B: ['bor', 'b']}
	})
	children(8,
			$.dK('ch ch2').a2(
					$.dK('ct').C('w')
			)
	)
	function children(num, parent) {
		_.t(num, function () {
			div().K('ch1').a2(parent)
			function div() {
				return $.d($r(), 40, 40)
			}
		})
		return parent
	}
}
SS299 = DOWN = FLEX_DIR_COLUMN = function () {
	$s({
		bd: {fS: 32},
		_ct: {dp: 'fl', jsC: 'c'},
		_parent1: {
			dp: 'fl',
			dir: 'c',
			w: 300, C: 'o'
		},
		_parent2: {
			dp: 'fl',
			dir: 'cRv',
			w: 500, C: 'o'
		},
		_item: {
			M: 10, c: 'y',
			bas: 80, dp: 'fl',
			jfC: 'c',
			alI: 'c'
		}
	})
	ct = $.dK('ct')
	Parent().K('parent1')
	Parent().K('parent2')
	function Parent() {
		return $.d().a2(ct)
				.A(It(), It(), It(), It(), It(), It())
	}
}
// 12:50 ALIGNITEMS
SS379 = DVT4 = ALIGNITEMS = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			height: 200,
			dp: 'flex',
			B: _bor,
			dir: 'rv',
			wr: 'wr',
			jfC: 'sA',
			alI: 'str'
		},
		_item: {
			lH: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 15:10 ALIGNCT [STRETCH]
SS156 = MED3 = function () {
	$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
	$s("@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
	$.sp().A('span')
	$.h1().A('h1')
	SS16 = MED2 = MEDWORKS = BREAK3 = function () {

//works
		$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
		$s("@media all and (min-width: 960px) { body {color:blue;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
		$.sp('fasd').A()
		$.h1('fasd').A()
	}
}
JQ10 = CORNERS = function () {
	function corners() {
		CORNERS = function () {
			$.fn.grow = function () {
				originalWidth = this.W()
				originalHeight = this.H()
				this.on('mousedown', function (e) {
					mx = e.clientX
					my = e.clientY
					$.mouseMove(function (e) {
						this.WH(originalWidth + e.clientX - mx,
								originalHeight + e.clientY - my)
					})
					$.mouseUp(function () {
						$(this).off()
					})  //mouseUp anything?
					this.children().on('mousedown', function (e) {
						e.stopPropagation()
					})
				})
			}
			//  dva(2, 2, 2, 2 )
			div = $.divA(200, 200).XY(200)
			div.A(
					$.divA('red', 20, 20).top(-10).left(-10),
					$.divA('yellow', 20, 20).bottom(-10).right(-10),
					$.divA('green', 20, 20).top(-10).right(-10),
					$.divA('blue', 20, 20).bottom(-10).left(-10)
			)
			i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
					.width('100%').top(100)
			i.H(W() + ' * ' + H())
			Z(function () {
				i.H(W() + ' * ' + H())
			})
			$.$(function () {
				rat(function () {
					co()
				}, 10)
			})
			i.grow()
		}
		CORNERS = function () {
			$.fn.grow = function () {
				originalWidth = this.W()
				originalHeight = this.H()
				this.on('mousedown', function (e) {
					mx = e.clientX
					my = e.clientY
					$.mouseMove(function (e) {
						this.WH(originalWidth + e.clientX - mx,
								originalHeight + e.clientY - my)
					})
					$.mouseUp(function () {
						$(this).off()
					})  //mouseUp anything?
					this.children().on('mousedown', function (e) {
						e.stopPropagation()
					})
				})
			}
			//  dva(2, 2, 2, 2 )
			div = $.divA(200, 200).XY(200)
			div.A(
					$.divA('red', 20, 20).top(-10).left(-10),
					$.divA('yellow', 20, 20).bottom(-10).right(-10),
					$.divA('green', 20, 20).top(-10).right(-10),
					$.divA('blue', 20, 20).bottom(-10).left(-10)
			)
			i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
					.width('100%').top(100)
			i.H(W() + ' * ' + H())
			Z(function () {
				i.H(W() + ' * ' + H())
			})
			$.$(function () {
				rat(function () {
					co()
				}, 10)
			})
			i.grow()
		}
	}
	
	$.fn.grow = function () {
		originalWidth = this.W()
		originalHeight = this.H()
		this.on('mousedown', function (e) {
			mx = e.clientX
			my = e.clientY
			$.mouseMove(function (e) {
				this.WH(originalWidth + e.clientX - mx,
						originalHeight + e.clientY - my)
			})
			$.mouseUp(function () {
				$(this).off()
			})  //mouseUp anything?
			this.children().on('mousedown', function (e) {
				e.stopPropagation()
			})
		})
	}
	$.divF = $.div
	//  dva(2, 2, 2, 2 )
	div = $.divA(200, 200).XY(200)
	div.A(
			$.divA('red', 20, 20).top(-10).left(-10),
			$.divA('yellow', 20, 20).bottom(-10).right(-10),
			$.divA('green', 20, 20).top(-10).right(-10),
			$.divA('blue', 20, 20).bottom(-10).left(-10)
	)
	i = $.divF('purple').col('white').fontSize(20).al(.2).textAlign('center')
			.width('100%').top(100)
	i.H(W() + ' * ' + H())
	Z(function () {
		i.H(W() + ' * ' + H())
	})
	$.$(function () {
		rat(function () {
			co()
		}, 10)
	})
	i.grow()
}
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
SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
JQ8 = FLASH = function () {
	z();
	timeline = $.dA('+').WH('auto');
	timeline.A($.c('b', 500, 500), $.br());
	_.t(24, function (x) {
		timeline.A(
				$.d('r', 100, 100)
						.css({display: 'inline-block'}).H((x * 10) + 100)
		)
	})
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
SS2 = VANISH = NONE1 = function () {
	$.dK('sidebar').WH(400, 500).C('b')
	$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
}
SS3 = MEDIA = function () {
	sty = '@media only screen and (max-width: 500px) '
	sty += $subRules({bd: {C: 'b'}})
	$.Sty(sty)
}
RUL = SEL = SELECTORS = VAL = RUS = function () {
	$.h1(ru = $rule('d', {C: 'r', c: 'b'}))
	$.hr()
	t = $.t()
	_.e(sels = [
		'd', '_klas_klas', '$id$id', '$'
	], function (sel) {
		t.A(
				$.tr().A(
						$.td(sel).W(100),
						$.td($sel(sel)).W(100)
				)
		)
	})
	$.hr()
	t = $.t()
	sels = {
		C: 'r',
		dp: 'flex'
	}
	_.e(sels, function (val, key) {
		t.A($.tr().A($.td(key + ': ' + val).W(100),
				$.td($val(val, key)).W(100)))
	})
	$.hr()
	css = {d: {C: 'r', c: 'b'}, bt: {C: 'b', c: 'r'}}
	$.h1($rules(css))
	$.br().A()
	$.h1($subRules(css))
}
SS33 = DVT = DEVTIPS = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {B: _bor},
		_item: {lH: 50, h: 50, M: 5}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('parent').A(
					_It(1), _It(2), _It(3),
					_It(4), _It(5)
			))
}
JQ1 = MAG = FRIDGEMAG = function () {
	word = function (text, c1, c2) {
		var s = $.sp(text).C(c1, c2).A().drag()
		return s
	}
	w = word('hello', 'b', 'g');
	word('sicko', 'g', 'b');
	word('why, i oughta..', 'p', 'x');
	word('it was raining..', 'j', 'k');
	word('who ya gonna call?', 'h', 'i');
	word('dag nabit!', 'f', 'g');
	word('i like', 'd', 'e');
	word('tomorrow', 'a', 'c');
	word('me', 'r', 'b')
}
JQ3 = TANGLE = function () {
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
	function alt() {
		TANGLE = function () {
			z()
			a = $.divA('r', 50, 50).XY(50).A().pad(10)
			b = $.divA('b', 100, 100).XY(100).A().pad(10)
			c = $.divA('g', 200, 200).XY(200).A().pad(10)
			d = $.divA('y', 400, 400).XY(400).A().pad(10)
			y = function (aa, bb, cc, dd) {
				if (aa && U(bb)) {
					aa.A().P('a')
				}
				if (bb) {
					bb.A(aa.P('static'))
				}
				if (dd) {
					dd.A(cc.P('s'))
				}
			}
		}
	}
}
JQ4 = HOVERBOX = function () {
	z();
	d = $.d('o', 500, 500, '+').id('test')
	y = $.c('p', 400).K('box').hd();
	d.A(y);
	$('#test').hover(function () {
		$('.box').stop().fadeTo(200, 1)
	}, function () {
		$('.box').stop().fadeTo(200, 0)
	})
}
SS21 = MED = function () {
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") +
	below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	$s(Ob(str1, str2))
	$.sp().A('span')
	$.h1().A('h1')
}
SS399 = LAY = function () {
	col = {
		_body: {dir: 'c'},
		'.c2, .c3': {w: '100%'},
		_c2: {ord: 0}
	}
	$s({
		'header, footer': {P: 20, C: 'gray', c: 'w'},
		_lay: {
			h: 400, C: 'y',
			dp: 'fl', dir: 'c'
		},
		_body: {dp: 'fl', gr: 1, C: 'p', dir: 'row'},
		_c1: {C: '_b', gr: 1},
		_c2: {C: 'g', w: 160, ord: '-1'},
		_c3: {C: 'p', w: 160}//, _phone: $subRules({bd: {C: 'z'}, _body:col})
	})
	sty = '@media only screen and (max-width: 500px) ' +
	$subRules(col)
	$.Sty(sty)
	//$tablet({bd: {C: 'z'}, _body: {dir: 'c'}})
	$.dK('lay').A(
			$.hdr('heead'),
			$.dK('body').A(
					$.dK('c1').A('main').C('b'),
					$.dK('c2').A('nav').C('o'),
					$.dK('c3').A('sidebar').C('g')
			),
			$.ftr('fooot')
	)
}
SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
SS18 = MVD1 = function () {
	vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
}
SS16 = DRB = DRIB = function () {
	Li = function (text) {
		return $.li().A($.a(text))
	}
	Shot = function () {
		return $.a().K('wrap').A(
				$.d().K('shot').A(
						$.i('me'),
						$.dK('meta').A(
								$.dK('views').C('b').col('w').A(' # views '),
								$.dK('comments').C('g').A('comments '),
								$.dK('likes').C('o').A(' likes ')
						)
				),
				$.dK('owner').A($.i('me').K('avatar'),
						$.sp(' - name - ').K('name')))
	}
	$s({
		$: {M: 4},
		_ps: {_w: 970, M: '0 auto'},
		_hdr: {
			dp: 'fl', jfC: 'sB',
			C: 'gray'//, w:'100%'
		},
		_nav: {dp: 'fl', alI: 'c', shr: 1},
		ul: {dp: 'fl'},
		li: {M: '0 20px'},
		_tools: {dp: 'fl', alI: 'c'},
		i: {M: '0 20px', w: 50, h: 50},
		_shots: {dp: 'fl', wr: 'wr', jfC: 'sB', C: 'p'},
		_meta: {dp: 'fl', dir: 'c', jfC: 'end'},
		_shot: {C: 'w'},
		_wrap: {C: 'v'},
		_tool: {w: 20, h: 20}
	})
	shots = $.sc().K('shots ps')
	_.t(8, function () {
		shots.A(Shot())
	})
	$.dK('ex').A(
			$.h2('dribbbl'),
			$.dK('ex-page ex-drib').A(
					$.dK('hdr ps').A(
							$.nav().K('nav ps').A(
									$.i('sun'), // logo
									$.ul().A(Li('Shots'), Li('Designers'),
											Li('Team'), Li('Meetup'), Li('Jobs'),
											Li(_bulls))
							).C('y'),
							$.d().K('tools').A(
									$.i('guy').K('tool'),
									$.i('guy').K('tool'), $.i('guy').K('tool'),
									$.f().A($.ip().ph('Search'))
							).C('r')
					)
					, shots)
	)
// linds with  class shot-wrap
//the shot  (images and meta)
// (meta is views, count, likes? more images?)
// owner (avatar)
}
SS13 = FLD1 = FLXD = function () {
	$s({
		_sB: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sB'},
		_sA: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sA'}
	})
	d = $.d().s({
		dp: 'fl',
		jfC: 'sB'
	})
	d.A(
			$.d('b', 400, 500).K('sB').A(
					$.d('y', 40, 150),
					$.d('z', 200, 50),
					$.d('r', 40, 150),
					$.d('y', 40, 150),
					$.d('z', 200, 50),
					$.d('r', 40, 150)
			),
			$.d('B', 400, 500).K('sB').A(
					$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
			),
			$.i('me'),
			$.d('w', 400, 500).K('sA').A(
					$.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
			),
			$.d('p', 400, 500).K('sA').A(
					$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
			)
	)
}
SS14 = FLD3 = FLEXCTD = function () {
	$.C('r')
	$s({
		'.flex-container': {
			C: 'y',
			display: 'flex',
			'flex-direction': 'row',
			$W: 'w',
			'justify-content': 'space-around',
			'align-content': 'flex-start',
			'align-items': 'stretch'
		},
		//'.flex-items-default': {'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0},
		'.flex-item-1': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
		'.flex-item-2': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-3': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '20px'},
		'.flex-item-4': {C: 'z', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-5': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
}
SS21 = MVD = function () {
	vidHtml();
	$tablet(tabRus);
	$phone(phRus)
}
SS4 = FL0 = function () {
	$.d('b', 400, 500).s({dp: 'fl', jfC: 'sA'}).A(
			$.d('y', 40, 150),
			$.d('z', 200, 50),
			$.d('r', 40, 150)
	)
}
SS10 = QFN = LJQFN = HELLOWHYNOTSPAN = function () {
	css_ = {}
	css_.redDivs = {
		d: {
			C: 'v', c: 'p',
			M: 20, P: 40, h: 420
		},
		sp: {
			C: 'u'
		}
	}
	css_.big = {d: {fZ: 100}}
	$s(css_.redDivs)
	$s(css_.big)
	$.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$('div').e(function () {
		$l('this:', this)
	})
	// $('body').f('div').C("b").r()
}
SS6 = MAR = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
SS8 = RU2 = SIZE = MIXIN = SS9 = RU3 = EXT = function () {
	$CSS({
		d: {
			ex: 'icon',
			C: 'y', c: 'o',
			mixins: {size: [825]}
		}
	}, '*')
	$.d().A('hello')
}
SS22 = MED1 = function () {
	$l('MD.')
	$s(above(960, " { body {font-size: 80px;}  }"),
			between(600, 960, "  {body {font-size: 40px;}}"),
			between(320, 600, "  {body {font-size: 20px;}}"))
	$s(
			above(960, "{ body {color:blue;}  }"),
			between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	)
	$.sp().A('span')
	$.h1().A('h1')
}
SS27 = YELLOWBTS = function () {
	$s({
		d: {h: 100, dp: 'fl'},
		bt: {fl: '3 1 50%'}
	})
	d = $.d()
	_.e([1, 2, 3, 4, 5], function (num) {
		var name = 'button_' + num
		d.A($.bt(name, function () {
					$l('clicked: ' + name)
				}).C('y')
		)
	})
}
SS269 = GREENBTS = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800, M: 0, P: 0, dp: 'fl',
			$D: 'r'
		},
		'$main > button': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	d = $.dI('main')
	_.e([1, 2, 3, 4, 5], function (num) {
		var name = 'button_' + num
		d.A($.bt(name, function () {
			$l('clicked: ' + name)
		}))
	})
}
//7:30 flex-wrap ([nowrap] wrap
// 9:45
SS364 = DVT3 = JUSTIFYCONTENT = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			B: _bor,
			dir: 'rv',
			wr: 'rv',
			jfC: 'sA'
		},
		_item: {
			lH: 50,
			h: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
SS353 = DVT2 = WRAPREV = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			B: _bor,
			dir: 'rv',
			wr: 'rv',
		},
		_item: {
			lH: 50,
			h: 50,
			w: '30%',
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
SS346 = DVT1 = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			border: _bor,
			dir: 'rv'
		},
		_item: {
			lH: 50,
			h: 50,
			w: 50,
			M: 5
		}
	})
	$.h2().T('Display: flex')
	$.dK('parent').A(_It(1), _It(2), _It(3), _It(4), _It(5))
}
SS11 = RU1 = BORDERED = function () {
	$s({
		_bordered: {
			'border-top': 'dotted 1px red',
			'border-bottom': 'solid 2px blue'
		},
		//And we want to use these properties inside other rule-sets.
		// Well, we just have to drop in the name of the class
		// where we want the properties, like so:
		a: {ex: '_bordered', c: 'r'},
		bt: {c: 'r', ex: '_bordered'}
	})
	$.h1().A('bordered').K('bordered')
	$.bt('fsad')
	$.a('fasd')
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
J1 = SS23 = MDCL = function () {
	$s({_sidebar: {dp: 'fl'}})
	$.sty('@media only screen and (max-width: 500px) ' +
	$subRules({_sidebar: {dir: 'c'}}))
	//  *** alt works :$.sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
	$.dK('sidebar').WH(400, 500).C('b').A($.i('me'), $.i('me'), $.i('me'))
}
J2 = SS5 = ACS = ARTICLES = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800,
			M: 0, P: 0,
			d: '$', $D: 'r'
		},
		'$main > article': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	$.dI('main').A(
			$.ac('article1'),
			$.ac('ac2'),
			$.ac('ac3'),
			$.ac('ac4'),
			$.ac('ac5')
	)
}
BB16 = COLLECTIONONADD = CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB17 = COLLECTIONLENGTH = TDS = CRM = CLLEN = function () {
	Td = _M({df: {tt: '', completed: false}});
	Md = _M({
		d: {tt: '', completed: false}
	})
	Cl = _C({md: Md})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = _C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
BB10 = PVR = PER = function () {
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
USM = USMETS = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = _M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
BB220 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = Bb.V.x({
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
	new Vw({
		I: 1,
		el: dv
	})
}
ADDD = function () {
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.M.x({})
	App.Views.Task = Bb.V.x({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Bb.C.x({model: App.Models.Task})
	App.Views.Tasks = Bb.V.x({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	tasksView = new App.Views.Tasks({
		collection: tasksCollection
	})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([
			{title: 'yooo', prior: 4}
		])
	})
	TKZA = function () {
		tasksC = _C({model: _M()})([
			{title: 'game', prior: 3}, {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
		$.A(_V({
			initialize: function () {
				var view = this;
				view.collection.on('all', function () {
					view.ren()
				})
			},
			tagName: 'ol', ren: function () {
				this.$el.E()
				this.collection.each(this.addOne, this)
				return this
			},
			addOne: function (task) {
				this.$el.A(_V({
					tagName: 'li',
					events: {'click .edit': 'editTask'},
					showAlert: function () {
						alert('click')
					},
					editTask: function () {//alert('you are edititing the task')
						newTaskTitle = prompt('what would you like to change the text to?',
								this.model.get('title'))
						this.model.set('title', newTaskTitle)
					},
					ren: function () {
						this.$el.html(this.model.get('title'))
						return this
					}
				})({model: task}).ren().el)
			}
		})({collection: tasksC}).ren().el)
		$.bt('add', function () {
			tasksC.add([{title: 'yooo', prior: 4}])
		})
	}
}
SAMP = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab()
					.LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({
			model: md
		})
		r.rr().$el.a2(d)
	})
}
ADD = function () {
	$$$('TKZ');
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.Model.extend({})
	App.Views.Task = Bb.View.extend({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Bb.Collection.extend({model: App.Models.Task})
	App.Views.Tasks = Bb.View.extend({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
		{title: 'store', prior: 5}, {title: 'haha', prior: 3}])
	tasksView = new App.Views.Tasks({collection: tasksCollection})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([{title: 'yooo', prior: 4}])
	}).button()
}
VIEW = function () {
	$.fn.V = function (ob) {
		ob = ob || {};
		ob.el = this
		return $V(ob)
	}
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw = _V({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	Vw = V$({
		el: q = $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw2 = V$({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	new Vw()
	$.bt('orange', function () {
		new Vw2({el: $.d('O', 500, 500)})
		Vw({el: $.d('O', 500, 500)})
	})
}
NJA = MDV = MVW = BMV = XMDVW = function () {
	Md = _M({d: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		_: 'some-per', k: 'per',
		R: function () {
			this.$el.A('n').A()
		},
		I: function () {
			this.R()
		}
	})
	md = Md()
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.md = ob.m = this
		return Vw(ob)
	}
	md.V(Vw)
	_.in(1, function () {
		$.C('R')
		md.l()
		$Ms(J.s(md.J()))
	})
}
XDIVADD = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = V$({
		R: function () {
			q.A($.ul(['hello']))
		},
		I: function () {
			$l('init')
			this.R()
		}
	})
	new Vw()
	_.ev(1, function () {
		new Vw()
	}) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
}
LEN = function () {
	$Ms('CLLEN')
	Td = $$M({df: {tt: '', completed: false}});
	Md = $$M({
		d: {tt: '', completed: false}
	})
	Cl = $$C({
		md: Md
	})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = $$C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
XCHANGECOL = PROMPTCOLOR = function () {
	z()
	d = $.dA(400, 400, 300, 200)
	Md = $$M({
		promptColor: function () {
			this.s({
				co: prompt('color:')
			})
		}
	})
	sb = Md()
	sb.on('change:co', function (mod, col, ops) {
		$l('new color!: ' + col);
		d.C(col)
	})
	sb.s({co: 'g'})
	_.in(2, function () {
		sb.promptColor()
	})
}
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
XDEFAULT = function () {
	Md = _M({defaults: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		R: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		I: function () {
			this.$el.A().C('r').col('b').fS(149);
			this.R()
		}
	})
	md = Md()
	vw = Vw({m: md})
}
BB5 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
VD1 = BB7 = BVD = MVD = function () {
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			this.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			this.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(1, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
ACE = ADDCHICKEVENT = function () {
	$s({i: {w: 50, h: 50}})
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
	Cl = $$C({})
	cl = Cl().oA(function (s) {
		$.A($.h1("new!!!!!! " + s.g('n')))
		$.i('chicks').A()
	}).A([{n: 'g1'}, {n: 'g2'}])
	ev = _.x({}, Bb.E)
	ev.b("fun:had", function () {
		$.A($.h1("yaaaaaaaaaaaa!!!!!! "))
		$.i('guy').A()
	})// bind? on?
	ev.tr("fun:had")//trigger  //it'll alert "wee!"
}
VD2 = XBACKVALL = function () {
	$l('backvall')
	Md = $$M({
		defaults: {lame: true},
		validate: function (at) {
			$l('in validate')
			_at = at
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			var t = this
			t.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			t.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(3, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
$RE = function (rx, flags) {
	return new RegExp(rx, flags)
}
$REi = function (rx) {
	return new RegExp(rx, 'i')
}
//flilterbale?
SLI = SLIDES = function () {
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
$(function(){bd=$('body')})
C$$ = function (Md, ob) {
	if (S(ob)) {
		ob = {url: ob}
	}
	ob = ob || {}
	ob.md = ob.model = Md
	return C$(ob)
}
M$={}
M$.D = function (df, ob1) {
	var ob = {D: df}
	return M$(_.x(ob, ob1 || {}))
}
function about() {
//  meb
//https://www.youtube.com/watch?v=a-ijUKVIJSw
//VIDEO ONE
// start 7:00
// div .container wraps all
//----- h1 in div
//------ add a table
//--thead ---tr ---th's title user url action
//--tbod? (in vid2)
//each 'blogRoll' is a tr
//inject trs into tbody
//9:15 MAKES BLOG MODEL
//defaults all: ''
//10:05 tests model
//11:30 makes blogs collection
//////////////////////////////////////////////////////
//VIDEO two:
//2:00 makes indiv blog model view
//8:00 starts on BlogsView with init fn, on 'add'
//8:40 makes render fn, empty $el, then each(this.model.toArray) <- blogs
// for each do what? append a rendred view el (of it)
//11:00
// make new row in thead (tbody is for blog views (blogs))..
// put 3 inputs, 1 bt.. in td's in the new tr
//12:30 make ADD functionality
// var blog = new Blog({**data from ip fields**)
//13:30 console log test
//14:20 
// blogs.add(blog)
//14:45 instantiate new BlogsView AND DONE (he fixes errors; you not :))
//////////////////////////////
//VIDEO FOUR:
// 0:40 INSTALL NODE
// 1:10 INSTALL EXPRESS (AFTER CREATING PACKAGE.JS FILE)
// 2:50 MAKES A SERVER.JS FILE AND GOES INTO IT...
// 3:10 makes express server 
// 3:40 static files ('/public')
// 4:40 actually makes the 'public' directory and moves his files into it (index.html, scripts.js)
// then makes a js folder, and puts his scripts folder in THAT
// then changes the path of that file in his index.html file
// 6:15.. finally, he tests just the originally functionallity working on local host
// 7:00 SETUP MONGO
// talks about /data/db and file permissions
// 8:50 makes shortcuts with alias in separate file ..  and shows how!!!!
// 9:30 runs mongod
//  10:00 instals mongoose finally
// 11:00 REAL START? connects to mongoose
// monodb://localhost/blogroll
// ** creates db automatically and collection too
// 11:45 FINALLY MAKES THE BLOG SCHEMA
// 12:30  FINALLY MAKES THE BLOG MODEL 
//12:50 TEST IT OUT  makes new blog and calls SAVE
//uses 'mongo' to check test in terminal
//VIDEO FIVE:
// 3:50 switches finally to server side code
}
Blog = Bb.M.x({
	idAttribute: "_id",
	D: {user: '', title: '', url: ''}
})
Blogs = Bb.C.x({
	model: Blog,
	url: '/api/blogs'
})
$.td={}
$.td.A = function () {
	var td = $.td()
	var g = G(arguments)
	_.e(g, function (q) {
		td.A(q)
	})
	return td
}
$.bt={}
$.bt.K = function () {
	var g = G(arguments)
	var bt = $.bt.apply(null, g.r)
	bt.K(g.f)
	return bt
}
CollView = Bb.V.x({
	I: function () {
		var view = this
		view.model.on('all', function () {
			_.in(.03, function () {
				view.R()
			})
		})
		/*
		 //this.collection.on('add', this.R, this)
		 //this.collection.on('remove', this.R, this)
		 this.collection.fetch({
		 success: function (docs) {
		 if (docs) {
		 $l('there are doc')
		 $l(docs)
		 _.each(docs.toJSON(), function (item) {
		 $l('got blog with _id: ' + item._id)
		 })
		 }
		 },
		 error: function () {
		 $l('failed to get blogs!')
		 }
		 })*/
	},
	R: function () {
		var view = this.H('')
		view.model.each(function (model) {
			view.A((new view.subView({model: model})).R().el)
		})
		return view
	}
})
GenView = Bb.V.x({
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(view.G(view.J()), function (el) {
			view.A(el)
		})
		return view
	}
})
$.td.kids = function () {
	var g = G(arguments)
	var kids = g.A ? g.f : g
	return _.m(kids, function (o) {
		var td = $.td()
		_.e(A(o) ? o : [o], function (ch) {
			td.A(ch)
		})
		return td
	})
}
tdFn = function (fn) {
	return function (ob) {
		var kids = fn(ob)
		return $.td.kids.apply(null, kids)
	}
}
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
BLOG0 = BLOGVID2WORKS = function () {
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('AuthoR'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.ip().a2($.td().a2($tr)).K('user-ip')
	$.ip().a2($.td().a2($tr)).K('title-ip')
	$.ip().a2($.td().a2($tr)).K('url-ip')
	$.bt('Add', function () {
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
	}).K('add-blog').a2($.td().a2($tr))                                //
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none())
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A($.ip().K("user-update").val(user))
			this.$('.title').E().A($.ip().K("title-update").val(title))
			this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		}, delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
}
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
BLOG0 = BLOGVID2WORKS = function () {
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('Author'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.ip().a2($.td().a2($tr)).K('user-ip')
	$.ip().a2($.td().a2($tr)).K('title-ip')
	$.ip().a2($.td().a2($tr)).K('url-ip')
	$.bt('Add', function () {
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
	}).K('add-blog').a2($.td().a2($tr))
	//
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none())
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A($.ip().K("user-update").val(user))
			this.$('.title').E().A($.ip().K("title-update").val(title))
			this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		}, delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
	blogs.fetch()
	Bb.M.prototype.id = '_id'
}
BLOG = function () {
	//Bb.M.prototype.idAttribute = '_id'
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('Author'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.fn.td = function () {
		var td = $.td.apply(null, arguments)
		this.A(td)
		return td
	}
	$.fn.tds = function () {
		var g = G(arguments)
		var q = this
		_.e(g.A ? g.f : g, function (ch) {
			q.td(ch)
		})
		return q
	}
	$.ip.K = function (k) {
		return $.ip().K(k)
	}
	$tr.tds(
			$.ip.K('user-ip'),
			$.ip.K('url-ip'),
			$.ip.K('title-ip'),
			$.bt('Add', function () {
				blogs.create({
					user: $('.user-ip').V(),
					title: $('.title-ip').V(),
					url: $('.url-ip').V()
				})
			}).K('add-blog')
	)
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()
			)
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A(
					$.ip.K("user-update").val(user)
			)
			this.$('.title').E().A(
					$.ip.K("title-update").val(title))
			this.$('.url').E().A(
					$.ip.K("url-update").val(url)
			)// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		},
		delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
	blogs.fetch()
}
$TWT$ = $TWTAPP$ = function (fn) {
//https://www.youtube.com/watch?v=2BDGBJUtAmo
//Introduction to Backbone.js Part 1 - Client-side
//Michael Yagudaev
	return function () {
		$CSS(twtCss)
		TWTmvc()
		if (fn) {
			fn()
		}
	}
}
Twit = Bb.M.x({
	idAttribute: "_id",
	//url: '/twits',
	df: {un: 'fred', sts: 'sleeping'}
})
Twits = TwitsList = Bb.C.x({
	url: '/twits',
	model: Twit
})
// NO SERVER
TWIT0 = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([
		$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
			ev.preventDefault()
			twits.create({
				un: $('#un').v(),
				sts: $('#sts').v()
			})
		})])
	TwitView = Bb.V.x({
		E: {
			'click .edit': function (ev) {
				$.pD(ev)
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev)
				twits.remove(this.model)
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		tagName: 'p',
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.$('.sts').ed(0)//.rmAt('contenteditable')
		},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	TwitsView = Bb.V.x({
		initialize: function () {
			var vw = this
			this.collection.on('all', function () {
				$l('TwitsView picked up on collection event')
				vw.R()
			})
		},
		R: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({
					model: md
				})
				vw.$el.A(twitV.R().el)
			})
		}
	})
	twits = new TwitsList()
	twitsV = new TwitsView({
		el: $.d(),
		collection: twits
	})
}
// SERVER 
TWIT00 = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
			ev.preventDefault()
			twits.create({
				un: $('#un').v(),
				sts: $('#sts').v()
			}, {
				success: function (doc) {
					$l('success')
					$l(doc)
				}
			})
		})])
	TwitView = Bb.V.x({
		tagName: 'p',
		events: {
			'click .edit': function (ev) {
				$.pD(ev);
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev);
				this.model.destroy()
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.model.save()
			vw.$('.sts').ed(0)
		},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	TwitsView = Bb.V.x({
		I: function () {
			var vw = this
			this.collection.on('all', function () {
				vw.R()
			})
			this.collection.fetch()
		},
		R: function () {
			var vw = this;
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({model: md})
				vw.$el.A(twitV.R().el)
			})
		}
	})
	twits = new TwitsList()
	twitsV = new TwitsView({el: $.d(), collection: twits})
	//Bb.M.prototype.idAttribute = '_id'
}
// video timelog:
// 2:50 makes tweet model 
// 6:50 tweet collection
// 11:35 ..lets make it interactive
// and let users send tweets..
// 16: finally makes function for form submit
// first the button makesa tweet
// and just adds it to the collection
//19:15
//.. now comes the fun part, rendering with views
//19:50 .. templates of course..
//v1 740 tangents off,,,
//1025 shows coll.first(2)
//1140  STARTS HTML (FORM)
//1600 ENDS TANGENT. defines form on submit fn.. it just:
// coll.add(new Tweet)
//1918  starts talking bout views
// but get this: template is just, literally: 2 spans
//2239 actually makes view
//3300 working
//3330 adds css ////////////////////
////////////////// testing..
////come back at 3420.. adds 2 a-links to template
// (so now, its :2 spans, 2 links)
//3520 EVENTS
//CONTENT EDITABLE
//3820 CLOSE(-EDIT)
//4000 KEUPRESS ENTER ALSO CLOSE EDIT.. NOT ME
//4400 DELETE
// //TWEETS.REMOVE(this.model) .. AND 'ON REMOVE;
// this.cl.on('add', this.render, this)
// this.cl.on('remove', this.render, this)
// SERVER 
TWIT = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
			ev.preventDefault()
			twits.create({un: $('#un').v(), sts: $('#sts').v()})
		})])
	TwitView = Bb.V.x({
		tagName: 'p',
		events: {
			'click .edit': function (ev) {
				$.pD(ev);
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev);
				this.model.destroy()
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.model.save();
			vw.$('.sts').ed(0)
		},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	TwitsView = Bb.V.x({
		initialize: function () {
			var vw = this
			this.collection.on('all', function () {
				vw.R()
			})
			this.collection.fetch()
		},
		R: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({model: md})
				vw.$el.A(twitV.R().el)
			})
		}
	})
	twits = new TwitsList()
	twitsV = new TwitsView({el: $.d(), collection: twits})
	//Bb.M.prototype.idAttribute = '_id'
}
