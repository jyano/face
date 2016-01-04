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
 