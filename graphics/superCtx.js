$L('color','load')
x.cv = x.cv0 = function () {return this.canvas}
x.$cv = x.$ = function () {
	return $(this.cv())
}
x.H = function () {return this.cv().height}
x.W = function () {
	return this.cv().width
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
function color(){
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
}
function load(){
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
	GC1 = XORMORE = function () {
		c = __C()
		Q(function () {
					x.d('me', 100, 100)
					x.d('me', 200, 100)
					x.d('me', 300, 100)
					x.d('me', 400, 100)
					x.d('me', 500, 100)
					x.d('me', 150, 150) //  x.sO(); x.dO()
					x.xo()
					c.$(
							function () {
								var g = G(arguments), o
								o = {x: g.f, y: g.s}
								x.d('guy', o.x, o.y)
							}
					)
				}
		)
	}
	DFP = DRAGFRAME = PATH = function () {
		$.dragFrame = function (d) {
			//d = d || $.d('y', 50, 50).mar(20)
			d.on('mousedown', function (e) {
				//e.stopPropagation()
			})
			var outerDiv = $.d().C('z').A(d).drag().css('padding', 20)
			SL(outerDiv)
			return outerDiv
		}
		$Ld(function () {
			s = c = $.c('g', 200, 200)
			d = $.c('x', 200, 200)
			f = $.dragFrame(c)
			f1 = $.dragFrame(d).X(300)
			x = c.ctx()
			xx = d.ctx()
			x.c('X', 'X').fr(0, 0, 1000, 1000)
			x.b(10, 30, 'r', 'X')
			x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
			x.cl()
			x.d('me', 50, 50)
			d.ctx().d('me', 0, 0)
			_.in(function () {
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				_.in(function () {
					x.d(d, 0, 0)
					_.in(function () {
						xx.c('X').clearRect(0, 0, 200, 200)
						xx.d(c)
					})
				})
			})
		})
	}}
function _pre() {
	x = ctx = CanvasRenderingContext2D.prototype
} 
