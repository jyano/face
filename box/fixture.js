
f = b2d.Dynamics.b2Fixture.prototype
fd = fD=b2d.Dynamics.b2FixtureDef.prototype
def()
fxPt()
 
function def() {
	fd.H = fd.setShape = function (shape) {
		if (U(shape)) {
			return this.shape
		}
		this.shape = shape;
		return this
	}
	fd.den = fd.d = function (den) {
		if (U(den)) {
			return this.density
		}
		this.density = den;
		return this
	}
	fd.frc = fd.fric = fd.f = function (fric) {
		if (U(fric)) {
			return this.friction
		}
		this.friction = fric;
		return this
	}
	fd.rst = fd.rest = fd.r = function (rest) {
		if (U(rest)) {
			return this.restitution
		}
		this.restitution = rest;
		return this
	}
	fd.grp = fd.group = fd.index = fd.gI = function (a) {
		if (U(a)) {
			return this.filter.groupIndex
		}
		this.filter.groupIndex = a;
		return this
	}
	fd.cat = fd.category = fd.cB = function (a) {
		if (U(a)) {
			return this.filter.categoryBits
		}
		this.filter.categoryBits = a;
		return this
	}
	fd.msk = fd.mask = fd.mB = function (a) {
		if (U(a)) {
			return this.filter.maskBits
		}
		this.filter.maskBits = a;
		return this
	}
	fd.bit = fd.bits = function (cat, mask) {
		return this.cat(cat).mask(mask)
	}
	fd.vrt = fd.verts = function () {
		var shape = this.shape,
				verts = shape.m_vertices,
				verts = [
					verts[0].mult(),
					verts[1].mult(),
					verts[2].mult(),
					verts[3].mult()]
		return $l(verts)
	}
	fd.sen = fd.sensor = fd.iS = function (isSensor) {
		if (U(isSensor)) {
			return this.isSensor
		}
		this.isSensor = isSensor ? true : false
		return this
	}
	fd.box = fd.sAB = function (a, b, p, A) {
		if (!p) {
			this.shape.SetAsBox(a / 30, b / 30)
		}
		else {
			this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
		}
		return this
	}
	/*
	 f.set=function(x,y){//dep?
	 this.shape.Set(x,y)
	 return this
	 }
	
	 f.sAB=function(a,b,p,A){//dep?
	 if(!p){this.shape.SetAsBox(a/30,b/30)}
	 else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
	 return this}
	 */
//fd.sSAP  = fd.setShapeAsAPoly=function(){
// return this.H( b2d.polyShape())}
	fd.K = fd.addClass = function (clas) {
		if (U(clas)) {
			return this.getClass()
		}
		this.classes = this.classes || []
		this.classes.push(clas)
		return this
	}
	fd.getClasses = fd.getClass = function () {
		var g = G(arguments), classes
		this.classes = this.classes || []
		classes = this.classes.join(' ')
		if (g.p) {
			classes += ' : ' + this.body().getClasses()
		}
		return classes
	}
	fd.D = fd.data = function (data) {
		if (U(data)) {
			return this.userData
		}
		this.userData = data;
		return this
	}
	fD.fr = fD.f = fD.frc = fD.fric = function (f) {
		var fD = this
		if (U(f)) {
			return this.friction
		}
		fD.friction = f
		return fD
	}
	fD.d = fD.den = function (d) {
		var fD = this
		if (U(d)) {
			return fD.density
		}
		fD.density = d;
		return fD
	}
	fD.r = fD.bo = fD.rst = fD.rest = function (r) {
		var fD = this
		if (U(r)) {
			return fD.restitution
		}
		fD.restitution = r;
		return fD
	}
	fD.sen = fD.sensor = fD.iS = function (isSensor) {
		if (U(isSensor)) {
			return this.isSensor
		}
		this.isSensor = isSensor ? true : false
		return this
	}
	fD.K = function (k) {
		var fD = this
		if (U(clas)) {
			return fD.getClass()
		}
		fD.classes = fD.classes || []
		fD.classes.push(clas)
		return fD
	}
	fD.getClasses = fD.getClass = function () {
		var g = G(arguments), fD = this, classes
		fD._K = fD._K || []
		ks = fD.classes.join(' ')
		if (g.p) {
			ks += ' : ' + fD.body().getClasses()
		}
		return ks
	}
	fD.D = fD.data = function (data) {
		if (U(data)) {
			return this.userData
		}
		this.userData = data;
		return this
	}
	FDEF = function () {
		w = b2d.W()
		x = w.brick(400, 400, 200, 300)
		b = w.dyn(200, 400,
				b2d.poly(100, 200).K('fffffff sf')
		)
	}
	fD.H = function (h) {
		if (U(h)) {
			return this.shape
		}
		this.h = h
		return this
	}
	fD.de = function (de) {
		if (U(de)) {
			return this.density
		}
		this.density = de;
		return this
	}
	fD.fr = function (fric) {
		if (U(fric)) {
			return this.friction
		}
		this.friction = fric;
		return this
	}
	fD.re = function (rest) {
		if (U(rest)) {
			return this.restitution
		}
		this.restitution = rest;
		return this
	}
	fD.fr = fD.f = fD.frc = fD.fric = function (f) {
		var fD = this
		if (U(f)) {
			return this.friction
		}
		fD.friction = f
		return fD
	}
	fD.de = fD.d = fD.den = function (d) {
		var fD = this
		if (U(d)) {
			return fD.density
		}
		fD.density = d;
		return fD
	}
	fD.re = fD.r = fD.bo = fD.rst = fD.rest = function (r) {
		var fD = this
		if (U(r)) {
			return fD.restitution
		}
		fD.restitution = r;
		return fD
	}
///
	fD.sen = fD.sensor = fD.iS = function (isSensor) {
		if (U(isSensor)) {
			return this.isSensor
		}
		this.isSensor = isSensor ? true : false
		return this
	}
}
function fxPt() {
	f.B = f.body = f.gB = f.getBody = function () {
		return this.GetBody()
	}
	f.K = f.uD = function (data) {
		if (U(data)) {
			return this.GetUserData()
		}
		this.SetUserData(data);
		return this
	}
	f.re = f.r = f.bo = f.rest = function (rest) {
		if (U(rest)) {
			return this.GetRestitution()
		}
		this.SetRestitution(rest);
		return this
	}
	f.fr = f.f = f.fric = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.de = f.d = f.den = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		this.body().ResetMassData()
		return this
	}
	f.GN = f.N = f.next = function () {
		return this.GetNext()
	}
	f.B = f.body = function () {
		return this.GetBody()
	}
	f.kill = function () {
		var f = this, b = f.B(), w = b.W()
		if (!f) {
			return
		}
		if (w._fPreKill) {
			w._fPreKill(f)
		}
		if (b) {
			b.rmF(f)
		}
	}//= f.xx = f.remove
	f.killB = f.kB = f.xB = f.xX = f.XX = function () {
		if (this && this.B()) {
			this.B().kill()
		}
	}
	f.sen = function (s) {
		var f = this
		if (U(s)) {
			return f.IsSensor()
		}
		if (s == '/') {
			s = f.SetSensor(!f.IsSensor())
		}
		else {
			f.SetSensor(s ? true : false)
		}
		return f
	}
	f.rt = f.rot = function (rot, g) {
		return this.B().rot(rot, g)
	}
	f.lV = function () {
		var f = this, b = f.B(), g = G(arguments)
		b.lV.apply(b, g)
		return f
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
	f.dyn = function () {
		var b = this.B();
		b.dyn.apply(b, arguments);
		return this
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.W = function () {
		return this.B().W()
	}
	f.iSt = f.iS = function () {
		return this.B().iS()
	}
	f.iDy = f.iD = function () {
		return this.B().iD()
	}
	f.iKi = f.iK = function () {
		return this.B().iK()
	}
	f.isBType = f.isType = function (t) {
		var f = this
		if (t) {
			return f.bType() == t
		}
	}
	f.bType = function () {
		return this.B().GetType()
	}
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
	f.kill = function () {
		var f = this, b = f.B(), w = b.W()
		if (!f) {
			return
		}
		if (w._fPreKill) {
			w._fPreKill(f)
		}
		if (b) {
			b.rmF(f)
		}
	}//= f.xx = f.remove
	f.killB = f.kB = f.xB = f.xX = f.XX = function () {
		if (this && this.B()) {
			this.B().kill()
		}
	}
	f.N = f.next = function () {
		return this.GetNext()
	}
	f.sen = function (s) {
		var f = this
		if (U(s)) {
			return f.IsSensor()
		}
		if (s == '/') {
			s = f.SetSensor(!f.IsSensor())
		}
		else {
			f.SetSensor(s ? true : false)
		}
		return f
	}
	f.r = f.bo = f.rest = function (rest) {
		if (U(rest)) {
			return this.GetRestitution()
		}
		this.SetRestitution(rest);
		return this
	}
	f.rot = function (rot, g) {
		return this.B().rot(rot, g)
	}
	f.fr = f.f = f.fric = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.d = f.den = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		this.body().ResetMassData()
		return this
	}
	f.lV = function () {
		var f = this, b = f.B(), g = G(arguments)
		b.lV.apply(b, g)
		return f
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
	f.dyn = function () {
		var b = this.B();
		b.dyn.apply(b, arguments);
		return this
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.B = f.body = function () {
		return this.GetBody()
	}
	f.W = function () {
		return this.B().W()
	}
	f.iS = function () {
		return this.B().iS()
	}
	f.iD = function () {
		return this.B().iD()
	}
	f.iK = function () {
		return this.B().iK()
	}
	f.isBType = f.isType = function (t) {
		var f = this
		if (t) {
			return f.bType() == t
		}
	}
	f.bType = function () {
		return this.B().GetType()
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
	f.next = function () {
		return this.GetNext()
	}
	f.den = f.d = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		this.body().ResetMassData()
		return this
	}
	f.fric = f.f = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.rest = f.r = function (rest) {
		if (U(rest)) {
			return this.GetRestitution()
		}
		this.SetRestitution(rest);
		return this
	}
	f.kill = f.remove = function () { // if(this.sprite  ){this.sprite.remove()}
		this.removeSprites()
		this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
	}
	f.removeSprites = function () {
		var f = this
		f.sprites = f.sprites || []
		_.each(f.sprites,
				function (s) {
					if (O(s) && s.parent) {
						s.remove()
					}
				}
		)
		f.sprites = []
		return this
	}
	f.sen = f.sensor = function (sen) {
		var f = this
		if (U(sen)) {
			sen = !f.m_isSensor
		}
		f.m_isSensor = sen
		return this
	}
	f.isSen = function (isSensor) {
		return this.m_isSensor
	}
	f.grp = function (i) {
		var fl = this.GetFilterData()
		if (U(i)) {
			return fl.groupIndex
		}
		fl.groupIndex = i
		this.SetFilterData(fl)
		return this
	} //get/set for groupIndex
	f.cent = f.center = function () {
		var bounds = this.GetAABB()
		return Math.lineCenter(bounds.lowerBound, bounds.upperBound).mult()
	}//center point of its BOUNDING BOX
	f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
		var f = this, b = f.body(), w = b.wor(),
				g = G(arguments), v = V(g[0], g[1]),
				res = f.H().testPoint(b.transform(), v.div())
		if (g.p) {
			b.wor().dot(v)
		}
		return res
	}//is a point within the fixture // very accurate
	f.coll = function (what, func) {
		var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
		// you can specify what happens when a fixture hits:
		//ANYTHING
		// body/fixt of certain kind
		// specific fixt
		// specific body
		//but it its callback ALWAYS passed back the other fixt that was actually hit
		// and 'this' is set to THIS fixt within the cb
		//should cover class AND fixt AND body cases!!!
		if (F(what)) {
			func = what;
			what = ''
		}
		func = _.bind(func, fixt)
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (fixt.is(fA) && fB.of(what)) {
				func(fB, cx)
			}
			if (fixt.is(fB) && fA.of(what)) {
				func(fA, cx)
			}
		})
		return this
	}
	f.shp = f.H = f.shape = function (h) {//should let user specify dimensions of shape, not just have to pass formed shape in
		if (U(h)) {
			return this.GetShape()
		}
		this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
		return this
	}
	f.hType = function () {
		return this.shp().m_type
	}
	f.isCirc = function () {
		return this.hType() == 0
	}
	f.rad = function () {
		return this.shp().m_radius * 30
	}
	f.pos = function () {
		var h = this.shp()
		return V(h.m_p.x, h.m_p.y).mult()
	}// for circs
	f.verts = function () {
		var f = this, b = this.body(), g = G(arguments)
		//local verts
		var verts = _.map(f.shp().m_vertices, b2d.mult)
		//local verts rotated locally by body's rotation
		if (g.p) {
			verts = _.map(verts, function (v) {
				return v.rot(b.rot())
			})
		}
		return verts
	}
	f.wVerts = f.V = function () {
		var f = this, b = f.body(),
				g = G(arguments)
		//give world verts of fixt rotated (or optionally, not rotated for some reason)
		var verts = g.N ? f.verts('+') : f.verts()
		return _.map(verts, function (v) {
			return v.add(b)
		})
	}
	f.poly = f.polyVerts = function () {
		return Math.poly(this.V())
	}
	f.sub = f.DIF = f.DIFF = function (b2) {
		var f = this, g = G(arguments), b2 = g[0]
		f.body().conc(f.minus(b2))
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	f.minus = f.diff = function (bOrF) {
		var f = this, b = f.body(), verts, poly
		//can handle a fixt OR a body! or even a gPoly itself!
		poly = f.polyVerts().difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
		_.each(_.rest(arguments), function (bOrF) {
			poly = poly.difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
		})
		if (b2d.hasVerts(poly)) {
			return b.rel(poly)
		}
	}
	f.union = function (f2) {
		var f = this,
				b = f.body(), p //can handle a fixt OR a body!
		if (A(f2)) {
			return this.union.apply(this, f2)
		}
		p = f.polyVerts().union(
				f2.polyVerts()
		)
		_.each(_.rest(arguments), function (f) {
			p = p.union(f.polyVerts())
		})
		return b.rel(p)
	}
	f.area = function () {
		return Math.poly(this.V()).getArea()
	}
//easel
	f.stg = function () {
		return this.wor().s
	}
	f.dot = function (col) {
		var f = this, w = f.wor(), cent = f.cent()
		if (S(col)) {
			w.dot(col, cent)
		} else {
			w.dot(cent)
		}
		return this
	}
	f.dots = function () {
		b2d.polyDot(this.wVerts())
		return this
	}
	f.dyn = function () {
		var b = this.B();
		b.dyn.apply(b, arguments);
		return this
	}
	f.C = f.color = function (c1, c2) {
		var f = this, b = f.body(),
				w = b.wor(), shape, rad, pos
		c1 = c1 || 'b'
		c2 = c2 || c1
		if (f.isCirc()) {
			rad = f.rad()
			pos = f.pos()
			shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
		}
		else {
			shape = w.s.shape().poly(f.verts(), c1, c2, 1)
		}
		f.removeSprites()
		f.bindSprite(shape)
		// return this
	}
	f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
		var g = G(arguments)
		gg = g
		alpha = N(alpha) ? alpha : 1
		obj.opacity(alpha)
		//takes any display object.  right now, just used for shapes
		//because bindSprite fetches the bm's by string.
		//but when i set up preloader, then i would use this i suppose :)
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var f = this,
				body = this.body(),
				stage = body.wor().s
		startingRotation = N(startingRotation) ? startingRotation : 0
		//f.sprite = obj
		//f.sprite.a2(stage)
		o = obj.a2(stage)
		f.sprites = f.sprites || []
		f.sprites.push(obj)
		//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {//if(!f.sprite){return}
			obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
			obj.rotation = body.rot() + startingRotation
		})
		return this
	}
