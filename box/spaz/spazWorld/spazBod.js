easel()
kill()
def()
proxy()
xyr()
velDamp()
bool()
force()
b2d.bodyX = b2d.bodyDefX = function (x, y) {
	var bodyDef = new b2BodyDef()
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	bodyDef.xy(x, y)
	return bodyDef
}
b.wC = function () {
	return this.GWC().m()
}
b.coll = b.collWithKind = function (func, func2) {
	var that = this
	if (S(func) && F(func2)) {
		this.W().begin(function (cx) {
			if (cx.a() == that && cx.b().is(func)) {
				func2(cx.b())
			}
			if (cx.b() == that && cx.a().is(func)) {
				func2(cx.a())
			}
		})
	}
	else {
		w.begin(function (cx) {
			if (cx.a() == that) {
				func(cx.a())
			}
			if (cx.b() == that) {
				func(cx.b())
			}
		})
	}
	return this
}
b.shootX = function () {
	var vec, bullet
	bullet = this.GetWorld().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(b2.V(0, -100))
	bullet.impulse(vec.x / 20, vec.y / 20)
}
b.worldVec = function (vec, y) {
	if (N(vec) && N(y)) {
		vec = V(vec, y)
	}
	if (U(vec)) {
		vec = V(0, -100)
	}
	return this.GetWorldVector(vec)
}
b.countX = function () {
	return this.m_fixtureCount
}
b.f = function (fs) {
	return U(fs) ? this.GFL() :
			this.CreateFixture(fs)
}
b.REC = b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var f = b.f($rF(wd, ht, x, y))
	var r = cjs.rect2(
			wd, ht, x, y).XY(b.X(), b.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rt(b.rt())
		r.XY(b.X(), b.Y())
	})
	return f
}
b.each = b.eachFixt = function (func) {
	var fl = this.GetFixtureList()
	var withList = function self(list, func) {
		func(list)
		list = list.GetNext()
		if (list) {
			return self(list, func)
		}
	}
	withList(fl, func)
}
function easel() {
	b.stg = function () {
		return this.W().stage
	}
	b.bindSprite2 = function (obj, startingRotation, x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var body = this,
				stage = body.GetWorld().stage
		startingRotation = N(startingRotation) ? startingRotation : 0
		body.sprites = body.sprites || []
		body.sprites.push(obj)
		body.sprite = obj
		body.sprite.a2(stage)
		cjs.tick(function () {
			if (!body.sprite) {
				return
			}
			_.each(body.sprites, function (sprite) {
				sprite.XY(
						body.X() + (x || 0),
						body.Y() + (y || 0)
				)
				sprite.rotation = body.rt() + startingRotation
			})
		})
		return body
	}
}
function kill() {
	b.destroyFixt = b.destroyFixture = function (f) {
		this.DestroyFixture(f)
		return this
	}
	b.kill = function () {
		if (this.sprite) {
			this.sprite.remove()
		}
		this.sprite = null
		this.SetActive(false)
		this.destroy()
	}
	b.destroy = function () {
		this.W().DestroyBody(this)
	}
	b.setDestroy = function () {
		return this.K('destroy')
	}
	b.setDestroyIf = function (data) {
		if (this.is(data)) {
			this.setDestroy()
		}
	}
}
function proxy() {
	b.de = function (den) {
		if (U(den)) {
			return this.list().GetDensity()
		}
		this.each(function (f) {
			f.SetDensity(den)
		})
		this.ResetMassData()
		return this
	}
	b.fr = function (fric) {
		if (U(fric)) {
			return this.list().GetFriction()
		}
		this.each(function (f) {
			f.SetFriction(fric)
		})
		return this
	}
	b.re = function (rest) {
		if (U(rest)) {
			return this.list().GetRestitution()
		}
		this.each(function (f) {
			f.SetRestitution(rest)
		})
		return this
	}
}
function xyr() {
	b.rt = function (angle) {
		var g = G(arguments),
				ang = g[0],
				newAng,
				currAng = Math.toDegrees(this.GetAngle())
		if (U(ang)) {
			return currAng
		}
		if (g.p) {
			newAng = currAng + ang
		}
		else if (g.n) {
			newAng = currAng - ang
		}
		else if (g.m) {
			newAng = currAng * ang
		}
		else if (g.d) {
			newAng = currAng / ang
		}
		else {
			newAng = ang
		}
		this.SetAngle(Math.toRadians(newAng))
		return this
	}
	b.fixedRot = b.sFR = b.fR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
	b.XY = function (x, y) {
		var newPos
		if (x === '*') {
			x = Math.random() * 10
		}
		if (y === '*') {
			y = Math.random() * 10
		}
		if (U(x)) {
			var pos = this.GetPosition()
			return pos.mult()
		}
		y = N(y) ? y : x
		newPos = V(x / 30, y / 30)
		this.SetPosition(newPos)
		return this
	}
	b.X = function (x) {
		var g = G(arguments), pos = this.XY()
		if (U(x = g[0])) {
			return pos.x
		}
		this.XY($.update(pos.x, x, g), pos.y)
		return this
	}
	b.Y = function (y) {
		var g = G(arguments), pos = this.XY()
		if (U(y = g[0])) {
			return pos.y
		}
		this.XY(pos.x, $.update(pos.y, y, g))
		return this
	}
}
function force() {
	b.I = function self(impulse, point, point2) {
		if (U(impulse)) {
			impulse = this.worldVec().div(40)
		}
		if (N(point)) {
			impulse = V(impulse, point)
			point = point2
		}
		if (U(point)) {
			point = this.GWC()
		}
		this.ApplyImpulse(impulse, point)
		return this
	}
	b.F = function (v, c, c2) {
		if (N(c)) {
			return this.F(V(v, c), c2)
		}
		if (U(c)) {
			c = this.GWC()
		}
		this.ApplyForce(v, c)
		return this
	}
}
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//if( ! o.$$ == 0 ){ makeShapeOnDblClk() }
// $.gameController().A();
//cjs.Ticker.removeAllEventListeners()
 