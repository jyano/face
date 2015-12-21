h._bf = function (i, tf) {
	this.graphics._bf(i, tf)
	return this
}
h.bf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
			{i: g.f, mx: g.s, hs: g.t}
	o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
	o.fn = _.tFn(o.fn)
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o)
		})
	}
	else {
		_bf(S(o.i) ? Q.i(o.i) : o.i, o)
	}
	return h
	function _bf(i, o) {
		h._bf(i, o.mx);
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
}
h._bfT = function (i) {
	var g = G(arguments)
	return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
}
h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		_.tFn(o.fn)(
				h._bf(g.f, $tMx(_.tA(o.tf))))
	})
	return h
}
h.bmCir = h.bC = function (o) {
	o = o || {}
	var h = this
	o.i = o.i || 'me'
	o.circs = o.circs || []
	o.cs = o.cs || []
	o.hs = o.hs || []
	$.i(o.i, function (i) {
		_.e(o.circs, function (c) {
			h.bf(i).dc(c)
		})
	})
	return h
}
h.bR = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		if (o.hs) {
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		}
		else {
			h.rec(o.hs)
		}
	})
	return h
}
h.bP = h.bV = function (o) {
	var h = this, g = G(arguments), o
	h._bVAsy = function (i, v) {
		var h = this
		i = i || 'me'
		$.i(i, function (i) {
			h._bV(i, v)
		})
		return h
	}
	h._bV = function (i, vs) {
		i = i || 'me'
		return this.bf(i).lt(vs).cp()
	}
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if (Q.ran) {
		h._bV(o.i, o.v)
	}
	else {
		h._bVAsy(o.i, o.v)
	}
	return h
}
// bitmap stroke
h.bitmapStroke = h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
h.bC = function (o) {
	var h = this;
	return h.bf(o, function (h1) {
		h.dc(h1)
	})
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bmCir = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	o.circs = o.circs || []
	$.img(o.i, function (i) {
		i = i[0]
		_.each(o.circs, function (c) {
			h.bf(i)
			h.dc(c)
			h.ef()
		})
	})
	return h
}
h.bmV = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	$.img(o.i, function (i) {
		i = i[0]
		_.e(o.v, function (v) {
			h.bf(i)
			h.lt(v)
			h.ef().cp()
		})
	})
	return h
}
h.bV = function (o) {
	var h = this, g = G(arguments), o
	o = g.A ? {hs: g.f} : g.f || {}
	o.hs = o.hs || []
	o.i = o.i || 'me'
	if (F(Q)) {
		$.i(o.i, function (i) {
			h.bf(i[0])
			_.e(o.v, function (v) {
				h.lt(v)
			})//
			h.cp()
			h.ef()
		})
		return h
	}
	h.bf(o.i)
	_.e(o.v, function (v) {
		h.lt(v)
	})
	return h
}
h._bf = function () {
	$l('h._bf')
	var h = this, gx = h.graphics, g = G(arguments),
			tf
	if (A(g.s)) {
		g.s = cjs.m2d.apply(cjs, g.s)
	}
	tf = g.s || cjs.m2d(R(500), R(300))
	if (S(g.f)) {
		$l('h._bf: str')
		gx.bf(Q.i(g.f), null, tf)
	}
	else if (O(g.f)) {
		$l('h._bf: obj')
		gx.bf(g.f, null, tf)
	}
	else {
		$l('h._bf: ?')
	}
	return h
}
h.bf = function () {
	$l('h.bf')
	var h = this,
			gx = h.graphics, g = G(arguments), img, tf
	if (!F(Q)) {
		$l('h.bf: !F(Q)')
		///// $l('!F(Q)') !!! only this gets logged
		return this._bf.apply(this, g)
	}
	else {
		if (g.S_) {
			$l('yes F(Q)')
			$.i(g.f, function (i) {
				gx.bf(i[0])
				if (F(g.s)) {
					g.s(h)
				}
			})
		}
		
		//if object with an 'hs' property
		else if (g.O_ && A(g.f.hs)) {
			$l('g.O_ && A(g.f.hs)')
			img = g.f.i || 'me'
			$.i(img, function (i) {
				gx.bf(i[0])
				if (F(g.s)) {
					_.e(g.f.hs, g.s)
				}
			})
		}
		else {
			$l('..else')
			gx.bf(g.f, null, g.s)
		}
		return h //h.ef()
	}
}  // BITMAP FILL  !!!!!!
//bitmap fill rec
h.bR = function (o) {
	var h = this;
	if (F(Q)) {
		h.bf(o, function (h1) {
			h.rec(h1)
		})
	}
	else {
		alert('h.bR not preloaded?')
		h.bf(o.bf)
		h.rec(o.hs)
		_.e(o.hs, function (r) {
			w.rec(r.w, r.h)
		})
	}
	return h
	//= h.bfR = h.bmR
}
h.bf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (O(g.f) && A(g.f.hs)) {
		o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
	}
	else {
		o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
	}
	o.i = o.i || 'me'
	if (!Q.ran) {
		if (o.hs) {
			$.i(o.i, function (i) {
				_bf(i, o.mx);
				if (o.fn) {
					_.e(o.hs, o.fn)
				}
			})
		}
		else if (S(o.i)) {
			$.i(o.i, function (i) {
				_bf(i, o.mx, o.fn)
			})
		}
	}
	else if (S(o.i)) {
		_bf(Q.i(o.i), o.mx, o.fn)
	}
	else {
		_bf(o.i, o.mx)
	}
	return h
	function _bf(i, mx, fn, hs) {
		var g = G(arguments),
				o = {
					i: g.f,
					mx: A(g.s) ? $Mx(g.s) : g.s,
					fn: _.tFn(g.t),
					hs: g[3]
				}
		h._bf(i, o.mx)
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
}
h.bf1 = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s} :
			{i: g.f, mx: g.s, fn: g.t}
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o.mx, o.fn)
			if (o.hs) {
				_.e(o.hs, o.fn)
			}
		})
	}
	if (S(o.i)) {
		o.i = Q.i(o.i)
	}
	_bf(o.i, o.mx, o.fn)
	return h
	function _bf(i, mx, fn, hs) {
		var g = G(arguments),
				o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
						F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
						{i: g.f, mx: g.s, hs: g.t}
		o.i = S(o.i) ? Q.i(o.i) : o.i
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		h._bf(i, o.mx)
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) :
				o.fn(h)
	}
}