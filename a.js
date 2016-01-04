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
require('./server/$mw$')
$a.g('/', function (q, p) {
	$l('/')
	$l(q.session)
	p.json(q.sesson // || 'it worked jason..'
	)
})
$a.get('/user/session', function (q, p) {
	$l('userSS')
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {ss.views++}
	else {ss.views = 1}
	p.send(ss)
})
$a.g('/user/ses', function(q,p){
	
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
		p.setHeader('Content-Type', 'text/html')
		p.write('<p>views: ' + ss.views + '</p>')
		p.write('<p>expires in: ' + (ss.cookie.maxAge / 1000) + 's</p>')
		p.write(JSON.stringify(ss, null,'\t'))
		p.end()
	}
	
	else {
		ss.views = 1
		p.end('welcome to the session demo. refresh!')
	}
})
$a.g('/wap/unIsAvail', function(q,p){
	
})

$a.g('/wap/allUsers', function (q, p) {
	User.find(function(z, users){
		if(z){$l('z')}
		else {
			$l(JSON.stringify(users))
			p.send(users)
		}
	})
}) 

$a.g('/wap/addRndUser', function(q,p){
	$l('addRndUser')
	
	var mockUser= {
		un: 'larry' + R(1000000),
		pw: 'password' + R(100)
	}
	
	$l('new user: '+ mockUser.un)
	
	
	User.create(mockUser, function(z,user){
		if(z){$l("z")}
		p.send(user)
	})
	

})



require('./server/$api$/$twitServer$')
require('./$routes$')

$htSv = httpServer = $h.createServer($a)
$htSv.listen(80, lsFn)

require('./server/socket/$kets$')

function lsFn() {
	$l('\nserver listening on port 80 \n')
}
 
  