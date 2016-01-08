console.log('.\n\n\n\n\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n\n\n')
require('./web/both')
 
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
		//
		use(name(arg + '/_apps'))
		use(name(arg + '/_games'))
		use(name(arg + '/_demos'))
		use(name(arg + '/_app'))
		use(name(arg + '/_game'))
		use(name(arg + '/_demo'))
		//
		use(name(arg + '/_superapps'))
		use(name(arg + '/_supergames'))
		use(name(arg + '/_superdemos'))
		use(name(arg + '/_superapp'))
		use(name(arg + '/_supergame'))
		use(name(arg + '/_superdemo'))
		//
		use(name(arg + '/_badapps'))
		use(name(arg + '/_badgames'))
		use(name(arg + '/_baddemos'))
		use(name(arg + '/_badapp'))
		use(name(arg + '/_badgame'))
		use(name(arg + '/_baddemo'))
		//
		use(name(arg + '/_ok'))
		use(name(arg + '/_good'))
		use(name(arg + '/_great'))
		use(name(arg + '/_best'))
		use(name(arg + '/_err'))
		use(name(arg + '/_wait'))
		use(name(arg + '/_dud'))
		use(name(arg + '/_amazing'))
		use(name(arg + '/_dumb'))
		use(name(arg + '/_silly'))
		use(name(arg + '/_fun'))
		use(name(arg + '/_funny'))
		use(name(arg + '/_art'))
		use(name(arg + '/_puzzle'))
		use(name(arg + '/_huh'))
		use(name(arg + '/_filter'))
		use(name(arg + '/_transform'))
		 
		use(name(arg + '/_drawImage'))
		use(name(arg + '/_gradient'))
		use(name(arg + '/_events'))
		use(name(arg + '/_image'))
		use(name(arg + '/_bitmap'))
		use(name(arg + '/_shape'))
		use(name(arg + '/_shapes'))
		use(name(arg + '/_pixel'))
		use(name(arg + '/_globComp'))
		use(name(arg + '/_text'))
		use(name(arg + '/_css'))
		use(name(arg + '/_loader'))
		use(name(arg + '/_clipper'))
		use(name(arg + '/_joints'))
		use(name(arg + '/_world'))
		use(name(arg + '/_bods'))
		use(name(arg + '/_query'))
		use(name(arg + '/_jQuery'))
		use(name(arg + '/_anim'))
		use(name(arg + '/_html'))
		use(name(arg + '/_html5'))
		use(name(arg + '/_ui'))
		use(name(arg + '/_control'))
		use(name(arg + '/_box'))
		use(name(arg + '/_old'))
		use(name(arg + '/_tween'))
		use(name(arg + '/_sprite'))
		use(name(arg + '/_movie'))
		use(name(arg + '/_bone'))
		use(name(arg + '/_knock'))
		use(name(arg + '/_nok'))
		use(name(arg + '/_wid'))
		use(name(arg + '/_jqUI'))
		use(name(arg + '/_sync'))
		use(name(arg + '/_cam'))
		//
		
		use(name(arg + '/_routes'))
		use(name(arg + '/_api'))
		use(name(arg + '/_alpha'))
		use(name(arg + '/_l'))
		
		function name(dir) {return __dirname + '/' + dir}
		function use(dir) {$a.use($e.static(dir))}}
}

require('./server/$xap$')
require('./server/goo/$goo$')

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
 
require('./server/mw/userRtsMW')
require('./server/routes/socialRts')
require('./server/routes/mugRts')
//require('./server/uplodLibRts')
require('./server/mw/picRtsMW')
require('./server/routes/adminRts')

require('./server/$api$/$twitServer$')
require('./$routes$')

$htSv = httpServer = $h.createServer($a)
$htSv.listen(80, lsFn)

require('./server/sock/$kets$')

function lsFn() {
	$l('\nserver listening on port 80 \n')
}
 
  