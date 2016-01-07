
_$Bm = function (i) {
	return new cjs.Bitmap(i)
}
$Bm = cjs.bitmap = cjs.bm = function () {
	var g = G(arguments)
	var i = g[0]
	if (!O(i)) {
		return
	}
	if ($.iI(i)) {
		i = $(i)[0];
		bm = new cjs.Bitmap(i)
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	//return new cjs.Bitmap(i)
	bm = $Bm(i.i)
	if (i.al) {
		bm.al(i.al)
	}
	if (i.fl) {
		bm.fl(i.fl)
	}
	if (i.aF2) {
		bm.aF2(i.aF2)
	}
	if (!g.n) {
		
		//	bm.rCenter()
	}
	return bm
}
$L('bmApps','matrx')


mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
	x = N(x, 0)
	y = N(y, 0)
	scaleX = N(scaleX, 1)
	scaleY = N(scaleY, 1)
	rotation = N(rotation, 0)
	return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
}
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
h.bf = function () {

//calls bitmap fill and lets it load up the bitmap (my face)
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
h.bmR = h.bmRec = h.bR = function (o) {
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
 
function matrx() {
	$Pt = function (x, y) {
		//=P=  cj.P = cj.Pt
		if (U(x)) {
			return new C$.Point
		}
		if (O(x) && O(y)) {
			return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
		}
		if (O(x)) {
			return new cj.Point(
					x.mx(),
					x.my()
			)
		}
		return new cj.Pt(x, y)
	}
	$Mf = function (mf, fn) {
		cjs.manifest = function (fn) {
			_manifest_ = [{
				id: "chicks", src: "/chicks.png"
			},
				{id: "me", src: "/me.png"},
				{id: "guy", src: "/guy.png"},
				{id: "sun", src: "/sun.png"}]
			var q = cjs.loadQueue()
			q.complete(function () {
				fn(function (getResult) {
					return q.getResult(getResult)
				})
			})
					.manifest(_manifest_)
		}
		return $Ld(fn).mf(mf)
	}
	$Mx = cjs.m2d = function () {
		var _MxOb = function (mx) {
			return new cjs.Matrix2D(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
		}
		var g = G(arguments), o;
		if (A(g.f)) {
			return $Mx.apply(null, g.f)
		}
		o = g.O ? g.f :
				U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
				{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
		var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
			o.a = N1(o.a)
			o.b = N0(o.b)
			o.c = N0(o.c)
			o.d = N1(o.d)
			o.tx = N0(o.tx)
			o.ty = N0(o.ty)
			return o
		}
		return _MxOb($mxDf(o))
	}
	$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
		return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
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
	dO.catProps = dO.gCDP = function () {
		var dO = this
		return dO.getConcatenatedDisplayProps()
	}
	MX00 = M2D = CJSM2D = function () {
		
		/*
		 Matrix2D Class
		 Defined in: Matrix2D:41
		 Module: EaselJS
		 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
		
		 This matrix can be visualized as:
		
		 [ a  c  tx
		 b  d  ty
		 0  0  1  ]
		 Note the locations of b and c.
		
		 Constructor
		 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		 Defined in Matrix2D:41
		 Parameters:
		
		 [a=1] Number optional
		 Specifies the a property for the new matrix.
		
		 [b=0] Number optional
		 Specifies the b property for the new matrix.
		
		 [c=0] Number optional
		 Specifies the c property for the new matrix.
		
		 [d=1] Number optional
		 Specifies the d property for the new matrix.
		
		 [tx=0] Number optional
		 Specifies the tx property for the new matrix.
		
		 [ty=0] Number optional
		 Specifies the ty property for the new matrix.
		
		 IndexMethodsProperties
		 Item Index
		 Methods
		
		 append
		 appendMatrix
		 appendTransform
		 clone
		 copy
		 decompose
		 equals
		 identity
		 invert
		 isIdentity
		 prepend
		 prependMatrix
		 prependTransform
		 rotate
		 scale
		 setValues
		 skew
		 toString
		 transformPoint
		 translate
		 Properties
		
		 a
		 b
		 c
		 d
		 DEG_TO_RAD static
		 identity static
		 tx
		 ty
		 */
		m = $Mx()
		$l(m)
		$St().bm('me', function (bm) {
			b = bm.XY(400, 200)
			p = b.getConcatenatedDisplayProps();
			$l(p)
			cm = b.getConcatenatedMatrix()
			$l(cm)
		})
	}
	MATRIXMUG = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		$.div('b', 50, 50).A()
		$.div('blue', 50, 50)
		stage = s = $St(1600, 1000)
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		stage.ct(function (c, s) {
			c.x(700)
			c.mug(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mug(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mug(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		stage.ct(function (container, stage) {
			container.X(1400)
			container.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				createjs.bindSlide(bm, stage)
			})
		})
		stage = s = cjs.stage(1600, 1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('e', co)
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})
			//on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			c.on('mouseover', function () {
				c.X(10, '+');
				$l('v: ' + vn++)
			})
			c.on('rollover', function () {
				c.X(20, '-');
				$l('rv: ' + rvn++)
			})
			c.on('mouseout', function () {
				c.Y(10, '+');
				$l('o: ' + on++)
			})
			c.on('rollout', function () {
				c.Y(20, '-');
				$l('ro: ' + ron++)
			})
		}).MV(40)
		stage.container(function (container, stage) {
			container.X(700)
			container.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			container.on('mouseover', function () {
				$l('mouseover')
				this.sXY(.01, '+')
			})
			container.on('rollover', function () {
				$l('rv')
				this.sXY(.01, '+')
			})
			container.on('mouseout', function () {
			})
			container.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		stage.container(function (container, stage) {
			container.x = 1400
			container.bm('me', function (bm) {
				
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
}