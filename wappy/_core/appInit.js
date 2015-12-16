$(appInit)
$(function () {
	if (window[_app = uC(_app)]) {
		window[_app]()
	}
})
appInit = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}