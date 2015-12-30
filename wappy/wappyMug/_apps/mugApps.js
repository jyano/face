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
 function anim(){
	 TWEEN = function (a) {//combo/complex/anim/tween
		 //wMs looks like it makes/appends a stage, gives it a bitmap
		 //based on your mug, and pass it to a callback
		 s = createjs.stage('y', 500, 500).tick().A()
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
					 [{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			 )
		 })
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'],
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
	 }
	 TWEENART = function (a) {
		
		
		 //wMb makes bitmap mug and passes it to a callback
		 //optionally? can pass a stage to append it to before the callback runs
		 wMb(
				 function (b, s) {
					 b.xy(300);
					 b.rgc(); //centers it's reg point?
					 SK(b)
					 cjs.tween(
							 [b, 'l'],
							 {sxy: .5},
							 [{sxy: .7}, 500],
							 [{sxy: .5}, 500]
					 )
					 wMb(function (b) {
						 s.a(b)//manual add necessary?
						 b.xy(200);
						 b.rgc();
						 b.wh(200);
						 SL(b);
						 cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						 wMb(function (b) {
							 s.a(b);
							 b.rgc();
							 b.xy(600);
							 SC(b)
							 cjs.tween([b, 'l'], {kxy: 0},
									 [{kxy: 20}, 500],
									 [{kxy: 0}, 500])
						 })
					 })
				 }, EDIT()
		 )
	 }
	 EASING = function () {
		 stage = createjs.stage(1000, 10000).tick().A()
		 stage.mug(
				 function (b) {
					 bb = b
					 b.sXY(.2).XY(50, 100)
					 cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
					 )
				 })
		 eas = function (y, e) {
			 stage.mug(
					 function (b) {
						 b.sXY(.2).XY(50, y)
						 cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
						 b.$(function () {
							 pop(e + ' : ' + oO('E', e))
						 })
					 })
		 }
		 eas(300, 'bO');
		 eas(500, 'bI');
		 eas(700, 'bIO')
		 eas(900, 'bnO');
		 eas(1100, 'bnI');
		 eas(1300, 'bnIO')
		 eas(1500, 'cO');
		 eas(1700, 'cI');
		 eas(1900, 'cIO')
		 eas(2100, 'eO');
		 eas(2300, 'eI');
		 eas(2500, 'eIO')
		 eas(2700, 'qO');
		 eas(2900, 'qI');
		 eas(3100, 'qIO')
		 eas(3900, 'qnO');
		 eas(4100, 'qnI');
		 eas(4300, 'qnIO')
		 eas(4500, 'sO');
		 eas(4700, 'sI');
		 eas(4900, 'sIO')
		 eas(5100, 'qdO');
		 eas(5300, 'qdI');
		 eas(5500, 'qdIO')
	 }
	 PACK = function () {
		 stage = cjs.stage(800).A()
		 //stage.op(.7)
		 sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
		 stage.A(sprite)
		 //.rgc()
		 sprite.framerate = 6
		 sprite.play()
	 }
