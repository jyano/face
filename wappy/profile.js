function profile() {
	PROFILE = function () {
		$.boot = function () {
			z();
			var r = $.R()
			_.e(arguments, function (g) {
				r.A(g)
			})
			return ct = $.Ct().A(r)
		}
		$.boot(
				$.h1('you got a profile?'),
				$.d().id('content'),
				f = $.f().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sm('save profile'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.P('getMyProfile', function (pf) {
			if (pf) {
				$l('found profile -> _pf')
				_pf = pf
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
			else {
				$l('no profile found')
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.P('myprofile', data, function () {
				$l('P(mypf)')
				$.P('getMyProfile', function (pf) {
					_pf = pf
					$l('getMyProfile -> _pf')
				})
				$l('form data submited..')
			})
		})
	}
	PROFILE = function () {
		$.boot = function () {
			z();
			var r = $.R()
			_.e(arguments, function (g) {
				r.A(g)
			})
			return ct = $.Ct().A(r)
		}
		$.boot(
				$.h1('you got a profile?'),
				$.d().id('content'),
				f = $.f().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sm('save profile'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.P('getMyProfile', function (pf) {
			if (pf) {
				$l('found profile -> _pf')
				_pf = pf
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
			else {
				$l('no profile found')
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.P('myprofile', data, function () {
				$l('P(mypf)')
				$.P('getMyProfile', function (pf) {
					_pf = pf
					$l('getMyProfile -> _pf')
				})
				$l('form data submited..')
			})
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a pf?'),
				$.d().id('content'),
				f = $.form().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sbm('save pf'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').v(p.aboutMe)
								$('#iEnjoy').v(p.iEnjoy)
								$('#iSeek').v(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').v('')
							$('#iEnjoy').v('')
							$('#iSeek').v('')
						})
				))
		$.po('/getMyProfile', function (pf) {
			if (pf) {
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
		})
		$('form').sbm(function (e) {
			$.pD(e)
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.po('/myPf', data, function () {
				$.post('/getMyProfile',
						function (pf) {
							p = pf
						})
				$l('form data submited..')
			})
		})
	}
	$.pf = $.pf = function (un, theDiv) {  //=makeProfile = prof
		// if(pf.aboutMe){div.A(answer('aboutMe', pf.aboutMe)) } if(pf.iEnjoy){div.A(answer('iEnjoy', pf.iEnjoy)) } if(pf.iSeek){div.A(answer('iSeek', pf.iSeek) )}
		answer = function (ques, answ) {
			return $.d().A(
					$.h3(ques),
					$.h4(answ))
		}
		un = un || 'a'
		$.get('/pf/' + un, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a profile?'),
				$.div().id('content'),
				f = $.form().C('r').WH(400).A(
						$.div().A(
								$.label('about me'),
								$.textarea().id('aboutMe')),
						$.div().A(
								$.label('i enjoy'),
								$.input().id('iEnjoy')),
						$.div().A(
								$.label('i seek'),
								$.input().id('iSeek')),
						$.submit('save profile'),
						$.button('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.button('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.post('/getMyProfile', function (profile) {
			p = profile
			if (p) {
				$('#aboutMe').val(p.aboutMe)
				$('#iEnjoy').val(p.iEnjoy)
				$('#iSeek').val(p.iSeek)
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').val(),
				iEnjoy: $('#iEnjoy').val(),
				iSeek: $('#iSeek').val()
			}
			$.post('/myprofile', data, function () {
				$.post('/getMyProfile',
						function (profile) {
							p = profile
						})
				$l('form data submited..')
			})
		})
	}
	$.profile = function (username, theDiv) {  //=makeProfile = prof
		// if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
		answer = function (question, answer) {
			return $.div().A(
					$.h3(question),
					$.h4(answer))
		}
		username = username || 'a'
		$.get('/profile/' + username, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a profile?'),
				$.div().id('content'),
				f = $.form().C('r').WH(400).A(
						$.div().A(
								$.label('about me'),
								$.textarea().id('aboutMe')),
						$.div().A(
								$.label('i enjoy'),
								$.input().id('iEnjoy')),
						$.div().A(
								$.label('i seek'),
								$.input().id('iSeek')),
						$.submit('save profile'),
						$.button('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.button('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.post('/getMyProfile', function (profile) {
			p = profile
			if (p) {
				$('#aboutMe').val(p.aboutMe)
				$('#iEnjoy').val(p.iEnjoy)
				$('#iSeek').val(p.iSeek)
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').val(),
				iEnjoy: $('#iEnjoy').val(),
				iSeek: $('#iSeek').val()
			}
			$.post('/myprofile', data, function () {
				$.post('/getMyProfile',
						function (profile) {
							p = profile
						})
				$l('form data submited..')
			})
		})
	}
	$.profile = function (username, theDiv) {  //=makeProfile = prof
		// if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
		answer = function (question, answer) {
			return $.div().A(
					$.h3(question),
					$.h4(answer))
		}
		username = username || 'a'
		$.get('/profile/' + username, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
}
function status() {
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('status'),
				$.ip().id('statusInput'),
				$.bt('update', function () {
					$.P('status',
							{text: $('#statusInput').v()}, function () {
								$l('status updated')
							})
				}))
	}
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('status'),
				$.ip().id('statusInput'),
				$.bt('update', function () {
					$.P('status',
							{text: $('#statusInput').v()}, function () {
								$l('status updated')
							})
				}))
	}
	showStatus = stat = function (ur, dv) {
		$wSts(ur, function (sts) {
			dv($.h3('STATUS: ' + sts))
		})
	}
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('sts'),
				$.ip().id('stsInput'),
				$.bt('update', function () {
					sts = $('#stsInput').v()
					$.post('/sts', {text: sts}, function () {
						$l('sts updated')
					})
				})
		)
	}
	showStatus = stat = function (user, theDiv) {
		withStatus(user,
				function (status) {
					theDiv($.h3('STATUS: ' + status))
				})
	}
	STATUS = function () {
		$.format()
		s1.A(
				$.h1('status'),
				$.input().id('statusInput'),
				$.button('update', function () {
					status = $('#statusInput').val()
					$.post('/status', {text: status}, function () {
						$l('status updated')
					})
				})
		)
	}
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	showStatus = stat = function (user, theDiv) {
		withStatus(user,
				function (status) {
					theDiv($.h3('STATUS: ' + status))
				})
	}
	STATUS = function () {
		$.format()
		s1.A(
				$.h1('status'),
				$.input().id('statusInput'),
				$.button('update', function () {
					status = $('#statusInput').val()
					$.post('/status', {text: status}, function () {
						$l('status updated')
					})
				})
		)
	}
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
	$.wStatus = function (user, fn) {
		$.g('sts1', {u: user},
				function (sts) {
					fn(sts.c)
				})
	} //with first status?
}