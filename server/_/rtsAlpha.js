G('un', function (q, p) {
	$l('loggedIn? ... : ' + q.un)
	$l('q.un: ' + q.un)
	p.j(q.un)
})// '/loggedIn'// //send json of 'my username'
$logOut(function (q, p) {
	q.ss = q.session
	q.ss.un = null//	q.ss.loggedIn = q.ss.li = q.ss.u =
	q.ss.sv(function () {
		p.j('false')
	})
})
//get someones profile
$get('/profile/:un', function (q, p) {//$l('/profile/:un'); $l('req.params.un: ' + req.params.un)
	p.f1($m.Profile, {un: q.pm.un})
})
//FIND BY USERNAME
$a.G('/cutout/:un', _fByUn('cutout'))
//change to get pics?
//find all User's pics
$.G('/myPics', function (q, p) {
	Fl.fi({user: q.uId}, _json(p))
})
$post('/myPics', function (q, p) {
	Fl.fi({user: q.userId}, _js(p))
})

 