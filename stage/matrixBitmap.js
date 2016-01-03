$L( 'bmApps')
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
 
 
function bmApps(){
	 $Ldr('LAYS', function (q) {
		 me = q.bm('me', $St()).scXY(3);
		 guy = q.bm('guy', st).scXY(.5).dg()
		 $t(function () {
			 me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
		 })
		 $.bt('s.sXY(2)', function () {
			 st.sXY(2)
		 })
	 })
	 $Ldr('WINDG', function (ld) {
		 ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
				 .mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
	 })
	 $Ldr('LBF', function (ld) {
		 $St().h('+')
				 .C('z').dr(0, 0, 40, 40)
				 .bf(ld.get('me'),
				 -100).dr(0, 0, 500, 200)
				 .dr(100, 100, 500, 200)
	 })
	 $Ldr('HBS', function (ld) {
		 $St(1000, 500).h(810, 410, '+').l(8)
				 .bf(ld.get('chicks'),
				 $Mx(1, 0, 0, 1, -800, -400)).rec(1600, 800)
		 ch = ld.get('chicks')
		 me = ld.get('me')
		 function Ch(x, y) {
			 var h = st.h(x, y).l(8)
			 h.graphics.bf(ch)
			 h.bs(me)
			 cjs.SL(h)
			 return h
		 }
		
		 Ch(200, 200).rec(200, 300)
		 Ch(400, 250).rec(200, 300)
		 Ch(600, 250).rec(200, 300)
		 Ch(750, 350).rec(200, 300)
		 Ch(900, 250).rec(200, 300)
	 })
	 $Ldr('BFS', function (ld) {
		 $St().h('+').l(20).bf(ld.get('me')).bs(ld.get('chicks'))
				 .rec(200, 200, 200, 300).rec(400, 250, 200, 300)
				 .rec(600, 250, 200, 300).rec(750, 350, 200, 300)
				 .rec(900, 250, 200, 300)
		 var Ch = function () {
			 var h = st.h('+').l(20)
					 .bf(ld.get('chicks')).bs(ld.get('me'))
			 // h.rec.apply(ch, arguments)
			 return h
		 }
		 Ch().rec(200, 200, 200, 300)
		 Ch().rec(400, 250, 200, 300)
		 Ch().rec(600, 250, 200, 300)
		 Ch().rec(750, 350, 200, 300)
		 Ch().rec(900, 250, 200, 300)
	 })
	 $Ldr('PFC', function (ld) {
		 $St()
		 h.bf($(ld.get('me')).A()[0])
				 .cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
					 [800, 100], [700, 300], [500, 120]]).mt([[750, 20],
					 [900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
					 [800, 100], [700, 300], [500, 120]], 0, 50)
				 .cir({x: 550, y: 20, r: 20, c: 'b'})
				 .cir({x: 800, y: 100, r: 30, c: 'b'})
				 .cir({x: 700, y: 300, r: 20, c: 'g'})
				 .cir({x: 500, y: 120, r: 30, c: 'g'})
	 })
	 $Ldr('HBC', function (ld) {
		 h = $St().h('+')
		 h.bC({
			 circs: [
				 {x: 200, y: 100, r: 150},
				 {r: 100}, {x: 300}
			 ]
		 })
	 })
	 COOL = function () {
		 pt = 0
		 h = $St().mO(1).h()
		 h.graphics._ss('g', 40, 's', 'b', 1)
		 st.MD(function () {
			 pt = st.m()
		 })
		 st.MU(function () {
			 pt = 0
		 })
		 st.MM(function () {
			 if (pt) {
				 h.line(pt, pt = st.m())
			 }
		 })
		 st.bm('chicks', function (b) {
			 b.XY(500, 300).al(.2)
		 })
	 }
	 PROMOTE = function () {
		 z()
		 cjs.utils()
		 function ClassA(name) {
			 this.name = name
		 }
		
		 ClassA.prototype.greet = function () {
			 return "Hello " + this.name
		 } //a = new ClassA('john')
		 function ClassB(name, punctuation) {
			 this.ClassA_constructor(name)
			 this.punctuation = punctuation
		 }
		
		 cjs.extend(ClassB, ClassA)
		 ClassB.prototype.greet = function () {
			 return this.ClassA_greet() + this.punctuation
		 }
		 cjs.promote(ClassB, "ClassA")
		 b = new ClassB("World", "!?!")
		 $l(b.greet())  // Hello World!?!
	 }
	 TWOSTAGES = function () {
		 z()
		 $.hdr().K("EaselJS").A(
				 $.h1('nextStage'),
				 $.p("This is an example")).A()
		 c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
				 .right(0).bor('1px solid grey').A() // background: 'none',
		 c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		 topStage = stageSetup("canvasTwo", handleEvt)
				 .N("topStage").eMO()
				 .A(makeSquare(375, 30, "pink", handleEvt))
				 .next(bottomStage)
		 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		 function stageSetup(canvasName, handler) {
			 s = stage = new cjs.Stage(canvasName).tick()
			 //stage.addEventListener("stagemousemove", handler);	// too noisy
			 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
				 s.on(ev, handler)
			 })
			 s.log = []
			 return s
		 }
		
		 function makeSquare(x, y, color, handler) {
			 var shape = cjs.shape().N('square').XY(x, y)
			 shape.graphics.f(color).dr(0, 0, 135, 135)
			 var cont = cjs.ct().N('container').A(shape)
			 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				 cont.on(ev, handler)
			 })
			 cont.cursor = "pointer"
			 return cont
		 }
		
		 function handleEvt(evt) {
			 var target = evt.target,
					 stage = target.getStage(),
					 log = stage.log
			 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
			 + " y:" + evt.stageY.toFixed(0))
			 while (log.length > 12) {
				 log.shift()
			 }
			 stage.text.text = log.join("\n")
			 if (evt.type == "mouseover") {
				 target.alpha = 0.5
			 }
			 if (evt.type == "mouseout") {
				 target.alpha = 1
			 }
		 }
	 }
	 DISTRACT = function () {
		 z()
		 $.d().A($.c(960, 400).id("testCanvas"))
		 cjs.sharedCode()
		 cjs.utils()
		 cjs.slider()
		 examples.showDistractor()
		 st = new cjs.Stage("testCanvas")
	 }
	 WINDING = function () {
		 cjs.Shape.prototype.same = function () {
			 return $h(this)
		 } //h.copy
		 cjs.manifest = function (func) {
			 var q = cjs.loadQueue()
			 q.complete(
					 function () {
						 func(function (getResult) {
							 return q.getResult(getResult)
						 })
					 })
					 .manifest([{
						 id: "chicks", src: "/chicks.png"
					 },
						 {id: "me", src: "/me.png"},
						 {id: "guy", src: "/guy.png"},
						 {id: "sun", src: "/sun.png"}])
		 }
		 cjs.manifest(function (q) {
			 $.hdr().A($.h1('grahics winding')).A()
			 $.d().A($.c(960, 400)
					 .id("testCanvas"))
			 st = s = stage = $St(["testCanvas"])
			 h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
			 cjs.bm = function (img) {
				 var g = G(arguments), img = g[0],
						 bm = new cjs.Bitmap(img)
				 if (g.N) {
					 bm.rC()
				 }
				 return bm
			 } //warning: can't yet change to $Bm!!
			 bm = cjs.bm(q("chicks"), '-')
					 .a2(s).X(470).drag()
			 bm.mask = h.same().X(470)
		 })
	 } //Uncaught TypeError: Cannot read property 'image' of undefined
	 BF0 = HBF = function () {
		 h = $St().h(300, 300)
		 h.bf('me', function (h) {
			 h.dc(300).dg()
		 })
	 }
	 BF4 = TFM = function () {
		 $.i('chicks', function (img) {
			 h = $St().h(100, 100, '+').sC('b', 50)
			 h.bf(img, null, $tMx(210, 230, .5, .5))
			 h.dc(100, 100, 100)
		 })
	 }
	 BF2 = LDB = function () {
		 $Ld('me', function (ld) {
			 $St().h(300, 200, '+').bf(ld.i('me')).dc(100)
			 st.h(500, 100, '+').bf('me').dc(100)
		 })
	 }
	 BF8 = BFH = function () {
		 h = $St().h(300, 100, '+').bf({
			 i: 'me',
			 hs: [100, 300, 500, 700, 900],
			 fn: function (x) {
				 h.dc(x, 30, 120).es()
			 }
		 })
	 }
	 BF100 = BMC = function () {
		 $St().h(300, 200).bmCir({
			 circs: [{r: 100}, {x: 200, y: 200}, {}]
		 })
	 }
	 BF101 = BCS = function () {
		 $St()
		 h = st.h(100, 300).dg()
		 h.bmCir({circs: cirs})
		 h2 = st.h(700, 300).dg()
		 h2.bmCir({circs: vs})
	 }
	 QU = MF = MANIFEST = function () {
		 Q(['me', 'guy'], function (q) {
			 $St().A(me = q.bm('me'))
			 st.A(guy = q.bm('guy'))
			 guy.dg()
		 })
	 }
	 QU0 = function () {
		 Q(mf5, function () {
			 $.A(Q.i('me'))
		 })
	 }
	 QU1 = function () {
		 $Ld(mf3, function (ld) {
			 $St().A(ld.bm("me"), ld.bm("guy", 300, 300))
		 })
	 }
	 QU2 = function () {
		 $Ld(mf1, function (ld) {
			 ld.bm("myImage", $St())
		 })
	 }
	 QU3 = function () {
		 $Ld(mf2, function (ld) {
			 ld.bm("me", $St());
			 ld.bm("guy", st)
		 })
	 }
	 IT = QU4 = function () {
		 $Ld(function (ld) {
			 Q.bm("me", $St());
			 Q.bm("guy", st, 300, 300)
		 }).mf("me", guyIt)
	 }
	 $.me('ME', function (me) {
		 gx = $St().Gx()
				 .SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
				 .S()._bf(me).dc(400, 400, 200)
	 })
	 
}