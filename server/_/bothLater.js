function both() {
	_.x = _.extend
	_.fW = _.fWh = _.findWhere
	M = Math
	M.lD = M.lineDistance
	M.tR = M.toRadians
	M.tD = M.toDegrees
	_.e = _.each
	_.m = _.map
	_.b = _.bind
	M.r = M.random
	_.ran = _.random
	_.pI = parseInt
	_.t = _.times
	_.f = _.first
	_.r = _.rest
	_.i = _.initial
	_.l = _.last
	_.sT = setTimeout
	_.rj = _.reject
	_.ev = function (sec, fn) {
		return setInterval(fn, sec * 1000)
	}
	_.in = function (sec, fn) {
		return setTimeout(fn, sec * 1000)
	}
	_.ct = _.contains
	M.lineDistance = function (point1, point2) {
		var xs = 0;
		var ys = 0;
		xs = point2.x - point1.x;
		xs = xs * xs;
		ys = point2.y - point1.y;
		ys = ys * ys;
		return Math.sqrt(xs + ys);
	}
	cjs.waitFor = function (time) {
		time = N(time) ? time : 1000
		cjs.wait = true
		setTimeout(function () {
			cjs.wait = false
		}, time)
	}
	$.inASec = function (func) {
		return setTimeout(func, 1000)
	}
	$t = function (fn) {
		cjs.t(fn)
	}
	$rG = $rGx = function () {
		return cjs.rect.apply(cjs, arguments)
	}
	$r2G = $r2Gx = function () {
		return cjs.rect2.apply(cjs, arguments)
	}
	$cG = $cGx = function () {
		return cjs.circ.apply(cjs, arguments)
	}
	_.sI = function (fn, ms) {
		return setInterval(fn, ms)
	}
	keyObj = {
		up: 38, u: 38,
		down: 40, d: 40,
		left: 37, l: 37,
		right: 39, r: 39,
		space: 32, s: 32,
		enter: 13, e: 13
	}
	$.tK = $.tKey = $toKey = keyObj.par = function (k) {
		k = k.toLowerCase()
		return keyObj[k] ? keyObj[k] : k
	}
	$.K = function (k, fn) {
		if (O(k)) {
			_.e(k, function (fn, k) {
				if (s$(k).isUpper()) {
					$.thisKeyup(k, fn)
				}
				else {
					_key(k, fn)
				}
			})
			return $
		}
		return $.thisKeydown(fn)
	}
	$.K.ob = function () {
		_.e(k, function (fn, k) {
			if (s$(k).isUpper()) {
				$.thisKeyup(k, fn)
			}
			else {
				_key(k, fn)
			}
		})
		return $
	}
	$.keydown = function (fn) {
		$('body').on('keydown', fn)
	}
	$.keyup = function (fn) {
		$('body').on('keyup', fn)
	}
	$.thisKeyup = function (k, fn) {
		k = $toKey(k)
		$.keyup(function (e) {
			if (e.which == k) {
				fn(e)
			}
		})
	}
	$.thisKeydown = function (k, fn) {
		k = $toKey(k)
		$.keydown(function (e) {
			if (e.which == k) {
				fn(e)
			}
		})
	}
	K = cjs.Keys = function (o) {//if (!O(o)) {return}
		if (F(o.u)) {
			$t(function () {
				if (K.u) {
					o.u(K.u)
				}
			})
		}
		if (o.U) {
		}
		if (F(o.d)) {
			$t(function () {
				if (K.d) {
					o.d(K.d)
				}
			})
		}
		if (F(o.l)) {
			$t(function () {
				if (K.l) {
					o.l(K.l)
				}
			})
		}
		if (F(o.r)) {
			$t(function () {
				if (K.r) {
					o.r(K.r)
				}
			})
		}
	}
	$K = function () {
		K.l = K.left = false
		K.r = K.right = false
		K.u = K.up = false
		K.d = K.down = false
		K.dir = 0
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			K.l = K.left = true
			K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			K.l = K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			K.r = K.right = true
			K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			K.r = K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			K.u = K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			K.u = K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			K.d = K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			K.d = K.down = false
		})
	} //= cjs.watchKeys
	_.z = _.size
