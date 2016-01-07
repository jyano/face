//recs
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
TREC = function () {
	W()
	b = w.CreateBody($bD(300, 400))
	//b.rec('r', 100,400, 400,200,33)
	b.f(30, 40, 20)
	b.f(30, 40) //nothing??
	// b.f([[20, 165, -50, -50, 45]])
	//b.f(20, 165, -50, -50, 45)
	w.D(300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
}
b.rec = b.REC = function (c, W, H, x, y, a) {
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	//if (g.OO_) {g.e(function (g) {b.rec(g) }); return b }
	//if (g.A) {return $a(b, 'rec', g)}
	if (g.O) {
		o = g.f
	}
	else {
		//if (N(g.f)) { g.ush('z') 
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
	}
	//$df.oDef(o)
	//o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().oB(o))
	//if (o.s || g.n) {fD.isSensor = true; o.al = N(o.al, 0.8)}
	//fD.d(   o.d || .5  )
	f = b.f(fD)
	//f.K(o)
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