$L('path', 'poly', 'curve', 'rec')
function path() {
	x.iP = x.ptInPth = function (x, y) {
		return this.isPointInPath(x, y)
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
	x.l = x.lW = function (n) {
		var g = G(arguments)
		if (!g.n) {
			this.lineWidth = n;
			return this
		}
		return this.lt(g.f, g.s)
	}
	x.cP = x.x = x.cp = function () {
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
}
function rec() {
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
}
function poly() {
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
}
function curve() {
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
	x.quadratic = x.qt = function () {
		this.quadraticCurveTo();
		return this
	}
}
CVDR = CVDRAW = CV1 = FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
CVFS = XP1 = FILLSTY = function () {
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
CVPOL = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPol(flatTri, 'r', 'v')
}
_canDraw = function (el) {
	_drawLine = function (el) {
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
	}
	_canCurves = function (el) {
		el.arc = function (a, b, c, d, e, f, g) {
			el.context.arc(a, b, c, d, e, f, g)
			return el
		}
		el.arcTo = el.arc2 = function a2(X) {
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
		el.paperBag = function (x, y, width, height, blowX, blowY) {
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
	}
	_drawLine(el)
	_canCurves(el);
	
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
 
	
	
	return el
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
CV0 = TXCAN = function () {
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
CV29 = PXXX = CANPOL = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
}
can = FIT = CANFIT = CV4 = function () {
	c = __C();
	c.fit('me')
	m = $.c(800).fit('me')
	g = $.c('b', 600).fit('guy')
}
Can = CV8 = RUB1 = function () {
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
CTX = CV9 = RUB = function () {
	can = $.c('y', 1000, 800)
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
DRI = DRAWIMAGE = function () {
	DRI.CSS()
	d = $.d().A(
			$cv = $.c(900, 400)
	)
	x = $cv.ctx()
	$i = $.i('chicks')
	$i.load(function () {
		x.drawImage($i[0], 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i, 400, 100, 500, 200)
	})
}
CTX = DRI.CSS = function () {
	$CSS({
		body: {C: 'o'},
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
}
gr = xGr = CanvasGradient.prototype
gr.aCS = function (stopNum, color) {
	//= gr.add1CS
	var gr = this, g = G(arguments)
	gr.addColorStop(stopNum, oO('c', color))
	return gr
}
gr.cS = gr.stop = gr.s = gr.c = function (stop, color) {
	var gr = this, g = G(arguments)
	gr.cSOb = gr.stops = function (stopOb) {
		var gr = this, g = G(arguments)
		_.e(stopOb, function (v, k) {
			var o = S(v) ? {k: k, v: v} : {k: v, v: k}
			gr.aCS(o.k, $r('c', o.v))
		})
		return gr
	}
	if (A(g.f)) {
		g.e(function (cS) {
			gr.aCS(cS[0], cS[1])
		})
		return gr
	}
	return g.O ? gr.cSOb(g.f) :
			gr.aCS(g.f, g.s)
}
x.cRG = x.rG = function (x0, y0, r0, x1, y1, r1) {
	// = x.radGrad =x.rf 
	x0 = N(x0, 0)
	y0 = N(y0, 0)
	r0 = N(r0, 0)
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	r1 = N(r1, 0)
	return this.createRadialGradient(x0, y0, r0, x1, y1, r1)
}
x.cLG = x.lG = function (x1, y1, x2, y2) {
	x1 = N(x1, 0)
	y1 = N(y1, 0)
	x2 = N(x2, 0)
	y2 = N(y2, 0)
	//= x.lf = x.lGr
	return this.createLinearGradient(x1, y1, x2, y2)
}// = x.linGrad
x.lg = function () {
	var x = this,
			g = G(arguments), o, gr
	o = g.O ? g.f : N(g.t) ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x2: g.f, y2: g.s}
	gr = x.cLG(o.x1, o.y1, o.x2, o.y2)
	return o.cS ? x.c(gr.cS(o.cS)) :
			gr
}
_canGrad = function (el) {
	el.cLG = el.lG = function (a, b, c, d) {
		// =el.linearGradient =  el.createLinearGradient
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		return this.gC().cLG(a, b, c, d)
	}
	el.cRG = el.rG = function rg() {
		//= el.radialGradient =el.createRadialGradient
		var g = G(arguments)
		g[0] = g[0] || 200
		g[1] = g[1] || 200
		g[2] = g[2] || 100
		g[3] = g[3] || 250
		g[4] = g[4] || 250
		g[5] = g[5] || 800
		return this.gC().cRG(g[0], g[1], g[2], g[3], g[4], g[5])
	}
	el.lGBlackToWhite = function () {
		var gr = this.cLG(0, 0, this.W(), 0)
		gr.stop(0, "black").stop(1, "white")
		this.fillStyle(gr)
		this.fillRect()
	}
	el.lGDiagnal = function (gr) {
		gr = gr || this.cLG()
		gr.stop(0, 'r')
		gr.stop(.1, 'r')
		gr.stop(.15, 'b')
		gr.stop(.2, 'r')
		gr.stop(.5, 'y')
		gr.stop(1, 'b')
		this.fillStyle(gr)
		this.fillRect()
		return this
	}
	el.rGSample = function () {
		var gr = this.cRG()
		gr.aCS(0, 'r')
		gr.aCS(.15, 'b')
		gr.aCS(.2, 'r')
		gr.aCS(.5, 'y')
		gr.aCS(1, 'b')
		this.fS(gr)
		this.fillRect()
		return this
	}
	el.growingSun = function () {
		var that = this
		var a = 0,
				b = 1000,
				gr
		var func = function () {
			a += 1
			b -= 2
			gr = that.cRG(200, 200, a, 290, 270, b)
			gr.aCS(.1, 'Yellow')
			gr.aCS(.3, 'Red')
			gr.aCS(1, 'Violet')
			//  gr = x.gr( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
			that.fillStyle(gr)
			that.fillRect()
		}
		setInterval(func, 100)
	}
	el.sun = function (a, b, s) {
		s = s || 1;
		this.rG(
				[[a || 0, b || a || 0], s * 100, s * 500],
				{'y': 0, 1: tCl('p', 0)},
				600,
				600
		)
	}
	el.ball = function (b) {
		b = b || {}
		var dir = b.d || false,
				px = b.x || 100, py = b.y || 100, rad = b.r || 100,
				per = b.p || Math.PI * 2,
				ss = $r('c', b.s),
				fs = $r('c', b.f),
				lw = D(b.l) ? b.l : 4
		return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
	}
	return el
}
CANGRAD = $$$CONTAINSFOURAPPS$$$ = function () {
	var GR11 = function () {
		var c = $.c('y').W(500).H(500)
		var x = c.gC()
		x.f(x.cLG(50, 0, 500, 100).cS([.2, 'o'], [.6, 'r'], [.8, 'g']))
		c.fr()
		//prev: x.fillStyle = x.cLG(50, 0, 500, 100).cS(.2, 'orange').cS(.6, 'red').cS(.8, 'green')
		//prev: c.fillRect()
		return $.d().A($.h1('lin rad ctx'), c)
	}
	var GR2 = function () {
		var c = $.c('y').W(500).H(500).drag()
		var x = c.gC()
		x.lg({
			cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
			x1: 50, x2: 500, y2: 100
		}).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100})
				.fr(300, 0, 300)
		return $.d().A(
				$.h1('ctx lG example')
				, c
		)
	}
	var Z2W = function () {
		var c = $.c('y').W(500).H(500).dg()
		var x = c.ctx()
		x = c.gC().lg({cS: {z: 0, w: 1}, x2: x.W(), y2: 0}).fr()
		return $.d().A($.h1('ctx lg black2white'), c)
	}
	var RGSAMP = function () {
		return $.d().A(
				$.h1('can rG sample'),
				$.c('y').W(500).H(500).drag().rGSample())
	}
	$s({
		$flexDiv: {dp: 'fl', wr: 'wr'}
	})
	var d = $.d().id('flexDiv')
	d.A(GR11(), GR2(), Z2W(), RGSAMP())
}
x.pt = x.Pt = function () {
	return this.createPattern()
}
_canPat(el)
_canPat = function (el) {
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
	return el
}
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
_canGlobComp = function (el) {
	el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
		if (U(compOp)) {
			return this.context.globalCompositeOperation
		}
		this.context.globalCompositeOperation = oO('g', compOp)
		return this
	}
	return el
}
XORCX = GCO = GCOMP = function () {
	Q(function () {
		__C()
		x.d('me', 100, 100)
		x.d('me', 200, 100)
		x.d('me', 300, 100)
		x.d('me', 400, 100)
		x.d('me', 500, 100)
		x.d('me', 150, 150) //  x.sO(); x.dO()
		x.xo()
		c.$(function () {
			var g = G(arguments), o
			o = {x: g.f, y: g.s}
			x.d('guy', o.x, o.y)
		})
	})
	function alt() {
		CG1 = GCOMP = XORSTAMP = function () {
			__C()
			x.fit('chicks')
			x.xo()
			c.$(function (xx, yy) {
				$.i('me', function (e, i) {
					x.drawImage(i[0], xx - ($(i).W() / 2), yy - ($(i).H() / 2)
					)
				})
			})
		}
	}
}
CANXOR = CANGLOBALCOMP = function () {
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
_canText = function (el) {
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
	return el
}
CANTEXT = function () {
	__C()
	x.t('hello', 100, 100)
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
	function alt() {
		CV18 = TXTT = function () {
			__C()
			x.b('b', 'g', 30)
			x.T(100, 'Jason Yanofski', 10, 150)
			x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
			x.T('Jason Yanofski', 10, 290, '-')
		}
	}
}
CANNTX = function () {
	__C()
	x.setFont('Helsinki 23px')
	x.f('b').fillText('haffasfsf', 400, 500)
}
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
CANSHAD = function () {
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
CTXSHAD = function () {
	__C()
	x.xShadow = 3
	x.yShadow = 3
	x.shadowBlur = 10
	x.shadowStyle = 'red'
	x.r(188, 40, 200, 100).f('r')
			.shC('#999').shB(20).shX(15).shY(15).f()
}
_canShadow = function (el) {
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
	return el
}
x.sc = x.Z = function (x, y) {
	y = N(y, x)
	this.scale(x, y);
	//this.scale.apply(this, arguments)
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
_canTransform = function (el) {
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
CV14 = CXTF = CTXTRANSFORM = function () {
	__C()
	x.fR(0, 0, 250, 100)
	x.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
	x.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
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
}
CST = CLIPSTARS = function () {
	$l('clip stars')
	__C()
	Q(fn)
	//just draws green circ?
	function fn(ld) {
		$l('--clipstars')
		x.Star = function (r) {
			var ctx = this
			r = N(r, R(4, 2))
			ctx.b(r, 0, 'w') // first point drawn is the right most point
			_.t(9, x9)
			return x.f()
			function x9(i) {
				x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
			}
		}
		x.tl(75, 75).a(60).cl()
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)
		_.t(10, x10)
	}
	
	function x10() {
		$l('x10')
		x._(function () {
			x.tl(R(150, -75), R(150, -75)
			).Star()
		})
	}
}
 