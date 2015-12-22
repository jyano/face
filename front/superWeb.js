 $L('front', 'manip','sty','inOutPut','canvas', 'context','canApps','webAnim','webApps')
function front() {
 
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
	toHandy = function () {
		$.pre = function () {
			return $("<pre>").A()
		}
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
	function local() {
		$g = $get = function (a) {
			return _lS.getItem(a)//= lG
		}
		$s = $set = function (key, val) {
			_lS.setItem(key, val);
			return val
			//=lS
		}
		$k = $key = function (key) {
			return (S(key)) ? $g($k(key)) :
					_lS.key(key)
		}
		$len = function () {
			return _lS.length //= lL
		}
		$rm = function (a) {
			var i = _lS.getItem(a)
			_lS.removeItem(a)
			return i //= lR
		}
		$clr = function () {
			_lS.clear();
			return _lS//= lX
		}
		BUC51 = BUCKYVID51 = function () {
//buck is just a local storage example
//https://www.youtube.com/watch?v=Kn_AIiV6Cp0&index=53&list=PL081AC329706B2953
			$CSS(bucCSS)
			$.f().a2($.scI('leftbox')).A(
					$.p(['(key) One: ', $.ip().id('one')]),
					$.p(['(value) Two: ', $.ta().id('two')]),
					$.bt('save', function () {
						$s('one', $.V('one'))
						$('#rightbox').html(
								'one: ' + $g('one') + ', ' +
								'two: ' + $g($s('two', $.V('two'))))
						return false
					})
			)
			$.scI('rightbox', ['nothing!'])
		}
		BUC52 = function () {
			$CSS(bucCSS)
			$.scI('leftbox', [$.f([$.p(['(key) One: ', $.ip().id('one')]),
				$.p(['(value) Two: ', $.ta().id('two')])]).A(
					$.bt('clr', function () {
						$clr()
						display()
						return false
					}),
					$.bt('save', function () {
						var one = $.V('one')
						var two = $.V('two')
						$set(one, two)
						display()
						return false
					})
			)])
			$.scI('rightbox', ['nothing yet hoss!'])
			display()
			function display() {
				rBox = $('#rightbox').html('')
				_.t($len(), function (i) {
					var key = $key(i)
					val = $g(key)
					var str = 'key:  ' + key + ',  val: ' + val
					rBox.A(str, $.br())
				})
			}
		}
	}
}
 function manip() {
	function image() {
		$.i = $.img = function () {
			var g = G(arguments), o, i = new Image(), $i = $(i);
			o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
			if (o.fn) {
				$i.load(_.b(function (e) {
					o.fn(e.target, e)
				}, $i))
			}
			if (o.sr) {
				$i.sr(o.sr)
			}
			return $i
		}
	}
	
	function canvas() {
		$.can = $.canvas = $.cv = $.c = $.c2 = function (c, width, h, x, y) {
			var g = G(arguments), o, q
			o = g.S_ ?
			{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
			{w: g.f, h: g.s, x: g.t, y: g[3]}
			o.w = o.w || 1200
			o.h = o.h || 600
			q = $('<canvas>')
			q.attr({width: o.w, height: o.h})
			//o.c = o.c || 'x'
			if (o.c) {
				q.C(o.c)
			}
			if (N(o.x)) {
				q.abs(o.x, o.y)
			}
			if (g.p) {
				q.dg()
			}
			return q.id('canvas').k('canvas can').al(.8)
		}
		$.cv0 = function () {
			return $.c2.apply($, arguments)[0]
		}
	}
	
	function text() {
		$.fn.tt = function (t, c) {
			var p = $.p(t).mH(10).pH(30)
					.fS(24).K('text-center')
			this.A(p,
					$.hr().fS(10))
			return this
		}//name conflict?
	}
	
	function ipsum() {
		$.ips = function (len) {
			len = len || 1;
			var str = '';
			_.t(len, function () {
				str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
			});
			return str
		}
		$.ipsP = function (len) {
			return $.p().A($.ipsum(len))
		}
		$.fn.ips = $.fn.ipsum = function () {
			var that = this
			_.each(arguments, function (num) {
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP = function () {
			var el = this
			_.e(arguments, function (num) {
				el.A($.ipsumP(num))
			})
			return el
		}
		ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
		'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
		ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
		'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
		'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
		'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
		'te feugait nulla facilisi.'
		ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
		'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
		'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
		'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
		'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
		'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
		'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
		'ut laoreet dolore magna aliquam erat volutpat.'
	}
	
	function headerTags() {
		$.h1 = function () {
			var h = $('<h1>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.h2 = function () {
			var h = $('<h2>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.h3 = function () {
			var h = $('<h3>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.h4 = function () {
			var h = $('<h4>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.h5 = function () {
			var h = $('<h5>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.h6 = function () {
			var h = $('<h6>');
			h.A.apply(h, G(arguments));
			h.A()
			return h
		}
		$.fn.h1 = function (text) {
			this.A($.h1(text))
			return this
		}
		$.fn.h2 = function (text) {
			this.A($.h2(text))
			return this
		}
		$.fn.h3 = function (text) {
			this.A($.h3(text))
			return this
		}
		$.fn.h4 = function (text) {
			this.A($.h4(text))
			return this
		}
		$.fn.h5 = function (text) {
			this.A($.h5(text))
			return this
		}
		$.fn.h6 = function (text) {
			this.A($.h6(text))
			return this
		}
		$.fn.H5 = function (a) {
			return $.h5(a).a2(this)
		}
		$.fn.h1 = function (t) {
			return this.A($.h1(t))
		}
		$.fn.h2 = function (text) {
			this.A($.h2(text))
			return this
		}
		$.fn.h3 = function (text) {
			this.A($.h3(text))
			return this
		}
		$.fn.h4 = function (text) {
			this.A($.h4(text))
			return this
		}
		$.fn.h5 = function (text) {
			this.A($.h5(text))
			return this
		}
		$.fn.h6 = function (text) {
			this.A($.h6(text))
			return this
		}
	}
	
	function nest() {
		$.sp = function () {
			var g = G(arguments),
					sp = $('<span>'), str = '';
			_.e(g, function (val) {
				if (S(val)) {
					str += val
				}
				else {
					sp.A(val)
				}
			});
			if (str) {
				sp.T(str)
			}
			sp.A()
			return sp
		}
		$.p = function () {
			var g = G(arguments), p = $('<p>')
			if (g.A_) {
				g.eF(function (g) {
					p.A(g)
				})
			}
			else {
				g.e(function (g) {
					p.A(g)
				})
			}
			p.A()
			return p
		}
		$.ps = function () {
			var sp = $.sp(), g = G(arguments)
			g.e(function (g) {
				sp.A($.p(g))
			})
			return sp
		}
		$.S = $.str = function () {
			var g = G(arguments), s = $('<strong>');
			_.e(g, function (g) {
				s.A(g)
			});
			return s
		}
		$.pre = function () {
			return $("<pre>").A()
		}
		$.b = function (a, k) {
			var g = G(arguments), b = $('<b>')
			//if(g.p){a =  '&nbsp;'+a  }
			//  b.H(a)
			//  b.K(k)
			if (a) {
				b = b.A(b)
			}
			if (!g.n) {
				b.A()
			}
			return b
		}
		$.hdr = function () {//$.H=
			var g = G(arguments), hdr = $('<header>')
			//  return $.ip().ty('header').n(n).v(v)
			g.e(function (q) {
				hdr.A(q)
			})
			hdr.A()
			return hdr
		}
		$.F = $.ftr = $.footer = function () {//$.H=
			var g = G(arguments), hdr = $('<footer>')
			//  return $.ip().ty('header').n(n).v(v)
			g.e(function (q) {
				hdr.A(q)
			})
			hdr.A()
			return hdr
		}
		$.B = function (a) {
			var q = $('<bold>')
			if (a) {
				q.A(a)
			}
			return q
		}
		$.nv = function () {
			return $('<nav>')
		}
		$.sc = $.sct = function (a) {
			var g = G(arguments)
			var sc = $('<section>')
			if (g.A) {
				_.e(g, function (el) {
					sc.A(el)
				})
			}
			else if (a) {
				sc.id(a)
			}
			sc.A()
			return sc
		}
		$.scI = function () {
			var g = G(arguments)
			var sc = $.sc()
			sc.id(g.f)
			if (A(g.s)) {
				_.e(g.s, function (el) {
					sc.A(el)
				})
			}
			return sc
		}
		$.ac = function () {//$.H=$.arg=
			var g = G(arguments), art = $('<article>')
			g.e(function (q) {
				art.A(q)
			})
			art.A()
			return art
		}
		$.em = function () {
			var em = $('<em>');
			return em
		}
		$.tp = function (id) {
			return $('<template>').id(id)
		}
		$.as = function () {
			var a = $('<aside>')
			G(arguments).e(function (q) {
				a.A(q)
			})
			a.A()
			return a
		}
		$.header = function () {
			return $('<header>')
		}
		$rtHeader = function (name) {
			$dA($spA('this is RoApp: '), $dA('this is a RoApp').fS(75).col('r'),
					$spA2(name).fS(100), $.d('B').W('auto').H(8))
		}
		$Fn = function (name, fn) {
			window[name] = fn;
			return fn
		}
		$dA = function () {
			var d = $.d()
			d.A.apply(d, arguments)
			return d
		}
		$spA = function () {
			var sp = $.sp().fS(75).col('r')
			sp.A.apply(sp, arguments)
			return sp
		}
		$spA2 = function () {
			var sp = $.sp().fS(100).col('x').C('o')
			sp.A.apply(sp, arguments)
			return sp
		}
		$.__d = function () {
			var d = $('<div>')
			_.e(arguments, function (ch) {
				d.A(ch)
			})
			return d
		}
		$bd = function () {
			var g = G(arguments),
					bd = $('body')
			if (g.f) {
				bd.css.apply(bd, g)
			}
			return bd
		}
		$.fn.dI = function () {
			return this.A(
					$.dI.apply($, arguments)
			)
		}
	}
	
	function divs() {
		$._d = $.d_ = function () {
			var g = G(arguments),
					d = $('<div>')
			if (g.A()) {
				_.e(g.f, function (q) {
					d.A(q)
				})
			}
			else if (g.f) {
				d.A(g.f)
			}
			return d
		}
		$.d = $.div = function () {
			var g = G(arguments), d = $('<div>'), o
			o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
			{c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
					g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
					{w: g.f, h: g.s, x: g.t, y: g[3]}
			if (o.c) {
				d.C(o.c)
			}
			if (N(o.w)) {
				d.W(o.w)
			}
			if (N(o.h)) {
				d.H(o.h)
			}
			if (N(o.x)) {
				d.ab(o.x, N(o.y, 0))
			}
			if (o.a) {
				_.e(g[0], function (g) {
					d.A(g)
				})
			}
			if (o.k) {
				d.K(o.k)
			}
			if (!g.n) {
				d.A()
			}
			if (g.p) {
				d.dg()
			}
			return _d = d
		}
		$.dI = function () {
			$l('$.dI')
			var g = G(arguments),
					d = $.d.apply($, g.r)
			d.id(g.f)
			return d
		}
		$.dK = function (k) {
			var g = G(arguments),
					d = $.d.apply($, _.r(arguments))
			return d.K(k)
		}
		$.dD = $.divD = function (c, w, h, x, y) {
			var d, g = G(arguments)
			w = N(w, 200)
			h = N(h, w)
			d = $.d(200, 200, '+')
			if (g.u) {
				return d.C('n')
			}
			if (g.S_) {
				d.C(c)
				if (N(w)) {
					d.W(w)
				}
				if (N(h)) {
					d.H(h)
				}
				if (N(x)) {
					d.X(x)
				}
				if (N(y)) {
					d.Y(y)
				}
				return d
			}
			if (g.N_) {
				return $.dD('o', c, w, h, x)
			}
		}
		$.dA = function func(col, w, height, x, y) {
			var g = G(arguments),
					div = $.d().P('absolute')
			if (U(col)) {
				return div.C('brown')
			}
			if (S(col)) {
				div.C(col);
				if (N(w)) {
					div.W(w)
				}
				if (N(height)) {
					div.H(height)
				}
				if (N(x)) {
					div.X(x)
				}
				if (N(y)) {
					div.Y(y)
				}
				if (g.p) {
					div.dg()
				}
				return div
			}
			if (N(col)) {
				return $.dA('o', col, w, height, x)
			}
		}
		$.divA = $.dA = $.divA = function (c, w, h, x, y) {
			var g = G(arguments),
					d = $.d().P('absolute'),
					o = g.O ? g.f :
							g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
							{w: g.f, h: g.s, x: g.t, y: g[3]}
			if (N(o.w)) {
				d.W(o.w)
			}
			if (N(o.h)) {
				d.H(o.h)
			}
			d.XY(N(x, 0), N(y, 0))
			if (o.c) {
				d.C(o.c)
			}
			return d
		}
		$.dD = $.divD = function func(col, w, h, x, y) {
			w = N(w) ? w : 200;
			h = N(h) ? h : w;
			var div = $.div(200, 200).drag();
			if (U(col)) {
				return div.C('brown')
			}
			if (S(col)) {
				div.C(col);
				if (N(w)) {
					div.W(w)
				}
				if (N(h)) {
					div.H(h)
				}
				if (N(x)) {
					div.X(x)
				}
				if (N(y)) {
					div.Y(y)
				}
				return div
			}
			if (N(col)) {
				return func('orange', col, w, h, x)
			}
		};
		$.dIl = $.inlineDiv = function (a, b, c) {
			var d = dv(a, b, c);
			d.display('inline');
			return d
		};
		$.ilBl = $.inlineBlockDiv = function (a, b, c) {
			var d = $.d(a, b, c);
			d.display('inline-block');
			return d
		};
		$.dva = function (r, w, h, l, t) {
			//color, w, h, left, top
			var g = G(arguments),
					r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d
			if (!S(r)) {
				return g.n ?
						$.dva($r(), r, w, h, l, '-') :
						g.p ? $.dva($r(), r, w, h, l, '+') :
								$.dva($r(), r, w, h, l)
			}
			d = $.d(r).p('a').C(r)
			if (g.p) {
				if (w) {
					d.l(w)
				}
				;
				if (h) {
					d.t(h)
				}
				d.P(16)
				return d.auto()
			}
			w = w || 1;
			h = h || w;
			d.WH(w * 100, h * 100)
			l = l || 0;
			t = t || l;
			d.l(l * 100).t(t * 100)
			if (!g.n) {
				d.dg()
			}
			return d
		}
	}
	
	function lists() {
		$.la = $.liA = function () {
			var g = G(arguments), o,
					a = $('<a>').hr('#'),
					li = $('<li>')
			// if(A(g.f)){     _.e(g.f, function(el){});   return li.A(a)     }
			o = g.F_ ? {fn: g.f} : g.S_ ? {id: g.f, fn: g.s} : {el: g.f, fn: g.s}
			o.ht = o.id
			if (o.id) {
				a.id(o.id)
			}
			if (o.ht) {
				a.html(o.ht)
			}
			if (o.el) {
				a.A(o.el)
			}
			if (o.fn) {
				a.$(o.fn)
			}
			li.A(a)
			return li
		}
		$.lL = $.lib = $.liLb = function () {
			var g = G(arguments), o,
					li = $('<li>'),
					lb = $.lb().a2(li)
			if (A(g.f)) {
				_.e(g.f, function (el) {
					lb.A(el)
				})
				return li
			}
			o = g.F_ ? {fn: g.f} :
					g.S_ ? {id: g.f, fn: g.s} :
					{el: g.f, fn: g.s}
			o.ht = o.id
			if (o.id) {
				a.id(o.id)
			}
			if (o.ht) {
				a.html(o.ht)
			}
			if (o.el) {
				a.A(o.el)
			}
			if (o.fn) {
				a.$(o.fn)
			}
			return li
		}
		$.li = function () {
			var g = G(arguments), li = $('<li>')
			if (A(g[0])) {
				_.e(g[0],
						function (g) {
							li.A(g)
						})
			}
			if (g.S_) {
				li.A(g.f)
			}
			if (g.p) {
				li.K('active')
			}
			if (g.n) {
				li.k('dropdown')
			}
			li.A()
			return li
		}
		$.ol = function (o, b) {
			var g = G(arguments),
					ol = $('<ol>');
			_.e(g, function (v) {
				ol.A(v)
			});
			return ol
		}
		$.ul = function () {
			var g = G(arguments),
					ul = $('<ul>')
			if (g.A_) {
				_.e(g.f, function (el) {
					if (g.p) {
						if (el.iLi()) {
							el = $.li([el])
						}
					}
					if (S(el)) {
						el = $.li(el)
					}
					ul.A(el)
				})
			}//if(g.p){ul.dg()}//if(g.n){ul.K('ddm')} //dropdown menu
			if (g.p) {
				alert('$.ul g.p')
				ul.K('n nbn')
			}//navbar nav
			// $l(ul.oh())
			_ul = ul.A()
			return ul
		}
		$.uK = $.ulK = function (k, a, b, c, d) {
			var ul = $.ul(a, b, c, d).K(k)
			return ul
		}
		$.liK = function (k, a, b, c, d) {
			var li = $.li(a, b, c, d)
			li.K(k)
			return li
		}
// tables:
		$.fs = function () {
			var g = G(arguments),
					q = $('<fieldset>')
			if (g.A) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			else {
				g.e(function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.t = function (a) {
			var g = G(arguments)
			var t = $('<table>')
			if (A(a)) {
				_.e(a, function (el) {
					t.A(el)
				})
			}
			if (!g.n) {
				t.A()
			}
			return t
		}
		$.tHR = function (ch) {
			var el = $.tr().a2($.tH())
			if (A(ch)) {
				_.e(ch, function (ch) {
					if (S(ch)) {
						ch = $.th(ch)
					}
					el.A(ch)
				})
			}
			return el
		}
		$.tH = function (a) {
			var tH = $('<thead>')
			if (A(a)) {
				_.e(a, function (el) {
					tH.A(el)
				})
			}
			else if (O(a)) {
				tH.A(a)
			}
			return tH
		}
		$.th = function (a) {
			var th = $('<th>')
			if (A(a)) {
				_.e(a, function (el) {
					th.A(el)
				})
			}
			else if (S(a)) {
				th.A(a)
			}
			return th
		}
		$.tB = $.tb = function () {
			return $('<tbody>')
		}
		$.tr = function (a) {
			var g = G(arguments)
			var tr = $('<tr>')
			if (A(a)) {
				_.e(a, function (el) {
					if (S(el)) {
						el = g.p ? $.th(el) : $.td(el)
					}
					tr.A(el)
				})
			}
			else if (a) {
				tr.A(a)
			}
			return tr
		}
		$.td = function (a) {
			var g = G(arguments)
			var td = $('<td>')
			if (A(a)) {
				_.e(a, function (el) {
					td.A(el)
				})
			}
			else if (a) {
				td.A(a)
			}
			return td
		}
		$.cl = function () {
			var cl = $('<col>');
			return cl
		}
		$.cg = function () {
			var cg = $('<colgroup>');
			return cg
		}
		$.tH = function () {
			var g = G(arguments), q = $('<thead>')
			if (g.A_) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.tB = function () {
			var g = G(arguments), q = $('<tbody>')
			if (g.A_) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.lg = function () {
			var g = G(arguments),
					q = $('<legend>')
			if (g.A) {
				_.e(g.f, function (e) {
					q.A(e)
				})
			}
			else {
				g.e(function (e) {
					q.A(e)
				})
			}
			return q
		}
		$.A = function () {
			var g = G(arguments)
			g.e(function (el) {
				$('body').A(el)
			})
		}
		$.ipI = function (id, arr) {
			var q = $.ip().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
		$.ulI = function (id, arr) {
			var q = $.ul().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
		$.tK = function (k, toAdd) {
			var g = G(arguments),
					t = $.t()
			t.K(k)
			if (A(toAdd)) {
				_.e(toAdd, function (q) {
					t.A(q)
				})
			}
			return t
		}
	}

//_.ex = $ext = ext = function (o) {o.e = o.extend;return o}	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
	$.tK = function (k, toAdd) {
		var g = G(arguments),
				t = $.t()
		t.K(k)
		if (A(toAdd)) {
			_.e(toAdd, function (q) {
				t.A(q)
			})
		}
		return t
	}
	$.ipI = function (id, arr) {
		var q = $.ip().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.ulI = function (id, arr) {
		var q = $.ul().id(id)
		if (A(arr)) {
			_.e(arr, function (qq) {
				q.A(qq)
			})
		}
		else if (arr) {
			q.A(arr)
		}
		return q
	}
	$.a = function (a, f) {
		var g = G(arguments), a = g[0], f = g[1], la = a || ''
		$.a2 = function (a, fn) {
			var g = G(arguments), a = g[0], f = g[1], el = $.a().id(a).A(a);
			if (F(fn)) {
				el.o(fn)
			} else {
				el.hr(fn || '#')
			}
			if (g.n) {
				el.dd()
			}
			//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
			if (g.p) {
				el = li(el)
			}
			if (g.m) {
				el = li(el).K('active')
			}
			return el
		}
		l = $('<a>').A(a)//.id(a)
		if (F(f)) {
			l.$(f)
		} else {
			l.href(f || '#')
		}
		// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
		//if(g.p){ l = $.li( l ) }
		//if(g.m){ l = $.li( l ).K('active') }
		return l.A()
	}
	$.br = function (a) {
		if (U(a)) {
			return $('<br>')
		}
		var sp = $.sp();
		_.t(a, function () {
			sp.A($('<br>'))
		});
		return sp
	}
	$.cI = function (id) {
		return $.c().id(id || 'cv')
	}
	$.pre = function () {
		return $("<pre>").A()
	}
	$.hr = function (c, h, w) {
		var hr = $('<hr>')
		//  if( N(c) ){  return $.hr('z', c, h )  }
		//  hr = $('<hr>').h(h ||2).C(c||'z');
		//  if(w ){ hr.W(w ) }
		return hr
	}
	function attr() {
		$.fn.foc = $.fn.focus
		$.fn.v = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				if (g.n) {
					this.val('')
				}
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.V = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				this.val('')
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.v = $.fn.val
		$.fn.v_ = function () {
			var val = this.val();
			this.val('');
			return val
		}
		$.iI = function (i) {
			if (O(i)) {
				return S($(i)[0].src)
			}
		}
		$.src = function f(e) {
			if (e.image) {
				e = e.image
			}
			if ($.tCan(e)) {
				e = $.tCan(e)
			}
			if (e.src) {
				e = e.src
			}
			if (e.toDataURL) {
				e = _.tDU(e)
			}
			return s$(e).contains('data:') ? e
					: S(e) ? _.src(e)
					: 0
		}
		$.fn.ed = function (ed) {
			if (U(ed)) {
				return this.attr('contenteditable')
			}
			this.attr('contenteditable', ed ? true : false)
			return this
		}
		$.fn.rmAt = $.fn.removeAttr
		$.fn.edFoc = function () {
			return this.ed(1).foc()
		}
		$.fn.nm = $.fn.name = function (name) {
			return name ? this.at('name', name) :
					this.at('name')
		}
		$.fn.idNm = function (id, nm) {
			this.id(id)
			this.nm(nm || id)
			return this
		}
		$.fn.at = $.fn.attr
		$.fn.i = $.fn.sr = $.fn.src = function (a) {
			if (U(a)) {
				return this.attr('src')
			}
			this.attr('src', _.src(a))
			return this
		}
		$.fn.n = function (name) {
			if (U(name)) {
				return this.attr('name')
			}
			this.attr('name', name);
			return this
		}
		$.fn.ml = $.fn.mlt = function (m) {
			return this.at('multiple', true)
		}
		$.fn.ph = $.fn.placeholder = function (forWhat) {
			return this.attr('placeholder', forWhat)
		}
		$.fn.ck = $.fn.chk = function () {
			this.at('checked', true)
		}
		$.fn.ty = $.fn.type = function (type) {
			if (U(type)) {
				return this.attr('type')
			}
			this.attr('type', type);
			return this
		}
		$.fn.id = function (id) {
			if (U(id)) {
				return this.attr('id')
			}
			;
			this.attr('id', id);
			return this
		}
		$.fn.hr = $.fn.hf = $.fn.href = function (href) {
			if (U(href)) {
				return this.attr('href')
			}
			this.attr('href', href);
			return this
		}
		$.fn.fr = $.fn.for = function (forWhat) {
			return this.attr('for', forWhat)
		}
		$.fn.ro = $.fn.role = function (role) {
			if (U(role)) {
				return this.attr('role')
			}
			this.attr('role', role)
			return this
		}
		$.fn.tt = $.fn.ti = function (a) {
			this.at('title', a)
			return this
		}
		$.fn.d = $.fn.da = $.fn.data
	}
	
	function nest() {
		$.fn.oh = function () {
			return this[0].outerHTML
		}
		$.fn.h = $.fn.ht = $.fn.html
		$.fn.t = $.fn.tx = $.fn.text
		$.fn.e = $.fn.ea = $.fn.each
		$.fn.f = $.fn.fi = $.fn.find
		$.fn.hd = $.fn.hide
		$.fn.sh = $.fn.show
		$.fn.gg = $.fn.toggle
		$.fn.fCt = function (str) {
			return this.fi(":contains(" + str + ")")
		}
		$.bd = function () {
			var bd = $('body')
			return bd
		}
		$.A = function () {
			var g = G(arguments),
					bd = $('body')
			$.fn.A.apply(bd, g)
			return $
		}
		$.ct = $.cts = $.contains
		$.fn.osP = function () {
			return this.offsetParent
		}
		$.fn.g = function (ix) {
			if (U(ix)) {
				return this[0]
			}
			return this.eq(ix)
		}
		$.fn.ch = function () {
			return this.children()
		}
		$.fn._ = $.fn.closest
		$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
		$.fn.sib = function () {
			var g = G(arguments);
			return this.sib.apply(this.g)
		}
		$.fn.N = $.fn.next
		$.fn.r = $.fn.rm = $.fn.xx = function () {
			var e = this
			e.remove()
			return e
		}
		$.fn.fRm = function (a) {
			return this.fi(a).rm()
		}
		$.fn.E = function (html) {
			var $el = this, g = G(arguments)
			//$l('$.fn.E in web.js (betweetn fRm and rp')
			$el.empty() //if (S(html)) {this.h(html); return this}
			g.A ? _.e(g.f, add) :
					g.e(add)
			return $el
			function add(q) {
				A(q) ? _.e(q, add) :
						$el.A(q)
			}
		}
		$.fn.rp + $.fn.replace
		$.fn.A = function (stuff) {
			if (U(stuff)) {
				$('body').append(this);
				return this
			}
			this.append.apply(this, arguments)
			return this
		}
		$.fn.a2 = function (a) {
			a.A(this);
			return this
		}
		$.fn.pp = function (a) {
			this.pp(a);
			return this
		}
		$.fn.p2 = $.fn.pp2 = function (a) {
			this.prependTo(a);
			return this
		}
		$.fn.iB = $.fn.insertBefore
		$.fn.iA = $.fn.insertAfter
		$.fn.wr = $.fn.wrap
	}
}
function sty(){
	$.fn.dp = $.fn.display = function (display) {
		if (U(display)) {
			return this.css('display')
		}
		this.css('display', display);
		return this
	}
	$.fn.ov = $.fn.overflow = function (overflow) {
		if (U(overflow)) {
			return this.css('overflow')
		}
		this.css('overflow', overflow);
		return this
	}
	$.fn.P = $.fn.p = function (pos, x, y) {
		var e = this, g = G(arguments)
		if (g.u) {
			return e.css('position')
		}
		e.css('position', oO('p', pos))
		if (N(g.s)) {
			e.X(g.s)
		}
		if (g.t) {
			e.Y(g.t)
		}
		return e
	}
	$.fn.ab = $.fn.abs = function (x, y) {
		var e = this
		return e.P('a', x, y)
	}
	$.fn.float = function (float) {
		if (U(float)) {
			return this.css('float')
		}
		this.css('float', float);
		return this
	}
	$.fn.os = function () {
		var os = this.offset()
		return os
	}
	$.fn.zi = $.fn.zIndex = function (z) {
		if (U(z)) {
			return this.css('z-index')
		}
		this.css('z-index', z);
		return this
	}
	$.fn.L = $.fn.l = $.fn.left = function (l) {
		var q = this, g = G(arguments)
		if (N(l)) {
			q.css('left', l)
			return q
		}
		l = q.css('left')
		return l == 'auto' ? 'auto' : q.position().left
		function old() {
			$.fn.L = function (n) {
				if (U(n)) {
					return this.css('left')
				}
				this.css('left', n)
				return this
			}
		}
	}
	$.fn.right = $.fn.R = $.fn.rit = function (right) {
		if (U(right)) {
			return this.css('right')
		}
		this.css('right', right)
		return this
	}
	$.fn.LR = function (l, r) {
		var q = this
		if (O(l)) {
			r = l.r;
			l = l.l
		}
		if (N(l)) {
			q.L(l)
		}
		if (N(r)) {
			q.R(r)
		}
		return q
	}
	$.fn.bottom = $.fn.bot = $.fn.B = function (bottom) {
		if (U(bottom)) {
			return this.css('bottom')
		}
		this.css('bottom', bottom)
		return this
	}
	function dim() {
		$.fn.mgT = function (a) {
			return this.css("margin-top", a || 0)
		}
		$.mar = function () {
			var g = G(arguments), o
			o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
					N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
							N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
									N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
											'10px 10px 10px 10px'
			return o
		}
		$.fn.mar = function (margin) {
			if (U(margin)) {
				return this.css('margin')
			}
			this.css('margin', margin);
			return this
		}
		$.fn.marBottom = function (margin) {
			if (U(margin)) {
				return this.css('marginBottom')
			}
			this.css('marginBottom', margin);
			return this
		}
		$.fn.marTop = function (margin) {
			if (U(margin)) {
				return this.css('marginTop')
			}
			this.css('marginTop', margin);
			return this
		}
		$.fn.marLeft = function (margin) {
			if (U(margin)) {
				return this.css('marginLeft')
			}
			this.css('marginLeft', margin);
			return this
		}
		$.fn.marRight = function (margin) {
			if (U(margin)) {
				return this.css('marginRight')
			}
			this.css('marginRight', margin);
			return this
		}
		$.fn.marHor = function (a) {
			return this.marLeft(a).marRight(a)
		}
		$.fn.marVer = function (a) {
			return this.marTop(a).marBottom(a)
		}
		$.fn.mar = function (margin) {
			if (U(margin)) {
				return this.css('margin')
			}
			this.css('margin', margin);
			return this
		}
		$.fn.mB = $.fn.marBottom = function (margin) {
			if (U(margin)) {
				return this.css('marginBottom')
			}
			this.css('marginBottom', margin);
			return this
		}
		$.fn.mT = $.fn.marTop = function (margin) {
			if (U(margin)) {
				return this.css('marginTop')
			}
			this.css('marginTop', margin);
			return this
		}
		$.fn.mL = $.fn.marLeft = function (margin) {
			if (U(margin)) {
				return this.css('marginLeft')
			}
			this.css('marginLeft', margin);
			return this
		}
		$.fn.mR = $.fn.marRight = function (margin) {
			if (U(margin)) {
				return this.css('marginRight')
			}
			this.css('marginRight', margin);
			return this
		}
		$.fn.mH = $.fn.marHor = function (a) {
			return this.marLeft(a).marRight(a)
		}
		$.fn.mV = $.fn.marVer = function (a) {
			return this.marTop(a).marBottom(a)
		}
		MARGINAUTO = function () {
			z()
			o = outer = $.div('b', 500, 500).A()
			o.A(i = inner = $.div('r', 100, 100))
			i.mar('auto')
			o.mar('auto')
		}
		$.fn.pdB = function (a) {
			return this.css("padding-bottom", a || 0)
		}
		$.fn.pad = function (a) {
			return this.css("padding", a || 0)
		}
		$.fn.pad = function (padding) {
			if (U(padding)) {
				return this.css('padding')
			}
			this.css('padding', padding);
			return this
		}
		$.fn.padTop = function (padding) {
			if (U(padding)) {
				return this.css('paddingTop')
			}
			this.css('paddingTop', padding);
			return this
		}
		$.fn.padBottom = function (padding) {
			if (U(padding)) {
				return this.css('paddingBottom')
			}
			this.css('paddingBottom', padding);
			return this
		}
		$.fn.padLeft = function (padding) {
			if (U(padding)) {
				return this.css('paddingLeft')
			}
			this.css('paddingLeft', padding);
			return this
		}
		$.fn.padRight = function (padding) {
			if (U(padding)) {
				return this.css('paddingRight')
			}
			this.css('paddingRight', padding);
			return this
		}
		$.fn.padHor = function (a) {
			return this.padLeft(a).padRight(a)
		}
		$.fn.padVer = function (a) {
			return this.padTop(a).padBottom(a)
		}
		$.fn.pad = function (padding) {
			if (U(padding)) {
				return this.css('padding')
			}
			this.css('padding', padding);
			return this
		}
		$.fn.pT = $.fn.padTop = function (padding) {
			if (U(padding)) {
				return this.css('paddingTop')
			}
			this.css('paddingTop', padding);
			return this
		}
		$.fn.pB = $.fn.padBottom = function (padding) {
			if (U(padding)) {
				return this.css('paddingBottom')
			}
			this.css('paddingBottom', padding);
			return this
		}
		$.fn.pL = $.fn.padLeft = function (padding) {
			if (U(padding)) {
				return this.css('paddingLeft')
			}
			this.css('paddingLeft', padding);
			return this
		}
		$.fn.pR = $.fn.padRight = function (padding) {
			if (U(padding)) {
				return this.css('paddingRight')
			}
			this.css('paddingRight', padding);
			return this
		}
		$.fn.pH = $.fn.padHor = function (a) {
			return this.padLeft(a).padRight(a)
		}
		$.fn.pV = $.fn.padVer = function (a) {
			return this.padTop(a).padBottom(a)
		}
		$.fn.bdC = function (a) {
			return this.css("border-color", oO('c', a || 'r'))
		}
		$.fn.borderStyle = function (style) {
			this.css('border-style', style)
			return this
		}
		$.fn.borderColor = function (c) {
			this.css('border-color', oO('c', c))
			return this
		}
		$.fn.borderWidth = function (w) {
			this.css('border-width', w)
			return this
		}
		$.fn.bor = function (border) {
			if (U(border)) {
				return this.css('border')
			}
			this.css('border', border);
			return this
		}
		$.fn.bS = $.fn.borderStyle = function (style) {
			this.css('border-style', style)
			return this
		}
		$.fn.bdC = $.fn.borderColor = function (c) {
			this.css('border-color', oO('c', c))
			return this
		}
		$.fn.bW = $.fn.borderWidth = function (w) {
			this.css('border-width', w)
			return this
		}
		$.fn.bor = function (border) {
			if (U(border)) {
				return this.css('border')
			}
			this.css('border', border);
			return this
		}
		$.Ol = $.outline = function OL() {
			var g = G(arguments), o, ol
			o = g.N_ ? {w: g.f} :
					Oo('c', o) ? {c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
			/*
			 if(S(g.f)){
			 o= g.f.split(' ')
			 ol= _.j([
			 $r('c',o[0]),  oO('ow',o[1]||5) +'px',
			 oO('os',o[2]||'-') ])
			 $l(ol)
			 return ol}
			 ol=  _.j([
			 $r('c',o.c),
			 N(o.w)? o.w+'px'$r('ow',o.w),
			 $r('os',o.s)
			 ])*/
			//$l( ol )
			return ol
		}
		$.fn.X = function (l) {
			var q = this, g = G(arguments)
			if (N(l)) {
				q.css(
						'left',
						g.p ? q.X() + l :
								l
				)
				return q
			}
			l = q.css('left')
			return l == 'auto' ? 'auto' : parseInt(l)
			/*
			 $.fn.X = $.fn.left = function (left) {
			 if (N(left)) {
			 return this.css('left', left)
			 }
			 var left = this.css('left')
			 if (left == 'auto') {
			 return 'auto'
			 }
			 return parseInt(left)
			 }
			 */
		}
		$.fn.Y = $.fn.top = function (top) {
			if (N(top)) {
				return this.css('top', top)
			}
			var top = this.css('top')
			if (top == 'auto') {
				return 'auto'
			}
			return parseInt(top)
			/*
			 $.fn.Y = $.fn.top = function (top) {
			 if (N(top)) {
			 return this.css('top', top)
			 }
			 var top = this.css('top')
			 if (top == 'auto') {
			 return 'auto'
			 }
			 return parseInt(top)
			 }
			 */
		} //$.fn.t
		$.fn.XY = function (x, y) {
			x = N(x) ? x : 0
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			/*
			 $.fn.XY = function (x, y) {
			 x = N(x) ? x : 0
			 if (U(y)) {
			 y = x
			 }
			 return this.X(x).Y(y)
			 }
			 */
		}
		$.fn.ouH = $.fn.outerHeight
		$.fn.W = function (w) {
			return w ? this.width(w) : this.width()
		}
		$.fn.H = function (h) {
			return h ? this.height(h) : this.height()
		}
		$.fn.WH = function (w, h) {
			h = h || w;
			return this.W(w).H(h)
		}
		$.fn.MW = $.fn.maxW = function (a) {
			return this.css('max-width', a)
		}
		$.fn.mW = $.fn.minW = function (a) {
			return this.css('min-width', a)
		}
		$.fn.mH = $.fn.minH = function (a) {
			return this.css('min-height', a)
		}
		$.fn.maxH = function (a) {
			return this.css('max-height', a)
		}
		$.fn.getPosition = $.fn.getTotalOffset = function () {
			alert('$.fn.getPosition')
			var e = this, x = 0, y = 0
			while ($.tEl(e) && e.tagName) {
				y += e.offsetTop
				x += e.offsetLeft
				if (isBodyElement(e)) {
					e = 0
				}
				e = e.offsetParent || e
			}
			return {x: x, y: y}
		}//just gets the TOTAL offset of ANY element
		$.fn.sz = function (sz) {
			return this.at('size', sz)
		}
		$w = $.wi = function () {
			return $(window)
		}
		$.rz = function (fn) {
			var g = G(arguments), wi = $.wi
			wi.rz(fn);
			if (g.p) {
				fn()
			}
			return wi
		}
		$.fn.Z = function (w, h) {
			return this.W(w).H(h || w)
		}
		$.fn.oH = $.fn.outerHeight
	}
	
	function klas() {
		$.fn.s = $.fn.css
		$.qs = function f(sty, styVal) {
			var o = {}
			if (S(sty)) {
				addSty(o, sty, styVal)
			}
			else {
				_.e(
						sty, function (styVal, sty) {
							addSty(o, sty, styVal)
						}
				)
			}
			return o
			function addSty(o, a, b) {
				if (N(b) && M.abs(b) > 10) {
					b = String(b) + 'px'
				}
				o[oO('s', a)] = oO(a, b, 'R')
				return o
			}
		}
		$.fn.ss = function () {
			var g = G(arguments),
					qs = $.qs(g.f)
			g.f = qs
			this.css.apply(this, g)
			return this
		}
		$.fn.k = $.fn.K = function () {
			$.fn.addClass.apply(this, arguments);
			return this
		}
		$.fn.tK = $.fn.ggK = $.fn.toggleClass
		$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
		$.toColor = function (n1, n2, n3, n4) {
			return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
		}
		$al = function (er) {
			alert(er)
			return false
		}
		$.fn.al = function (z) {
			if (U(z)) {
				return this.css('opacity')
			}
			this.css('opacity', z)
			return this
		}
		$.C = function (Col, col) {
			var bd = $('body')
			bd.C(Col)
			if (col) {
				bd.col(col)
			}
			return $
		}
		$.fn.col = function (col) {
			return this.css('color', oO('c', col))
		}
		$.fn.C = function (col, c2) {
			if (c2) {
				return this.C(col).col(c2)
			}
			if (col == '*') {
				col = Yano.random()
			}
			return this.css('backgroundColor', oO('c', col))
		}
		$.fn.T = function () {
			var g = G(arguments)
			if (g.u) {
				return this.text()
			}
			this.text(g.f)
			return this
		}
		$.fn.fZ = $.fn.fS = $.fn.fontSize = function (z) {
			this.css('font-size', z)
			return this
		}
		$.fn.tA = $.fn.textAlign = function (z) {
			this.css('text-align', z)
			return this
		}
		$.Fo = $.font = $f = function (a, b) {
			var g = G(arguments)
			if (O(a)) {
				return ss(
						oB(b), {fz: a || 50}
				)
			}
			a = N(a) ? _S(a) : U(a) ? '' : a;
			var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
			_.e(
					a.split(' '), function (p) {
						if (M(p[0])) {
							p = p.split('/')
							Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
						}
						F = Oo('ff', p) || F
						W = Oo('fw', p) || W
						S = Oo('fs', p) || S
					}
			)
			return [W, S, Z, F].join(' ')
		}
		$.fn.T0 = function () {
			var d = this,
					g = G(arguments)
			d.E()
			g.e(
					function (str) {
						d.A(
								$.h3(str)
						)
					}
			)
			return d
		}
		$.fn.bg = $.fn.bgI = function (url) {//set background image
			this.bgI('url("' + $.src(url) + '")');
			return this
		}
		$.fn.bg = function (bg) {
			if (U(bg)) {
				return this.css('background')
			}
			this.css('background', bg)
			return this
		}
		$.fn.bgP = function (bg) {
			if (U(bg)) {
				return this.css('backgroundPosition')
			}
			this.css('backgroundPosition', bg)
			return this
		}
		$.fn.pBgI = $.fn.bp = function (x, y) {
			var g = G(arguments), x = g[0], y = g[1];
			x = N(x) ? x : 0;
			y = N(y) ? y : 0;
			this.css({backgroundPos: x + 'px ' + y + 'px'});
			return this
		}
		LJQFN = function () {
			z()
			css = {}
			css.redDivs = {
				div: {
					C: 'v', c: 'p',
					M: 20, P: 40, h: 420
				},
				span: {
					C: 'x'
				}
			}
			css.big = {div: {fZ: 100}}
			$CSS(css.redDivs)
			$CSS(css.big)
			d = $.d().A('hello').A($.sp('why not span'))
			$.d().A('nice day')
			$.d().A('see ya')
			$('div').e(
					function () {
						console.log('this:', this)
					}
			)
			p = $('span').p()//.C('z')
			//r=	$('body').f('div').C("b")//.r()
		}
	}
	
	function flex() {
		$.fn.fl = function () {
			this.css('display', 'flex')
			return this
		}
		$.fn.$J = function (a) {
			this.css('justify-content', a)
			return this
		}
		$.fn.$I = function (a) {
			this.css('align-items', a)
			return this
		}
		$.fn.$C = function (a) {
			this.css('align-content', a)
			return this
		}
	}
	
	function rule() {
		$.sty = function (h) {
			var styleTag = $('<style>')
					.at({type: 'text/css'});
			styleTag.h(h)
			return styleTag
		}
		$rule = function (sel, decs, rulesOb) {
			var str
			var SelOb = {
				bd: 'body', bt: 'button',
				sc: 'section', nv: 'nav', d: 'div',
				i: 'img', ip: 'input'
			}
			if (A(sel)) {
				alert('$rule')
				sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
			}
			sel = sel.replace('_', '.')
					.replace('$', '#')
			_.e(
					SelOb, function (v, k) {
						if (sel == k) {
							sel = v
						}
					}
			)
			return sel + ' ' + $decBlk(decs, rulesOb)
		}
		$rules = function (rulesOb) {
			var rulesStr = '\n\n';
			_.e(
					rulesOb, function (decs, sel) {
						rulesStr += $rule(sel, decs, rulesOb) + '\n'
					}
			)
			rulesStr += '\n'
			return rulesStr
		}
		$S = $CSS = function (rulesOb) {
			var rulesStr
			if (!rulesOb) {
				return $l($('style').oh())
			}
			rulesStr = $rules(rulesOb)
			$('head').A($.sty(rulesStr))
			return rulesStr
		}
		$decBlk = function (decs, rulesOb) {
			var decBlkStr = ' ', DECS = {}
			if (S(decs)) {
				$l('$decBlk');
				return decs
			} //for @media ??
			if (decs.pl) {
				plugin = function (decsOb, plOb) {
					_.e(
							plOb, function (v, k) {
								$S.pg[k].apply(decsOb, v)
							}
					)
					return decsOb
				}
				plugin(decs, decsOb.pl)
			}
			if (decs.mx) {
				//_.e(decs.mx, function (v, k) {$S.mx[k].apply(decs, v)})
				mixin = function (decsOb, rulesOb) {
					//tries to extend from one of its own first
					if (rulesOb && rulesOb[decsOb.mx]) {
						_.x(decsOb, rulesOb[decsOb.mx])
					}
					//then goes to global ($S.mx)
					else {
						_.x(decsOb, $S.mx[decsOb.mx])
					}
				}
				mixin(decs.mx, rulesOb)
			}
			_.e(
					decs, function (v, k) {
						var fn
						if (k !== 'mx' && k !== 'pl') {
							if (A(v)) {
								$l('$decBlk - plugin!');
								$d(v)
								fn = $S.fn[_.f(v)]
								if (F(fn)) {
									DECS[oO('s', k)] = fn.apply(null, _.r(v))
								}
								else {
									$l('$decBlk fn not a fn!!')
									if ($CSS.df[k]) {
										DECS[oO('s', k)] = $CSS.df[k][_.f(v)]
									}
								}
								return
							}
							DECS[oO('s', k)] = (N(v) && (v > 10)) ?
							String(v) + 'px' :
									oO(k, v, 'R')
						}
					}
			)
			_.e(
					DECS, function (v, k) {
						decBlkStr += k + ':' + v + '; '
					}
			)
			return '{ ' + decBlkStr + '}'
		}
//for meta (see Grail)
		$subRules = function (rulesOb) {// GRAIL CALLS THIS
			return '{' + $rules(rulesOb) + '}'
			// GRAIL CALLS THIS
		}
//to extend
		$S.fn = {
			// (value-)helper functions:
			// lets you write/call functions that
			//produce a complicated value to a
			//particular property,
			// so you don't have to write out
			// the full location of the function
			// -helps with namespacing
		}
		$S.fn.B = $S.fn.bor = function (c) {
			return '8px solid ' + oO('c', c || 'z')
		}
		$S.mx = {
			// this lets you associate a selector with a bunch
			// of declarations at once, and you can add more, too
		}
		$S.mx.icon = {
			transition: 'background-color ease .2s',
			margin: '0 .5em'
		}
		$S.pl = {
			// these are functions that take pams
			// and ctx-bound to the dec obj
			// so its main use is to add decs directly on it
			// but one function can add multiple decs
			//(plugins)
		}
		$S.df = {}
		$S.df.B = {}
		$S.df.B.b = '1px blue border'
	}
}
function inOutput(){
	$L('but', 'submitBut', 'form')
	$.ip = function (n) {
		var g = G(arguments), o, ip
		ip = $('<input>').at('type', 'text')
		return ip
		if (n) {
			ip.n(n);
			ip.id(n)
		}
		o = g.O ? g.f :
				g.N_ ? {w: g.f, id: g.s} :
				{ph: g.f, id: g.s, v: g.t || g.s, n: g.t || g.s}
		ip.ph(o.ph)
		if (o.w) {
			ip.W(o.w)
		}
		if (o.id) {
			ip.id(o.id)
		}
		if (o.v) {
			ip.v(o.v)
		}
		if (o.n) {
			ip.n(o.n)
		}
		ip.C(o.C || 'r').col(o.c || 'b')
		if (!g.n) {
			ip.K('form-control')
			ip.A()
		}
		return ip
	}
	$.ipBt = function (btT, f) {
		return $.d().A($.ip(),
				$.bt(btT, function () {
					f.A(ip.V())
				})).A()
	}
	$.pw = function (n) {
		var el = $('<input>').ty('password')
		if (n) {
			el.n(n)
		}
		return el
	}
	$.ta = $.textarea = function (rows, cols, Cl, cl) {
		var g = G(arguments),
				ta = $('<textarea>')
		Cl = Cl || 'pink'
		cl = cl || 'black'
		if (g.N) {
			ta.K('form-control')
		}
		if (N(rows)) {
			ta.attr({rows: rows})
		}
		if (N(cols)) {
			ta.attr({cols: cols})
		}
		return ta.C(Cl, cl)
	}
	$.ta = function (rows, cols, Cl, cl) {
		var g = G(arguments),
				ta = $('<textarea>');
		Cl = Cl || 'p';
		cl = cl || 'z';
		if (g.N) {
			ta.K('form-control')
		}
		if (N(rows)) {
			ta.at({rows: rows})
		}
		if (N(cols)) {
			ta.at({cols: cols})
		}
		return ta.C(Cl, cl)
	}
	$.l = function (t, fr, n, ph) {
		alert('$.l')
		var g = G(arguments), lb = $('<label>'),
				ip, sp
		if (!g.f) {
			return lb
		}
		lb.for(fr).K('control-label').h(t)
		if (!g[2]) {
			return lb
		}
		ip = $.ip().id(fr).n(n).ph(ph || '...')
		if (!g.n) {
			ip.K('form-control')
		}
		sp = $.sp().A(lb, ip)
		if (!g.n) {
			sp.A()
		}
		return sp
	}
	$.lb = function () {
		var g = G(arguments), o, lb = $('<label>')
		o = g.A_ ? {ch: g.f} : {t: g.f, fr: g.s}
		if (o.ch) {
			_.e(o.ch, function (ch) {
				lb.A(ch)
			})
			return lb
		}
		lb.ht(o.t).for(o.fr)
		//fr=fr||t
		//lb.K('control-label')
		if (!g.n) {
			lb.A()
		}
		return lb
	}
	$.cb = function (n, v, lb) {
		$._cb = function () {
			return $.ip().ty('checkbox')
		}
		var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
				cb, id
		if (g.u) {
			return $('<input type="checkbox">').A()
		}
		if (A(v)) {
			v = v[0];
			checked = true
		}
		id = n + '-' + v
		V = '&nbsp' + v + '&nbsp'
		cb = $.ip().ty('checkbox')
		cb.n(n)
		cb.v(v)
		cb.id(id)
		if (checked) {
			cb.at({checked: 'checked'})
		}
		cb = lb ? $.sp().A(cb, $.lb(l, id))
				: g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
				!g.n ? $.sp().A(cb, $.lb(V, id)) :
						cb
		return cb.A()
		/*
		 $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
		 if(A(v)){v=v[0];checked=true}
		 var I=n+'-'+ v,
		 V='&nbsp'+v+'&nbsp',
		 cbox = $.input().type('checkbox').n(n).v(v).id(I)
		 if(checked){cbox.attr({checked:'checked'})}
		 return lb? $.span().A(cbox , $.lb(l,I))
		 :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
		 :g.N? $.span().A(cbox , $.lb(V,I) )
		 :cbox }
		 $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
		 n = g.f||''; v = g.s||'';id = g.t||'';
		 cb= $.ip().ty('checkbox')
		 sp  = $.sp()
		 if(g.A_){_.e(g, function(ar){
		 sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
		 $.lb(ar[1], ar[2]))});
		 return sp.A($.br())}
		 cb.n(n).v(v).id(id);
		 if(g.p){cb.prop('checked', true)}
		 if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
		 return cb}
		 */
	}
	$.cbG = function (n, v) {
		var g = G(arguments), n = g[0], v = g[1], sp = sp();
		if (g.p) {
			_.e(v, function (v) {
				sp.A($.cb(n, v, '+'))
			})
		}
		else {
			_.e(v, function (v) {
				sp.A(
						$.cb(n, v))
			})
		}
		return s.id(n)
	}
	$.cbl = $.cbLb = function () {
		var g = G(arguments)
		return $.sp().A(
				$.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
	}
	$.rbOld = function () {
		var g = G(arguments),
				chkd, n = g[0] || 'n', v = g[1], lb = g[2];
		if (A(v)) {
			v = v[0];
			chkd = true
		}
		var I = n + '-' + v,
				V = '&nbsp' + v + '&nbsp',
				rbox = $.ip().ty('radio').n(n).v(v).id(I);
		if (chkd) {
			rbox.at({checked: 'checked'})
		}
		return l ?
				$.sp().A(rbox, $.lb(lb, I))
				: g.p ?
				$.sp().A($.br(), rbox, $.lb(V, I))
				: g.N ?
				$.sp().A(rbox, $.lb(V, I))
				: rbox
	}
	$.rb = function (name, id) {
		var g = G(arguments)
		id = id || name
		var q = $('<input>').at('type', 'radio')
		q.n(name)
		q.id(id)
		if (g.p) {
			q.at('checked', true)
		}
		return q
	}
	$.rbG = function (n, v) {
		var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
		if (g.p) {
			_.e(v, function (v) {
				sp.A($.rb(n, v, '+'))
			})
		}
		else {
			_.e(v, function (v) {
						sp.A($.rb(n, v))
					}
			)
		}
		return sp.id(n)
	}
	$.rg = function (n, m, M) {
		m = N(m) ? m : 0;
		M = N(M) ? M : 100;
		n = n || 'r';
		var r = $('<input type="range">');
		r.attr({name: n, min: m, max: M});
		return r
	}
	$.sl = function () {
		var g = G(arguments), sl = $('<select>').A()
		if (g.A_) {
			g.eF(function (o) {
				if (N(o)) {
					o = '' + o
				}
				if (S(o)) {
					o = $.o(o)
				}
				sl.A(o)
			})
		}
		if (g.p) {
			sl.multiselect()
		}
		/*
		 //if(!A(g.f)){g.unshift( ['select'] )}
		 if(A(g.f)){
		 sl= $.sel.apply($, g.f);
		 _.e(g.r,function(v){
		 if(S(v)){v = $.op(v)}
		 sl(v)})}
		 else {sl= $.sel();
		 _.e(g,function(v){if (S(v)) {v = $.o(v)}
		 sl(v)})  }
		 */
		sl.V = function (v) {
			if (U(v)) {
				return sl.q.v()
			}
			sl.v(v);
			return sl
		}
		sl.o = function (f) {
			f = f || alert
			sl.change(function () {
				f(sl.V())
			})
			return sl
		}
		if (g.O) {
			g.eF(function (v, k) {
				sl.A($.o(k, v))
			})
		}
		return sl
		//$.sl(['volvo', $.op('merc'), 'saab' ])
		//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
		//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
	}
	$.SEL = function (n, i) {
		var g = G(arguments), sl
		sl = $('<select>')
		sl.n(n).id(i)
		if (!g.n) {
			sl.K('form-control')
		}
		if (g.p) {
			sl.at({mutiple: true})
		}
		return sl
	}
	$.sel = function () {
		var g = G(arguments)
		var sl = $.sl().id(g.f)
		_.e(g.r, function (g) {
			var o = $.op(g).v(g)
			sl.A(o)
		})
		sl.A()
		return sl
	}
	$.o = $.op = function (n, v) {
		var g = G(arguments),
				o = $('<option>')
		o.A(g.f);
		o.v(g.s || g.f)
		// n = n||'option';  v=v||n; o.T(n).v(v)
		// o.V( g[0] )
		if (g.p) {
			o.at({selected: true})
		}
		o.A()
		return o
	}
	$.og = $.opGr = function (lb) {
		var g = G(arguments), o, og
		o = g.S_ ? {lb: g.f, ch: g.s} : {ch: g.f}
		og = $('<optgroup>')
		if (o.lb) {
			og.at('label', o.lb)
		}
		if (o.ch) {
			if (A(o.ch)) {
				_.e(o.ch, function (q) {
					//if(N(q)){q =''+ q }
					if (S(q)) {
						q = $.o(q)
					}
					og.A(q)
				})
			}
			else {
				og.A(o.ch)
			}
		}
		og.A()
		return og
	}
	$.fU = $.fileUpload = function (lb, t) {
		var fG = $.d().K("form-group").A(
				$.lb(D(lb) ? lb : 'upload file', 'upl').K('control-label').fS(20),
				$.ip().ty('file').id('upl').name('i')
		)
		if (t) {
			fG.A($.p(t).K('help-block'))
		}
		return fG
	}
	$.v = function (id) {
		return $('#' + id).val()
	}
	$.V = function (id) {
		var $el = $('#' + id)
		var val = $el.val()
		$el.val('')
		return val
	}
	but()
	form()
	function but() {
		$.bt = $.button = function () {
			var g = G(arguments), o, bt = $('<button>');
			o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
			o.t = o.t || 'submit';
			if (!g.n) {
				bt.A()
			}
			return bt.T(o.t).$(o.fn)
		}
		$.BT = $.btL = function (t, fn) {
			if (F(t)) {
				return $.bt('submit', t)
			}
			var b = $('<button>');
			b.text(t);
			b.$(fn)
			return b.K('btn-lg')
			/*
			 $.btL=  function(t,f,C,c){
			 var g=G(arguments),
			 t=g[0],f=g[1],C=g[2],c=g[3],
			 t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
			 b = $.bt().K('btn-lg').c(C, c);
			 b(t);if(f){ b.o( f ) }
			 if( g.n ){ b.dd() }//dropdown
			 return b
			 }
			 */
		}
		$._bt = $.btM = function (t, fn) {
			return $.bt(t, fn).C('b').K("btn btn-mini")
		}
		$.bts = function (a, b) {
			var g = G(arguments), d = $.dA(200);
			if (g.p) {
				return $.bts(['start', a], ['stop', b]).auto()
			}
			g.e(function (v) {
				v = A(v) ? v : [v];
				d.A($.bt(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
			})
			return d
		}//floating div of buttons
		$.btR = function (t, fn) {
			var b = $.bt(t, fn).float('right')//.display('block')
			return b
		}
		$.$bt = $.btLf = function (t, fn) {
			var b = $.bt(t, fn).float('left')//.display('block')
			return b
		}
		$.bX = $.btX = function (t, fn) {
			var g = G(arguments), bt, o;
			o = {
				url: g.f,
				data: g.s
			}
			t = t || g.p ? 'submit' : 'X'
			fn = fn || function () {
				var bt = this;
				$.aj({
					url: o.url, data: o.data, type: 'DELETE',
					success: function () {
						$(bt).pa().rm();
						if (g.n) {
							$.rl()
						}
					}
				})
			}
			bt = $.bt(t, fn)
			return bt
		}
		$.btR = function (text, func) {
			var b = $.button(text, func).float('right')//.display('block')
			return b
		}
		$.btL = function (text, func) {
			var b = $.button(text, func).float('left')//.display('block')
			return b
		}
		$.bts = function (a, b) {
			var g = G(arguments), d = dva(2)
			if (g.p) {
				return bts(['start', a], ['stop', b]).auto()
			}
			_.e(g, function (v) {
				v = A(v) ? v : [v]
				d($button(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
			})
			return d
		}//floating div of buttons //beta
	}
	
	function form() {
		$.f = $.form = function (c, act) {
			var g = G(arguments),
					o, f = $('<form>').K('form')
			o = g.A ? {ch: g.f} : {c: g.f, a: g.s}
			if (o.ch) {
				g.eF(function (el) {
					f.A(el)
				})
			}
			if (o.a) {
				f.attr({action: o.a})
			}
			if (o.c) {
				f.C(o.c)
			}
			f.attr({method: g.p ? 'get' : 'post'})
			if (!g.n) {
				f.A()
			}
			return f
		}
		$.f.gr = $.fG = $.fGD = function () {
			return $.dK('form-group').fS(20)
		}
		$.formGet = function (c, act) {
			var g = G(arguments), c = g[0], act = g[1],
					f = $.f().K('form').attr('method', 'get')
			if (c) {
				f.C(c)
			}
			if (act) {
				f.at({action: act})
			}
			return f
		}
		$.fI = $.formInline = function (a, b) {
			var f = $.form().C('b').K('form-inline form-group'),
					g = G(arguments);
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.f.i = $.fR = $.formRight = function (a, b) {
			var g = G(arguments),
					f = $.form().C('b').K('form navbar-form navbar-right');
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.f.f = $.fF = $.formFalse = function (a, b) {
			var g = G(arguments),
					f = $.form().C('b').K('form well').attr({method: false, action: false});
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.sm = $.submit = $.submitButton = function (buttonText, func) {
			return $.button(buttonText, func).type('submit')
		}
		$.sb = function () {
			var g = G(arguments)
			var ip = $.ip()
			ip.at('type', 'submit')
			ip.A()
			return ip
		}
		$.sbb = function () {
			var g = G(arguments)
			var ip = $.ip()
			ip.at('type', 'submit')
			return ip
		}
		$.smBt = $.submitButton = function () {
			var args = G(arguments),
					button = $button.apply(0, args)
			return button.type('submit')
		}
		$.submit2 = sm = function (a) {
			var g = G(arguments)
			if (g.p) {
				return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
			}
			return ip('submit').k('show').v(ok(a))
		}
		$.sm = function (v) {
			var el = $('<input>').ty('submit').fS(16)
			if (v) {
				el.v(v)
			}
			return el
		}
		$.sb = function (t, fn) {
			var g = G(arguments), bt = $.bt(t, fn).ty('submit')
			if (g.p) {
				bt.K('btn btn-mini button-default').T(a || 'ok')
			}
			//bt.A('submit').K('show')
			return bt
		}
	}
	
	function ajax() {
		$.pD = function (ev) {
			ev.preventDefault()
			return ev
		}
		$.iQ = function (o) {
			return O(o) && F(o.ajaxStart)
		}
		$.iO$ = function (o) {
			return O$(o) && !$.iQ(o)
		}
		$.g = $.G = function () {
			var g = G(arguments), o;
			if (U(g[1])) {
				return _.p($.G, g[0])
			}
			o = F(g[1]) ? {p: g[0], fn: g[1]} :
			{p: g[0], d: g[1], fn: g[2]};
			$.get(S.eL(o.p), o.d || {},
					function (d) {
						o.fn = o.fn || function () {
							return 'boo ya!'
						};
						o.fn(d)
					})
		}
		$.eG = function () {
			var g = G(arguments), o;
			if (U(g[1])) {
				return _.p($.eG, g[0])
			}
			o = F(g[1]) ? {p: g[0], fn: g[1]} :
			{p: g[0], d: g[1], fn: g[2]};
			$.G(o.p, o.d || {},
					function (dd) {
						_.e(dd, function (d) {
							o.fn(d)
						})
					});
			return $
		}
		$.txG = function (url) {
			$.get('/' + url, function (aa) {
				a = aa
			})
		}
		$.j = $.gJ = $.Gj = function () {
			var g = G(arguments), o;
			if (U(g[1])) {
				return _.p($.Gj, g[0])
			}
			o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
			o.fn = o.fn || function () {
				return 'boo ya!'
			};
			$.getJSON(
					S.eL(o.p),
					o.d || {},
					function (d) {
						o.fn(d)
					});
			return $
		}
		$.eJ = $.eGj = function () {
			var g = G(arguments), o;
			if (U(g[1])) {
				return _.p($.eJ, g[0])
			}
			o = F(g[1]) ?
			{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
			$.Gj(o.p, o.d || {}, function (dd) {
				_.e(dd, function (d) {
					o.fn(d)
				})
			});
			return $
		}
		$.po = $.P = function () {
			var g = G(arguments), o;
			o = F(g.s) ?
			{url: g.f, fn: g.s} :
			{url: g.f, da: g.s, fn: g.t};
			o.da = O(o.da) ? o.da : D(o.da) ? {da: o.da} : {}
			o.fn = o.fn || function () {
				return 'boo ya!'
			};
			o.url = S.eL(o.url)
			$.post(o.url, o.da, function (d) {
				o.fn(o.da, o)
			})
			return $
		}
		$.eP = $.ePo = function () {
			var g = G(arguments);
			if (U(g[1])) {
				return _.p($.eP, g[0])
			}
			o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
			$.P(o.u, o.d || {}, function (dd) {
				_.e(dd, function (d) {
					o.fn(d)
				})
			});
			return $
		}
		$.aj = function (ob) {
			return $.ajax(ob)
		}
		$.XML = function () {
			alert('$.XML!');
			return new XMLHttpRequest()
		}
	}
	
	function mouse() {
		$.mu = $.mouseup
		$.md = $.mousedown
		$.mm = $.mousemove
		$.fn.$ = function (fn) {
			return this.click(fn)
		}
		$.scroll = function (a) {
			return $(window).scroll(a || function () {
				$('body').C('*')
			})
		}
		$.fn.xPrp = function () {
			this.on('mousedown', function (e) {
				e.stopPropagation()
			})
			return this
		}
		$.fn.dg = $.fn.drag = function () {
			this.A()
			this.each(function () {
				$(this).css('top', $(this).position().top)
				$(this).css('left', $(this).position().left)
			})
			this.P('a')
			this.on('mousedown', function (e) {
				var el = $(this)
				var offset = el.offset(),
						deltaX = e.pageX - offset.left,
						deltaY = e.pageY - offset.top
				$('html').on('mousemove', function (e) {
					var x = e.pageX - deltaX,
							y = e.pageY - deltaY
					el.left(x)
					el.top(y)
				}).on('mouseup', function () {
					$(this).off()
				})
			})
			//touchDrg(element)
			return this
		}
		$.fn.hv = $.fn.hover
		$.fn.fc = $.fn.focus
		$.md = $.mousedown = function (fn) {
			$('body').on('mousedown', fn);
			return this
		}
		$.mu = $.mouseup = function (fn) {
			$('body').on('mouseup', fn);
			return this
		}
		$.mm = $.mousemove = function (fn) {
			$('body').on('mousemove', fn);
			return this
		}
		$.oMD = function (fn) {
			$.md(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return $
		}
		$.oMU = function (fn) {
			$.mu(function (e) {
				fn(e.clientX, e.clientY, e)
			});
			return $
		}
		$.oMM = function (fn) {
			$.mm(function (e) {
				fn(e.clientX, e.clientY, e)
			});
			return $
		}
		$.fn.m = function (o) {
			var e = this
			if (o.mD) {
				e.mD(o.mD)
			}
			if (o.mU) {
				e.mD(o.mU)
			}
			if (o.pM) {
				e.pM(o.pM)
			}
			return e
		}
		$.fn.$ = $.fn.click
		$.fn.hv = $.fn.hover
		$.fn.mD = function (l) {
			var c = this
			c.mousedown(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mD = function (l) {
			var c = this
			c.mousedown(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.pM = function (l) {
			var c = this
			c.pressmove(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.pm = $.fn.pressmove = function (func) {
			var mouse_pressed
			this.mousedown(function () {
				mouse_pressed = true
			})
			this.mouseup(function () {
				mouse_pressed = false
			})
			this.mousemove(function (e) {
				if (mouse_pressed) {
					func(e)
				}
			})
			return this
		}
		$.fn.mp = $.fn.mousePoint = function (e, scale) {
			scale = N(scale) ? scale : 1
			return V(e.pageX / scale, e.pageY / scale)
		}
		$.fn.mU = function (l) {
			var c = this
			c.mouseup(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.pM = function (l) {
			var c = this
			c.pressmove(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.m = function (o) {
			var e = this
			if (o.mD) {
				e.mD(o.mD)
			}
			if (o.mU) {
				e.mD(o.mU)
			}
			if (o.pM) {
				e.pM(o.pM)
			}
			return e
		}
		$.tap = function (func) {
			this('body').on('keydown mousedown', func);
			return this
		}
		$.$ = function (f) {
			return $(document).on('click', _v(f))
			/*
			 $.$=function(){
			 var b=$('html')
			 b.click.apply(b, arguments)
			 return $
			 }*/
		}
		$.$$ = function (f) {
			return $(document).on('dblclick', _v(f))
			//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
		}
		$.click = m$ = function (f) {
			return $(document).on('click', _v(f))
		}
		$.dblclick = m$$ = function (f) {
			return $(document).on('dblclick', _v(f))
		}
		tou = function () {
			$.ts = $.touchstart
			$.te = $.touchend
			$.ts(function (e) {
				w._mD = 1
				$mXY(e)
				$.touchmove($mXY)
				function $mXY(e) {
					$l('mXY')
					var touch = e.originalEvent.touches[0]
					mX = (touch.clientX - w.x) // / 30
					mY = (touch.clientY - w.y) // / 30
				}
			})
			$.te(function () {
				w._mD = 0
			})
		}
	}
	
	function keys() {
		$.wh = function (a, b) {
			return D(b) ? a.which == b : a.which
		}
		KEYOB = KEYOBJ = {
			up: 38, u: 38,
			down: 40, d: 40,
			left: 37, l: 37,
			right: 39, r: 39,
			space: 32, s: 32,
			enter: 13, e: 13
		}
		$.kD = function self(key, fn) {
			if (O(key)) {
				_.e(key, function (fn, k) {
					if (s$(k).isUpper()) {
						$.kU(k.toLowerCase(), fn)
					}
					else {
						$.kD(k, fn)
					}
				})
				return
			}
			if (KEYOB[key]) {
				key = KEYOB[key]
			}
			$('body').on('keydown', function (e) {
				if (e.which == key) {
					fn(e, $.K)
				}
			})
		}
		$.kU = function (key, funk) {
			if (KEYOBJ[key]) {
				key = KEYOBJ[key]
			}
			$('body').on('keyup', function (e) {
				if (e.which == key) {
					funk(e, $.K)
				}
			})
		}
		$.K = {}
		$.space = function (fn) {
			return $.kD('space', fn)
		}
		KEYS = WHYQ = function () {
			cjs.Keys.l = cjs.Keys.left = false
			cjs.Keys.r = cjs.Keys.right = false
			cjs.Keys.u = cjs.Keys.up = false
			cjs.Keys.d = cjs.Keys.down = false
			$.kU('l', function () {
				if ($.test) {
					$l('left lifted')
				}
				cjs.Keys.l = cjs.Keys.left = false
			})
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				cjs.Keys.l = cjs.Keys.left = true
				cjs.Keys.dir = 'left'
			})
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				cjs.Keys.l = cjs.Keys.left = true
				cjs.Keys.dir = 'left'
			})
			$.kD('r', function () {
				if ($.test) {
					$l('right pressed')
				}
				cjs.Keys.r = cjs.Keys.right = true
				cjs.Keys.dir = 'right'
			})
			$.kU('r', function () {
				if ($.test) {
					$l('right lifted')
				}
				cjs.Keys.r = cjs.Keys.right = false
			})
			$.kD('u', function () {
				if ($.test) {
					$l('up pressed')
				}
				cjs.Keys.u = cjs.Keys.up = true
			})
			$.kU('u', function () {
				if ($.test) {
					$l('up lifted')
				}
				cjs.Keys.u = cjs.Keys.up = false
			})
			$.kD('d', function () {
				if ($.test) {
					$l('down pressed')
				}
				cjs.Keys.d = cjs.Keys.down = true
			})
			$.kU('d', function () {
				if ($.test) {
					$l('down lifted')
				}
				cjs.Keys.d = cjs.Keys.down = false
			})
		}
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = 1
			$.K.L = 0
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = false
			$.K.l = 0;
			$.K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = 1
			$.K.dir = 'right'
			$.K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = 0;
			$.K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = 1;
			$.K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = 0;
			$.K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = 1;
			$.K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = 0;
			$.K.D = 1
		})
		function keys1() {
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				$.K.l = 1
				$.K.L = 0
				$.K.dir = 'left'
			})
			$.kU('l', function () {
				if ($.test) {
					$l('left lifted')
				}
				$.K.l = false
				$.K.l = 0;
				$.K.L = 1
			})
			$.kD('r', function () {
				if ($.test) {
					$l('right pressed')
				}
				$.K.r = 1
				$.K.dir = 'right'
				$.K.R = 0
			})
			$.kU('r', function () {
				if ($.test) {
					$l('right lifted')
				}
				$.K.r = 0;
				$.K.R = 1
			})
			$.kD('u', function () {
				if ($.test) {
					$l('up pressed')
				}
				$.K.u = 1;
				$.K.U = 0
			})
			$.kU('u', function () {
				if ($.test) {
					$l('up lifted')
				}
				$.K.u = 0;
				$.K.U = 1
			})
			$.kD('d', function () {
				if ($.test) {
					$l('down pressed')
				}
				$.K.d = 1;
				$.K.D = 0
			})
			$.kU('d', function () {
				if ($.test) {
					$l('down lifted')
				}
				$.K.d = 0;
				$.K.D = 1
			})
		}
	}
}
function context() {
	x.cv = function () {
		return this.canvas
	}
	x.H = function () {
		return this.canvas.height
	}
	x.W = function () {
		return this.canvas.width// return this.cv().width
	}
	x.u = function () {
		return this.cv().toDataURL()
	}
	x.fS = x.f = x.c = x.fs = function (c, C, l) {
		var g = G(arguments)
		if (g.u) {
			this.fill()
			if (g.p) {
				this.s()
			}
			return this
		}
		this.fillStyle = oO('c', c)
		if (C) {
			this.C(C)
		}
		if (N(l)) {
			this.l(l)
		}
		return this
	}
	x.sS = x.s = x.C = x.ss = function () {
		var g = G(arguments), o
		if (g.u) {
			this.stroke();
			if (g.p) {
				this.f()
			}
			return this
		}
		o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
		if (o.C) {
			this.strokeStyle = oO('c', o.C)
		}
		if (N(o.l)) {
			this.l(o.l)
		}
		return this
	}
	x.al = function (al) {
		this.globalAlpha = al;
		return this
	}
	x.clp = x.cl = function () {
		this.clip();
		return this
	}
	x.cr = function (x1, y1, x2, y2) {
		var ctx = this
		var cv = ctx.cv()
		var i = this.u()
		if (A(x1)) {
			return ctx.crop(
					x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
			)
		}
		ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
		return cv
	}
	x.Z = function () {
		this.scale.apply(this, arguments)
		return this
	}
	x.sc = function (x, y) {
		y = N(y, x)
		this.scale(x, y);
		return this
	}
	x.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
		this.translate(tX, tY)
		if (N(rt)) {
			this.rt(rt)
		}
		if (N(sX)) {
			this.sc(sX, sY)
		}
		return this
	}
	x.sX = function (x) {
		return this.sc(x, 1)
	}
	x.sY = function (y) {
		return this.sc(1, y)
	}
	x.rt = function (n) {
		this.rotate(M.tR(n));
		return this
	}
	x.tf = function () {
		this.transform.apply(this, arguments)
		return this
	}
	x.sT = x.sTf = function () {
		this.setTransform.apply(this, arguments)
		return this
	}
	x.$ = function () {
		return $(this.cv())
	}
	x.S = function () {
		this.save();
		return this
	}
	x.R = function () {
		this.restore();
		return this
	}
	x._ = x.temp = function (fn) {
		this.S();
		_.b(fn, this)();
		return this.R()
	}
	shadow(x)
	globComp(x)
	function shadow(x) {
		x.shC = function (c) {
			this.shadowColor = oO('c', c)
			return this
		}
		x.shX = function (c) {
			this.shadowOffsetX = c
			return this
		}
		x.shY = function (c) {
			this.shadowOffsetY = c
			return this
		}
		x.shB = function (c) {
			this.shadowBlur = c
			return this
		}
	}
	
	function globComp(x) {
		x.globalCompOp = x.o = x.op = x.cO = function (o) {
			this.globalCompositeOperation = o;
			return this
		}
		x.Ds = x.dO = function () {
			this.o('destination-out');
			return this
		}
		x.dS = x.dI = function () {
			return this.o('destination-in')
		}
		x.sD = x.sI = function () {
			this.o('source-in');
			return this
		}
		x.Sd = x.sO = function () {
			this.o('source-out');
			return this
		} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
		x.ds = x.dV = function () {
			this.o('destination-over');
			return this
		}
		x.SD = x.sT = x.sA = function () {
			this.o('source-atop');
			return this
		}
		x.DS = x.dT = x.dA = function () {
			this.o('destination-atop');
			return this
		}
		x.li = function () {
			this.o('lighter');
			return this
		}
		x.co = function () {
			this.o('copy');
			return this
		}
		x.xo = function () {
			this.o('xor');
			return this
		}
	}
	
	_superCanvasPixel = function (el) {
		el.gD = el.getData = function (x, y, w, h) {
			//historic.. dont delete ! data = x('G', X, Y, w, h).res
			var g = G(arguments),
					x = g[0] || 0,
					y = g[1] || 0,
					w = g[2] || this.W(),
					h = g[3] || this.H(),
					data = this.context.getImageData(x, y, w, h)
			// data.h = data.height
			// data.w = data.width
			// data.d = data.data
			return data
		}
		el.pD = el.putData = function (data, x, y) {
			x = x || 0
			y = y || 0
			this.context.putImageData(data, x, y)
			return this
		}
		el.gP = el.getPut = function (a, x, y) {
			var g = G(arguments),
					a = g[0],
					x = g[1],
					y = g[2],
					data = this.gD.apply(this.context, a)
			if (g.n) {
				this.clear()
			}
			return x.pD(data, x, y)
		}
		el.pixelsNegative = function () {
			var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
					data = imgData.data
			for (var i = 0; i < data.length; i += 4) {
				data[i] = 255 - data[i];
				data[i + 1] = 255 - data[i + 1]
				data[i + 2] = 255 - data[i + 2]
				data[i + 3] = 255
			}
			this.pD(imgData) //  this.pD(data,0,0)
		}
		el.pixelsInvert = function () {
			var imgData = this.gD(),
					data = imgData.data
			for (var i = 0; i < data.length; i += 4) {
				data[i] = 225 - data[i];
				data[i + 1] = 225 - data[i + 1]
				data[i + 2] = 225 - data[i + 2]
			}
			this.pD(imgData)
		}
		el.pixelsGrayscale = function () {
			var imgData = this.gD(),
					data = imgData.data
			for (var i = 0; i < data.length; i += 4) {
				var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
				data[i] = avg
				data[i + 1] = avg
				data[i + 2] = avg
			}
			this.pD(imgData) //  this.pD(data,0,0)
		}
		el.pixelsFade = function () {
			var imgData = this.gD(),
					data = imgData.data
			for (var i = 7; i < _.size(data); i += 4) {
				data[i] = 90
			}
			this.pD(imgData)
			return el
		}
		return el
	}
	_superCanvasText = function (el) {
		el.font = function (font) {
			this.context.font = HTML5.font(font)
			return this
		}
		el.strokeText = function (t, X, Y) {
			var g = G(arguments),
					t = g[0],
					X = g[1] || 100,
					Y = g[2] || X
			this.context.strokeText(t, X, Y)
			return this
		}
		el.fillText = function (t, X, Y) {
			var g = G(arguments),
					t = g[0],
					X = g[1] || 100,
					Y = g[2] || X
			if (g.p) {
				this.tx(t, X, Y, '-')
				this.tx(t, X, Y)
			}
			else this.context.fillText(t, X, Y)
			return this
		}
		el.measureText = el.measure = function (t) {
			return this.context.measureText(t)
		}
		el.textWidth = function (t) {
			return parseInt(this.measureText(t).width)
		}
		el.centerHorizontalText = function (text, height) {
			this.fillText(text,
					this.W() / 2 - this.textWidth(text) / 2,
					height
			)
			return this
		}
	}
	XX7 = RAW = PX = function () {
		__C()
		i = new Image()
		$(i).load(function (e) {
			x.drawImage(e.target, 0, 0)
			d = x.getImageData(0, 0, 200, 200)
			for (var i = 0; i < d.data.length; i += 4) {
				d.data[i] = 255 - d.data[i];
				d.data[i + 1] = 255 - d.data[i + 1];
				d.data[i + 2] = 255 - d.data[i + 2];
				d.data[i + 3] = 255;
			}
			x.putImageData(d, 0, 0);
		})
		i.src = _.src('me')
	}
	x.F = function () {
		var g = G(arguments), o
		o = {f: g.f}
		if (g.N_) {
			o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
		}
		this.font = o.f
		return this
	}
	x.ft = x.fT = function (x, y, t) {
		var g = G(arguments)
		if (g.N_) {
			this.fillText(g.t, g.f, g.s)
		}
		else {
			this.fillText(g.t, x.W() / 2, 200)
		}
	}
	x.mL = function () {
	} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
	x.t = x.T = function () {
		var g = G(arguments), x = this, o, t
		o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
				S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
						g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
								S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
								{t: g.f, x: g.s, y: g.t}
		o.x = N(o.x, x.W() / 2)
		o.y = N(o.y, 200)
		if (o.c) {
			x.c(o.c, o.c)
		}
		if (o.f) {
			g.n ?
					x.F(o.f, '-') :
					x.F(o.f)
		}
		x.fillText(o.t, o.x, o.y)
		return x
	}
	x.tA = function () {
	}
	x.tB = x.Bl = function () {
	}
	x.cD = function () {
		this.createImageData()
		return this
	}
	x.gD = function () {
		var g = G(arguments), o, d
		o = {x: g.f, y: g.s, w: g.t, h: g[3]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		d = this.getImageData(o.x, o.y, o.w, o.h)
		d.h = d.height
		d.w = d.width
		d.d = d.data
		return d
	}
	x.pD = function (d, x, y) {
		this.putImageData(d, N(x, 0), N(y, 0))
		return this
	}
	CANNTX = function () {
		__C()
		x.setFont('Helsinki 23px')
		x.f('b').fillText('haffasfsf', 400, 500)
	}
	CANTEXT = function () {
		__C()
		x.t('hello', 100, 100)
	}
//img apps:
	DRI = DRAWIMAGE = function () {
		DRI.CSS()
		d = $.d().A($cv = $.c(900, 400))
		x = $cv.ctx()
		$i = $.i('chicks')
		$i.load(function () {
			x.drawImage($i[0], 100, 100)
		})
		$.i('me', function (i) {
			x.drawImage(i, 400, 100, 500, 200)
		})
	}
	DRI.CSS = function () {
		$CSS({
			body: {C: 'o'},
			div: {
				C: 'r', P: 10,
				M: 10, B: 10,
			},
			canvas: {outline: 'dashed yellow 20px'}
		})
	}
	x.b = x.beg = x.bP = function () {
		var g = G(arguments)
		this.beginPath()
		if (g.u) {
			return this
		}
		if (g.N_) {
			this.mt(g.f, g.s)
			if (g.t) {
				this.c(g.t, g[3], g[4])
			}
		}
		else {
			this.c.apply(this, g)
		}
		return this
	}
	x.mt = function () {
		var x = this, g = G(arguments)
		if (g.A_) {
			x.mt(g.f[0], g.f[1])
			g.eR(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.moveTo(N(g.f, 0), N(g.s, 0))
			if (N(g.t)) {
				x.lt(g.t, g[3])
			}
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.lt = function () {
		var g = G(arguments), x = this
		if (g.A_ && A(g.f[0])) {
			x.lt.apply(x, g.f)
		}
		else if (O(g.s)) {
			g.e(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.lineTo(g.f, g.s)
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.r = function () {
		var ctx = this, g = G(arguments), o
		o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, ctx.W())
		o.h = N(o.h, ctx.H())
		ctx.rect(o.x, o.y, o.w, o.h)
		return ctx
	}
	x.fr = x.fR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.fr2 = x.fR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.l = x.lW = function (n) {
		var g = G(arguments)
		if (!g.n) {
			this.lineWidth = n;
			return this
		}
		return this.lt(g.f, g.s)
	}
	x.sR = x.sr = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.sr2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.cR = x.clR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.cr2 = x.cR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.r2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.pol = function (vs, ox, oy) {
		var x = this, i
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
		_.e(_.r(vs), function (v) {
			x.lt(v[0] + ox, v[1] + oy)
		})
		return x.cp().s().f()
	}
	x.x = x.cP = x.cp = function () {
		this.closePath();
		return this
	}
	x.lC = function (c) {
		var g = G(arguments);
		if (c == 'r') {
			c = 'round'
		}
		else if (c == 'r') {
			c = 'square'
		}
		else if (c == 'b') {
			c = 'but'
		}
		this.lineCap = c
		return this
	}
	x.lJ = function (n) {
		var g = G(arguments);
		if (g.N) {
			this.lineJoin = n;
			return this
		}
	}
	x.a = function () {
		var g = G(arguments), x = this,
				o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
				{r: g.f}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		o.rt1 = N(o.rt1, 0)
		o.rt2 = N(o.rt2, 360)
		o.ccw = g.n ? true : false
		this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.arc2 = x.at = function () {
		var g = G(arguments), o
		o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
		this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	gradient = function () {
		x.lG = x.linGrad = function (a, b, c, d) {
			return this.createLinearGradient(a, b, c, d)
		}
		x.rG = x.radGrad = function (a, b, c, d, e, f) {
			return this.createRadialGradient(a, b, c, d, e, f)
		}
		x.lg = function () {
			var ctx = this, g = G(arguments), o, gr
			o = g.O ? g.f : N(g.t) ? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
			o.x1 = N(o.x1, 0)
			o.y1 = N(o.y1, 0)
			o.x2 = N(o.x2, 0)
			o.y2 = N(o.y2, 0)
			gr = ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)
			if (o.cS) {
				gr.cS(o.cS)
				ctx.c(gr);
				return ctx
			}
			return gr
		}
		x.lf = x.lG = ctx.lGr = ctx.linGrad = function (a, b, c, d) {
			return this.createLinearGradient(a, b, c, d)
		}
		x.rf = x.rG = ctx.rGr = ctx.radGrad = function (a, b, c, d, e, f) {
			return this.createRadialGradient(a, b, c, d, e, f)
		}
		x.pt = x.Pt = function () {
			return this.createPattern()
		}
	}
	gradient()
	superCtx()
	function superCtx() {
		$.cx = function () {
			return $.c.apply($, arguments).cx()
		}
		$.fn.ctx = function () {
			return this[0].getContext('2d')
		}
		x.quadratic = x.qt = function () {
			this.quadraticCurveTo();
			return this
		}
		x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
			var x = this
			ox = N(ox, 0);
			oy = N(oy, 0)
			x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
			_.e(_.r(vxs), function (vx) {
				x.lt(vx[0] + ox, vx[1] + oy);
			})
			x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
			if (hole) {
				x.fS("#ffffff")
			}
			x.cp().s().f()
		}
		x._d = function (i, p2, p3, p4, p5) {
			var x = this, g = G(arguments), o
			if (g.S_ && g.f.length < 10000) {
				if (O(window['Q'])) {
					g[0] = Q.i(g[0])
				}
				else {
					return $.i(g[0], function (e, i) {
						$l('in $.i in x._d')
						x._d(i[0], p2, p3, p4, p5)
					})
				}
			}
			if (g[0] == x) {
				g[0] = g[0].cv()
			}
			g[1] = N(g[1], 0)
			g[2] = N(g[2], 0)
			x.drawImage.apply(x, g)
			return x
		}
		x.d = function (i, p2, p3, p4, p5) {
			var g = G(arguments), o
			o = {i: g.f, x: g.s, y: g.t}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			if (O(o.i)) {
				this.drawImage($(o.i)[0], o.x, o.y)
				return this
			}
			if (S(o.i)) {
				if (O(window['Q'])) {
					o.i = Q.i(o.i)
				}
				else {
					$.i(g[0], function (e, i) {
						$l('in $.i in x._d')
						x._d(i[0], p2, p3, p4, p5)
					})
					return this
				}
			}
			if (o.i.width) {
				o.x = o.x - o.i.width / 2
				o.y = o.y - o.i.height / 2
			}
			this._d(o.i, o.x, o.y)
		}
		x.dC = function f(i, x, y) {
			var that = this
			i = i || 'me'
			x = x || 100
			y = y || 100
			if (U(x)) {//draw img in center of can
				$.i(i, function (i) {
					that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
				})
			}
			else {//draw it by specifying location of its center
				y = y || x
				$.i(i, function (i) {
					that.dr(i, x - i.W() / 2, y - i.H() / 2)
				})
			}
			return this
		} //draw it where u say, but as if its reg point was its center
		isInPoint = x.iP = function (x, y) {
			return this.isPointInPath(x, y)
		}
		x.drawRegCenter = function f(i, x, y) {
			var that = this
			$.i(i, function (e, i) {
				that.draw(i[0],
						(that.W() / 2) - (i.W() / 2),
						(that.H() / 2) - (i.H() / 2))
			})
			return this
		}
		x.fit = function f(i, x, y) {
			i = i || 'me'
			x = N(x, 0)
			y = N(y, 0)
			this.d(i, x, y, this.W(), this.H())
			return cv
		}
		x.jD = function (img, p1, p2, p3, p4) {
			var x = this, i = new Image
			$(i).load(function (i) {
				D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
						D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
								x.drawImage(i.target, p1 || 0, p2 || 0)
			})
			i.src = _.src(img)
			return i
		}
		XP1 = FILLSTY = function () {
			__C()
			x.f('g').r(20, 20, 400, 400).f()
			x.r(120, 120, 100, 100).s('b').s()
			x.l(60).s('r').b().l(120, 120).l(100, 100)
					.lt(1000, 10).lt(200, 100).l(100, 400).s()
			x.s('b').b().lt(
					[20, 120],
					[100, 10],
					[170, 130],
					[300, 10],
					[-120, -120],
					[150, 400]
			).s()
		}
		XP2 = DRAWAPP = function () {
			__C()
			c.W(window.innerWidth)
			c.H(window.innerHeight)
			function draw() {
				x.s('r').f('o')
				x.fR(400, 300, 100, 220)
				x.f('b').fR(0, 0, 100, 220)
				x.f('r').fr2(0, 0, 100, 220)
				x.jD('me', 400, 500)
				// x.jD('me', 200, 400,800,300)
			}
			
			draw()
			_.in(first)
			function first() {
				x.S()
				x.rt(10)
				draw()
				x.R()
				_.in(then)
			}
			
			function then() {
				x.S()
				x.tl(200, 200);
				draw()
				x.R()
				x.tl(20, 20);
				draw()
			}
		}
	}
}
function webAnim(){
	$.fn.st = $.fn.stop
	$.fn.fT = $.fn.f2 = $.fn.fadeTo
	$.fn.an = function (a, b, c, d) {
		var g = G(arguments), q = this
		//if (N(g.s)) {g.s *= 1000}
		this.animate(
				$.qs(g.f), g.s, g.t, g[3], g[4])
		return this
	}
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.st = $.fn.stop
	$.fn.f2 = $.fn.fadeTo
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.an = $.fn.a = function (a, b, c, d) {
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.an = $.fn.a = function (a, b, c, d) {
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	an = function (q, a) {
		alert('an')
		if (q.han) {
			_.xI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++
				if (!a.l && a.c > a.n) {
					_.xI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.bdC = function (a) {
		return this.css("border-color", oO('c', a || 'r'))
	}
	$.fn.pdB = function (a) {
		return this.css("padding-bottom", a || 0)
	}
	$.fn.mgT = function (a) {
		return this.css("margin-top", a || 0)
	}
	$.fn.pad = function (a) {
		return this.css("padding", a || 0)
	}
	$.an = function () {
		var bd = $.bd();
		return bd.j.apply(
				bd, G(arguments))
	}
	$.notAn = function (a) {
		return a.filter(':not(:animated)')
	}
	$.fn.toR = $.fn.moveRight = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) + num)
		return this
	}
	$.fn.toL = $.fn.moveLeft = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) - num)
		return this
	}
	$.fn.toU = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() - num)
		return this
	}
	$.fn.toD = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() + num)
		return this
	}
	ANob = {
		B: 'bottom', L: 'left', R: 'right', T: 'top',
		b: 'borderWidth', bb: 'borderBottomWidth',
		bl: 'borderLeftWidth', br: 'borderRightWidth',
		bt: 'borderTopWidth', bs: 'borderSpacing',
		C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
		mh: 'minHeight', mw: 'minWidth',
		i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
		m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
		mt: 'marginTop', o: ' outlineWidth',
		p: ' padding', pb: 'paddingBottom',
		pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
		ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
	}
}
function webApps(){
web()
flex()
rules()

//	$L('web', 'flex', 'rules')
	function web() {
		JQ0 = BOR = BORDERS = function () {
			function borders() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
			
			$.fn.an = $.fn.animate
			_.t(10, change)
			function change() {
				$.i('me', 100).A().C('g')
						.css(
						{
							borderStyle: 'dashed', borderWidth: '20px'
						}
				)
						.animate(
						{
							"border-top-width": 10
						}, 1000
				)
						.an({"border-bottom-width": 10}, 1000)
						.an({"border-left-width": 10}, 1000)
						.an({"border-right-width": 10}, 1000)
						.an({"padding-top": 10}, 1000)
						.an({"padding-bottom": 10}, 1000)
						.an({"padding-left": 10}, 1000)
						.an({"padding-right": 10}, 1000)
						.an({"margin-top": 10}, 1000)
						.an({"margin-bottom": 10}, 1000)
						.an({"margin-left": 10}, 1000)
						.an({"margin-right": 10}, 1000)
						.an({"margin-top": 0}, 1000)
						.an({"margin-bottom": 0}, 1000)
						.an({"margin-left": 0}, 1000)
						.an({"margin-right": 0}, 1000)
						.an({"padding-top": 0}, 1000)
						.an({"padding-bottom": 0}, 1000)
						.an({"padding-left": 0}, 1000)
						.an({"padding-right": 0}, 1000)
						.an({"border-top-width": 0}, 1000)
						.an({"border-bottom-width": 0}, 1000)
						.an({"border-left-width": 0}, 1000)
						.an({"border-right-width": 0}, 1000)
			}
			
			/*
			 $.img('me').WH(100).A().C('g').bs('-')  //bs??
			
			 .j({bt: 40}, 1000)
			
			 .j({bb: 40}, 1000)
			 .j({bl: 40}, 1000)
			 .j({br: 40}, 1000)
			 .j({gt: 40}, 1000)
			 .j({gb: 40}, 1000)
			 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
			 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
			 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
			 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
			 .j({bt: 0}, 1000)
			 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			 };
			 */
			function alt() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
		}
		JQ1 = MAG = FRIDGEMAG = function () {
			z();
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
	}
	function flex() {
		FL1 = FLEX = function () {
			$S({
				_sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
				_sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
			})
			d = $.dS({
				'display': 'flex',
				'justify-content': 'space-between'
			}).A(
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
		FL0 = GRAIL = function () {
			css = {
				bd: {f: '24px Helvetica', C: 'a', c: 'b'},
				'header, footer': {C: 'x', d: 'b', M: 4, P: 5, h_: 100, B: ['bor', 'r'], bRd: '7pt'},
				$main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
				'$main > article': {M: 4, P: 5, B: ['bor', 'p'], bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'},
				'$main > nav': {C: 'o', M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', $: '1 6 30%', $O: -1},
				'$main > aside': {M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', C: 'x', $: '1 6 20%', $O: 3},
				"@media all and (max-width:640px)": $subRules({
					"#main, #page": {$D: 'c'},
					"#main>article, #main>nav, #main>aside": {$O: 0},
					"#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
				})
			}
			$S(css)
			$.hdr(' heeeeader!!!')
			$.dI('main').A(
					$.ac('article'),
					$.nv().A('nav'),
					$.as('aside')
			)
			$.ftr('footer')
		}
		FL3 = BASIS = function () {
			str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
			' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
			$.x('o', 'basis')
			// http://jsfiddle.net/jakub_g/s5jAB/
			// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
			$S({
				_ch: {c: 'w', P: 10, M: 10},
				_ct: {
					C: 'y', P: 10,
					d: '$'
				},
				_ch1: {
					C: "u",
					$: '8 1 600px'
				},// If there's more space, the first one grows 5x faster than the second.
				_ch2: {
					C: 'g',
					d: '$', $: '1 2 400px', $W: 'w'
				}, // If there's less space, the second one shrinks 3x faster than the first.
				d: {B: ['bor', 'b']}
			})
			$.dK('ct').A(
					$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
					div = $.dK('ch ch2').A('Two')
			)
			_.t(20, function () {
				$.d($r(), 40, 40).K('ch1').a2(div)
			})
			$S()
			/*
			
			 div { border:8px solid Blue; }
			 .ct { display:flex; padding:10px; background-color:Yellow; }
			 .ch { padding:10px; margin:10px; color:White; }
			 .ch1 { flex:8 1 600px; background-color:Purple; }
			 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
			
			
			
			 */
		}
		FL4 = FLEXCT = function () {
			$S({
				'.flex-container': {
					display: 'flex', 'flex-direction': 'row',
					$W: 'w', 'justify-content': 'space-around',
					'align-content': 'flex-start', 'align-items': 'stretch'
				},
				'.flex-items-default': {
					width: '300px', height: '250px',
					'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
				},
				'.flex-item-1': {
					width: '100px',
					height: '100px',
					'flex-grow': 1,
					'flex-shrink': 0,
					'flex-basis': '98%'
				},
				'.flex-item-2': {
					width: '100px', height: '100px',
					'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
				},
				'.flex-item-3': {
					width: '100px', height: '100px',
					'flex-grow': 1, 'flex-shrink': 0,
					'flex-basis': '200px'
				},
				'.flex-item-4': {
					width: '100px', height: '100px',
					'flex-grow': 1, 'flex-shrink': 0,
					'flex-basis': '200px'
				},
				'.flex-item-5': {
					width: '100px', height: '100px',
					'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
				}
			})
			d = $.dK('flex-container').A(
					Item(1), Item(2), Item(3), Item(4), Item(5)
			)
			function Item(n) {
				return $.dK('.flex-item-' + (n || 1)).A(
						$.i('me')
				).css({margin: 20}).C('b')
			}
		}
		FL5 = GME = function () {
			$.x('y', 'gme');
			$CSS({
				'html, body': {w: '100%', h: '100%', M: 0, P: 0},
				'body.box': {d: $, flD: 'column'},
				'body > *': {P: '.5em'},
				header: {C: 'b'},
				article: {C: 'r', $: 1},
				footer: {C: 'g'},
				'header.cnt': {'-moz-column-count': 3},
				'header:not(.cnt)': {'-moz-column-width': 100}
			})
			$.hdr().A('Click', $.br(), 'to change', $.br(),
					'header {column-…}').A()
			$.ac().A('Click',
					$.br(),
					'to', $.br(), 'change', $.br(), 'body {display: …}').A()
			$.ftr().A()
			$("header").$(function () {
				$(this).toggleClass("cnt");
				logClass();
			});
			$("article").$(function () {
				$.bd().toggleClass("box");
				logClass()
			})
			logClass()
			function logClass() {
				var logTxt = "Header: "
				if ($("header").hasClass("cnt")) {
					logTxt += "column-count"
				} else {
					logTxt += "column-width"
				}
				logTxt += "; Body: ";
				if ($("body").hasClass("box")) {
					logTxt += "flex-box"
				}
				else {
					logTxt += "block"
				}
				$("footer").text(logTxt)
			}
		}
		FL6 = FB = function () {
			$.x('o', 'flex')
			$CSS({
				_ct: {
					d: '$',
					//  define  flow dir
					// and
					// if we allow the items to wrap
					//  Remember this is the same as:
					$D: 'r',
					$W: 'w',
					//      'flex-flow' : 'row wrap',
					// Then we define how is distributed the remaining space
					flJC: 'space-around'
				}
			})
			d = $.dK('flex-container').A(
					Item(1), Item(2), Item(3), Item(4), Item(5)
			)
			function Item(n) {
				return $.dK('.flex-item-' + (n || 1)).A(
						$.i('me')
				).css({margin: 20}).C('b')
			}
		}
	}
	function rules() {
		RU1 = BORDR = function () {
			$.x('x', 'bordered')
			$CSS(
					{
						_bordered: {
							'border-top': 'dotted 1px black',
							'border-bottom': 'solid 2px black'
						},
						//And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
						'#menu a': {
							ex: '_bordered',
							c: 'r'
						},
						'.post a': {
							c: 'r',
							ex: '_bordered'
						}
					}
			)
			// $CSS()
		}
		RU2 = SIZE = function () {
			$.x('x', 'size')
			$CSS(
					{
						d: {
							C: 'z', c: 'w',
							mx: {
								size: [1250]
							}
						}
					}
			)
			$.d(['hello'])
			$CSS()
		}
		RU3 = EXT = function () {
			$.x('x', 'ext')
			$CSS(
					{
						d: {
							ex: 'icon',
							C: 'y', c: 'o', mx: {size: [250]}
						}
					}
			)
			$.d(['hello'])
			$CSS()
		}
	}
}
function canvas() {
	_superCanvasTransform = function (el) {
		//give scale cos(rads), skew:sin(rads)  ??
		el.norm = function () {
			el.context.scale(this.W() / 10, this.H() / 10)
			return this
		}
		el.scale = el.sc = function (X, Y) {
			var g = G(arguments),
					X = g[0] || 1, Y = g[1] || X
			x.x.scale(X, Y)
		}
		el.translate = el.tr = function (X, Y) {
			var g = G(arguments),
					X = g[0] || 1, Y = g[1] || X
			x.x.translate(X, Y)
		}
		el.rotate = el.rt = function (r) {
			var g = G(arguments),
					r = g[0] || 1
			//r=pi(-6)*r
			//x.fr(0,0,1,1)
			//x({f:$r('c')
			x.x.rotate(r)
		}
		el.transform = el.tf = function rc(a, c, e, b, d, f) {
			var g = G(arguments)
			if (g.p) {
				return rc(2, 0, 0, 2, 0, 0)
			}
			return x('t', a, c, e, b, d, f)
		}
		el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
			var g = G(arguments)
			if (g.p) {
				return rc(2, 0, 0, 2, 0, 0)
			}
			return x('st', a, c, e, b, d, f)
		}
		return el
	}
	$.c = $.can = function (c, width, h, x, y) {
		var g = G(arguments), o, el
		o = g.S_ ?
		{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
		{w: g.f, h: g.s, x: g.t, y: g[3]}
		o.w = o.w || 1200
		o.h = o.h || 600
		o.c = o.c || 'x'
		el = $('<canvas>')
		el.attr({width: o.w, height: o.h})
		el.C(o.c)
		if (N(o.x)) {
			el.abs(o.x, o.y)
		}
		if (g.p) {
			el.drag()
		}
		el.A().al(.8)
		el = superCanvas(el)
		return el
	}
	function superCanvas(el) {
		el = $(el)
		//to be called internally by $.c //works on FIRST canvas in jquery obj
		el.canvas = el[0]
		el.context = el.canvas.getContext('2d')
		if (O(window['cjs'])) {
			el.stage = new cjs.Stage(el.canvas) ///////////////////////////////
		}
		_superCanvas(el)
		return el
	}
	
	function _superCanvas(el) {
		var cv = el
		el.cx = function () {
			return this[0].getContext('2d')
		}
		el.W = function (width) {
			var args = G(arguments)
			width = args[0]
			if (U(width)) {
				return this.attr('width')
			}
			if (args.N) {
				var dataUrl = this.toDataURL()
			}
			this.attr('width', width)
			if (args.N) {
				this.fit(dataUrl)
			}
			return this
		}
		el.H = function (height) {
			var args = G(arguments)
			height = args[0]
			if (U(height)) {
				return this.attr('height')
			}
			if (args.N) {
				var dataUrl = this.toDataURL()
			}
			this.attr('height', height)
			if (args.N) {
				this.fit(dataUrl)
			}
			return this
		}
		el.WH = function (w, h) {
			if (U(w)) {
				var width = this.W(),
						height = this.H()
				return {
					width: width, w: width,
					height: height, h: height
				}
			}
			h = h || w
			return this.W(w).H(h)
		}
		el.Z = function (d) {
			d = d || 5;
			return this.WH(d * 100, d * 100)
		}
		el.osL = el.offsetLeft = el.l = function (theOffset) {
			if (!theOffset) {
				return offsetLeft(x.q)
			}
			return parseInt(theOffset - x.offsetLeft())
		};
		//  el.ox=function(){return x.q.q.offset().left}
		el.osT = el.offsetTop = el.t = function (y) {
			if (!y) {
				return offsetTop(y.q)
			}
			;
			return parseInt(y - x.offsetTop())
		};
		//  el.oy=function(){return x.q.q.offset().top}
		el.cp = el.copy = function () {
			el.img.src(el.toDataURL())
			return el
		}
		el.ps = el.paste = function () {
			var g = G(arguments)
			if (g.N) {
				el.clearRect()
			}
			if (g.p) {
				el.fit(el.img)
			}
			else {
				el.draw(el.img.src())
			}
		}
		el.S = el.save = function () {
			el.context.save()
			return el
		}
		el.R = el.restore = function () {
			el.context.restore()
			return el
		}
		//dont mix up with element/jquery alpha
		//maybe opacity for element and alpha for canvas?
		el.al = el.globalAlpha = el.alpha = el.op = function (alpha) {
			if (U(alpha)) {
				return this.context.globalAlpha
			}
			this.context.globalAlpha = alpha
			return this
		}
		el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
			if (U(compOp)) {
				return this.context.globalCompositeOperation
			}
			this.context.globalCompositeOperation = oO('g', compOp)
			return this
		}
		//normal prop (as methods)
		el.lW = el.lineWidth = function (w) {
			if (U(w)) {
				return el.context.lineWidth
			}
			el.context.lineWidth = w
			return el
		}
		el.lC = el.lineCap = function (w) {
			if (U(w)) {
				return el.context.lineCap
			}
			el.context.lineCap = w
			return el
		}
		el.lJ = el.lineJoin = function (w) {
			if (U(w)) {
				return el.context.lineJoin
			}
			el.context.lineJoin = w
			return el
		}
		el.URL = el.dataURL = el.toDataURL = function () {
			return el.canvas.toDataURL()
		}
		//wap specific
		el.snap = function (func) {
			pams = {
				d: el.toDataURL(),
				dats: el.dats
			}
			$.post('/img', pams, func)
		}
		//el.img = $.img()
		//el.img.src(el.toDataURL())
		el.dots = function () {
			el.copy()
			el.DOTS = []
			el.dats = []
			el.$(function (x, y) {
				x = parseInt(x)
				y = parseInt(y)
				el.cir(x, y)
				el.DOTS.push([x, y])
				el.dats.push(x)
				el.dats.push(y)
				el.line(el.DOTS)
			})
			el.$$(function (X, Y) {
				var du
				//el.C('X')
				el.off('click')
				el.closePath()  //el.paste() // el.copy()  //el.save()
				el.clear() //du = el.toDataURL()
				el.clip()
				el.paste() //el.fit(du)
			})
			return el
		}
		el.me = function me(n) {//randomly draw my face
			var g = G(arguments), n = g[0] || 200
			if (x.me.d) {
				clearInterval(x.me.d);
				x.me.d = false
			}
			else {
				x.me.d = I(function () {
					x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
				}, n)
			}
			return x
		}
		el.me.shouldDrawMeId = false
		el.mugX = function (m) {
			qP('/mug', {u: m}, function (m) {
				x.fit(m)
			})
			return x
		}
		el.tick = function () {
			var ctx = this.ctx()
			ctx.tick.apply(ctx, arguments)
			return this
		}
		el.URL = el.dataURL = el.toDataURL = function () {
			return el.canvas.toDataURL()
		}
		//this just a simple proxy to drawImage // dont use?
		el.drawImage = el.dI = function () {
			var el = this, g = G(arguments)
			g[1] = N(g[1]) ? g[1] : 0
			g[2] = N(g[2]) ? g[2] : 0
			$(el)[0].getContext('2d').drawImage.apply(
					$(el)[0].getContext('2d'), g
			)
		}
		//this will create the image (from string), and then draw it
		el.dr = el.draw = function () {
			$l('el.dr')
			var el = this, g = G(arguments)
			$.i(g.f, function (i) {
				g[0] = i
				__g = g
				el.dI.apply(el, g)
			})
		}
		el.fit = function f(i, x, y) {
			var el = this//$l('fit: - el.W():' + el.W())
			i = i || 'me'
			x = x || 0
			y = y || 0
			el.draw(i, x, y, el.W(), el.H())
			//el.draw(img, X, Y, el.width(), el.height())
			return el
		}
		el.dC = function f(i, x, y) {
			var that = this
			i = i || 'me'
			x = x || 100
			y = y || 100
			if (U(x)) {//draw img in center of can
				$.img(i, function (i) {
					that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
				})
			}
			else {//draw it by specifying location of its center
				y = y || x
				$.img(i, function (i) {
					that.draw(i, x - i.W() / 2, y - i.H() / 2)
				})
			}
			return this
		}
		//draw it where u say, but as if its reg point was its center
		el.drawRegCenter = el.dC2 = function f(i, x, y) {
			var that = this
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
			return this
		}
		el.Cd = function (a, x, y) {
			var that = this
			a = a || 'me'
			x = x || 100
			y = y || 100
			$.img(a,
					function (img) {
						that.drawImage(
								img.src,
								x - img.W() / 2,
								y - img.H() / 2
						)
					})
		}
		el.crop = function rc(x1, y1, x2, y2) {
			var el = this
			if (A(x1)) {
				return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
			}
			el.draw(
					el[0].toDataURL(),
					x1, y1, x2, y2,
					0, 0, this.W(), this.H()
			)
			return this
		}
		el.crop = function rc(x1, y1, x2, y2) {
			if (A(x1)) {
				return rc(
						x1[0], x1[1],
						x1[2] - x1[0],
						x1[3] - x1[1]
				)
			}
			this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
			return this
		}
		el.scaleImCen = function (img, s) {
			var w = this.W(), h = this.H(), s = s || 1
			this.draw(img,
					w * s / -2 + w / 2,
					h * s / -2 + h / 2//+ w/2
					,
					w * s,
					h * s)
		}
		el.scaleImCenSpiralMe = function () {
			var scaleNum = 1,
					that = this
			_.times(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		el.scaleImCenSpiral = function () {
			var scaleNum = 1,
					that = this
			_.times(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		_superCanvasGradient(el)
		_superCanvasEvents(el)
		_superCanvasShadow(el)
		_superCanvasPixel(el)
		_superCanvasText(el)
		_superCanvasTransform(el)
		//_superCanvasMug(el)
		_superCanvasPath(el)
		cv.sun = function (a, b, s) {
			s = s || 1;
			this.rG(
					[[a || 0, b || a || 0], s * 100, s * 500],
					{'y': 0, 1: tCl('p', 0)},
					600,
					600
			)
		}
		cv.ball = function (b) {
			b = b || {}
			var dir = b.d || false,
					px = b.x || 100, py = b.y || 100, rad = b.r || 100,
					per = b.p || Math.PI * 2,
					ss = $r('c', b.s),
					fs = $r('c', b.f),
					lw = D(b.l) ? b.l : 4
			return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
		}
		cv.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.ctx().strokeStyle = 'Red'
			this.ctx().beginPath();
			this.ctx().moveTo(x, y);
			this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
		return el
		function _superCanvasEvents(el) {
			el.$ = function (func) {
				el.click(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.$$ = function (func) {
				el.dblclick(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.over = el.MV = function (func) {
				el.mouseover(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.out = el.MO = function (func) {
				el.mouseout(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.enter = el.ME = function (func) {
				el.mouseenter(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.leave = el.ML = function (func) {
				el.mouseleave(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.up = el.MU = function (func) {
				el.mouseup(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.move = el.MM = function (func) {
				el.mousemove(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
			el.down = el.MD = function (func) {
				el.mousedown(function (e) {
					func(e.pageX - $(this).offset().left,
							e.pageY - $(this).offset().top)
				})
			}
		}
		
		function _superCanvasShadow(el) {
			el.shC = el.shdC = el.shadowColor = function (color) {
				if (U(color)) {
					return this.context.shadowColor
				}
				this.context.shadowColor = oO('c', color)
				return this
			}
			el.shB = el.shdB = el.shadowBlur = function (blurNumber) {
				if (U(blurNumber)) {
					return this.context.shadowBlur
				}
				this.context.shadowBlur = blurNumber
				return this
			}
			el.shX = el.shdX = el.shadowOffsetX = function (offsetX) {
				if (U(offsetX)) {
					return this.context.shadowOffsetX
				}
				this.context.shadowOffsetX = offsetX
				return this
			}
			el.shY = el.shdY = el.shadowOffsetY = function (offsetY) {
				if (U(offsetY)) {
					return this.context.shadowOffsetY
				}
				this.context.shadowOffsetY = offsetY
				return this
			}
			el.shd = el.shadow = function (color, x, y, num) {
				el.shadowColor(color)
				el.shadowOffsetX(x).shadowOffsetY(y)
				el.shadowBlur(num)
				return el
			}
		}
	}
	
	_superCanvasPath = function (el) {
		el.f = el.fS = el.fs = el.fill = function (c) {
			if (U(c)) {
				el.context.fill()
			}
			else {
				el.context.fillStyle = oO('c', c)
			}
			return el
		}
		el.s = el.stroke = el.sS = function (c) {
			var el = this
			if (U(c)) {
				el.context.stroke()
			}
			else {
				el.context.strokeStyle = oO('c', c)
			}
			return el
		}//ss
		el.fsl = function (fS, sS, l) {
			this.context.f(fS)
			if (sS) {
				this.context.s(sS)
			}
			if (N(l)) {
				this.context.l(l)
			}
			return this
		}
		el.cP = el.closePath = function () {
			el.context.closePath()
			return el
		}
		el.bP = el.beginPath = el.begin = function (x, y) {
			el.context.beginPath()
			if (N(x)) {
				el.moveTo(x, y)
			}
			if (A(x)) {
				el.moveTo(x[0], x[1])
			}
			return el
		}
		el.mT = el.moveTo = function (x, y) {
			el.context.moveTo(x, y)
			return el
		}
		el.lT = el.lineTo = function (x, y) {
			if (A(x)) {
				_.e(arguments,
						function (x) {
							el.lineTo(x[0], x[1])
						})
			}
			el.context.lineTo(x, y)
			return el
		}
		el.cl = el.clip = function () {
			el.context.clip()
			return el
		}
		el.fR = el.fillRect = el.fr = function (a, b, c, d) {
			a = a || 0
			b = b || 0
			c = c || el.W()
			d = d || el.H()
			el.context.fillRect(a, b, c, d)
			return this
		}
		el.fillRect = el.fr = function (a, b, c, d) {
			a = a || 0
			b = b || 0
			c = c || this.W()
			d = d || this.H()
			this.context.fillRect(a, b, c, d)
			return this
		}
		el.colorFillRect = el.cfr = function (a) {
			var args = G(arguments)
			this.save()
			this.fillStyle = a
			this.fillRect(0, 0, this.W(), this.H())
			this.restore()
			return this
		}
		el.roundRect = function (X, y, width, height, radius) {
			el = this.context
			el.beginPath()
			el.moveTo(X + radius, y);
			el.lineTo(X + width - radius, y);
			el.quadraticCurveTo(X + width, y, X + width, y + radius);
			el.lineTo(X + width, y + height - radius);
			el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
			el.lineTo(X + radius, y + height);
			el.quadraticCurveTo(X, y + height, X, y + height - radius);
			el.lineTo(X, y + radius);
			el.quadraticCurveTo(X, y, X + radius, y);
			el.closePath();
			el.fill()
			return el
		}
		el.roundRect.test = function () {
			el.roundRect(100, 100, 200, 400, 20)
		}
		//clear screen [+ fill with color || run fx]
		el.clr = el.clear = el.clearRect = function (a, b, c, d) {
			if (S(a)) {
				el.fillStyle(a);
				return el.fillRect()
			}
			a = a || 0
			b = b || 0
			c = c || el.W()
			d = d || el.H()
			el.context.clearRect(a, b, c, d)
			// if(F(a)){a()}
			return el
		}
		el.hL = el.horizontalLine = el.lnh = function (X, Y, l) {
			var g = G(arguments), X = g[0], Y = g[1], l = g[2],
					X2 = g.p ? X + l : g.n ? X - l : l
			return x.ln(X, Y, X2, Y)
		}
		el.vL = el.verticalLine = el.lnv = function (X, Y, len) {
			var g = G(arguments),
					X = g[0],
					Y = g[1],
					len = g[2],
					Y2 = g.p ? Y + len
							: g.n ? Y - len
							: len
			return x.ln(X, Y, X, Y2)
		}
		curves(el);
		drawLine(el);
		return el
	}
	_superCanvasGradient = function (el) {
		el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
			a = a || 0
			b = b || 0
			c = c || this.W()
			d = d || this.H()
			return SuperGradient(this.context.createLinearGradient(a, b, c, d))
		}
		el.linGradBlackToWhite = function () {
			grd = this.linearGradient(0, 0, this.W(), 0)
			grd.stop(0, "black").stop(1, "white")
			this.fillStyle(grd)
			this.fillRect()
		}
		el.linGradDiagnal = function (grd) {
			grd = grd || this.lG()
			grd.stop(0, 'r')
			grd.stop(.1, 'r')
			grd.stop(.15, 'b')
			grd.stop(.2, 'r')
			grd.stop(.5, 'y')
			grd.stop(1, 'b')
			this.fillStyle(grd)
			this.fillRect()
			return this
		}
		el.radialGradient = el.rG = el.createRadialGradient = function rg() {
			var g = G(arguments)
			g[0] = g[0] || 200
			g[1] = g[1] || 200
			g[2] = g[2] || 100
			g[3] = g[3] || 250
			g[4] = g[4] || 250
			g[5] = g[5] || 800
			return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
		}
		el.radGradSample = function () {
			var grd = this.rG()
			addColorStop(grd, 0, 'r')
			addColorStop(grd, .15, 'b')
			addColorStop(grd, .2, 'r')
			addColorStop(grd, .5, 'y')
			addColorStop(grd, 1, 'b')
			this.fillStyle(grd)
			this.fillRect()
			return this
		}
		el.growingSun = function () {
			var that = this
			var a = 0,
					b = 1000,
					grd
			var func = function () {
				a += 1
				b -= 2
				grd = that.rG(200, 200, a, 290, 270, b)
				grd.addColorStop(.1, 'Yellow')
				grd.addColorStop(.3, 'Red')
				grd.addColorStop(1, 'Violet')
				//  grad = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
				that.fillStyle(grd)
				that.fillRect()
			}
			setInterval(func, 100)
		}
		el.pattern = el.createPattern = function (im, pat) {
			//im = im || $.img('me')[0]
			var pattern = this.context.createPattern(im, pat || 'repeat')
			return pattern
		}
		el.testPattern = function () {
			var that = this
			$.img('me', function (img) {
				var pattern = that.pattern(img[0], 'repeat')
				that.fillStyle(pattern).fillRect()
			})
		}
	}
	addColorStop = function rc(grad, stop, color) {
		
		// pass only a grad -> function with grad curried
		// add a color stop to a grad
		if (U(stop)) {
			return _.partial(rc, grad)
		}
		grad.addColorStop(stop, oO('c', color))
		return grad
	}
	$superGrad = function (grad) {
		grad.stop = function (stop, color) {
			addColorStop(grad, stop, color);
			return grad
		}
		grad.stops = function (stopObject) {
			_.e(stopObject,
					function (v, k) {
						var o = S(v) ? {k: k, v: v} : {k: v, v: k}
						addColorStop(grad, o.k, $r('c', o.v))
					})
		}
		return grad
	}
	gr = xGr = CanvasGradient.prototype
	gr._aCS = function () {
		this.addColorStop.apply(this, arguments)
		return this
	}
	gr.add1CS = function (num, col) {
		var gr = this, g = G(arguments)
		gr._aCS(num, oO('c', col))
	}
	gr.addCSOb = function (stopsOb) {
		var gr = this, g = G(arguments)
		_.e(stopsOb, function (num, col) {
			gr.add1CS(num, col)
		})
		return gr
	}
	gr.cS = gr.stop = gr.s = gr.c = function () {
		var gr = this, g = G(arguments)
		if (A(g.f)) {
			_.e(g, function (arg) {
				gr.stop(arg[0], arg[1])
			})
			return gr
		}
		return g.O ? gr.addCSOb(g.f)
				: gr.add1CS(g.f, g.s)
	}
	curves = function (el) {
		el.arc = function (a, b, c, d, e, f, g) {
			el.context.arc(a, b, c, d, e, f, g)
			return el
		}
		el.arcTo = el.a2 = function a2(X) {
			var g = G(arguments)
			if (A(X)) {
				return _a(a2(x), X)
			}
			this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
			this.stroke()
			return this
		}
		el.bezierCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return this
		}
		el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return el
		}
		el.curveTo = function (a, b, c, d, e, f, g) {
			if (N(e)) {
				return this.bezierCurveTo(a, b, c, d, e, f)
			}
			else return this.quadraticCurveTo(a, b, c, d, e, f, g)
		}
		el.cir = function (X, Y, R, fs, ss) {
			var g = G(arguments),
					X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
					fs = g[3],
					ss = g[4]
			el.bP()
			el.arc(X, Y, r, 0, 7, false)
			el.fS(fs)
			el.sS(ss)
			el.s().f()
			return el
		}
	}
	drawLine = function (el) {
		//draw line ( [x,y],[x,y] || x,y,x,y )
		//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
		//fresh start
		el.ln = el.line = function rc(p) {
			var args = G(arguments), p = args[0]
			if (N(args[0])) {
				el.begin(args[0], args[1])
				el.lineTo(args[2], args[3])
				el.stroke()
				return el
			}
			if (A(args[0]) && N(args[0][0])) {
				el.begin(args.f)
				_.e(args.r, function (p) {
					el.lineTo(p[0], p[1])
				})
				el.stroke()
				return el
			}
			if (AA(p)) {
				_.e(args,
						function (p) {
							el.line.apply(null, p)
						})
			}
			el.stroke()
			return el
		}
		el.fitEx = function () {
			this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
		}
		el.sun = function (a, b, s) {
			s = s || 1;
			this.rG([[a || 0, b || a || 0],
						s * 100, s * 500],
					{'y': 0, 1: tCl('p', 0)},
					600, 600)
		}
		el.ball = function (b) {
			b = b || {}
			var dir = b.d || false,
					px = b.x || 100, py = b.y || 100, rad = b.r || 100,
					per = b.p || Math.PI * 2,
					ss = $r('c', b.s),
					fs = $r('c', b.f),
					lw = D(b.l) ? b.l : 4
			return x.com(
					'b', ['a', px, py, rad, 0, per, dir],
					{f: fs, s: ss, w: lw}, 'f', 's')
		}
		el.pointInPath = el.pip = function (c, a, b) {
			return this.context.isPointInPath(a, b)
		}
		el.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.beginPath();
			this.moveTo(x, y);
			this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
	}
	superCan()
	function superCan() {
		function paralax() {
			function DivLayer(bg) {
				var div = $.d('y', 500, 500).P('a').width('100%').H(256)
				if (bg) {
					div.css('backgroundImage', bg)
				}
				return div
			}
			
			function transparent(i, num) {
				if (!N(num)) {
					return 'transparent url(' + i + '.png)'
				}
				return 'transparent url(' + i + '.png)' + num + '% 0px'
			}
			
			function CanvasLayer(bg) {
				var can = $.c('y', 500, 500).A()
						.P('a').width('100%').H(256)
				if (bg) {
					can.bg(bg)
				}
				return can
			}
			
			function int() {
				xp += speed
				back.bgP(xp + 'px 0px')
				front.bgP((xp * 3) + 'px 0px')
			}
			
			function mOut(e) {
				speed = 0
			}
			
			function mMove(e) {
				speed = e.pageX - ( W() / 2 )
				speed /= ( W() / 2 )
				$l(speed)
			}
			
			LAX = PARALLAX = function () {
				CanvasLayer(transparent('me', 10)).A()
				CanvasLayer(transparent('guy', 300)).A()
			}
			PBM = PARALLAXBYMOUSE = function () {
				//awesome!!!!!
				back = DivLayer(transparent('me'))
				front = DivLayer(transparent('guy'))
				speed = 0
				xp = 0
				$('body').mousemove(mMove)
				$('body').mouseout(mOut)
				setInterval(int, 30)
			}
		}
		
		__C = function () {
			z();
			c = $.c('y').drag()
			x = c.ctx()
			return c
		}
		$.fn.drag = $.fn.drag || function () {
			return this
		}
		$.tEl = function (a, b, c) {
			if (O(a)) {
				a = O(a.e) ? a.e : O(a.c) ? a.c : a
				a = $(a)[0]
				if (_.isElement(a)) {
					return a
				}
			}
		}
		$.tC = $.tCan = function (a) {
			if (_.isObject(a = $.tEl(a) || a)) {
				return a.canvas ? a.canvas :
						s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
			}
		}
		$.iC = $.isCan = function (can) {
			if (O(can)) {
				return $(can)[0].constructor.name == "HTMLCanvasElement"
			}
		}
		$.fit = function (a, b, c) {
			return $.c(c || 'r', b || 700, b || 700).A()
					.fit(a || 'me')
		}
		$.fn.Cv = $.fn.Can = function () {
			var c
			c = $.c.apply($, G(arguments))
			this.A(c)
			return c
		}
	}
}
function canApps(){
	CV0 = TXCAN = function () {
		z();
		c = $.c('o', 500, 500);
		//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
		// c.roundRect(100,50,100,100,50).stroke()//.fill()
		//c.line(10,10,50,500).stroke()
		c.line([
			[[100, 100], [200, 200], [140, 900]]
			// ,  [[150,150],[250,250], [20,300]]
		]).stroke();
		//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
		//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
	}
	CV1 = FLOATCV = function () {
		__C()
		x.b('r', 'b', 50)
		x.mt(100, 100, 300, 300).f().s()
		x.b('b', 'r', 50).a(100, 75, 50).f().s()
	}
	CV2 = PIX = function () {
		canvas = c = $.c('b', 900, 500)
		canvas.draw('sun', 100, 100)
		_.in(4, function () {
			pixels = canvas.gD(100, 100, 500, 500)
			canvas.pD(pixels, 100, 110)
			canvas.f("r").fr(10, 10, 50, 50)
			imgData = c.gD(10, 10, 50, 50)
			c.pD(imgData, 10, 70)
		})
	}
	CV3 = SHAD = function () {
		c = $.c('b', 700)
		c.draw('me', 100, 100)
		c.shadowColor('y')
				.shadowBlur(100)
				.shadowOffsetX(300)
				.shadowOffsetY(100)
		c.draw('me', 200, 200)
		c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
		c.shadowColor('g')
		c.draw('me', 0, 300)
		c.shadow('p', 30, 200, 20)
		c.draw('guy', 400, 200)
	}
	CV4 = CANFIT = function () {
		c = __C();
		c.fit('me')
		m = $.c(800).fit('me')
		g = $.c('b', 600).fit('guy')
	}
	CV5 = CANBOR = function () {
		$CSS({
			canvas: {
				B: '33px dashed red'
			}
		})
		__C()
		x.jD('me')
	}
	CV6 = FANN = function () {
		$l('fan')
		x = $.c('y', 1000, 800).A()
		y = $.c('x', 400).A()
		x.$$(function () {
			x.fit('me')
		})
		x.fit('me')
		guidewires = false
		dragging = false
		mousedown = {}
		loc = {}
		restoreDrawingSurface = function () {
		}
		updateRubberband = function (m) {
			x.ln(
					mousedown.x,
					mousedown.y,
					m.x,
					m.y
			)
		}
		drawGuidewires = function () {
		}
		x.MD(
				function (X, Y) {
					dragging = true
					mousedown = {x: X, y: Y}
				}
		)
		x.MM(
				function (X, Y) {
					if (dragging) {
						restoreDrawingSurface()
						updateRubberband({x: X, y: Y})
					}
					if (guidewires) {
						drawGuidewires(loc.x, loc.y)
					}
				}
		)
		x.MU(
				function (X, Y) {
					dragging = false
					restoreDrawingSurface()
					updateRubberband({x: X, y: Y})
				}
		)
	}
	CV7 = CAN3 = THREECANS = function () {
		c1 = $.can('a', 800, 400)
		c2 = $.can('b', 800, 400)
		c3 = $.can('X', 800, 400)
	}
	CV8 = RUB1 = function () {
		loc = {}
		rr = null
		guidewires = false
		dragging = false
		mousedown = {}
		data = null
		c = can = $.c('y', 1000, 800).fit('me')
		c.$$(function () {
			c.fit('me')
		})
		c.MD(
				function (x, y) {
					data = can.gD()
					dragging = true
					mousedown = {x: x, y: y}
				}
		)
		c.MM(
				function (X, Y) {
					var m = {x: X, y: Y},
							d = mousedown
					if (dragging) {
						can.pD(data)
						can.ln(d.x, d.y, d.x, m.y)
						can.ln(d.x, d.y, m.x, d.y)
						can.ln(m.x, m.y, m.x, d.y)
						can.ln(m.x, m.y, d.x, m.y)
					}
				}
		)
		c.MU(
				function (X, Y) {
					dragging = false
					var d = mousedown, x1, x2, y1, y2
					if (X > d.x) {
						x1 = d.x;
						x2 = X
					} else {
						x1 = X;
						x2 = d.x
					}
					if (Y > d.y) {
						y1 = d.y;
						y2 = Y
					} else {
						y1 = Y;
						y2 = d.y
					}
					rr = [x1, y1, x2, y2]
					can.pD(data)
					can.crop(rr)
					// data = can.gD()
				}
		)
	}
	CV9 = RUB = function () {
		z()
		can = $.c('y', 1000, 800).A()
		can.$$(function () {
			can.fit('me')
		})
		can.fit('me')
		guidewires = false
		dragging = false
		mousedown = {}
		loc = {}
		rr = null
		data = null
		can.MD(function (x, y) {
			data = can.gD()
			dragging = true
			mousedown = {x: x, y: y}
		})
		can.MM(function (X, Y) {
			var m = {x: X, y: Y}, d = mousedown
			if (dragging) {
				can.pD(data)
				can.ln(d.x, d.y, d.x, m.y)
				can.ln(d.x, d.y, m.x, d.y)
				can.ln(m.x, m.y, m.x, d.y)
				can.ln(m.x, m.y, d.x, m.y)
			}
		})
		can.MU(function (X, Y) {
			dragging = false
			var d = mousedown, x1, x2, y1, y2
			if (X > d.x) {
				x1 = d.x;
				x2 = X
			} else {
				x1 = X;
				x2 = d.x
			}
			if (Y > d.y) {
				y1 = d.y;
				y2 = Y
			} else {
				y1 = Y;
				y2 = d.y
			}
			rr = [x1, y1, x2, y2]
			can.pD(data)
			can.crop(rr)
			//    data=can.gD()
		})
	}
	CV10 = CAN1FORMAT = function () {
		var picHolder
		$.fm()
		s2.A(picHolder = $.sp().id('pics'))
		$.getJSON('/img', function (i) {
			_.e(i, withImage)
		})
		function withImage(img) {
			dataUrl = img.d
			can = $.c(100, 100)
			can.click(
					function () {
						var mouse = $('#mouse')
						mouse.val('click')
						mouse.change()
						mug = img.d
					}
			)
			picHolder.A(can)
			can.fit(dataUrl)
		}
		
		s2.A(
				x = canvas = $.c('yellow', 1000, 800)
		)
		setInterval(
				function () {
					//  x.bc()
				}, 10000
		)
		s1(
				$.lb('mouse'),
				$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
						function (s) {
							x.q.ub()
							if (s == 'click') {
								x.$(
										function (X, Y) {
											x.Cd(mug, X, Y)
										}
								)
							}
							if (s == 'enter') {
								x.ME(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							}
							if (s == 'leave') {
								x.ML(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							}
							if (s == 'move') {
								x.MD(function () {
									x.MM(function (X, Y) {
										x.Cd(mug, X, Y)
									})
								})
								x.MU(function () {
									x.q.ub('mousemove')
								})
							}
						}
				),
				$.lb('global comp'),
				sl.apply(this, V(oO('g'))).$(function (v) {
					x.gc(v)
				}),
				//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
				$.bt(
						'SAVE(sv)', function () {
							x.sv()
						}
				), $.br(2),
				$.bt(
						'CUT(dots)', function () {
							x.q.q.unbind()
							qi('mouse').v('none')
							x.dots()
						}
				), $.br(2),
				$.bt('RESTORE(R)', function () {
					x.R()
				}), $.br(2),
				$.bt('bc:change background color', function () {
					x.bc()
				}), $.br(2),
				$.bt('cir:make circle', function () {
					x.cir(100, 100, 100)
				}), $.br(2),
				$.bt('d:draw', function () {
					x.d($w['mug'] || 'me')
				}), $.br(2),
				$.bt('dC:draw center', function () {
					x.dC($w['mug'] || 'me')
				}), $.br(2),
				$.bt('me', function () {
					x.me()
				}), $.br(2),
				$.bt('sh1', function () {
					x.ln(sh1)
				}), $.br(2),
				$.bt('sh2', function () {
					x.ln(sh2)
				}), $.br(2),
				$.bt(
						'tictactoe', function () {
							x.ln(tictactoe)
						}
				), $.br(4),
				$.bt(
						'sampLinGrad', function () {
							x.sampLinGrad()
						}
				),
				$.br(2),
				$.bt(
						'sampRadGrad', function () {
							x.sampRadGrad()
						}
				),
				$.br(2),
				$.bt(
						'xxx', function () {
							xxx('barney')
						}
				), $.br(2),
				$.bt(
						'bads', function () {
							bad(x, 200, 8)
						}
				), $.br(2),
				$.bt(
						'coins', function () {
							coin(x, 200, 8)
						}
				), $.br(2)
		)
	}
	CV11 = FULLCAN = function () {
		$('html').css(
				{
					height: '100%'//, of:'h'
				}
		)
		$('body').css(
				{
					margin: 0,
					//g:0,
					height: '100%'
				}
		)
		var s = 'Click or tap the screen to start the game',
				fo = 'bold 16px Arial',
				x = $.c('pink', $('body').W(), $('body').H()).A()
		// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
		$.i(
				'me', function (image) {
					image = $(image.target)
					var origW = image.W()
					image.W(Math.round((50 * cW()) / 100))
					image.H(Math.round((image.W() * image.H() ) / origW))
					x.draw(
							image,
							x.W() / 2 - image.W() / 2,
							x.H() / 2 - image.H() / 2
					)
				}
		)
	}
	CV12 = HULL = function () {
		z()
		c = $.c('y', 800, 400).id('canvas').A()
		window.onload = init
		function init() {
			var canvas = c[0],        // main canvas element
					fps = 10,                                        // drawing frames per second
					convex = new Convex(),                            // convex hull
					dots = []                                     // dots, which are not in the convex hull
			// adjust canvas proportions
			// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
			// assign canvas context
			ctx = canvas.getContext("2d");
			setInterval(
					function () {
						
						// get a blank canvas //// clear
						ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
						// draw convex dots
						convex.draw()
						// draw dots
						dots.map(function (dot) {
							dot.draw()
						})
					}, 1000 / fps
			)
			// clicked on canvas
			c.click(
					function (evt) {
						var x = evt.clientX - canvas.getBoundingClientRect().left,
								y = evt.clientY - canvas.getBoundingClientRect().top
						// clear convex
						convex.dots = []
						// add dot
						dots.push(new Dot(new V(x, y)))
					}
			)
			$.bt(
					'draw convex', function () {
						// move dots to canvas
						dots.map(function (dot) {
							convex.addDot(dot)
						})
						// clear dots
						dots = []
					}
			).A()
		}
		
		var Dot = function (pos) {
			this.pos = pos
		}
		Dot.prototype = {
			draw: function () {
				ctx.beginPath();
				ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
				ctx.fill();
				ctx.closePath();
			}
		}
		Convex = function () {
			this.dots = []
		} // a convex hull
		Convex.prototype = {
			draw: function () {
				var _this = this, refDots;
				// loop through dots
				this.dots.map(
						function (el) {
							var dotAfter;
							// draw dot
							el.draw();
							refDots = _this.copyDots(_this.dots); // copy dots
							// remove el from reference dots
							for (var i = 0; i < refDots.length; i++) {
								if (refDots[i] != el) continue;
								refDots.splice(i, 1);
							}
							// get dot after this dot
							dotAfter = _this.getDotAfter(_this.dots, el);
							// draw direct line
							ctx.moveTo(el.pos.x, el.pos.y);
							ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
							ctx.stroke();
						}
				)
			},
			addDot: function (dot) {
				// the dot cannot be added, because it wouldn't be a convex anymore
				if (this.isDotInsideConvex(this.dots, dot)) return;
				// add dot intentionally
				this.dots.push(dot);
				// less than four dots are always a convex
				if (this.dots.length < 4) return;
				// remove dots, which are not in the convex (anymore)
				this.composeConvexHull();
			},
			composeConvexHull: function () {
				var refDots,        // all dots, except the one we are testing
						dot,            // the dot, supposed to be in the new convex
						newDots = [];    // dots, which are definitely part of the convex
				// loop dots
				for (var i = 0; i < this.dots.length; i++) {
					
					// reset dots reference
					refDots = this.copyDots(this.dots);
					// assig dot to the current index
					dot = refDots[i];
					// remove dot from refDots
					for (var h = 0; h < refDots.length; h++) {
						if (h != i) continue;
						refDots.splice(h, 1);
						break;
					}
					// the dot is not inside of the convex, therefore add it
					if (!this.isDotInsideConvex(refDots, dot)) {
						newDots.push(dot);
					}
				}
				// assign new convex
				this.dots = newDots;
			},
			//  copy dots object,, this is done due to call by reference
			copyDots: function (ref) {
				var dots = [];
				ref.map(
						function (dot) {
							dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
						}
				);
				return dots;
			},
			isDotInsideConvex: function (convexDots, dot) {
				var dotBefore, dotAfter, sign;
				// at least three dots required for a convex
				if (convexDots.length < 3) return false;
				// the dot is definitely not inside the convex hull
				if (this.dotOutsideConvexRect(convexDots, dot)) return false;
				// assign dot before to the closest dot by the angle, which is negative
				dotBefore = this.getDotBefore(convexDots, dot);
				// assign dot after to the closest dot by the angle, which is positive
				dotAfter = this.getDotAfter(convexDots, dot);
				// dot on the inside of the line from dotBefore to dotAfter
				return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
			},
			//  is the dot outside of the convex rectangle?
			dotOutsideConvexRect: function (convexDots, dot) {
				var outside = [true, true, true, true];
				for (var i = 0; i < convexDots.length; i++) {
					if (convexDots[i].pos.x < dot.pos.x)
						outside[0] = false;
					if (convexDots[i].pos.x > dot.pos.x)
						outside[1] = false;
					if (convexDots[i].pos.y < dot.pos.y)
						outside[2] = false;
					if (convexDots[i].pos.y > dot.pos.y)
						outside[3] = false;
				}
				return outside[0] || outside[1] || outside[2] || outside[3];
			},
			//  get middle position as vector from the bounding dots
			getCenter: function (dots) {
				var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
				dots.map(
						function (dot) {
							if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
							if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
							if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
							if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
						}
				);
				return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
			},
			//   get the closest dot before dot from dots
			getDotBefore: function (dots, dot) {
				var center, bgRad = -Math.PI * 2, dotBefore;
				center = this.getCenter(dots);
				dotRad = center.angleTo(dot.pos);
				dots.map(
						function (needleDot) {
							var needleRad = center.angleTo(needleDot.pos),
									refRad = needleRad - dotRad;
							if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
							if (refRad <= bgRad) return;
							bgRad = refRad;
							dotBefore = needleDot;
						}
				);
				return dotBefore;
			},
			//  get the closest dot after dot from dots
			getDotAfter: function (dots, dot) {
				var center, smRad = Math.PI * 2, dotAfter
				center = this.getCenter(dots)
				dotRad = center.angleTo(dot.pos)
				dots.map(
						function (needleDot) {
							var needleRad = center.angleTo(needleDot.pos),
									refRad = needleRad - dotRad;
							if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
							if (refRad >= smRad) return
							smRad = refRad
							dotAfter = needleDot
						}
				)
				return dotAfter
			}
		}
		var V = function (x, y) {
			this.x = x
			this.y = y
		}
		V.prototype = {
			subtract: function (v) {
				return new V(this.x - v.x, this.y - v.y);
			},
			// this = center, v = destination
			angleTo: function (v) {
				var ref = this.subtract(v)
				return Math.atan2(ref.y, ref.x) + Math.PI
			},
			// 0 = on line, 1 = inside, -1 = outside
			getSide: function (v1, v2) {
				return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
			}
		}
	}
	CV13 = XX1 = SDW = function () {
		__C()
		x.xShadow = 3
		x.yShadow = 3
		x.shadowBlur = 10
		x.shadowStyle = 'red'
		x.r(188, 40, 200, 100).f('r')
				.shC('#999').shB(20).shX(15).shY(15).f()
	}
	CV14 = CXTF = CTXTRANSFORM = function () {
		__C()
		x.fR(0, 0, 250, 100)
		x.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
		x.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
	}
//BAD CANVAS!! : -> :
	CV15 = FLEXCAN = function () {
		z()
		c1 = $.c('r', 200, 400)
		c2 = $.c('b', 50, 50)
		c4 = $.c('y', 100, 10)
		d = $.d().C('o')
		d.A(c1, c2, c4)
		d.css({
			'display': 'flex',
			'justify-items': 'center'
		})
		$('canvas').attr({
			width: 'auto', height: 'auto'
		}).css({
			width: 'auto', height: 'auto',
			'flex-grow': 1,
			'flex-shrink': 1
		})
		$('canvas').e(function () {
			$(this).ctx().jD('me')
		})
	}
	CV16 = TXC = PAPGERBAG = function () {
		__C()
		c.dr('me')
		c.paperBag()
	}
	CV17 = FAAD = SLOWFADE = function self(opacity) {
		//makes a yellow square and black dot??
		c = $.c('y', 500, 500)
		c.cir(10, 10, 10)
		opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001
		c.al(opacity)
		c.ctx().fS('red')
		c.fillRect()
		if (opacity < 1) {
			setTimeout(
					function () {
						self(opacity)
					}, 30
			)
		}
	}
	CV18 = TXTT = function () {
		__C()
		x.b('b', 'g', 30)
		x.T(100, 'Jason Yanofski', 10, 150)
		x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
		x.T('Jason Yanofski', 10, 290, '-')
	}
	CV19 = TEXTTX = function () {
		__C()
		x.b('b', 'g', 30)
		x.T(100, 'Jason Yanofski', 10, 150)
		x.lg({
			x1: 0, y1: 0, x2: x.W(),
			y1: 0, cS: {m: 0, b: .5, r: 1}
		})
		x.T('Jason Yanofski', 10, 290, '-')
	}
	CV20 = DRAGSTG = function () {
		Q(function () {
			c = $.c('g', 600, 300)
			f = $.dragFrame(c)
			x = c.ctx()
			x.d('me', 100, 100)
			c.$(function (x1, y1) {
				x.a(x1, y1, 2).s()
			})
		})
	}
	CV21 = FLOATCVQ = function () {
		Q(function () {
			__C()
			x.b(400, 100, 'r', 'o', 30).l(600, 400)
			x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
			x.b().a(400, 75, 50, 0, 340, '-')
			x.tl(-100, 0, R(30), 2)
					.b(400, 100, 'x', 'b', 30)
					.l(600, 400)
			x.d('me')
			x.d(x, 300, 300)
			x.d(x, 300, 300)
			//x.scICen('guy', .7)
			//Uncaught TypeError: Cannot read property 'd' of undefined
		})
	}
	$.format = function () {
		section1 = s1 = $.sp()
		section2 = s2 = $.sp()
		__CT($.R($.xs(3).A(section1), $.xs(9).A(section2)))
	}
	CV22 = CANN = function () {
		var picHolder
		$.format()
		picHolder = $.sp().id('pics')
		s2.A(
				picHolder
		)
		$.getJSON('/img', function (i) {
			_.e(i, withImage)
		})
		function withImage(img) {
			dataUrl = img.d
			can = $.c(100, 100)
			can.click(function () {
				var mouse = $('#mouse')
				mouse.val('click')
				mouse.change()
				mug = img.d
			})
			picHolder.A(can)
			can.fit(dataUrl)
		}
		
		s2.A(
				c = cv = x = canvas = $.c('y', 1000, 800))
		//  _.ev(10, function(){x.bc()})
		s1.A($.lb('mouse'),
				/*
				 $.scv('none','click','enter','leave','move').id('mouse').o(
				 function(s){
				 x.q.ub()
				 if(s=='click'){
				 x.$(function(X,Y){
				 x.Cd(mug,X,Y)
				 })}
				
				
				 if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
				 if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
				 if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})
				
				 x.MU(function(){x.q.ub('mousemove')})}
				
				
				 }),
				
				
				 */
				$.label('global comp'),
				//scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
				//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
				$.bt('SAVE(sv)', function () {
					x.sv()
				}), $.br(2),
				$.bt('CUT(dots)', function () {
					x.q.q.unbind()
					qi('mouse').v('none')
					x.dots()
				}), $.br(2),
				$.bt('RESTORE(R)', function () {
					x.R()
				}), $.br(2),
				$.bt('bc:change background color', function () {
					x.bc()
				}), $.br(2),
				$.bt('cir:make circle', function () {
					x.cir(100, 100, 100)
				}), $.br(2),
				$.bt('d:draw', function () {
					c.dr(
							$w['mug'] || 'me'
					)
				}), $.br(2),
				$.bt('dC:draw center', function () {
					cv.dC(window['mug'] || 'me')
				}), $.br(2),
				$.bt('me', function () {
					x.me()
				}), $.br(2),
				$.bt('sh1', function () {
					x.ln(sh1)
				}), $.br(2),
				$.bt('sh2', function () {
					x.ln(sh2)
				}), $.br(2),
				$.bt('tictactoe',
						function () {
							x.ln(tictactoe)
						}), $.br(4),
				$.bt('sampLinGrad',
						function () {
							x.sampLinGrad()
						}), $.br(2),
				$.bt('sampRadGrad',
						function () {
							x.sampRadGrad()
						}), $.br(2),
				$.bt('ctxx',
						function () {
							xxx('barney')
						}), $.br(2),
				$.bt('bads',
						function () {
							bad(x, 200, 8)
						}), $.br(2),
				$.bt('coins',
						function () {
							coin(x, 200, 8)
						}), $.br(2)
		)
	}
	CV23 = TRANS = function () {
		z()
		x = $.c('y', 1000, 800)
		y = $.c('u', 400)
		x.$$(function () {
			x.fit('me')
		})
		x.fit('me')
		identity = function (x) {
			x.stf(1, 0, 0, 1, 0, 0)
		}
		rotate = function (x, a) {
			identity(x);
			x.rt(tRad(a))
		}
		rotateByAngle = function (px, py, a) {
			var x, y
			x = (px * cos(a)) - (py * sin(a))
			y = (py * cos(a)) + (px * sin(a))
		}
		rotateAroundZero = function (px, py, r) {
			var x, y, a = 'angle'
			x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
			y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
		}
		transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
		//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
		//x=x+e,y=y+f
		//to scale, use a,d and set others to 0
	}
	CV24 = CROPP = function () {
		__C()
		$cv = $.c('X', 1200, 600, 100, 100)
		$cv.fit()
		$cv.draw('me')
		$cv.ln(tictactoe)
		_.in(2, function () {
			$cv.crop(100, 100, 900, 500)
		})
	}
	CV25 = FULLCAN1 = function () {
		$('html').css({
			height: '100%'//, of:'h'
		})
		$('body').css({
			margin: 0,
			//g:0,
			height: '100%'
		})
		var s = 'Click or tap the screen to start the game',
				fo = 'bold 16px Arial',
				x = $.c('p',
						$('body').W(),
						$('body').H()
				).A()
		//
		// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
		$.i('me', function (image) {
			image = $(image.target)
			var origW = image.W()
			image.W(Math.round((50 * $('body').W()) / 100))
			image.H(Math.round((image.W() * image.H() ) / origW))
			x.draw(
					image,
					x.W() / 2 - image.W() / 2,
					x.H() / 2 - image.H() / 2
			)
		})
	}
	CV26 = CANCROP = function () {
		__C()
		x.d("me")
		x.cr()
	}
	CV27 = DRAWN = function () {
		__C()
		x.s('u').l(6).lC('round')
	}
	CV28 = PXC = function () {
		flatTri = [[400, 0], [800, 100], [120, 120]]
		$.cx().drawPS(flatTri, 'r', 'v')
	}
	CV29 = PXXX = function () {
		Q('me', function () {
			$.cx().d(Q.i('me')).pol(flatTri)
		})
	}
	CV30 = TRANZ = function () {
		z()
		x = $.c('yellow', 1000, 800).A()
		y = $.c('purple', 400).A()
		x.$$(function () {
			x.fit('me')
		})
		x.fit('me')
		identity = function (x) {
			x.stf(1, 0, 0, 1, 0, 0)
		}
		rotate = function (x, a) {
			identity(x)
			x.rt(tRad(a))
		}
		rotateByAngle = function (px, py, a) {
			var x, y
			x = (px * cos(a)) - (py * sin(a))
			y = (py * cos(a)) + (px * sin(a))
		}
		rotateAroundZero = function (px, py, r) {
			var x, y, a = 'angle'
			x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
			y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
		}
		transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
		//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
		//x=x+e,y=y+f
		//to scale, use a,d and set others to 0
	}
	XOR = function () {
		cv = $.c('u', 1000, 800)
		cv.draw('me', 100, 100)
		cv.draw('me', 200, 200)
		cv.draw('me', 300, 300)
		_.in(2, function () {
			cv.globalCompositionOperation('xor')
			cv.on('click', function (ev) {
				x = ev.pageX
				y = ev.pageY
				cv.draw('me', x - 120, y - 150)
			})
		})
	}
}
 function _pre() {
	 x = ctx = CanvasRenderingContext2D.prototype
	 ooOO()
	 function ooOO() {
		 oOo = function oOo(a, b) {
			 if (_.isUndefined(b)) {
				 return _I(lC(V(oO(a))))
			 }
			 if (oOo(a)[lC(b)]) {
				 return b
			 }
		 }
		 Oo = _.defaults(function o(a, b) {
			 if (D(b)) {
				 return o[a] && ( o[a][b] || oOo(a, b))
			 }
		 }, ooo)
		 oO = _.defaults(function oO(a, b, c) {
			 return _.isUndefined(a) ? _.keys(f)
					 : '*' == b ? $r(a)
					 : D(c) ? oO(oO(c, a), b)
					 : _.isUndefined(b) ? D(function (x, y) {
				 return oO(a, x, y)
			 }, oO[a] || {})
					 : (oO[a] && oO[a][b]) ?
					 oO[a][b]
					 : b
		 }, ooo)
		 oC = function (c) {
			 return oO('c', c)
		 }
		 oK = function (a) {
			 return oO('k', a)
		 }
		 oT = function (a) {
			 return oO('t', a)
		 }
		 oE = function (a) {
			 return oO('e', a)
		 }
		 oI = function (a) {
			 return oO('i', a)
		 }
		 oS = function (a) {
			 return oO('s', a)
		 } //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
		 oQ = function (f, m) {
			 $(function () {
				 Q(m || mf, f)
			 })
		 }
		 oO.V = function (a) {
			 return _.values(S(a) ? oO(a) : a)
		 }
		 oOo = function oOo(a, b) {
			 if (_.isUndefined(b)) {
				 return _I(lC(V(oO(a))))
			 }
			 if (oOo(a)[lC(b)]) {
				 return b
			 }
		 }
		 Oo = _.defaults(function o(a, b) {
			 if (D(b)) {
				 return o[a] && ( o[a][b] || oOo(a, b))
			 }
		 }, ooo)
		 oO = _.defaults(function oO(a, b, c) {
			 return _.isUndefined(a) ? _.keys(f)
					 : '*' == b ? $r(a)
					 : D(c) ? oO(oO(c, a), b)
					 : _.isUndefined(b) ? D(function (x, y) {
				 return oO(a, x, y)
			 }, oO[a] || {})
					 : (oO[a] && oO[a][b]) ?
					 oO[a][b]
					 : b
		 }, ooo)
		 $r = function (a, b) {
			 a = a || 'c'; //cannot be 'color' ?? only abr??
			 var values = _.values(oO(a))
			 return Oo(a, b) || values[_.random(_.size(values) - 1)]
		 }
	 }
 }