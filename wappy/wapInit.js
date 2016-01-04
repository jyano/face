appInit = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}

$(appInit)
$(function () {
	if (window[_app = uC(_app)]) {
		window[_app]()
	}
})
$(function () {


	$.j('loggedIn', function (un) {
		$l('un: ' + un)
		if (isGuest(Y._un = Y._userName = _username = un)) {
			Y('GuestPage')
		} else {
			logInUser(un)
		}
		function logInUser(un) {
			k.em('id', un);
			k.em('jRm', _username)
			$.g('myMug', function (mug) {
				Y._userMug = _userMug = mug
				$l('going to home page..')
				Y('HomePage')
			})
		}
		
		function isGuest(un) {
			return un == 'guest' || !un
		}
	})
})
 