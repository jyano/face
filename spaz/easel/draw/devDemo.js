w.dev = function () {
	var w = this,
			d = $.div('t', 400, 600).abs(1200, 0).A(),
			d1 = $.div('x', 400, 600).abs(1600, 0).A()
	d.A($.h1('world stats'))
	d1.A($.h1('body stats'))
	return w
}
w.mark = function () {
	var w = this
	w.C('z')
	_.times(50, function (i) {
		w.S(i * 200, 0, 'w', 1, 10000).sensor(true)
	})
	_.times(50, function (i) {
		w.S(0, i * 200, 'w', 10000, 1).sensor(true)
	})
	return w
}
w.dbLayers = function () {
	var w = this
	w.dr(75, 75, 150, 150, '-')
	w.dr(140, 0, 20, 300)
	w.dr(0, 150, 300, 20)
	w.dr(100, 100, 100, 100, '+')
	return w
}
w.dbCross = function (x, y) {
	var w = this, c = w.cent()
	x = N(x) ? x : c.x
	y = N(y) ? y : c.y
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.back = function () {
	var w = this,
			back = w.s.back
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.HUD = function () {
	var w = this,
			back = w.s.HUD
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.lay = function () {
	var w = this
	w.back().HUD().db()
	return w
}
DBLAYERS = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.dbLayers()
}
MARK = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0}).mark()
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	y.XY(100, 600).rot(90).lD(0).lV(4)
}
function maybeOldMore() {
	w.l = w.dl = function () {
		var w = this, g = G(arguments), o, i
		o = S(g[0]) ?
		{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
				:
		{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
		i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
		o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
		return i.h()
				.c(10, o.c)
				.mt(o.x1, o.y1)
				.lt(o.x2, o.y2).K('dev line')
	}
	w.dr = function (c, x, y, W, h) {
		var w = this, g = G(arguments), o
		o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
				: {x: g[0], y: g[1], w: g[2], h: g[3]}
		_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
				g.n ? {g: w.bg, c: o.c || 'r'} :
				{g: w.hud, c: o.c || 'b'})
		o.g.h().rec(o)
	}
//dev
	w.dbCross = function (x, y) {
		var w = this, c = w.cen()
		x = N(x, c.x)
		y = N(y, c.y)
		w.dr('t', -10 + x, -140 + y, 20, 300, '-')
		w.dr('t', -150 + x, -10 + y, 300, 20, '-')
		w.dot('r', x, y)
		return w
	}
	w.stats = function (n) {
		var w = this
		_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
		w.mdq(function (fx) {
			_f = _d._fix = fx;
			_b = _f.B()
		})
		if (n == 0) {
			z(upd)
		}
		else {
			_.ev(N(n, .2), upd)
		}
		return w
		function upd() {
			var f, b;
			if (_d._fix) {
				f = _d._fix
				b = f.B()
				_d.T(
						'ty: ' + (b.iD() ? 'dyn' : 'stat'),
						'x: ' + b.X(),
						'y: ' + b.Y(),
						'fK: ' + f.K(), 'bK: ' + b.K(),
						'sen: ' + f.sen(),
						'd: ' + f.d(),
						'fr: ' + f.fr(),
						'r: ' + f.r(),
						'bMass:' + parseInt(f.B().mass()),
						'bNum:' + f.B().n()
				)
			}
		}
	}
	w.devGrid = function () {
		var w = this
		_.t(12, function (i) {
			w.l(i * 200, 0, i * 200, w.h)
			w.l(i * 200, 0, i * 200, w.h, '-')
			w.l(0, i * 200, w.w, i * 200)
			w.l(0, i * 200, w.w, i * 200, '-')
		})
		return w
	}
	w.flash = function () {
		var w = this, s = w.s
		s.flash.apply(s, arguments)
		return w
	}
//write
	w.pop = function (t) {
		var w = this
		t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
		t.tw([{a: .5, sxy: .5}, 4000])
		_.in(4, function () {
			t.rm()
		})
		return this
	}
	w.pen = function (t, f, c) {
		var g = G(arguments), o
		if (this._T) {
			this._T.rm();
			this._T = null
		}
		o = {y: 100}
		o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
		this._T = this.i.T(t, f, c)
		this._T.XY(o.x, o.y)
		return this._T
	}
	w.chalk = function () {
		var w = this, g = G(arguments)
		w.i.chalk.apply(w.i, g)
		return w
	}
	w.show = function (fn) {
		var w = this, g = G(arguments)
		_.ev(.2, function () {
			w.pen(S(fn) ? window[fn] : fn())
		})
		return w
	}
	i.tickX = function (fn) {
		var i = this
		T.t(function () {
			i.X(fn())
		})
		return i
	}
	i.tickY = function (fn) {
		var i = this
		T.t(function () {
			i.Y(fn())
		})
		return i
	}
	i.dr = function (dr) {
		alert('i.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.nm = function (dr) {
		alret('i.nm')
		if (U(dr)) {
			return this.name
		}
		this.name = dr;
		return this
	}
	i.warpX = function (lo, hi, cush) {
		alert('i.warpX')
		var i = this,
				wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.x = wrp(i.x)
		})
		return i
	}
	i.warpY = function (lo, hi, cush) {
		alert('i.warpY')
		var i = this, wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.y = wrp(i.y)
		})
		return i
	}
	i.warp = function (n) {
		var i = this, s = i.S(), n = n || 0
		i.warpX(0, s.W(), n)
		i.warpY(0, s.H(), n)
		return i
	}
	ct.reset = function () {
		alert('ct.reset')
		this.St().removeAllChildren()
		T.removeAllListeners()
	}
	cross = function () {
		r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
		b = w.S(600, 300, 'b', 300, 100).rt(-35)
	}
}
b.relPos = function () {
	return this.X() + this.stg().X()
}
b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this,
			rect = b2d.poly(wd, ht, x, y),
			fixt = this.fixt(rect).den(1),
			r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	return fixt
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
b.C = function (col) {
	this.each(function (f) {
		f.C(col)
	})
	return this
}
b.RECT = function (col, wd, ht, x, y, rot) {
	var g = G(arguments),
			fd,
			fixt,
			h,
			str, alpha = 1
	col = g[0];
	wd = g[1];
	ht = g[2]
	x = g[3];
	y = g[4];
	rot = g[5]
	if (S(rot)) {
		str = rot;
		rot = null
	}
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(ht)) {
		str = ht;
		ht = null
	}
	if (!S(col)) {
		rot = y;
		y = x;
		x = ht;
		ht = wd;
		wd = col
	}
	fd = b2d.rec(wd, ht, x, y, rot)
	if (g.n) {
		fd.isSensor = true
		alpha = .2
	}
	fixt = this.fixt(fd)
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(
				w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
		)
	}
	return fixt
}
b.CIRC = b.circ = function (col, rad, x, y) {
	var g = G(arguments), fixt, h, str
	col = g[0];
	rad = g[1];
	x = g[2];
	y = g[3];
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(rad)) {
		str = rad;
		rad = null
	}
	if (!S(col)) {
		y = x;
		x = rad;
		rad = col
	}
	fixt = this.fixt(b2d.circ(rad, x, y))
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(w.s.circ(col, rad, x, y))
	}
	return fixt
}
f.stg = function () {
	return this.wor().s
}
f.dot = function (col) {
	var f = this, w = f.wor(), cent = f.cent()
	if (S(col)) {
		w.dot(col, cent)
	} else {
		w.dot(cent)
	}
	return this
}
f.dots = function () {
	b2d.polyDot(this.wVerts())
	return this
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.C = f.color = function (c1, c2) {
	var f = this, b = f.body(),
			w = b.wor(), shape, rad, pos
	c1 = c1 || 'b'
	c2 = c2 || c1
	if (f.isCirc()) {
		rad = f.rad()
		pos = f.pos()
		shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
	}
	else {
		shape = w.s.shape().poly(f.verts(), c1, c2, 1)
	}
	f.removeSprites()
	f.bindSprite(shape)
	// return this
}
f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
	var g = G(arguments)
	gg = g
	alpha = N(alpha) ? alpha : 1
	obj.opacity(alpha)
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = this,
			body = this.body(),
			stage = body.wor().s
	startingRotation = N(startingRotation) ? startingRotation : 0
	//f.sprite = obj
	//f.sprite.a2(stage)
	o = obj.a2(stage)
	f.sprites = f.sprites || []
	f.sprites.push(obj)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {//if(!f.sprite){return}
		obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
		obj.rotation = body.rot() + startingRotation
	})
	return this
}
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//if( ! o.$$ == 0 ){ makeShapeOnDblClk() }
// $.gameController().A();
//cjs.Ticker.removeAllEventListeners()
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
b._BOX_ = function (wd, ht, x, y) {
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
	var r = f.sprite = $r2Gx(wd, ht, x, y)
			.XY(b.X(), b.Y()).al(.3).a2(w.st)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
b.POLY = function (c, arr) {
	var b = this, w = b.W(), g = G(arguments), o
	o = S(g.f) ? {c: g.f, arr: g.s} : {arr: g.f}
	o.c = o.c || 'y'
	var f = b.f($aF(o.arr))
	b.bS2(
			w.st.poly(o.arr, o.c, o.c))
	return f
}//w.CONVEX = b.vex = b.conv = b.vex =
//specific to talkjs
w.tick = function (draw) {
	var w = this,
			can = w.can,
			ctx = w.ctx
	draw = N(draw) ? draw : 0.1
	ctx.tick(function () {
		this.trans(0, 0).Z(1, 1);
		w.draw(draw)
	})
	return this
}
function draw() {
	w.dbX = function () {
		var w = this
		w.line(0, 0, w.W(), w.H(), '+')
		w.line(0, w.W(), w.H(), 0, '+')
		if (N(w.w) && N(w.h)) {
			w.line(0, 0, w.w, w.h)
			w.line(0, w.W(), w.H(), 0)
		}
	}
	w.dr = function (col, x, y, W, h) {
		var w = this,
				g = G(arguments),
				col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
		if (g.p) {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'b'
			}
			w.s.HUD.shape().fs(col).rect(x, y, W, h)
		}
		else if (g.n) {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'r'
			}
			w.s.back.shape().fs(col).rect(x, y, W, h)
		}
		else {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'w'
			}
			w.s.shape().fs(col).rect(x, y, W, h)
		}
	}
	w.Y = function (x, Y) {
		var w = this;
		y = w.ship(x, Y);
		return w
	}
