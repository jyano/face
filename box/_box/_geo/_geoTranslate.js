/*
 source:
 pD.maybeTl = function (xy) {
 var pD = this
 return xy ? pD.tl(xy) : pD
 }//= pD.maybeHere

 $pol = $poly = function (pD, xy) {
 pD = S(pD) ? $vs[pD] : pD
 return $pD(pD).maybeTl(xy)
 }

 $pD = gpc.pD = gpc.p = function (pts) {

 //make new polyDefault
 //can add points to it
 if (gpc.isPol(pts)) {
 return pts
 }
 //if (S(pts)){ pts = $vs[pts] }
 //ok so if it is already a gPoly, just return it..
 //but if not (it is points).. so make a new gPoly (default) and return it
 var pD = new gpc.PD
 return pts ? pD.A(pts) : pD
 }

 M.p = b2d.gpcPD = function () {
 //it expects worldVerts....
 //it works with worldVerts...
 //it was designed   with
 //that in
 //mind 
 var g = G(arguments), p, b, fs, vs
 if (b2d.iGP(g.f)) { return g.f	 }
 if (b2d.iB(g.f)) {
 vs = g.f.wV() 
 _.eR(g.f.fs(), function (v) { vs = vs.uni(v)	 })	 }
 else {	 vs = b2d.iF(g.f) ? g.f.wV() : g.f	 }
 return $pD(vs)
 }


 */