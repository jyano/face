$.aK = function (k, tx) {
	var a = $.a(tx)
	a.K(k)
	return a
}


$.N = function () {
	var q = $('<nav>')
	return q
}
$.fn.D = function (k, v) {
	if (U(k)) {
		return
	} else if (U(v)) {
		return this.at('data-' + k)
	}
	this.at('data-' + k, v);
	return this
}
$.spK = function (k) {
	var sp = $.sp();
	sp.K(k);
	return _A(sp, G(arguments))
}
 
$.q = function (str, arr) {
	return _A($('<' + str + '>').A(), arr)
}
$.aK = function (k, tx) {
	return _A($.a(tx).K(k), G(arguments))
}
$.N = function () {
	return _A($('<nav>'), G(arguments))
}


Bs = function () {
	var g = G(arguments);
	return _A($.d().K(
			g.p ? 'container-fliud' : 'container').A(), g)
}
Bs.liA = function (tx) {
	return $.li().A($.a(tx))
}
nav();
 
cards();
media();
grid()
$.fn.$$ = function () {
	return this.K('active')
}
Bs.mu = function () {
	return _A($.sp().K("text-muted"), G(arguments))
}
Bs.J = function () {
	return _A($.dK('jumbotron'), G(arguments))
}
Bs.ct = function () {
	return _A($.dK('container'), G(arguments))
}
Bs.jbt = function () {
	return _A($.dK('jumbotron'), G(arguments))
}
$.fn.$ld = function () {
	return this.K('lead')
}
Bs.ldP = Bs.ld = function () {
	return _A($.p().$ld(), G(arguments))
}
JMBO = BS18 = function () {
	z()
	Bs.ct([Bs.jbt([
		$.h1('awesome h1 title').K('display-3'),
		Bs.ldP('this is an awwwwwwesome p tag with a lead'),
		$.hr().K('m-y-md'),
		$.p('less awesome awesome h1 title'),
		Bs.ldP(
				$.a('click me', 'www.playboy.com').
						$bt().$bt('primary', 'lg'))
	])])
}
 

