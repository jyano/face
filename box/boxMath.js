 
v = b2d.Common.Math.b2Vec2.prototype
ab = b2d.Collision.b2AABB.prototype
v.mult = function (num) {
	num = N(num) ? num : 30
	var v = _.clone(this)
	v.Multiply(num)
	return v
}
v.div = function (num) {
	num = N(num) ? num : 30
	return this.mult(1 / num)
}
v.add = function (vec, y) {
	var v = this
	vec = U(vec) ? V(1, 1) : V(vec, y)
	return V(v.x + vec.x, v.y + vec.y)
}
v.sub = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1;
	y = N(y) ? y : x
	var v = V(this.x - x, this.y - y)
	return v
}
v.dec = v.toFixed = function (n) {
	n = N(n) ? n : 2
	var v = V(
			Number(this.x.toFixed(n)),
			Number(this.y.toFixed(n)))
	return v
}
v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
v.m = v.mult = function (num) {
	num = N(num) ? num : 30
	var v = _.clone(this)
	v.Multiply(num)
	return v
}
v.d = v.div = function (num) {
	num = N(num) ? num : 30
	return this.mult(1 / num)
}
v.add = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1
	y = N(y) ? y : x
	var v = V(this.x + x, this.y + y)
	return v
}
v.sub = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1;
	y = N(y) ? y : x
	var v = V(this.x - x, this.y - y)
	return v
}
v.toFixed = function (n) {
	n = N(n) ? n : 2
	var v = V(
			Number(this.x.toFixed(n)),
			Number(this.y.toFixed(n)))
	return v
}
v.a = v.add = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1
	y = N(y) ? y : x
	var v = V(this.x + x, this.y + y)
	return v
}
v.s = v.sub = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1;
	y = N(y) ? y : x
	var v = V(this.x - x, this.y - y)
	return v
}
v.tF = v.toFixed = function (n) {
	n = N(n) ? n : 2
	var v = V(
			Number(this.x.toFixed(n)),
			Number(this.y.toFixed(n)))
	return v
}
v.m = v.mlt = v.mult = function (num) {
	num = N(num) ? num : 30
	var v = _.clone(this)
	v.Multiply(num)
	return v
}
v.d = v.div = function (num) {
	num = N(num) ? num : 30
	return this.mult(1 / num)
}
v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
/*
 b2d.add=function(vs,p){

 return _.m(vs, function(v){

 return v.add(p)

 })
 }*/
