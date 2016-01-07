 setup=function() {
	cv=$('<canvas width=500 height=400 id="canvas">').a2($('body'))
	s = st = stage = new cjs.Stage("canvas", 420, 500, 30)
	h = new cjs.Shape().a2(st)
}
$L('linNeedsFixin','radial','stroke','mick','nip')
gx.bLGF = function () {
	return this.beginLinearGradientFill.apply(this, arguments)
}
gx.lGF=function(){
	var gx=this, g = G(arguments)
	g[0] = _.m(g[0], function (col) {
		return oO('c', col)
	})
	return gx.bLGF.apply(gx,g) 
}
h.lg = cjs.lg = function () {
	var g = G(arguments), o//h=this, gx=h.graphics,
	if (g.A) {
		return cjs.lg.apply(null, g.f)
	}
	o = g.O ? g.f :
			_.x({c1: g.f, c2: g.s},
					N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
							: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
							: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
	o.c1 = oO('c', o.c1 || 'z');
	o.c2 = oO('c', o.c2 || 'w')
	o.s1 = N(o.s1, 0);
	o.s2 = N(o.s2, 1)
	o.x1 = N(o.x1, 0);
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
	return o
}
h.lf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = cjs.lg(g)
	gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
	return h
}
h.lG = h.linGrad = function () {
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
 function linNeedsFixin(){

LR0 = LINGRAD = function () {
	c = $.c('y').drag()
	x = c.ctx()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100,
	 cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
} 
OVALS8 = GRADS2 = SETTRANSFORM = function () {
	s = $St(800).bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
	//////
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({
		C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
	}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140)
			.de(300, 0, 300, 500)
	//B+
}

}
 function radial(){
 
}
 function stroke(){
	 h.ls = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.lg.apply(h, g)
		 gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.rs = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 h.ls = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.lg.apply(h, g)
		 gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.rs = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 LINSTROKE = DRAGST = GRADOVALS = function () {
		 setup()
		 h = s.h(40, 10, 'b', 16).drag()
		 h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		 h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
		 h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
		 h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	 }//B
 }
 function mick(){
	 ct.mick = function (x, y, lf) {
		 var ct = this,
				 h = ct.h(x, y).drag()
						 .c({l: 20, C: 0, lf: lf || 1})
						 .dc([50], [200, 0, 100], [100, 100, 100])
		 ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1})
				 .dc([50], [200, 0, 100], [100, 100, 100])
		 return h
	 }
	 MICK = function () {
		 $St()
		 s.mick(500, 200)
		 s.mick(700, 100, {c1: 'b', c2: 'X'})
		 s.mick(700, 300, {c2: 'b'})
		 s.mick(100, 100, {y2: 10})
		 s.mick(100, 200, {y2: 200})
		 s.mick(100, 300, {x2: 100})
	 }
 
 }
 function nip(){
	 NIP = CIRCRG8 = GRADS = function () {
		 s = St()
		 nip = function () {
			 x1 = 0
			 y1 = 0
			 r1 = 10
			 x2 = 0
			 y2 = 0
			 r2 = 100
			 var h = $h(10, 10).a2(s).drag().al(.8)
			 h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
					 x1, y1, r1, x2, y2, r2)
					 .dc(0, 0, 100)
					 .endFill()
			 return h
		 }
		 x1 = 0
		 y1 = 0
		 r1 = 10
		 x2 = 0
		 y2 = 0
		 r2 = 100
		 h = $h(10, 10).a2(s).drag()
		 change = function () {
			 //  h.remove()
			 // h=cjs.h(10, 10).a2(s).drag()
			 h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
			 // x--
			 // r1++
			 // r2++
		 }
		 setInterval(change, 1000)
		 change()
		 n = nip()
		 h2 = $h(500, 100).a2(s);
		 h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
		 ////////
		 s.h(600, 300).graphics.rf(
				 ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		 ).dc(0, 0, 100).ef()
		 s.h(600, 100).graphics.rf(
				 ['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		 ).dc(0, 0, 100).ef()
		 s.h(800, 300).rf(
				 ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		 ).dc(0, 0, 100).ef()
		 s.h(400, 300).rf(
				 ['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		 ).dc(0, 0, 100).ef()
		 s.h().cir(0, 0, 10)
	 }//C
 }