$con.jetpack = $con.symmetrical = $con.jumper = function (p) {
	var g = G(arguments)
	return g.p ? p.impRunUpDown(20, 20) : p.impRunUpDown(4, 22)
}//jetback/symm, jumper
$con.linJump = function (p, ht) {
	ht = -M.abs(N(ht) ? ht : 100)
	if ($onG('+')) {
		p.lV(0, ht)
	}
}
$con.playa = function (p) {
	p.isLegitJumping() ? p.lVJump() : p.impRun()
}
$con.linRun = function (p) {
	p.linRun(40, '*')
}
$con.slidey = function (p) {
	var g = G(arguments)
	g.n ? p.tricky(2, -6, -14, 10, 10) :
			!g.p ? p.tricky(2, -6, -14, 2) :
					p.tricky(0, -10, -30, 15)
}//slidey//standard//trickJump
$con.weird = function (p) {
	!G(arguments).n ? p.basic(-10, 4, 1) :
			p.basic(-14, 3)
}//getup//basic
b2d.cn.sl = b2d.cn.slidey = function (p) {
	alert('slidy')
	var k = $.K
	if (p.onG) {
		if (k.u) {
			if (k.r) {
				p.I(20, -60)
			}
			else if (k.l) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -100)
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	else {
		if (k.l) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.r) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	/*
	
	 p.I(p.onG&&k.u ? V(0, -70)
	
	 : k.r ? V(30, 0)
	 : k.l ? V(-30, 0)
	 : V(0, 0)  )*/
	return p
}
b2d.cn.h = b2d.cn.hop = function (p) {
	alert('hop')
	var k = $.K
	if (p.onGround) {
		if (k.l) {
			p.I(-30, -120)
		}
		if (k.r) {
			p.I(30, -120)
		}
	}
	else {
		if (k.d) {
			p.I(0, 20)
		}
	}
}
b2d.cn.power = function (p) {
	alert('power')
	var K = $.K
	if (K.u) {
		p.I(0, -45)
	}
	if (K.l) {
		p.I(-20, 0)
	}
	if (K.r) {
		p.I(20, 0)
	}
}
b2d.cn.powX = function (p) {
	alert('powX')
	var K = $.K
	if (K.u) {
		p.I(0, -4500)
	}
	if (K.l) {
		p.I(-2000, 0)
	}
	if (K.r) {
		p.I(2000, 0)
	}
	if (K.d) {
		p.I(0, 4500)
	}
}
b.diffx = b.difx = function (x, y) {
	alert('b.diffx difx')
	var b = this// compare with DIF  - achtung!
	return {
		x: x - b.X(),
		y: y - b.Y()
	}
}
w.p1 = w.player1 = function (x, y, sc, cn) {
	alert('w.p1 player1')
	var w = this, g = G(arguments), p,
			o = g.S_ ?
			{cn: g.f} :
					N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
					{x: g.f, y: g.s, cn: g.t}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.sc = N(o.sc, 4)
	p = w.me(o.x, o.y, o.sc)
	if (g.p) {
		p.track()
	}
	p.cn(o.cn)
	p.speed = 40
	p._dir = 'r'
	p.dir = function (d) {
		var p = this
		if (U(d)) {
			return p._dir
		}
		p._dir = d;
		return p
	}
	p.moveInDir = function () {
		var p = this, g = G(arguments)
		if (g.n) {
			return p.move(-p.speed)
		}
		//n = _.tN(g[0], p.speed)// ?
		if (p.dir()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.SetBullet(true)
	w.cl('feet',
			function (f) {
				if (!f.sen()) {
					p.onG = 1
				}
			}
	)
	w.end(function (cx) {
		cx.w('feet', function (f) {
			if (!f.sen()) {
				p.onG = 0
			}
		})
	})
	$.testJump = 1
	if ($.testJump) {
		T.t(function () {
			if (p.onG) {
				$l('onG')
			}
			else {
				$l('in air')
			}
		})
		w.show(function () {
			return p.onG
		})
	}
	T.t(function () {
		p.I(0, 500)
	})
	return p
}
b.jumping = function (y, x) {
	alert('b.jumping')
	var b = this, k = $.K
	if (k.u) {
		if (k.r) {
			b.lV(x, -(y - x))
		}
		else if (k.l) {
			b.lV(-x, -(y - x))
		}
		else {
			b.lV(0, -y)
		}
	}
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.key({
		l: function () {
			b.dir('l').move()
		},
		r: function () {
			b.dir('r').move()
		},
		u: function () {
			if (b.dir() == 'l') {
				b.I(5, -12)
			}
			else if (b.dir() == 'r') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
b.pWarping = function () {
	alert('b.pWarping')
	var p = this, b = this
	cjs.t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return b
}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
//end allert
w.up = function (n) {
	alert('w.up')
	var w = this;
	n = N(n, 4)
	w.e(function (b) {
		b.Y(n, '-')
	})
}//=w.vert
b.thr = function () {
	alert('b.thr')
	this.cn('thrust')
}
b2d.cn.jet = function (p) {
	alert('jet')
	var k = $.K, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
b2d.controls = {}
b2d.controls.thrust = function (p) {
	var k = cjs.Keys, vec = p.GetWorldVector(V(0, -100))//p.fixRot()
	if (k.left) {
		p.rot(15, '-')
	}
	if (k.right) {
		p.rot(15, '+')
	}
	if (k.up) {
		p.I(vec.div(40))
	}
	if (k.down) {
		p.I(vec.div(100))
	}
}
b2d.controls.thrustgrav = function (p) {
	var k = cjs.Keys, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
b2d.controls.slidey = function (p) {
	var k = cjs.Keys
	// if on ground
	if (p.onGround) {
		
		// if pushing jump
		if (k.up) {
			if (k.right) {
				p.I(20, -600)
			}
			else if (k.left) {
				p.I(-20, -600)
			}
			else {
				p.I(0, -700)
			}
		}
		// if not pushing jump
		else {
			if (k.left) {
				p.dir(0);
				p.I(-100, -100)
			}
			if (k.right) {
				p.dir(1);
				p.I(100, -100)
			}
		}
	}
	
	// if in air !!!
	else {
		if (k.left) {
			p.dir(0);
			p.I(-100, 0)
		}
		if (k.right) {
			p.dir(1);
			p.I(100, 0)
		}
	}
	return p
}
b2d.controls.standard = function (p) {
	var k = cjs.Keys
	if (p.onGround) {
		
		// if jumping
		if (k.up) {
			if (k.right) {
				p.I(20, -60)
			}
			else if (k.left) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -700)
			}
		}
		// if not jumping
		else {
			if (k.left) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.right) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	
	// if in air !!!
	else {
		if (k.left) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.right) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	return p
}
b2d.controls.basic = function (p) {
	var k = cjs.Keys,
			i = p.onGround && k.up ? V(0, -700)
					: k.right ? V(30, 0)
					: k.left ? V(-30, 0)
					: V(0, 0)
	p.I(i)
}
b2d.controls.getup = function (p) {
	var k = cjs.Keys,
			i = p.onGround && k.up ? V(0, -600)
					: k.right ? V(40, 10)
					: k.left ? V(-40, 10)
					: V(0, 0)
	p.I(i)
	p.fixedRot(false)
}
b2d.controls.symmetrical = function (p) {
	var k = cjs.Keys
	if (k.left) {
		p.I(-20, 0)
	}
	if (k.right) {
		p.I(20, 0)
	}
	if (k.up) {
		p.I(-0, -20)
	}
	if (k.down) {
		p.I(0, 20)
	}
	return p
}
b2d.controls.trickjump = function (p) {
	var k = cjs.Keys
	if (p.onGround) {
		if (k.up) {
			if (k.right) {
				p.I(0, 100)
			}
			else if (k.left) {
				p.I(0, -100)
			}
			else {
				p.I(0, -800)
			}
		}
		else {
			if (k.left) {
				p.direction(0);
				p.I(-105, 0)
			}
			if (k.right) {
				p.direction(1);
				p.I(150, 0)
			}
		}
	}
	else {
		if (k.left) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.right) {
			p.direction(1);
			p.I(10, 0)
		}
	}
	return p
}
b2d.controls.hoppy = function (p) {
	var k = cjs.Keys
	if (p.onGround) {
		if (k.left) {
			p.I(-3, -12)
		}
		if (k.right) {
			p.I(3, -12)
		}
	}
	else {
		if (k.down) {
			p.I(0, 20)
		}
	}
}
b2d.controls.jumper = function (p) {
	var k = cjs.Keys//p.rot(0)
	if (k.left) {
		p.I(-4, 0)
	}
	if (k.right) {
		p.I(4, 0)
	}
	if (k.up) {
		p.I(-0, -22)
	}
	if (k.down) {
		p.I(0, 22)
	}
	//return p
}
b2d.controls.jump = function (p) {
	if (p.up && p.onGround) {
		p.lV(p.lV().x, -80)
	}
	p.lV(p.right ? 30 : p.left ? -30 : 0, p.lV().y)
}