//make movie
	 MOVIE = function () {//wap()
		 z()
		 var s = $.canvas('blue', 800, 800).A().stage.tick(),
				 div = $.div().A(),
				 fn = function () {
				 }
		 $.getJSON('/img', function (imgs) {
			 _.each(imgs, function (v) {
				 v = v.d
				 var canvas = $.canvas(100, 100).A().fit(v)
				 canvas.click(function () {
					 s.bm(v, function (b) {
								 bb = b
								 createjs.bindTransform(b);
								 //fn(b)
								 b.click(function (q) {
									 fn(q)
								 })
							 },
							 '+')
				 })
				 div.A(canvas)
			 })
			 part2 = function () {
				 c = cnt(
						 $.row.A(
								 $.div()(div, s),
								 $.div().A(
										 $.button('shake', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({x: b.x()}, 500))
														 .to(ww({x: b.x() + 100}), 500)
														 .to(ww({x: b.x()}), 500)
											 }
										 }),
										 $button('rotate', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
											 }
										 }),
										 $button('size', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
											 }
										 })
								 )))
			 }
			 //c.o('$$',function(){  s.sv(ART)})
		 })
		 return s
	 }
	 STAGE = function () {
		 z()
		 m$$("location=location")
		 s = St(600).a().rgc().drg().xy(300)
		 s.bm('chicks')
		 s.bm('me', function (mm) {
			 m = mm
			 m.rgc()
			 m.xy(300)
			 cjs.tween(s, [{r: -10000}, 300000])
			 cjs.tween(m, [{r: 100000}, 300000])
		 })
		 s.bm('guy', function () {
		 })
	 }
	 CJSSPINNER = function () {
		 z()
		 s = cjs.stage('purple', 1000).A().rCenter()
		 cjs.tween(s, [{r: -10000}, 300000])
		 s.bm('me', function (bm) {
			 m = bm.XY(500)
			 SL(bm)
		 })
		 s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		 s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		 s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	 }
	 RECTS = function () {
		 z()
		 x = 20
		 y = 20
		 s = cjs.stage(500).A()//.drag()
		 h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		 h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		 h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		 s.A(h0, h1, h2)
		 SL(h2)
		 SL(h2, h1)
		 SL(h2, h0)
		 RT(h1)
		 RT(h1, h2)
		 RT(h1, h0)
		 SC(h0)
		 SC(h0, h2)
		 SC(h0, h1)
		 a = function () {
			 x += 20;
			 y += 20
			 h1.clear()
			 h2.clear()
			 h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			 h2.rect(0, 0, x, y, 'orange', 'transparent')
		 }
		 // h0.rect(50,50,30,30,'black','orange')
	 }
	 TWEEN = function (a) {//combo/complex/anim/tween
		 //wMs looks like it makes/appends a stage, gives it a bitmap
		 //based on your mug, and pass it to a callback
		 s = createjs.stage('y', 500, 500).tick().A()
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
					 [{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			 )
		 })
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'],
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
	 }
	 TWEENART = function (a) {
		
		
		 //wMb makes bitmap mug and passes it to a callback
		 //optionally? can pass a stage to append it to before the callback runs
		 wMb(
				 function (b, s) {
					 b.xy(300);
					 b.rgc(); //centers it's reg point?
					 SK(b)
					 cjs.tween(
							 [b, 'l'],
							 {sxy: .5},
							 [{sxy: .7}, 500],
							 [{sxy: .5}, 500]
					 )
					 wMb(function (b) {
						 s.a(b)//manual add necessary?
						 b.xy(200);
						 b.rgc();
						 b.wh(200);
						 SL(b);
						 cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						 wMb(function (b) {
							 s.a(b);
							 b.rgc();
							 b.xy(600);
							 SC(b)
							 cjs.tween([b, 'l'], {kxy: 0},
									 [{kxy: 20}, 500],
									 [{kxy: 0}, 500])
						 })
					 })
				 }, EDIT()
		 )
	 }
	 EASING = function () {
		 stage = createjs.stage(1000, 10000).tick().A()
		 stage.mug(
				 function (b) {
					 bb = b
					 b.sXY(.2).XY(50, 100)
					 cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
					 )
				 })
		 eas = function (y, e) {
			 stage.mug(
					 function (b) {
						 b.sXY(.2).XY(50, y)
						 cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
						 b.$(function () {
							 pop(e + ' : ' + oO('E', e))
						 })
					 })
		 }
		 eas(300, 'bO');
		 eas(500, 'bI');
		 eas(700, 'bIO')
		 eas(900, 'bnO');
		 eas(1100, 'bnI');
		 eas(1300, 'bnIO')
		 eas(1500, 'cO');
		 eas(1700, 'cI');
		 eas(1900, 'cIO')
		 eas(2100, 'eO');
		 eas(2300, 'eI');
		 eas(2500, 'eIO')
		 eas(2700, 'qO');
		 eas(2900, 'qI');
		 eas(3100, 'qIO')
		 eas(3900, 'qnO');
		 eas(4100, 'qnI');
		 eas(4300, 'qnIO')
		 eas(4500, 'sO');
		 eas(4700, 'sI');
		 eas(4900, 'sIO')
		 eas(5100, 'qdO');
		 eas(5300, 'qdI');
		 eas(5500, 'qdIO')
	 }
	 meSprite = function () {
		 return $sprite(SS).XY(10).drag()
	 }
	 SPRITE = function (sprite) {
		 sprite = $sprite(sprite || SS).XY(10).drag()
		 stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
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
		 $.div('yellow', 460, 89).css({
			 position: 'absolute',
			 top: 200,
			 left: 300,
			 padding: 20,
			 opacity: .9
		 }).A().drag().A(
				 $.span(' '),
				 $.button('spin', function () {
					 controls.spin()
				 }), $.span(' '),
				 $.button('jump', function () {
					 controls.jump()
				 }), $.span(' '),
				 $.button('explode', function () {
					 controls.explode()
				 }), $.span(' '),
				 $.button('play', function () {
					 controls.play()
				 }), $.span(' '),
				 $.button('stop', function () {
					 controls.stop()
				 }), $.span(' '),
				 $.button('meta', function () {
					 SPRITE()
				 })
		 )
		 s = sprite
		 return controls
	 }
	 SPRITE2 = function () {
		 stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		 stage.A(sprite = $sprite(SS).XY(10).drag())
	 }
//make movie
	 MOVIE = function () {//wap()
		 z()
		 var s = $.canvas('blue', 800, 800).A().stage.tick(),
				 div = $.div().A(),
				 fn = function () {
				 }
		 $.getJSON('/img', function (imgs) {
			 _.each(imgs, function (v) {
				 v = v.d
				 var canvas = $.canvas(100, 100).A().fit(v)
				 canvas.click(function () {
					 s.bm(v, function (b) {
								 bb = b
								 createjs.bindTransform(b);
								 //fn(b)
								 b.click(function (q) {
									 fn(q)
								 })
							 },
							 '+')
				 })
				 div.A(canvas)
			 })
			 part2 = function () {
				 c = cnt(
						 $.row.A(
								 $.div()(div, s),
								 $.div().A(
										 $.button('shake', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({x: b.x()}, 500))
														 .to(ww({x: b.x() + 100}), 500)
														 .to(ww({x: b.x()}), 500)
											 }
										 }),
										 $button('rotate', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
											 }
										 }),
										 $button('size', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
											 }
										 })
								 )))
			 }
			 //c.o('$$',function(){  s.sv(ART)})
		 })
		 return s
	 }
	 STAGE = function () {
		 z()
		 m$$("location=location")
		 s = St(600).a().rgc().drg().xy(300)
		 s.bm('chicks')
		 s.bm('me', function (mm) {
			 m = mm
			 m.rgc()
			 m.xy(300)
			 cjs.tween(s, [{r: -10000}, 300000])
			 cjs.tween(m, [{r: 100000}, 300000])
		 })
		 s.bm('guy', function () {
		 })
	 }
	 CJSSPINNER = function () {
		 z()
		 s = cjs.stage('purple', 1000).A().rCenter()
		 cjs.tween(s, [{r: -10000}, 300000])
		 s.bm('me', function (bm) {
			 m = bm.XY(500)
			 SL(bm)
		 })
		 s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		 s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		 s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	 }
	 RECTS = function () {
		 z()
		 x = 20
		 y = 20
		 s = cjs.stage(500).A()//.drag()
		 h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		 h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		 h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		 s.A(h0, h1, h2)
		 SL(h2)
		 SL(h2, h1)
		 SL(h2, h0)
		 RT(h1)
		 RT(h1, h2)
		 RT(h1, h0)
		 SC(h0)
		 SC(h0, h2)
		 SC(h0, h1)
		 a = function () {
			 x += 20;
			 y += 20
			 h1.clear()
			 h2.clear()
			 h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			 h2.rect(0, 0, x, y, 'orange', 'transparent')
		 }
		 // h0.rect(50,50,30,30,'black','orange')
	 }
	 meSprite = function () {
		 return $sprite(SS).XY(10).drag()
	 }
	 SPRITE = function (sprite) {
		 sprite = $sprite(sprite || SS).XY(10).drag()
		 stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
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
		 $.div('yellow', 460, 89).css({
			 position: 'absolute',
			 top: 200,
			 left: 300,
			 padding: 20,
			 opacity: .9
		 }).A().drag().A(
				 $.span(' '),
				 $.button('spin', function () {
					 controls.spin()
				 }), $.span(' '),
				 $.button('jump', function () {
					 controls.jump()
				 }), $.span(' '),
				 $.button('explode', function () {
					 controls.explode()
				 }), $.span(' '),
				 $.button('play', function () {
					 controls.play()
				 }), $.span(' '),
				 $.button('stop', function () {
					 controls.stop()
				 }), $.span(' '),
				 $.button('meta', function () {
					 SPRITE()
				 })
		 )
		 s = sprite
		 return controls
	 }
	 SPRITE2 = function () {
		 stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
		 stage.A(sprite = $sprite(SS).XY(10).drag())
	 }
	 PACK = function () {
		 stage = cjs.stage(800).A()
		 //stage.op(.7)
		 sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
		 stage.A(sprite)
		 //.rgc()
		 sprite.framerate = 6
		 sprite.play()
	 }
