Y.HomePage = $HomePage = function () {
	Y.nav() //WappyNav($r()) //load navigator
	Y.run(wappyApp)//update un on screen
	$.getJSON('loggedIn', function (un) {
		$l('----' + un)
		$('#uname').text(_un = $l(un))
	})
}
home = function () {
	Y.render('HomePage')
}
guest = function () {
	if (un == 'guest' || !un) {
		return Y.render('GuestPage')  //renderGuestPage();
	}  //usr=
}
goToGuestPage = function (p) {
	p.send('guest')
}
Y.GuestPage = function () {
	z('r')
	var container = $.containerDiv().A(
			$.headerDiv().A(
					$.ul().K("nav nav-pills pull-right").A(
							$.liA('home').K('active'),
							$.liA('About'),
							$.liA('Contact')),
					$.h1('jason yanofski presents..')),
			$.jumbo(
					'a graphics-based real-time social gaming creativity web app', 'woo hoo!').A(
					$.buttonL('log in', LoginForm).C('y', 'b'),
					$.span(' '),
					$.buttonL('sign up', SignUpForm).C('b', 'y')),
			$.row(
					$.h1('fun!'),
					$.div().A(
							$.h4('graphics'),
							$.p('cool cool cool'),
							$.h4('social'),
							$.p('cool cool')))
	)
	container.drag().C('o').opacity(.9).top(100).left(100)
}
Y.GuestPage = function () {
	ct = $.dC().dg().C('g').al(.9).top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A(
			$.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A(
						$.fG().A($.lb('un: ', 'un'),
								$.ip('un')),
						$.fG().A($.lb('pw: ', 'pw'),
								$.pw('pw')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					fData = f.serializeJSON()
					$.post('/login', fData, function (un) {
						u = un
						$l('check u!')
						if (un === 'guest') {
							$('.modal').modal('toggle');
							$.pop('try again.. idiot')
						}
						else {
							Y('HomePage');
							$.pop('welcome ' + un + '!')
						}
					})
				})
				$.pop(f).dg()
			}).C('z', 'w'), $.sp(' - '),
			$.btL('sign up', function () {
				unIp = $.d().fS(20).name('un').A($.lb('un: ', 'un'), $.ip().K('form-control').id('uname'))
				pwIp = $.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).fS(20).n('pw')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(unIp, pwIp, submit).submit(function (e) {
					e.preventDefault()
					$.P('user', {
								un: un = unIp.find('input').val(),
								pw: pw = pwIp.find('input').val()
							},
							function (un) {
								if (un === 'guest') {
									$('.modal').modal('toggle');
									$.pop('try again.. idiot')
								}
								else {
									Y('HomePage');
									$.pop('welcome ' + un + '!')
								}
							})
				})
				$.pop(f).dg()
			}).C('w', 'z'), $.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
	ct.A($.dH().h1('jy presents..'), jb)
}
$GuestPageBoot = Y.GuestPageBoot = function () {
	z('r')
	ct = $.dK('container').dg().C('g')
	ct.al(.9)
	ct.top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A($.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A($.fG().A($.lb('un: ', 'un'),
								$.ip('un').id('un')),
						$.fG().A(
								$.lb('pw: ', 'pw'),
								$.pw('pw').id('pw')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					$l('login form will be submited')
					fData = {
						un: $('#un').v(),
						pw: $('#pw').v()
					}
					// fData = f.serializeJSON()
					$l(fData)
					$.post('/login', fData, function (un) {
						if (un === 'guest') {
							$('.modal').modal('toggle');
							$.pop('try again.. idiot')
						}
						else {
							Y('HomePage');
							$.pop('welcome ' + un + '!')
						}
					})
				})
				$.pop(f).dg()
			}).C('z', 'w'), $.sp(' - '),
			$.btL('sign up', function () {
				unIp = $.d().fS(20).n('un').A($.lb('un: ', 'un'), $.ip().K('form-control').id('uname'))
				pwIp = $.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).fS(20).n('pw')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(
						unIp, pwIp, submit).submit(function (e) {
							e.preventDefault()
							$.P('user', {
										un: un = unIp.find('input').val(),
										pw: pw = pwIp.find('input').val()
									},
									function (un) {
										if (un === 'guest') {
											$('.modal').modal('toggle');
											$.pop('try again.. idiot')
										}
										else {
											Y('HomePage');
											$.pop('welcome ' + un + '!')
										}
									})
						})
				$.pop(f).dg()
			}).C('w', 'z'),
			$.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
	ct.A($.dH().h1('jy presents..'), jb)
	function verify() {
		return {
			un: un.find('input').val(),
			pw: pw.find('input').val()
		}
	}
}
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
$logOut = Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}
$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
 