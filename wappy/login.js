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
	$.get('/wap/allUsers', function(users){
		if(!users){alert('!users')}
		else{_.e(users, function(user){
				$.d().C($r()).mar(20).A($.h1(user.un), 
				$.h5(JSON.stringify(user) )),
				$.hr()
			})
		}
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




F.suc = function () {
	$l('suc')
}
