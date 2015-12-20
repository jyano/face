$df = {}
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d.cn = b2d.controls = {}
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