//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)
	w.line = function (col, x1, y1, x2, y2) {
		var w = this,
				g = G(arguments),
				col = g[0],
				x1 = g[1], y1 = g[2],
				x2 = g[3], y2 = g[4]
		if (g.p) {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'b'
			}
			h = w.s.HUD.shape()
			return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
		else if (g.n) {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'x'
			}
			return w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
		else {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'w'
			}
			return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
	}
}
function stage() {
	w.sH = function (h) {
		var w = this, wH = w.H()
		if (U(h)) {
			return wH * w.s.scaleY
		}
		w.s.scaleY = h / wH
		return w
	}
}
b.$ = b.click = function (fn) {
	var b = this
	b.W().stage.on('stagemouseup', function (ev) {
		w.qPoint(
				function (f) {
					if (f.B() == b) {
						_.b(fn, b)(f)
					}
				},
				ev.rawX,
				ev.rawY
		)
	})
	return b
}
b.dot = function (color) {
	color = oO('c', color || 'y')
	this.stg().dot(color, this.cent()) //  this.X(), this.Y()
}
b.stg = function () {
	return this.W().stage
}
w.ch = w.chalk = function () {
	this.st.chalk.apply(this.st, arguments)
	return this
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
w.sh = w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		w.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.dot = function () {
	this.s.dot.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
}
w.fl = w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
//dev
w.dbCross = function (x, y) {
	var w = this, c = w.cen()
	x = N(x, c.x)
	y = N(y, c.y)
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	if (n == 0) {
		z(upd)
	}
	else {
		_.ev(N(n, .2), upd)
	}
	return w
	function upd() {
		var f, b;
		if (_d._fix) {
			f = _d._fix
			b = f.B()
			_d.T(
					'ty: ' + (b.iD() ? 'dyn' : 'stat'),
					'x: ' + b.X(),
					'y: ' + b.Y(),
					'fK: ' + f.K(), 'bK: ' + b.K(),
					'sen: ' + f.sen(),
					'd: ' + f.d(),
					'fr: ' + f.fr(),
					'r: ' + f.r(),
					'bMass:' + parseInt(f.B().mass()),
					'bNum:' + f.B().n()
			)
		}
	}
}
w.devGrid = function () {
	var w = this
	_.t(12, function (i) {
		w.l(i * 200, 0, i * 200, w.h)
		w.l(i * 200, 0, i * 200, w.h, '-')
		w.l(0, i * 200, w.w, i * 200)
		w.l(0, i * 200, w.w, i * 200, '-')
	})
	return w
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
//write
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.show = function (fn) {
	var w = this, g = G(arguments)
	_.ev(.2, function () {
		w.pen(S(fn) ? window[fn] : fn())
	})
	return w
}
i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}
i.dr = function (dr) {
	alert('i.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
i.nm = function (dr) {
	alret('i.nm')
	if (U(dr)) {
		return this.name
	}
	this.name = dr;
	return this
}
i.warpX = function (lo, hi, cush) {
	alert('i.warpX')
	var i = this,
			wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.x = wrp(i.x)
	})
	return i
}
i.warpY = function (lo, hi, cush) {
	alert('i.warpY')
	var i = this, wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.y = wrp(i.y)
	})
	return i
}
i.warp = function (n) {
	var i = this, s = i.S(), n = n || 0
	i.warpX(0, s.W(), n)
	i.warpY(0, s.H(), n)
	return i
}
ct.reset = function () {
	alert('ct.reset')
	this.St().removeAllChildren()
	T.removeAllListeners()
}
cross = function () {
	r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
	b = w.S(600, 300, 'b', 300, 100).rt(-35)
}
//move to x-middle of stage
b.horizCenter = function () {
	return this.X(this.wor().s.W() / 2)
}
b.stg = function () {
	return this.wor().s
}
b.click = function (func) {
	var b = this, w = this.wor()
	w.s.on('stagemouseup', function (e) {
		w.queryPoint(function (f) {
					if (b == f.B()) {
						_.bind(func, b)(f)
					}
				},
				e.rawX, e.rawY)
	})
}
b.img = b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
	var body = this, stage = body.wor().s
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm  //only one???
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y()) //can simplify?
			bm.rotation = body.rot() + startingRotation
		}
	}, '-') // what is this negative doing ?????
	return body
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
	function alt() {
		b.mid = function () {
			var b = this, w = b.wor()
			return b.XY(w.w / 2, w.h / 2)
		}
	}
}
w.gx = function (o) {
	var w = this, W = o.W, H = o.H
	w.bg = new cjs.Stage($.can(o.C || 'z', W, H).P('a').XY(0, 0)[0]).A().tick();
	w.bg.linGrad = function (c1, c2) {
		var s = this, H = s.H(), W = s.W()
		c1 = oO('c', c1 || 'b')
		c2 = oO('c', c2 || 'r')
		if (R()) {
			$l('=')
			if (R()) {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, 0, H).dr(0, 0, W, H)
			}
			else {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, 0).dr(0, 0, W, H)
			}
		}
		else {
			$l('/')
			if (R()) {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, H, 0, 0).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, H).dr(0, 0, W, H)
				}
			}
			else {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, 0, 0, H).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, H, W, 0).dr(0, 0, W, H)
				}
			}
		}
	}
	w.bg.SHAPE = w.bg.shape(0, 0, 'w')
	w.bg.linGrad('z', 'w')
	w.s = w.stage = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().noAutoClear().tick()
	w.canvas = w.s.canvas
	w.c = w.can = $(w.canvas).id('canvas')
	w.ctx = w.context = w.c.ctx('2d')
	w.hud = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().tick()
	w.hud.h = w.hud.shape().fs($r()).rect(0, 0, 5000, 5000).opacity(.3)
	w.hud.c = $(w.hud.canvas)
	w.s.back = w.bg
	w.s.HUD = w.hud
	return w
}
w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		world.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.chalk = function () {
	this.s.chalk.apply(this.s, arguments)
	return this
}
function stage() {
	w.setBg = function (o) {
		var w = this;
		if (o.i) {
			w.s.bm(o.i)
		}
		;
		return w
	}
	w.auCl = function (aC) {
		var w = this, st = w.st
		if (U(aC)) {
			return st.autoClear
		}
		st.autoClear = aC ? true : false
		return w
	}
	w.ggAuCl = function () {
		var w = this
		w.auCl(!w.auCl())
		return w
	}
}
function world() {
//function write() {
	CHALK = function () {
		w = b2d.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
}
w.dot = function (col, x, y) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2]
	if (g.m) {
		w.dot(col, x, y);
		w.dot(col, x, y, '+')
	}
	if (g.p) {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'b'
		}
		w.hud.dot(col, x, y)
		//w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
	}
	else {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'w'
		}
		w.s.dot(col, x, y)
	}
	return w
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.fadeTitle = function (text) {
	text = text || 'no text provided, yo'
	setTimeout(function () {
		t = w.s.text(text, 50, 'white', 600, 100)
		t.tween([{a: 0, sxy: 0}, 2000])
		setTimeout(function () {
			t.remove()
		}, 1000)
	}, 500)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.C = function (col) {
	var w = this
	w.c.C(col)
	return w
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
b.centerScale = function (scale) {
	var body = this
	body.stg().sXY(scale)
			.X(300 - ((body.X() - 300) * scale))
			.Y(150 - ((body.Y() - 150)) * scale)
	return this
}
b.color = function (c1, c2) {
	c1 = c1 || 'b';
	c2 = c2 || c1
	_.each(this.fixts(), function (f) {
		f.color(c1, c2)
	})
}
b.hCen = b.hoCen = b.hzCen = function () {
	var b = this
	return b.X(b.W().st.W() / 2)
}
b.constF = function (x, y) {
	var b = this
	$t(function () {
		b.F(x, y)
	})
	return b
}
b.warp = function (p) {
	var p = this
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
f.dot = function (c) {
	var f = this, b = f.B(), w = b.W()
	var stg = w.s
	if (c) {
		return stg.dot(c, f.cen())
	}
	return stg.dot(f.cen())
}
w.gridDrawer = function (x, y, len, spa) {
	var w = this
	len = N(len) ? len : 30;
	spa = N(spa) ? spa : 20
	return function (x, y) {
		b.rect(len, len, x * spa, y * spa);
		return b
	}
}
w.GRID = function (gd, x, y, l, spa) {//spacing
	var w = this
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.rect(l, l, rw * spa, c * spa, 'p');
			}
		})
	})
	return b.K('grid')
}
COLORMAZE = MMM = MARIOMAZE = function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	p = w.p(2.5).XY(220, 70).con('thrust').aD(10000)
	//p.follow(300, 150)
	grid = w.GRID(maze, 100, -100, 14, 40)
	score = 100
	$t(function () {
		
		//grid.aV(.2)
		//w.st.HUD.pen(score)
	})
	//w.b(function (cx) {cx.w('player', 'grid', function() {score--		   })})
	// grid.angDamp(1)
}