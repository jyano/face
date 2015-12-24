$L('canvas', 'context', 'canApps')
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
function canvas() {
	x = ctx = CanvasRenderingContext2D.prototype
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
function canApps() {
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