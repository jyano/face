Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new createjs.Container().drag()
	var innerCont = new createjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(
			function (m) {
				m.sXY(.4)
				createjs.bindSlide(m, outerCont)
				outerCont.bm('arm', function (b) {
					b.name = 'arm'
					b.sX(-.8).XY(140, 100).rXY(200, 80)
					createjs.bindRotate(b)
					b.on('dblclick', function () {
						tweens.rpunch(b)
					})
				})
				innerCont.XY(40, 120).rXY(40, 100)
				innerCont.bm('uparm', function (b) {
					b.name = 'lu'
					b.sX(.8).XY(80, 180).rXY(200, 80)
					createjs.bindRotate(b, innerCont)
				})
				innerCont.bm('forearm', function (b) {
					b.name = 'lf'
					b.XY(-100, 140).sX(.8).rXY(20, 120)
					createjs.bindRotate(b)
					innerCont.on('dblclick', function () {
						tweens.lpunch(b)
					})
				})
			})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = createjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new createjs.Container().drag()
	var innerCont = new createjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(
			function (m) {
				m.sXY(.4)
				createjs.bindSlide(m, outerCont)
				outerCont.bm('arm', function (b) {
					b.name = 'arm'
					b.sX(-.8).XY(140, 100).rXY(200, 80)
					createjs.bindRotate(b)
					b.on('dblclick', function () {
						tweens.rpunch(b)
					})
				})
				innerCont.XY(40, 120).rXY(40, 100)
				innerCont.bm('uparm', function (b) {
					b.name = 'lu'
					b.sX(.8).XY(80, 180).rXY(200, 80)
					createjs.bindRotate(b, innerCont)
				})
				innerCont.bm('forearm', function (b) {
					b.name = 'lf'
					b.XY(-100, 140).sX(.8).rXY(20, 120)
					createjs.bindRotate(b)
					innerCont.on('dblclick', function () {
						tweens.lpunch(b)
					})
				})
			})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = createjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new cjs.Container().drag()
	var innerCont = new cjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(function (m) {
		cjs.bindSlide(m.scXY(.4), outerCont)
		outerCont.bm('arm', function (b) {
			b.name = 'arm'
			cjs.bindRotate(b.sX(-.8).XY(140, 100).rXY(200, 80))
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		innerCont.XY(40, 120).rXY(40, 100)
		innerCont.bm('uparm', function (b) {
			b.name = 'lu'
			b.sX(.8).XY(80, 180).rXY(200, 80)
			cjs.bindRotate(b, innerCont)
		})
		innerCont.bm('forearm', function (b) {
			b.name = 'lf'
			cjs.bindRotate(b.XY(-100, 140).sX(.8).rXY(20, 120))
			innerCont.on('dblclick', function () {
				tweens.lpunch(b)
			})
		})
	})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = cjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
function more(){
	BOD = function () {
		z()
		s = $St(800, 800).A(
				b1 = Bod1(),
				b2 = Bod2().XY(300),
				cyc = Cycle(500),
				f = Flame(200)
		)
		function Cycle(x, y, rt) {
			ct = $Ct().mug(function (mug) {
				mug.sXY(.4)
				ct.bm('uni', function (b) {
					b.sX(-.8).XY(-20, 200).rXY(240, 80)
					b.n('uni')
					cjs.TR(mug, ct)
					cjs.RT(b, ct)
				})
			})
			if (N(x)) {
				ct.X(x)
			}
			if (N(y)) {
				ct.Y(y)
			}
			if (N(rt)) {
				ct.rt(rt)
			}
			return ct
		}
		
		function Flame(x, y) {
			var c
			c = $Ct().dg()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rC()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.$$(function () {
					c.bm('flame', function (b) {
						tweens.prod1(b.sXY(.2))
					})
					c.bm('flame', function (b) {
						tweens.prod2(b.sXY(.2))
					})
				})
			})
			if (N(x)) {
				c.X(x)
			}
			if (N(y)) {
				c.Y(y)
			}
			return c
		}
		
		function Bod1() {
			var outerCont = $Ct().dg()
			var innerCont = $Ct()
			outerCont.A(innerCont)
			outerCont.mug(
					function (m) {
						m.sXY(.4)
						cjs.bindSlide(m, outerCont)
						outerCont.bm('arm', function (b) {
							b.name = 'arm'
							b.sX(-.8).XY(140, 100).rXY(200, 80)
							cjs.bindRotate(b)
							b.$$(function () {
								tweens.rpunch(b)
							})
						})
						innerCont.XY(40, 120).rXY(40, 100)
						innerCont.bm('uparm', function (b) {
							b.sX(.8).XY(80, 180).rXY(200, 80)
							cjs.bindRotate(b, innerCont)
						})
						innerCont.bm('forearm', function (b) {
							b.name = 'lf'
							b.XY(-100, 140).sX(.8).rXY(20, 120)
							cjs.bindRotate(b)
							innerCont.$$(function () {
								tweens.lpunch(b)
							})
						})
					})
			return b = outerCont
		}
		
		function Bod2(x, y) {
			var c1 = $Ct(), cL = $Ct()
			c1.mug(function (m) {
				SL(m.sXY(.4), c1)
			})
			c1.bm('arm', function (b) {
				b.sX(-.8).X(140).Y(100).rX(200).rY(80)
				RT(b);
				b.$$(function () {
					tweens.rpunch(b)
				})
			})
			cL.bm('uparm', function (b) {
				RT(b, cL)
				b.sX(.8).XY(80, 180).rXY(200, 80)
				cL.$$(function () {
					tweens.lpunch(cL)
				})
				cL.XY(140, 100).rXY(100, 100)
			})
			cL.bm('forearm', function (b) {
				b.name = ('lf')
				b.sX(.8).XY(-100, 140).rXY(20, 120)
				RT(b)
			})
			return c1.A(cL)
		}
	}
	BOD = function () {
		z()
		s = $St(800, 800).A(
				b1 = Bod1(),
				b2 = Bod2().XY(300),
				cyc = Cycle(500),
				f = Flame(200)
		)
		function Cycle(x, y, rt) {
			ct = $Ct().mug(function (mug) {
				mug.sXY(.4)
				ct.bm('uni', function (b) {
					b.sX(-.8).XY(-20, 200).rXY(240, 80)
					b.n('uni')
					cjs.TR(mug, ct)
					cjs.RT(b, ct)
				})
			})
			if (N(x)) {
				ct.X(x)
			}
			if (N(y)) {
				ct.Y(y)
			}
			if (N(rt)) {
				ct.rt(rt)
			}
			return ct
		}
		
		function Flame(x, y) {
			var c
			c = $Ct().dg()
			c.bm('flame', function (b) {
				tweens.shakeY(b)
				c.mug(function (b) {
					b.rC()
					tweens.shakeX(tweens.rott(b))
					c.bm('flame', tweens.shakeX)
				})
				c.$$(function () {
					c.bm('flame', function (b) {
						tweens.prod1(b.sXY(.2))
					})
					c.bm('flame', function (b) {
						tweens.prod2(b.sXY(.2))
					})
				})
			})
			if (N(x)) {
				c.X(x)
			}
			if (N(y)) {
				c.Y(y)
			}
			return c
		}
		
		function Bod1() {
			var outerCont = $Ct().dg()
			var innerCont = $Ct()
			outerCont.A(innerCont)
			outerCont.mug(
					function (m) {
						m.sXY(.4)
						cjs.bindSlide(m, outerCont)
						outerCont.bm('arm', function (b) {
							b.name = 'arm'
							b.sX(-.8).XY(140, 100).rXY(200, 80)
							cjs.bindRotate(b)
							b.$$(function () {
								tweens.rpunch(b)
							})
						})
						innerCont.XY(40, 120).rXY(40, 100)
						innerCont.bm('uparm', function (b) {
							b.sX(.8).XY(80, 180).rXY(200, 80)
							cjs.bindRotate(b, innerCont)
						})
						innerCont.bm('forearm', function (b) {
							b.name = 'lf'
							b.XY(-100, 140).sX(.8).rXY(20, 120)
							cjs.bindRotate(b)
							innerCont.$$(function () {
								tweens.lpunch(b)
							})
						})
					})
			return b = outerCont
		}
		
		function Bod2(x, y) {
			var c1 = $Ct(), cL = $Ct()
			c1.mug(function (m) {
				SL(m.sXY(.4), c1)
			})
			c1.bm('arm', function (b) {
				b.sX(-.8).X(140).Y(100).rX(200).rY(80)
				RT(b);
				b.$$(function () {
					tweens.rpunch(b)
				})
			})
			cL.bm('uparm', function (b) {
				RT(b, cL)
				b.sX(.8).XY(80, 180).rXY(200, 80)
				cL.$$(function () {
					tweens.lpunch(cL)
				})
				cL.XY(140, 100).rXY(100, 100)
			})
			cL.bm('forearm', function (b) {
				b.name = ('lf')
				b.sX(.8).XY(-100, 140).rXY(20, 120)
				RT(b)
			})
			return c1.A(cL)
		}
	}
}
function cycle(){
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
}
function flame(){
	Flame1 = function () {
		var c = new cjs.Container().drag()
		c.bm('flame', function (b) {
			tweens.shakeY(b)
			c.mug(function (b) {
				b.rCenter()
				tweens.shakeX(tweens.rott(b))
				c.bm('flame', tweens.shakeX)
			})
			c.on('dblclick', function () {
				c.bm('flame',
						function (b) {
							b.sXY(.2)
							tweens.prod1(b)
						})
				c.bm('flame',
						function (b) {
							b.sXY(.2)
							tweens.prod2(b)
						})
			})
		})
		return c
	}
	FLAME = function () {
		s = $stage(800, 800).A().tick()
		f = Flame1().X(300)
		s.A(f)
	}
	Flame1 = function () {
		var c = new cjs.Container().drag()
		c.bm('flame', function (b) {
			tweens.shakeY(b)
			c.mug(function (b) {
				b.rCenter()
				tweens.shakeX(tweens.rott(b))
				c.bm('flame', tweens.shakeX)
			})
			c.on('dblclick', function () {
				c.bm('flame',
						function (b) {
							b.sXY(.2)
							tweens.prod1(b)
						})
				c.bm('flame',
						function (b) {
							b.sXY(.2)
							tweens.prod2(b)
						})
			})
		})
		return c
	}
	FLAME = function () {
		s = $stage(800, 800).A().tick()
		f = Flame1().X(300)
		s.A(f)
	}
	Flame1 = function () {
		var c = new cjs.Container().drag()
		c.bm('flame', function (b) {
			tweens.shakeY(b)
			c.mug(function (b) {
				b.rCenter()
				tweens.shakeX(tweens.rott(b))
				c.bm('flame', tweens.shakeX)
			})
			c.on('dblclick', function () {
				c.bm('flame', function (b) {
					b.sXY(.2)
					tweens.prod1(b)
				})
				c.bm('flame', function (b) {
					tweens.prod2(b.sXY(.2))
				})
			})
		})
		return c
	}
	FLAME = function () {
		s = $stage(800, 800).A().tick()
		f = Flame1().X(300)
		s.A(f)
	}
}