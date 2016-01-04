 
$logOut = Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}
$nav = Y.nav = function () {
	navbarCollapse = $.nbC().A($.n(
					// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
					$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
					$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
					$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
					$.dd('talk', ['chat', 'universe', 'post']),
					$.dd('social', ['users', 'profiles', 'posts'])
					
					
					//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
			),
			$.nR(
					$.dd('account', ['status', 'profile', 'messages']),
					$.liA('logged: ' + _username),
					$.liA('logout', Y.logOut)
			)
	)
	$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
}//=Y.n
$d2 = $to = $rd = Y.directTo = Y.load = load = Y.to = function (a) {
	window.location = '/wap/' + a
}
$arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}
$.d('y', 400, 400).A($.h1('welcome you are NOT logged in'))
$.bt('new account', function () {
})
$.bt('login', function () {
})
 
$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
 

function But(title, arr) {
	var g = G(arguments)
	return $.bt(title, btFn)
	function btFn() {
		dudesForm.eH1(title)
		dudesForm.A(unIp, pwIp)
		A(arr) ? _.e(arr, add) : _.e(g.r, add)
	}
	
	function add(ch) {
		dudesForm.A(ch)
	}
}
function suc() {
	$l('suc')
}
function cheatFn() {
//	$.P('un', {un: $l($.IV('ip2')), inAs)
}
function inAs(ss) {
	$l('logged in as: ' + un + 'ss:' + ss)
}
 function handyForm() {
	 _form = function () {
		 var f = $.f().C('g').pad(4).A(
				 bs.fGpD().A(
						 $.lb('un: ', 'un'),
						 $.ip('un')),
				 bs.fGpD().A(
						 $.lb('pw: ', 'pw'),
						 $.ip('pw')),
				 $.sbm('log in')
		 )
		 return f
	 }
 }
 function submitFn() {
	 function sbm(e) {
		 $.pD(e)
		 var fDat = f.serJ() // $l(formData)
		 $.po('/login', formData, verifyLogin)
	 }
	
	 function sbm(e) {
		 e.preventDefault()
		 un = unInput.fi('input').v()
		 pw = pwInput.fi('input').v()
		 $.po('/user', {
			 un: un,
			 pw: pw
		 }, login)
	 }
 }
function login(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle');
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}
function images() {
	enterSite = function () {
		$mug(function (mug) {
			Y._userMug = _userMug = mug
		})
		socks()
		home()
	}
	$mug = function (fn) {
		$.get('/getMug', fn)
	}
	getMug = function () {
		$mug(function (mug) {
			Y._userMug = _userMug = mug
		})
	}
	$picByUser = function (user, fn) {
		$m.pic.find({u: user}, fn)
	}
	$cutout = function (q) {
		return {
			un: q.un,
			d: q.body.d,
			dats: q.body.dats,
			data: q.body.d,
			physicsData: q.body.dats
		}
	}
}
function auth() {
	notLoggedIn = function (un) {
		return un == 'guest' || !un
	}
	isLoggedIn = function (q) {
		return q.ss.un ? true : false
	}
	isAuthed = function (q) {
		return q.loggedIn
	}
	unAuthed = function (q) {
		return !isAuthed(q)
	}
	loginSuccess = function (q, p, user) {
		q.user = p.lc.user = user
		q.un = p.lc.un = user.un
		q.uId = p.lc.uId = user._id
	}
	auth = function (q, p, n, successFn) {
		unAuthed(q) ? goToGuestPage(p) : successFn(q, p, n)
	}
}
function logOut() {
	Y.logOut = function () {
		$.getJSON('/logOut', function () {
			Y.render('GuestPage')
		})
	} //logOut =
	$logOut = function (fn) {
		$a.G('/logOut', function (q, p, n) {
			$l('logging out')
			fn(q, p, n)
		})
	}
}
function verifyLogin(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle')
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}
 
 AS = function () {
	 $.h1('in as')
	 form = $.f().C('g')
	 form.A('login AS',
			 $.lb('username:'),
			 $.ip().id('un'),
			 $.ok()
	 ).suPrDf(fn)
	 function fn() {
		 $l('submit username: ' + $.iV('un'))
		 $.P$d('as', 'un', 'ss')
	 }
 }
 SUDO = function () {
 }
 _back = function (p) {
	 p.redirect('back')
 }
 _title = function (q) {
	 return {title: q.query.title}
 }
 LOGIN = function () {
	 unIp = $.lIp('username', 'un').rm()
	 pwIp = $.lIp('password', 'pw').rm()
	 $.HR()
	 asDiv = $.d().h4('as:  loading..')
	 $.HR()
	 btsDiv = $.d().A(
			 But('new user', $.okP('dudes', $.IVOb('un', 'pw'), suc)),
			 But('login', $.ok()))
	 dudesForm = $.fAc('dudes').a2(btsDiv)
	 $.HR()
	 $.btCA('b', [
		 $.ipStPr('ip2'),
		 $.spC('y', ' cheat')
	 ], cheatFn)
	 $.HR()
	 $.G('login', function (un) {
		 asDiv.eH4('as: ' + un || 'guest')
	 })
 }