//make movie
	 MOVIE = function () {//wap()
		 z()
		 var s = $.canvas('blue', 800, 800).A().stage.tick(),
				 div = $.div().A(),
				 fn = function () {
				 }
		 $.getJSON('/img', function (imgs) {
			 _.each(imgs, function (v) {
				 v = v.d
				 var canvas = $.canvas(100, 100).A().fit(v)
				 canvas.click(function () {
					 s.bm(v, function (b) {
								 bb = b
								 createjs.bindTransform(b);
								 //fn(b)
								 b.click(function (q) {
									 fn(q)
								 })
							 },
							 '+')
				 })
				 div.A(canvas)
			 })
			 part2 = function () {
				 c = cnt(
						 $.row.A(
								 $.div()(div, s),
								 $.div().A(
										 $.button('shake', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({x: b.x()}, 500))
														 .to(ww({x: b.x() + 100}), 500)
														 .to(ww({x: b.x()}), 500)
											 }
										 }),
										 $button('rotate', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
											 }
										 }),
										 $button('size', function () {
											 fn = function (b) {
												 W$.get(b.obj(), {loop: true})
														 .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
											 }
										 })
								 )))
			 }
			 //c.o('$$',function(){  s.sv(ART)})
		 })
		 return s
	 }
	 STAGE = function () {
		 z()
		 m$$("location=location")
		 s = St(600).a().rgc().drg().xy(300)
		 s.bm('chicks')
		 s.bm('me', function (mm) {
			 m = mm
			 m.rgc()
			 m.xy(300)
			 cjs.tween(s, [{r: -10000}, 300000])
			 cjs.tween(m, [{r: 100000}, 300000])
		 })
		 s.bm('guy', function () {
		 })
	 }
	 CJSSPINNER = function () {
		 z()
		 s = cjs.stage('purple', 1000).A().rCenter()
		 cjs.tween(s, [{r: -10000}, 300000])
		 s.bm('me', function (bm) {
			 m = bm.XY(500)
			 SL(bm)
		 })
		 s.A(r = cjs.rectangle(400, 400, 'orange', 'red').XY(1200))
		 s.A(r2 = cjs.rectangle(300, 300, 'pink', 'red').XY(800))
		 s.A(r3 = cjs.rectangle(300, 300, 'green', 'green').XY(0))
	 }
	 RECTS = function () {
		 z()
		 x = 20
		 y = 20
		 s = cjs.stage(500).A()//.drag()
		 h0 = cjs.shape().rect(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
		 h1 = cjs.shape().rect(-10, -10, x + 20, y + 20, 'red', 'pink')
		 h2 = cjs.shape().rect(0, 0, x, y, 'orange', 'black')
		 s.A(h0, h1, h2)
		 SL(h2)
		 SL(h2, h1)
		 SL(h2, h0)
		 RT(h1)
		 RT(h1, h2)
		 RT(h1, h0)
		 SC(h0)
		 SC(h0, h2)
		 SC(h0, h1)
		 a = function () {
			 x += 20;
			 y += 20
			 h1.clear()
			 h2.clear()
			 h1.rect(-10, -10, x + 20, y + 20, 'black', 'pink')
			 h2.rect(0, 0, x, y, 'orange', 'transparent')
		 }
		 // h0.rect(50,50,30,30,'black','orange')
	 }
	 TWEEN = function (a) {//combo/complex/anim/tween
		 //wMs looks like it makes/appends a stage, gives it a bitmap
		 //based on your mug, and pass it to a callback
		 s = createjs.stage('y', 500, 500).tick().A()
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
					 [{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			 )
		 })
		 s.mug(function (bm) {
			 b = bm
			 TR(bm)
			 cjs.tween([bm, 'l'],
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
	 }
	 TWEENART = function (a) {
		
		
		 //wMb makes bitmap mug and passes it to a callback
		 //optionally? can pass a stage to append it to before the callback runs
		 wMb(function (b, s) {
					 b.xy(300);
					 b.rgc(); //centers it's reg point?
					 SK(b)
					 cjs.tween(
							 [b, 'l'],
							 {sxy: .5},
							 [{sxy: .7}, 500],
							 [{sxy: .5}, 500])
					 wMb(function (b) {
						 s.a(b)//manual add necessary?
						 b.xy(200);
						 b.rgc();
						 b.wh(200);
						 SL(b);
						 cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
						 wMb(function (b) {
							 s.a(b);
							 b.rgc();
							 b.xy(600);
							 SC(b)
							 cjs.tween([b, 'l'], {kxy: 0},
									 [{kxy: 20}, 500],
									 [{kxy: 0}, 500])
						 })
					 })
				 }, EDIT()
		 )
	 }
	 EASING = function () {
		 stage = createjs.stage(1000, 10000).tick().A()
		 stage.mug(
				 function (b) {
					 bb = b
					 b.sXY(.2).XY(50, 100)
					 cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
					 )
				 })
		 eas = function (y, e) {
			 stage.mug(
					 function (b) {
						 b.sXY(.2).XY(50, y)
						 cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
						 b.$(function () {
							 pop(e + ' : ' + oO('E', e))
						 })
					 })
		 }
		 eas(300, 'bO');
		 eas(500, 'bI');
		 eas(700, 'bIO')
		 eas(900, 'bnO');
		 eas(1100, 'bnI');
		 eas(1300, 'bnIO')
		 eas(1500, 'cO');
		 eas(1700, 'cI');
		 eas(1900, 'cIO')
		 eas(2100, 'eO');
		 eas(2300, 'eI');
		 eas(2500, 'eIO')
		 eas(2700, 'qO');
		 eas(2900, 'qI');
		 eas(3100, 'qIO')
		 eas(3900, 'qnO');
		 eas(4100, 'qnI');
		 eas(4300, 'qnIO')
		 eas(4500, 'sO');
		 eas(4700, 'sI');
		 eas(4900, 'sIO')
		 eas(5100, 'qdO');
		 eas(5300, 'qdI');
		 eas(5500, 'qdIO')
	 }
 }
 function demos(){
	 function transform() {
		 TRANSFORM = function () {
			 format()
			 wMs(function (b, s) {
				 b.xy(0, 0)
				 b.rgc('+')
				 TR(b)
				 wMb(function (b) {
					 b.xy(50, 50).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(100, 100).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(200, 200).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(300, 300).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(400, 400).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(150, 150).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(250, 250).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(350, 350).rgc('+');
					 TR(b)
				 }, s)
			 }, '-')
			 s1(bt('rotate', function () {
						 s.ch('-')
						 wMb(
								 function (b, s) {
									 s.M(50); //b=Do(bj(b))
									 RT(b.xy(400))
									 wMb(function (b) {
												 b.xy(300).al(.5)
												 RT(b, '-')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(200).sxy(1.4), '+')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(100).sxy(.6))
											 }
											 , s)
								 }, s)
					 }), $.br(2),
					 $button('skew', function () {
						 s.ch('-')
						 wMb(function (b, s) {
									 s.mg(function (b, s) {
										 SK(b.xy(300).rgc('+').sxy(1.5))
										 s.w(2000).h(2000)
									 })
									 //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
								 }
								 , s)
					 }), $.br(2),
					 $button('register', function () {
						 s.remove()
						 wMb(function (b, s) {
							 TR(b);
							 rg1(b);
							 reggy(b)
						 }, s)
						 wMb(function (b, s) {
							 TR(b);
							 b.rgc();
							 rg1(b);
							 reggy(b)
						 }, s)
					 }),
					 $.br(2))
		 }
		 TRANSFORM = function () {
			 format()
			 wMs(function (b, s) {
				 b.xy(0, 0)
				 b.rgc('+')
				 TR(b)
				 wMb(function (b) {
					 b.xy(50, 50).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(100, 100).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(200, 200).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(300, 300).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(400, 400).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(150, 150).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(250, 250).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(350, 350).rgc('+');
					 TR(b)
				 }, s)
			 }, '-')
			 s1(bt('rotate', function () {
						 s.ch('-')
						 wMb(
								 function (b, s) {
									 s.M(50); //b=Do(bj(b))
									 RT(b.xy(400))
									 wMb(function (b) {
												 b.xy(300).al(.5)
												 RT(b, '-')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(200).sxy(1.4), '+')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(100).sxy(.6))
											 }
											 , s)
								 }, s)
					 }), $.br(2),
					 $button('skew', function () {
						 s.ch('-')
						 wMb(function (b, s) {
									 s.mg(function (b, s) {
										 SK(b.xy(300).rgc('+').sxy(1.5))
										 s.w(2000).h(2000)
									 })
									 //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
								 }
								 , s)
					 }), $.br(2),
					 $button('register', function () {
						 s.remove()
						 wMb(function (b, s) {
							 TR(b);
							 rg1(b);
							 reggy(b)
						 }, s)
						 wMb(function (b, s) {
							 TR(b);
							 b.rgc();
							 rg1(b);
							 reggy(b)
						 }, s)
					 }),
					 $.br(2))
		 }
		 TRANSFORM = function () {
			 format()
			 wMs(function (b, s) {
				 b.xy(0, 0)
				 b.rgc('+')
				 TR(b)
				 wMb(function (b) {
					 b.xy(50, 50).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(100, 100).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(200, 200).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(300, 300).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(400, 400).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(150, 150).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(250, 250).rgc('+');
					 TR(b)
				 }, s)
				 wMb(function (b) {
					 b.xy(350, 350).rgc('+');
					 TR(b)
				 }, s)
			 }, '-')
			 s1(bt('rotate', function () {
						 s.ch('-')
						 wMb(
								 function (b, s) {
									 s.M(50); //b=Do(bj(b))
									 RT(b.xy(400))
									 wMb(function (b) {
												 b.xy(300).al(.5)
												 RT(b, '-')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(200).sxy(1.4), '+')
											 }
											 , s)
									 wMb(function (b) {
												 KK(b.xy(100).sxy(.6))
											 }
											 , s)
								 }, s)
					 }), $.br(2),
					 $button('skew', function () {
						 s.ch('-')
						 wMb(function (b, s) {
									 s.mg(function (b, s) {
										 SK(b.xy(300).rgc('+').sxy(1.5))
										 s.w(2000).h(2000)
									 })
									 //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
								 }
								 , s)
					 }), $.br(2),
					 $button('register', function () {
						 s.remove()
						 wMb(function (b, s) {
							 TR(b);
							 rg1(b);
							 reggy(b)
						 }, s)
						 wMb(function (b, s) {
							 TR(b);
							 b.rgc();
							 rg1(b);
							 reggy(b)
						 }, s)
					 }),
					 $.br(2))
		 }
		 TRANSFORM = function () {
			 $.fm()
			 s = $St()
			 s.mug(function (b) {
				 st = s
				 b.XY(0, 0)
				 b.rgc('+')
				 TR(b)
				 s.mug(function (b) {
					 b.XY(50, 50).rgc('+');
					 TR(b)
				 })
				 /*
				  wMb(function (b) {
				  b.XY(100, 100).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(200, 200).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(300, 300).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(400, 400).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(150, 150).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(250, 250).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(350, 350).rgc('+');
				  TR(b)
				  }, s)
				  */
			 }, '-')
			 s1.A($.bt('rotate', function () {
						 s.ch('-')
						 s.mug(function (b) {
							 s.M(50); //b=Do(bj(b))
							 RT(b.XY(400))
							 s.mug(function (b) {
										 b.XY(300).al(.5)
										 RT(b, '-')
									 }
							 )
							 s.mug(function (b) {
								 KK(b.XY(200).sXY(1.4), '+')
							 })
							 s.mug(function (b) {
										 KK(b.XY(100).sXY(.6))
									 }
							 )
						 })
					 }), $.br(2),
					 $.bt('skew', function () {
						 s.ch('-')
						 s.mug(function (b) {
							 s.mug(function (b) {
								 SK(b.XY(300).rgc('+').sXY(1.5))
								 s.W(2000).H(2000)
							 })
							 //b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
						 })
					 }), $.br(2),
					 $.bt('register', function () {
						 s.rm()
						 s.mug(function (b) {
							 TR(b);
							 rg1(b);
							 reggy(b)
						 })
						 s.mug(function (b) {
							 TR(b);
							 b.rgc();
							 rg1(b);
							 reggy(b)
						 })
					 }),
					 $.br(2))
		 }
		 TRANSF = function () {
			 stage = St()
			 degToRad = Math.PI / 180;
			 //cjs.sharedCode()
			 // cjs.utils()
			 cjs.slider()
			 stage.enableMouseOver();
			 //cjs.Touch.enable(stage);
			 stage.mouseMoveOutside = true;
			 var img = new Image()
			 img.onload = handleImageLoad;
			 img.src = "/chicks.png";
			 function handleImageLoad(evt) {
				 var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
				 sliceWidth = imgWidth / sliceCount;
				 sliceContainer = $Ct()
				 sliceContainer.x = st.canvas.width / 2;
				 for (var i = 0; i < sliceCount; i++) {
					 var slice = $Bm(img)
					 slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
					 slice.cache(0, 0, sliceWidth, imgHeight);
					 slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
					 sliceContainer.A(slice);
				 }
				 slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
				 slider.on("change", handleSliderChange, this);
				 st.A(sliceContainer, slider);
				 updateEffect(slider.value);
			 }
			
			 function handleSliderChange(evt) {
				 updateEffect(evt.target.value);
			 }
			
			 function updateEffect(value) {
				 var l = sliceContainer.getNumChildren();
				 for (var i = 0; i < l; i++) {
					 var slice = sliceContainer.getChildAt(i);
					 slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
					 if (i % 2) {
						 slice.skewY = value
					 }
					 else {
						 slice.skewY = -value;
						 slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
					 }
					 slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
					 slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
					 slice.ca()
				 }
				 st.u();
			 }
		 }
		 TRANSFORM = function () {
			 $.fm()
			 s = $St()
			 s.mug(function (b) {
				 st = s
				 b.XY(0, 0)
				 b.rgc('+')
				 TR(b)
				 s.mug(function (b) {
					 b.XY(50, 50).rgc('+');
					 TR(b)
				 })
				 /*
				  wMb(function (b) {
				  b.XY(100, 100).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(200, 200).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(300, 300).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(400, 400).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(150, 150).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(250, 250).rgc('+');
				  TR(b)
				  }, s)
				  wMb(function (b) {
				  b.XY(350, 350).rgc('+');
				  TR(b)
				  }, s)
				  */
			 }, '-')
			 s1.A($.bt('rotate', function () {
						 s.ch('-')
						 s.mug(function (b) {
							 s.M(50); //b=Do(bj(b))
							 RT(b.XY(400))
							 s.mug(function (b) {
										 b.XY(300).al(.5)
										 RT(b, '-')
									 }
							 )
							 s.mug(function (b) {
								 KK(b.XY(200).sXY(1.4), '+')
							 })
							 s.mug(function (b) {
										 KK(b.XY(100).sXY(.6))
									 }
							 )
						 })
					 }), $.br(2),
					 $.bt('skew', function () {
						 s.ch('-')
						 s.mug(function (b) {
							 s.mug(function (b) {
								 SK(b.XY(300).rgc('+').sXY(1.5))
								 s.W(2000).H(2000)
							 })
							 //b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
						 })
					 }), $.br(2),
					 $.bt('register', function () {
						 s.rm()
						 s.mug(function (b) {
							 TR(b);
							 rg1(b);
							 reggy(b)
						 })
						 s.mug(function (b) {
							 TR(b);
							 b.rgc();
							 rg1(b);
							 reggy(b)
						 })
					 }),
					 $.br(2))
		 }
		 TRANSF = function () {
			 stage = St()
			 degToRad = Math.PI / 180;
			 //cjs.sharedCode()
			 // cjs.utils()
			 cjs.slider()
			 stage.enableMouseOver();
			 //cjs.Touch.enable(stage);
			 stage.mouseMoveOutside = true;
			 var img = new Image()
			 img.onload = handleImageLoad;
			 img.src = "/chicks.png";
			 function handleImageLoad(evt) {
				 var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
				 sliceWidth = imgWidth / sliceCount;
				 sliceContainer = $Ct()
				 sliceContainer.x = st.canvas.width / 2;
				 for (var i = 0; i < sliceCount; i++) {
					 var slice = $Bm(img)
					 slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
					 slice.cache(0, 0, sliceWidth, imgHeight);
					 slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
					 sliceContainer.A(slice);
				 }
				 slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
				 slider.on("change", handleSliderChange, this);
				 st.A(sliceContainer, slider);
				 updateEffect(slider.value);
			 }
			
			 function handleSliderChange(evt) {
				 updateEffect(evt.target.value);
			 }
			
			 function updateEffect(value) {
				 var l = sliceContainer.getNumChildren();
				 for (var i = 0; i < l; i++) {
					 var slice = sliceContainer.getChildAt(i);
					 slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
					 if (i % 2) {
						 slice.skewY = value
					 }
					 else {
						 slice.skewY = -value;
						 slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
					 }
					 slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
					 slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
					 slice.ca()
				 }
				 st.u();
			 }
		 }
	 }
	
	 function shootyInvaders() {
		 SHOOTY = function () {
			 St().dg()
			 stage.mug(function (mug) {
				 key(mug.XY(100, 100).WH(150).SL(), '-')
				 // ugun(mug)
			 })
			 cv = ghostMe().A().dg().XY(10)
		 }
		 function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
			 return $.c('X', 500, 500).fit('me').al(.1)
		 }
	 }
	
	 function space() {
		 SPACE = function () {
			 St().bgI('/space.jpg').mug(function (m) {
				 m.sXY(.2).dg().RT().SL()
			 })
		 }
		 SPACE = function () {
			 St().bgI('/space.jpg').mug(function (m) {
				 m.sXY(.2).dg().RT().SL()
			 })
		 }
		 SPACEOLD = function () {
			 wMs(function (b, st) {
				 st.wh(2000)
				 st.bgi('/space.jpg')
				 b.sxy(.2)
				 b.fn(RT, SL)
			 })
		 }
		 SPACE = function () {
			 St(2000, 2000).bgImg('/space.jpg').mug(
					 function (mug) {
						 mug.sXY(.2).dg().rt()
					 }
			 )
		 }
		 SPACEOLD = function () {
			 wMs(function (b, st) {
				 st.wh(2000)
				 st.bgi('/space.jpg')
				 b.sxy(.2)
				 b.fn(RT, SL)
			 })
		 }
		 SPACE = function () {
			 $St().backgroundImage('/space.jpg').mug(
					 function (mug) {
						 mug.scXY(.2).dg().rt()
					 }
			 )
		 }
	 }
	
	 function solar() {
		 SOLAR = function () {
			 i = cjs.DisplayObject.prototype
			 i.warpX = function (low, high, cush) {
				 var ob = this,
						 warp = M.warp(low, high, cush)
				 cjs.t(function () {
					 ob.x = warp(ob.x)
				 })
				 return ob
			 }//wrx
			 i.warpY = function (low, high, cush) {
				 var ob = this,
						 warp = Math.warp(low, high, cush)
				 cjs.t(function () {
					 ob.y = warp(ob.y)
				 })
				 return this
			 }//wry
			 i.warp = function (n) {
				 n = n || 0
				 var stage = this.getStage()
				 this.warpX(0, stage.W(), n)
				 this.warpY(0, stage.H(), n)
				 return this
			 }//wr
			 i.go = i.startMoving = function (x, y) {
				 if (x) {
					 this.vX(x)
				 }
				 if (y) {
					 this.vY(y)
				 }
				 var ob = this
				 T.on('tick', function () {
					 ob.X(ob.X() + (ob.vx || 0))
					 ob.Y(ob.Y() + (ob.vy || 0))
				 })
				 return this
			 }
			 cjs.bulletHit = function (bu, inWhat) { //used in solar
				 var res
				 res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
				 if (res == true) {
					 $l('hit!')
				 }
				 return res
			 }
			 i.bounce = function (n) {
				 n = N(n) ? n : 0
				 var ob = this, st = this.st(), h = st.H(), w = st.W()
				 cjs.t(
						 function () {
							 var x = ob.x, y = ob.y
							 if (x > w - ob.W() - n || x < (n )) {
								 ob.vX('-')
							 }
							 if (y > h - ob.H() - n || y < (n )) {
								 ob.vY('-')
							 }
						 })
				 return st
			 }
			 i.vX = function (a) {
				 var g = G(arguments);
				 a = g[0]
				 if (g.p) {
					 this.vx = this.vx + a;
					 return this
				 }
				 else if (g.n) {
					 if (N(a)) {
						 this.vx = this.vx - a
					 }
					 else {
						 this.vx = this.vx * -1
					 }
					 return this
				 }
				 else if (U(g[0])) {
					 return this.vx
				 }
				 this.vx = a;
				 return this
			 }
			 i.vY = function (a) {
				 var g = G(arguments);
				 a = g[0]
				 if (g.p) {
					 this.vy = this.vy + a;
					 return this
				 }
				 else if (g.n) {
					 if (N(a)) {
						 this.vy = this.vy - a
					 }
					 else {
						 this.vy = this.vy * -1
					 }
					 return this
				 }
				 else if (U(g[0])) {
					 return this.vy
				 }
				 this.vy = a
				 return this
			 }
			 i.vXY = function (x, y) {
				 return this.vX(x).vY(y)
			 }
			 z();
			 st = $St(1000, 500).bgI('/space.jpg')
			 st.bm('guy', function (bm) {
				 guy = bm
				 bm.dg()
				 bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
				 bm.startMoving()
				 bm.warp()
				 st.bm('sun', 0.2, function (bm) {
					 sun = bm
					 bm.dg()
					 bm.startMoving(4, 10)
					 bm.warp()
					 _.ev(.1, function () {
						 if (cjs.bulletHit(sun, guy)) {
							 sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
							 sun.vx += .2;
							 sun.vy += .2
						 }
					 })
				 })
			 })
			 st.mug(0.4, function (bm) {
				 bm.X(400).dg().bounce(0)
				 bm.startMoving(10, 10)
			 })
		 }
		 SOLAR = function () {
			 i = cjs.DisplayObject.prototype
			 i.warpX = function (low, high, cush) {
				 var ob = this,
						 warp = M.warp(low, high, cush)
				 cjs.t(function () {
					 ob.x = warp(ob.x)
				 })
				 return ob
			 }//wrx
			 i.warpY = function (low, high, cush) {
				 var ob = this,
						 warp = Math.warp(low, high, cush)
				 cjs.t(function () {
					 ob.y = warp(ob.y)
				 })
				 return this
			 }//wry
			 i.warp = function (n) {
				 n = n || 0
				 var stage = this.getStage()
				 this.warpX(0, stage.W(), n)
				 this.warpY(0, stage.H(), n)
				 return this
			 }//wr
			 i.go = i.startMoving = function (x, y) {
				 if (x) {
					 this.vX(x)
				 }
				 if (y) {
					 this.vY(y)
				 }
				 var ob = this
				 T.on('tick', function () {
					 ob.X(ob.X() + (ob.vx || 0))
					 ob.Y(ob.Y() + (ob.vy || 0))
				 })
				 return this
			 }
			 cjs.bulletHit = function (bu, inWhat) { //used in solar
				 var res
				 res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
				 if (res == true) {
					 $l('hit!')
				 }
				 return res
			 }
			 i.bounce = function (n) {
				 n = N(n) ? n : 0
				 var ob = this, st = this.st(), h = st.H(), w = st.W()
				 cjs.t(
						 function () {
							 var x = ob.x, y = ob.y
							 if (x > w - ob.W() - n || x < (n )) {
								 ob.vX('-')
							 }
							 if (y > h - ob.H() - n || y < (n )) {
								 ob.vY('-')
							 }
						 })
				 return st
			 }
			 i.vX = function (a) {
				 var g = G(arguments);
				 a = g[0]
				 if (g.p) {
					 this.vx = this.vx + a;
					 return this
				 }
				 else if (g.n) {
					 if (N(a)) {
						 this.vx = this.vx - a
					 }
					 else {
						 this.vx = this.vx * -1
					 }
					 return this
				 }
				 else if (U(g[0])) {
					 return this.vx
				 }
				 this.vx = a;
				 return this
			 }
			 i.vY = function (a) {
				 var g = G(arguments);
				 a = g[0]
				 if (g.p) {
					 this.vy = this.vy + a;
					 return this
				 }
				 else if (g.n) {
					 if (N(a)) {
						 this.vy = this.vy - a
					 }
					 else {
						 this.vy = this.vy * -1
					 }
					 return this
				 }
				 else if (U(g[0])) {
					 return this.vy
				 }
				 this.vy = a
				 return this
			 }
			 i.vXY = function (x, y) {
				 return this.vX(x).vY(y)
			 }
			 z();
			 st = $St(1000, 500).bgI('/space.jpg')
			 st.bm('guy', function (bm) {
				 guy = bm
				 bm.dg()
				 bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
				 bm.startMoving()
				 bm.warp()
				 st.bm('sun', 0.2, function (bm) {
					 sun = bm
					 bm.dg()
					 bm.startMoving(4, 10)
					 bm.warp()
					 _.ev(.1, function () {
						 if (cjs.bulletHit(sun, guy)) {
							 sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
							 sun.vx += .2;
							 sun.vy += .2
						 }
					 })
				 })
			 })
			 st.mug(0.4, function (bm) {
				 bm.X(400).dg().bounce(0)
				 bm.startMoving(10, 10)
			 })
		 }
		 SOLAR = function () {
			 $St().bm('guy', function (bm) {
				 guy = bm
				 bm.dg()
				 bm.vXY(_.random(10) + 1, _.random(10) + 1)
						 .XY(_.random(800), _.random(600))
				 bm.startMoving()
				 bm.warp()
				 st.bm('sun', 0.2, function (bm) {
					 sun = bm
					 bm.drag().startMoving(4, 10)
					 bm.warp()
					 setInterval(
							 function () {
								 if (
										 cjs.bulletHit(sun, guy)) {
									 sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
									 sun.vx += .2
									 sun.vy += .2
								 }
							 }, 100)
				 })
			 })
			 st.mug(0.4, function (bm) {
				 mug = bm
				 bm.X(400).drag().startMoving(10, 10)
				 bm.bounce(0)
			 })
			 st.bgImg('/space.jpg')
		 }
	 }
	
	 function hit() {
		 HIT = function () {
			 z()
			 s = stage = createjs.stage(900, 600).A().tick().mug(function (mug) {
				 mug.drag()
				 stage.bm('flame', function (flame) {
					 flame.drag()
					 flame.scaleX = .1
					 flame.scaleY = .1
					 flame.regX = flame.getBounds().width / 2
					 flame.regY = 500
					 flame.x = 400
					 flame.y = 400
					 stage.on('dblclick', function (e) {
						 flame.x = e.rawX;
						 flame.y = e.rawY
					 })
					 stage.on('stagemousedown', function (e) {
						 localCoords = mug.globalToLocal(e.rawX, e.rawY)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if ($l(hit)) { //$l('hit')
							 stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
						 }
						 else {
							 $l('no hit')
							 stage.backgroundColor('yellow')
						 }
					 })
					 stage.on('stagemousemove', function (e) {
						 localCoords = mug.globalToLocal(flame.x, flame.y)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if ($l(hit)) {
							 $l('HIT')
							 stage.backgroundColor('red')
							 $l(e.rawX + ' ' + e.rawY)
						 }
						 else {
							 $l('NO HIT')
							 stage.backgroundColor('yellow')
						 }
					 })
				 })
			 })
		 }
		 randomHSL = function () {
			 return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
		 }
		 HITCIRCLES = function () {
			 //beautiful demo i stole! :)
			 $St().drag() // look no .tick() necesary!! look below :)
			 ct = $Ct().a2(st).XY(150)
			 _.t(25, function () {
				 var sh = $Sh(), gx = sh.graphics
				 gx.f(randomHSL()).dc(0, 0, 30)
				 holder.A(sh.XY(randomLocation(), randomLocation()))
			 })
			 $t(tick)
			 function randomLocation() {
				 return M.r() * 300 - 150
			 }
			
			 function tick(event) {
				 holder.rt(3, '+')
				 var numChildren = holder.getNumChildren()
				 _.e(holder.children, function (ch) {
					 ch.al(child.underMouse() ? 1 : 0.1)
				 })
				 /*
				  for(var i = 0; i < numChildren; i++){  //for each child
				
				  var child = holder.getChildAt(i)
				  child.alpha = 0.1
				  var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
				  if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
				  child.alpha = 1}
				  }
				  */
				 st.u(event)
			 }
		 }
		 HIT = function () {
			 St()
			 st.mug(function (mug) {
				 mug.dg()
				 st.bm('flame', function (flame) {
					 b = flame
					 b.dg()
					 b.sXY(.1)
							 .rXY(flame.getBounds().width / 2, 500).XY(400, 400)
					 //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
					 st.MD(function (e) {
						 localCoords = mug.globalToLocal(e.rawX, e.rawY)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if ($l(hit)) {
							 $l('hit');
							 st.bgC('red')
						 } //;$l( e.X+ ' '+ e.Y )
						 else {
							 $l('no hit');
							 st.bgC('yellow')
						 }
					 })
					 st.MM(function (e) {
						 localCoords = mug.globalToLocal(b.x, b.y)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if (hit) {  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
							 st.bgC('red')
						 }
						 else {
							 $l('NO HIT');
							 st.bgC('yellow')
						 }
					 })
				 })
			 })
		 }
		 HIT = function () {
			 St()
			 st.mug(function (mug) {
				 mug.dg()
				 st.bm('flame', function (flame) {
					 b = flame
					 b.dg()
					 b.sXY(.1)
							 .rXY(flame.getBounds().width / 2, 500).XY(400, 400)
					 //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
					 st.MD(function (e) {
						 localCoords = mug.globalToLocal(e.rawX, e.rawY)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if ($l(hit)) {
							 $l('hit');
							 st.bgC('red')
						 } //;$l( e.X+ ' '+ e.Y )
						 else {
							 $l('no hit');
							 st.bgC('yellow')
						 }
					 })
					 st.MM(function (e) {
						 localCoords = mug.globalToLocal(b.x, b.y)
						 hit = mug.hitTest(localCoords.x, localCoords.y)
						 if (hit) {  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
							 st.bgC('red')
						 }
						 else {
							 $l('NO HIT');
							 st.bgC('yellow')
						 }
					 })
				 })
			 })
		 }
	 }
	
	 function filters() {
		 FILTERS1 = function () {
			 s = $.canvas(1000).A().stage.tick()
			 s.mug(
					 function (b) {
						 b.XY(-100, -50)
						 b.cc()
						 b.clMF('a', '+')
						 b.clMF('w', '+')
						 createjs.bindSlide(b)
					 })
			 wMb(function (b) {
				 b.xy(400, 0).cc()
				 SL(b)
				 b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
						 .dr0(400).H().cc(400).cc('*'))
				 ]).cc(400)
			 }, s)
			 wMb(function (b) {
				 b.xy(100, 300).cc();
				 SL(b)
				 b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
			 }, s)
			 wMb(function (b) {
				 var ag = 0, rg = 20, sp = 0.04;
				 b.xy(500, 300).cc();
				 SL(b)
				 //this has gotta just mean 'on tick'
				 tt(function (e) {
					 v = sin(ag += sp) * rg;
					 b.cc('+').fl([blF(v, v, 2)])
				 })
			 }, s)
		 }
		 FILTERS = function () {
			 s = $.canvas(1000).A().stage.tick()
			 s.mug(function (b) {
				 bb = b
				 b.XY(-100, -50)
				 b.cache(0, 0, b.W(), b.H())
				 cM = new createjs.ColorMatrix()
				 cM.adjustHue(-180)
				 cM.adjustSaturation(100)
				 cM.adjustBrightness(300)
				 cM.adjustContrast(-600)
				 b.filters = cM
				 b.updateCache()
				 createjs.bindSlide(b)
			 })
		 }
	 }
 }