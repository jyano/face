guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
cjs.src = _.src
//tk = $pt.tk = cj.Tk.prototype
cj.rim = function (rad, lineWid, x, y) {
	// = cjs.circle2
	var z = lineWid
	if (!S(r)) {
		return rim('r', rad, z, x)
	}
	var gx = $Gx().ss(z / 8)._f(r, 'z')._dc(50)
	return $Sh(gx).XY(N(x, 0), N(y, 0))
}
cj.adj = cj.camAdj = function (income, tax) {//tax ~ deltaLimit ~ buffer
	var income = income || 0, tax = tax || 0
	if (income > 0) {
		return income > tax ? income - tax : 0
	}
	return -income > tax ? income + tax : 0
}
cj.cap = function (n, m, M) {
	if (U(m)) {
		return n
	}
	if (A(m)) {
		M = m[1]
		m = m[0]
	}
	return n < m ? m
			: n > M ? M
			: n
}
pastNames = {}
pastNames.f = {
	_pts: ['_vs'],
	pts: ['vs', 'points', 'verts', 'vertices'],
	wPts: ['f.wVerts', 'f.V'],
	wPtsA: ['f.wV'],
	wPtsGP: ['tGP', 'gPolyWorldVerts'],
	GP: ['tGP', 'gPolyWorldVerts']
}
pastNames.b = {
	GP: ['b.wPolygon'],
	lGP: ['polygon'],
	pts: ['points', 'ps'],
	ptsGP: ['verts'],
	wPtsGP: ['gPolyVerts', 'wV', 'vs', 'gPolyVerts'],
	wPts: ['wVerts'],
	rtWPts: ['V', 'rotWorVerts'],
	rtPts: ['rotatedVerts', 'rtVs', 'rV']
}
dO.flash = function () {
	var i = this
	i.al(0)
	$.in(.3, function () {
		i.al(1)
	})
	return i
}
dO.rZero = function (a) {
	var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
	if (g.p) {
		i.rX(0, '+').rY(0, '+')
	}//i.X(a, i.regX()-a, '+')
	else {
		i.rXY(0, 0)
	}
	return i
}//
tw.Plugin = function (a, b) {
	var g = G(arguments), a = g[0], b = g[1]
	if (U(a)) {
		return g.p ? w.pluginData.data : w.pluginData
	}
	if (U(b)) {
		w.pluginData = a;
		return w
	}
	w.pluginData[a] = b
	return w
}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
/*
 //will set cols unless you pass in 0
 if(o.c==0){o.c=null}
 if(o.c==00){o.c=null;o.C=null}
 if(o.c=='*'){o.c=$r()}
 if(o.c=='**'){o.c=$r();o.C=$r()}
 o.c =o.c||'z'
 o.C =o.C||'w'
 o.l = _.tN(o.l,4)
 o.c1 = o.c1||'z'
 o.c2 = o.c2||'w'
 o.s1= _.tN(o.s1)
 o.s2= _.tN(o.s2,1)
 //
 o.x1 = _.tN(o.x1)
 o.y1 = _.tN(o.y1)
 o.x2 =_.tN(o.x2);
 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
 o.r1=_.tN(o.r1)
 o.r2=_.tN(o.r2,200)
 // o.i image
 //o.k kind
 // o.p  layer position


 //o.bm//o.bM
 //o.g gradient

 //o.m mass
 //o.t type
 // o.v = o.v || [] //verts
 //o.X
 //o.z clr
 */