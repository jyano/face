w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ?
		{x: g.f, y: g.s} :
		{x: V(g.f).x, y: V(g.f).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
function errWorld() {
	BOXSPRITE = BSP = function () {
		b2.mW({debug: false})
		meBall = function () {
			spr = meSprite().rCenter().sXY(.4).rXY(230, 260)
			b = b2.ball(400, 400, 40).bindSprite2(spr, 6)
		}
		meBall()
		w.box().bindSprite('guy')
		w.begin(function (cx) {
			if (cx.with('ball', 'box')) {
				spr.p('explode')
				setTimeout(function () {
					b.kill();
					meBall()
				}, 1000)
			}
		})
	}
}
function errCir() {
	CHANGE = CHG = function () {
		w = b2d.mW()
		b = w.ball().bindSprite('guy').kin()
		w.box(400, 100, 400, 100)
	}
	BOXPACK = BXP = function () {
		w = b2d.mW({
			//debug:false
		})
		w.platform(500, 300, 200, 200)
		pack = function (anim) {
			anim = anim || 'f1'
			var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
			spr.gotoAndPlay(anim)
			return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
		}
		b = pack('f1')
		anims = _.keys(Pack.animations)
		//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
		// cjs.tick(function(){ b.rot(0) })
		change = function () {
			anim = anims[_.random(23)]
			$l('changed to ' + anim)
			b.sprite.gotoAndPlay(anim)
		}
		w.begin(function (cx) {
			if (cx.with('platform')) {
				change()
			}
		})
	}
	PACKE4 = PK4 = function () {
		w = b2d.mW({
			//debug:false,
			grav: 0
		})
		p = w.player('thrust')
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.p('e4')
		b = w.bumper(
				Math.random() * 1000,
				Math.random() * 500, 45
		).bindSprite2(spr)
		// cjs.tick(function(){ b.rot(0) })
		w.begin(function (cx) {
			if (cx.with('bumper')) {
				p.I(1000, 1000)
			}
		})
	}
}
function dud() {
	EASELBO = EBO = function () {
		w = b2d.mW({
			//debug:false
		})
		b = w.brick(300, 300, 100, 100)
		r = cjs.rect(100, 100).XY(300, 300).drag()
		b.bindSprite2(r)
		//  w.s.A(r)
	}
}
function errRec() {
	EASELBO2 = EBB = function () {
		w = b2d.mW({
			grav: 3
			//,debug:false
		})
		p = w.player('standard')
		cjs.tick(function () {
			p.rot(0)
		})
		b = w.brick(300, 300, 300, 100)
		r = cjs.rect(300, 100).XY(300, 300).drag()
		w.s.A(r)
		cjs.tick(function () {
			b.X(r.X());
			b.Y(r.Y())
		})
		r.tweenLoop([{x: 500}, 1000], [{x: 300}, 1000])
		bb = w.brick(500, 500, 300, 100)
		rr = cjs.rectangle(300, 100).XY(500, 500).drag()
		w.s.A(rr)
		cjs.tick(function () {
			bb.X(rr.X());
			bb.Y(rr.Y())
		})
	}
}