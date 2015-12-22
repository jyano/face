cjs.St = cjs.Stage
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
__$St = function (cv) {
	return new cjs.Stage(cv)
}


_$StCv = function (cv) {
	return __$St(
			$.c.apply($, arguments)[0]
	)
}
$StCv = function () {
	var g = G(arguments), o, st
	st = A(g.f) ? __$St(g.f[0]) :
			$.isCvId(g.f) ? __$St(g.f) :
					O(g.f) ? __$St($(g.f)[0]) :
							_$StCv.apply(null, g)
	return st
}
//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}


_$St = function (cv) {
	return cv ? $StCv.apply(null, arguments) :
			__$St(
					$.c('o', 1000, 600)[0]
			)
}

$St = cjs.stg = cjs.stage = function () {
	var g = G(arguments)
	var st = _$St.apply(null, arguments)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	st.can = st.c = $(st.canvas)
	st.t()
	if (g.m) {
		st.b('me')
	}
	return st
}
__St = function () {
	st = $St(2000, 1000);
	h = st.h()//.drag()
	cjs.SL(h)
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	p1 = $pD(vs1);
	p2 = $pD(vs2)
}
St = St$ = $S$ = cjs.S = __S = function () {
	var g = G(arguments)
	s = stage = st = $St.apply(null, arguments)
	lib = {}
	images = img = {}
	loader = new cjs.LoadQueue(false);
	h = $h(0, 0).a2(st).drag()
	h.graphics.C('r', 'b', 20)
	return st
}