$ss = require('express-session')
$cnMg = require('connect-mongo')($ss)
$ssSt = new $cnMg({url: 'mongodb://localhost/jy'})
$bP = require('body-parser');
_.e([
	$ss({store: $ssSt, secret: 'foo', resave: true, saveUninitialized: true}),
	require('cookie-parser')('xyz'),
	$bP.urlencoded({extended: false, limit: '50mb'}),
	$bP.json({limit: '50mb'})
], function (mw) {
	$a.use(mw)
})
/*
$a.use(function (q, p, nx) {
 q.b = q.bd = q.body
	q.fl = q.f = q.files// q.n  = q.flash
	q.ss = q.session
	q.q = q.query
	q.p = q.pm = q.params// q.p= function(a){return q.params[a]}
	p.lc.loggedIn = q.loggedIn = (q.ss.un) ? true : false   //=  res.locals.li=  req.li
	q.un = q.ss.un// $l('MAIN middleware says req.username = ' + req.username)
	
	//
	p.lc = p.l = p.locals
	p.rr = p.ren = p.r = p.render
	p.s = p.send
	p.j = p.js = p.json
	p.rd = p.d = p.redirect
	nx()
})
*/