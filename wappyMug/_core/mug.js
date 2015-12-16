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

QMUG = function () {
	$Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
		// mug= s.bData( qu.gR("mug") ).drag()
		St().A($Bm(ld.get("me")).drag())
	})
	///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
}

MUG = function () {St().mug(function (mug) {m = mug	})}
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
function mugLoader() {
	QU6 = QUEUEMUG = QM = function () {
		s = new cjs.Stage($.c('b', 500, 500)[0])
		Q([{id: "mug", src: "/myMug"}],
				function () {
					mug = new cjs.Bitmap($.i(Q.i('mug'))).dg()
					s.A(mug)
				})
	}
	QU9 = QUEUEMUG = QM = function () {
		s = new cjs.Stage($.c('b', 500, 500)[0])
		Q([{id: "mug", src: "/myMug"}],
				function () {
					mug = $Bm($.i(Q.i('mug'))).dg()
					s.A(mug)
				})
	}
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
CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug', {url: defaultMug},
			function () {
				z()
				TWEEN()
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
CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug', {url: defaultMug},
			function () {
				z()
				TWEEN()
			})
}
QUEUE = function () {
	z()
	s = cjs.stage(500).tick().A()
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest(
			[{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A(cjs.bm(image))
	}
}
QUEUEMUG = function () {
	z()
	s = cjs.stage(500, 500).tick().A()
	qu = Ql().c(graphics, this).l([
		{id: "mug", src: "/getMug"},
		{id: "me", src: "/me.png"}
	])
	////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	function graphics() {
		
		// mug= s.bData( qu.gR("mug") ).drag()
		me = cjs.bm(qu.gR("me")).drag()
		s.A(me)
	}
}
//// ***
mugCont = function (stage) {
	cont = cjs.container()
	cont.flame = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('flame', function (flame) {
				})
		)
	}
	cont.uni = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('uni', function (uni) {
					uni.x(200).y(200)
					cont.mug.sxy(.2).x(300)
				}))
	}
	cont.guy = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('guy', function (guy) {
					guy.spin()
					cont.spin()
				})
		)
	}
	cont.desuit = function () {
		cont.mug.sXY(1).XY(200)
		if (cont.suit) {
			cont.suit.remove()
			cont.suit = null
		}
	}
	qu = new cjs.LoadQueue().complete(onMug)
			.manifest([{id: "mug", src: "/myMug"}])
	function onMug() {
		mug = qu.getResult("mug")
		// cont.bData( mug )//.rgc('+')
		cont.A(cont.mug = cjs.bm(mug))
	}
	
	return cont
}
CONTMUG = function () {
	z()
	s = cjs.stage(1000).A()
	s.A(m = mugCont())//.rgc('+')
	// SL(m)
}
//// ***
QUEUE = function () {
	z()
	s = cjs.stage(500).tick().A()
	queue = new createjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest(
			[{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A(cjs.bm(image))
	}
}
QUEUEMUG = function () {
	z()
	s = cjs.stage(500, 500).tick().A()
	qu = Ql().c(graphics, this).l([
		{id: "mug", src: "/getMug"},
		{id: "me", src: "/me.png"}
	])
	////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	function graphics() {
		
		// mug= s.bData( qu.gR("mug") ).drag()
		me = cjs.bm(qu.gR("me")).drag()
		s.A(me)
	}
}
//// ***
mugCont = function (stage) {
	qu = new cjs.LoadQueue().complete(onMug).manifest([{id: "mug", src: "/myMug"}])
	cont = cjs.container()
	cont.flame = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('flame', function (flame) {
				})
		)
	}
	cont.uni = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('uni', function (uni) {
					uni.x(200).y(200)
					cont.mug.sxy(.2).x(300)
				}))
	}
	cont.guy = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('guy', function (guy) {
					guy.spin()
					cont.spin()
				})
		)
	}
	cont.desuit = function () {
		cont.mug.sXY(1).XY(200)
		if (cont.suit) {
			cont.suit.remove()
			cont.suit = null
		}
	}
	function onMug() {
		mug = qu.getResult("mug")
		// cont.bData( mug )//.rgc('+')
		cont.A(cont.mug = cjs.bm(mug))
	}
	
	return cont
}
CONTMUG = function () {
	z()
	s = cjs.stage(1000).A()
	s.A(m = mugCont())//.rgc('+')
	// SL(m)
}
//// ***
Cycle1 = function () {
	var cont = new createjs.Container()
	cont.mug(function (mug) {
		mug.sXY(.4)
		cont.bm('uni', function (bitmap) {
			bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
			bitmap.name = 'uni'
			createjs.bindTransform(mug, cont)
			createjs.bindRotate(bitmap, cont)
		})
	})
	return cont
}
Cycle2 = function () {
	var cont = new createjs.Container()
	var qu = new createjs.LoadQueue().complete(graphics).manifest([
		{id: "mug", src: "/getMug"},
		{id: "uni", src: "/uni.png"}
	])
	
	function graphics() {
		cont.bm(
				qu.getResult("uni"),
				function (b) {
					bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = ('uni')
				})
		cont.bm(
				$.img($.parseJSON(qu.getResult("mug"))),
				function (b) {
					mug = b.sXY(.4)
				})
		SL(mug, cont)
		cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
	}
	
	return cont
}
CYCLE = function () {
	z()
	s = $stage(800, 800).A().tick()
	c1 = Cycle1()
	c2 = Cycle2()
	s.A(c1, c2)
}
function mugSuit() {
	//// ***
	CONTMUG = function () {
		z()
		s = cjs.stage(1000).A()
		s.A(m = mugCont())//.rgc('+')
		// SL(m)
	}
	SUIT = function (st) {
		alert('mugCont')
		qu = new cjs.LoadQueue().complete(onMug)
				.manifest([{id: "mug", src: "/myMug"}])
		cont = $Ct()
		cont.flame = function () {
			cont.desuit()
			cont.A(
					cont.suit = cjs.container().bm('flame', function (flame) {
					})
			)
		}
		cont.uni = function () {
			cont.desuit()
			cont.A(
					cont.suit = cjs.container().bm('uni', function (uni) {
						uni.x(200).y(200)
						cont.mug.sxy(.2).x(300)
					}))
		}
		cont.guy = function () {
			cont.desuit()
			cont.A(
					cont.suit = cjs.container().bm('guy', function (guy) {
						guy.spin()
						cont.spin()
					})
			)
		}
		cont.desuit = function () {
			cont.mug.sXY(1).XY(200)
			if (cont.suit) {
				cont.suit.remove()
				cont.suit = null
			}
		}
		function onMug() {
			mug = qu.getResult("mug")
			// cont.bData( mug )//.rgc('+')
			cont.A(cont.mug = $Bm(mug))
		}
		
		mugCont = function (stage) {
			qu = $Ld([{id: "mug", src: "/myMug"}], function (l) {
				var mug = l.get("mug")
				// cont.bData( mug )//.rgc('+')
				ct.A(ct.mug = cjs.bm(mug))
			})
			ct = cjs.container()
			ct.flame = function () {
				ct.desuit()
				ct.A(
						cont.suit = cjs.container().bm('flame', function (flame) {
						})
				)
			}
			cont.uni = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('uni', function (uni) {
							uni.x(200).y(200)
							cont.mug.sxy(.2).x(300)
						}))
			}
			cont.guy = function () {
				cont.desuit()
				cont.A(
						cont.suit = cjs.container().bm('guy', function (guy) {
							guy.spin()
							cont.spin()
						})
				)
			}
			cont.desuit = function () {
				cont.mug.sXY(1).XY(200)
				if (cont.suit) {
					cont.suit.remove()
					cont.suit = null
				}
			}
			return cont
		}
		return cont
	}
}