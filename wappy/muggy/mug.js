_superCanvasMug = function (cv) {
	cv.drawMug = cv.me = function me(interval) {
		var cv = this
		//randomly draw my face
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (cv.drawMug.shouldDrawId) {
			clearInterval(that.drawMug.shouldDrawId)
			cv.drawMug.shouldDrawId = false
		}
		else {
			cv.drawMug.shouldDrawId = setInterval(function () {
				cv.draw(window['mug'] || 'me', _.random(that.W() - 200),
						_.random(that.W() - 200))
			}, interval)
		}
		return cv
	}
	cv.drawMug.shouldDrawId = false
	cv.fitMug = el.mug = function (ur) {
		var cv = this
		$.po('/mug', {u: ur}, function (mug) {
			cv.fit(mug)
		})
		return cv
	}
}
// or is this supposed to be modal header? ?
mugHeader = function () {
	return row(
			col(2).k('text-center')(qim('me').Z(.7), $h5('hi')),
			col(3)(
					$h4('pics'),
					$h5('place to upload'))
	).a()()
}
$mug = function (un, fn) {
	
	//make default un YOU (_username)
	$.g('/mugByUn/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}
$.mug = $.myMug = function (fn) {$.g('myMug', fn) }
ct._mug = function (sc, fn) {
	var ct = this
	$.g('/myMug', function (mug) {
		ct.bm(mug, sc, fn)
	})
	return ct
}
ct.mug = function () {

	var ct = this, g = G(arguments), o
	o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
	o.sc = N(o.sc) ? o.sc : 1
	o.fn = o.fn || function () {
	}
	
	$.myMug(function (m) {
		ct.bm(m, o.sc, o.fn)
	})
	
	return ct
}
ct.bData = function (da) {
	return $Bm($.i().src($.parseJSON(da))).a2(this)
}
LDTX = function () {St()
	$Ld([{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}],
			 function (ld) {st.A($Bm(ld.get("myImage")))}
	 
	 )
	 
}
MUG = function () {
	St().mug(function (mug) {
		m = mug
	})
}
$mugTest = function () {
	z();
	s = cjs.stage(800, 800).A()
	s.mug(function (mug) {
		m = mug
	})
}
$mugTest = function () {
	z();
	s = cjs.stage(800, 800).A()
	s.mug(function (mug) {
		m = mug
	})
} 
MUGTX = function () {
	z()
	$.h1('testing myMug ...').A()
	$.get('/myMug', function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
MUGBYUNTX = function (username) {
	z()
	username = username || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.get('/mugByUsername/' + username, function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
DFMGTX = function () {
	z()
	$.i(defaultMug).A()
}
 
MUGTX = function () {
	z()
	$.h1('testing myMug ...').A()
	$.get('/myMug', function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
MUGBYUNTX = function (username) {
	z()
	username = username || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.get('/mugByUsername/' + username, function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
DFMGTX = function () {
	z()
	$.i(defaultMug).A()
}
CHAN = function () {
	$CHAN = {}
	$.btEm = function (t, toEmit) {
		return $.bt(t, function () {
			k.em(toEmit || t)
		})
	} //a button that emits!
	$.dA().A(
			$.btEm('msg', 'chat'),
			$.bt('room', function () {
				Y.chan('chat', function () {
					$l('chat')
				}).on('al', pop)
			})
	)//.lt(300)
	k.on('newChat', function (d) {
		CH.bc(d.n + ': ' + d.m)
	})
	k.on('youChat', function (d) {
		CH.s(d.n + ': ' + d.m)
	})
}
FMTX = FORMATTX = function () {
	z()
	$.fm()
	s1.A($.imgResponsive('chicks'))
	s2.A($.i('me'), $.i('guy'))
}
//uses mug?
SPRITE = function (sprite) {
	sprite = $sprite(sprite || SS).XY(10).dg()
	stage = $St('o', 400).dg()//.op(.7),
	stage.A(sprite)
	controls = {
		jump: function () {
			sprite.gotoAndPlay('jump')
		},
		explode: function () {
			sprite.gotoAndPlay('explode')
		},
		spin: function () {
			sprite.gotoAndPlay('spin')
		},
		stop: function () {
			sprite.stop()
		},
		play: function () {
			sprite.play()
		}
	}
	$.d('y', 460, 89).css({
		position: 'absolute',
		top: 200, left: 300,
		padding: 20, opacity: .9
	}).dg().A(
			$.sp(' '),
			$.bt('spin', function () {
				controls.spin()
			}), $.sp(' '),
			$.bt('jump', function () {
				controls.jump()
			}), $.sp(' '),
			$.bt('explode', function () {
				controls.explode()
			}), $.sp(' '),
			$.bt('play', function () {
				controls.play()
			}), $.sp(' '),
			$.bt('stop', function () {
				controls.stop()
			}), $.sp(' '),
			$.bt('meta', function () {
				SPRITE()
			})
	)
	s = sprite
	return controls
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
sav = function (stage, a) {
	return function () {
		stage.sv(a)
	}
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.times(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
$.fit = fit = function (a, b, c) {
	return $.canvas(c || 'r', b || 700, b || 700).A().fit(a || 'me')
}
   