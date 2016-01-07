$L(  'next' )
st.aC = st.auCl = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.autoClear
	}
	st.autoClear = g.f ? true : false
	return st
}
st.tOU = st.tkOUpd = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.tickOnUpdate
	}
	st.tickOnUpdate = g.f ? true : false
	return st
}
st.tk = function (ms) {
	var st = this, g = G(arguments)
	st.tk.apply(st, g)
	return st
}
st.cc = function () {
	return this.cacheCanvas
}
st.du = st.tDU = function (ms) {
	var st = this,
			g = G(arguments)
	// same as? return this.canvas.toDataURL()
	st.toDataURL.apply(st, g)
	return st
}
st.snap = function (f) {
	$.post('/img', {
		d: this.toDataURL()//, dats: o.x.dats
	})
	sec(f)
	return this
}
st.cv = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.canvas
	}
	st.canvas = g.f
	return st
}
st.tabs = st.ab = st.abs = function (x, y) {
	this.can.abs(x, y);
	return this
}
st.sTPE = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.snapToPixelEnabled
	}
	st.snapToPixelEnabled = g.f ? true : false
	return st
}
St = $St = function () {

//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
	__$St = function (cv) {
		return new cj.St(O(cv) ? $0(cv) : cv)
	}
	var g = G(arguments)
	if (g.d) {
		$.E()
	}
	var cv = g.A ? g.f[0] :
			g.O || $.isCvId(g.f) ? g.f :
					$.c(g.f ? g : 'o')
	var st = __$St(cv)//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
	if (!g.n) {
		st.t()
		st.cv = st.c = st.can = $(st.canvas)
		st.cv0 = st.cv[0]
		st.xc = st.cv0.getContext('2d')
		s = stage = window.st = st
		lib = {}
		images = img = {}
		loader = new cjs.LoadQueue(false);
		h = $h(0, 0).a2(st).drag()
		h.graphics.C('r', 'b', 20)
	}
	if (g.m) {
		st.b('me')
	}
	return st
	// = _$St = $StCv = cjs.stg = cjs.stage = St = St$ = $S$ = cjs.S = __St = __S
}
st.Sh = function () {
	return $Sh.apply(null, arguments).a2(this)
}
st.GX = function () {
	return this.Gx().FS()
}
st.Gx = function () {
	return $Sh.apply(null, arguments).drag()
			.a2(this).graphics
}
$rCt = function () {
	return 'this is a recGx in a container so it can be moved relative to something..' +
			'(its like a fx rel to a bd)'
}
 
dO.a2 = function (ct, x, y) {
	var dO = this
	ct.A(dO)
	if (N(x)) {
		dO.X(x)
	}
	if (N(y)) {
		dO.Y(y)
	}
	return dO
}
function next() {
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
}
function _pre() {
	CVTXX = TESTCANVAS = function () {
		return $.d().A($.c(960, 400)
				.id("testCanvas"))
	}
}