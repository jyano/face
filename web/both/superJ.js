_D = function (a) {return !_.isUndefined(a)}
D = function (a, b, c) {
	return U(b) ? _D(a)
			: _.defaults.apply(_.defaults, arguments)
}
U = function (a, b) {
	if (_D(b)) {
	}
	return _.isUndefined(a)
}
A = _.isArray
AA = function (a) {
	return A(a) && A(a[0])
}
B = _.isBoolean
F = function f(fn, dfFn) {
	return fn && _.isFunction(fn)
}
V = function (x, y) {
	return {x: x, y: y}
}
N = function (n, n2) {
	if (U(n2)) {
		return _.isNumber(n)
	}
	return _.tN(n, n2)
}//N = _.isNumber
N0 = function (n) {
	return N(n, 0)
}//N = _.isNumber
N1 = function (n) {
	return N(n, 1)
}//N = _.isNumber
O = function (a, b) {
	if (_.isUndefined(b)) {
		return _.isObject(a)
	}
	if (_.isObject(a)) {
		// return  _.extend.apply(_.extend, arguments)
	}
}
I = function (f, i) {
	var g = G(arguments), clear
	if (F(g[0])) {
		f = g[0];
		i = g[1]
	}
	else {
		f = g[1];
		i = g[0]
	}
	i = !N(i) ? 1000 : i > 5 ? i : i * 1000
	if (g.N) {
		f()
	}
	clear = setInterval(f, i)
	return function () {
		clearInterval(clear)
	}
}
S = function (a) {
	return _.isString(a)
}
$a = function (ob, met, arr) {
	var g = G(arguments)
	if (g.t) {
		return g.f[g.s].apply(g.f, g.t)
	}
	return g.f.apply(null, g.s)
}
R = function (n, n2) {
	var num
	n = N(n) ? n : 1
	n2 = N(n2) ? n2 : 0
	return M.round((M.random() * n) + n2)
	function alt(n, n2) {
		var num
		if (O(n)) {
			n = n.length
		}
		n = N(n) ? n : 1
		n2 = N(n2) ? n2 : 0
		num = (M.random() * n) + n2
		return M.floor(num)
	}
}
_v = function (a) {
	return S(a) ? function () {
		Function(a)()
	} :
			F(a) ? a : F(a.value) ?
					a.value() : a.value
}
_.gS = function (pop) {
	//for gen
	var g = G(arguments), that = this
	return function (val) {
		if (U(val)) {
			return this[pop]
		}
		this[pop] = val
		return this
	}
}
_.jS = function (a, b, c) {
	return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)
}
_.jP = function (a, b, c) {
	return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)
}
_.tFn = function (fn, fn2) {
	return F(fn) ? fn : fn2 ? fn2 : function () {
		return
	}
}
M = Math
M.tN = _.tN = function (what, aNum) {
	return N(what) ? what : aNum || 0
}
M.r = M.random
AO = function (a) {
	return A(a) && O(a[0])
}
J = JSON
J.p = J.parse
J.s = J.stringify
$L = $load = function (metNames) {
	var $w = window
	var $l = function (a) {
		console.log(a);
		return a
	}
	var F = _.isFunction
	metNames = _.isArray(metNames) ? metNames : _.toArray(arguments)
	load('_pre0')
	load('_pre')
	load('_pre1')
	load(metNames)
	load('_post0')
	load('_post')
	load('_post1')
	function load(fn) {
		if (!fn) {
			return
		}
		if (_.isArray(fn)) {
			return load.apply(null, fn)
		}
		_.each(arguments, function (fn) {
			fn = $w[fn];
			if (F(fn)) {
				fn()
			}
		})
	}
	
	/*
	 $L = $load = function (metNames) {
	 var $w = window,
	 $l = function (a) {
	 console.log(a);
	 return a
	 },
	 F = _.isFunction
	 metNames = _.isArray(metNames) ? metNames : _.toArray(arguments)
	 load('_pre0')
	 load('_pre')
	 load('_pre1')
	 load(metNames)
	 load('_post0')
	 load('_post')
	 load('_post1')
	 function load(fn) {
	 if (!fn) {
	 return
	 }
	 if (_.isArray(fn)) {
	 return load.apply(null, fn)
	 }
	 _.each(arguments, function (fn) {
	 fn = $w[fn];
	 if (F(fn)) {
	 fn()
	 }
	 })
	 }
	 }
	 */
}
$A = Array;
$B = Boolean;
$N = Number;
$O = Object;
$F = Function;
$S = String;
gee()
consol()
function gee() {
	G = function (arg, str) {//history: conflict with N(not neg) and N(g.$ && N(g.f) ) .. resolved!
		var ag = _.tA(arguments), p, n, m, d, g
		
		function setA() {
			
			//G('k', arguments)
			if (S(ag[0])) {
				g = _.tA(ag[1])
				if (S(g[0])) {
					g[ag[0]] = g.shift()
				}
			}
			else {
				g = _.tA(ag[0])
			}
			//G(arguments, 'k')
			if (S(ag[1]) && S(_.l(g))) {
				g[ag[1]] = g.pop()
			}
			if (_.l(g) == '+') {
				p = g.pop()
			}
			else if (_.l(g) == '-') {
				n = g.pop()
			}
			else if (_.l(g) == '*') {
				m = g.pop()
			}
			else if (_.l(g) == '/') {
				d = g.pop()
			}
			_.df(g, {
				f: _.f(g), s: g[1], t: g[2],
				fo: g[3], fi: g[4], si: g[5],
				se: g[6], ei: g[7], ni: g[8], te: g[9],
				l: _.l(g), r: _.r(g), i: _.i(g),
				L: g.length, z: g.length,
				p: p, m: m, d: d, n: n
			})
			if (A(g.f)) {
				g.f0 = g.f[0]
				g.f1 = g.f[1]
			}
		}
		
		setA()
		function numArgs() {
			g.u = U(g.f);
			g.U = !g.u
			var str = ''
			_.t(g.L, function () {
				str += '$'
			})
			g[str] = 1
		};
		numArgs()
		function gStr() {
			g.S = g.$ && S(g.f)
			g._S = S(g.l)
			g.$S = g.S_ = S(g.f)
			g.$_S = S(g.s)
		};
		gStr()
		function gNum() {
			g.N = g.$ && N(g.f)
			g.N_ = N(g.f);
			g._N = N(g.l)
			g.$N = N(g.f)
			g.$_N = N(g.s)
		};
		gNum()
		function gArr() {
			g.A = g.$ && A(g.f)
			g.A_ = A(g.f);
			g._A = A(g.l)
			g.SA = g.$$ && g.S_ && A(g.s)
		};
		gArr()
		function gFn() {
			g.F = g.$ && F(g.f);
			g.F_ = F(g.f);
			g._F = F(g.l)
		};
		gFn()
		function gOb() {
			g.O = g.$ && O(g.f)
			g.O_ = O(g.f)
			g._O = O(g.l)
			g.OO_ = O(g.f) && O(g.s)
		};
		gOb()
		function gEach() {
			g.e = function (fn, str) {
				var g = this
				if (str) {
					g.e(
							function (g) {
								fn[str](g)
							}
					)
					return fn
				}
				_.e(g, fn)
				return g
			}
			g.e0 = function (fn) {
				_.e(this[0], fn)
			}
			g.e1 = function (fn) {
				_.e(this[1], fn)
			}
			g.eR = function (fn) {
				_.eR(this, fn)
			}
			g.eF = function (fn) {
				_.e(g.f, fn)
			}
			g.eS = function (fn) {
				this.e(
						function (k) {
							if (S(k)) {
								fn(k)
							}
						}
				)
			}
		};
		gEach()
		function gAdv() {
			g.G = function (a) {
				a = _.clone(a)
				if (g.n) {
					a.push('-')
				}
				else if (g.p) {
					a.push('+')
				}
				else if (g.d) {
					a.push('/')
				}
				else if (g.m) {
					a.push('*')
				}
				return a
			}
			g.g = g.G(g)
			g.a = g.ap = function () {
				var g = this, gg = G(arguments)
				//if(g.A){
				return gg.s ?
						$a(gg.s, gg.t, g.f) :
						$a(gg.f, g.f)
			}
			g.ush = function (d) {
				var g = this,
						res
				if (U(d)) {
					d = null
				}
				g.t = g.s
				g.s = g.f
				g.f = d
				if (A(g.f)) {
					g.f0 = g.f[0]
					g.f1 = g.f[1]
				}
				res = g.unshift(d)
				return res
			}
		};
		gAdv()
		return _g = g
	}
	G._ = function () {
		g = G(arguments)
		alert("$l(g.L + ' args')")
	}
	TXG = function () {
		doIt('haha', 4, '-')
		function doIt() {
			var g = G(arguments)
			$l(_g = g)
			console.dir(g)
		}
	}
}
function consol() {
	$l = function (a) {
		console.log.apply(console, arguments)
		return a
		var g = G(arguments), v
		if (O(a) && N(a.x) && N(a.y)) {
			v = a.toFixed()
			//  $l(v.x + ' , ' + v.y)
			return a
		}
		_.e(
				g, function (a) {
					console.log(
							_.isFunction(a) ? a.toString()
									: O(a) ? JSON.stringify(a)
									: a
					)
				}
		)
		return a
	}
 
	$z = function (z) {
		console.error(z)
	}
	$d = function (o) {
		console.dir(o);
		return o
	}
}
 
