
//End Contact Event: called when two fixtures cease to overlap.

// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)

//Begin Contact Event : called when two fixtures begin to overlap.

//  - called for sensors and non-sensors. - can only occur inside the time step.

// = w.startListening


//Do not keep a reference to the pointers sent to b2ContactListener. 

//  (make  deep copy of cx point data into your own buffer. 

// The example below shows one way of doing this.

//At run-time you can create an instance of the listener and register it 

// with w.SetContactListener. // Be sure your listener remains in scope while the world object exists.

//You can receive contact data by implementing b2ContactListener. // supports  events: begin, end, pre-solve, post-solve.






b2d.CL = b2d.D.b2ContactListener
$pt.cL = b2d.CL.prototype
cL = $pt.cL
cL.b = cL.bg = function (fn) {this.BeginContact = fn;
	return this}
cL.end = cL.e = function (fn) {this.EndContact = fn
	return this}
cL.pre = cL.p = function (fn) {this.PreSolve = fn
	return this}
cL.po = cL.P = function (fn) {this.PostSolve = fn
	return this}
w.SCL  = function (cL) {this.SetContactListener(cL || $cL())
	return this}
$CL  = function () {return new b2d.CL}
alpha = w.cL = function(){var cL = $CL()}
$CL.handle = function (arr) {return function (cx, d) {_.e(arr, function (fn) {fn(cx, d)})}}
w.startListening = w.handle = function () {var w = this, w = this; w._l = w._l || $cL()
	w.beginHandlers =w.BG = w.BG || [] //bH
	w.preHandlers = w.PRE = w.PRE || [] //pH
	w.postHandlers = w.PO = w.PO || [] // PH
	w.endHandlers = w.END = w.END || [] // eH
	w.listener = w.listener || b2d.listener()
	w._l.BeginContact = function (cx) {_.e(w.BG, function (fn) {_.in(0,function () {fn(cx)})})}  //w._l.BeginContact = $CL.handle(w.BG)  //function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
	w._l.PreSolve = function (cx, d) {_.e(w.PRE, function (fn) {fn(cx, d)})}
	w._l.PostSolve = function (cx, d) {_.e(w.PO, function (fn) {fn(cx, d)})}
	w._l.EndContact = function (cx, d) {_.e(w.END, function (fn) {fn(cx, d)})}
	W._l = w._l || $CL()
	_.x(w._l, {BeginContact: function (cx) {_.e(w.BG, function (fn) {_.in(0, function () {fn(cx)})})},
		EndContact: function (cx) {_.e(w.END, function (fn) {_.in(0, function () {fn(cx)})})},
		PreSolve: function (cx, i) {_.e(w.PRE, function (fn) {fn(cx, i)})},
		PostSolve: function (cx, pam2) {_.e(w.PO, function (fn) {_.in(0, function () {fn(cx, pam2)})})}})
	w.SCL(w._l)
	return w}
b2d.listener = function () {return new bx.D.b2ContactListener}
w.startListening = function () { var w = this
	w.listen = w.sCL = w.SetContactListener
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.endHandlers = w.endHandlers || []
	w.listener.BeginContact = function (cx) {_.e(w.beginHandlers, function (fn) {fn(cx)})}
	w.listener.EndContact = function (cx) {_.e(w.endHandlers, function (fn) {fn(cx)})}
	w.listen(w.listener)}
b2d.either = function (ob1, ob2, is1, is2) {return (ob1.is(is1) && ob2.is(is2)) || (ob1.is(is2) && ob2.is(is1))
	return {is: function (data) {return body1.is(data) || body2.is(data)}}}
b2d.neither = function (body1, body2) {return {is: function (data) {return !body1.is(data) && !body2.is(data)	}	}}
w.b = w.bg = w.beg = function () {//ADDS one or more handlers to beginHandlers array
	var w = this; G(arguments).e(function (fn) {w.BG.push(fn)}); return w}
