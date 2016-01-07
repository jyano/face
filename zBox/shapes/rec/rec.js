w.BOX = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).lD(2)
}
w.BRICK = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).lD(2)
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var rect = $rF(wd, ht, x, y)
	rect.isSensor = true
	var r = cjs.rect(wd, ht, x, y).XY(b.X(), b.Y())
			.al(.3)
	w.st.A(r)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	var f = b.f(rect)
	f.sprite = r
	return f
}
w.rect = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
b.REC = b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var f = b.f($rF(wd, ht, x, y))
	var r = cjs.rect2(
			wd, ht, x, y).XY(b.X(), b.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rt(b.rt())
		r.XY(b.X(), b.Y())
	})
	return f
}
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
b.rec = function (c, W, H, x, y, a) {
	$l('rec')
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	if (g.OO_) {
		g.e(function (g) {
			b.rec(g)
		});
		return b
	}
	if (g.A) {
		return $a(b, 'rec', g)
	}
	if (g.O) {
		o = g.f
	}
	else {
		if (N(g.f)) {
			g.ush('z')
		}
		o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
	}
	$df.oDef(o)
	o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().box(o))
	if (o.s || g.n) {
		fD.isSensor = true;
		o.al = N(o.al, 0.8)
	}
	fD.d(o.d || .5)
	f = b.f(fD)
	f.K(o)
	/*
	 if (o.c !== 0) {
	 // f.g=w.g.h().rec(o)
	 if (g.p) { f.g = w.g.h().rec(o) }
	 //  f.g= w.g.h().rec(o) //this for but: (does something important)
	 else {
	 f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
	 f.bS(f.g)
	 }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
	 // f.bS(f.g)
	
	
	 }*/
	return f
}
w.circleStatOld = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.circleOld = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.boxOld = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.brickOld = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
}
w.box = w.bi = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A($dB(x, y), $rF(W, H)).K('box')
}
w.box = w.bo = w.bi = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.brick = w.bii = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
w.brk = w.brick = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}
w.box = w.bi = w.rect = function (x, y, W, H, c) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3], c: g[4]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sensor(true)
	}
	return b
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sensor(true)
	}
	return b
	w.box = w.bi = w.rect = w.rec = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3], c: g[4]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sensor(true)
		}
		return b
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sensor(true)
		}
		return b
	}
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.BOX = function (x, y, wd, ht, c) {
	var w = this, g = G(arguments), b, i, o
	b = w.box(x, y, wd, ht)
	b.lD(2)
	if (g.n || g.m) {
		b.mS()
	}
	if (g.p || g.m) {
		b.mBu()
	}
	i = $rGx(wd, ht, oO('c', c || 'y'))
	i.XY(g.f, g.s)
	w.st.A(i)
	b.bS2(i)
	return b//w.REC= w.rect = w.rectCol  =
}
w.BRK = w.BRICK = function (x, y, wd, ht, col) {
	var w = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht)
			.bS2(
			$rGx(wd, ht, col).XY(x, y)
	).lD(2)
}//w.rSt = w.recStat = w.rectStat =w.rSt = w.recStat = w.rectStat = 
w._BRICK_ = function (x, y, wd, ht, col) {
	var w = this
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht, '-').bS2(
			$rGx(wd, ht, col).XY(x, y).al(.5)
	).lD(2)
}//w.BRICKSENSOR =  w.rectSensor = w.rSn = w.recSen = 
