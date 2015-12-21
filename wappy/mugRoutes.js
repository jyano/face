$a.PO('/changeMug', function (q, p) {  // could be a put?
	
	var ur = q.user
	
	ur.mug = q.b.url

	ur.sv( _send(p) )
	
})

$myUn = function(q){
	return {un: q.un}
}


$a.G('/myMug', function (q, p) {// $l('q.b: ' + q.b); $l('q.un: ' + q.un)

	
	Ur.f1($myUn(q), function (z, u) {
		  //$l('in findOne callback'); $l('da: ' + da)
		p.se(u.mug)
	})
})


$a.g('/mugByUsername/:un', function (q, p) {
	//$l('q.params.un: ' + q.params.un)
	Ur.f1({un: q.pm.un}, function (z, u) {
		p.se(u.mug)
	})
})

$a.del('/user', function (q, p, nx) {
	Ur.rm(q.b, function (z, da) {
		p.js(da)
	})
})

testMyMug = function () {
	$.g('/myMug', function (da) {
		$.h1('in callback..').A()
		$.i(da).A().C('black').drag()})
}
testMugByUsername = function (un) {un = un || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.g('/mugByUsername/' + un, function (da) {z()
		$.h1('in callback..').A()
		$.i(da).A().C('z').drag()
	})
}


//testDefaultMug = function () {$.i(defaultMug).A()}
testChangeMug = function () {
	//it automatically changes your userMug to the defaultMug
	$.po('/changeMug', {url: defaultMug}, function () {z(); TWEEN()})
}
  