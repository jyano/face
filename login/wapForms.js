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