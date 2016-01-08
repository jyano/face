abstractJt()
function abstractJt(){
	jD.init = jD.i = function () {
		this.Initialize.apply(this, arguments)
		return this
	}
	jD.cC = function (cC) {
		if (U(cC)) {
			return jD.collideConnected
		}
		this.collideConnected = cC ? true : false;
		return this
	}
	jD.bA = jD.A = function (a) {
		var jD = this
		jD.gA = function () {
			return this.bodyA
		}
		jD.sA = function (a) {
			this.bodyA = a;
			return this
		}
		return U(a) ?
				jD.gA() :
				jD.sA(a)
	}
	jD.bB = jD.B = function (b) {
		var jD = this
		jD.sB = function (b) {
			this.bodyB = b;
			return this
		}
		jD.gB = function () {
			return this.bodyB
		}
		return U(b) ? this.gB() : this.sB(b)
	}
	jD.AB = jD.sAB = function (a, b) {
		this.A(a)
		this.B(b)
		return this
	}
	jD.aAB = jD.xyAB = jD.v = jD.vAB = function (aX, aY, bX, bY) {
		var dJ = this
		dJ.xyA(aX, aY)
		dJ.xyB(bX, bY)
		return dJ
	}
	j.bA = j.A = function (a) {
		if (U(a)) {
			return this.GetBodyA()
		}
		else {
			alert('j.A cannot set')
		}
	}
	j.bB = j.B = function (a) {
		if (U(a)) {
			return this.GetBodyB()
		}
		else {
			alert('j.B cannot set')
		}
	}
	j.GN = j.N = function () {
		return this.GetNext()
	}
	j.W = function () {
		return this.bA().W()
//  this.GetBodyA().GetWorld()
	}
	j.ty = j.GT = function () {
		return this.GetType()//:int Get the type of the concrete joint.
	}
	b.jt = function () {
// = b.j = b.joint=b.JtLs = b.jointList 
		return this.GetJointList().joint
	}
	j.GAB = function () {//world coords
		return this.GetAnchorB()
	}
	j.GAA = function (a) {
		return this.GetAnchorA()
	}
	j.aA = function (a) {

//j.a and j.b CANNOT 'set' the property
// ( is too late.. u must now make new joint)
//= j.a =j.xyA = j.vA  
		if (U(a)) {
			return this.GAA().m()
		}
		else {
			alert('j.A cannot set')
		}
	}
	j.aB = function (a) {
		//=j.b =j.xyB = j.vB  
		if (U(a)) {
			return this.GAB().m()
		}
		else {
			alert('j.B cannot set')
		}
	}
//maxF
	jD.mF = function (mF) {
		this.maxForce = mF;
		return this
	}
	j.mF = maxForce = function (fo) {//slider/mouse
		var mJ = this
		mJ.sMF = function (mF) {
			this.SetMaxForce(mF)
			return this
		}
		return U(fo) ? this.GetMaxForce() :
				this.sMF(fo)
		alt = function () {
			jD.maxForce = j.mMF = function (a) {
				this.maxMotorForce = a;
				return this
			}
			mJ.mxFo = function (fo) {
				if (U(fo)) {
					return this.GetMaxForce()
				}
				this.SetMaxForce(fo)
				return this
			}
		}
	}
//fq
	jD.fq = function (a) {
		if (U(a)) {
			return this.frequencyHz
		}
		this.frequencyHz = a;
		return this
	}
	j.fq = function (fq) {
		//j.freq =j.f = j.frq = 
		j.SF = function (fq) {
			this.SetFrequency(fq);
			return this
		}
		j.GF = function () {
			return this.GetFrequency()
		}
		return U(fq) ? this.GF() : this.SF(fq)
		alt = function (fq) {
			mJ.frq = mJ.freq = mJ.frequency = function (hz) {
				if (U(hz)) {
					return this.GetFrequency()
				}
				this.SetFrequency(hz)
				return this
			}
			jD.sFq = function (fq) {
				this.frequencyHz = fq
				return this
			}
			jD.gFq = function () {
				return this.frequencyHz
			}
			return U(fq) ? this.gFq() : this.sFq(fq)
		}
	}
//dR
	jD.dR = function (dR) {
		//= jD.d = jD.dm = jD.dmp = jD.damp
		function alt() {
			jD.damp = function (a) {
				if (U(a)) {
					return this.dampingRatio
				}
				this.dampingRatio = a;
				return this
			}
		}
		
		jD.sDR = function (dR) {
			this.dampingRatio = dR
			return this
		}
		return U(dR) ? this.dampingRatio : this.sDR(dR)
	}
	j.dR = function (dR) {
		
		// = j.d = j.dm = j.dmp = j.damp
		alt = function () {
			mJ.dampRat = mJ.dmpRat = function (dR) {
				if (U(dR)) {
					return this.GetDampingRatio()
				}
				this.SetDampingRatio(dR)
				return this
			}
			j.damp = function (a) {
				if (U(a)) {
					return this.GetDampingRatio()
				}
				this.SetDampingRatio(a)
				return this
			}
		}
		j.GDR = function () {
			return this.GetDampingRatio()
		}
		j.SDR = function (dR) {
			this.SetDampingRatio(dR);
			return this
		}
		return U(dR) ? this.GDR() : this.SDR(dR)
	}
//worCen 
	jD.AWC = function () {
		return this.A().GWC()
	}
	jD.BWC = function () {
		return this.B().GWC()
	}
	jD.aWC = function () {
		return this.AWC().m()
	}
	jD.bWC = function () {
		return this.BWC().m()
	}
	jD._osA = function (x, y) {
		var jD = this
		var wC = jD.aWC()
		if (U(x)) {
			return wC
		}
		var v = V00(x, y)
		return wC.add(v)
	}
	jD._osB = function (x, y) {
		var jD = this
		var wC = jD.bWC()
		if (U(x)) {
			return wC
		}
		var v = V00(x, y)
		return wC.add(v)
	}
	jD.osA = jD.a = function (x, y) {
		return this.aA(this._osA(x, y))
	}
	jD.osB = jD.b = function (x, y) {
		return this.aB(this._osB(x, y))
	}
	function localAnc() {
		j.localA = j.lAA = function (a) {
			j.localAnchorA = a;
			return j
		}
		j.localB = j.lAB = function (a) {
			j.localAnchorB = a;
			return j
		}
		jD._lAA = function (lAA) {
			this.localAnchorA = lAA;
			return this
		}
		jD._lAB = function (lAB) {
			this.localAnchorB = lAB;
			return this
		}
		jD.lAA = jD.aV = function (x, y) {
			if (U(x)) {
				return this
			}
			var pt = V(x, y)
			this._lAA(pt.div())
			return this
		}
		jD.lAB = jD.bV = function (x, y) {
			if (U(x)) {
				return this
			}
			return this._lAB(V(x, y).div())
		}
		jD.localA = j.lAA = function (a) {
			this.localAnchorA = a;
			return this
		}
		jD.localB = j.lAB = function (a) {
			this.localAnchorB = a;
			return this
		}
		jD._gLAA = function () {
			return this.localAnchorA
		}
		jD._gLAB = function () {
			return this.localAnchorB
		}
		jD._sLAA = function (aA) {
			this.localAnchorA = aA;
			return this
		}
		jD._sLAB = function (aB) {
			this.localAnchorB = aB;
			return this
		}
		jD.XYA = jD.LAA = function (aA) {
			return U(aA) ? this._gLAA() :
					this._sLAA(aA)
		}
		jD.XYB = jD.LAB = function (aB) {
			var jD = this
			return U(aB) ? jD._gLAB() : jD._sLAB(aB)
		}
		jD.xyA = jD.vA = jD.aA = jD.ancA = jD.lAA = function (aA, y) {
			var jD = this
			return U(aA) ? jD.XYA().m() :
					jD.XYA(O(aA) ? aA.d() : V00(aA, y).d())
		}
		jD.xyB = jD.vB = jD.aB = jD.ancB = jD.lAB = function (aB, y) {
			var jD = this
			return U(aB) ? jD.XYB().m() :
					jD.XYB(V00(aB, y).d())
		}
		jD.wA = jD.wAB = function (lAB) {
			return U(lAB) ? this.wPt(this.lAB()) :
					this.lPt(this.lAB(lAB))
		}
		jD.wB = jD.wAA = function (lAA) {
			return U(lAA) ? this.wPt(this.lAA()) :
					this.lPt(this.lAA(lAA))
		}
	}}

function len() {
	j.len = function (a) {
		var g = G(arguments),
				len = this.GetLength() * 30
		if (U(a = g[0])) {
			return len
		}
		this.SetLength(
				$.update(len, a, g) / 30
		)
		return this
	}
	jD.len = function (len) {
		if (U(len)) {
			return this.length * 30
		}
		this.length = len / 30
		return this
	}
	jD.sL = jD.sLen = function (l) {
		this.length = l;
		return this
	}
	jD.l = jD.len = function (l) {
		return U(l) ? this.length * 30 : this.sLen(l / 30)
	}
	j.SL = function (l) {
		this.SetLength(l);
		return this
	}
	j.GL = function () {
		return this.GetLength()
	}
	j.L = j.Len = function (l) {
		return U(l) ? this.GL() : this.SL(l)
	}
	j.sLen = function (l) {
		return U(l) ? this : this.SL(l / 30)
	}
	j.gL = function () {
		return this.GL() * 30
	}
	j.l = j.len = function (l) {
		return U(l) ? this.gL() :
				this.sLen(l)
	}
}
 