//s$ = S;
	$A = Array;
	$B = Boolean;
	$N = Number;
	$O = Object;
	$F = Function;
	$S = String;
	J = $J = JSON
	M = Math
	U = function u(a, b) {
		if (_.isUndefined(b)) {
			return _.isUndefined(a)
		}
		// return  _.extend.apply(_.extend, arguments)
	}
	A = _.isArray
	AA = function (a) {
		return A(a) && A(a[0])
	}
	B = _.isBoolean
	D = function (a, b, c) {
		return _.isUndefined(b) ? !_.isUndefined(a)
				: _.defaults.apply(_.defaults, arguments)
	}
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
	/*
	 PN = function (n, n2) {
	 if (U(n2)) {return ( _.isNumber(n)&&n<0)||1}
	 return _.tN(n, n2)
	 }//N = _.isNumber
	 */
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
	_.fn = _v = function (a) {
		return S(a) ? function () {
			Function(a)()
		} :
				F(a) ? a : F(a.value) ?
						a.value() : a.value
	}
	_.b = _.bind
	_.l = _.last;
	_.f = _.first;
	_.i = _.initial;
	_.r = _.rest
	_.e = _.each;
	_.m = _.map;
	_.t = _.times
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
	_.z = _.size
	_.x = _.extend;
	_.p = _.partial;
	_.tA = function (a) {
		return O(a) ? _.toArray(a) : A(a) ? a : a ? [a] : []
	}
	_.df = _.defaults
	M.tN = _.tN = function (what, aNum) {
		return N(what) ? what : aNum || 0
	}
	_.tF = function (a, b) {
		b = N(b, 2)
		return a.toFixed(b)
	}
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
	M.warp = function (lowBound, highBound, cushion) {//wrp=
		cushion = cushion || 0
		return function (num) {
			return num < lowBound ? highBound - cushion
					: num > highBound ? lowBound + cushion
					: num
		}
	}
	_.upd = M.u = function (curr, update, g) {
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
	_.pI = M.pI = _.tI = function (a, b) {
		if (U(b)) {
			return parseInt(a)
		}
		return parseInt(_.tN(a, b))
		//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}
	}
	_.sI = function (a, b) {
		return setInterval(a, b)
	}
	_.ev = function (n, fn) {
		setInterval(fn, n * 1000)
	}
	_.sT = function (fn, ms) {
		return setTimeout(fn, ms)
	}
	_.in = function (time, fn) {
		var g = G(arguments),
				o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
		o.s = N(o.s) ? o.s : 1
		o.fn = o.fn || function () {
		}
		return setTimeout(
				function () {
					if (g.m) {
						$.C($r())
					}
					o.fn()
				},
				o.s * 1000)
	}
	_.tU = _.tUc = _.tUC = function (a) {
		return S(a) ? a.toUpperCase() :
				A(a) ? _.m(a, function (a) {
					return S.tU(a)
				}) : a
	}
	_.tL = _.tLc = _.tLC = function (a) {
		return a.toLowerCase()
	}
	$l = function (a) {
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
	$l = function (a) {
		console.log.apply(console, arguments)
		return a
	}
	$z = function (z) {
		console.error(z)
	}
	$d = function (o) {
		console.dir(o);
		return o
	}
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
	_.doEv = _.andThen = function (ev, fn) {
		fn()
		_.ev(ev, fn)
	}
///// new:
	$l_ = function () {
		var g = G(arguments)
		if (b2d.test || w.test) {
			_.e(g, function (str) {
				$l(str)
			})
		}
		return g.f
	}
	_.rv = function (ar) {
		return ar.reverse()
	}
	_.spl = function () {
		var g = G(arguments), o
		// spl is a good function
		//...
		o = N(g.t) ? {ar: g.f, ix: g.s, numToRm: g.t, it: _.r(g, 3)} :
				N(g.s) ? {ar: g.f, ix: g.s, it: _.r(g, 2)}
						: A(g.f) ? {ar: g.f, it: g.r} : {it: g}
		o.ar = o.ar || []
		o.ix = N(o.ix, 0) //   where to add/remove items ( neg vals ~   pos from the end )
		o.numToRm = N(o.numToRm, 0)//  num items to rm
		if (g.p) {
			$l('ar before: ')
			$l(o.ar)
		}
		var res = o.ar.splice.apply(o.ar, [o.ix, o.numToRm].concat(o.it))
		if (g.p) {
			$l('spl res: ')
			$l(res)
			$l('ar after: ')
			$l(o.ar)
		}
		return res
	}
	_.spl.TX = SPL = function () {
		_.spl(yanofski, 2, 2, 'y', 'o', '+')
	}
	_.iO = function (ar, it) {
		ar = A(ar) ? ar : [ar]
		return ar.indexOf(it)
	}
	_.iO.TX = IXO = function () {
		i = _.iO(yA, 'a')
		$l('i: ' + i)
		i = _.iO(yA, 'f')
		$l('i: ' + i)
	}
	_.rm = function (ar, ix) {
		var g = G(arguments)
		ix = ix || g.n ? _.z(ar) - 1 : 0
		return _.spl(ar, ix, 1)
	}
	_.rmAll = function (ar, s) {
		var g = G(arguments), ix, n
		g.e(function () {
			if (_.z(ar)) {
				{
					while ((ix = _.iO(ar, s)) != -1) {
						_.spl(ar, ix, 1)
					}
				}
			}
		})
		return ar
	}
	_.wo = _.without
	RMV = function () {//W()
//fruits.reverse();
		//findLastIndex_.findLastIndex(array, predicate, [context])
		//Like _.findIndex but iterates the array in reverse, returning the index closest to the end where the predicate truth test passes.
		//_.findLastIndex(users, {name: 'Ted'});		//=> 3
//	 uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique 
		// Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.
		ar = ['a', 'adsf', 'fsda', 'b', 'q']
		ri = M.floor(M.r() * _.z(ar))
		rs = ar.splice(ri, 1)
		u = _.uniq([1, 2, 1, 4, 1, 3]);
		$l('u');
		$l(u)//=> [1, 2, 4, 3]
		a = _.rmAll(['a', 'b', 'c', 'b', 'b'], 'b')
		$l(a)
	}
	_.inT = function (when, howMany, fn) {
		_.in(when, function () {
			_.t(howMany, fn)
		})
		return _
	}
	AO = function (a) {
		return A(a) && O(a[0])
	}
	_.inEv = w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	_.evIn = w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
	_.ev = function (secs, fn) {
		if (!N(secs)) {
			return _.ev(1, secs)
		}
		setInterval(fn, secs * 1000)
	}
	_.in = function (secs, fn) {
		if (!N(secs)) {
			return _.in(1, secs)
		}
		setTimeout(fn, secs * 1000)
	}
	M = Math
	M.r = M.random
	M.lineDistance = function (point1, point2) {
		var xs = 0;
		var ys = 0;
		xs = point2.x - point1.x;
		xs = xs * xs;
		ys = point2.y - point1.y;
		ys = ys * ys;
		return Math.sqrt(xs + ys);
	}
	b = b2d.Dynamics.b2Body.prototype
	i = ob = p = cjs.DisplayObject.prototype
	_.rj = _.reject
	_.f = _.first
	_.l = _.last
	K = cjs.Keys
	_.e = _.each
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
	_.evs = function () {
		_.each(arguments, function (fn) {
			_.ev(fn)
		})
	}
	_.t = _.times
	_.fW = _.findWhere
}
//old (clHtml.js and Index.js):
/*
 console.log('./lib/both/index.js')
 require('./us')
 require('./str')
 console.log('./lib/both')

 M=Math; M.fl= M.floor;
 M.c= M.cos; M.s= M.sin
 M.av=M.avg= M.average = function self(a,b){var g=G(arguments), z= _.size(g),  n=0;


 if(A(a)){return _a(self,a)}

 if(O(a)){

 return V(
 M.av(a.x,b.x),
 M.av(a.y,b.y)
 )

 }

 _.e(g,function(a){n+=a})
 return n/z
 }
 M.tN=_.tN=function(what, aNum){return N(what)? what: aNum||0  }
 M.u= _.upd= function(curr, update, g){var res
 if(g.p){res = curr + update}
 else if(g.n){res = curr - update}
 else if(g.m){res = curr * update}
 else if(g.d){res = curr / update}
 else res = update
 return res
 }
 M.pI=_.pI = _.tI=function(a,b){
 if(U(b)){return parseInt(a)}
 return parseInt( _.tN(a,b) )}


 _.l= _.last; _.f= _.first; _.i = _.initial; _.r = _.rest
 _.e= _.each; _.m= _.map; _.t=_.times
 _.x=_.extend ;_.df= _.defaults;  _.p= _.partial;
 _.ic= _.include;
 _.wo =_.without; _.cp= _.compact
 _.ks= _.keys;
 _.rs= _.result
 _.tp= _.template

 _.b=function(a,b,c){return F(a)?_.bind(a,b,c)  :_.bindAll(a,b,c)}
 _.tA=function(a){return O(a)?_.toArray(a):[a]}
 _.fl=_.F=function(a){if (A(a)){return _.flatten(a)}}
 _.ey=function(a,b,c){return _.every(a,b,c) }
 _.eW=function(a,b){return s$(a).endsWith(b) }
 _.mo= function(n,fn){return N(n)? _.throttle(fn, n*1000): _.throttle(n, 1000)}
 _.rd=function r(a,b,c,d){return  F(b) && D(c)? _.reduce(a, b, c) : _.reduceRight(a, c, b)}
 _.rp=function(a,b,c){return a.replace(b||'#', c||'')}
 _.rng=function(a,b){var g = G(arguments); return N(b)? _.range(a, b) : g.p? _.range(1, (a||10) + 1 ): _.range(a) }
 _.iv=function(a,b){return  _.invert(a) }
 _.ix=function(a,b){return _.ap(_.intersection, arguments) }

 __='!!!!!!!!!!!!!!!!!!!!!!!!!!!!'

 s$ = S  // ******** must go before 'S' is re-assigned to a bool

 S=function(a){return  _.isString(a)}

 $J=JSON;
 $A=Array;
 $B=Boolean; $N=Number; $O=Object;
 $F=Function; $S=String;





 S.iU= function(a){if(S(a)){return s$(a).isUpper()}}
 S.tU=  _.tU= _.tUC=function(a){
 return a.toUpperCase()
 return S(a)? a.toUpperCase() :A(a)? _.m(a,function(a){return S.tU(a)}):a}
 S.iL=function(a){
 return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a
 //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
 }
 S.tL=_.tL= _.tLC=function(a){         return a.toLowerCase()

 }
 S.cR= function(a,b){return s$(a).chompRight(b).s }
 S.eR=  function(a,b){return s$(a).ensureRight(b).s}
 S.cL= function(a,b){return s$(a).chompLeft(b).s }
 S.eL=  function(a,b){b = b || '/'; return s$(a).ensureLeft(b).s}
 S.x= S.ext=_.ext= function(a, b){if(S(a)){
 return  s$(a).contains('.')  ? a :
 s$(a).ensureRight(b||'.png').s}}

 S.slash= _.slash =_.ensureSlash=function(str){
 var hasSlash = str[0] == '/'
 return hasSlash? str: '/'+str
 }


 S.spl=_.spl=function(a,b){return  String(a).split(b)}
 S.bf=_.bf=function(a,b){return  a.split(b|| '.')[0]}
 S.af=_.af=function(a,b){return  a.split(b || '/')[0] }
 S.S= S.to=_.tS=function(a){return  a.toString()}
 S.ch=_.fCC=function(a){return $S.fromCharCode(a) }

 $l=function(a){var g=G(arguments),v
 if(O(a) && N(a.x) && N(a.y) ){
 v=a.toFixed()
 $l(v.x + ' , ' + v.y)
 return a}
 _.e(g,function(a){
 console.log(
 _.isFunction(a)? a.toString()
 :O(a)? JSON.stringify(a)
 :a
 )
 })
 return a
 }

 G=function(arg, str){var a,ag= _.tA(arguments), p, n, m, d,g
 //conflict with N(not neg) and N(g.$ && N(g.f) )
 if(S(ag[0])){
 a=_.tA(ag[1])
 if(S(a[0])){
 a[ag[0]]=a.shift()}}
 else{a=_.tA(ag[0])}
 if(_.l(a)=='+'){p= a.pop()}
 else if(_.l(a)=='-'){

 n=a.pop()}
 else if(_.l(a)=='*'){m=a.pop()}
 else if(_.l(a)=='/'){d=a.pop()}
 if(S(ag[1])&&S(_.l(a))){a[ag[1]]=a.pop()}
 g =  _.df(a, {
 z: a.length,
 f: _.f(a),
 s: a[1],
 t: a[2],
 l: _.l(a),
 r: _.r(a), i: _.i(a),
 p:p, P:!p, m:m, M:!m,
 d:d, D:!d, n:n, N:!n

 })
 g.u=U(g.f);g.U=!g.u
 g.L=g.length
 str=''
 _.t(g.L,function(){str=str+'$'})
 g[str]=1
 //g.N= g.$ && N(g.f);
 g.N = g.$ && N(g.f)
 g.N_ =N(g.f);
 g._N =N(g.l)
 g.$N= N(g.f)
 g.$_N= N(g.s)
 g.S = g.$ && S(g.f)
 g._S = S(g.l)
 g.$S=  g.S_ = S(g.f)
 g.$_S= S(g.s)
 g.O = g.$ && O(g.f)
 g.O_ = O(g.f)
 g._O = O(g.l)

 g.A= g.$ && A(g.f)
 g.A_= A(g.f);
 g._A= A(g.l)


 g.F=g.$ && F(g.f);g.F_=F(g.f);g._F=F(g.l)
 g.SA=  g.$$ && g.S_ && A(g.s)
 g.OO_ = O(g.f) && O(g.s)
 g.e=function(fn,str){var g=this
 if(str){
 g.e(function(g){fn[str](g)})
 return fn}

 _.e(g,fn)
 return g
 }
 g.e0=function(fn){
 _.e(this[0], fn)
 }

 g.e1=function(fn){
 _.e(this[1], fn)}

 g.eR=function(fn){
 _.eR(this, fn)
 }

 g.eF=function(fn){_.e(g.f, fn)}


 g.eS=function(fn){
 this.e(function(k) {
 if (S(k)){fn(k)}})}
 g.G=function(a){
 a=_.clone(a)
 if(g.n){a.push('-')}
 else if(g.p) {a.push('+')}
 else if(g.d) {a.push('/')}
 else if(g.m) {a.push('*')}
 return a}
 g.g = g.G( g )
 g.a=g.ap=function(){var g=this, gg=G(arguments)

 //if(g.A){

 return gg.s?
 $a(gg.s, gg.t, g.f):
 $a(gg.f, g.f)
 }
 g.ush=function(d){var g=this,
 res

 if(U(d)){d=null}

 g.t=g.s
 g.s=g.f
 g.f=d
 res=g.unshift(d)


 return res}
 return _g=g
 }; G._=function(){g=G(arguments); $l(g.L + ' args')}

 U = function u(a, b) {

 if (_.isUndefined(b)) {
 return _.isUndefined(a)
 }

 // return  _.extend.apply(_.extend, arguments)
 }
 A = _.isArray
 B = _.isBoolean
 D = function (a, b, c) {
 return _.isUndefined(b) ? !_.isUndefined(a)
 : _.defaults.apply(_.defaults, arguments)
 }
 F = function f(a, b, c) {
 //if(_.isDefined(b)){return _.filter(a,b,c)}
 return _.isFunction(a)  // return a.prototype||true

 }
 N = _.isNumber
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
 AA=  _.AA = _.isNested = function(a){return A(a) && A(a[0])}


 _.sT= _.sI=function(a,b){return setTimeout(a,b)}
 _.sI=function(a,b){return setInterval(a,b)}
 _.in=   function(time, fn){var g=G(arguments),
 o= F(g[0])? {fn:g[0]} :{s:g[0], fn:g[1]}
 o.s  =  N(o.s)? o.s: 1
 o.fn= o.fn || function(){}
 return _.sT(function(){
 o.fn()},
 o.s * 1000)
 }

 _.ev= function(n, fn){_.sI(fn, n*1000)
 //  _.iv=function(a,b){if(N(b)){return setInterval(_v(a),b)}}
 }
 _.cI= _.xI=function(n){clearInterval(n)}

 R=function(n,n2){var num
 if(O(n)){n= n.length}
 n=N(n)? n:1
 n2=N(n2)?n2:0
 num= (M.random()*n)+n2
 return M.floor(num)
 }
 $r=function(a,b){
 a = a||'c'; //cannot be 'color' ?? only abr??
 var values = _.values(oO(a))
 return Oo(a,b) || values[_.random(_.size(values)-1)]
 }
 _.RE= _.isRegExp
 $RE=function(a,b,c){return new RegExp(a,b,c)}

 _.j=function(a,b){return(a||[]).join(b||' ')}
 _.ob =  function (a) {return O(a) ? a : {}}
 _.ext = function (o) {o.e = o.extend; return o }
 _.ap  = _a =function (ob, met, arr) {
 var g = G(arguments)
 if (g.t) {

 return g.f[g.s].apply(g.f, g.t)
 }
 return g.f.apply(null, g.s)
 // function (a, b, c) {   return  a.apply(c || a, b) }
 }

 //added

 _.b= _.bind
 //$l = function (a) {console.log(a); return a}
 /*

 $q = require
 $q = function () {
 var g = G(arguments)
 if (g.A) {
 _.e(g.f, function (mu) {
 require(mu)
 })
 }
 else if (g.s) {
 _.e(g, function (mu) {
 require(mu)
 })
 }
 else if (g.f) {
 return require(g.f)
 }
 }
 $Q = function () {
 var g = G(arguments)

 if (g.A) {
 _.e(g.f, function (mu) {
 require(mu)()
 })
 }

 else if (g.s) {
 _.e(g, function (mu) {
 require(mu)()
 })
 }

 else if (g.f) {
 return require(g.f)()
 }
 }


 $d = function (o) {
 console.dir(o);
 return o
 }
 _.gT = function () {
 return $Dt().getTime()
 }
 $z = function (z) {
 console.error(z)
 }
 require('./clHtml')()
 $l('in dat.........................')
 $Dt = Date
 $Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
 $Dt.H = 3600000
 $Dt.U = $Dt.UTC// ?
 // same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
 $Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
 $D = function () {
 var d = new $Dt() // new $Dt(a,b,c,d,e)
 d.s = d.getSeconds
 d.t = function (m) {  //time  num MSs af/bf 1/1/70
 d.sT = d.setTime
 d.gT = d.getTime
 if (U(m)) {
 return this.gT()
 }
 this.sT(m)
 return this
 }
 d.s = function (s) { //secs 0-59
 // $l('d.s')
 var d = this
 d.sS = d.setSeconds
 d.gS = d.getSeconds
 if (U(s)) {
 return d.gS()
 }
 d.sS(s)
 return d
 }
 d.h = function (m) {  //hour 0-23
 d.gH = d.getHours
 d.sH = d.setHours
 if (U(m)) {
 return this.gH()
 }
 this.sH(m)
 return this
 }
 d.d = d.getDay  // day of   week (from 0-6)
 d.D = function (d) {
 var d = this   //date  day of   month (from 1-31)
 d.gD = d.getDate //
 d.sD = d.setDate
 if (U(d)) {
 return this.gD()
 }
 this.sD(d)
 return this
 }
 d.M = function (m) {  //month 0-11
 d.sM = d.setMonth
 d.gM = d.getMonth
 if (U(m)) {
 return this.getMonth()
 }
 this.setMonth(m)
 return this
 }
 d.m = function (m) {//mins 0-59
 d.gMn = d.getMinutes
 d.sMn = d.setMinutes
 if (U(m)) {
 return this.gMn()
 }
 this.sMn(m)
 return this
 }
 d.ms = function (m) { //ms 0-999
 d.gMs = d.getMilliseconds
 d.sMs = d.setMilliseconds
 if (U(m)) {
 return this.gMs()
 }
 this.sMs(m)
 return this
 }
 d.y = function (y) { //fullYear (year Deprecated -> fullYear )
 d.sY = d.setFullYear	//Sets the year (four digits) of dtOb
 d.gY = d.getFullYear//	  year (four digits)
 if (U(y)) {
 return this.gY()
 }
 this.sY(y)
 return this
 }
 //superParse(d)
 //superUTC(d)
 return d
 }
 $D.n = function (a) {
 return $Dt.n(a)
 }
 $D.p = function (a) {
 return $Dt.p(a)
 }
 $D.U = function (a) {
 return $Dt.U(a)
 }
 $now = function () {
 return {t: $D, df: $D.n()}
 }
 $n = $nowPlusWhat_InDateForm = function (plus) {
 var dateNow
 if (U(plus)) {
 return $D.n()
 }
 //plus=plus||0
 dateNow = $D($D.n() + plus)
 return dateNow
 }
 function $superUTC(d) {
 // uniT ms 0-999
 d.sUMs = d.setUTCMilliseconds
 d.gUMs = d.getUTCMilliseconds
 //uniT secs 0-59
 d.SUSc = d.setUTCSeconds
 d.gUSc = d.getUTCSeconds//
 //uniT min 0-59
 d.sUMn = d.setUTCMinutes
 d.gUMn = d.getUTCMinutes
 //uniT hour 0-23
 d.sUH = d.setUTCHours
 d.gUH = d.getUTCHours
 d.gUM = d.getUTCMonth
 d.sUM = d.setUTCMonth
 //uniT dtOb's year (4digs)
 d.sUFY = d.setUTCFullYear
 d.gUFY = d.getUTCFullYear
 //  uniT  dOM 1-31
 d.gUDt = d.getUTCDate
 d.sUDt = d.setUTCDate
 d.U = d.UTC	//num of MSs in a date since midnight of 1/1/70, according to UTC time
 d.gUD = d.getUTCDay	// uniT dOW 0-6
 d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time
 return d
 }
 function $superParse(d) {
 d.tS = d.toString	//dtOb -> str
 d.tI = d.toISOString	//date as a str, using ISO standard
 d.tDt = d.toDateString	//Converts the date portion of   dtOb into a readable string
 d.tLDt = d.toLocaleDateString//	date portion of a dtOb as   string, using locale conventions
 d.tLT = d.toLocaleTimeString	//time portion of  dtOb as   string, using locale conventions
 d.tL = d.toLocaleString	//dtOb -> str, using locale conventions
 d.tT = d.toTimeString	//Converts   time portion of  dtOb to   string
 d.tU = d.toUTCString	//dtOb -> str, by uniT
 d.p = d.parse	//Parses date str  and num   ms snc 1/1/70
 d.j = d.tJ = d.toJSON	//date as   str, formatted as a JSON date
 d.v = d.vO = d.valueOf	//primitive val  of   dtOb
 return d
 }
 function oneHourFromNowInDateForm() {
 return $D.n($D.H)
 }
 module.exports = function () {
 txPl = {"Content-Type": "text/plain"}
 z4 = "404 Not Found\n"
 JS = [
 'both/str',
 'both/us',
 'client/cjs',
 'client/bx',
 'client/both',
 'client/jq',
 'client/jqfn',
 'client/objects',
 'client/clientMore',
 'client/html',
 'client/ip',
 'client/el',
 'client/can', 'client/core'
 ]
 scrTag = function (str) {
 str = str || ''
 return '<script type="text/javascript">' +
 str + '</script>'
 }
 _.tJs = $tJs = function (js) {
 return './' + js + '.js'
 }
 $h1 = function () {
 return '<h1>' + a + '</h1>'
 }
 lk = function () {
 return '<p>'
 + '<a href="/l1">Link1</a>'
 + ' <a href="/l2">Link2</a>'
 + ' <a href="/l3">Link3</a>'
 + '</p>'
 }
 _p = function (s) {
 var g = G(arguments),
 str = ''
 g.e(function (p) {
 str += ( '<p>' + p + '</p>' )
 })
 return str
 }
 }
 */
function bonus() {
	rgba = function () {
		var g = G(arguments),
				o = g.N_ ? {r: g.f, g: g.s, b: g.t, a: g[3]} :
						g.O_ && N(g.s) ? {r: g.f.r, g: g.f.g, b: g.f.b, a: g.s} :
								g.O ? {r: g.f.r, g: g.f.g, b: g.f.b, a: g.f.a} : {}
		o.r = N(o.r, 0)
		o.g = N(o.g, 0)
		o.b = N(o.b, 0)
		o.a = N(o.a, 1)
		var str = 'rgba('
		str = str + o.r + ',' + o.g + ',' + o.b + ',' + o.a
		str += ')'
		return str
	}
	O$ = function (o) {
		return O(o) && !F(o) && !A(o)
	}
	G.e = function (args, fn) {
		G(args).e(fn)
	}
	_.t2 = function () {
		G.e(arguments, function (fn) {
			_.t(2, fn)
		})
	}
	_.t3 = function () {
		G.e(arguments, function (fn) {
			_.t(3, fn)
		})
	}
	_.t4 = function () {
		G.e(arguments, function (fn) {
			_.t(4, fn)
		})
	}
	_.t5 = function () {
		G.e(arguments, function (fn) {
			_.t(5, fn)
		})
	}
	_.t6 = function () {
		G.e(arguments, function (fn) {
			_.t(6, fn)
		})
	}
	_.t7 = function () {
		G.e(arguments, function (fn) {
			_.t(7, fn)
		})
	}
	_.t8 = function () {
		G.e(arguments, function (fn) {
			_.t(8, fn)
		})
	}
	_.t9 = function () {
		G.e(arguments, function (fn) {
			_.t(9, fn)
		})
	}
	_.t10 = function () {
		var g = G(arguments)
		g.e(function (fn) {
			_.t(10, fn)
		})
	}
	_.in2 = function (fn) {
		_.in(2, fn)
	}
	_.in3 = function (fn) {
		_.in(3, fn)
	}
	_.in4 = function (fn) {
		_.in(4, fn)
	}
	_.in5 = function (fn) {
		_.in(5, fn)
	}
	_.in10 = function (fn) {
		_.in(10, fn)
	}
	_.ev2 = function (fn) {
		_.ev(2, fn)
	}
	_.ev3 = function (fn) {
		_.ev(3, fn)
	}
	_.ev4 = function (fn) {
		_.ev(4, fn)
	}
	_.ev5 = function (fn) {
		_.ev(5, fn)
	}
	_.ev10 = function (fn) {
		_.ev(10, fn)
	}
}
bonus()