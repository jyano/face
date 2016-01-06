POLLL = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	W()._(function (w) {
		w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'chicks'
		})
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
}
POLLB = function () {
	W()._(function (w) {
		v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		})
		w.D(450, 300).pol({
			v: v,
			c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('me')
		})
	})
}
WQ = function () {
	var g = G(arguments), o = F(g.t) ?
	{ob: g.f, fn0: g.s, fn: g.t} :
	{ob: g.f, fn: g.s}
	o.ob = o.ob || {}
	o.fn = o.fn || function (w) {
	}
	w = W(o.ob)
	if (o.fn0) {
		o.fn0(w)
	}
	Q(o.ob.I || _MF, function () {
		o.fn(w)
	})//
}
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
QU5 = MF = function () {
	W().C('r')
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(
				Q.b('me'),
				Q.b('guy')
		)
	})
}
 
	QU5 = PEEP = PEEPHOLE = WIND = function () {
		W()._(function () {
			$.hdr().A($.h1('grahics winding')).A()
			bm = w.i.qB('chicks').X(470).drag()
			h = w.i.h()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
			bm.mask = h.same().X(470)
		})
	}//B+
	QU5 = MF = function () {
		W().C('r')
		Q(['me', 'guy', 'chicks', 'sun'], function () {
			w.C('g')
			w.i.A(
					Q.b('me'),
					Q.b('guy')
			)
		})
	}
 