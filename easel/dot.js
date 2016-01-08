function dot() {
	ct.dot = function () {
		var ct = this
		var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dot')
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.dot = function (color, x, y) {
		var that = this,
				dot,
				tween
		if (b2d.isGPoly(color)) {
			_.each(color.verts(), function (v) {
				that.dot(V(v))
			})
			return this
		}
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	f.dot = function (c) {
		var f = this, w = f.B().W(), v
		v = f.cen()
		if (S(c)) {
			w.dot(c, v)
		}
		else {
			w.dot(v)
		}
		return f
	}
	b.dot = function () {
		var b = this, w = b.W(), g = G(arguments)
		g.N_ ? (
				g.p ?
						T.t(function () {
							b.dot(g.f, g.s)
						}) :
						w.d(b.wP(g.f, g.s)))
				:
				w.d(g.f || 'y', g.p ? b.wC() : b)
		return b
	}
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.div())
		//is a point within the fixture // very accurate
	}
//from create
	ct.d = ct.dot = function (c, x, y) {
		var ct = this, o, d, tw, g = G(arguments)
		if (b2d.isGPoly(g.f)) {
			_.e(g.f.vs(), function (v) {
				ct.dot(V(v))
			})
			return this
		}
		if (g.A) {
			_.e(c, function (G) {
				if (A(G)) {
					ct.dot.apply(ct, G)
				}
				else {
					ct.dot(G)
				}
			})
			return this
		}
		o = g.S_ ? (
				
				b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
						O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
						{c: g.f, x: g.s, y: g.t}
		
		) :
				b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
						g.O_ ? {x: g.f.x, y: g.f.y} :
						{x: g.f, y: g.s}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dev dot')
	}
	i.dot = function () {
		var i = this
		i.getStage().dot(i.X(), i.Y())
		return i
	}
	ct.dot = function () {
		var ct = this
		var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dot')
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
	ct.dot = function (c, x, y) {
		var that = this,
				s = this,
				dot,
				tween
		if (b2d.isGPoly(c)) {
			_.each(c.verts(), function (v) {
				s.dot(V(v))
			})
			return this
		}
		if (A(c)) {
			_.each(c,
					function (G) {
						if (A(G)) {
							s.dot.apply(s, G)
						}
						else {
							s.dot(G)
						}
					})
			return
		}
		if (!S(c)) {
			y = x;
			x = c;
			c = 'y'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : s.W() / 2
		y = N(y) ? y : s.H() / 2
		//dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)
		//dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)
		dot = s.h(x, y).circ(8, c, c).drag()
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return s
	}
	ct.dot = function () {
		var ct = this
		var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dot')
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	ct.d = ct.dot = function (c, x, y) {
		var ct = this, o, dot, tw, g = G(arguments)
		if (b2d.isGPoly(g.f)) {
			_.e(g.f.vs(),
					function (v) {
						ct.dot(V(v))
					})
			return this
		}
		if (g.A) {
			_.e(c, function (G) {
				if (A(G)) {
					ct.dot.apply(ct, G)
				}
				else {
					ct.dot(G)
				}
			})
			return this
		}
		o = g.O ? g.f : g.S_ ? {c: g.f, x: g.s, y: g.t} : {x: g.f, y: g.s}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		dot = this.h(o.x, o.y)
				.cir(8, o.c, 'p' || o.c, 2)
				.al(.7).drag()
		tw = dot.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		dot.$$(function () {
			tw.$()
		})
		return dot.K('dev dot')
	}
//w.i.dot( cx.pt().x, ct.pt().y )
//fail
//  w.i.dot('y', v)  //  w.i.dot(  v)  //  w.dot(  v)
//works:  w.dot('r', v)
	w.d = w.dot = function () {
		var w = this, g = G(arguments), o
		if (g.S_) {
			o = N(g.s) ?
			{c: g.f, x: g.s, y: g[2]} :
			{c: g.f, x: V(g.s).x, y: V(g[1]).y}
		}
		else {
			o = N(g.s) ? {x: g.f, y: g.s} : {x: V(g.f).x, y: V(g.s).y}
		}
		if (g.m) {
			w.dot(o.c, o.x, o.y, '-')
			w.dot(o.c, o.x, o.y, '/')
			w.dot(o.c, o.x, o.y, '+')
			w.dot(o.c, o.x, o.y)
		}
		else if (g.p) {
			w.fg.dot(o.c, o.x, o.y)
		}
		else if (g.n) {
			w.bg.dot(o.c, o.x, o.y)
		}
		else if (g.d) {
			w.g.dot(o.c, o.x, o.y)
		}
		else {
			w.i.dot(o)
		}
		return w
	}
	b.dot = function (x, y) {//b.dot() // dots the center of mass, not xy ??!!!
		var b = this, w = b.W(), s = b.stg(), g = G(arguments)
		if (N(x)) {
			w.dot(b.wP(x, y))
			if (g.p) {
				T.t(function () {
					w.dot(b.wP(x, y))
				})
			}
			return b
		}
		c = oO('c', g[0] || 'y')
		if (g.p) {
			w.dot(c, b.cen())
		}
		else {
			w.dot(c, b.X(), b.Y())
		}
		return b
	}
	f.dot = function (c) {
		var f = this, w = f.B().W(), v
		v = f.cen()
		if (S(c)) {
			w.dot(c, v)
		}
		else {
			w.dot(v)
		}
		return f
	}
	ct.d = function (c, x, y) {
		var ct = this, o, d, tw, g = G(arguments)
		//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
		if (g.A) {
			_.e(c, function (G) {
				if (A(G)) {
					ct.dot.apply(ct, G)
				}
				else {
					ct.dot(G)
				}
			})
			return this
		}
		o = g.S_ ? (
				b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
						O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
						{c: g.f, x: g.s, y: g.t}
		) :
				b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
						g.O_ ? {x: g.f.x, y: g.f.y} :
						{x: g.f, y: g.s}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dev dot')
	}
	ct.d = function (c, x, y) {
		var ct = this, o, d, tw, g = G(arguments)
		//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
		if (g.A) {
			_.e(c, function (G) {
				if (A(G)) {
					ct.dot.apply(ct, G)
				}
				else {
					ct.dot(G)
				}
			})
			return this
		}
		o = g.S_ ? (
				b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
						O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
						{c: g.f, x: g.s, y: g.t}
		) :
				b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
						g.O_ ? {x: g.f.x, y: g.f.y} :
						{x: g.f, y: g.s}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dev dot')
	}
	META = function () {
		W([800, 600], {w: 'L'}).C('w')._(function () {
			$.rulers()
			//initial me
			p = w.p(200, 200, 5).stat()
			//initial balls
			_.t(5, function Ball() {
				w.D(R(200, 50), R(-100), $r(), 30)
			})
			_.ev(3, MetaBall)
		})
		function MetaBall() {
			var b = w.D(400, 400, 'b', 80)
			b.$h('x', 'X', 1).c('x', 'X', 1).bf(
					w.s.cv0,
					cjs.m2d(.6, .1, .1, .6, -40, 180)
			).cir(80)
		}
	}
	b.dot = function (col) {//b.dot() // dots the center of mass, not xy ??!!!
		var b = this,
				s = b.stg(),
				g = G(arguments)
		col = oO('c', g[0] || 'y')
		if (g.p) {
			s.dot(col, b.cent())
		}
		else {
			s.dot(col, b.X(), b.Y())
		}
		return this
	}
}
w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ?
		{x: g.f, y: g.s} :
		{x: V(g.f).x, y: V(g.f).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
function errWorld() {
	BOXSPRITE = BSP = function () {
		b2.mW({debug: false})
		meBall = function () {
			spr = meSprite().rCenter().sXY(.4).rXY(230, 260)
			b = b2.ball(400, 400, 40).bindSprite2(spr, 6)
		}
		meBall()
		w.box().bindSprite('guy')
		w.begin(function (cx) {
			if (cx.with('ball', 'box')) {
				spr.p('explode')
				setTimeout(function () {
					b.kill();
					meBall()
				}, 1000)
			}
		})
	}
}
function errCir() {
	CHANGE = CHG = function () {
		w = b2d.mW()
		b = w.ball().bindSprite('guy').kin()
		w.box(400, 100, 400, 100)
	}
	BOXPACK = BXP = function () {
		w = b2d.mW({
			//debug:false
		})
		w.platform(500, 300, 200, 200)
		pack = function (anim) {
			anim = anim || 'f1'
			var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
			spr.gotoAndPlay(anim)
			return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
		}
		b = pack('f1')
		anims = _.keys(Pack.animations)
		//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
		// cjs.tick(function(){ b.rot(0) })
		change = function () {
			anim = anims[_.random(23)]
			$l('changed to ' + anim)
			b.sprite.gotoAndPlay(anim)
		}
		w.begin(function (cx) {
			if (cx.with('platform')) {
				change()
			}
		})
	}
	PACKE4 = PK4 = function () {
		w = b2d.mW({
			//debug:false,
			grav: 0
		})
		p = w.player('thrust')
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.p('e4')
		b = w.bumper(
				Math.random() * 1000,
				Math.random() * 500, 45
		).bindSprite2(spr)
		// cjs.tick(function(){ b.rot(0) })
		w.begin(function (cx) {
			if (cx.with('bumper')) {
				p.I(1000, 1000)
			}
		})
	}
}
function dud() {
	EASELBO = EBO = function () {
		w = b2d.mW({
			//debug:false
		})
		b = w.brick(300, 300, 100, 100)
		r = cjs.rect(100, 100).XY(300, 300).drag()
		b.bindSprite2(r)
		//  w.s.A(r)
	}
}
function errRec() {
	EASELBO2 = EBB = function () {
		w = b2d.mW({
			grav: 3
			//,debug:false
		})
		p = w.player('standard')
		cjs.tick(function () {
			p.rot(0)
		})
		b = w.brick(300, 300, 300, 100)
		r = cjs.rect(300, 100).XY(300, 300).drag()
		w.s.A(r)
		cjs.tick(function () {
			b.X(r.X());
			b.Y(r.Y())
		})
		r.tweenLoop([{x: 500}, 1000], [{x: 300}, 1000])
		bb = w.brick(500, 500, 300, 100)
		rr = cjs.rectangle(300, 100).XY(500, 500).drag()
		w.s.A(rr)
		cjs.tick(function () {
			bb.X(rr.X());
			bb.Y(rr.Y())
		})
	}
}	