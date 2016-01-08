dobPt()
globComp()
stage()
matrx()
bitmap()
text()
domElOb()
container()
function dobPt() {
	dO.X = function (x, duration) {//can add easing :)
		var g = G(arguments)
		if (U(x)) {
			return this.x
		}
		if (g.p) {
			x = this.x + x
		}
		else if (g.n) {
			x = this.x - x
		}
		else if (g.m) {
			x = this.x * x
		}
		else if (g.d) {
			x = this.x / x
		}
		if (N(duration)) {
			tw([this], [{x: x}, duration])
		}
		//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
		else {
			this.x = x
		}
		return this
		dO.XAlt = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			if (N(dur)) {
				$tw([i], [{x: x}, dur]);
				return i
			}
			return i
		}
	}
	dO.Y = function (y, dur) {
		var i = this, g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(dur)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.XY = function (x, y) {
		var i = this, g = G(arguments), v
		if (g.u) {
			return {x: i.x, y: i.y}
		}
		v = V(g.f, g.s)
		x = v.x
		y = N(v.y, v.x)
		return i.X(x).Y(y)
		dO.XYalt = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
		}
	}
	dO.W = function (a) {
		var i = this
		if (U(a)) {
			var bds = i.getBounds()
			if (bds) {
				return bds.width * i.scaleX
			}
			return
		}
		i.sX(i.scaleX * a / i.W())
		return i
	}
	dO.H = function (a) {
		var i = this
		if (U(a)) {
			if (this.getBounds()) {
				return this.getBounds().height * this.scaleY
			}
			return
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.WH = function (w, h) {
		var i = this
		return this.W(w).H(h || w)
	}
	dO.toFront = function () {
		return this.ix(this.sib().length - 1)
		toFront = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
		dO.toFrontAlt = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
	}
	dO.in = dO.within = dO.inStage = function () {
		var ob = this,
				st = ob.st(),
				g = G(arguments),
				x = ob.x,
				y = ob.y,
				w = st.W() - 100,
				h = st.H() - 100,
				inn = x > 0 && x < w && y > 0 && y < h
		if (g.n) {
			if (!inn) {
				ob.rm()
			}
		}
		return inn
		function inStage() {
			var args = G(arguments),
					x = this.x,
					y = this.y,
					stg = this.stg(),
					w = stg.W() - 100,
					h = stg.H() - 100,
					withinStage = x > 0 && x < w && y > 0 && y < h
			if (args.n) {
				if (!withinStage) {
					this.remove()
				}
			}
			return withinStage
			var i = this
			var s = i.S(), wthnS
			wthnS = i.x > 0 && i.y > 0
			&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
			if (g.n && !wthnS) {
				s.rm()
			}
			return wthnS
		}
	}
	dO._hT = function () {
		return this.hitTest.apply(arguments, this)
	}
	dO.hT = function (x, y) {
		function alt() {
			dO._hT = function () {
				return this.hitTest.apply(arguments, this)
			}
			dO.hT = function (x, y) {
				var dO = this
				if (cjs.iDO(x)) {
					return dO.hT(
							dO.gTL(x)
					)
				}
				if (O(x)) {
					y = x.y;
					x = x.x
				}
				return dO._hT(x, y)
			} //= dO.test
		}
		
		var dO = this
		if (cjs.iDO(x)) {
			return dO.hT(
					dO.gTL(x)
			)
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return dO._hT(x, y)
	}
	dO.lTL = function () {
		return this.localToLocal.apply(this, arguments)
	}
	dO.lTG = function () {
		return this.localToGlobal.apply(this, arguments)
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.pa = dO.P = function () {
		return this.parent
	}
	dO.sib = function () {
		return this.P().ch()
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.belowStg = function () {
		return this.y > this.getStage().H()
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.rm = dO.remove = function () {
		var dO = this
		if (O(dO) && O(dO.parent)) {
			dO.parent.removeChild(dO)
		}
		return dO
	}
	dO.hd = dO.hide = function () {
		return this.vsb(0)
	}
	dO.vis = dO.vsb = function (vsb) {
		var dO = this
		if (U(vsb)) {
			return dO.visible
		}
		dO.visible = vsb ? true : false
		return dO
	}
	dO.St = dO.S = dO.st = dO.stg = function () {
		return this.getStage()
	}
	dO.gTL = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return this.globalToLocal(x, y)
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
}
function globComp() {
	dO.cO = dO.compOp = function (compOp) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.compositeOperation
		}
		dO.compositeOperation = compOp
		return dO
	}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
	dO.Ds = dO.dO = function () {
		return this.compOp('destination-out');
	}
	dO.dS = dO.dI = function () {
		return this.compOp('destination-in')
	}
	dO.sD = dO.sI = function () {
		this.compOp('source-in');
		return this
	}
	dO.Sd = dO.sO = function () {
		this.compOp('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
	dO.ds = dO.dV = function () {
		this.compOp('destination-over');
		return this
	}
	dO.SD = dO.sT = dO.sA = function () {
		this.compOp('source-atop');
		return this
	}
	dO.DS = dO.dT = dO.dA = function () {
		this.compOp('destination-atop');
		return this
	}
	dO.li = function () {
		this.compOp('lighter');
		return this
	}
	dO.co = function () {
		this.compOp('copy');
		return this
	}
	dO.xo = function () {
		this.compOp('xor');
		return this
	}
}
function stage() {
	st.W = function (a) {
		if (U(a)) {
			return this.canvas.width
		}
		this.canvas.width = a
		return this
	}
	st.H = function (a) {
		if (U(a)) {
			return this.canvas.height
		}
		this.canvas.height = a
		return this
	}
	st.WH = function (w, h) {
		var st = this;
		if (U(w)) {
			return V(st.W(), st.H())
		}
		if (N(w)) {
			st.W(w)
		}
		if (N(h)) {
			st.H(h)
		}
		;
		return st
	}
	st.hW = function () {
		return this.W() / 2
	}
	st.hH = function () {
		return this.H() / 2
	}
	st.trDr = function () {
		var st = this
		st._md = 0
		st.MD(function () {
			st._md = 1
		})
		st.MU(function () {
			st._md = 0
		})
		return this
	}
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
	st.aC = st.auCl = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.autoClear
		}
		st.autoClear = g.f ? true : false
		return st
	}
	st.tOU = st.tkOUpd = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.tickOnUpdate
		}
		st.tickOnUpdate = g.f ? true : false
		return st
	}
	st.tk = function (ms) {
		var st = this, g = G(arguments)
		st.tk.apply(st, g)
		return st
	}
	st.cc = function () {
		return this.cacheCanvas
	}
	st.du = st.tDU = function (ms) {
		var st = this,
				g = G(arguments)
		// same as? return this.canvas.toDataURL()
		st.toDataURL.apply(st, g)
		return st
	}
	st.snap = function (f) {
		$.post('/img', {
			d: this.toDataURL()//, dats: o.x.dats
		})
		sec(f)
		return this
	}
	st.cv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.canvas
		}
		st.canvas = g.f
		return st
	}
	st.tabs = st.ab = st.abs = function (x, y) {
		this.can.abs(x, y);
		return this
	}
	st.sTPE = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.snapToPixelEnabled
		}
		st.snapToPixelEnabled = g.f ? true : false
		return st
	}
	St = $St = function () {

//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
		__$St = function (cv) {
			return new cj.St(O(cv) ? $0(cv) : cv)
		}
		var g = G(arguments)
		if (g.d) {
			$.E()
		}
		var cv = g.A ? g.f[0] :
				g.O || $.isCvId(g.f) ? g.f :
						$.c(g.f ? g : 'o')
		var st = __$St(cv)//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
		if (!g.n) {
			st.t()
			st.cv = st.c = st.can = $(st.canvas)
			st.cv0 = st.cv[0]
			st.xc = st.cv0.getContext('2d')
			s = stage = window.st = st
			lib = {}
			images = img = {}
			loader = new cjs.LoadQueue(false);
			h = $h(0, 0).a2(st).drag()
			h.graphics.C('r', 'b', 20)
		}
		if (g.m) {
			st.b('me')
		}
		return st
		// = _$St = $StCv = cjs.stg = cjs.stage = St = St$ = $S$ = cjs.S = __St = __S
	}
	st.Sh = function () {
		return $Sh.apply(null, arguments).a2(this)
	}
	st.GX = function () {
		return this.Gx().FS()
	}
	st.Gx = function () {
		return $Sh.apply(null, arguments).drag()
				.a2(this).graphics
	}
	$rCt = function () {
		return 'this is a recGx in a container so it can be moved relative to something..' +
				'(its like a fx rel to a bd)'
	}
	dO.a2 = function (ct, x, y) {
		var dO = this
		ct.A(dO)
		if (N(x)) {
			dO.X(x)
		}
		if (N(y)) {
			dO.Y(y)
		}
		return dO
	}
	CVTXX = TESTCANVAS = function () {
		return $.d().A($.c(960, 400)
				.id("testCanvas"))
	}
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
function bitmap() {
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
	$L('bmApps', 'matrx')
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
}
function text() {
	tx.tA = tx.align = tx.textA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	tx.mW = tx.measW = tx.measuredW = function () {
		return this.getMeasuredWidth()
	}
	tx.oL = tx.outL = tx.ol = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	tx.bl = tx.textB = t.baseline = tx.tB = function (bl) {
		var g = G(arguments)
		if (g.p) {
			bl = 'bottom'
		}
		if (g.n) {
			bl = 'top'
		}
		if (bl === '') {
			bl = 'middle'
		}
		if (U(bl)) {
			return this.textBaseline
		}
		this.textBaseline = bl
		return this
	}
	tx.lH = tx.lineH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}//o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		this.lineHeight = lH
		return this
	}
	tx.lW = tx.lineW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	tx.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		return this.lW(w).lH(h)
	}
	cj.chalk = function (text, color) {
		color = oO('c', color || 'white')
		if (O(text)) {
			text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		}
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	cj.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
	ct.Tx = ct.T = function () {
		var ct = this, g = G(arguments), o, t
		o = g.O ? g.f :
				g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
						N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
								_.x({t: g.f, f: g.s, c: g.t},
										N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
										{y: g[3]})
		o.f = N(o.f) ? o.f + 'px Arial' : o.f
		o.f = o.f || '50px Arial'
		o.c = oO('c', o.c || 'y')
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.t = String(o.t)
		t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
		if (g.n) {
			t.regX = t.W() / 2
		}
		t.bl('middle')
		if (g.p) {
			t.bl('alphabetic')
		}
		if (!g.n) {
			t.rX(t.mW() / 2)
		}
		return t
		//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
		old = function () {
			ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				var ct = this, o, cX
				st = this.getStage()
				cX = st.cen().x
				o = (N(x) && U(y)) ? {y: x, x: cX} :
						U(x) ? {x: cX, y: 100} :
						{t: t, f: f, c: c, x: x, y: y}
				var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				ct.A(t)
				return t
			}
		}
		ct.T = ct.Tx = function () {
			var ct = this, g = G(arguments), o, t
			o = g.O ? g.f :
					g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
							N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
									_.x({t: g.f, f: g.s, c: g.t},
											N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
											{y: g[3]})
			t = $T(String(o.t), (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', oO('c', o.c || 'y'))
			if (g.n) {
				t.regX = t.W() / 2
			}
			return g.p ? t.XY(N(o.x, 0), N(o.y, 0)).a2(ct).dg().bl('alphabetic') : !g.n ? t.rX(t.mW() / 2) : t.bl('middle')
		}
//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
//o.x = N(o.x, this.St().cen().x)
		/* if(g.p){
		 tO = cjs.T(g.f, 'y', '40px Arial')
		 if(N(g[3])){ tO.XY(g[3], g[4]) }
		 return tO
		 }*/
		old = function () {
			ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				var ct = this, o, cX
				st = this.getStage()
				cX = st.cen().x
				o = (N(x) && U(y)) ? {y: x, x: cX} :
						U(x) ? {x: cX, y: 100} :
						{t: t, f: f, c: c, x: x, y: y}
				var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				ct.A(t)
				return t
			}
		}
	}
	ct.chalk = function () {
		var ht = 50, g = G(arguments), ct = this, tx
		_.e(g, function (t) {
			tx = cjs.chalk(t).Y(ht).X(50 - ct.X())
			ht += 40
			ct.A(tx)
		})
		ct.chalk1 = function () {
			var ct = this, g = G(arguments), h = 0
			g.e(function (t) {
				ct.T(t, 26, 'w', 475, h += 35)
			})
			return ct
		}
		return tx
	}
	ct.text = function (text, font, color, x, y) {
		var centX = this.stg().center().x
		//this.A(_$Tx(text, font, color).XY(x, y))
		if (N(x) && U(y)) {
			y = x;
			x = centX
		}
		else if (U(x)) {
			x = centX;
			y = 100
		}
		this.A(cjs.text(text, font, color).XY(x, y))
		return text
	}
	ct.pen = function self(arg) {
		var ct = this
		if (O(self.text)) {
			self.text.rm()
		}
		self.text = cjs.chalk(arg).Y(50).X(50 - ct.X())
		ct.A(self.text)
		return self.text
	}
	tx.F = tx.fo = function (font) {
		if (U(font)) {
			return this.font
		}
		if (N(font)) {
			font += 'px Arial'
		}
		this.font = font
		return this
		t.F1 = t.fo1 = function (f) {
			if (U(f)) {
				return this.font
			}
			this.font = N(f) ? f + 'px Arial' : f
			return this
		}
	}
	tx.C = tx.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	tx.Tx = tx.tx = tx.T = function (text) {
		if (U(text)) {
			return this.text
		}
		this.text = text
		return this
	}
	$Tx = $T = function (a, b, c, d, e) {
		_$Tx = function (a, b, c, d, e, f) {
			return new cj.Tx(a, b, c, d, e, f)
			cjs.text = function (text, color, font, x, y) {
				//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				return _$Tx(text,
						N(font || '20px Arial') ? font + 'px Arial' : font
						, oO('c', color || 'z')).XY(N(x, 100), N(y, 100))
			}
			cjs.T = cjs.Tx = function (text, font, color, x, y) {//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				if (N(font)) {
					font = font + 'px Arial'
				}
				textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
				textOb.regX = textOb.W() / 2
				return textOb.XY(N(x, 100), N(y, 100))
			}
			cjs.T = cjs.Tx = function (text, font, color, x, y) {
				//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
				if (N(font)) {
					font = font + 'px Arial'
				}
				textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
				textOb.regX = textOb.W() / 2
				return textOb.XY(N(x, 100), N(y, 100))
			}
			$Tx1 = function (a, f, c, x, y) {
				var t
				if (N(f)) {
					f = String(f) + "px Arial"
				}
				if (S(c)) {
					c = oO('c', c)
				}
				t = _$Tx(a, f, c)
				if (O(x)) {
					if (F(x.cen)) {
						x = x.cen()
					}
					y = x.y
					x = x.x
				}
				if (N(x)) {
					t.X(x)
				}
				if (N(y)) {
					t.Y(y)
				}
				return t
			}
			$T1 = function (a, f, c, x, y) {
				var t
				if (N(f)) {
					f = String(f) + "px Arial"
				}
				if (S(c)) {
					c = oO('c', c)
				}
				t = _$Tx(a, f, c)
				if (O(x)) {
					if (F(x.cen)) {
						x = x.cen()
					}
					y = x.y
					x = x.x
				}
				if (N(x)) {
					t.X(x)
				}
				if (N(y)) {
					t.Y(y)
				}
				return t
			}
		}
		var g = G(arguments), o, t, tx
		o = g.O ? g.f : {t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
		tx = _$Tx(o.t, (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', o.c || 'y').XY(N(o.x, 600), N(o.y, 100)).dg()
		if (g.n) {
			t.regX = t.W() / 2
		}
		if (g.p) {
			tx.bl('alphabetic')
		}
		return tx.bl('middle')
	}
}
function domElOb() {
	createjs.element = function (a) {
		return new createjs.DOMElement(a)
	}
	createjs.element = function (a) {
		return new createjs.DOMElement(a)
	}
}
function container() {
	ct.W = function (w) {
		var st = this.stage
		var can = st.canvas
		if (U(w)) {
			return can.width
		}
		can.width = w
		return this
	}
	ct.H = function (w) {
		var can = this.getStage().canvas
		if (U(w)) {
			return can.height
		}
		can.height = w
		return this
	}
	ct.t = ct.oT = ct.tick = function (fn) {
		//cjs.Ticker.addEventListener('tick', this); return this
		var g = G(arguments)
		if (F(fn)) {
			if (!g.n) {
				fn()
			}
			return this.on('tick', fn)
		}
		else {
			T.on('tick', this);
			return this
		}
	}
	ct.xT = function (fn) {
		this.off('tick', fn)
		return this
	}
	ct.au = function (au) {
		this.autoClear = au ? true : false;
		return this
	}
	ct.noAuCl = function () {
		this.autoClear = false;
		return this
	}
	ct.u = ct.upd = function () {
		this.update();
		return this
	}
	ct._A = function () {
		return this.addChild.apply(this, arguments)
	}
	ct.A = function (arg, y) {
		var ct = this, g = G(arguments)
		var bd = $('body')
		var st = ct.getStage()
		if (g.u) {
			if (g.u && st) {
				//must be stage??
				bd.A(st ? st.canvas : ct.canvas)
			}
		}
		else if (g.N_) {
			bd.A(ct.canvas).abs().XY(g.f, g.s)
		}
		else {
			_.e(g, function (ch) {
				ct._A(ch)
			})
		}
		return ct
	}
	cjs.rmOb = function (ob) {
		if (cjs.iDO(ob)) {
			ob.rm()
		}
	}
	ct.C = ct.bgC = function (c) {
		var ct = this
		$(ct.canvas).C(c)
		return ct
	}
	ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
		return this.stage
	}
	ct.bgI = ct.bg = function (i) {
		var ct = this
		ct.bm(i, function (b) {
			ct.setChildIndex(b, 0) //ct.ch(b, 0)
		})
		return ct
	}
	ct.mc = function (x, y) {
		var ct = this, g = G(arguments), mc
		mc = cjs.MovieClip.apply(cjs, g)
		this.A(mc).XY(N(x, 100), N(y, 100))
		return mc
	}
	kids()
	add()
	function kids() {
		ct.sort = ct.soCh = function () {
			this.sortChildren.apply(this, arguments)
			return this
		}
		ct.swap = ct.swCh = function () {
			this.swapChildren.apply(this, arguments)
			return this
		}
		ct.swapAt = ct.swChAt = function () {
			this.swapChildrenAt.apply(this, arguments)
			return this
		}
		ct.clr = ct.xCh = ct.removeAll = ct.E = function () {
			var ct = this
			ct.each(function (ch) {
				ch.remove()
			})
			return ct
		}
		ct.numCh = ct.num = ct.nCh = function () {
			return this.numChildren
		}
		ct._ch = function () {
			return this.children
		}
		ct.sCI = ct.sChIx = function () {
			this.setChildIndex.apply(this, arguments);
			return this
		}
		ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {
			var ct = this, g = G(arguments)
			//1) set a child's index
			if (N(g.s)) {
				ct.sChIx(g.f, g.s)
				return ct
			}
			var CH = []
			// get... array of all children..
			_.e(ct._ch(), function (ch) {
				CH.push(ch)
			})
			// 2)iterate a fn over them
			if (g.F) {
				_.e(CH, function (ch) {
					fn(ch, CH)
				})
				return ct
			}
			// 3) just return the children
			return CH
		}
	}
	
	function add() {
		ct.ct = function (x, y) {
			var ct = this, g = G(arguments), o
			o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
			var ct1 = $Ct().a2(ct)
			if (o.fn) {
				o.fn(ct1, ct)
			}
			else if (N(o.x)) {
				ct1.XY(o.x, o.y)
			}
			if (g.p) {
				cjs.bindSlide(ct1)
			}
			return ct1
			function alt() {
				ct.addContainer = ct.ct = function (fn) {
					var ct = this, g = G(arguments)
					var f = g[0]
					var ct1 = new cjs.Container().a2(ct)
					if (fn) {
						fn(ct1, ct)
					}
					if (g.p) {
						cjs.bindSlide(ct1)
					}
					return ct
				}
			}
		}
		ct.Ct = function () {
			var ct = this
			ct.ct.apply(ct, arguments)
			return ct
		}
	}
	
	$Ct = cjs.container = cjs.ct = function (a) {
		return new cjs.Container(a)
	}
	ct.N = function (n) {
		var s = this;
		if (U(n)) {
			return s.nextStage
		}
		s.nextStage = n;
		return s
	}
	ct.tkCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.tickChildren
		}
		ct.tickChildren = g.f ? true : false
		return ct
	}
}
function dittoContaner() {
	function ctPt() {
		ct.t = ct.oT = ct.tick = function (fn) {
			//cjs.Ticker.addEventListener('tick', this); return this
			var g = G(arguments)
			if (F(fn)) {
				if (!g.n) {
					fn()
				}
				return this.on('tick', fn)
			}
			else {
				T.on('tick', this);
				return this
			}
		}
		ct.xT = function (fn) {
			this.off('tick', fn)
			return this
		}
		ct.au = function (au) {
			this.autoClear = au ? true : false;
			return this
		}
		ct.noAuCl = function () {
			this.autoClear = false;
			return this
		}
		ct.u = ct.upd = function () {
			this.update();
			return this
		}
		ct._A = function () {
			return this.addChild.apply(this, arguments)
		}
		ct.A = function (arg, y) {
			var ct = this, g = G(arguments)
			var bd = $('body')
			var st = ct.getStage()
			if (g.u) {
				if (g.u && st) {
					//must be stage??
					bd.A(st ? st.canvas : ct.canvas)
				}
			}
			else if (g.N_) {
				bd.A(ct.canvas).abs().XY(g.f, g.s)
			}
			else {
				_.e(g, function (ch) {
					ct._A(ch)
				})
			}
			return ct
		}
		cjs.rmOb = function (ob) {
			if (cjs.iDO(ob)) {
				ob.rm()
			}
		}
		ct.C = ct.bgC = function (c) {
			var ct = this
			$(ct.canvas).C(c)
			return ct
		}
		ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
			return this.stage
		}
		ct.bgI = ct.bg = function (i) {
			var ct = this
			ct.bm(i, function (b) {
				ct.setChildIndex(b, 0) //ct.ch(b, 0)
			})
			return ct
		}
		ct.mc = function (x, y) {
			var ct = this, g = G(arguments), mc
			mc = cjs.MovieClip.apply(cjs, g)
			this.A(mc).XY(N(x, 100), N(y, 100))
			return mc
		}
		kids()
		add()
		function kids() {
			ct.sort = ct.soCh = function () {
				this.sortChildren.apply(this, arguments)
				return this
			}
			ct.swap = ct.swCh = function () {
				this.swapChildren.apply(this, arguments)
				return this
			}
			ct.swapAt = ct.swChAt = function () {
				this.swapChildrenAt.apply(this, arguments)
				return this
			}
			ct.clr = ct.xCh = ct.removeAll = ct.E = function () {
				var ct = this
				ct.each(function (ch) {
					ch.remove()
				})
				return ct
			}
			ct.numCh = ct.num = ct.nCh = function () {
				return this.numChildren
			}
			ct._ch = function () {
				return this.children
			}
			ct.sCI = ct.sChIx = function () {
				this.setChildIndex.apply(this, arguments);
				return this
			}
			ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {
				var ct = this, g = G(arguments)
				//1) set a child's index
				if (N(g.s)) {
					ct.sChIx(g.f, g.s)
					return ct
				}
				var CH = []
				// get... array of all children..
				_.e(ct._ch(), function (ch) {
					CH.push(ch)
				})
				// 2)iterate a fn over them
				if (g.F) {
					_.e(CH, function (ch) {
						fn(ch, CH)
					})
					return ct
				}
				// 3) just return the children
				return CH
			}
		}
		
		function add() {
			ct.ct = function (x, y) {
				var ct = this, g = G(arguments), o
				o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
				var ct1 = $Ct().a2(ct)
				if (o.fn) {
					o.fn(ct1, ct)
				}
				else if (N(o.x)) {
					ct1.XY(o.x, o.y)
				}
				if (g.p) {
					cjs.bindSlide(ct1)
				}
				return ct1
				function alt() {
					ct.addContainer = ct.ct = function (fn) {
						var ct = this, g = G(arguments)
						var f = g[0]
						var ct1 = new cjs.Container().a2(ct)
						if (fn) {
							fn(ct1, ct)
						}
						if (g.p) {
							cjs.bindSlide(ct1)
						}
						return ct
					}
				}
			}
			ct.Ct = function () {
				var ct = this
				ct.ct.apply(ct, arguments)
				return ct
			}
		}
	}
	
	$Ct = cjs.container = cjs.ct = function (a) {
		return new cjs.Container(a)
	}
	ct.N = function (n) {
		var s = this;
		if (U(n)) {
			return s.nextStage
		}
		s.nextStage = n;
		return s
	}
}
