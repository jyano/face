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