_$dJ = function (a, b) {
	var dJ = new b2d.DJD();
	dJ.A(a);
	dJ.B(b);
	return dJ
}
jD.props = function () {
	var jD = this, g = G(arguments)
	return N(g.t) ? jD.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? jD.fq(g.f).dR(g.s) :
					N(g.f) ? jD.l(g.f) :
							jD
}
j.props = function () {
	var j = this, g = G(arguments)
	N(g.t) ? j.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? j.fq(g.f).dR(g.s) :
					N(g.f) ? j.l(g.f) : 0
	return j
}
jD.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
j.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
$dJLen = function () {
	var g = G(arguments)
	var dJD = _$dJ(g.f, g.s)
	dJD.props(g.t, g.fo, g.fi)
	if (g.p) {
		dJD.cl1()
	}
	return dJD
}
$dJAnc = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {aA: g.t, aB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			O(g.t) ? {aA: g.t, aB: V(), l: g.fo, fq: g.fi, dR: g.si} :
					N(g.t) ? {aA: V00(g.t, g.fo), aB: V00(g.fi, g.si), l: g.se, fq: g.ei, dR: g.ni} :
					{aA: O(g.t) ? g.t : V(), aB: O(g.fo) ? g.fo : V(), l: g.fi, fq: g.si, dR: g.se}
	var dJ = $dJLen(g.f, g.s, g.o)
	dJ.props(o.l, o.fq, o.dR)
	dJ.xyAB(o.aA.x, o.aA.y, o.aB.x, o.aB.y)
	return g.p ? dJ.cl1() : dJ
}
$dJt = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {a: g.f, b: g.s, xyA: g.t, xyB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			o = O(g.t) ? {a: g.f, b: g.s, xyA: g.t, l: g.fo, fq: g.fi, dR: g.si} :
			{a: g.f, b: g.s, l: g.t, fq: g.fo, dR: g.fi}
	var jD = $dJLen(o.a, o.b, o.l, o.fq, o.dR, g.o)
	if (o.xyA) {
		jD.xyA(o.xyA)
	}
	if (o.xyB) {
		jD.xyB(o.xyB)
	}
	return g.p ? jD.cl1() : jD
}
$dJ = function () {
	var g = G(arguments)
	_gg = g
	if (O(g.fo) || O(g.t) || N(g.ni) || N(g.si)) {
		return $dJAnc.apply(null, arguments)
	}
	if (N(g.ei)) {
		return $dJAnc(g.f, g.s, g.t, g.fo, g.o).props(g.fi, g.si)
	}
	if (N(g.fi)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), g.o).props(g.fi)
	}
	if (N(g.fo)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), V(g.fi, g.si), g.o)
	}
	return N(g.t) ?
			$dJLen(g.f, g.s, g.t, g.p) :
			$dJAnc(g.f, g.s, g.p)
}
//
w.dJAnc = function () {
	return this.CJ(
			$dJAnc.apply(null, arguments))
}
w.dJ = function () {
	return this.CJ(
			$dJ.apply(null, arguments)
	)
}
b.dJ = b.dst = b.dist = function (nextB) {
	var b = this, w = b.W()
	w.dJ(b, nextB)
	return nextB
}
j.pp = function () {
	var j = this
	$l('l: ' + j.l())
	$l('fq: ' + j.fq())
	$l('dR: ' + j.dR())
	return j
}
w.spg = function () {
	var w = this, g = G(arguments), o
	o = O(g.s) ? {a: g.f, b: g.s, l: g.t} :
			O(g.f) ? {a: g.f, l: g.t}
					: {l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 2, .2)
}
w.rod = function () {
	var w = this, g = G(arguments), o
	o = O(g.s) ? {a: g.f, b: g.s, l: g.t} :
			O(g.f) ? {a: g.f, l: g.t}
					: {l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 0, 1)
}
j.shrink = function () {
	this.len(0.97, '*')
	return this
}
later = function () {
	old = function () {
		w.dJtCl = w.distColl = function (a, b, b1OffV, b2OffV) {
			var os1, os2
			if (O(b1OffV)) {
				b1V = b1V.add(b1OffV)
			}
			if (O(b2OffV)) {
				b2V = b2V.add(b2OffV)
			}
			var os1 = a.worldCenter().m()
			var os2 = b.worldCenter().m()
			return w.CJ(
					$.dJD().init(a, b, os1.d(), os2.d()).cl1()
			)
		}
	}
	function haha() {
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
	}
	
	function alpha() {
		w.tit = w.tightDist = function (b, b1) {
			return this.dJ(b, b1, 1, 1000, 1000)
		}
		b.l = function (n, lk) {
			var b = this, w = b.W()
			lk = lk || l
			_.t(N(n, 1), function () {
				w.rJ(lk, lk = w.lk(lk.X(), lk.Y() + 15))
			})
			return lk.K('leaf')
		}
		w.lk = w.lnk = w.link = function (x, y) {
			var w = this, g = G(arguments)
			var b = w.box(x, y, 4, 20).de(4).re(2)
			if (g.d) {
				b.stat()
			}
			return b
		}
		w.soft = w.softPlat = function (x, y) {
			var w = this;
			x = N(x, 300);
			y = N(y, 60)
			w.spg(
					w.bmp(x, y, 4).s1(),
					w.brk(x, y, 100, 30).fR1()
			).dm(1)
		}
		SPRINGS3 = SP3 = function () {
			W()
			w.soft(300, 100)
			w.soft(500, 80)
			w.soft(700, 40)
			w.soft(900, 120)
		}
		j.wnd = j.wind = function () {
			var j = this
			var wound
			$t(function () {
				j.l(j.l() * wound ? 1.01 : 0.99);  //j.W().st.pen('len: ' +j.l())
				wound = j.l() < 5 ? 1 : j.l() > 200 ? 0 : wound
			})
		}
		j.shr = j.shrink = function () {
			return this.l(0.97, '*')
		}
		WINDUP = WUP = function () {
			var wound = false
			W().p()
			j = w.dJtCl(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			k = w.dJt(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			//w.S(0, 40, $pF(400, 300).mS()  ) //can get triggered many many times?
			_.in(1, function (cx) {
				j.wind();
				k.wind()
			})
		}
	}

//jD.init(o.a, o.b, o.b1V, o.b2V)
//WARNING: dont ever set a dJ().len(0)
//this initialize function for distance, not revolute
	$dJOb = function () {
		var jD = new b2d.DJD()
		jD.init = function (b1, b2, b1V, b2V) {
			var jD = this
			if (U(b1V)) {
				b1V = b1.wCen()
			}
			if (U(b2V)) {
				b2V = b2.wCen()
			}
			return jD.init(b1, b2, b1V, b2V)
		}
		if (g.f.init) {
			jD.init.apply(jD, o.init)
		}
		jD.fq(N(o.fq, 3)).dR(N(o.dmp, .1)).l(N(o.l, 1))
		jD.cC(o.cl || o.cC || o.coll)
	}
}
function spring() {
	w.spg = function (a, b) {
		var w = this;
		a = a || w.D(150, 150, 'b', 50)
		b = b || w.S(180, 150, 'w', 50, 50)
		return w.dJ({a: a, b: b, l: 1, f: 2})
	}
	w.brg = function (x, y) {
		var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
		x = N(x, 400);
		y = N(y, 100)
		FIRST = w.S(x, y, 10)
		LAST = w.S(x + 700, y, 'b', 10)
		b2 = wood()
		b3 = wood()
		b4 = wood()
		b5 = wood()
		b6 = wood()
		b7 = wood()
		b8 = wood()
		b9 = wood()
		_.e([
					[FIRST, b2],
					[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
					[b9, LAST]
				],
				function (p) {
					w.dJ({
						a: p[0], b: p[1],
						l: 6, f: 5,
						coll: 1
					})
				})
		function wood() {
			return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
		}
	}
	j.wU = j.wu = j.wind = function () {
		var j = this, wound
		cjs.t(function () {
			var l, m
			m = wound ? 1.01 : .99
			l = j.l() * m
			j.l(l * m)
			if (l < 5) {
				wound = 1
			}
			if (l > 200) {
				wound = 0
			}
		})
	}
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
	b.ch = function (n) {
		if (this.gx) {
			return this.gx.children[N(n, 0)]
		}
	}
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
	function _spring() {
		w.spg = function (a, b) {
			var w = this;
			a = a || w.D(150, 150, 'b', 50)
			b = b || w.S(180, 150, 'w', 50, 50)
			return w.dJ({a: a, b: b, l: 1, f: 2})
		}
		w.brg = function (x, y) {
			var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
			x = N(x, 400);
			y = N(y, 100)
			FIRST = w.S(x, y, 10)
			LAST = w.S(x + 700, y, 'b', 10)
			b2 = wood()
			b3 = wood()
			b4 = wood()
			b5 = wood()
			b6 = wood()
			b7 = wood()
			b8 = wood()
			b9 = wood()
			_.e([
						[FIRST, b2],
						[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
						[b9, LAST]
					],
					function (p) {
						w.dJ({
							a: p[0], b: p[1],
							l: 6, f: 5,
							coll: 1
						})
					})
			function wood() {
				return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
			}
		}
		j.wU = j.wu = j.wind = function () {
			var j = this, wound
			cjs.t(function () {
				var l, m
				m = wound ? 1.01 : .99
				l = j.l() * m
				j.l(l * m)
				if (l < 5) {
					wound = 1
				}
				if (l > 200) {
					wound = 0
				}
			})
		}
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
		b.ch = function (n) {
			if (this.gx) {
				return this.gx.children[N(n, 0)]
			}
		}
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
	}
}
function chain() {
	w.Chain = function (fn) {
		var w = this
		var chain = {
			JS: [],
			NS: []
		}
		chain.eJ = function (fn) {
			_.e(this.JS, fn)
			return this
		}
		chain.eN = function (fn) {
			_.e(this.NS, fn)
			return this
		}
		chain.f = function (fq) {
			return this.eJ(function (j) {
				j.fq(fq)
			})
		}
		chain.d = function (d) {
			return this.eJ(function (j) {
				j.d(d)
			})
		}
		chain.l = function (l) {
			return this.eJ(function (j) {
				j.l(l)
			})
		}
		chain.j = function () {
			var g = G(arguments)
			var j = w.J($a(b2d.dJ, g))
			this.JS.push(j)
			return j
		}
		chain.J = function (o) {
			var j = this.j(o.a, o.b)
			if (N(o.f)) {
				j.fq(o.f)
			}
			if (N(o.d)) {
				j.d(o.d)
			}
			if (N(o.l)) {
				j.l(o.l)
			}
			return j
		}
		return chain
	}
	CHAIN = DISTROPE = ROPE = ROP = function () {
		W([1000, 600], {})
		//p.lD(2).fR()//.r(1.6)
		// p.stat()
		chain = w.Chain()
		p = w.p(300, 300, 2);
		v0 = w.S(200, 100, 'r', 15).d(15)
		v1 = w.D(300, 150, 'y', 15).d(15)
		v2 = w.D(200, 200, 'g', 15).d(15)
		chain.j(v0, v1)//.fq(20).d(0)
		return
		chain.j(v1, v2)//.fq(20).d(0)
		chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y())//.fq(30).d(1)
		// T.t(function(){  p.F(0,20)  })
		// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
		// p.F(0,100,'+')
		// chain.d(0).f(60)
		chain.d(.4).f(12).l(40)
	}
	function _chain() {
		w.Chain = function (fn) {
			var w = this
			var chain = {
				JS: [],
				NS: []
			}
			chain.eJ = function (fn) {
				_.e(this.JS, fn)
				return this
			}
			chain.eN = function (fn) {
				_.e(this.NS, fn)
				return this
			}
			chain.f = function (fq) {
				return this.eJ(function (j) {
					j.fq(fq)
				})
			}
			chain.d = function (d) {
				return this.eJ(function (j) {
					j.d(d)
				})
			}
			chain.l = function (l) {
				return this.eJ(function (j) {
					j.l(l)
				})
			}
			chain.j = function () {
				var g = G(arguments)
				var j = w.J($a(b2d.dJ, g))
				this.JS.push(j)
				return j
			}
			chain.J = function (o) {
				var j = this.j(o.a, o.b)
				if (N(o.f)) {
					j.fq(o.f)
				}
				if (N(o.d)) {
					j.d(o.d)
				}
				if (N(o.l)) {
					j.l(o.l)
				}
				return j
			}
			return chain
		}
		CHAIN = DISTROPE = ROPE = ROP = function () {
			W([1000, 600], {})
			//p.lD(2).fR()//.r(1.6)
			// p.stat()
			chain = w.Chain()
			p = w.p(300, 300, 2);
			v0 = w.S(200, 100, 'r', 15).d(15)
			v1 = w.D(300, 150, 'y', 15).d(15)
			v2 = w.D(200, 200, 'g', 15).d(15)
			chain.j(v0, v1)//.fq(20).d(0)
			return
			chain.j(v1, v2)//.fq(20).d(0)
			chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y())//.fq(30).d(1)
			// T.t(function(){  p.F(0,20)  })
			// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
			// p.F(0,100,'+')
			// chain.d(0).f(60)
			chain.d(.4).f(12).l(40)
		}
	}
}
function blob() {
	$L()
	blobX = 320;
	blobY = 240;
	parNum = 16;
	parDst = 50;
	w.sph = w.sphere = function (pX, pY, r) {
		var w = this
		var b = w.CB($dB(pX, pY))
		b.CF($fD($cH(r)).re(.4).fr(.5))
		return b
	}
	BLB = function () {
		W()
		Bs = [w.sph(blobX, blobY, 15)]
		Bs.sph = function () {
			this.push(w.sph.apply(w, arguments))
			return this
		}
		_.t(parNum, function (i) {
			var an = (2 * M.PI) / parNum * i;
			var posX = blobX + parDst * M.c(an);
			var posY = blobY + parDst * M.s(an);
			Bs.sph(posX, posY, 2)
			var dJ = $dJ(Bs[0], Bs[_.z(Bs) - 1]).l(parDst).dR(.5).fq(5)//dJ.lAA(V()).lAB(V())
			var dJt = w.CJ(dJ)
			if (i > 0) {
				var z = _.z(Bs)
				dJt = w.CJ(dJ.sAB(Bs[z - 2], Bs[z - 1])
						.l(M.sqrtSumSqr(posX - Bs[z - 2].X(), posY - Bs[z - 2].Y())))
				//dJ.lAA(V()).lAB(V())
			}
			if (i == parNum - 1) {
				dJ.sAB(Bs[1], Bs[_.z(Bs) - 1])
				//dJ.localAnchorA = V(); dJ.localAnchorB = V()
				dJt = w.CJ(dJ.l(M.sqrtSumSqr(
						posX - Bs[1].X(), posY - Bs[1].Y()
				)))
			}
		})
	}
	DJD = function () {
		fps = 60;
		mouse_pressed = 0
		mouse_joint = 0
		//box2d to cv scale , therefor 1 metre of box2d = 30px of cv :)
		sc = scale = 30;
		cv = $.c('X', 1000, 500).A()
		cv.attr('id', 'cv')
		ctx = cv[0].getContext('2d');
		w = createWorld();
		//internal dims of the cv
		cv_wd = parseInt(cv.attr('width'));
		cv_ht = parseInt(cv.attr('height'));
		cv_ht_m = cv_ht / scale;
		$(cv).mousemove(function (e) {
			var p = get_real(V(e.pageX / scale, e.pageY / scale))
			mouse_x = p.x;
			mouse_y = p.y;
			if (mouse_pressed && !mouse_joint) {
				var b = GetBodyAtMouse();
				if (b) {
					//if joint exists then create
					var mD = new b2d.MJD()
					mD.A(ground).B(b)
					mD.target = p;
					mD.collideConnected = true;
					mD.maxForce = 1000 * b.GetMass();
					mD.dampingRatio = 0;
					mouse_joint = w.CJ(mD);
				}
			}
			if (mouse_joint) {
				mouse_joint.SetTarget(p);
			}
		});
		$(cv).mousedown(function () {
			//flag to indicate if mouse is pressed or not
			mouse_pressed = true;
		});
		// When mouse button is release, mark pressed as false and delete the mouse joint if it exists
		$(cv).mouseup(function () {
			mouse_pressed = false;
			if (mouse_joint) {
				w.DJ(mouse_joint);
				mouse_joint = false;
			}
		});
		//start stepping
		step();
	}
//Draw a w - this method is called in a loop to redraw the w
	function draw_w(w) {
		//convert the cv coordinate directions to cartesian coordinate direction by translating and scaling
		ctx.fillRect(0, 0, cv.W(), cv.H())
		ctx.save();
		ctx.translate(0, cv_ht);
		ctx.scale(1, -1);
		w.DDD();
		ctx.restore();
		ctx.font = 'bold 18px arial';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#fff';
		ctx.fillText('Box2d Distance Joint example in Javascript', cv_wd / 2, 20);
		ctx.font = 'bold 14px arial';
		ctx.fillText('Click on any object and drag it', cv_wd / 2, 40);
	}
	
	function createWorld() {
		w = new b2d.W(V(0, -10), true)
		w.SDD($dD().sp(ctx).sc(sc).fA(1).fl(b2d.hB | b2d.jB))
		ground = box(w, 8.5, 2, 16, 1, {type: b2d.sB});
		a = box(w, 6.50, 3.8, 1, 1);
		b = box(w, 10.5, 3.8, 1, 1);
		c = ball(w, 8.5, 3.8, 1);
		return w.aJ($dJ(b, c).cl1().l(100));
	}

//Function to create a round ball, sphere like object
	function ball(w, x, y, rad, op) {
		op = $.x(true, {'de': 1, 'fr': 1, 're': 0.5, 'type': b2d.B.b2_dynamicBody}, op);
		return w.D(x, y).A($cF(rad * 30)).de(op.de || 1).fr(.5).re(.5)
	}
	
	b.A = function () {
		var b = this, g = G(arguments)
		g.e(function (f) {
			b.f(f)
		})
		return b
	}
//Create standard boxes of given ht , wd at x,y
	function box(w, x, y, wd, ht, op) {
		op = $.x(true, {
			de: 1, fr: 1, re: .5,
			type: b2d.B.b2_dynamicBody
		}, op);
		var bD = $bD(x, y).ty(op.type), fD = $fD();
		fD.de(op.de).fr(op.fr).re(op.re).H($pH())
		fD.shape.SAB(wd / 2, ht / 2);
		//bD.userData = op.user_data;
		var b = w.CB(bD);
		var f = b.CF(fD);
		return b;
	}
	
	/*
	 This method will draw the w again and again
	 called by settimeout , self looped
	 */
	function step() {
		w.St(timeStep = 1.0 / (fps * 0.8), 8, 3).CF();
		draw_w(w, ctx);
		_.sT(step, 1000 / fps);
	}// 16.7ms
	function get_real(p) {
		return V(p.x + 0, cv_ht_m - p.y);
	}//Convert coordinates in cv to box2d w
	function GetBodyAtMouse(includeStatic) {
		var mouse_p = V(mouse_x, mouse_y);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
		aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);
		var b
		w.QA(function (f) {
			var h = f.H();
			if (!f.B().iS() || includeStatic) {
				if (h.TP(f.B().tf(), mouse_p)) {
					b = f.B();
					return 0
				}
			}
			return 1
		}, aabb);
		return b;
	}
	
	function _pre() {
		b2d.hB = b2d.hBit = b2d.shapeBit = b2d.DD.e_shapeBit
		b2d.jB = b2d.jBit = b2d.jointBit = b2d.DD.e_jointBit
		b2d.sB = b2d.B.b2_staticBody
		//$.x = $.extend
		M.sumSqr = function (x, y) {
			return x * x + y * y
		}
		M.sqrtSumSqr = function (x, y) {
			M.sqrt(M.sumSqr(x, y))
		}
		w.aJ = function (jD) {
			this.CJ(jD)
			return this
		}
	}
}
function distanceJts() {
	
	//b2d.p()
//shiffman video explanation: https://www.youtube.com/watch?v=4LYvltd07hk
//dist joint parameters:
//length: //this is rest length... (lengh if spring came to rest)
	dJ.len = dJ.l = function (a) {
		var j = this, g = G(arguments),
				l = j.GetLength() * 30
		if (g.u) {
			return l
		}
		j.SetLength(
				_.upd(j, g.f, g) / 30)
		return j
	}
//frequencyHrtz: speed/freq  of oscilliation, 	//simple harmonic motion // usually between 1-5
	dJ.frq = dJ.freq = dJ.fq = function (fq) {
		if (U(fq)) {
			return this.GetFrequency()
		}
		this.SetFrequency(fq);
		return this
	}
//dampingRatio: affects springiness but it's what causes a spring to come to rest // usually 0-1
	dJ.dmpRat = dJ.dmp = dJ.damp = dJ.d = function (dR) {
		if (U(dR)) {
			return this.GetDampingRatio()
		}
		this.SetDampingRatio(dR);
		return this
	}
// to make a completely rigid distance joint -> make freqHz = 0, dampingRatio = 1 (complete damping and no oscillation at all)
//video: 7min
//where do we put the joint?  could make 'connection' class  which wraps a joint..   // or a 'pair' class with two bods and the joints (and all related info)
	b2d.DistanceJointDef = b2d.Joints.b2DistanceJointDef
	b2d._dJtDf = function () {
		return new b2d.DistanceJointDef
	}
	b2d.dJt = b2d.dJ = function () {
		var g = G(arguments), jD, o
		o = {a: g.f, b: g.s}
		if (N(g.t)) {
			o.ancA = V(g.t, g[3])
			o.ancB = V(g[4], g[5])
		}
		if (O(g.t)) {
			o.ancA = V(g.t);
			o.ancB = V(g[3])
		}
		o.ancA = o.ancA || o.a.wC()
		o.ancB = o.ancB || o.b.wC()
		jD = b2d._dJtDf()
		jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
		return jD
	}
	b2d.dJ = function () {
		$l('b2d.dJ')
		var g = G(arguments),
				dJD = new b2d.DistanceJointDef
		dJD.i = function (a, b, aV, bV) {
			$l('dJD.i')
			var jd = this,
					g = G(arguments), o
			o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
			if (o.av) {
				o.aV = o.a.wC().add(o.av || V())
			}
			else {
				o.aV = o.aV || o.a.wC()
			}
			o.bV = o.bv ? o.b.wC().add(o.bv || V()) :
					o.b ? o.b.wC() : o.bV || null
			if (g.n) {
				$l('dJD.i g.n!!! whited out')
				/*
				 if(o.aV){
				 _aV = o.aV
				 o.aV = o.aV.d()
				 }
				 if(o.bV){o.bV = o.bV.d()}
				 */
			}
			jd.Initialize(o.a, o.b, o.aV, o.bV)/////////////////////////
			if (o.cl) {
				jd.cl(true)
			}
			return jd
		}
		if (g.f) {
			dJD.i(g.f, '-')
		}
		return dJD
	}
	w.dJt = w.dJ = function () {
		var w = this, g = G(arguments), jd, j, o
		o = g.O ? g.f : _.x({a: g.f, b: g.s},
				O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
						O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
						{l: g.t, f: g[3], d: g[4]})
		jd = b2d.dJ(o)
		if (o.cl) {
			jd.cl(1)
		}
		j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
		if (N(o.l)) {
			j.l(o.l)
		}
		return j
	}
	b.dJt = b.dJ = function (nxB) {
		var b = this, w = b.W()
		w.dJ(b, nxB);
		return nxB
	}
	j.shrink = function () {
		var j = this
		j.len(0.97, '*')
		return j
	}
	DJJ = function () {
		W().Y()
		b2 = w.D(500, 300, 'w', 18, 450)
		b3 = w.S(500, 200, 'r', 70)
		w.dJ(b3, b2)
		//w.dJ(b2, w.D(500, 300, 'g', 90))
	}
	DJY = function () {
		W().Y()
		w.dJ(
				y.XY(200, 200),
				x = w.D(200, 220, 'r', 12))
		w.dJ(x, x = w.D(200, 250, 'r', 12))
		w.dJ(x, x = w.D(200, 280, 'b', 12))
		w.dJ(x, x = w.D(200, 320, 'g', 12))
		w.dJ(x, x = w.D(200, 360, 'u', 12))
		w.dJ(x, x = w.D(200, 420, 'g', 12))
		w.dJ(x, x = w.D(200, 500, 'u', 12))
	}
	DJ = function () {
		W([1400, 800], {g: 1000}).Y(500, 300);
		xx = w.S(1100, 40, 'x', 40)
		jj = w.dJ({
			a: xx,
			b: w.D(1050, 200, 'r', 20, 60),
			l: 200, cl: 1, coll: 1
		})
		kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
		w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
		w.cl('sen',
				function () {
					jj.wind();
					kk.wind()
				}
		)
	}
	WANCA = WANCB = FIXEDROTATETHRUST = DROWNING = BALLANDCHAIN = DIST = DST = function () {
		W([600, 600, 600, 1200])
		b = w.D(300, 200, 'b', 150, 140).tr()
		x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
		jD = new b2d.Joints.b2DistanceJointDef
		wAncA = V(300, 200, '-')
		wAncB = V(200, 100, '-')
		jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
		j = w.J(jD)
	}
	BRIDE = DISTDOT = LOCDJ = LDJ = function () {
		W([2000, 1400], {})
		x = w.S(300, 400, 'r', 100, 100)
		//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
		b = w.y(400, 200, '+')
		j = w.dJ({a: x, b: b})
		_.ev(.2, function () {
			w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
			w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
		})
		j.fq(8)
		j.d(0)
		// w.dJ(x,b)
		w.dot('z', 1310, 400)
		w.brg(900, 500);
		_.in(3, function () {
			w.p(900, 100)
		})
	}
	TPL = SOFTPLAT = SPRING = ACROBAT = SPG = function () {
		W([2000, 1300], {g: 1000}).P(300, 320)
		// y.tr()
		// w.brg(860, 1060)
		//and more..
		// here i bind bodies with fixtures that are alredy out of line
		w.dJ(w.D(800, 100, 'y', 20),
				w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
				30)
		w.dJ(
				w.D(900, 300, 'g', 20),
				w.D(910, 320, 'b', 20, 20),
				30)
		b1 = w.S(200, 200, 'y', 50)
		b11 = w.D(200, 200, 'x', 50, 50)
		w.dJ(b1, b11, 60)
		r = w.D(100, 100, 'r', 40)
		u = w.S(500, 300, 'u', 200, 100)
		j = w.dJ(u, r, V(100, 100)).l(50)
		w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
		w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
		w.dJ({
			a: u,
			b: w.D(300, 400, 'o', 20),
			av: V(-100, -100),
			coll: 1, l: 50
		})
		p.tr().r(1)
		SoftPlat(300, 400)
		SoftPlat(500, 380)
		SoftPlat(700, 340)
		SoftPlat(900, 420)
		function SoftPlat(x, y) {
			x = N(x, 300);
			y = N(y, 60)
			w.dJ({
				a: w.S(x, y, 'z', 8, '-'),
				b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
				l: .1,
				f: 10
			}).d(.1)
		}
		
		w.tpl = function (x, r, fq, d) {
			var w = this, bouncer, j
			x = N(x, 290)
			r = N(r, 75)
			fq = N(fq, 6)
			d = N(d, 0)
			j = w.dJ(
					w.S(x, 1080, 'w', 20, 20),
					w.D(x, 1000, 'b', 200, 20)
							.fR().d(0).r(r).fr(0))
			j.l(115).fq(fq).d(d)
			w.S(x - 120, 1090, 'b', 40, 300).fr(0)
			w.S(x + 120, 1090, 'b', 40, 300).fr(0)
			return j
		}
		w.tpl(200, 0, 6)// not bouncy
		w.tpl(500, 1.2, 6)// too bouncy
		w.tpl(800, .75, 6)// mid bouncy, mid freq
		w.tpl(1100, .75, 2)//low freq
		w.tpl(1400, .75, 12)//high freq
		//_.ev(1,function () {p.I(0, -150)})
		//_.in(15, function(){w.addHundBalls()})
		//freq is SPEED of oscillation
		//damp is STRENGTH of oscillation
		// so bodies cant rotate if they dont have density???
	}
	REVJTVIN = VINE = VIN = function () {
		W(250).Y().P()
		w.trap(50)
		w.vine(200, 100, 15, 8)
		w.vine(210, 100, 25, 8)
		w.vine(220, 100, 25, 5)
		w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
		w.vine(300, 100, 30, 2)
		//blinds
		w.rJ(
				w.link1(600, 20, 3, '+').add(10),
				w.p(500, 200), '+')
		//ropey
		b = w.S(1100, 50, 'g', 60, 15).d(1)
		_.t(10, function (y) {
			w.rJ(
					b,
					b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
		})
		w.rJ(b,
				w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
		p.cl('leaf', function (l) {
			w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
			$.space(function () {
				w.j(w.jt)
			})
		})
	}
	REVJTLEASH = LEASH = LSH = function () {
		W()
		p = w.p(300, 200)
		base = link(300, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		base = link(100, 20).stat()
		l = base.rJ(10)
		w.rJ(l, p.XY(l.X(), l.Y()))
		function link(x, y) {
			var l = w.rJ(x, y, '+')
			l.l = function (n) {
				var lk;
				n = N(n) ? n : 1
				_.t(n, function () {
					lk = link(l.X(), l.Y() + 10)
					r = w.rJ(l, lk)
					l = lk
				})
				return l
			}
			return l
		}
		
		/*
		
		 w.link2 = function(x,y){var w=this,b
		
		 b=w.rJ(x,y,'+')
		
		 b.l=function(n){var b=this, w=b.W()
		 _.t(N(n,1), function(){
		 w.rJ(b, b=w.l(b.X(),b.Y()+15))
		 })
		 return b}
		
		 return b
		
		 }
		
		 link3 = function(x,y){
		 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
		 l.l= function(n){
		 _.t(N(n,1), function(){
		 l = link3(l.X(),l.Y()+20)})
		 return l}
		 return l}
		
		 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
		
		 p2= w.p(1000,200)
		 base2 = w.link2(1000,20).stat()
		 l2 =  base2.rJ(10)
		 w.rJ(l2,p2)
		
		
		 w.$(function(){
		 base3 = link3(600,20).stat()
		 l3 =  base3.l(10)
		 })
		
		
		
		 w.floor.r(0)
		 prev = top = w.S(400,50,'g', 60,15)
		 _.t(10, function(i){var next
		 next=link(255,(i+1)*30)
		 prev = prev.rJ(next)})
		 //body.rev(body2) returns body2 !!!!!
		 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
		
		
		
		
		 y = w.y(600,170).rot(265).stat()
		 w.cl('bu',function(f){
		 if(!f.of(y)){f.B().kill()}
		 })
		
		 */
	}
//body.GetTransform()
//body.GetFixtureList().GetShape()
	DJTSTRING = function () {
	}
	function bridge() {
		DJTBRIDGE = function () {

//two bodies at ends must be static
		}
	};
	bridge()
	function springs() {
		WSPG = function () {
			W([1400, 800], {g: 1000}).Y(500, 300);
			y.tr()
			w.S(400, 500, 'r', 4, 2000)
			w.dJ({
				a: w.D(200, 200, 'b', 50),
				b: w.D(300, 200, 'b', 60),
				l: 50, f: 3, d: .1,
				cl: 1
			})
			w.dJ({
				a: w.D(200, 200, 'd', 50, 50),
				b: w.D(300, 200, 'd', 60, 60),
				l: 50, f: 3, d: .1, cl: 1
			})
			w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
			w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
			oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
			T.t(function () {
				if (oj.l() > 1) {
					oj.l(oj.l() - .002)
				}
			})
		}
		ACROBAT = SPG = function () {
			W()
			w.spg(
					w.S(500, 100, 'o', 10, '-'),
					w.D(500, 250, 'r', 250, 10).K('rec')
			).fq(3).d(1)
			w.spg(
					w.S(1200, 125, 'c', 10, '-'),
					w.D(1200, 275, 'r', 250, 10).K('rec')
			).fq(10).d(.5)
			w.dJ(
					w.D(600, 300, 'z', 30),
					w.S(900, 500, 'z', 50, 80, 0, 0, 20)
			).l(20).fq(5).d(.1)//.coll(false)
			w.dJ(
					w.D(130, 450, 'b', 30),
					w.S(130, 800)
			).l(120).fq(5).d(0)//.coll(true)
		}
		DJTMESH = function () {
		}
		SPRINGS = RAGDOLL = RAGD = RAG = function () {
			W({})
			w.spg(
					b1 = w.D(100, 100, 'b', 30),
					w.D(100, 200, 'r', 40))
			w.dJ(
					b2 = w.D(100, 400, 'g', 30, 30),
					w.D(100, 500, 'o', 40, 40)
			)
			p = w.me(500, 200)
			w.spg(b1, p)
			w.spg(b2, p)
		}
	};
	springs()
	/*
	 jd.freq=  function(a){
	 if(U(a)){return this.frequencyHz}
	 this.frequencyHz=a;return this
	 }
	 jd.len=function(len){
	 if(U(len)){return this.length*30}
	 this.length=len/30
	 return this}
	 jd.damp = function(a){if(U(a)){return this.dampingRatio}
	 this.dampingRatio=a;return this}
	
	 */
	function err() {
		SPOLL = function () {
			W({g: 0, w: 0});
			Q(function () {
				s = w.s
				e = w.S(200, 200, 'p', 100)
						.d(1).r(2)
						.bS({i: q.b('sun'), sc: .13})
						.K('earth');
				eI = e.ch()
				// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
				p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
				w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
				T.t(function () {
					var sp,
							dx = e.X() - p.X(),
							dy = e.Y() - p.Y(),
							sc = cjs.cap(300 /
							M.sqrt(dx * dx + dy * dy), .3, 2)
					s.X(300 - sc * (p.X() - 300))
					s.Y(150 - sc * (p.Y() - 150))
				})
			})
		}
	}
	
	/* overlap??
	 http://www.box2d.org/manual.html - also has other stuff
	 b2Transform xfA = …, xfB = …;
	
	 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
	 */
	function sports() {
		MARBLES = function () {
			W().Y()
			w.dJ(
					y.XY(200, 200),
					x = w.D(200, 220, 'r', 12))
			w.dJ(x, x = w.D(200, 250, 'r', 12))
			w.dJ(x, x = w.D(200, 280, 'b', 12))
			w.dJ(x, x = w.D(200, 320, 'g', 12))
			w.dJ(x, x = w.D(200, 360, 'u', 12))
			w.dJ(x, x = w.D(200, 420, 'g', 12))
			w.dJ(x, x = w.D(200, 500, 'u', 12))
		}
	}
	
	function _distanceJts() {
		b2d.p()
//shiffman video explanation: https://www.youtube.com/watch?v=4LYvltd07hk
//dist joint parameters:
//length: //this is rest length... (lengh if spring came to rest)
		dJ.len = dJ.l = function (a) {
			var j = this, g = G(arguments),
					l = j.GetLength() * 30
			if (g.u) {
				return l
			}
			j.SetLength(
					_.upd(j, g.f, g) / 30)
			return j
		}
//frequencyHrtz: speed/freq  of oscilliation, 	//simple harmonic motion // usually between 1-5
		dJ.frq = dJ.freq = dJ.fq = function (fq) {
			if (U(fq)) {
				return this.GetFrequency()
			}
			this.SetFrequency(fq);
			return this
		}
//dampingRatio: affects springiness but it's what causes a spring to come to rest // usually 0-1
		dJ.dmpRat = dJ.dmp = dJ.damp = dJ.d = function (dR) {
			if (U(dR)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(dR);
			return this
		}
// to make a completely rigid distance joint -> make freqHz = 0, dampingRatio = 1 (complete damping and no oscillation at all)
//video: 7min
//where do we put the joint?  could make 'connection' class  which wraps a joint..   // or a 'pair' class with two bods and the joints (and all related info)
		b2d.DistanceJointDef = b2d.Joints.b2DistanceJointDef
		b2d._dJtDf = function () {
			return new b2d.DistanceJointDef
		}
		b2d.dJt = b2d.dJ = function () {
			var g = G(arguments), jD, o
			o = {a: g.f, b: g.s}
			if (N(g.t)) {
				o.ancA = V(g.t, g[3])
				o.ancB = V(g[4], g[5])
			}
			if (O(g.t)) {
				o.ancA = V(g.t);
				o.ancB = V(g[3])
			}
			o.ancA = o.ancA || o.a.wC()
			o.ancB = o.ancB || o.b.wC()
			jD = b2d._dJtDf()
			jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
			return jD
		}
		b2d.dJ = function () {
			$l('b2d.dJ')
			var g = G(arguments),
					dJD = new b2d.DistanceJointDef
			dJD.i = function (a, b, aV, bV) {
				$l('dJD.i')
				var jd = this,
						g = G(arguments), o
				o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
				if (o.av) {
					o.aV = o.a.wC().add(o.av || V())
				}
				else {
					o.aV = o.aV || o.a.wC()
				}
				o.bV = o.bv ? o.b.wC().add(o.bv || V()) :
						o.b ? o.b.wC() : o.bV || null
				if (g.n) {
					$l('dJD.i g.n!!! whited out')
					/*
					 if(o.aV){
					 _aV = o.aV
					 o.aV = o.aV.d()
					 }
					 if(o.bV){o.bV = o.bV.d()}
					 */
				}
				jd.Initialize(o.a, o.b, o.aV, o.bV)/////////////////////////
				if (o.cl) {
					jd.cl(true)
				}
				return jd
			}
			if (g.f) {
				dJD.i(g.f, '-')
			}
			return dJD
		}
		w.dJt = w.dJ = function () {
			var w = this, g = G(arguments), jd, j, o
			o = g.O ? g.f : _.x({a: g.f, b: g.s},
					O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
							O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
							{l: g.t, f: g[3], d: g[4]})
			jd = b2d.dJ(o)
			if (o.cl) {
				jd.cl(1)
			}
			j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
			if (N(o.l)) {
				j.l(o.l)
			}
			return j
		}
		b.dJt = b.dJ = function (nxB) {
			var b = this, w = b.W()
			w.dJ(b, nxB);
			return nxB
		}
		j.shrink = function () {
			var j = this
			j.len(0.97, '*')
			return j
		}
		DJJ = function () {
			W().Y()
			b2 = w.D(500, 300, 'w', 18, 450)
			b3 = w.S(500, 200, 'r', 70)
			w.dJ(b3, b2)
			//w.dJ(b2, w.D(500, 300, 'g', 90))
		}
		DJY = function () {
			W().Y()
			w.dJ(
					y.XY(200, 200),
					x = w.D(200, 220, 'r', 12))
			w.dJ(x, x = w.D(200, 250, 'r', 12))
			w.dJ(x, x = w.D(200, 280, 'b', 12))
			w.dJ(x, x = w.D(200, 320, 'g', 12))
			w.dJ(x, x = w.D(200, 360, 'u', 12))
			w.dJ(x, x = w.D(200, 420, 'g', 12))
			w.dJ(x, x = w.D(200, 500, 'u', 12))
		}
		DJ = function () {
			W([1400, 800], {g: 1000}).Y(500, 300);
			xx = w.S(1100, 40, 'x', 40)
			jj = w.dJ({
				a: xx,
				b: w.D(1050, 200, 'r', 20, 60),
				l: 200, cl: 1, coll: 1
			})
			kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
			w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
			w.cl('sen',
					function () {
						jj.wind();
						kk.wind()
					}
			)
		}
		WANCA = WANCB = FIXEDROTATETHRUST = DROWNING = BALLANDCHAIN = DIST = DST = function () {
			W([600, 600, 600, 1200])
			b = w.D(300, 200, 'b', 150, 140).tr()
			x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
			jD = new b2d.Joints.b2DistanceJointDef
			wAncA = V(300, 200, '-')
			wAncB = V(200, 100, '-')
			jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
			j = w.J(jD)
		}
		BRIDE = DISTDOT = LOCDJ = LDJ = function () {
			W([2000, 1400], {})
			x = w.S(300, 400, 'r', 100, 100)
			//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
			b = w.y(400, 200, '+')
			j = w.dJ({a: x, b: b})
			_.ev(.2, function () {
				w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
				w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
			})
			j.fq(8)
			j.d(0)
			// w.dJ(x,b)
			w.dot('z', 1310, 400)
			w.brg(900, 500);
			_.in(3, function () {
				w.p(900, 100)
			})
		}
		TPL = SOFTPLAT = SPRING = ACROBAT = SPG = function () {
			W([2000, 1300], {g: 1000}).P(300, 320)
			// y.tr()
			// w.brg(860, 1060)
			//and more..
			// here i bind bodies with fixtures that are alredy out of line
			w.dJ(w.D(800, 100, 'y', 20),
					w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
					30)
			w.dJ(
					w.D(900, 300, 'g', 20),
					w.D(910, 320, 'b', 20, 20),
					30)
			b1 = w.S(200, 200, 'y', 50)
			b11 = w.D(200, 200, 'x', 50, 50)
			w.dJ(b1, b11, 60)
			r = w.D(100, 100, 'r', 40)
			u = w.S(500, 300, 'u', 200, 100)
			j = w.dJ(u, r, V(100, 100)).l(50)
			w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
			w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
			w.dJ({
				a: u,
				b: w.D(300, 400, 'o', 20),
				av: V(-100, -100),
				coll: 1, l: 50
			})
			p.tr().r(1)
			SoftPlat(300, 400)
			SoftPlat(500, 380)
			SoftPlat(700, 340)
			SoftPlat(900, 420)
			function SoftPlat(x, y) {
				x = N(x, 300);
				y = N(y, 60)
				w.dJ({
					a: w.S(x, y, 'z', 8, '-'),
					b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
					l: .1,
					f: 10
				}).d(.1)
			}
			
			w.tpl = function (x, r, fq, d) {
				var w = this, bouncer, j
				x = N(x, 290)
				r = N(r, 75)
				fq = N(fq, 6)
				d = N(d, 0)
				j = w.dJ(
						w.S(x, 1080, 'w', 20, 20),
						w.D(x, 1000, 'b', 200, 20)
								.fR().d(0).r(r).fr(0))
				j.l(115).fq(fq).d(d)
				w.S(x - 120, 1090, 'b', 40, 300).fr(0)
				w.S(x + 120, 1090, 'b', 40, 300).fr(0)
				return j
			}
			w.tpl(200, 0, 6)// not bouncy
			w.tpl(500, 1.2, 6)// too bouncy
			w.tpl(800, .75, 6)// mid bouncy, mid freq
			w.tpl(1100, .75, 2)//low freq
			w.tpl(1400, .75, 12)//high freq
			//_.ev(1,function () {p.I(0, -150)})
			//_.in(15, function(){w.addHundBalls()})
			//freq is SPEED of oscillation
			//damp is STRENGTH of oscillation
			// so bodies cant rotate if they dont have density???
		}
		REVJTVIN = VINE = VIN = function () {
			W(250).Y().P()
			w.trap(50)
			w.vine(200, 100, 15, 8)
			w.vine(210, 100, 25, 8)
			w.vine(220, 100, 25, 5)
			w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
			w.vine(300, 100, 30, 2)
			//blinds
			w.rJ(
					w.link1(600, 20, 3, '+').add(10),
					w.p(500, 200), '+')
			//ropey
			b = w.S(1100, 50, 'g', 60, 15).d(1)
			_.t(10, function (y) {
				w.rJ(
						b,
						b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
			})
			w.rJ(b,
					w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
			p.cl('leaf', function (l) {
				w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
				$.space(function () {
					w.j(w.jt)
				})
			})
		}
		REVJTLEASH = LEASH = LSH = function () {
			W()
			p = w.p(300, 200)
			base = link(300, 20).stat()
			l = base.rJ(10)
			w.rJ(l, p.XY(l.X(), l.Y()))
			base = link(100, 20).stat()
			l = base.rJ(10)
			w.rJ(l, p.XY(l.X(), l.Y()))
			function link(x, y) {
				var l = w.rJ(x, y, '+')
				l.l = function (n) {
					var lk;
					n = N(n) ? n : 1
					_.t(n, function () {
						lk = link(l.X(), l.Y() + 10)
						r = w.rJ(l, lk)
						l = lk
					})
					return l
				}
				return l
			}
			
			/*
			
			 w.link2 = function(x,y){var w=this,b
			
			 b=w.rJ(x,y,'+')
			
			 b.l=function(n){var b=this, w=b.W()
			 _.t(N(n,1), function(){
			 w.rJ(b, b=w.l(b.X(),b.Y()+15))
			 })
			 return b}
			
			 return b
			
			 }
			
			 link3 = function(x,y){
			 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
			 l.l= function(n){
			 _.t(N(n,1), function(){
			 l = link3(l.X(),l.Y()+20)})
			 return l}
			 return l}
			
			 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
			
			 p2= w.p(1000,200)
			 base2 = w.link2(1000,20).stat()
			 l2 =  base2.rJ(10)
			 w.rJ(l2,p2)
			
			
			 w.$(function(){
			 base3 = link3(600,20).stat()
			 l3 =  base3.l(10)
			 })
			
			
			
			 w.floor.r(0)
			 prev = top = w.S(400,50,'g', 60,15)
			 _.t(10, function(i){var next
			 next=link(255,(i+1)*30)
			 prev = prev.rJ(next)})
			 //body.rev(body2) returns body2 !!!!!
			 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
			
			
			
			
			 y = w.y(600,170).rot(265).stat()
			 w.cl('bu',function(f){
			 if(!f.of(y)){f.B().kill()}
			 })
			
			 */
		}
//body.GetTransform()
//body.GetFixtureList().GetShape()
		DJTSTRING = function () {
		}
		function bridge() {
			DJTBRIDGE = function () {

//two bodies at ends must be static
			}
		};
		bridge()
		function springs() {
			WSPG = function () {
				W([1400, 800], {g: 1000}).Y(500, 300);
				y.tr()
				w.S(400, 500, 'r', 4, 2000)
				w.dJ({
					a: w.D(200, 200, 'b', 50),
					b: w.D(300, 200, 'b', 60),
					l: 50, f: 3, d: .1,
					cl: 1
				})
				w.dJ({
					a: w.D(200, 200, 'd', 50, 50),
					b: w.D(300, 200, 'd', 60, 60),
					l: 50, f: 3, d: .1, cl: 1
				})
				w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
				w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
				oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
				T.t(function () {
					if (oj.l() > 1) {
						oj.l(oj.l() - .002)
					}
				})
			}
			ACROBAT = SPG = function () {
				W()
				w.spg(
						w.S(500, 100, 'o', 10, '-'),
						w.D(500, 250, 'r', 250, 10).K('rec')
				).fq(3).d(1)
				w.spg(
						w.S(1200, 125, 'c', 10, '-'),
						w.D(1200, 275, 'r', 250, 10).K('rec')
				).fq(10).d(.5)
				w.dJ(
						w.D(600, 300, 'z', 30),
						w.S(900, 500, 'z', 50, 80, 0, 0, 20)
				).l(20).fq(5).d(.1)//.coll(false)
				w.dJ(
						w.D(130, 450, 'b', 30),
						w.S(130, 800)
				).l(120).fq(5).d(0)//.coll(true)
			}
			DJTMESH = function () {
			}
			SPRINGS = RAGDOLL = RAGD = RAG = function () {
				W({})
				w.spg(
						b1 = w.D(100, 100, 'b', 30),
						w.D(100, 200, 'r', 40))
				w.dJ(
						b2 = w.D(100, 400, 'g', 30, 30),
						w.D(100, 500, 'o', 40, 40)
				)
				p = w.me(500, 200)
				w.spg(b1, p)
				w.spg(b2, p)
			}
		};
		springs()
		/*
		 jd.freq=  function(a){
		 if(U(a)){return this.frequencyHz}
		 this.frequencyHz=a;return this
		 }
		 jd.len=function(len){
		 if(U(len)){return this.length*30}
		 this.length=len/30
		 return this}
		 jd.damp = function(a){if(U(a)){return this.dampingRatio}
		 this.dampingRatio=a;return this}
		
		 */
		function err() {
			SPOLL = function () {
				W({g: 0, w: 0});
				Q(function () {
					s = w.s
					e = w.S(200, 200, 'p', 100)
							.d(1).r(2)
							.bS({i: q.b('sun'), sc: .13})
							.K('earth');
					eI = e.ch()
					// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
					p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
					w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
					T.t(function () {
						var sp,
								dx = e.X() - p.X(),
								dy = e.Y() - p.Y(),
								sc = cjs.cap(300 /
								M.sqrt(dx * dx + dy * dy), .3, 2)
						s.X(300 - sc * (p.X() - 300))
						s.Y(150 - sc * (p.Y() - 150))
					})
				})
			}
		}
		
		/* overlap??
		 http://www.box2d.org/manual.html - also has other stuff
		 b2Transform xfA = …, xfB = …;
		
		 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
		 */
		function sports() {
			MARBLES = function () {
				W().Y()
				w.dJ(
						y.XY(200, 200),
						x = w.D(200, 220, 'r', 12))
				w.dJ(x, x = w.D(200, 250, 'r', 12))
				w.dJ(x, x = w.D(200, 280, 'b', 12))
				w.dJ(x, x = w.D(200, 320, 'g', 12))
				w.dJ(x, x = w.D(200, 360, 'u', 12))
				w.dJ(x, x = w.D(200, 420, 'g', 12))
				w.dJ(x, x = w.D(200, 500, 'u', 12))
			}
		}
	}
}
function distRopes() {
//link for distance ropes
	w.ropePiece = w.distLink = function (x, y) {
		var w = this
		return w.B(x, y, 'w', 3, 5).aD(10).rest(0)
	}
}
DJC = function () {
	x = W().brk(600, 300)
	b = bod('r');
	b1 = bod('o');
	b2 = bod('y');
	b3 = bod('g')
	function bod(c) {
		return w.BALL(300, 200, 50, c)
	}
	
	xJt(b, 50, .4, .9)
	xJt(b2, 40, .4, .2)
	xJt(b3, 30, 4, .9)
	xJt(b1, 20, 4, .2)
	function xJt(a, n, fq, dR) {
		return w.dJ(a, x, V(n, n), 110, fq, dR)
	}
}

DJ = function () {
	x = W({w: 0}).brk(600, 300)
	w.dJ(sq('r'), x).lfd(210, .4, .9)
	w.dJ(sq('y'), x).lfd(210, .1, .002)
	w.dJ(sq('g'), x).lfd(210, 4, .9)
	dJSq('o', .6, .02)
	dJSq('w', 0, 1)
	function sq(c) {
		return w.BOX(300, 200, 50, 50, c).fR1(45)
	}
	
	function dJSq(c, fq, dR) {
		w.dJ(sq(c), x).lfd(210, fq, dR)
	}
}
PUR = function () {

// yellow is soft:  1  .002
// orange is bouncy" .6  .02
// green is rigid: 4   .9
	x = W({w: 0}).G(100).brk(600, 300)
	w.dJ(u = w.BOX(300, 200, 50, 50, 'u').rt(45).fR1(), x)
			.lfd(210, 3, .002)
	w.dJ(p = w.BOX(300, 200, 50, 50, 'p').de(10).fR1(45), x)
			.l(210).fq(3)
	w.dJ(v = w.BOX(300, 200, 50, 50, 'v').de(.0001).fR1(45), x)
			.lfd(210, 3, .002)
	_.ev(2, function () {
		v.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		u.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		p.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
	})
}
DJ4 = function () {
	W()
	x = w.brk(500, 300, 200, 200)
	w.dJ(x, w.bal(300, 400, 20), V(-100, 100)).l(50)
	w.dJ(x, w.bal(600, 300, 20), V(100, -100)).l(50)
	w.dJ(x, w.bal(300, 400, 20), V(-100, -100), '+').l(50)
	b = w.ball(300, 400, 20, 'b')
	j = w.dJ(x, b, V(100, 100)).l(50)
	$t(function () {
		w.st.dot([j.a(), j.b()])
	})
	_.ev(2, function () {
		b.I(-10000, 0)
	})
	l50(b20(300, 400, 'b'), V(-100, 100))
	l50(b20(600, 300, 'g'), V(100, -100))
	l50(b20(300, 400, 'o'), V(-100, -100), '+')
	function b20(x, y, c) {
		return w.bal(N(x, 300), N(y, 400), 20, c)
	}
	
	function l50(b, aA, cC) {
		return w.dJAnc(x, b, aA, cC).l(50)
	}
}
DPM = function () {
	W()
	x = w.brk(550, 200, 400, 100)
	$roygbiv()
	w.dJ(r, o)
	w.dJ(g, i)
	w.dJ(y, b)
	w.dJ(b, v)
	_.in(3, function () {
		w.C('r')
		j1 = w.dJ(x, o)
		j = w.dJ(x, g)
		$t(function () {
			w.st.dot(j.a());
			w.st.dot(j.b())
		})
	})
}
DCL = function () {
	W()
	jt(w.bal(200, 200, 50), w.bal(300, 200, 40))
	jt(w.box(200, 200, 50), w.box(300, 200, 40), '+')
	jt(w.bal(200, 200, 50), w.bal(300, 200, 60))
	jt(w.box(200, 200, 50, 50), w.box(300, 200, 60), '+')
	function jt(a, b) {
		var g = G(arguments)
		w.dJ(a, b, g.p)
				.lfd(150, 1, .2)
	}
}
RAG = function () {
	p = W().me()
	w.spg(b1 = w.bal(100, 100, 30), w.bal(100, 200, 40))
	w.rod(b2 = w.box(100, 400, 30), w.box(100, 500, 40))
	w.spring = function (a, b) {
		var w = this, g = G(arguments), o
		if (U(b)) {
			var _fn = function (b) {
				w.spg(a, b);
				return _fn
			}
			return _fn
		}
		return w.dJ(a, b).lfd(1, 2, .1)
	}
	w.spring(p)(b1)(b2)
}
BASKETBALLAUTOCANCEL = function () {
	w = b2d.W();
	$.M()
	w.mTrackTransport(
			b = w.B(600, 300, 'r', 50).den(1).rest(.5)
	)
}
BALANCEGAME = function () {
	w = b2d.W();
	$.M()
	b = w.B(600, 300, 'r', 50).den(1).rest(.5)
	cjs.tick(function () {
		if (w.mj) {
			w.mj.tg(_)
		}
	})
	$.oMU(function () {
		w.M()
	})
	$.oMD(function (x, y) {
		w.mj = w.m(b, _)
	})
}
MJOFFICIAL = function () {
	w = b2d.W().mJ().db()
	_.times(3, function () {
		b = w.B(600, 300, 'r', 50).den(1).rest(.5)
		b = w.B(600, 300, 'y', 50).den(1).rest(.5)
		b = w.B(600, 300, 'u', 50).den(1).rest(.5)
		b = w.B(600, 300, 'b', 50).den(1).rest(.5)
		b = w.B(600, 300, 'v', 50).den(1).rest(.5)
	})
	$.oMD(function (x, y) {
		w.XY(x, y, function (f) {
			w.mj = w.m(f.body(), _)
		})
	})
	$.oMU(function () {
		w.M()
	})
}
MJ = function () {
	w = b2d.W().mJ().db()
	_.times(3, function () {
		b = w.B(600, 300, 'r', 50).den(1).rest(.5)
		b = w.B(600, 300, 'y', 50).den(1).rest(.5)
		b = w.B(600, 300, 'u', 50).den(1).rest(.5)
		b = w.B(600, 300, 'b', 50).den(1).rest(.5)
		b = w.B(600, 300, 'v', 50).den(1).rest(.5)
	})
	$.oMD(function (x, y) {
		w.XY(x, y, function (f) {
			w.mj = w.m(f.body(), _)
		})
	})
	$.oMU(function () {
		w.M()
	})
}
DENROT = function () {
	w = b2d.m({g: 0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	r = w.rect(300, 300, 400, 20, 'yellow').rest(.5)
	r2 = w.rect(300, 300, 400, 10, 'white')
	r3 = w.rect(300, 300, 400, 10, 'white')
	r4 = w.rect(300, 300, 400, 10, 'white')
	r5 = w.rect(300, 300, 400, 10, 'white')
	flipStage()
	setInterval(function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	}, 6000)
}
JOINTPROTO = function () {
	b2d.mW()
	jd = new b2d.Joints.b2DistanceJointDef()
	b = w.brick(180, 150)
	a = w.ball(150, 150)
	j = w.J(jd.AB(a, b).len(200))
}
PULLEY = function () {
	b2d.mW()
	body1 = bi(300, 300, 200, 10)
	body2 = bi(500, 300, 200, 10)
	var pulley = PulleyJoint().init(
			body1, body2,
			b2d.V(20, 1), b2d.V(25, 2),
			body1.worldCenter(),
			body2.worldCenter(),
			1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.J(pulley)
	//makeMe()
	//makeTim(10)
	//makeCar()
}
ROPEJ = function () {
	function b2RopeJoint() {
		b2RopeJoint.b2RopeJoint.apply(this, arguments);
		if (this.constructor === b2RopeJoint) this.b2RopeJoint.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJoint = b2RopeJoint;
	function b2RopeJointDef() {
		b2RopeJointDef.b2RopeJointDef.apply(this, arguments);
		if (this.constructor === b2RopeJointDef) this.b2RopeJointDef.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJointDef = b2RopeJointDef;
	b2RopeJoint = Box2D.Dynamics.Joints.b2RopeJoint
	b2RopeJointDef = Box2D.Dynamics.Joints.b2RopeJointDef
	Box2D.inherit(b2RopeJoint, Box2D.Dynamics.Joints.b2Joint);
	b2RopeJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	b2RopeJoint.b2RopeJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_u = new b2Vec2();
	};
	b2RopeJoint.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	}
	b2RopeJoint.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	}
	b2RopeJoint.prototype.GetReactionForce = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
	}
	b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return 0.0;
	}
	b2RopeJoint.prototype.GetLength = function () {
		return this.m_length;
	}
	b2RopeJoint.prototype.SetLength = function (length) {
		if (length === undefined) length = 0;
		this.m_length = length;
	}
	b2RopeJoint.prototype.GetFrequency = function () {
		return this.m_frequencyHz;
	}
	b2RopeJoint.prototype.SetFrequency = function (hz) {
		if (hz === undefined) hz = 0;
		this.m_frequencyHz = hz;
	}
	b2RopeJoint.prototype.GetDampingRatio = function () {
		return this.m_dampingRatio;
	}
	b2RopeJoint.prototype.SetDampingRatio = function (ratio) {
		if (ratio === undefined) ratio = 0;
		this.m_dampingRatio = ratio;
	}
	b2RopeJoint.prototype.b2RopeJoint = function (def) {
		this.__super.b2Joint.call(this, def);
		var tMat;
		var tX = 0;
		var tY = 0;
		this.m_localAnchor1.SetV(def.localAnchorA);
		this.m_localAnchor2.SetV(def.localAnchorB);
		this.m_frequencyHz = def.frequencyHz;
		this.m_dampingRatio = def.dampingRatio;
		this.m_impulse = 0.0;
		this.m_gamma = 0.0;
		this.m_bias = 0.0;
		this.m_length = def.length;
		this.m_maxLength = def.maxLength
		this.m_limitState = b2Joint.e_inactiveLimit;
	}
	b2RopeJoint.prototype.InitVelocityConstraints = function (step) {
		var tMat;
		var tX = 0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		this.m_length = length;
		var C = this.m_length - this.m_maxLength;
		if (C > 0) {
			this.m_limitState = b2Joint.e_atUpperLimit;
		} else {
			this.m_limitState = b2Joint.e_inactiveLimit;
		}
		if (length > b2Settings.b2_linearSlop) {
			this.m_u.Multiply(1.0 / length);
		} else {
			this.m_u.SetZero();
			this.m_mass = 0.0;
			this.m_impulse = 0.0;
			return;
		}
		var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
		var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
		var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
		this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
		if (step.warmStarting) {
			this.m_impulse *= step.dtRatio;
			var PX = this.m_impulse * this.m_u.x;
			var PY = this.m_impulse * this.m_u.y;
			bA.m_linearVelocity.x -= bA.m_invMass * PX;
			bA.m_linearVelocity.y -= bA.m_invMass * PY;
			bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
			bB.m_linearVelocity.x += bB.m_invMass * PX;
			bB.m_linearVelocity.y += bB.m_invMass * PY;
			bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
		}
		else {
			this.m_impulse = 0.0;
		}
	}
	b2RopeJoint.prototype.SolveVelocityConstraints = function (step) {
		var tMat;
		var oldImpulse = 0.0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
		var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
		var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
		var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
		var C = this.m_length - this.m_maxLength;
		var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
		if (C < 0.0) {
			Cdot += step.inv_dt * C;
		}
		var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
		oldImpulse = this.m_impulse;
		this.m_impulse = Math.min(0.0, this.m_impulse + impulse);
		impulse = this.m_impulse - oldImpulse;
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_linearVelocity.x -= bA.m_invMass * PX;
		bA.m_linearVelocity.y -= bA.m_invMass * PY;
		bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_linearVelocity.x += bB.m_invMass * PX;
		bB.m_linearVelocity.y += bB.m_invMass * PY;
		bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
	}
	b2RopeJoint.prototype.SolvePositionConstraints = function (baumgarte) {
		if (baumgarte === undefined) baumgarte = 0;
		var tMat;
		if (this.m_frequencyHz > 0.0) {
			return true;
		}
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(dX * dX + dY * dY);
		dX /= length;
		dY /= length;
		var C = length - this.m_maxLength;
		C = b2Math.Clamp(C, 0.0, b2Settings.b2_maxLinearCorrection);
		var impulse = (-this.m_mass * C);
		this.m_u.Set(dX, dY);
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_sweep.c.x -= bA.m_invMass * PX;
		bA.m_sweep.c.y -= bA.m_invMass * PY;
		bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_sweep.c.x += bB.m_invMass * PX;
		bB.m_sweep.c.y += bB.m_invMass * PY;
		bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
		bA.SynchronizeTransform();
		bB.SynchronizeTransform();
		return length - this.m_maxLength < b2Settings.b2_linearSlop;
	}
	Box2D.inherit(b2RopeJointDef, Box2D.Dynamics.Joints.b2JointDef);
	b2RopeJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	b2RopeJointDef.b2RopeJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new b2Vec2();
		this.localAnchorB = new b2Vec2();
	};
	b2RopeJointDef.prototype.b2RopeJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = b2Joint.e_ropeJoint;
		this.length = 1.0;
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2RopeJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
		this.bodyA = bA;
		this.bodyB = bB;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
		var dX = anchorB.x - anchorA.x;
		var dY = anchorB.y - anchorA.y;
		this.length = Math.sqrt(dX * dX + dY * dY);
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2Joint.Create = function (def, allocator) {
		var joint = null;
		switch (def.type) {
			case b2Joint.e_ropeJoint:
			{
				joint = new b2RopeJoint((def instanceof b2RopeJointDef ? def : null));
			}
				break;
			case b2Joint.e_distanceJoint:
			{
				joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
			}
				break;
			case b2Joint.e_mouseJoint:
			{
				joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
			}
				break;
			case b2Joint.e_prismaticJoint:
			{
				joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
			}
				break;
			case b2Joint.e_revoluteJoint:
			{
				joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
			}
				break;
			case b2Joint.e_pulleyJoint:
			{
				joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
			}
				break;
			case b2Joint.e_gearJoint:
			{
				joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
			}
				break;
			case b2Joint.e_lineJoint:
			{
				joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
			}
				break;
			case b2Joint.e_weldJoint:
			{
				joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
			}
				break;
			case b2Joint.e_frictionJoint:
			{
				joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
			}
				break;
			default:
				break;
		}
		return joint;
	}
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
		Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
		Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
		Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
		Box2D.Dynamics.Joints.b2Joint.e_ropeJoint = 10;
		Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
		Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
		Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
		Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
		Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
		Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
		Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
		Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
		Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
		Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
	});
}
FRICJ = function () {
	w = b2d.W({g: 0})
	y = w.ship().XY(200, 200)
	w.right.kill();
	w.left.kill();
	y.warp2()
	//  Set the two anchor points to zero so the friction doesn't have any direction.
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	w.ball(400, 500, 40)
	w.show(function () {
		return 'linVelX: ' + y.linVel().x.toFixed(0)
	})
	/*
	
	 How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05
	
	 Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.
	
	 An easy way to model friction and drag
	
	 F(friction) = -k;
	 F(drag) = speed * speed * -k;
	 Both forces act in the opposite direction to the velocity of the object.
	
	 Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
	 */
}
DISTPOINTS = function () {
	b2d.mW()
	x = w.rectStat(500, 300, 200, 200)
	b = w.circ(300, 400, 20, 'red')
	j = w.dist(x, b, V(100, 100)).len(50)
	cjs.tick(function () {
		w.s.dot([j.a(), j.b()])
	})
	setInterval(function () {
		b.I(-10000, 0)
	}, 2000)
	w.dist(x, w.circ(300, 400, 20, 'blue'), V(-100, 100))
			.len(50)
	w.dist(x, w.circ(600, 300, 20, 'green'), V(100, -100))
			.len(50)
	o = w.distColl(x, w.circ(300, 400, 20, 'orange'), V(-100, -100))
			.len(50)
}
DISTPOINTSMORE = function () {
	b2d.mW()
	// ok, so the 'points' are relative to the WORLD
	x = w.brick(550, 200, 400, 100)
	b2d.colorBalls()
	// here there are no default lengths, they are set to actual distance apart at time of joint creation!!!
	j0 = w.dist(b, r)     //  previously:  j0 =  w.J(   b2d.dJ().init(b,r)   )
	f = function () {
		w.s.flash()
		j1 = w.dist(x, o)
		xc = x.worldCenter()
		gc = g.worldCenter()
		j = w.dist(x, g, xc, gc)
		cjs.tick(function () {
			w.s.dot(j.a());
			w.s.dot(j.b())
		})
	}
	// i want to be able to specify how much to offset the anchor point, relative from its own center!!!!
	setTimeout(f, 200)
}
WINDUP = function () {
	var wound = false
	b2d.level()
	j = w.distColl(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	k = w.dist(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	w.stat(0, 40, b2d.poly(400, 100).sensor(true).K('sensor')) //can get triggered many many times?
	w.begin(function (cx) {
		if (cx.with('sensor')) {
			j.wind();
			k.wind()
		}
	})
	// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
}
RODS = function () {
	
	
	// here i bind bodies with fixtures that are alredy out of line
	b2d.level()
	b2d.rod(
			w.ball(300, 100, 20),
			w.dyn(300, 150, b2d.poly(20, 20, 15, 15, 45)),
			1)
	b2d.rod(
			w.ball(350, 100, 20),
			w.dyn(350, 150, b2d.poly(20, 20, -15, -15, 300)),
			1)
	b2d.rod(
			w.ball(380, 100, 20),
			w.dyn(380, 150,
					b2d.poly(20, 20, -15, -15, 225)),
			1)
	b2d.rod(
			w.ball(400, 100, 20),
			w.dyn(400, 150, b2d.poly(20, 20, 15, 15, 225)),
			1)
	b2d.rod(
			w.ball(100, 100, 20),
			w.box(110, 120, 20, 20), 30
	)
	b2d.rod(w.bump(200, 200, 20),
			w.box(200, 200, 20, 20), 2
	)
}
ONLYGRAVITYONMARIO = function () {
}
SPRINGS = function () {
	b2d.levelScrollX()
	right.kill()
	//freq is SPEED of oscillation
	//damp is STRENGTH of oscillation
	// so bodies cant rotate if they dont have density???
	j = w.spring(
			w.circStat(200, 100, 10).sens(),
			w.rect(200, 250, 250, 10).K('rect')
	)
			.freq(3).damp(.1)
	w.spring(w.circStat(500, 100, 10).sens(),
			w.rect(500, 250, 250, 10).K('rect'))
			.freq(3).damp(1)
	w.spring(w.circStat(800, 50, 10).sens(), w.rect(800, 200, 250, 10).K('rect'))
			.freq(2).damp(50)
	w.spring(w.circStat(1200, 125, 10).sens(), w.rect(1200, 275, 250, 10).K('rect'))
			.freq(10).damp(.5)
	w.begin(function (cx) {
		f = cx.with('rect')
		if (f) {
			b = f.body()
			j = b.joint()
			w.s.pen($l('freq: ' + j.freq() + ', dampening: ' + j.damp()))
		}
	})
}
SPRINGS3 = function () {
	b2d.levelScroll()
	softPlat = function (x, y) {
		x = N(x) ? x : 300
		y = N(y) ? y : 60
		j = w.spring(
				w.bump(x, y, 4).sens(true),
				w.rect(x, y, 100, 30).den(1).fixedRot(true).rest(0)
		).damp(1)
	}
	softPlat(300, 100)
	softPlat(500, 80)
	softPlat(700, 40)
	softPlat(900, 120)
}
SPRINGINSPACE = function () {
	b2d.mW({grav: 0})
	var spring = function (bx, by) {
		var x, b, j
		bx = N(bx) ? bx : 480
		by = N(by) ? by : 300
		j = w.dist(
				x = w.brick(500, 300, 40, 200),
				b = w.bump(bx, by))
		w.s.dot(500, 300)
		w.s.dot(bx, by)
		w.s.dot('red',
				500 - ((500 - bx) / 2),
				300 - ((300 - by) / 2))
		$.dblclick(function () {
			b.dyn()
		})
		return j
	}
	//try with and without grav
	ball = w.ball(200, 200, 50) // notice it bounces off wall, but NOT off x (neither have rest by default)
	rect = w.brick(200, 250, 250, 10)
	j = spring(480, 300)
	j.freq(2).damp(1)//.len(20)
	// ok so freq is how much strngth u need to pull it??
	// as freq gets low.. u can pull it farther away
	// its the strength of the spring
}
BOUNCESPRING = function () {
	b2d.levelScrollX()
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
	//ok.. now keep going down..
	// eventually it is too loose to fight against gravity
	// hahaha then its just flat and usesless
	// ok all this assumed a default damp of 0.
	// now set the freq to a good oscillation (3 or 4)
	// then play with the damp
	// damp is like a tightner on your looseness
	// it makes you less stretchy?
	// just leave damp at 0 for now, and play with freq
	w.tramp(200, 0, 6)// not bouncy
	w.tramp(500, 1.2, 6)// too bouncy
	w.tramp(800, .75, 6)// mid bouncy, mid freq
	w.tramp(1100, .75, 2)//low freq
	w.tramp(1400, .75, 12)//high freq
	p.XY(285, 0)
	setInterval(function () {
		p.I(0, -150)
	}, 1000)//game:: he autojumps.  u jump to give him a double jump!
	setTimeout(function () {
		w.s.flash();
		w.addHundBalls()
	}, 30000)
}
SPRINGS2 = function () {
	z()
	b2d.mW()
	j1 = w.J(
			jd = b2d.distDef().init(
					w.circ(30, 200, 20, 'red'), w.box()
			).len(200).freq(5).damp(.1)
	)
	cjs.tick(function () {
		if (j1.len() > 1) {
			j1.len(j1.len() - 1)
		}
	})
	j2 = w.J(
			b2d.spring(
					w.circ(100, 300, 30, 'white'), w.box()
			).len(20).freq(5).damp(.1).coll(false)
	)
	j3 = w.J(
			b2d.spring(
					w.circ(130, 250, 30, 'blue'),
					w.brick()
			).len(120).freq(5).damp(0).coll(true)
	)
}
BRIDGE = function () {
	b2d.levelScrollX();
	p.XY(-100, 0)
	w.bridge(100, 10)
	setTimeout(function () {
		w.s.flash();
		p.XY(500, 0)
	}, 10000)
}
DEMO_COLLIDE = function () {
	b2d.mW()
	w.dist(w.ball(200, 200, 50), w.ball(300, 200, 40))
			.len(50).freq(3).damp(.1)
	w.dist(w.box(200, 200, 50), w.box(300, 200, 40))
			.len(50).freq(3).damp(.1)
	w.distColl(w.ball(200, 200, 50), w.ball(300, 200, 60))
			.len(50).freq(3).damp(.1)
	j = w.distColl(w.rect(200, 200, 50, 50), w.rect(300, 200, 60))
			.len(50).freq(3).damp(.1)
}
//
//
//
RAGD = function () {
	b2d.mW()
	// world.Spring =
	w.J(
			b2d.spring(
					body1 = w.ball(100, 100, 30),
					w.ball(100, 200, 40)
			)
	)
	//world.Rod =
	w.J(
			b2d.rod(
					body2 = w.box(100, 400, 30),
					w.box(100, 500, 40))
	)
	player = w.addMe()
	w.J(
			b2d.spring(
					body1, player)
	)
	w.J(
			b2d.spring(body2, player))
}
STACKTHREE = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.B(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.B(310, 120, 't', 60, 60)
	w.B(320, 120, 't', 60, 60)
	w.B(340, 120, 't', 60, 60)
	w.B(350, 120, 't', 60, 60)
	w.B(370, 120, 't', 60, 60)
	w.B(380, 120, 't', 60, 60)
	w.B(550, 120, 't', 60, 60)
	w.B(570, 120, 't', 60, 60)
	w.B(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
	w.db()
}