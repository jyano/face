$d2 = $to = $rd = Y.directTo = Y.load = load = Y.to = function (a) {
	window.location = '/wap/' + a
}
_back = function (p) {
	p.redirect('back')
}
_title = function (q) {
	return {title: q.query.title}
}
inAs = function (ss) {
	$l('logged in as: ' + un + 'ss:' + ss)
}
_arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}//$arr
 
isLoggedIn = function (q) {
	return q.ss.un ? true : false
}
notLI = notLoggedIn = function (un) {
	return un == 'guest' || !un
}
directAppropriately= verifyLogin = function login(un) {
	if (un === 'guest') {//$('.modal').modal('toggle');
		$.pop('try again.. idiot')}
	else {Y.render('HomePage');$.pop('welcome ' + un + '!')}
}
$.d('y', 400, 400).A($.h1('welcome you are NOT logged in'))
//isAuthed = function (q) {return q.loggedIn}; unAuthed = function (q) {return !isAuthed(q)}
loginSuc = function (q, p, user) {
		q.user = p.lc.user = user
		q.un = p.lc.un = user.un
		q.uId = p.lc.uId = user._id
	}	
auth = function (q, p, n, successFn) {
		notLI(q) ? goToGuestPage(p) :
				loginSuc(q, p, n)
	}
 

 
SES = function () {
	$.h1('SES')
	$.g('/user/userSS', function (ss) {
		$l(s = ss)
	})
}
HOMPAG=function(){$s({$:{M:2,P:2, fS:36, tA:'c'},

	bd:{C:'R', dp:'fl', dir:'c', alI:'c',
		wr: 'wrap'
	}})
	 
	 
	 $.d(
			 $.h1('welcome to wappy').fS(50),
			 $.bt('get session', function () {
			
				 $.get('/user/session', function (sess) {
					 ss = sess || {}
					 _.e(ss = sess, function (v, k) {
						 one.E().A($.h2(k + ' : '), $.h1(v))
					 })})
					 
			 })
	 )
	 
	 
	 ct = $.d().s({dp: 'fl', jfC:'sB', w: '100%',
	 
	 wr:'wrap'
	 }).A(
			 one = $.d().s({dp: 'fl'}).A(' no session data ...'),
			 two = $.d().s({dp: 'fl'}).A(
					 $.ip().C('_b').A().ph('username').id('un'), 
					 $.ip().C('_b') .A().ph('password').id('pw')),
			 three = $.d().s({dp: 'fl'}).A(
					 $.bt('login', loginUser),
					 $.bt('new account', newAcc))
	 )
	 
	function newAcc(){
		creds = {
			un: $('#un').val(),
			pw: $('#pw').val()
		  }
		$l('will make new account: ' + creds.un + ' : ' + creds.pw)
		_unIsAvailible = function (un, fn) {
			$.g('/wappy/unIsAvail', fn)}
		_unIsAvail(creds.un, function(un){
			if(un){$l('available')}
			else {$l('taken')}	
		})
	}
	
	function loginUser(){
		
		creds = {
			un: $('#un').val().toLowerCase(),
			pw: $('#pw').val().toLowerCase()
		}
		
		$l('will try to login: ' + creds.un + ' : ' + creds.pw)
		
		
	}
}

 
SEEUSERS=function(){
	$.h1('see users')
	$.get('/admin/allUsers', function(users){
		if(!users){alert('!users')}
		
		else{
		
			_.e(users, function(user){
			
				$.d().C($r()).mar(20).A($.h1(user.un), 
				$.h5(J.s(user) )), $.hr()

			$.bt('DELETE', function () {
				
				$.ajax({url:'/user', data:{un: user.un}, method:'delete'}, function (user) {
			
					
					$.h1(user.un + ' deleted.')
				})
			})
			
		})}
	})
	
	$.bt('add random user', function(){
		$.get('/wap/addRndUser', function(user){
			$.h1(user.un)
		})
	})

}


UNISAVAIL=function(){
	
	$.bt('is un avail?', function () {
		$.get('/wap/unIsAvail', function (un) {
			if(un){$.h1(un)}
			else {
				$.h1('un not avail.. try again')
			}
		})
	})
	
}


ADMIN=function(){


}



F.suc = function () {
	$l('suc')
}
enterSite = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
	socks()
	home()
}
_SignUpForm = function () {
	$s({
		f: {
			C: 'o', P: 4, fS: 16
		}
	})
	fo = $.f().A($.d().name('un').A($.lb('un: ', 'un'), $.ip().id('uname')),
			$.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).name('pw'),
			$.bt('sign up').type('submit')
	).sm(f.pD(submit)).sm($.smBt('sign up'))
	verify = function () {
		return {un: un.find('input').val(), pw: pw.find('input').val()}
	}
	return fo
	function submit(e) {
		un = unInput.find('input').val()
		pw = pwInput.find('input').val()
		$.post('/user', {un: un, pw: pw}, ajaxPost)
	}
	
	function ajaxPost(un) {
		if (un === 'guest') {
			$('.modal').modal('toggle');
			$.pop('try again.. idiot')
		}
		else {
			Y.render('HomePage');
			$.pop('welcome ' + un + '!')
		}
	}
}
SignUpForm = function () {
	$.pop(_SignUpForm()).drag()
}
LoginForm = function () {
	_LoginForm = function () {
		return $.f().sm(sbm)
	}
	$.pop(_LoginForm()).drag()
}
_LoginForm = function () {
	var form = $.form().C('green').pad(4).A(
			$.formGroupDiv().A(
					$.label('un: ', 'un'),
					$.textInput('un')),
			$.formGroupDiv().A(
					$.label('pw: ', 'pw'),
					$.pwInput('pw')),
			$.submitInput('log in')
	)
	form.submit(function (e) {
		e.preventDefault()
		var formData = form.serializeJSON() // $l(formData)
		$.post('/login', formData, verifyLogin)
	})
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
	
	return form
}
function verify() {
	return {
		un: un.find('input').val(),
		pw: pw.find('input').val()
	}
}
unIp = function () {
	return $.d().K('form-group').fontSize(20).name('un').A(
			$.lb('un: ', 'un'),
			$.input().K('form-control').id('uname')
	)
}
pwIp = function () {
	return $.d().K('form-group').A(
			$.lb('pw: ', 'pw'),
			$.pw().id('pw')
	).fontSize(20).name('pw')
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
loginBt = function sbm(e) {
	$.pD(e)//e.preventDefault()
	var fDat = f.serJ() // $l(formData)
	$.po('/login', fData, verifyLogin)
}
signupBt = function sbmAlt(e) {
	un = unInput.fi('input').v()
	pw = pwInput.fi('input').v()
	$.po('/user', {un: un, pw: pw}, login)
}
$.bt('new account', function () {
})
$.bt('login', function () {
})
  
  loginAsCHEAT=function(){
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
	LOGINCHEAT = function () {
		unIp = $.lIp('username', 'un').rm()
		pwIp = $.lIp('password', 'pw').rm()
		$.HR()
		
		asDiv = $.d().h4('as:  loading..')
		$.HR()
		btsDiv = $.d().A(
				But('new user', $.okP('dudes', $.IVOb('un', 'pw'), loginSuc)),
				But('login', $.ok())
		)
		
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
		
		function cheatFn() {
			$.P('un', {un: $l($.IV('ip2'))}, inAs)
		}
	}
}