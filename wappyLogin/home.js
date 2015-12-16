$HomePage = Y.HomePage = function () {
	z()
	Y.nav()
	Y.run(wappyApp)
	//update username on screen
	$.Gj('loggedIn', function (uN) {
		$('#uname').text(_username = $l(uN))
	})
}
Y.HomePage = function () {
	WappyNav($r()
	) //load navigator
	Y.run(wappyApp)
	$.getJSON('/loggedIn',
			function (username) {
				$l('----' + username)
				$('#uname').text(_username = username)
			})
}
Y.HomePage = function () {
	z()
	Y.nav()
	Y.run(wappyApp)
	//update username on screen
	$.Gj('loggedIn', function (uN) {
		$('#uname').text(_username = $l(uN))
	})
}
Y.HomePage = function () {
	WappyNav($r()
	) //load navigator
	Y.run(wappyApp)
	$.getJSON('/loggedIn',
			function (username) {
				$l('----' + username)
				$('#uname').text(_username = username)
			})
}
home = function () {
	Y.render('HomePage')
}
Y.HomePage = function () {
	WappyNav($r()
	) //load navigator
	Y.run(wappyApp)
	$.getJSON('/loggedIn',
			function (username) {
				$l('----' + username)
				$('#uname').text(_username = username)
			})
}