//S.r = function (a, b) {var g = G(arguments);return g.n ? s$(a).chompRight(b).s : s$(a).ensureRight(b).s}

_.slash = function (str) {
	alert('_.slash')
	var hasSlash = str[0] == '/'
	return hasSlash ? str : '/' + str
} //= _.ensureSlash
//_.left = function (a, b) {var g = G(arguments);return S(b) ? (!g.m ? s$(a).ensureLeft(b).s : s$(a).chompLeft(b).s) : 0}

S.eL = function (a, b) {
	b = b || '/';
	if (a.indexOf(b) === 0) {
		return b
	}
	return b + a
}
S.startsWith = function (str, prefix) {
	return str.lastIndexOf(prefix, 0) === 0;
}

S.endsWith = function (str, suffix) {
	var l = str.length - suffix.length;
	return l >= 0 && str.indexOf(suffix, l) === l;
}
_.eW = function (str, fn) {
	
	//use 1:ends With
	if (S(fn)) {
		return s$(str).endsWith(fn)
	}
	//use 2:each(in a string) With
	var arr = _.compact(_.map(str.trim().split(' '),
			function (str) {
				return str.trim()
			}))
	if (fn) {
		_.e(arr, function (str) {
			fn(str)
		})
	}
	return arr
}

S.eR = S.ensureRight = function (str, suffix) {
	if (S.endsWith(str, suffix)) {
		return str
	}
	return str + suffix
	/*
	
	 S.eR = function (a, b) {
	 S.eR = function (a, b) {
	 return s$(a).ensureRight(b).s
	 }
	 b = b || '/';
	 if (a.indexOf(b) === 0) {
	 return b
	 }
	 return b + a
	 }
	
	 */
},
	 
	_.rp = function (a, b, c) {
		return a.replace(b || '#', c || '')
	}
	_.spl = function (a, b) {
		return String(a).split(b)
	}
	_.bf = function (a, b) {
		return a.split(b || '.')[0]
	} //before('.')


				
	S.ct = S.contains = function (str, ss) {
		return str.indexOf(ss) >= 0;
	}
	_.fCC = function (a) {
		return String.fromCharCode(a)
	}
	_.tS = function (a) {
		return a.toString()
	}
	_.j = function (a, b) {
		return (a || []).join(b || ' ')
	}
	//case
	_.tU = _.tUc = _.tUC = function (a) {
		return S(a) ? a.toUpperCase() :
				A(a) ? _.m(a, function (a) {
					return S.tU(a)
				}) : a
	}
	_.iU = function (a) {
		if (S(a)) {
			return s$(a).isUpper()
		}
	}
	_.tLc = _.tL = _.tLC = function (a) {
		return a.toLowerCase()
	}
 
