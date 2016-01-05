console.log('.\n\n\n\n\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n\n\n')
require('./web/both/superUnder')
require('./web/both/superJ')
require('./web/both/superTime')
$l(' - face - \n')
require('./server/$superNode$')
$stc = function () {
	_.e(arguments, function (arg) {A(arg) ? _.e(arg, $stc) : Use(arg)})
	function Use(arg) {use(name(arg))
		use(name(arg + '/_pre'))
		use(name(arg + '/_deps'))
		use(name(arg + '/_protos'))
		use(name(arg + '/_data'))
		use(name(arg + '/_draw'))
		use(name(arg + '/_core'))
		use(name(arg + '/_apps'))
		use(name(arg + '/_games'))
		use(name(arg + '/_routes'))
		use(name(arg + '/_api'))
		use(name(arg + '/_alpha'))
		function name(dir) {return __dirname + '/' + dir}
		function use(dir) {$a.use($e.static(dir))}}
}

require('./server/$xap$')
require('./server/$goo$')

$w = $Mw = function (q, p, nx) {
	// regular (pre-user) middleware
	miniQP = function (q, p) {
		miniQ(q)
		miniP(p)
	}
	
	miniQP(q, p)
	
	q.loggedIn = isLoggedIn(q)
	q.un = q.ss.un;
	// =  p.lc.loggedIn
	//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
	nx()
}
$ss = require('express-session')
$cnMg = require('connect-mongo')($ss)
$ssSt = new $cnMg({url: 'mongodb://localhost/jy'})
methodOverride = require('method-override')
$bP = require('body-parser');
_.e([
	$ss({store: $ssSt, secret: 'foo', resave: true, saveUninitialized: true}),
	require('cookie-parser')('xyz'),
	$bP.urlencoded({extended: false, limit: '50mb'}),
	$bP.json({limit: '50mb'}),
	//methodOverride('X-HTTP-Method-Override'),
	//methodOverride('_method')
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
 
$a.g('/', function (q, p) {
	$l('/')
	$l(q.session)
	p.json(q.sesson // || 'it worked jason..'
	)
})
 
require('./server/userRtsMW')
require('./server/socialRts')
require('./server/mugRts')
//require('./server/uplodLibRts')
require('./server/picRtsMW')

require('./server/$api$/$twitServer$')
require('./$routes$')

$htSv = httpServer = $h.createServer($a)
$htSv.listen(80, lsFn)

require('./server/$api$/$kets$')

function lsFn() {
	$l('\nserver listening on port 80 \n')
}
 
  