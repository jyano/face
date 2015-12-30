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
							$.p('cool cool'))))
	container.drag().C('o').opacity(.9).top(100).left(100)
}
Y.GuestPage = function () {
	z('r')
	ct = $.dC().dg().C('g').al(.9).top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A(
			$.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A(
						$.fG().A($.lb('username: ', 'username'),
								$.ip('username')),
						$.fG().A($.lb('password: ', 'password'),
								$.pw('password')),
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
				usernameInput = $.dK('form-group').fS(20).name('username').A($.lb('username: ', 'username'), $.ip().K('form-control').id('uname'))
				passwordInput = $.dK('form-group').A($.lb('password: ', 'password'), $.pw().id('password')).fS(20).n('password')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(usernameInput, passwordInput, submit).submit(function (e) {
					e.preventDefault()
					$.P('user', {
								username: username = usernameInput.find('input').val(),
								password: password = passwordInput.find('input').val()
							},
							function (username) {
								if (username === 'guest') {
									$('.modal').modal('toggle');
									$.pop('try again.. idiot')
								}
								else {
									Y('HomePage');
									$.pop('welcome ' + username + '!')
								}
							})
				})
				$.pop(f).dg()
			}).C('w', 'z'), $.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
			
	ct.A($.dH().h1('jy presents..'), jb)
	function verify() {
		return {
			username: username.find('input').val(),
			password: password.find('input').val()
		}
	}
}
$GuestPageBoot = Y.GuestPageBoot = function () {z('r')
	ct = $.dK('container').dg().C('g')
	ct.al(.9)
	ct.top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A($.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A($.fG().A($.lb('username: ', 'username'),
								$.ip('username').id('un')),
						$.fG().A(
								$.lb('password: ', 'password'),
								$.pw('password').id('pw')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					$l('login form will be submited')
					fData = {
						username: $('#un').v(),
						password: $('#pw').v()
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
				usernameInput = $.dK('form-group').fS(20).n('username').A($.lb('username: ', 'username'), $.ip().K('form-control').id('uname'))
				passwordInput = $.dK('form-group').A($.lb('password: ', 'password'), $.pw().id('password')).fS(20).n('password')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(
						usernameInput, passwordInput, submit).submit(function (e) {
							e.preventDefault()
							$.P('user', {
								username: username = usernameInput.find('input').val(),
								password: password = passwordInput.find('input').val()},
							function (username) {if (username === 'guest') {
									$('.modal').modal('toggle');$.pop('try again.. idiot')}
								else {Y('HomePage');
									$.pop('welcome ' + username + '!')}})})
									$.pop(f).dg()
									}).C('w', 'z'),
			$.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
	ct.A($.dH().h1('jy presents..'), jb)
	function verify() {
		return {
			username: username.find('input').val(),
			password: password.find('input').val()
		}
	}
}
SESS = function (p) {
	 
}
WAP = function (p) {
}