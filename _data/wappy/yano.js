Y.IMS = {}
Y = function (app) {
	Y.render(app)
	return Y
}
Y = function self(page) {
	self.render(page)
	return self
}
$ren = Y.render = function (page) {
	$l('in render')
	if (Y[page]) {
		$l('found page: ' + page)
		return Y[page]() || true
	}
}
$run = Y.run = function (app) {
	$l('Y.run')
	app = app.toUpperCase()
	if (app = Y[app] || window[app]) {
		app();
		return true
	}
}
Y.run = function (app) {
	if (F(app = Y[app.toUpperCase()] || window[app.toUpperCase()])) {
		app();
		return true
	} //return false
}
Y.render = function (app) {
	if (F(Y[app])) {
		Y[app]();
		return true
	}  //;  return false
}
Y.popUser = Y.uPop = function (un) {
	if (!un) {
		return $('.pop').$(function () {
			k.em('pop', {t: $('.pt').v, b: $('.pb').v})
		})
	}
	$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
		d = $.d()
		dv.A(
				$.br(),
				$.hr(),
				$.h3('User: ' + un), $.br(),
				$.c(300).fit(mug),
				d = $.d(),
				msg = $.ta().C('w', 'z'),
				$.btMail(msg, un),
				$.btCh(un, msg),
				$.bt('fullPf', function () {
					Y.loc('/wap/profiles/' + un)
				})
		)
		$.w(dv)
		$.sts(un, d);
		$.pf(un, d)
	})
}
Y.clr = function () {
	z();
	Y.nav()
}
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
Y.render = function (page) {
	if (Y[page]) {
		$l('found page: ' + page)
		return Y[page]() || true
	}
}
Y.run = function (app) {
	app = app.toUpperCase()
	if (app = Y[app] || window[app]) {
		app();
		return true
	}
}
Y.run = function (app) {
	app = app.toUpperCase()
	app = Y[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}
Y.render = function (page) {
	page = Y[page]
	if (page) {
		page();
		return true
	}
	return false
}
$to = Y.to = Y.load = function (a) {
	alert('y.to y.load')
	window.location = '/wap/' + a
}
$logOut = Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}
$nav = Y.nav = function () {
	navbarCollapse = $.nbC().A($.n(
					// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
					$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
					$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
					$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
					$.dd('talk', ['chat', 'universe', 'post']),
					$.dd('social', ['users', 'profiles', 'posts'])
					
					
					//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
			),
			$.nR(
					$.dd('account', ['status', 'profile', 'messages']),
					$.liA('logged: ' + _username),
					$.liA('logout', Y.logOut)
			)
	)
	$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
}//=Y.n
$d2 = $to = $rd = Y.directTo = Y.load = load = Y.to = function (a) {
	window.location = '/wap/' + a
}
$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
function sockStart() {
	k = io.connect();
	k.em = k.emit
}