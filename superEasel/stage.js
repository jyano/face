cjs.St = cjs.Stage
cj = cjs

$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.c0 = function () {var g = G(arguments)
	$.c.apply($, g.A ? g.f : g)[0]}
$0 = function () {return $.apply(null, arguments)[0]}


$St = function () {
	__$St = function (cv) {
		return new cj.St(O(cv) ? $0(cv) : cv)}
	var g = G(arguments)
	
	if(g.d){$.E()}
	var cv =  g.A ? g.f[0] : 
			g.O || $.isCvId(g.f) ? g.f : 
					$.c(g.f? g: 'o')
	var st =  __$St(cv)
	if(!g.n){
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
	if (g.m) {st.b('me')}
	return st
	// = _$St = $StCv = cjs.stg = cjs.stage = St = St$ = $S$ = cjs.S = __St = __S
}
 
 
   

//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
 
 
 