//proxy to BODY methods
	f.B = f.body = f.gB = f.getBody = function () {
		return this.GetBody()
	}
	f.wor = function () {
		return this.body().wor()
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
	f.isStat = function () {
		return this.B().isStat()
	}
	f.isDyn = function () {
		return this.B().isDyn()
	}
	f.isKin = function () {
		return this.B().isKin()
	}
	f.bType = function () {
		return this.B().GetType()
	}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
	f.isBType = f.isType = function (t) {
		if (t) {
			return this.bType() == t
		}
	}
	f.rot = function (rot, g) {
		return this.B().rot(rot, g)
	}
	f.killBody = function () {
		this.B().kill()
	}
	f.cancel = function () {
		this.body().cancel();
		return this
	}
	f.switchTo = function (co) {
		this.body().switchTo(co);
		return this
	}
//OLD
	f.setKill = function () {
		var f = this, b = f.body(), w = b.wor()
		w.flag(flagNum = Math.random())
		cjs.tick(function () {
			if (w.flagged(flagNum)) {
				f.kill()
			}
		})
	}//clever use of flagging.. but not needed
	f.Vold = function () {//f.rotVerts=
		return this.wVerts()
		newX = function (x, y, rot) {
			rot = Math.toRadians(rot)
			x *= Math.cos(rot).toFixed(3)
			y *= Math.sin(rot).toFixed(3)
			return x - y
		}
		newY = function (x, y, rot) {
			rot = Math.toRadians(rot)
			return (x * Math.sin(rot)) + (y * Math.cos(rot))
		}
		var verts = this.verts(), b = this.B()
		return _.map(verts, function (v) {
			var x = v.x, y = v.y
			return V(
					newX(x, y, b.rot()) + b.X(),
					newY(x, y, b.rot()) + b.Y())
		})
	}//this becomes wVerts
	f.DIFFold = function (b2) {
		var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
		// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
		diff = f.minus(b2)
		//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
		// b.conc(   b.rel(diff) )
		b.conc(diff)
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	f.is = function (kindOrFixt) {
		if (S(kindOrFixt)) {
			return this.K() == kindOrFixt
		}
		if (b2d.isFixt(kindOrFixt)) {
			return this == kindOrFixt
		}
		return false
	}
	f.of = function (what) {
		return this.is(what) || (this.B().K() == what)
		return false
	}
	f.remove = function () {
		this.B().destroyFixt(this)
	}
	f.kill = function () {
		if (this.sprite) {
			this.sprite.remove()
		}
		this.remove();
		return
	}
	f.coll = function (what, func) {
		var that = this, beginFunc
		if (F(what)) {
			func = what
			func = _.bind(func, this)
			beginFunc = function (cx) {
				if (cx.A() == that) {
					func(cx.B())
				}
				if (cx.B() == that) {
					func(cx.A())
				}
			}
			w.begin(beginFunc)
			return this
		}
		func = _.bind(func, this)
		if (S(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.B().of(what)) {
					func(cx.B())
				}
				if (cx.B() == that && cx.A().of(what)) {
					func(cx.A())
				}
			}
		}
		else if (b2d.isFixt(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.B() == what) {
					func(cx.B())
				}
				if (cx.B() == that && cx.A() == what) {
					func(cx.A())
				}
			}
		}
		else if (b2d.isBody(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.b() == what) {
					func(cx.B())
				}
				if (cx.B() == that && cx.a() == what) {
					func(cx.A())
				}
			}
		}
		w.begin(beginFunc)
		return this
	}
	f.next = function () {
		return this.GetNext()
	}
	f.de = f.den = f.d = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		return this
	}
	f.fr = f.fric = f.f = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.re = f.rest = f.r = function (rest) {
		if (U(rest)) {
			return this.GetRestitution()
		}
		this.SetRestitution(rest);
		return this
	}
	f.H = function (shape) {
		if (U(shape)) {
			return this.GetShape()
		}
		this.m_shape = shape
		return this
	}
	f._mD = function () {
		return this.GetMassData()
	}
	f.mD = function () {
		var d = this.GetMassData()
		d.c = d.center
		d.m = d.mass
		return d
	}
	f.mass = function () {
		return this._mD().mass
	}
}
function fuk() {
	f.iC = f.isCir = function () {
		return this.H() && this.H().m_type == 0
	}
	f.xy = f.XY = f.pos = function () {
		var f = this;
		if (!f.isCir()) {
			return V(0, 0)
		}
		var h = f.H()
		return V(h.m_p.x, h.m_p.y).m()
	}
	f.x = f.X = f.pX = function () {
		return this.XY().x
	}
	f.y = f.Y = f.pY = function () {
		return this.XY().y
	}
	f.hT = f.hType = function () {
		return this.H() && this.H().m_type
	}
};
fuk()
function fxShape() {
	fD.asBox = function (a, b) {
		this.shape.SetAsBox(a / 30, b / 30)
		return this
	}
	fD._sAOB = function (a, b, p, aa) {
		this.shape.SetAsOrientedBox(a, b, p, aa)
		return this
	}
	fD.asOrBox = function (a, b, p, aa) {
		return this._sAOB(a / 30, b / 30, p, aa)
	}
	fD.box = fD.sAB = function (a, b, p, A) {
		if (!p) {
			this.shape.SetAsBox(a / 30, b / 30)
		}
		else {
			this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
		}
		return this
	}
	fD.H = function (h) {
		if (U(h)) {
			return this.shape
		}
		this.shape = h
		return this
	}
	fD.vrt = fD.verts = function () {
		var h = this.H()
		var verts = h.vs()
		return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
	}
	f.rad = function () {
		return this.H().m_radius * 30
	}
	f.iC = function () {
		return this.H() && this.H().m_type == 0
	}
	f.getShape = f.H = function (h) {
//should let user specify dimensions of shape, 
// not just have to pass formed shape in
		if (U(h)) {
			return this.GetShape()
		}
		this.m_shape = h
		// it DOES WORK! 
		return this
		// but is this much different than 
		// just replacing the fixt?
	}
	f.pos = function () {// for circs
		return V(this.H().m_p.x * 30, this.H().m_p.y * 30)
	}
	f.pX = function () {
		return this.pos().x
	}
	f.pY = function () {
		return this.pos().y
	}
	f.hT = f.hType = function () {
		return this.H().m_type
	}
	f.cen = f.mid = f.cent = f.center = function () {
		//center point of its BOUNDING BOX
		var f = this, b = f.B(), w = b.W(), g = G(arguments),
				bd = f.GetAABB(),
				v = M.lC(bd.lowerBound, bd.upperBound).mult()
		if (g.p) {
			w.dot(v)
		}
		return v
	}
}