BEGIN = BEG = function () {
	W().ba()
	w.ship()
	w.roof.kill()
	w.on('new', function () {
		w.ba(300, 100, 2)
	})
	w.b(function () {
		w.flag('new')
	})
}
FLAGTHROTTLE = THO = function () {
	W().ball(300, 300, 100)
	brick = w.brick(300, 500)
	w.st.squareDot(400, 100)
	$t(function () {
		if (w.flagged('moveBrick')) {
			brick.X(brick.X() + 20)
		}
	})
	time = 0
	lastTime = 0
	_.ev(1, function () {
		time++
	})
	w.b(function (cx) {
		if (cx.w('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
	W()
	p = w.p('hoppy')
	$flag({
		warp: function (p) {
			p.XY(200, 100)
		},
		log: function () {
			$l('haha')
		}
	})
}
VORTEX = VOX = function () {
	$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
	b2d.levelJet()
	w.rectStat(200, 250, 200, 20)
	floor.kill()
	_.t(20, function () {
		w.ba(100, 100, 10).K('ball')
	})
	vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
	w.while('vortex', 'player', function () {
		w.eB('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VORTEXOK = VOK = function () {
	W({W: 600, H: 300, g: 10})
	p = w.p(2.5).con('thrust')
	moveB = function () {
		b.lV(0, -5)
	}
	moveX = function () {
		bx.lV(0, -5)
	}
	b = w.ball(100, 100, 10).K('ball')
	bx = w.box(50, 100, 14)
	w.stat(600, 200, $cF(200).mS()).K('vortex')
	//this happens every RE-ENTRY into sensor (when)
	w.when('vortex', 'player', moveX)
	//this happens repeadly until sensor exited
	w.while('vortex', moveB)
	$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
			'something with trig?', 'fixed.. (see code)')
}
KINGOFMES = MES = function () {
	
	//all jumping together???!
	//w= b2d.mW()
	$levelWalls()
	_.t(5, function () {
		w.me(2.5).X(400)
				.trig('foot', function () {
					this.I(20, -40)
				}).re(1)
		w.me(2.5).X(100)
				.trig('foot', function () {
					this.I(-20, -40)
				})
	})
}
HAT = function () {
	// could i automatically have body listen to their sensors?
	$levelWalls()
	w.ball().re(.3)
	p.XY(400, 150).trig('right').trig('left')
			.trig('head', function () {
				this.bS('guy')
			})
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W(30)
	_.t(3, function () {
		w.me(900, 100, 5).fR()
				.my('feet', function () {
					//if(K.u){
					this.lV(-2, -10)
					//}
				})
		w.me(700, 100, 5).fR().my('feet', function () {
			if (K.u) {
				this.lV(2, -10)
			}
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
WLMY = function () {
	W(20)//.roof.kill()
	_.t(10, function () {
		var p = w.p(R(500, 50), R(300, 100))//.re(1)
		p.fK('hat')//.C($r())
		p.clMy('hat', function (f) {
			
			
			//this.C($r());
			//f.B().C('w');f.C('z')
			var b0 = this.B()
			b0.rt(-180);
			_.in(1, function () {
				b0.stat()//kill()
			})
			var b = f.B()
			if (b.of('player')) {
				b.I(R() ? -200 : 200, -200)
				ff = b.fK('hat')
				ff.C($r())
				//b.rt(10, '+')
			}
			//this.B().kill()
		})
		//p.wlMy('foot', function(f){p.X(10, '+');_f = f;f.C('w')})
	})
	b = w.D(300, 400)
	b.cir('r', 40)
	f = b.cir('b', 20, 80, 0).K('hand')
	b.aV(20).lV(20, 20)
	//f = b.rec( 'w', 300, 20, 150,0,22).K('rec')
	//good:
	//b.clMy('hand', function(f){this.C($r());f.B().C('w');f.C('z')})
}