$L('add','kids')
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