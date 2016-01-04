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
GCO = GCOMP = function () {
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
}
GC1 = function () {
	c = __C()
	Q(
			function () {
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
ADB = function () {
	_ADBE = function (fn) {
		return function () {
			$Ld(function () {
				__C()
				j = x.d('me', 100, 300)
				i = x.d('chicks', 600, 300)
				fn()
			})
		}
	}
	ADBE = _ADBE(function () {
		c.$(function (x1, y1) {
			x.a(x1, y1, 10).s()
		})
	})
	ADBE()
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
}
CG1 = GCOMP = XORSTAMP = function () {
	__C()
	x.fit('chicks')
	x.xo()
	c.$(function (xx, yy) {
		$.i('me', function (e, i) {
			x.drawImage(
					i[0],
					xx - ($(i).W() / 2), yy - ($(i).H() / 2)
			)
		})
	})
}
CST = CLIPSTARS = function () {
	$l('clip stars')
	z()
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