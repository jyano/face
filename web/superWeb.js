
$.dS = function (cssOb) {
	return $.d().css(cssOb)
}
$.fn.animloop = function () {
	var that = this
	this.show("slow")
	this.animate({"marginLeft": "300px"}, 2000)
			.animate({"marginLeft": "0px"}, 2000)
	this.hide("slow", function () {
		that.animloop()
	})
}
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass 
_lS = localStorage
$w = window
z = function () {
	$('body').E()
}
$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
$test = function (a, b) {
	if (b2d.test) {
		var g = G(arguments), a = g[0], b = g[1], str
		if (D(b)) {
			str = '||'
			_.e(g, function (s) {
				str += ' ' + s.toString() + ' |'
			})
			str += '|'
		}
		else {
			str = a.toString()
		}
		alert(str)
	}
	return a
} // =$t
$.E = function () {
	$.bd().E()
}
$.c = $.can
ll = el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
_$ = function (ob) {
	ob.C = ob.C || $r()
	$.x(ob.C, ob.t)
	if (ob.vm) {
		OK(ob.vm)
	}
	if (ob.el) {
		els(ob.el)
	}
	if (ob.A) {
		_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})
	}
	if (ob._) {
		$.in(ob._)
	}
}
ll.vwTr = function (ob) {
	var tr = $.tr()
	ob = _.x(ob || {}, {el: tr})
	var view = Bb.V.x(ob)
	tr.vw = ll.trVw()
	return tr
}
$.tg = function (a) {
	return $('<' + a + '>')
}
$.frg = function () {
	return $(
			document.createDocumentFragment()
	)
}
$El = function (tag) {
	if (tag) {
		return document.createElement(tag)
	}
}
$.scr = function (scr, fn) {
	return $.getScript(scr, fn)
}
$.getMultiScripts = function (arr, path) {
	var _arr = $.map(arr, function (scr) {
		return $.getScript((path || "") + scr)
	})
	//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
	return $.when.apply($, _arr)
}
SCRIPTS = _.map([
	"socket.io/socket.io", "string", 'bb', 'bbmn', 'ko', 'mel', 'gq', 'objects', 'defaultMug', 'spriteSheets',
	'core', 'jqueryplugins', 'html', 'boot', 'ui', 'can', 'sys', 'images', 'event', 'socket', 'ranky', 'routeTests', 'nav', 'api', 'j3', 'display', 'animate', 'imagine', 'work', 'tween', 'universe', 'create', 'easel', 'displayObject', 'shape', 'text', 'mobile', 'animation', 'sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve', 'playgame', 'users', 'share', 'chat', 'messages', 'knock', 'bbtemps', 'backbone1', 'people', 'mar', 'backbone', 'angu'
	
	// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
	// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
	//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
	//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
], function (js) {
	return "/" + js + ".js"
})
// _.each(SCRIPTS, function(scr){$.scr(scr)})
/*
 dfr = $.getMultiScripts(SCRIPTS)
 dfr.done(function(){alert('done')})
 .always(function(){
 alert('always')
 $.scr('app')
 })
 .fail(function(){alert('fail')})
 */