function nav() {
	$.fn.$nI = function () {
		return this.K("nav-item")
	}
	$.fn.$n = function () {
		return this.K("nav")
	}
	$.fn.bgF = function () {
		return this.K('bg-faded')
	}
	$.nv = function (k, arr) {
		return _A($.N().A().K(k), G(arguments))
	}
	Bs.nIt = function (a) {
		return _A($.li().K("nav-item"), G(arguments))
	}
	Bs.nLk = function (tx, hrf) {
		return $.a(tx, hrf).K("nav-link")
	}
	Bs.nItLk = function (tx) {
		return Bs.nIt(Bs.nLk(tx))
	}
}
function media() {
	BS9 = BSMEDIA = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		med = $('<div>').K('media').A(
				$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
						$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
				)
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
				)
		)
	}
	BS10 = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(getMediaOb())
				)
		)
		function getMediaOb() {
			var med = $('<div>').K('media')
			med.A(
					$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
							$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ', $('<div>').K('media').A(
									$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
											$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ', $('<div>').K('media').A(
													$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
															$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
													)
											)
									)
							), $('<div>').K('media').A(
									$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
											$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
									)
							)
					)
			)
			return med
		}
	}
	BS11 = function () {
		z()
		str = ''
		_.t(
				120, function () {
					str += 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'
				}
		)
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		med = $('<div>').K('media').A(
				$.a('', 'google.com').K('media-left').A($.i('guy').K('media-object')), $.a('', 'google.com').K('media-left media-middle').A($.i('guy').K('media-object')), $.a('', 'google.com').K('media-left media-bottom').A($.i('guy').K('media-object')), $('<div>').K('media-body').A(
						$.h4('Arwaseome title').K('media-heading'), str
				)
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
				)
		)
	}
}
function cards() {
	BS21 = CARDS = BS25 = CAD = function () {
		z()
		$.d().K('container').A(
				$.d().K('card').C('r').css('max-width', 500).A(
						$.i('me').K('card-img-top').at('alt', 'Card Image'), $.dK('card-block').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-warning')
						)
				)
		)
	}
	BS22 = function () {
		z()
		$.d().K('container').A(
				$.d().K('card').css('max-width', 500).A(
						$.i('me').K('card-img-top').at('alt', 'Card Image'), $.ul().K('list-group list-group-flush').A(
								$.li('afsda fssaff').K('list-group-item1'), $.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'), $.li('afsda').K('list-group-item 3')
						), $.dK('card-block').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-warning')
						)
				)
		)
	}
	BS23 = function () {
		z()
		$.d().K('container').A(
				$.d().K('card text-center').css('max-width', 500).A(
						$.i('me').K('card-img-top').at('alt', 'Card Image'), $.ul().K('list-group list-group-flush').A(
								$.li('afsda fssaff').K('list-group-item1'), $.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'), $.li('afsda').K('list-group-item 3')
						), $.dK('card-block text-right').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-warning')
						)
				)
		)
	}
	BS24 = function () {
		z()
		$.d().K('container').A(
				$.d().K('card text-center').css('max-width', 500).A(
						$.d().K('card-header text-center').A('this is the headoter hadha '), $.i('me').K('card-img-top').at('alt', 'Card Image'), $.ul().K('list-group list-group-flush').A(
								$.li('afsda fssaff').K('list-group-item1'), $.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'), $.li('afsda').K('list-group-item 3')
						), $.dK('card-block text-right').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-warning')
						), $.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
				)
		)
	}
	BS25 = function () {
		z()
		$.d().K('container').A(
				$.br(5), $.d('b').K('card text-center card-inverse').C('z').css('max-width', 500).A(
						$.d().K('card-header text-center').A('this is the headoter hadha '), $.i('me').K('card-img-top').at('alt', 'Card Image'), $.dK('card-block text-right').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-danger')
						), $.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
				), $.br(5)
		)
	}
	BS26 = function () {
		z()
		$.d().K('container').A(
				$.br(5), $.d('b').K('card text-center card-inverse').C('z').css('max-width', 500).A(
						$.d().K('card-header text-center').A('this is the headoter hadha '), $.i('me').K('card-img-top').at('alt', 'Card Image'), $.dK('card-img-overlay text-right').A(
								$.h4().K('card-title').A('this is a title'), $.p().K('card-text').A(
										'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af' + 'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
								), $.a('A button', 'http://www.playboy.com').K('btn btn-danger')
						), $.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
				), $.br(5)
		)
	}
}
function grid() {
	Bs.r = function () {
		return _A($.dK('row'), G(arguments))
	}
	Bs.c = function (x) {
		var k = 'col';
		if (x) {
			k += '-' + x
		}
		return _A($.dK(k), G(arguments))
	}
	Bs.R = function () {
		var g = G(arguments), d = $.d().K('row')
		if (g.A) {
			_.e(
					g.f, function (q) {
						d.A(q)
					}
			)
		} else if (g.f) {
			d.A(g.f)
		}
		return d.A()
	}
	BS2 = function () {
		z()
		$CSS(
				{
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		Bs(
				[
					Bs.R(
							[
								$.dK('col-xs-4 red').A('hello world'), $.dK('col-xs-4 green').A('hello world'), $.dK('col-xs-4 blue').A('hello world')
							]
					)
				]
		)
	}
	BS3 = BSGRID = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		Bs().C('z').A(
				Bs.R(
						[
							$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 blue').A('hello world')
						]
				)
		)
	}
	BS4 = BSGRIDMORE = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').C('z')
		ct.A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
				)
		)
	}
	BS5 = COLOFFSET = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').C('z')
		ct.A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
				)
		)
	}
	Bs.R = function () {
		var g = G(arguments), d = $.d().K('row')
		if (g.A) {
			_.e(g.f, function (q) {
				d.A(q)
			})
		} else if (g.f) {
			d.A(g.f)
		}
		return d.A()
	}
	BS2 = function () {
		z()
		$CSS(
				{
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		Bs(
				[
					Bs.R(
							[
								$.dK('col-xs-4 red').A('hello world'), $.dK('col-xs-4 green').A('hello world'), $.dK('col-xs-4 blue').A('hello world')
							]
					)
				]
		)
	}
	BS3 = BSGRID = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		Bs().C('z').A(
				Bs.R(
						[
							$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 blue').A('hello world')
						]
				)
		)
	}
	BS4 = BSGRIDMORE = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').C('z')
		ct.A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
				)
		)
	}
	BS5 = COLOFFSET = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').C('z')
		ct.A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
				)
		)
	}
	BS9 = BSMEDIA = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		med = $('<div>').K('media').A(
				$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
						$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
				)
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
				)
		)
	}
	BS10 = function () {
		z()
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(getMediaOb())
				)
		)
		function getMediaOb() {
			var med = $('<div>').K('media')
			med.A(
					$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
							$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ', $('<div>').K('media').A(
									$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
											$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ', $('<div>').K('media').A(
													$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
															$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
													)
											)
									)
							), $('<div>').K('media').A(
									$.a('', 'google.com').K('media-left').A($.i('me').K('media-object')), $('<div>').K('media-body').A(
											$.h4('Arwaseome title').K('media-heading'), 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds' + ' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
									)
							)
					)
			)
			return med
		}
	}
	BS11 = function () {
		z()
		str = ''
		_.t(120, function () {
			str += 'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'
		})
		$CSS(
				{
					body: {C: 'w'},
					_grey: {c: 'w', C: 'grey'},
					_red: {c: 'w', C: 'r'},
					_green: {c: 'w', C: 'g'},
					_blue: {c: 'w', C: 'b'}
				}
		)
		med = $('<div>').K('media').A(
				$.a('', 'google.com').K('media-left').A($.i('guy').K('media-object')), $.a('', 'google.com').K('media-left media-middle').A($.i('guy').K('media-object')), $.a('', 'google.com').K('media-left media-bottom').A($.i('guy').K('media-object')), $('<div>').K('media-body').A(
						$.h4('Arwaseome title').K('media-heading'), str
				)
		)
		ct = $('<div>').A().K('container').A(
				$('<div>').K('row').A(
						$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'), $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
				)
		)
	}
	BSLABELSALERTS = BSLB = BS19 = function () {
		z();
		$.br(3)
		ct = Bs.ct(
				Bs.r(
						cl = Bs.c()
				)
		)
		_.e(
				['default', 'primary', 'info', 'success', 'warning', 'danger'], function (ki) {
					cl.A(
							$.spK('label label-' + ki).A('this is an ', ki)
					)
					cl.A($.spK('label label-pill label-' + ki).A('this is an ', ki))
				}
		)
		$.d().K('alert alert-success').A(
				$('<strong>').A('THIS '), 'is an alert'
		)
		$.d().K('alert alert-warning').A(
				$('<strong>').A('THIS '), 'is an alert'
		)
		$.d().K('alert alert-danger').A(
				$('<strong>').A('THIS '), 'is an alert'
		)
		$.br().A()
		$.d().K('alert alert-success').A(
				'this is ', $.a(' an alert ').K('alert-link'), ' link'
		), $.br().A(), $.d().K('alert alert-info alert-dismissible fade in').A(
				$('<button>').K('close').at('data-dismiss', 'alert').A(
						$.sp().html('&times;')
				), $('<strong>').A('THIS '), 'is an alert'
		)
	}
}
BOOT = function () {
	jumbo = $.d().K('jumbotron').A($.h1('h1 in jumbo'))
	pg = $.p().A('paragraph outside jumbotron')
	ct = $.d().C('b').K('container')
	ct.A(jumbo, pg)
}