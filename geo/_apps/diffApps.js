GERN = function () {
	W({g: 0}).Y()
	w.p(200, 200)
	ter = w.S(400, 400, 'g', 300, 300).K('ter')
	w.cxBul('ter', function (tFx) {
		var bu = this.B()
		_.in(1, function () {
			var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
			t.sub(exp)
			_.in(10, function () {
				exp.kill()
			})
		})
	})
}
WALLZ = function () {
	W(10).Y()
	x = w.S(900, 450, 'r', 250, 200)
	bb = w.S(w.w, w.h / 2, 'w', 200, 400)
	return
	w.right.scrape(bb)
	w.r_.C('o')
	bb.kill()
	b = w.S(1200, 300, 'p', 200, 100)
	b1 = w.S(1200, 300)
	return
	$DIF(w.r_.f(), b.f())
			.ps(b, function (p) {
				b1.pol(p)
			})
	b.kill()
}
STAMP = function () {
	W({w: 'U', g: 50})
	soda = w.S(300, 300, 'b', 300, 200)//.c('b')
	r = w.S(200, 400, 'r', 300, 200)//.c('r')
	y = w.S(240, 200, 'y', 200, 300, 0, 0, 100)//.c('y')
	_.in(1, function () {
		soda.sub(y) //, '-')
		//soda.f().C('o')
		//f = soda.f()
	})
	return
	soda.kill()
	_.in(3, function () {
		$DIF(f, r.f())
				.ps(soda, function (p) {
					soda.pol(p)
				})
	})
	w.D(800, 100).pol('g', w.D(800, 300, 'r', 100, 20))
	cross = w.D(600, 300, 'z', [
		['r', 100, 20],
		['b', 80, 30, 0, 0, 80]
	])
	cross = cross.uni().reg(cross)
	w.$(function (o) {
		w.D(o.x, o.y).pol(cross)
		w.pol(o.x, o.y, soda)
		o.f.kill()
		r.kill()
		soda.dyn()
	})
} // w.S(...).c NOT FUNC
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	return ter
}
f.scrapeBodWith = f.subFromBod = function (b) {
	b.fs(function (f) {
		f.sub(b)
	})
}
DF8 = function () {
	W({w: 0})
	y = w.S(500, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
	ggg = w.S(550, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	y1 = w.S(700, 100, 'y', [[100, 100], [100, 100, 0, 0, 45]]).rt(20)
	g1 = w.S(750, 150, 'g', [[100, 100], [100, 100, 0, 0, 45]])
	w.md1 = w.mouseDownOnce = function (fn) {
		return this.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}
	w.md1(function () {
		ggg.subB(y.killXY())
		ggg.dyn()
		y1.sub(g1)
		y1.dyn()
	})
}
DF1 = function () {
	W()
	var white = w.S(700, 400, 'w', 100, 100),
			red = w.S(700, 400),
			f = red.pol({
				c: 'r', o: .2,
				v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
			}),
			yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
			green = w.S(1030, 400, 'g', 200, 200)
	w.md(function () {
		white.sub(red, '-')
		red.dyn()
		green.sub(yellow, '-').dyn().lV(-60, -10)
	})
	recV = function () {
		w.pol(400, 300,
				w.S(200, 350, 'b',
						[-80, 10], [0, -150],
						[100, 100]).dif(
						b2d.recV(280, 420, 100, 100)))
	};
	//recV()
}
SUB = function () {
	W(20).Y();
	y.rot(90).XY(20, 50)
	face = w.S(300, 400, 'b', 100, 100)
	hat = w.S(300, 400, 'w', [
		[[-100, 10], [-80, -40], [0, -200], [100, 0]],
		[20, 50]
	])
	redRec = w.S(900, 350, 'r', 200, 100)
	blueBody = w.S(1000, 300)
	fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
	fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})
	_.in(2, function () {
		face.f().sub(hat, '-')
		redRec.f().sub(blueBody, '-')
		redRec.C('r')
	})
	a = w.S(140, 140, 100, 100).rot(20)
	b = w.S(100, 100, 100, 100).rot(45)
	d = w.S(650, 420, 'b', 100, 100)
	b9 = w.S(610, 380, [
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20, '-']
	]).rot(-20)
	fs = b9.fs()
	_.in(3, function () {
		w.S(720, 400).pol(d.sub(b9, '-'))
	})
	//does not keep color!
	c = w.S(450, 300, 'w', 100, 100)
	c.minusPolyCirc(550, 300, 100, 20)
}
SENSUB = function () {
	W(0).Y()
	r = w.D(600, 350, 'r', 400, 200).grp(-1)
	b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	w.$$(function () {
		r.fs(function (f) {
			f.sub(b)
		})
		r.grp(-1)
		b.kill()
		r.C('r')
		b = w.D(1000, 300, [['b', 100, 100], ['b', 100, 100, 30, 30]]).grp(-1)
	})
}
SUBCOL = function () {
	W(0)
	/*
	 b=w.S(300,300,'b',300,200).c('b')
	
	 r=w.S(200,400,'r',300,200).c('r')
	
	 y=w.S(240,200,'y',200,300,0,0,100).c('y')
	
	
	 _.in(function(){
	
	 y.sub(b)//.C( y.c() )
	
	 b.kill()
	
	 //b.sub(b1,'-').C('b')
	 })
	 */
	fn = function () {
		var b, p, b1
		b = w.D(900, 200, [
			['p', 200, 100], ['b', 100, 200]])
		b1 = w.D(900, 400)
		$DIF(b.fs(1), b.fs(0)).ps(b, function (p) {
			b1.pol(p)
		})
	};
	fn()
}
DFFF = function () {
	W(10)
	w.S(900, 450, 'r', 250, 200).f().sub(w.D(850, 460, 'w', 200, 100, 0, 0, -20).f())
	b = w.S(1100, 100, 'r', 100, 100)
	b1 = w.S(1050, 120, 'b', 100, 40)
	w.$$(function () {
		w.D(500, 100).pol('r',
				b.f().dif(b1.f(), '-')
		)
		b.kill()
		b1.kill()
	})
	fn = function () {
		var b = w.S(100, 100, 'r', 100, 100),
				b1 = w.S(130, 100, 'b', 100, 80)
		_.in(function () {
			b.sub(b1, '-')
		})
	}//;fn()
	fn = function () {
		var b = w.S(300, 100, 'r', 100, 100),
				b1 = w.S(330, 100, 'b', 100, 80)
		w.$$(function () {
			w.D(300, 200).pol(b.f().dif(b1, '-'))
		})
	};//fn()
	fn = function () {
		var b, o, p
		b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
		o = w.S(280, 420, 'o', 100, 100)
		p = b.dif(o)
		w.D(300, 300).pol(p)
		w.dot(300, 300)
	}//;fn()
	fn = function () {
		white = w.S(700, 400, 'w', 100, 100)
		red = w.S(700, 400)
		f = red.pol({
			c: 'r',
			v: [[-100, 10], [-80, -40],
				[0, -200], [100, -60]]
		})
		yellow = w.S(930, 300, 'y', [
			[100, 100],
			[100, 100, 0, 0, 45]])
		yel = yellow.pD().reg(yellow)
		green = w.S(1030, 400, 'g', 200, 200)
		w.md1(function () {
			red.sub(white, '-').dyn().lV(-60, -10)
			yellow.sub(green).dyn().lV(-60, -10)
			w.$(function () {
				yellow.lV(-60, -10)
			})
			_.in(2, function () {
				green.sub(w.S(930, 300).pol(yel))
			})
		})
	};//fn()
}