GSCR = function () {
	$.scr = function (scr, fn) {
		return $.getScript(scr, fn)
	}
	$.getMultiScripts = function (arr, path) {
		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr)
		})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($, _arr)
	}
	$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
		console.log(a + b + c)
		d = c
		$l('got script')
		$.$(function () {
			$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
		})
	})
	dfr = $.Deferred(function (dfrd) {
		d = dfrd
		// $(dfrd.resolve)
	})
	testx = 100
	$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
	).done(function () {
				$l(testx)
			})
}
$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}
LOADSCRIPTS = function () {
	$(function () {
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )
		$.j('/us.js')
		$.j('/string.js')
		$.j('/both.js')
		//$.j('/jq.js')
		//$.j('/jqSer.js')
		$.j('/bs.js')
		$.j('/frontOb.js')
		$.j('/handy.js')
		$.j('/sty.js')
		$.j('/rules.js')
		$.j('/flex.js')
		$.j('/bb.js')
		$.j('/bbCore.js')
		$.j('/bbLs.js')
		arr = [
			"us", 'string', 'both', 'jq', 'jqSer', 'bs', 'frontOb', 'handy', 'sty',
			'rules', 'flex', 'flexApps', 'boot', 'bb', 'bbCore', 'bbLs', 'bbTemplate',
			'bbApps', 'avail', 'bbLsApps', 'BfRoll', 'blog'
		]
	})
}
$.fn.el = function (e) {
	if (U(e)) {
		console.log($('<div>').append(this.clone()).html())
		return this
	}
}
$.fn.sb = function (fn) {
	return this.submit(fn)
}
$.fn.a2Lb = function (t) {
	t = t || 'label:';
	return this.a2($.lb(t))
}
$.fn.isLi = $.fn.iLi = function () {
	return _.isElement(this) && _h('HTMLLIElement', this)
}
$.fn.li = function () {
	var g = G(arguments),
			li = $.li()
	this.A(li)
	g.e(function (g) {
		li.A(g)
	})
}
Ms$ = function (ms) {
	$.h1(ms)
}
$Ms = function (ms) {
	return $.d().fS(80).C($r()).col($r()).A(ms)
};
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
$Ms = function (ms) {
	$.h1(ms)
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
$.dg = $.dragFrame = function (d) {
	var oD
	oD = $.d('y').pad(20).drag()
	d = d || $.d('r').mar(20)
	d.xPrp().a2(oD)
	d.oD = oD
	oD.XY(40, 40)
	return oD
}
$.x = function (c, t) {
	var g = G(arguments), bd = $.bd()
	bd.empty()
	if (g.O_) {
		$CSS(g.f)
		if (g.s) {
			$.h1(g.s);
			$.hr().A()
		}
		bd.C(g.t || $r())
	}
	else {
		bd.C(c || $r())
		if (t) {
			bd.A($.h1(t))
		}
	}
	if (g.p) {
		bd.A($.hr())
	}
	return $
}
$.h = function () {
	var g = G(arguments), o
	bd = $.bd()
	bd.empty()
	bd.C($r())
	o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
	if (o.s) {
		$CSS(o.s)
	}
	if (o.t) {
		$.h1(o.t);
		$.hr().A()
	}
	return $
}
$.s = function (css, c, tx) {
	$CSS(css)
	$.x(c, tx)
	return $
}
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
z = function (fn) {
	$('body').empty()
}
$D = $Dt = function () {
	var dt = new Date()
	return dt
}
$D = $Dt = function () {
	var dt = new Date()
	return dt
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
$.scrp = function (i, t) {
	var scr = $("<script type='text/html'>")
	scr.id(i)
	if (t) {
		scr.A(t)
	}
	scr.A()
	return scr
}
el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
_$ = function (ob) {
	ob.C = ob.C || $r()
	$.x(ob.C, ob.t)
	if (ob.vm) {
		OK(ob.vm)
	}
	if (ob.el) {
		els(ob.el)
	}
	if (ob.A) {
		_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})
	}
	if (ob._) {
		$.in(ob._)
	}
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
JQ5 = NOTANIM = function () {
	$.x()
	var s = 1000, m = function (n) {
				return {marginLeft: n}
			},
			n = 0;
	d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
	d2 = $.d().id('debug');
	$('#test').$(function () {
		$.notAn($('.box')).an({marginLeft: -10}, s,
				function () {
					$('#debug').A($.p('start..' + n++))
				})
				.an({marginLeft: 10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: 10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: -10}, s)
				.an({marginLeft: 0}, s,
				function () {
					$('#debug').A($.p('fin'))
				})
	})
}
JQ6 = ANL = ANIMLOOP = function () {
	$.fn.anL = function () {
		var q = this
		this.sh("slow")
		this.an({"marginLeft": "300px"}, 2000)
				.an({"marginLeft": "0px"}, 2000)
		this.hd("slow", function () {
			q.anL()
		})
	}
	$.d('b', 100, 300).anL()
}
JQ7 = COOLSEL = function () {
	$.x()
	// rather than worry about synchronization between each panel
	//we will take last li in ul.k(panels) and position it to top right
	//of ul - this way,  when he sum width of all the panels occasionally
	//adds to greater than 100 percent of the ul as they animate..
	//the last li never breaks to the next line
	$.coolSelector = function () {
		var s = 200
		d = $.dK('container').A(
				$.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
				$.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
		).A()
		$('span').css({width: '100px', fontSize: '40px'})
		if ($('div.panels').length) {
			$('div.panels span:last-child').K('last')
			$('div.panels span').hv(
					function () {
						$(this).st().an({width: '110px', fontSize: '50px'}, s)
								.sib('span').st().an({width: '90px', fontSize: '30px'})
					},
					function () {
						$(this).st().an({width: '90px', fontSize: '30px'})
					})
		}
	}
	$.coolSelector()
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
JQ9 = COLANIM = function () {
	COLANIM = function () {
		$.x()
		$CSS(
				{
					$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
				}
		)
		$.d(['color anims']).id('el')
		$.bt('anim cols').id('tog')
		$('#tog').$(
				function () {
					$("#el").an({c: 'g', C: "rgb(20,20,20)"})
				}
		)
		/*
		 Color Animation
		 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
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
	$.x()
	$CSS({
		$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
	})
	$.d(['color anims']).id('el')
	$.bt('anim cols').id('tog')
	$('#tog').$(function () {
		$("#el").an({c: 'g', C: "rgb(20,20,20)"})
	})
	/*
	 Color Animation
	 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
	
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
JQ11 = QUU = function () {
	QUU = function () {
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		x = $('.x')
		x.an(
				{height: 20}, "slow",
				function () {
					$("#title").html("in cb")
				}
		)
		//   *Ques As Cbs
		// Instead of passing a cb as an argument,
		// we can add another function to the queue
		// that will act as our cb
		// This will execute
		// after all of the steps in the
		// anim  have completed.
		x.an(
				{height: 20},
				"slow"
		).qu(
				function () {
					$("#title").h("in anim")
					$(this).dq()
				}
		)
			//  tells jQ  to continto N-item in  que
			//    queued fn will exec   after the anim
			//  jQuery does not have any insight into
			// how the queue items function,
			// so we need to call .dequeue(),
			// which tells jQuery when to move to the n item in the queue.
			//  Another way of dequeuing
			// is by calling the fn that is passed to your cb
			// That fn will auto  call .dq() for you
				.qu(
				function (n) {
					$l("I fired!");
					n()
				}
		)
		//  *Custom Queues
		// Up to this point all of our anim
		// and qu   ex  have been using the def qu  n  which is fx.
		// Elements can have multiple queues
		// attached to them,
		// and we can give each of these qusa dif  name.
		// We can specify a custom queue name as
		// the 1st arg  to the .qu() method.
		x.qu(
				'an', function (n) {
					$l("Step 1");
					n()
				}
		).qu(
				'an', function (n) {
					$l("Step 2");
					n()
				}
		).dq('an');
		//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
		//   Clearing The Que
		//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
		x.qu(
				'an', function (n) {
					$l("nev log (qu clrd)");
					n()
				}
		)
				.clrQ('an').dq('an')
		//   In this example, nothing will happen as we removed everything from the steps queue.
		//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
		//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
		x.qu(
				'an',
				function (n) {
					$l("nev fire (qu replaced)");
					n()
				}
		)
				.qu(
				'an', [
					function (n) {
						$l("fired!");
						n()
					}
				]
		).dq('an')
		//
		// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
		x.qu(
				'an', function (n) {
					$l("fired!");
					n()
				}
		)
		$l(x.qu('an'))
		x.du('an') //?
	}
	$.x('x', 'quu')
	//  Qu   allow series fns to be execd asynch on an el
	//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
	//
	// which levgs qus to build up   series of steps
	// that will transtn  1+ CSS vals thru/out the dur
	//  can pass a cb fn to  .an()  to exec on done
	x = $('.x')
	x.an({height: 20}, "slow",
			function () {
				$("#title").html("in cb")
			})
	//   *Ques As Cbs
	// Instead of passing a cb as an argument,
	// we can add another function to the queue
	// that will act as our cb
	// This will execute
	// after all of the steps in the
	// anim  have completed.
	x.an(
			{height: 20},
			"slow").qu(function () {
				$("#title").h("in anim")
				$(this).dq()
			})
		//  tells jQ  to continto N-item in  que
		//    queued fn will exec   after the anim
		//  jQuery does not have any insight into
		// how the queue items function,
		// so we need to call .dequeue(),
		// which tells jQuery when to move to the n item in the queue.
		//  Another way of dequeuing
		// is by calling the fn that is passed to your cb
		// That fn will auto  call .dq() for you
			.qu(function (n) {
				$l("I fired!");
				n()
			})
	//  *Custom Queues
	// Up to this point all of our anim
	// and qu   ex  have been using the def qu  n  which is fx.
	// Elements can have multiple queues
	// attached to them,
	// and we can give each of these qusa dif  name.
	// We can specify a custom queue name as
	// the 1st arg  to the .qu() method.
	x.qu('an', function (n) {
		$l("Step 1");
		n()
	}).qu('an', function (n) {
		$l("Step 2");
		n()
	}).dq('an');
	//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
	//   Clearing The Que
	//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
	x.qu('an', function (n) {
		$l("nev log (qu clrd)");
		n()
	})
			.clrQ('an').dq('an')
	//   In this example, nothing will happen as we removed everything from the steps queue.
	//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
	//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
	x.qu(
			'an',
			function (n) {
				$l("nev fire (qu replaced)");
				n()
			})
			.qu(
			'an', [
				function (n) {
					$l("fired!");
					n()
				}
			]).dq('an')
	//
	// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
	x.qu('an', function (n) {
		$l("fired!");
		n()
	})
	$l(x.qu('an'))
	x.du('an')
}
JQ12 = ANF = function () {
	ANF = function () {
		z()
		a = $.dA().bgI('chicks').anf()
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(
						function () {
							a.c++;
							if (!a.l && a.c > a.n) {
								_.cI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r
				)
			}
		}
	}//call stack
	z()
	a = $.dA().bgI('chicks').anf()
	anim = function (o) {
		o = o || {};
		return {
			u: o.u || 'chicks',
			n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
		}
	}
	an = function (q, a) {
		if (q.han) {
			_.cI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++;
				if (!a.l && a.c > a.n) {
					_.cI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
}
JQ12 = JQANIMZ = function () {
	JQANIMZ = function () {
		$.x('s', 'jqanim')
		/*
		 setBackgroundImage = q.bi = function(url){//set background image
		 var toUrl =function(url){
		 return 'url("'+ src(url) +'")'}
		 q.backgroundImage(toUrl(url))
		 return q}
		
		 bp=q.positionBackgroundImage=function(x,y){
		 var g=G(arguments),x=g[0],y=g[1]
		 x=N(x)?x:0
		 y=N(y)?y:0
		 q.css({backgroundPos:x+'px '+y+'px'})
		 return q}
		 fr=q.stFr=function(n,w){
		 if(O(n)){q.bp(n.n,n.w)}
		 else{q.bp(n*w)}
		 return q}
		
		 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
		 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
		
		 a= $.dA().bgImg('chicks').anf()
		
		 */
	}
	$.x('s', 'jqanim')
	/*
	 setBackgroundImage = q.bi = function(url){//set background image
	 var toUrl =function(url){
	 return 'url("'+ src(url) +'")'}
	 q.backgroundImage(toUrl(url))
	 return q}
	
	 bp=q.positionBackgroundImage=function(x,y){
	 var g=G(arguments),x=g[0],y=g[1]
	 x=N(x)?x:0
	 y=N(y)?y:0
	 q.css({backgroundPos:x+'px '+y+'px'})
	 return q}
	 fr=q.stFr=function(n,w){
	 if(O(n)){q.bp(n.n,n.w)}
	 else{q.bp(n*w)}
	 return q}
	
	 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
	 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
	
	 a= $.dA().bgImg('chicks').anf()
	
	 */
}
JQ14 = LETTERING = function () {
	z()
	LETTERINGPLUG = function () {
		function injector(t, splitter, klass, after) {
			var text = t.text()
					, a = text.split(splitter)
					, inject = '';
			if (a.length) {
				$(a).each(function (i, item) {
					inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
				});
				t.attr('aria-label', text)
						.empty()
						.append(inject)
			}
		}
		
		var methods = {
			init: function () {
				return this.each(function () {
					injector($(this), '', 'char', '');
				});
			},
			words: function () {
				return this.each(function () {
					injector($(this), ' ', 'word', ' ');
				});
			},
			lines: function () {
				return this.each(function () {
					var r = "eefec303079ad17405c889e092e105b0";
					// Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
				});
			}
		};
		$.fn.lettering = function (method) {
			// Method calling logic
			if (method && methods[method]) {
				return methods[method].apply(this, [].slice.call(arguments, 1));
			} else if (method === 'letters' || !method) {
				return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
			}
			$.error('Method ' + method + ' does not exist on jQuery.lettering');
			return this;
		};
	};
	LETTERINGPLUG()
	span = $.sp('hello').A()
	span.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = span.find('span')
	$('.dropped span').css({transition: 'all 0.3s ease-in'})
}
JQ15 = FALLING = function () {
	FALLING = function () {
		z();
		//this goes in css
		$header2 = $.sp('hello').A();
		$header2.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans = $header2.fi('span');
		delay = 0;
		$header2.$(
				function () {
					$spans.e(
							function () {
								$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
								delay += 0.1
							}
					);
					$header2.K('dropped'); // Add "dropped" class to header to apply transition
					setTimeout(
							function () { // reset header code
								$spans.e(
										function () {
											$(this).css({transitionDelay: '0ms'})
										}
								);
								// set transition delay to 0 so when 'dropped' class is removed,
								// letter appears instantly
								$header2.removeClass('dropped'); // remove class at the "end" to reset header.
								delay = 0
							}, 1800
					); // 1800 is just rough estimate of time transition will finish, not the best way
				}
		)
	}
	z()
	//this goes in css
	$header2 = $.span('hello').A()
	$header2.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = $header2.find('span')
	delay = 0
	$header2.on('click', function () {
		$spans.each(function () {
			$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
			delay += 0.1
		})
		$header2.K('dropped') // Add "dropped" class to header to apply transition
		setTimeout(function () { // reset header code
			$spans.each(
					function () {
						$(this).css({
							transitionDelay: '0ms'
						})
					})
			// set transition delay to 0 so when 'dropped' class is removed,
			// letter appears instantly
			$header2.removeClass('dropped') // remove class at the "end" to reset header.
			delay = 0
		}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
	})
}
JQ16 = TXPLUG = function () {
	z();
	d = $.d('r', 100).A('abc');
	e = $.d(100).col('r').A('abc');
	f = $.d('r', 100).col('b').A('abc');
	g = $.d('b', 500, 500)
}
EDITDIV = function () {
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
}
	 
	
 