S.cR = function (a, b) {
	return s$(a).chompRight(b).s
}
S.cL = function (a, b) {
	return s$(a).chompLeft(b).s
}
_.src = function (a) {
	a = a || ''
	a = _.ext(a);
	return S.startsWith(a, '/') ? a : '/' + a
}
_.ext = S.ext = function (a, b) {
	if (S(a)) {
		return S.ct(a, '.') ? a :
				S.eR(a, b || '.png')
	}
}
_.crs = function (a) {
	return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
_.url = function (a) {
	alert('S.url')
	return 'url("' + a + '")'
}
_.iDU = function (a) {
	return _.ct(a, 'data:')
	return s$(a).contains('data:')
}
superMath()
function superMath() {
	M.fl = M.floor
	M.c = M.cos;
	M.s = M.sin
	M.tD = M.toDegrees = tDeg = function (r) {
		return r * (180 / M.PI)
	}
	M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
		if (O(degs)) {
			degs = degs.rotation
		}
		return degs * M.PI / 180
	}
	M.av = M.avg = M.average = function self(a, b) {
		var g = G(arguments), z = _.size(g), n = 0;
		if (A(a)) {
			return _a(self, a)
		}
		if (O(a)) {
			return V(
					M.av(a.x, b.x),
					M.av(a.y, b.y)
			)
		}
		_.e(g, function (a) {
			n += a
		})
		return n / z
	}
	M.dst = M.distance = dst = function self(a, b) {
		M.xyz = xyz = function (a, b) {
			a = a || {};
			a.x = a.x || 0;
			a.y = a.y || 0;
			a.z = a.z || 0
			b = b || {};
			b.x = b.x || 0;
			b.y = b.y || 0;
			b.z = a.z || 0
			return sqr(a.x - b.x, a.y - b.y, a.z - b.z)
			function sqr(a, b) {
				var g = G(arguments)
				return M.sqrt(U(b) ? a
						: sq.apply(this, g))
			}
			
			function sq(a) {
				var g = G(arguments), n = 0
				_.each(g, function (a) {
					n += (a * a)
				})
				return n
			}
		}
		if (A(a) && U(b)) {
			return self(a[0], a[1])
		}
		if (U(b)) {
			return xyz(M.V({}), M.V(a))
		}
		return xyz(M.V(a), M.V(b))
	}
	M.lD = M.dist = M.lineDistance = function (p1, p2) {
		var xs = 0, ys = 0;
		p1 = V(p1)
		p2 = V(p2)
		xs = p2.x - p1.x;
		xs = xs * xs;
		ys = p2.y - p1.y;
		ys = ys * ys;
		return M.sqrt(xs + ys);
	}
	M.lC = M.lineCenter = function (x1, y1, x2, y2) {
		if (A(x1)) {
			if (N(x1[3])) {
				return center(x1[0], x1[2], x1[2], x1[3])
			}
			return center(x1[0], x1[1], y1[0], y1[1])
		}
		if (O(x1)) {
			return center(x1.x, x1.y, y1.x, y1.y)
		}
		return center(x1, y1, x2, y2)
		function center(x1, y1, x2, y2) {
			var x, y
			if (x1 > x2) {
				upperX = x1;
				lowerX = x2
			}
			else {
				upperX = x2;
				lowerX = x1
			}
			if (y1 > y2) {
				upperY = y1;
				lowerY = y2
			}
			else {
				upperY = y2;
				lowerY = y1
			}
			x = lowerX + (upperX - lowerX) / 2
			y = lowerY + (upperY - lowerY) / 2
			return V(x, y)
		}
	}
	M.pIC = M.pointInCircle = function (x, y, circle) {
		var withinX, withinY
		withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
		withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
		return withinX && withinY
	}//Y.pointInCircle = pntInCir =
	M.pIR = M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
		var withinX, withinY
		var halfwidth = (rect.width || rect.w) / 2
		var halfheight = (rect.height || rect.h) / 2
		//assumes center
		withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
		withinY = y < rect.y + halfheight && y > rect.y - halfheight
		return withinX && withinY
	}
	M.circlesOverlap = function (c1, c2) {
		alert('M.circlesOverlap')
		var sum, dist, rads
		sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
		dist = sqrt(sum)
		rads = c1.r + c2.r
		return rads < dist
	}
	M.warp = function (lowBound, highBound, cushion) {//wrp=
		cushion = cushion || 0
		return function (num) {
			return num < lowBound ? highBound - cushion
					: num > highBound ? lowBound + cushion
					: num
		}
	}
	M.u = _.upd = function (curr, update, g) {
		var res
		if (g.p) {
			res = curr + update
		}
		else if (g.n) {
			res = curr - update
		}
		else if (g.m) {
			res = curr * update
		}
		else if (g.d) {
			res = curr / update
		}
		else res = update
		return res
	}
	_.sz = _z = function z(a, b, c) {
		return U(b) ? _.size(a)
				: N(b) ? _z(a) == b
				: _z(a) == _z(b)
	}
	_.adj = function (income, tax) {
		//tax ~ deltaLimit ~ buffer
		var income = income || 0, tax = tax || 0
		if (income > 0) {
			return income > tax ? income - tax : 0
		}
		return -income > tax ? income + tax : 0
	}
	_.cap = function (n, m, M) {
		if (U(m)) {
			return n
		}
		if (A(m)) {
			M = m[1]
			m = m[0]
		}
		return n < m ? m
				: n > M ? M
				: n
	}
	_.tF = function (a, b) {
		b = N(b, 2)
		return a.toFixed(b)
	}
	_.pI = M.pI = _.tI = function (a, b) {
		if (U(b)) {
			return parseInt(a)
		}
		return parseInt(_.tN(a, b))
		//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}
	}
	_.pF = parseFloat
	M.os = function (arr, x, y) {
		if (!arr) {
			return $al('M.os needs arr')
		}
		if (A(arr[0])) {
			return _.m(arr, function (pt) {
				pt[0] = pt[0] + N(x, 0)
				pt[1] = pt[1] + N(y, 0)
				return pt
			})
		}
		return _.m(arr, function (pt) {
			pt = V(pt)
			pt.x += N(x, 0)
			pt.y += N(y, 0)
			return pt
		})
	}
}
BOTH = function () {
	console.log('BOTH')
	arr = ['a', 'b', 'c']
	_.in(1, function () {
		_.e(arr, function (a) {
			$l(a)
		})
	})
}
$lL = function () {
	G(arguments).e(function (mt) {
		if (F(mt)) {
			mt()
		}
	})
}
_.set = function (ob, mt, v) {
	ob[mt](v);
	return ob
}
$sOb = function (ob) {
	ob.ex = function (mt) {
		if (F(this[mt])) {
			return this[mt]()
		}
	}
	ob.r = ob.run = function (mt) {
		this.ex(mt);
		return this
	}
	ob.s = ob.set = function (pp, v) {
		this[pp] = v;
		return this
	}
	ob._S = ob._Set = function (mt, pp) {
		var ob = this;
		ob[mt] = function (v) {
			ob[pp] = v;
			return ob
		}
	}
	ob._G = ob._Get = function (mt, pp) {
		this[mt] = function (pp) {
			return this[pp]
		}
	}
	ob.S = ob.Set = function (mt, pp) {
		var ob = this;
		ob[mt] = function (v) {
			ob[pp](v);
			return ob
		}
	}
	ob.G = ob.Get = function (mt, pp) {
		this[mt] = function (pp) {
			return this[pp]()
		}
	}
	ob.GS = function (mt, g, s) {
		this[mt] = function (val) {
			return U(val) ? this[g]() : this[s](val)
		}
	}
}
_.run = function () {
	var g = G(arguments)
	return g.F_ ? g.f.apply(null, g.r) : false
}
_.fnEv = function () {
	var g = G(arguments)
	var secs = g.N_ ? g.shift() : 1
	_.run(g.shift())
	_.ev(secs, function () {
		_.run(g.shift())
	})
}
/*
 PN = function (n, n2) {
 if (U(n2)) {return ( _.isNumber(n)&&n<0)||1}
 return _.tN(n, n2)
 }//N = _.isNumber
 */
$RE = function (rx, flags) {
	return new RegExp(rx, flags)
}
$REi = function (rx) {
	return new RegExp(rx, 'i')
}
S.slash = function(str){
	return S.eR('/', str)
}
obX = function (o) {
	var g = G(arguments);
	return !O(o) ? {}
			: g.p ? o.clone()
			: o
}