v.tF = v.f = v.dec = v.toFixed = function (n) {
	var v = this
	n = N(n, 1)
	return V(
			Number(v.x.toFixed(n)),
			Number(v.y.toFixed(n))
	)
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
v.tA = function () {
	return [this.x, this.y]
}
v.m = v.mult = function (n) {
	n = N(n, 30)
	var v = this
	v = _.clone(v)
	v.Multiply(n)
	return v
}
v.d = v.div = function (n) {
	return this.mult(1 / N(n, 30))
}
v.m = v.mult = function (num) {
	num = N(num) ? num : 30
	var v = _.clone(this)
	v.Multiply(num)
	return v
}
v.d = v.div = function (num) {
	num = N(num) ? num : 30
	return this.mult(1 / num)
}
v.add = v.a = function () {
	var v = this, g = G(arguments), v1
	if (g[2]) {
		return _.m(g, function (g) {
			return v.add(g)
		})
	}
	v1 = g.u ? V(1, 1) : V(g.f, g[1])
	return V(
			v.x + v1.x,
			v.y + v1.y
	)
}
v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
/*
 b2d.add=function(vs,p){

 return _.m(vs, function(v){

 return v.add(p)

 })
 }*/
v.s = v.sub = function () {
	var v = this, g = G(arguments),
			o = V(g[0], g[1])
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
v.tF = v.f = v.dec = v.toFixed = function (n) {
	var v = this
	n = N(n, 1)
	return V(
			Number(v.x.toFixed(n)),
			Number(v.y.toFixed(n))
	)
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
v.tA = function () {
	return [this.x, this.y]
}

ab.lB = ab._lB = function (x, y) {
	this.lowerBound.Set(x, y)
	return this
}
ab.uB = ab._uB = function (x, y) {
	this.upperBound.Set(x, y)
	return this
}
ab.lUB = function () {
	var ab = this, g = G(arguments),
			o = {
				x1: g.f, y1: g.s,
				x2: g.t, y2: g.fo
			}
	if (g.n) {
		o.x1 /= 30;
		o.y1 /= 30;
		o.x2 /= 30;
		o.y2 /= 30
	}
	ab.lB(o.x1, o.y1)
	ab.uB(o.x2, o.y2)
	return ab
}
ab.pt = function (x, y) {
	var g = G(arguments)
	return this.lUB(
			alg(x, '-'), alg(y, '-'), alg(x), alg(y)
	)
	function alg() {
		var g = G(arguments)
		return g.f / 30 + (g.n ? -.01 : .01)
	}
}
 
ab.lB = ab._lB = function (x, y) {
	this.lowerBound.Set(x, y)
	return this
}
ab.uB = ab._uB = function (x, y) {
	this.upperBound.Set(x, y)
	return this
}
ab.lUB = function () {
	var ab = this, g = G(arguments),
			o = {
				x1: g.f, y1: g.s,
				x2: g.t, y2: g.fo
			}
	if (g.n) {
		o.x1 /= 30;
		o.y1 /= 30;
		o.x2 /= 30;
		o.y2 /= 30
	}
	ab.lB(o.x1, o.y1)
	ab.uB(o.x2, o.y2)
	return ab
}
ab.pt = function (x, y) {
	var g = G(arguments)
	return this.lUB(
			alg(x, '-'), alg(y, '-'), alg(x), alg(y)
	)
	function alg() {
		var g = G(arguments)
		return g.f / 30 + (g.n ? -.01 : .01)
	}
}
b2Vec2 = b2d.V = b2d.V2 = b2d.Vec = b2d.M.b2Vec2
b2AABB = b2d.AABB = b2d.C.b2AABB
b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33
vec()
mat()
function mat(){
	b2d.mat22 = function (v1, v2) {
		var m = new b2d.Mat22()
		m.SetVV(v1, v2)
		return m
	}
	b2d.AB = function (x1, y1, x2, y2) {
		var ab = new b2d.Collision.b2AABB()
		ab.lowerBound.Set(x1 / 30, y1 / 30)
		ab.upperBound.Set(x2 / 30, y2 / 30)
		return ab
		function alt() {
			b2d.AABB = function (a, b, c, d) {//this is the one that works!
				var aabb = new b2AABB()
				aabb.lowerBound.Set(a, b)
				aabb.upperBound.Set(c, d)
				return aabb
			}
		}
	}
	$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
		var ab = new b2d.AABB() // ??
		ab.lowerBound.Set(a, b)
		ab.upperBound.Set(c, d)
		return ab
		function alt() {
			$AB = b2d.AB = function () {
				var g = G(arguments), ab = new b2d.Collision.b2AABB
				if (g.p) {
					ab.lUB(g.f, g.s, g.t, g.f)
				}
				else if (U(g.t)) {
					ab.pt(g.f, g.s)
				}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
				else {
					ab.lUB(g.f, g.s, g.t, g.fo, '-')
				}
				return ab
			}
			$AB = b2d.AB = function () {
				var g = G(arguments), ab = new b2d.Collision.b2AABB
				if (g.p) {
					ab.lUB(g.f, g.s, g.t, g.f)
				}
				else if (U(g.t)) {
					ab.pt(g.f, g.s)
				}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
				else {
					ab.lUB(g.f, g.s, g.t, g.fo, '-')
				}
				return ab
			}
			AABB = AB = function (a, b, c, d) {
				var ab = new b2AABB()
				ab.lowerBound.Set(a, b)
				ab.upperBound.Set(c, d)
				return ab
			}//b2d.AB =
		}//get rectangle by two coords
	}
	AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
		return $aB(a - .001, b - .001, a + .001, b + .001)
		function alt() {
			AB001 = function (a, b) {
				return AB(a - .001, b - .001, a + .001, b + .001)
			}
		}
	}
	b2d.AABB01 = function (x, y) {//now used div
		var v = V(x, y).div(),
				x = v.x,
				y = v.y
		return this.AABB(x - .001, y - .001, x + .001, y + .001)
	}
	b2d.tf = function (v1, v2, v3) {
		if (U(v1)) {
			return new b2d.Math.b2Transform()
		}
		if (A(v1)) {
			return b2d.tf(
					V(v1[0], v1[1]),
					V(v1[2], v1[3]),
					V(v1[4], v1[5]))
		}
		var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
		return tf
	}
	b2d.M.b2Transform.prototype.toArr = function () {
		var tf = this
		var pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
}
function vec(){
	_vec = function (o, g) {
		var v = new b2d.Vec(o.x, o.y)
		if (g.n || g.d) {
			v = v.d()
		}
		if (g.p || g.m) {
			v = v.m()
		}
		return v
	}
	_V = function (x, y, x2, y2) {
		var g = G(arguments)
		if (g.A_) {
			return _V.apply(null, g.f)
		}
		return N(g.t) ? {
			x: (g.f - g.t) / 2,
			y: (g.s - g.fo) / 2
		} : N(g.f) ? {x: g.f, y: g.s} : x
	}
	V = function (x, y, x2, y2) {
		var g = G(arguments),
				x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
				v, o
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		if (A(x)) {
			y2 = x[3]
			x2 = x[2]
			y = x[1]
			x = x[0]
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		}
		if (N(y2)) {
			x = (x - x2) / 2
			y = (y - y2) / 2
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		}
		else if (O(x)) {
			o = obX(x)
			x = o.x
			y = o.y
		}
		o.x = N0(o.x)
		o.y = N(o.y, o.x)
		return _vec({x: N0(x), y: N(y, x)}, g)
		function alt() {
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
						v, o
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				if (A(x)) {
					y2 = x[3]
					x2 = x[2]
					y = x[1]
					x = x[0]
					o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				}
				if (N(y2)) {
					x = (x - x2) / 2
					y = (y - y2) / 2
					o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				}
				else if (O(x)) {
					o = obX(x)
					x = o.x
					y = o.y
				}
				o.x = N0(o.x)
				o.y = N(o.y, o.x)
				return _vec({x: N0(x), y: N(y, x)}, g)
			}
			function otherAlts() {
				V = function (x, y, x2, y2) {
					var g = G(arguments),
							x = g[0], y = g[1], x2 = g[2], y2 = g[3],
							vec
					if (A(x)) {
						y2 = x[3];
						x2 = x[2];
						y = x[1];
						x = x[0]
					}
					if (N(y2)) {
						x = (x - x2) / 2;
						y = (y - y2) / 2
					}
					else if (O(x)) {
						y = F(x.Y) ? x.Y() : x.y
						x = F(x.X) ? x.X() : x.x
					}
					x = N(x) ? x : 0
					y = N(y) ? y : x
					vec = new b2d.Common.Math.b2Vec2(x, y)
					if (g.n || g.d) {
						vec = vec.div()
					}
					if (g.p || g.m) {
						vec = vec.mult()
					}
					return vec
					function alt() {
						V = function (x, y, x2, y2) {
							var g = G(arguments),
									x = g[0], y = g[1], x2 = g[2], y2 = g[3],
									vec
							if (A(x)) {
								y2 = x[3];
								x2 = x[2];
								y = x[1];
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2;
								y = (y - y2) / 2
							}//for dist difs?
							else if (O(x)) {
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x) ? x : 0
							y = N(y) ? y : x
							vec = new b2d.M.b2Vec2(x, y)
							if (g.n || g.d) {
								vec = vec.div()
							}
							if (g.p || g.m) {
								vec = vec.mult()
							}
							return vec
						}
					}
				}
				V = function (x, y, x2, y2) {
					var g = G(arguments),
							x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
							v
					if (A(x)) {
						y2 = x[3]
						x2 = x[2]
						y = x[1]
						x = x[0]
					}
					if (N(y2)) {
						x = (x - x2) / 2
						y = (y - y2) / 2
					}
					else if (O(x)) {
						if (b2d.iF(O(x))) {
							x = x.B()
						}
						y = F(x.Y) ? x.Y() : x.y
						x = F(x.X) ? x.X() : x.x
					}
					x = N(x, 0)
					y = N(y, x)
					v = new b2d.Common.Math.b2Vec2(x, y)
					if (g.n || g.d) {
						v = v.d()
					}
					if (g.p || g.m) {
						v = v.m()
					}
					return v
					function alt() {
						V = function (x, y, x2, y2) {
							var g = G(arguments), x = g[0], y = g[1], x2 = g[2], y2 = g[3], v
							if (A(x)) {
								y2 = x[3];
								x2 = x[2];
								y = x[1];
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2;
								y = (y - y2) / 2
							}//for dist difs?
							else if (O(x)) {
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x) ? x : 0
							y = N(y) ? y : x
							v = new b2d.Common.Math.b2Vec2(x, y)
							if (g.n || g.d) {
								v = v.div()
							}
							if (g.p || g.m) {
								v = v.mult()
							}
							return v
						}
						V = function (x, y, x2, y2) {
							var g = G(arguments),
									x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
									v
							if (A(x)) {
								y2 = x[3]
								x2 = x[2]
								y = x[1]
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2
								y = (y - y2) / 2
							}
							else if (O(x)) {
								if (b2d.iF(O(x))) {
									x = x.B()
								}
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x, 0)
							y = N(y, x)
							v = new b2d.Common.Math.b2Vec2(x, y)
							if (g.n || g.d) {
								v = v.d()
							}
							if (g.p || g.m) {
								v = v.m()
							}
							return v
						}
					}
				}
			}
		}
	}
	V0 = function (x, y) {
		if (O(x)) {
			return V0(V(x).x, V(x).y)
		}
		return {x: N0(x), y: N0(y)}
	}
	b2d.xy = function (o) {
		if (b2d.iF(O(o.x))) {
			o.x = o.x.B()
		}
		if (O(o.x)) {
			o.x = F(o.x.X) ? o.x.X() : o.x.x
		}
		if (O(o.y)) {
			o.y = F(o.x.Y) ? o.x.Y() : o.x.y
		}
		return o
	}
	b2d.d = b2d.div = function (v) {
		return V(v).div()
	}
	b2d.m = b2d.mult = function (v) {
		return V(v).mult()
		function alt() {
			b2d.m = function (vs) {
				return _.m(vs, b2d.mult)
			}
		}
	}
}