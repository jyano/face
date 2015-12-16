_SignUpForm = function () {
	var unInput, pwInput, submit
	return $.f().C('o').pad(4).A(
			unInput = unIp(),
			pwInput = pwIp(),
			submit = $.smBt('sign up').fS(16)
	).submit(sbm)
}
_SignUpForm = function () {
	var unInput = $.d().K('form-group').fS(20).nm('un').A(
					$.lb('un: ', 'un'),
					$.ip().K('form-control').id('uname')
			),
			pwInput = $.d().K('form-group').A(
					$.lb('pw: ', 'pw'),
					$.pw().id('pw')
			).fS(20).name('pw'),
			submit = $.smBt('sign up').fS(16), verify,
			form = $.f().C('o').pad(4).A(
					unInput, pwInput,
					submit)
	form.submit(function (e) {
		e.preventDefault()
		un = unInput.find('input').val()
		pw = pwInput.find('input').val()
		$.post('/user', {
			un: un,
			pw: pw
		}, function (un) {
			if (un === 'guest') {
				$('.modal').modal('toggle');
				$.pop('try again.. idiot')
			}
			else {
				Y.render('HomePage');
				$.pop('welcome ' + un + '!')
			}
		})
	})
	return form
}
_SignUpForm = function () {
	var usernameInput = $.div().K('form-group').fontSize(20).name('username').A(
					$.label('username: ', 'username'),
					$.input().K('form-control').id('uname')
			),
			passwordInput = $.div().K('form-group').A(
					$.label('password: ', 'password'),
					$.password().id('password')
			).fontSize(20).name('password'),
			submit = $.button('sign up').type('submit').fontSize(16),
			verify = function () {
				return {
					username: username.find('input').val(),
					password: password.find('input').val()
				}
			},
			form = $.form().C('o').pad(4).A(
					usernameInput, passwordInput,
					submit)
	form.submit(function (e) {
		e.preventDefault()
		username = usernameInput.find('input').val()
		password = passwordInput.find('input').val()
		$.post('/user', {
			username: username,
			password: password
		}, function (username) {
			if (username === 'guest') {
				$('.modal').modal('toggle');
				$.pop('try again.. idiot')
			}
			else {
				Y.render('HomePage');
				$.pop('welcome ' + username + '!')
			}
		})
	})
	return form
}
SignUpForm = function () {
	$.pop(_SignUpForm()).dg()
}
SignUpForm = function () {
	$.pop(_SignUpForm()).drag()
}