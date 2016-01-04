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
 