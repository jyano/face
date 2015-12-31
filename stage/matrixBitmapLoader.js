$L('bitmap','loader')
mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
	x = N(x, 0)
	y = N(y, 0)
	scaleX = N(scaleX, 1)
	scaleY = N(scaleY, 1)
	rotation = N(rotation, 0)
	return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
}
dO.mx = dO.gM = function () {
	return this.getMatrix()
}
dO.mxMx = dO.cMx = dO.ccMx = dO.gCM = function () {/*
 getConcatenatedDisplayProps ( [props] ) DisplayProps
 Inherited from DisplayObject: getConcatenatedDisplayProps:999
 Generates a DisplayProps object representing the combined 
 display properties of the object
 and all of its parent Containers up to the highest level ancestor 
 (usually the Stage).
 Parameters:

 [props] DisplayProps optional
 A DisplayProps object to populate with the calculated values. 
 If null, a new DisplayProps object is returned.
 Returns:

 DisplayProps: The combined display properties.
 */
	var dO = this
	return dO.getConcatenatedMatrix()
}
function bitmap(){
	ct._bm = function (i, fn) {
		var ct = this
		$.i(i, function (i) {
			ct.A(bm = $Bm(i))
			if (F(fn)) {
				fn(bm)
			}
		})
		return ct
	}
	ct.bm = function () {
	
		var ct = this, g = G(arguments), o, bmp
		o = N(g.s) ?
		{i: g.f, sc: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		o.sc = N(o.sc) ? o.sc : 1
		if (_.iDU(o.i)) {
			//return s$(a).contains('data:')
			o.i = $.i(o.i)
		}
		if (O(o.i)) {
			bmp = $Bm(o.i).a2(ct)
			if (o.fn) {
				o.fn(bmp)
			}
			return ct
		}
		$.i(o.i, function (i) {
			bmp = $Bm(i)
			bmp.a2(ct)
			bmp.rC()
			bmp.sXY(o.sc).a2(ct)
			//bm.XY( that.W()/2, that.H()/2 )
			// works with stage i guess.. but fucks with 'container' - cant check bounds
			if (g.n) {
				bmp.XY(-1000)
			}
			if (o.fn) {
				o.fn(bmp)
			}
		})
		return ct
	}
	ct.Bm = function (i) {
		return $Bm(i).a2(this)//this.bm.apply(this, arguments)
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	gx._bf = function (i, tf) {
		return this.bf(i, null, tf)
	}
	gx._bs = function (i, tf) {
		return this.bs(i, null, tf)
	}
	h.bf = function () {//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		else {
			_bf(S(o.i) ? Q.i(o.i) : o.i, o)
		}
		return h
		function _bf(i, o) {
			gx._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
		
		function alt() {
			h._bf = function () {
				var h = this, gx = h.graphics, g = G(arguments)
				var tf = A(g.s) ? cjs.m2d.apply(cjs, g.s) : g.s
				tf = tf || cjs.m2d(R(500), R(300))
				S(g.f) ? gx.bf(Q.i(g.f), null, tf) :
						O(g.f) ? gx.bf(g.f, null, tf) : 0
				return h
				function alt() {
					h._bf = function (i, tf) {
						var h = this, gx = h.graphics, g = G(arguments)
						gx._bf(i, tf)
						return h
					}
				}
			}
			h.bf1 = function () {
				var h = this, gx = h.graphics, g = G(arguments), o
				o = O(g.f) && A(g.f.hs) ? g.f :
						F(g.s) ? {i: g.f, fn: g.s} :
						{i: g.f, mx: g.s, fn: g.t}
				o.i = o.i || 'me'
				if (S(o.i) && !Q.ran) {
					$.i(o.i, function (i) {
						_bf(i, o.mx, o.fn)
						if (o.hs) {
							_.e(o.hs, o.fn)
						}
					})
				}
				if (S(o.i)) {
					o.i = Q.i(o.i)
				}
				_bf(o.i, o.mx, o.fn)
				return h
				function _bf(i, mx, fn, hs) {
					var g = G(arguments),
							o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
									F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
									{i: g.f, mx: g.s, hs: g.t}
					o.i = S(o.i) ? Q.i(o.i) : o.i
					o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
					o.fn = _.tFn(o.fn)
					h._bf(i, o.mx)
					o.hs ? _.e(o.hs, function (shp) {
						o.fn(shp, h)
					}) :
							o.fn(h)
				}
			}
			h.bf = function () {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (O(g.f) && A(g.f.hs)) {
					o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
				}
				else {
					o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
				}
				o.i = o.i || 'me'
				if (!Q.ran) {
					if (o.hs) {
						$.i(o.i, function (i) {
							_bf(i, o.mx);
							if (o.fn) {
								_.e(o.hs, o.fn)
							}
						})
					}
					else if (S(o.i)) {
						$.i(o.i, function (i) {
							_bf(i, o.mx, o.fn)
						})
					}
				}
				else if (S(o.i)) {
					_bf(Q.i(o.i), o.mx, o.fn)
				}
				else {
					_bf(o.i, o.mx)
				}
				return h
				function _bf(i, mx, fn, hs) {
					var g = G(arguments),
							o = {
								i: g.f,
								mx: A(g.s) ? $Mx(g.s) : g.s,
								fn: _.tFn(g.t),
								hs: g[3]
							}
					h._bf(i, o.mx)
					o.hs ? _.e(o.hs, function (shp) {
						o.fn(shp, h)
					}) : o.fn(h)
				}
			}
			h.bf = function () {
				var h = this, gx = h.graphics, g = G(arguments);
				if (!F(Q)) {
					return h._bf.apply(h, g)
				}
				function fn(fn) {
					return function (i) {
						gx.bf(i[0])
						if (F(g.s)) {
							fn(g)
						}
					}
				}
				
				var fn1 = fn(function () {
					g.s(h)
				})
				var fn2 = fn(function () {
					_.e(g.f.hs, g.s)
				})
				g.S_ ? $.i(g.f, fn1) :
						g.O_ && A(g.f.hs) ?
							//if object with an 'hs' property
								$.i(g.f.i || 'me', fn2) :
								gx.bf(g.f, null, g.s)
				return h
			}
		}
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	h._bC = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			h.dc(h1)
		})
		return h
	}
	h.bC = h.bmCir = function (o) {
		var h = this
		o = o || {}
		o.i = o.i || 'me'
		o.circs = o.circs || []
		o.cs = o.cs || []
		o.hs = o.hs || []
		$.i(o.i, function (i) {
			_.e(o.circs, function (c) {
				h.bf(i).dc(c)//.ef()
			})
		})
		return h
	}
	h.bR = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			if (o.hs) {
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			else {
				h.rec(o.hs)
			}
		})
		return h
		function alt() {
			h.bR = function (o) {
				var h = this;
				if (F(Q)) {
					h.bf(o, function (h1) {
						h.rec(h1)
					})
				}
				else {
					alert('h.bR not preloaded?')
					h.bf(o.bf)
					h.rec(o.hs)
					_.e(o.hs, function (r) {
						w.rec(r.w, r.h)
					})
				}
				return h
				//= h.bfR = h.bmR
			}
		}
	}
	h.bP = h.bV = function (o) {
		var h = this, g = G(arguments), o
		h._bV = function (i, vs) {
			i = i || 'me'
			return this.bf(i).lt(vs).cp()
		}
		h._bVAsy = function (i, v) {
			var h = this
			i = i || 'me'
			$.i(i, function (i) {
				h._bV(i, v)
			})
			return h
		}
		o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
		if (Q.ran) {
			h._bV(o.i, o.v)
		}
		else {
			h._bVAsy(o.i, o.v)
		}
		return h
		function alt() {
			h.bV = function (o) {
				var h = this, g = G(arguments), o
				o = g.A ? {hs: g.f} : g.f || {}
				o.hs = o.hs || []
				o.i = o.i || 'me'
				if (F(Q)) {
					$.i(o.i, function (i) {
						h.bf(i[0])
						_.e(o.v, function (v) {
							h.lt(v)
						})//
						h.cp()
						h.ef()
					})
					return h
				}
				h.bf(o.i)
				_.e(o.v, function (v) {
					h.lt(v)
				})
				return h
			}
			function old() {
				h.bmV = function (o) {
					var h = this
					o = o || {}
					o.i = o.i || 'me'
					$.img(o.i, function (i) {
						i = i[0]
						_.e(o.v, function (v) {
							h.bf(i)
							h.lt(v)
							h.ef().cp()
						})
					})
					return h
				}
			}
		}
	}
	h._bfT = function (i) {
		var g = G(arguments)
		return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
	}
	h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			_.tFn(o.fn)(
					h._bf(g.f, $tMx(_.tA(o.tf))))
		})
		return h
	}
	h._bfTf = h._bfT = function (img) {
		var g = G(arguments)
		var props = A(g.s) ? g.s : g.r
		return this._bf(img, $Tf(props)) //gant!
	}
	h._bfTfArrs = h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			var fn = _.tFn(o.fn)
			fn(h._bf(g.f, $Tf(_.tA(o.tf))))
		})
		return h
	}
}
function loader(){
	$Ld = $ld = cjs.lQ = Q = function () {

//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
		var g = G(arguments), o
		o = g.F_ ? {done: g.f, file: g.s} :
				(g.A_ || g.S_) ? {mf: g.f, done: g.s, file: g.t} :
						g.f
		o.mf = o.mf || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
		var ld = _$Ld()
		if (o.file) {
			ld.file(o.file)
		}
		if (o.done) {
			ld.done(function (e) {
				
				//o.done(function(i) {return ld.i(i)}, e)
				o.done(ld)
			})
		}
		if (o.mf) {
			ld.mf(o.mf)
		}
		Q = ld
		Q.ran = true
		return Q
	}
	Q.ran = false
	Q1 = function (imgs, fn) {
		var q = cjs.lq()
		mf = []
		_.e(imgs, function (v) {
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		q.manifest(mf)
		q.complete(function () {
			fn(q)
		})
	}
	ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
		i = this.getResult(i);
		i.w = i.width;
		i.h = i.height;
		return i
	}
	ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
		if (F(fn)) {
			this.on("complete", fn)
		}
		return this
	}
	ld.bm = ld.b = function (i, ct, x, y) {
		var ld = this
		var bm = _$Bm(ld.get(i))
		if (N(ct)) {
			bm.XY(ct, x)
		}
		else if (O(ct)) {
			bm.a2(ct, x, y)
		}
		return bm
	}
	ld.mf = function (mf) {
		// q.mf protosig: 
		// (1) 'me',..
		// (2)  {src:'me', id:'him'},.. 
		// (3) [ {src:*, id:*}, 'me',.. ]		
		mf = $its(A(mf) ? mf : G(arguments))
		this.loadManifest(mf)
		return this
	}
	function fileLoad() {
		ld.dfF = cjs.handleFileLoad = function (e) {
			alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
			images = window['images'] || {}
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
			this.on("fileload", fn)
			return this
		}
	}
	ld.jQuery = ld.$ = function (i) {
		return $(this.i(i))
	}
	ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
		var b, g = G(arguments)
		b = Q.b(name)
				.XY(N(x, 0), N(y, 0))
				.sXY(N(sX, 1), N(sY, sX || 1))
				.rt(N(rt, 0))
		if (!g.n) {
			b.rC()
		}
		if (g.p) {
			b.drag()
		}
		this.A(b);
		return b
	}
	function later() {
		cjs.mf = cjs.manifest = function () {
			var g = G(arguments)
			var mf = []
			_.e(g, function (i) {
				mf.push($it(i))
			})
			return mf
		}
		cjs.handleFileLoad = function (e) {
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
			alert('manifest')
			return cjs.mf.apply(null, _.m(a.images, function (i) {
						return _.crs(i)
					})
			)
		}
	}
} 
 