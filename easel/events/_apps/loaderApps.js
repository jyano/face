$it = function (i) {
	var _$it = function (i) {
		return {src: _.src(i), id: i}
	}
	return S(i) ? _$it(i) : i
}
$its = function (its) {
	var g = G(arguments)
	if (!g.A) {
		its = g
	}
	return _.m(its, $it)
}
QU = MF = MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(me = q.bm('me'))
		st.A(guy = q.bm('guy'))
		guy.dg()
	})
}
QU0 = function () {
	Q(mf5, function () {
		$.A(Q.i('me'))
	})
}
QU1 = function () {
	$Ld(mf3, function (ld) {
		$St().A(ld.bm("me"), ld.bm("guy", 300, 300))
	})
}
QU2 = function () {
	$Ld(mf1, function (ld) {
		ld.bm("myImage", $St())
	})
}
QU3 = function () {
	$Ld(mf2, function (ld) {
		ld.bm("me", $St());
		ld.bm("guy", st)
	})
}
IT = QU4 = function () {
	$Ld(function (ld) {
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
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