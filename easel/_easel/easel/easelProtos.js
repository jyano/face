function protos() {
	function containerProto() {
		$l('ctProto')
		ct = cjs.Container.prototype
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
		ct.u = ct.upd = function () {
			this.update();
			return this
		}
		ct.xCh = ct.removeAll = ct.clr = ct.E = function () {
			var ct = this
			ct.each(function (ch) {
				ch.remove()
			})
			return ct
		}
		ct.tkCh = function () {
			var ct = this, g = G(arguments)
			if (g.u) {
				return ct.tickChildren
			}
			ct.tickChildren = g.f ? true : false
			return ct
		}
		ct.moCh = ct.muCh = ct.mouCh = function () {
			var ct = this, g = G(arguments)
			if (g.u) {
				return ct.mouseChildren
			}
			ct.mouseChildren = g.f ? true : false
			return ct
		}
		ct.num = ct.nCh = ct.numCh = function () {
			return this.numChildren
		}
		ct.gOUPs = function () {
			return this.getObjectsUnderPoint.apply(this, arguments)
		}
		ct.gOUP = function () {
			return this.getObjectsUnderPoin.apply(this, arguments)
		}
		ct.soCh = ct.sort = function () {
			this.sortChildren.apply(this, arguments)
			return this
		}
		ct.swCh = ct.swap = function () {
			this.swapChildren.apply(this, arguments)
			return this
		}
		ct.swChAt = ct.swapAt = function () {
			this.swapChildrenAt.apply(this, arguments)
			return this
		}
		ct_ch = function () {
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
		ct.cen = ct.pt = ct.center = function () {
			return V(this.W() / 2, this.H() / 2)
		}
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
		}
		ct.Ct = function () {
			var ct = this
			ct.ct.apply(ct, arguments)
			return ct
		}
		ct.C = ct.bgC = function (c) {
			var ct = this
			$(ct.canvas).C(c)
			return ct
		}
		ct.cX = function () {
			return this.St().cen().x
		}
		ct.cY = function () {
			return this.St().cen().y
		}
		ct.t = ct.tick = function () {
			cjs.Ticker.addEventListener('tick', this)
			return this
		}
		ct.t = ct.oT = ct.tick = function (fn) {
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
		ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
			return this.stage
		}
		ct.N = function (n) {
			var s = this;
			if (U(n)) {
				return s.nextStage
			}
			s.nextStage = n;
			return s
		}
		ct.cX = function () {
			return this.St().cen().x
		}
		ct.cY = function () {
			return this.St().cen().y
		}
		ct.noAutoClear = function () {
			this.autoClear = false
			return this
		}
		ct.eMO = function (en) {
			this.enableMouseOver(en ? true : false);
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
		ct.h = function () {
			var ct = this,
					h = $H.apply($H, arguments)
			ct.A(h)
			return h
		}
		ct.cir = function () {
			var h = this.h()
			return h.cir.apply(h, arguments)
		}
		ct.cir = function () {
			var ct = this, g = G(arguments),
					h = this.h(), o
			o = g.O ? g.f :
					N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
					{r: g.f, c: g.s}
			o.y = N(o.y, 0);
			o.x = N(o.x, 0)
			o.r = N(o.r, 50)
			h.c(o.c)
			h.dc(o.x, o.y, o.r)
			return h
		}
		ct.h = function () {
			var ct = this,
					h = $H.apply($H, arguments)
			ct.A(h)
			return h
		}
		ct.poly = function () {
			var ct = this // ?
			var h = ct.h()
			h.poly.apply(h, arguments)
			return h
		}
		ct.pol = function () {
			var ct = this, g = G(arguments), p,
					h = ct.h()
			if (N(g.f)) {
				h.XY(
						g.shift(),
						g.shift())
			}
			p = $a(h, 'pol', g)
			if (g.p) {
				p.drag()
			}
			return p
		}
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
		ct.cir = function () {
			var ct = this, g = G(arguments),
					h = this.h(), o
			o = g.O ? g.f :
					N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
					{r: g.f, c: g.s}
			o.y = N(o.y, 0);
			o.x = N(o.x, 0)
			o.r = N(o.r, 50)
			h.c(o.c)
			h.dc(o.x, o.y, o.r)
			return h
		}
		ct.cir = function () {
			var h = this.h()
			return h.cir.apply(h, arguments)
		}
		ct.circle = function (x, y, rad, color) {
			this.A(
					cjs.circle(x, y, rad, color)
			)
			return this
		}
		ct.circle = function (x, y, rad, color) {
			this.A(
					cjs.circle(x, y, rad, color)
			)
			return this
		}
		ct.circle = function (x, y, rad, color) {
			this.A(
					cjs.circle(x, y, rad, color)
			)
			return this
		}
		ct.shape = function () {
			return cjs.shape.apply(cjs, arguments).a2(this)
		}
		ct.cir = function (x, y, r, f, s, width, opt) {
			return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
		}
		ct.poly = function () { // ?
			var h = this.shape()
			h.poly.apply(h, arguments)
			return h
		}
		ct.art = function (x, y, f, s) {
			var g = G(arguments)
			if (U(x)) {
				alert('must at LEAST define x');
				return
			}
			if (!N(x)) {
				alert('x not a number! but must be, lah');
				return
			}
			y = N(g[1]) ? g[1] : x
			f = S(g[2]) ? oO('c', g[2]) : null
			s = S(g[2]) ? oO('c', g[3]) : f
			var shp = cjs.shp(x, y, f, s)
			this.A(shp)
			if (g.p) {
				shp.drag()
			}
			return shp
		}
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
		ct.poly = function () {
			var ct = this, h = ct.h(), g = G(arguments)
			h.pol.apply(h, arguments)
			return !g.p ? h : h.drag()
		}
		ct.pol = function () {
			var ct = this, h = ct.h(), g = G(arguments)
			if (N(g.f)) {
				h.XY(g.shift(), g.shift())
			}
			var h = $a(h, 'pol', g)
			return !g.p ? h : h.drag()
		}
		ct.T = ct.Tx = function () {
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
		}
		ct.T = ct.Tx = function () {
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
		}
		ct.text = function (text, font, color, x, y) {
			var text = new cjs.Text(text, font, color).XY(x, y)
			this.A(text)
			return this
		}
		ct.text = function (text, font, color, x, y) {
			var text,
					centX = this.stg().center().x
			if (N(x) && U(y)) {
				y = x;
				x = centX
			}
			else if (U(x)) {
				x = centX;
				y = 100
			}
			text = cjs.text(text, font, color).XY(x, y)
			this.A(text)
			return text
		}
		ct.text = function (text, font, color, x, y) {
			var text = new cjs.Text(text, font, color).XY(x, y)
			this.A(text)
			return this
		}
		ct.chalk = function () {
			var ct = this, g = G(arguments),
					h = 0
			g.e(function (t) {
				ct.T(t, 26, 'w', 475, h += 35)
			})
			return this
		}
		ct.chalk = function () {
			var height = 50,
					that = this,
					text
			_.each(arguments, function (arg) {
				text = cjs.chalk(arg).Y(height).X(50 - that.X())
				height += 40
				that.A(text)
			})
			return text
		}
		ct.chalk = function () {
			var ct = this, g = G(arguments),
					h = 0
			g.e(function (t) {
				ct.T(t, 26, 'w', 475, h += 35)
			})
			return this
		}
		ct.pen = function self(arg) {
			var that = this
			if (O(self.text)) {
				self.text.remove()
			}
			self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			that.A(self.text)
			return self.text
		}
		ct.backgroundImage = function (image) {
			var that = this
			this.bm(image, function (b) {
						that.setChildIndex(b, 0)
					}
			)
			return this
		}
		ct.backgroundImage = function (image) {
			var that = this
			this.bm(image, function (b) {
						that.setChildIndex(b, 0)
					}
			)
			return this
		}
		ct.backgroundImage = function (image) {
			var that = this
			this.bm(image, function (b) {
						that.setChildIndex(b, 0)
					}
			)
			return this
		}
		ct.bgI = ct.bg = function (i) {
			var ct = this
			ct.bm(i, function (b) {
				ct.ch(b, 0)
			})
			return ct
		}
		ct.backgroundColor = function (c) {
			$(this.canvas).C(c)
			return this
		}
		ct.backgroundColor = function (c) {
			$(this.canvas).C(c)
			return this
		}
		ct.backgroundColor = function (c) {
			$(this.canvas).C(c)
			return this
		}
 
		function DITTO() {
			ct.shape = function () {
				return cjs.shape.apply(cjs, arguments).a2(this)
			}
			ct.cir = function (x, y, r, f, s, width, opt) {
				return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
			}
			ct.poly = function () { // ?
				var h = this.shape()
				h.poly.apply(h, arguments)
				return h
			}
			ct.art = function (x, y, f, s) {
				var g = G(arguments)
				if (U(x)) {
					alert('must at LEAST define x');
					return
				}
				if (!N(x)) {
					alert('x not a number! but must be, lah');
					return
				}
				y = N(g[1]) ? g[1] : x
				f = S(g[2]) ? oO('c', g[2]) : null
				s = S(g[2]) ? oO('c', g[3]) : f
				var shp = cjs.shp(x, y, f, s)
				this.A(shp)
				if (g.p) {
					shp.drag()
				}
				return shp
			}
		}
	}
	
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
	st.eMO = function (ms) {
		var st = this, g = G(arguments)
		st.enableMouseOver(ms)
		return st
	}
	st.eDE = function () {
		var st = this, g = G(arguments)
		st.enableDOMEvents.apply(st, arguments)
		return st
	}
	st.tk = function (ms) {
		var st = this, g = G(arguments)
		st.tk.apply(st, g)
		return st
	}
	st.du = st.tDU = function (ms) {
		var st = this,
				g = G(arguments)
		// same as? return this.canvas.toDataURL()
		st.toDataURL.apply(st, g)
		return st
	}
	st.sTPE = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.snapToPixelEnabled
		}
		st.snapToPixelEnabled = g.f ? true : false
		return st
	}
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	st.mMO = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.mouseMoveOutside
		}
		st.
				mouseMoveOutside = g.f ? true : false
		return st
	}
	st.mIB = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.mouseInBounds
		}
		st.mouseInBounds = g.f ? true : false
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
	st.aC = st.auCl = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.autoClear
		}
		st.autoClear = g.f ? true : false
		return st
	}
	st.hEv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.handleEvent
		}
		st.handleEvent = g.f
		return st
	}
	st.cv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.canvas
		}
		st.canvas = g.f
		return st
	}
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
	st.W = function (a) {
		if (U(a)) {
			return this.canvas.width
		}
		this.canvas.width = a;
		return this
	}
	st.H = function (a) {
		if (U(a)) {
			return this.canvas.height
		}
		this.canvas.height = a;
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
	st.ab = st.abs = function (x, y) {
		this.can.abs(x, y);
		return this
	}
	st.tabs = function (x, y) {
		this.can.abs(x, y)
		return this
	}
	st.snap = function (f) {
		$.post('/img', {
			d: this.toDataURL()//, dats: o.x.dats
		})
		sec(f)
		return this
	}
	st.Sh = function () {
		return $Sh.apply(null, arguments).a2(this)
	}
	st.Gx = function () {
		return $Sh.apply(null, arguments).drag().a2(this).graphics
	}
	st.GX = function () {
		return this.Gx().FS()
	}
	events = ['drawend',
		'drawstart',
		'mouseenter',
		'mouseleave',
		'stagemousedown',
		'stagemousemove',
		'stagemouseup',
		'tickend',
		'tickstart']
	st.Bm = function (i) {
		return $Bm(i).a2(this)
	}
	st.cc = function () {
		return this.cacheCanvas
	}
	function write() {
		p.dot = function (color, x, y) {
			var that = this, dot, tween
			if (A(color)) {
				_.each(color, function (args) {
					if (A(args)) {
						that.dot.apply(that, args)
					}
					else {
						that.dot(args)
					}
				})
				return
			}
			if (!S(color)) {
				y = x;
				x = color;
				color = 'yellow'
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : this.W() / 2
			y = N(y) ? y : this.H() / 2
			dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
			tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			dot.$$(function () {
				tween.toggle()
			})
			dot.N('dot')
			return this
		}
		p.squareDot = function (color, x, y) {
			var squareDot, tween
			if (!S(color)) {
				y = x;
				x = color;
				color = 'orange'
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 300
			y = N(y) ? y : 300
			__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
			this.A(squareDot.XY(x, y)//.drag()
			)
			//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
			// dot.$$(function(){tween.toggle()})
			return this
		}
		p.dot = function (color, x, y) {
			var that = this,
					dot,
					tween
			if (b2d.isGPoly(color)) {
				_.each(color.verts(), function (v) {
					that.dot(V(v))
				})
				return this
			}
			if (A(color)) {
				_.each(color, function (args) {
					if (A(args)) {
						that.dot.apply(that, args)
					}
					else {
						that.dot(args)
					}
				})
				return
			}
			if (!S(color)) {
				y = x;
				x = color;
				color = 'yellow'
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : this.W() / 2
			y = N(y) ? y : this.H() / 2
			dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
			tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			dot.$$(function () {
				tween.toggle()
			})
			dot.N('dot')
			return this
		}
		p.squareDot = function (color, x, y) {
			var squareDot, tween
			if (!S(color)) {
				y = x;
				x = color;
				color = 'orange'
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 300
			y = N(y) ? y : 300
			__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
			this.A(squareDot.XY(x, y)//.drag()
			)
			//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
			// dot.$$(function(){tween.toggle()})
			return this
		}
		p.chalk = function () {
			var height = 50,
					that = this,
					text
			_.each(arguments, function (arg) {
				text = cjs.chalk(arg).Y(height).X(50 - that.X())
				height += 40
				that.A(text)
			})
			return text
		}
		p.pen = function self(arg) {
			var that = this
			if (O(self.text)) {
				self.text.remove()
			}
			self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			that.A(self.text)
			return self.text
		}
		p.chalk = function () {
			var height = 50,
					that = this,
					text
			_.each(arguments, function (arg) {
				text = cjs.chalk(arg).Y(height).X(50 - that.X())
				height += 40
				that.A(text)
			})
			return text
		}
		p.pen = function self(arg) {
			var that = this
			if (O(self.text)) {
				self.text.remove()
			}
			self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			that.A(self.text)
			return self.text
		}
	}
	
	function mouse() {
		st.mX = function () {
			return this.mouseX
		}
		st.mY = function () {
			return this.mouseY
		}
		st.m = function () {
			return $Pt(this.mX(), this.mY())
		}
		st.MD = function (fn) {
			return this.on('stagemousedown', fn)
		}
		st.MM = function (fn) {
			return this.on('stagemousemove', fn)
		}
		st.MU = function (fn) {
			return this.on('stagemouseup', fn)
		}
		st.mO = function () {
			var g = G(arguments), st = this
			if (U(g[0]) || g[0]) {
				st.enableMouseOver(N(g[0]) ? g[0] : true)
			}
			else {
				st.enableMouseOver(false)
			}
			return st
		}
		st.m = function (ob) {
			//uses Point
			var st = this
			if (U(ob)) {
				return cjs.P(st.mouseX, st.mouseY)
			}
			if (O(ob)) {
				if (ob.d) {
					st.MD(ob.d)
				}
				;
				if (ob.u) {
					st.MU(ob.u)
				}
				;
				if (ob.m) {
					st.MM(ob.m)
				}
			}
			return st
		}
		st.mx = st.mX = function () {
			return this.m().x
		}
		st.my = st.mY = function () {
			return this.m().y
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
	}
	
	EASELPHYS = function () {
		i = cjs.DisplayObject.prototype
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.jX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.jY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		i.go = function () {
			$t(this.move())
		}
		$St().bm('me', function (b) {
			b.go(10, 10)
			$.t(function () {
				$l(b.inStage())
			})
		})
	}
	M2D = CJSM2D = function () {
		z()
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
	eD = cjs.EventDispatcher.prototype
	eD.dE = eD.dispatchEvent
	eD.hEL = eD.hasEventListener
	eD.O = eD.off
	eD.o = eD.on
	eD.rAEL = eD.removeAllEventListeners
	eD.rEL = eD.removeEventListener
	eD.tS = eD.toString
	eD.wT = eD.willTrigger
	eD.aEL = eD.addEventListener
	eD.init = function () {
		
		//note: 'initialize' is the only STATIC method of eventDispatcher
		this.initialize.apply(this, arguments)
		return this
	}
	function tran() {
		cjs.rtSh = cjs.rotateShake = function (bm) {
			$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
		}
		cjs.scSh = cjs.scaleShake = function (bm) {
			$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
		}
		cjs.bindScale = SC = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'), pm = oE('pm'), b2 = b2 || b,
					cp = function (n) {
						return n < .2 ? .2 : n > 2 ? 2 : n
					}
			return b.on(d,
					function (e) {
						var X = e.rawX, Y = e.rawY,
								sx = b2.scaleX,
								sy = b2.scaleY
						b.on(pm,
								function (e) {
									if (g.n) {
										b2.sXY(cp(sx + (
												(e.rawX - X) / 200)),
												cp(sy - ((e.rawX - X) / 200))
										)
									}
									else if (g.p) {
										cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
										cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
									}
									else {
										b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									}
								})
					}
			)
		}
		cjs.bindSkew = SK = function (b) {
			var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
			return b.on(d,
					function (e) {
						var X = e.rawX, Y = e.rawY
						b.on(pm, function (e) {
							b2.kXY(
									(e.rawY - Y) * .5, (e.rawX - X) * .5
							)
						})
					})
		}
		cjs.bindTransform = TR = function TR(b, b2, m) {
			var g = G(arguments),
					b = g[0],
					b2 = g[1],
					b2 = b2 || b, m = g[2] || 'SL'
			if (m == 'SL') {
				cjs.bindSlide(b, b2);
				m = 'SC'
			}
			else if (m == 'SC') {
				cjs.bindScale(b, b2);
				m = 'RT'
			}
			else if (m == 'RT') {
				cjs.bindRotate(b, b2);
				m = 'SL'
			}
			return b.on('pressup', function (e) {
				b.removeAllEventListeners();
				TR(b, b2, m)
			})
		}
		cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1] || b
			cjs.SL(b);
			cjs.RT(b, b2)
			if (g.p) {
				b.rgc('+')
			}
			if (g.N) {
				//    reggy(b,b2)
			}
		}
		cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'),
					pm = oE('pm'),
					b2 = b2 || b,
					m = g[2] || 'RT'
			//if(g.p){var s=St('y',1000)
			//    _t(b||5,function(i){s.a().bm(
			//        function(bm){bm.xy(i*50);TR(bm)})});return s}
			if (m == 'RT') {
				RT(b, b2);
				m = 'SK'
			}
			else if (m == 'SK') {
				SK(b, b2);
				m = 'RT'
			}
			return b.on(oE('pu'),
					function (e) {
						Do(b).O();
						RK(b, b2, m)
					})
		}
		cjs.bindSlideAndRotate = KK = function (b, b2) {
			var g = G(arguments), b = g[0],
					b2 = g[1] || b
			cjs.bindSlide(b);
			cjs.bindRotate(b, b2)
			if (g.p) {
				b.rgc('+')
			}
			if (g.N) {
				//    reggy(b,b2)
			}
		}
		cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'),
					pm = oE('pm'),
					b2 = b2 || b,
					m = g[2] || 'RT'
			//if(g.p){var s=St('y',1000)
			//    _t(b||5,function(i){s.a().bm(
			//        function(bm){bm.xy(i*50);TR(bm)})});return s}
			if (m == 'RT') {
				RT(b, b2);
				m = 'SK'
			}
			else if (m == 'SK') {
				SK(b, b2);
				m = 'RT'
			}
			return b.on(oE('pu'),
					function (e) {
						Do(b).O();
						RK(b, b2, m)
					})
		}
		cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1] || b
			cjs.SL(b);
			cjs.RT(b, b2)
			if (g.p) {
				b.rgc('+')
			}
			if (g.N) {
				//    reggy(b,b2)
			}
		}
		cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'),
					pm = oE('pm'),
					b2 = b2 || b,
					m = g[2] || 'RT'
			//if(g.p){var s=St('y',1000)
			//    _t(b||5,function(i){s.a().bm(
			//        function(bm){bm.xy(i*50);TR(bm)})});return s}
			if (m == 'RT') {
				RT(b, b2);
				m = 'SK'
			}
			else if (m == 'SK') {
				SK(b, b2);
				m = 'RT'
			}
			return b.on(oE('pu'),
					function (e) {
						Do(b).O();
						RK(b, b2, m)
					})
		}
		cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
			var g = G(arguments), b = g[0],
					b2 = g[1] || b
			cjs.bindSlide(b);
			cjs.bindRotate(b, b2)
			if (g.p) {
				b.rgc('+')
			}
			if (g.N) {
				//    reggy(b,b2)
			}
		}
		cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'),
					pm = oE('pm'),
					b2 = b2 || b,
					m = g[2] || 'RT'
			//if(g.p){var s=St('y',1000)
			//    _t(b||5,function(i){s.a().bm(
			//        function(bm){bm.xy(i*50);TR(bm)})});return s}
			if (m == 'RT') {
				RT(b, b2);
				m = 'SK'
			}
			else if (m == 'SK') {
				SK(b, b2);
				m = 'RT'
			}
			return b.on(oE('pu'),
					function (e) {
						Do(b).O();
						RK(b, b2, m)
					})
		}
		cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
			var g = G(arguments), b = g[0],
					b2 = g[1] || b
			cjs.bindSlide(b);
			cjs.bindRotate(b, b2)
			if (g.p) {
				b.rgc('+')
			}
			if (g.N) {
				//    reggy(b,b2)
			}
		}
		cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = oE('d'),
					pm = oE('pm'),
					b2 = b2 || b,
					m = g[2] || 'RT'
			//if(g.p){var s=St('y',1000)
			//    _t(b||5,function(i){s.a().bm(
			//        function(bm){bm.xy(i*50);TR(bm)})});return s}
			if (m == 'RT') {
				RT(b, b2);
				m = 'SK'
			}
			else if (m == 'SK') {
				SK(b, b2);
				m = 'RT'
			}
			return b.on(oE('pu'),
					function (e) {
						Do(b).O();
						RK(b, b2, m)
					})
		}
		cjs.rtSh = cjs.rotateShake = function (bm) {
			$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
		}
		cjs.scSh = cjs.scaleShake = function (bm) {
			$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
		}
	}
} 
