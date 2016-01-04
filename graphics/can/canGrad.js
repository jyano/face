gr = xGr = CanvasGradient.prototype
_canGrad = function (el) {
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
 