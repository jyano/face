_LoginForm = function () {
	return _form().sbm(sbm)
}
LoginForm = function () {
	$.pop(_LoginForm()).dg()
}
_LoginForm = function () {
	var form = $.form().C('green').pad(4).A(
			$.formGroupDiv().A(
					$.label('username: ', 'username'),
					$.textInput('username')),
			$.formGroupDiv().A(
					$.label('password: ', 'password'),
					$.passwordInput('password')),
			$.submitInput('log in')
	)
	form.submit(function (e) {
		e.preventDefault()
		var formData = form.serializeJSON() // $l(formData)
		$.post('/login', formData, verifyLogin)
	})
	function verifyLogin(username) {
		if (username === 'guest') {
			$('.modal').modal('toggle')
			$.pop('try again.. idiot')
		}
		else {
			Y.render('HomePage');
			$.pop('welcome ' + username + '!')
		}
	}
	
	return form
}
LoginForm = function () {
	$.pop(_LoginForm()).drag()
}