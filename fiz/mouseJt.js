f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			//w.q is hack
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
w.$ = w.click = function (func) {
	var w = this
	$(w.hud.canvas).click(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
w.$$ = function (func) {
	var w = this
	$(w.hud.canvas).dblclick(function (e) {
		func(e.pageX, e.pageY)
	})
	return w
}
b.$$ = function (fn) {
	var b = this, w = b.W()
	w.$$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
b.$ = function (fn) {
	var b = this, w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
w.logMXY = function (e) {
	var w = this,
			p = w.sToW(e.X, e.Y);
	w.mx = p.x;
	w.my = p.y
	return w
}
w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.$$ = function (fn) {
	var w = this
	w.UI().dblclick(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {
			x: w.mx,
			y: w.my,
			X: e.clientX,
			Y: e.clientY,
			e: e
		}
		fn(o)
	})
	return w
}
w.md = function (fn) {
	var w = this
	w.i.c.mousedown(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		w.q(w.mx, w.my, function (f) {
			if (f) {
				o.f = f;
				o.b = f.B()
			}
		})
		fn(o)
	})
	return w
}
w.mu = function (fn) {
	var w = this, $cv = $(w.i.canvas)
	$cv.mouseup(function (e) {
		fn({
			x: w.mx,
			y: w.my,
			e: e
		})
	})
	return w
}
w.mdq = function (fn) {
	var w = this
	w.md(function (e) {
		w.q(e.x, e.y, function (f) {
			fn(f, e)
		})
	})
	return this
}
w.e$ = function () {
	var g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	this.e(function (b) {
		if (b.of(o.k)) {
			b.$(o.fn)
		}
	})
	return this
}
enterFrame = function () {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DDD()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
function carefule$() {//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
}
moJoint()
function moJoint() {
	mJD.GT = function () {
		return this.target.Get()
	}
	mJD.ST = function (a, b) {
		var mJD = this
		mJD.target.Set(a, b)
		return mJD
	}
	mJD.gT = function () {
		return this.GT().m()
	}
	mJD.sT = function (a, b) {
		v = V(a, b)
		return this.ST(v.d())
	}
	mJD.tg = function (x, y) {
		var mJD = this
		return U(x) ? mJD.gT() : mJD.sT(x, y)
	}
	mJ.GT = function () {
		return this.GetTarget()
	}
	mJ.ST = function (a, b) {
		var j = this
		j.SetTarget(O(a) ? a : V(a, b))
		return j
	}
	mJ.gT = function () {
		return this.GT().m()
	}
	mJ.sT = function (a, b) {
		return this.ST(V(a, b).d())
	}
	mJ.tg = function (x, y) {
		var mJ = this
		return U(x) ? mJ.gT() : mJ.sT(x, y)
	}
	_$mJ = function (a, b) {
		var g = G(arguments)
		var mJD = new b2d.MJD()
		if (a) {
			mJD.A(a)
		}
		if (b) {
			mJD.B(b)
		}
		return mJD
	}
	$mJ = function (b, tX, tY) {
		if (O(tX)) {
			tY = tX.y;
			tX = tX.x
		}
		var mJD = _$mJ()
		mJD.bodyA = w.GGB()
		mJD.bodyB = body
		mJD.target = V(tX, tY)
		mJD.collideConnected = true
		mJD.maxForce = 1000 * b.GM()
		mJD.dampingRatio = 0
		return mJD
	}
	$mJ1 = function (ground, b, tg, damp, maxForce) {
		var mJD = new b2d.Joints.b2MouseJointDef()
		mJD.bodyA = ground
		if (b) {
			mJD.bodyB = b
		}
		if (U(b)) {
			alert('body required!');
			return false
		}
		if (tg) {
			mJD.target = tg
		} //target
		mJD.dampingRatio = N(damp) ? damp : 0
		mJD.maxForce = N(maxForce) ? maxForce : b.GM() * 1000
		//mJD.collideConnected = true
		return mJD
	}
	w._mJ = function (bod, x, y) {
		var mj = $mJtD(this.ground(), bod)
		if (N(x)) {
			mj.targ(x, y)
		}
		return mj
	}
	w.mJ = function () {
		var w = this, g = G(arguments), o
		o = g.O ? g.f : {b: g.f, x: g.s, y: g.t, dR: g.fo, mF: g.fi, fq: g.si}
		o.dR = N0(o.dR)
		o.mF = N(o.mF, 5000000) //mJD.maxForce = 1000 * o.b.GetMass()
		var mJD = w._mJ(o.b, o.x, o.y)
		mJD.dmpRat(o.dR).mxFo(o.mF)
		if (N(g.si)) {
			mJD.freq(g.si)
		}
		return w.J(mJD)
	}
	w.mJ = function (o) {
		var w = this
		if (o.m == 0) {
			return w
		}
		o = o || {}
		$.M()
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.M()
		})
		$.oMD(function (x, y) {
			w.XY(x, y,
					function (f) {
						if (f.ofClass(o.m)) {
							w.mj = w.m(f.body(), _)
						}
					})
		})
		return w
	}
	w.mJ = function (b) {
		var w = this, g = G(arguments)
		if (g.u) {
			return 0
		}
		var j = w.CJ(
				$mJD(w.GGB(), b).sT(mX, mY)
		)
		j.mF(300)// * b.mass()
		j.mF(200000)
		j.fq(.5)
		j.dm()
		// default freqency is 5!!, maxF 30000, dmRat .7
		//$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())
		return j
	}
	w.wMouse = function () {
		var w = this
		$.oMD(function (x, y) {
			var p = w.sToW(x, y)
			w.mx = p.x;
			w.my = p.y
		})
		$.oMM(function (x, y) {
			var p = w.sToW(x, y)
			w.mx = p.x;
			w.my = p.y
		})
		//  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
		return w
	}
	w.wMouseJ = function (o) {
		var w = this
		w.md(function (e) {
			w.XY(e.x, e.y, function (f) {
				if (f.ofClass(o.m)) {
					w.mj = w.m(f.body(), e.x, e.y)
				}
			})
		})
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(w.mx, w.my)
			}
		})
		$.oMU(function () {
			w.M()
		})
		return w
	}
	w.mouseJAt = function (p, kind) {
		var w = this, mj
		if (N(p)) {
			p = V(p, kind)
		}
		w.XY(p.x, p.y, function (f) {
			mj = f.body().mouseJoint(p)
		})//, kind
		return mj
	}
	w.m = w.mou = function (b, x, y) {
		var w = this, j, p
		mJD = new b2d.Joints.b2MouseJointDef()
		mJD.bodyA = w.GetGroundBody()
		mJD.bodyB = b
		mJD.target = V(x, y).div()
		mJD.dampingRatio = 0
		mJD.maxForce = 5000
		mJD.collideConnected = true
		j = w.J(mJD)
		j.tg = function (x, y) {
			var j = this
			if (U(x)) {
				return j.GetTarget().mult()
			}
			j.SetTarget(V(x, y).div())
			return j
		}
		return j
	}
	b.mJ = b.mouse = b.mouseJ = b.mouseJoint = function (x, y) {
		var b = this, w = b.wor(),
				v = V(x, y),
				mj = w.mouseJ(b, v)
		return mj
	}
	WBF = function () {
		W()
		w.log = 1
		w.D(500, 300).f([['b', 100]])
		b = w.D(400, 300)
		//b.f('r', 100,'-')
		b.f([
			['r', 100, '-']
		])
	}
	/*
	
	
	 8.10 Mouse Joint
	
	 The mouse joint is used in the testbed to manipulate bodies with the mouse. It attempts to drive a point on a body towards the current position of the cursor. There is no restriction on rotation.
	
	 The mouse joint definition has a target point, maximum force, frequency, and damping ratio. The target point initially coincides with the body’s anchor point. The maximum force is used to prevent violent reactions when multiple dynamic bodies interact. You can make this as large as you like. The frequency and damping ratio are used to create a spring/damper effect similar to the distance joint.
	
	 Many users have tried to adapt the mouse joint for game play. Users often want to achieve precise positioning and instantaneous response. The mouse joint doesn’t work very well in that context. You may wish to consider using kinematic bodies instead.
	
	
	 */
	function spazWorldMouse() {
		
		// world mouse down vs canvas mouse down!!! 
// canvas mouse down just uses $.oMD
		MJWORKS = function () {
			w = b2d.W({
				//g:0
			})
			b = w.B(600, 300, 'r', 100).den(1).rest(.5)
			joint = false;
			$.mousemove(function (e) {
				m(e)
				if (joint) {
					j.tg(mx, my)
				}
			})
			$.mousedown(function (e) {
				m(e)
				j = w.mou(b, V(mx, my).div());
				joint = true
			});
			$.mouseup(function () {
				w.j(j);
				joint = false
			})
			function m(e) {
				mx = e.clientX;
				my = e.clientY
			}
		}
		$.oMM = function (fn) {
			this.mousemove(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return this
		}
		$.oMD = function (fn) {
			var $ = this
			$.mousedown(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return $
		}
		$.oMU = function (fn) {
			this.mouseup(function (e) {
				fn(e.clientX, e.clientY, e)
			})
			return this
		}
		$.M = function () {
			var $ = this
			$.oMD(function (x, y) {
				_.x = x;
				_.y = y
			})
			$.oMM(function (x, y) {
				_.x = x;
				_.y = y
			})
			cjs.tick(function () {
				if (w.mj) {
					w.mj.tg(_)
				}
			})
			return this
		}
		$.M0 = function () {
			var $ = this
			$.oMD(function (x, y) {
				_.x = x;
				_.y = y
			})
			$.oMM(function (x, y) {
				_.x = x;
				_.y = y
			})
			cjs.tick(function () {
				if (w.mj) {
					w.mj.tg(_)
				}
			})
			return this
		}
		MJYANOSCRIPT = function () {
			w = b2d.W()
			b = w.B(600, 300, 'r', 50).den(1).rest(.5)
			$.M()
			$.oMM(function () {
				if (w.mj) {
					w.mj.tg(_)
				}
			})
			$.oMU(function () {
				w.M()
			})
			$.oMD(function (x, y) {
				w.mj = w.m(b, _)
			})
		}
		w.mTrack = function (b) {
			var w = this
			$.oMM(function () {
				if (w.mj) {
					w.mj.tg(_)
				}
			})
			$.oMU(function () {
				w.M()
			})
			$.oMD(function (x, y) {
				w.mj = w.m(b, _)
			})
			return w
		}
		w.mTrackTransport = function (b) {
			var w = this
			$.oMM(function () {
				if (w.mj) {
					w.mj.tg(_)
				}
			})
			$.oMU(function () {
				w.M()
			})
			$.oMD(function (x, y) {
				b.XY(x, y)
				w.mj = w.m(b, _)
			})
			return w
		}
		function createMouse(e) {
			$l('createMouse')
			var body = GetBodyAtMouse()
			if (body) {
				$l('found body')
				var mouseJointDef = $mJtD(w.GetGroundBody(), body)
				mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
				mouseJointDef.maxForce = 30000;
				//mouseJointDef.timeStep = m_timeStep;
				mouseJoint = w.CreateJoint(mouseJointDef)
			}
		}
		
		function destroyMouse(e) {
			if (mouseJoint) {
				w.DestroyJoint(mouseJoint);
				mouseJoint = null
			}
		}
		
		function GetBodyAtMouse(includeStatic) {
			$l('getBodyAtMouse')
			var mouseXWorldPhys = mouseX / 30;
			var mouseYWorldPhys = mouseY / 30;
			mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
			var aabb = new b2AABB();
			aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
			aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
			var shapes = []
			var count = w.QueryAABB(aabb, shapes)
			var bod = null;
			_.t(count, function (i) {
				if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
					var tShape = shapes[i]
					var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
					if (inside) {
						body = tShape.GetBody()
						//	break;
					}
				}
			})
			return body;
		}
		
		function createMouse(e) {
			var body = GetBodyAtMouse()
			if (body) {
				$l('found body')
				var mouseJointDef = $mJtD(w.GetGroundBody(), body)
				mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
				mouseJointDef.maxForce = 30000;
				//mouseJointDef.timeStep = m_timeStep;
				mouseJoint = w.CreateJoint(mouseJointDef)
			}
		}
		
		function destroyMouse(e) {
			if (mouseJoint) {
				w.DestroyJoint(mouseJoint);
				mouseJoint = null
			}
		}
		
		function GetBodyAtMouse(includeStatic) {
			$l('getBodyAtMouse')
			var mouseXWorldPhys = mouseX / 30;
			var mouseYWorldPhys = mouseY / 30;
			mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
			var aabb = new b2AABB();
			aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
			aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
			var shapes = []
			var count = w.QueryAABB(aabb, shapes)
			var bod = null;
			_.t(count, function (i) {
				if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
					var tShape = shapes[i]
					var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
					if (inside) {
						body = tShape.GetBody()
						//	break;
					}
				}
			})
			return body;
		}
		
		function alpha() {

//if (this.log) {$l('w.mJ')};  make function class with logging?  wrap all my functions...
			mJ.ancA = function () {
				return this.GetAnchorA()
			}
			mJ.ancB = function () {
				return this.GetAnchorB()
				// this.m_bodyB.GetWorldPoint(this.m_localAnchor)
			}
			mJ.getImp = function () {
				return this.m_impulse
			}
			mJ.getMass = function () {
				return this.m_mass
			}
			mJ.reacFo = function (fo) {
				if (U(fo)) {
					return GetReactionForce()
				}
				this.SetReactionForce(fo)
				return this
			}
			mJ.getBeta = function () {
				return this.m_beta
			}
			mJ.getGamma = function () {
				return this.m_gamma
			}
		}
		
		BOXMOUSEJT = BMJ = function () {
			var mouseJoint
			m_iterations = 10
			m_timeStep = 1 / 30
			w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
			_.ev(.1, function () {
				if (mouseJoint) {
					var mx = mouseX / 30;
					var my = mouseY / 30;
					var v = V(mx, my)
					mouseJoint.SetTarget(v)
				}
				w.go(1 / 5, '+')
			})
			$bi()
			_.ev(2, function () {
				$ba()
			})
			mousePVec = V()
			//stage.MD(createMouse);
			//stage.MU(destroyMouse);
			$cv.mousedown(function (e) {
				$l('mousedown')
				mouseX = mx = e.clientX
				mouseY = my = e.clientY
				createMouse(e)
			})
		}
		function boxMouse_() {
			w.$ = function (fn) {
				var w = this
				w.UI().click(function (e) {
					fn({x: w.mx, y: w.my, e: e})
				})
				return w
			}
			w.$$ = function (fn) {
				var w = this
				w.UI().dblclick(function (e) {
					fn({x: w.mx, y: w.my, e: e})
				})
				return w
			}
			w.mm = function (fn) {
				var w = this, g = G(arguments)
				$.mousemove(function (e) {
					var o = {
						x: w.mx,
						y: w.my,
						X: e.clientX,
						Y: e.clientY,
						e: e
					}
					fn(o)
				})
				return w
			}
			w.md = function (fn) {
				var w = this
				w.i.c.mousedown(function (e) {
					var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
					w.q(w.mx, w.my, function (f) {
						if (f) {
							o.f = f;
							o.b = f.B()
						}
					})
					fn(o)
				})
				return w
			}
			w.mu = function (fn) {
				var w = this, $cv = $(w.i.canvas)
				$cv.mouseup(function (e) {
					fn({
						x: w.mx,
						y: w.my,
						e: e
					})
				})
				return w
			}
			w.mdq = function (fn) {
				var w = this
				w.md(function (e) {
					w.q(e.x, e.y, function (f) {
						fn(f, e)
					})
				})
				return this
			}
			w.e$ = function () {
				var g = G(arguments), o
				o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
				this.e(function (b) {
					if (b.of(o.k)) {
						b.$(o.fn)
					}
				})
				return this
			}
			BOXMOUSEJT = BMJ = function () {
				var mouseJoint
				m_iterations = 10
				m_timeStep = 1 / 30
				w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
				_.ev(.1, function () {
					if (mouseJoint) {
						var mx = mouseX / 30;
						var my = mouseY / 30;
						var v = V(mx, my)
						mouseJoint.SetTarget(v)
					}
					w.go(1 / 5, '+')
				})
				$bi()
				_.ev(2, function () {
					$ba()
				})
				mousePVec = V()
				//stage.MD(createMouse);
				//stage.MU(destroyMouse);
				$cv.mousedown(function (e) {
					$l('mousedown')
					mouseX = mx = e.clientX
					mouseY = my = e.clientY
					createMouse(e)
				})
			}
		}
		
		w.killMJ = function () {
			var w = this
			if (w._mJ) {
				w.DJ(w._mJ);
				w._mJ = 0
			}
			return w
		}
		w.tgMJ = function () {
			var w = this
			var b = w.bAt(mX, mY)
			w._mJ = w._mJ ? w._mJ :
					b ? w.mJ(b) :
							0
			if (w._mJ) {
				w._mJ.tg(V(mX, mY))
			}
			return w
		}
		w.handleMJ = function () {
			var w = this
			w._mD ? w.tgMJ() :
					w.killMJ()
			return w
		}
		w.mSetup = function () {
			$.md(function (e) {
				$mXY = function (e, x, y) {
					mx = e.clientX - x
					my = e.clientY - y
					mX = mx / 30
					mY = my / 30
				}
				var x = w.x
				var y = w.y
				w._mD = 1
				$mXY(e, x, y)
				$.mm(function (e) {
					$mXY(e, x, y)
				})
				// *** need to change to pagex(so can scroll page?).. 
				// but i think it messes up for mobile
			})
			$.mu(function () {
				w._mD = 0
			})
		}
		w.M = function () {
			var w = this
			if (w.mj) {
				w.j(w.mj);
				w.mj = null
			}
		}
	}
}
TINYREDBALLS = function () {
	w = b2d.G(1000, 500, 2000, 1000)
	y = w.ship(1000, 400//w.H()-100
	)
	//w.pXY(500,0)
	w.fw(y, 500, 300)
	// w.S(500,400,'b',20,200) //why sensor not working any more??
	w.B(700, 300, 'r', [[4]])
	w.B(800, 300, 'r', [[4]])
	w.B(900, 300, 'r', [[4]])
	w.B(1000, 300, 'r', [[4]])
	w.B(1100, 300, 'r', [[4]])
	w.B(1200, 300, 'r', [[4]])
	w.B(1300, 300, 'r', [[4]])
	w.s.HUD.dot('w', 500, 300)
	w.s.HUD.dot('w', 700, 300)
	w.s.HUD.dot('w', 1100, 300)
}
CONTLIST = function () {//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	w = b2d.W({}).debug().C('p')
			.bindCo('co1', 'co2')
			.end(function (cx) {
				var fixt
				if (fixt = cx.with('co2')) {
					fixt.cancel()
				}
			})
	co1 = w.acc(0, -50)
	s1 = w.sensorBucket(320, 300, 'co1')
	co2 = w.acc(0, -50)
	s2 = w.sensorBucket(700, 300, 'co2')
	w.circ(150, 100, 30, 'w').den(1)
	w.circ(200, 100, 30, 'd').den(1)
	w.circ(250, 100, 30, 'r').den(1)
	w.circ(350, 100, 30, 'g').den(1)
	w.circ(400, 100, 30, 'o').den(1)
	w.circ(450, 100, 30, 'w').den(1)
	setTimeout(function () {
		y = w.ship(300, 50)
		setInterval(function () {
			w.circ(300, 100, 10, 'y')
			w.circ(760, 100, 10, 'b')
			y.bc('kill')
		}, 1000)
	}, 500)
}
UPDOWN = function () {
	w = b2d.W({g: 0}).debug().C('g')
	y = w.ship(300, 50).linDamp(5)
	co1 = w.acc(0, -50)
	co2 = w.acc(0, 50)
	s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
	s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')
	w.bindCo('co1', 'co2')
	w.beg(function () {
	})
	w.end(function (cx) {
		var fixt
		if (fixt = cx.with('co1')) {
			// fixt.cancel()
		}
		if (fixt = cx.with('co2')) {
			// fixt.cancel()
		}
	})
	_.times(20, function () {
		w.circ(300, 300, 30, 'b')
	})
}
GRAVTRAP = function () {
	W({g: 0, w: 0}).C('e').Y(300, 300).pen('welcome to grav controller')
	gCo = w.grav().body(y,
			w.D(320, 300, 'b', 20).den(1),
			w.D(300, 320, 'r', 30).den(1),
			w.D(340, 300, 'x', 40).den(1),
			w.D(300, 340, 'c', 50).den(1),
			w.D(320, 320, 'l', 60).den(1)
	)
}
CLICKKILL = function () {
	box(function () {
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex ' + mouse.x)
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		return false
	})
}
RAGD = function () {
	b2d.mW()
	// world.Spring =
	w.J(
			b2d.spring(
					body1 = w.ball(100, 100, 30),
					w.ball(100, 200, 40)
			)
	)
	//world.Rod =
	w.J(
			b2d.rod(
					body2 = w.box(100, 400, 30),
					w.box(100, 500, 40))
	)
	player = w.addMe()
	w.J(
			b2d.spring(
					body1, player)
	)
	w.J(
			b2d.spring(body2, player))
}
STACKTHREE = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.B(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.B(310, 120, 't', 60, 60)
	w.B(320, 120, 't', 60, 60)
	w.B(340, 120, 't', 60, 60)
	w.B(350, 120, 't', 60, 60)
	w.B(370, 120, 't', 60, 60)
	w.B(380, 120, 't', 60, 60)
	w.B(550, 120, 't', 60, 60)
	w.B(570, 120, 't', 60, 60)
	w.B(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
	w.db()
}