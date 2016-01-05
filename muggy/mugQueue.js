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
MX1 = MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	stage = St()
	$.d('b', 50, 50).A()
	//stage = s = cjs.stage(1600,1000).tick().A()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	st.on('e', co)
	//make a container
	st.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
		c.bm('me',
				function (b) {
					b.sXY(.2).XY(100, 80)
					b.on(click, function () {
						$l('lit')
					}, '/')  //on click, log('lit'), just once (remove listener)!
				})
		// the middle size me demonstrates stopPropogation
		// if you click it, the container does not feel the click
		c.bm('me', function (bm) {
			bm.sXY(.4).XY(100, 180)
			bm.$(function () {
				$l('mid')
			}, '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (bm) {
			bm.sXY(1.5)
			bm.on('click', function () {
				$l('big')
			})  //on click, log('big')
		})    //on click, log('con')
		c.on('click', function () {
			$l('con')
		})
	})
	st.ct(function (ct) {
		c = ct
		var vn = 0, rvn = 0, on = 0, ron = 0
		ct.X(200)
		ct.mug(function (b) {
			b.sXY(.8).XY(200, 80)
		})
		ct.mug(function (b) {
			b.sXY(.8).XY(100, 280)
		})
		ct.mg(function (b) {
			b.sXY(.8).XY(340, 180)
		})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		ct.on('mouseover', function () {
			c.X(10, '+');
			$l('v: ' + vn++)
		})
		ct.on('rollover', function () {
			c.X(20, '-');
			$l('rv: ' + rvn++)
		})
		ct.on('mouseout', function () {
			c.Y(10, '+');
			$l('o: ' + on++)
		})
		ct.on('rollout', function () {
			c.Y(20, '-');
			$l('ro: ' + ron++)
		})
	}).MV(40)
	st.ct(function (ct, st) {
		ct.X(700)
		ct.mug(function (bm) {
			bm.sXY(.8).XY(200, 80)
		})
		ct.mug(function (bm) {
			bm.sXY(.8).XY(100, 280)
		})
		ct.mug(function (bm) {
			bm.sXY(.8).XY(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		ct.on('mouseover', function () {
			$l('mouseover');
			this.sXY(.01, '+')
		})
		ct.on('rollover', function () {
			$l('rv');
			this.sXY(.01, '+')
		})
		ct.on('mouseout', function () {
		})
		ct.on('rollout', function () {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40) //??? mouse events? speed for some mouse checking thing
	st.ct(function (ct, st) {
		ct.x = 1400
		ct.bm('me', function (bm) {
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, ct)
			ctr.bm('me', function (bm) {
				//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				ct.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180).SL();
					RT(bm, big)
				})
			})
		})
		//guy slides stage
		ct.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180);
			SL(bm, st)
		})
	})
}
SOY = SHOOTY = function () {
	St()
	$.ghost = function () {
		return $.c('X', 500, 500).fit('me').al(.1)
	} // how cool.. it 'steals' the drag because its on top but looks like its below
	st.mug(function (m) {
		m.XY(100, 100).WH(150)
		SL(m)
		//key(m, '-')
		// ugun(mug)
	})
	c = $.ghost().XY(10, 10).A().dg()
}//C-
TWEEN = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
PACK = function () {
	stage = $St(800)
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
	sprite.framerate = 6
	sprite.play()
}
TWEEN = function (a) {
	st = $St(500, 500)
	st.mug(function (bm) {
		b = bm
		TR(bm)
		$Tw(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	st.mug(function (bm) {
		bm.TR()
		$Tw([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
	$.A('hahaahah')
}
PACK = function () {
	stage = $St(800)
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
	sprite.framerate = 6
	sprite.play()
}
QMUG = function () {
	$Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
		// mug= s.bData( qu.gR("mug") ).drag()
		St().A($Bm(ld.get("me")).drag())
	})
	///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
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