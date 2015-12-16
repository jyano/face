$e = require('express')
$e.stc = $e.st = $e.static
$e.rt = $e.r = $e.R = $e.rtr = $Rtr = function (fn, ob) {
	var $e = this
	var rtr = $e.Router()
	rtr.a = rtr.all
	rtr.u = function (a) {
		rtr.use(a)
	}
	r.u = function (a) {
		r.use(a)
	}
	r.u = function (a) {
		r.use(a)
	}
	rtr._g = function () {
		this.get.apply(this, arguments)
		return this
	}
	rtr.g = function () {
		var rtr = this, g = G(arguments)
		if (g.O) {
			_.e(g.f, function (v, k) {
				k = S.slash(k.replace('_', '/'))
				rtr.g(k, v)
			})
		}
		else {
			rtr.get.apply(rtr, g)
		}
		return rtr
	}
	r.g = function () {
		var g = G(arguments)
		if (g.O) {
			_.e(
					g.f, function (v, k) {
						k = S.slash(k.replace('_', '/'))
						r.g(k, v)
					}
			)
		}
		else {
			r.get.apply(r, g)
		}
		return r
	}
	r.g = function () {
		var g = G(arguments)
		if (g.O) {
			_.e(g.f, function (v, k) {
				k = S.slash(k.replace('_', '/'))
				r.g(k, v)
			})
		}
		else {
			r.get.apply(r, g)
		}
		return r
	}
	rtr.d = rtr.del
	rtr.rt = rtr.r = r.route
	rtr.p = rtr.po = r.post
	rtr.pu = rtr.push
	rtr.pm = rtr.param
	rtr.st = rtr.uSt = function (a) {
		return this.u($e.st(a))
	}
	r.st = r.uSt = function (a) {
		return this.u($e.st(a))
	}
	r.st = r.uSt = function (a) {
		return this.u($e.st(a))
	}
	// r.u(E.p)
	if (fn) {
		rtr.u(fn)
	}
	if (ob) {
		return rtr.g(ob)
	}
	return rtr
}
function parPt(pt) {
	if (pt) {
		pt = pt.replace('_', '/')
				.replace('$$', '?')
				.replace('$', ':')
		return S.slash(pt)
	}
}
$a = $e();
$a.u = $a.use;
$a.po = $a.post
$a.get_ = $a.g = function () {
	var $a = this, g = G(arguments)
	if (S(g.f) && U(g.s)) {
		return $a.get(g.f)
	}
	if (g.A) {
		multPaths(g.f)
	}
	else if (g.O) {
		multRts(g.f)
	}
	else {
		$a.get(parPt(g.f), g.r)
	}
	return $a
	function multRts(rtsOb) {
		_.e(rtsOb, function (v, k) {
			$a.g(k, v)
		})
	}
	
	function multPaths(pts, fn1, fn2) {
		_.e(pts, function (pt) {
			$a.g(pt, fn1, fn2)
		})
	}
	
	$a.g = function () {
		var $a = this, g = G(arguments)
		if (S(g.f) && U(g.s)) {
			return $a.get(g.f)
		}
		if (g.A) {
			multPaths(g.f)
		}
		else if (g.O) {
			multRts(g.f)
		}
		else {
			$a.get(parPt(g.f), g.r)
		}
		return $a
		function multRts(rtsOb) {
			_.e(rtsOb, function (v, k) {
				$a.g(k, v)
			})
		}
		
		function multPaths(pts, fn1, fn2) {
			_.e(pts, function (pt) {
				$a.g(pt, fn1, fn2)
			})
		}
	}
}
$a.G = $a.GET = function (url, fn) {
	var $a = this
	$a.get(url, $w.user, fn)
}
$get = function (url, fn) {
	$a.g(url, qp(function (q, p, nx) {
		fn(q, p, nx)
	}, q, p, nx))
}
$a.po = function (a, b, c) {
	return $a.post(a, b, c)
}
$post = function (url, fn) {
	$a.po(url, qp(function (q, p, nx) {
		fn(q, p, nx)
	}, q, p, nx))
}
$a.de = function (a, b, c) {
	return $a.delete(a, b, c)
}
$a.PO = $a.POST = function (url, fn) {
	this.po(url, $w.user, fn)
}
$a.DEL = function (url, fn) {
	this.del(url, $w.user, fn)
}
$a.set_ = $a.s = function (k, v) {
	if (O(k)) {
		_.e(k, function (v, k) {
			$a.set(k, v)
		})
		return $a
	}
	$a.set(k, v)
	$a.s = function (k, v) {
		if (O(k)) {
			_.e(k, function (v, k) {
				$a.set(k, v)
			})
			return $a
		}
		$a.set(k, v)
	}
}
$a.use_ = $a.u = function (a) {
	var $a = this, g = G(arguments)
	if (g.A) {
		_.e(g.f, function (mw) {
			$a.use(mw)
		})
		return $a
	}
	$a.use.apply($a, g)
	return $a
	$a.u1 = function (a) {
		$ = function () {
		}
		$.u1 = $.use = function ($a, g) {
			$a.use.apply($a, g)
			return $a
		}
		$.u = function (mw) {
			$a.use(mw)
		}
		var $e = require('express')
		var $a = $e()
		var $a = this, g = G(arguments)
		g.eaFirIfArr = function (fn) {
			var g = this
			if (g.A) {
				_.e(g.f, fn)
				return true
			}
			return false
		}
		////////
		if (g.eaFirIfArr(use)) {
			return $a
		}
		function use(mw) {
			$a.use(mw)
		}
		
		$a.use.apply($a, g)
		return $a
	}
}
$a.static_ = $a.stc = $a.st = function (statDirs) {
	$a.st = $a.stc = function (statDirs) {
		_.e(statDirs, function (dir) {
			$a.use($e.stc($.j(__dirname, dir)))
		})
	}
}
$a.useStatic = $a.STC = $a.ST = $a.uSt = function (a) {
	return this.use($e.st(a))
} // $a.st DOUBLEDWITH: 'stc'
$a.rt = $a.r = $a.rtr = $a.notGreat = function () {
	var $a = this, g = G(arguments), o
	var rtr = $Rtr()
	//each of the second pam...
	_.e(g.s || {}, function (fn, pt) {
		rtr.get_(parsePth(pt), fn)
	})
	$a.u(parsePth(g.f), rtr)
	return $a
	function parsePth(pt) {
		return S.slash(_.rp(_.rp(_.rp(pt,
				'_', '/'), '$$', '?'), '$', ':'))
	}
}
$a.bP = $a.BODYPARSER = $a.b = function (bP) {
	var $a = this
	$a.u(bP.j())
	$a.u(bP.u({extended: true}))
	return $a
}
$a.bP = $a.b = function (bP) {
	var $a = this
	$a.u(
			bP.j()
	)
	$a.u(
			bP.u({extended: true})
	)
	return $a
}
$a.st = $a.stc = function (statDirs) {
	_.e(statDirs, function (dir) {
		$a.u(ep.stc(pt.j(__dirname, dir)))
	})
}
$a.a = $a.setup = function () {
	$a.views('jade', __dirname + '/../views/')
	$a.port(3456)
	$a.set('cb', function () {
		var add = srv.address()
		$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
	})
	start = function () {
		srv = $a.listen(
				$a.g('port'),
				$a.g('cb')
		)
	}
	return $a
}
$a.st = $a.uSt = function (a) {
	return this.u($e.st(a))
}
$a.l = $a.ls = function (port, fn) {
	var srv
	fn = fn || function () {
		$l('listening on port ' + port)
	}
	srv = this.listen(port, fn)
	return srv
}
$a.vw = $a.v = $a.vws = $a.views = function (eng, dir) {
	$a.s({'view engine': eng, views: dir})
	return $a
}
$a.port = function (port) {
	var $a = this
	if (U(port)) {
		return $a.g('port')
	}
	$a.s('port', port || process.env.PORT || 3333)
	return $a
}
$a.srv = function () {
	var http = require('http').Server($a)
	return http
}
$a.listen_ = $a.ls = $a.l = function (port, fn) {
	_ls = function (port, fn) {
		var srv
		fn = fn || function () {
			$l('listening on port ' + port)
		}
		srv = this.listen(port, fn)
		return srv
	}
	var srv
	fn = fn || function () {
		$l('listening on port ' + port)
	}
	srv = this.listen(port, fn)
	return srv
}
$a.lsSrv = function () {
	var $a = this
	srv.a = function () {
		var a = this.address()
		a.p = a.port
		a.a = a.address
		return a
	}
	$a.ls($a.port(), function () {
		$l(lA + srv.a().p) // $l('listening at ... '+ http:// ' + srv.a + ' : ' +  a.p)
		host = srv.a().a
		port = srv.a().p
		$l('listening still at ' + host + ' ' + port)
	})
}
$a.setup = $a.a = function () {
	$a.a = $a.setup = function () {
		$a.views('jade', __dirname + '/../views/')
		$a.port(3456)
		$a.set('cb', function () {
			var add = srv.address()
			$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
		})
		start = function () {
			srv = $a.listen(
					$a.g('port'),
					$a.g('cb')
			)
		}
		return $a
	}
	$a.views('jade', __dirname + '/../views/')
	$a.port(3456)
	$a.set('cb', function () {
		var add = srv.address()
		$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
	})
	start = function () {
		srv = $a.listen(
				$a.g('port'),
				$a.g('cb')
		)
	}
	return $a
}
$a.srv = function () {
	var http = require('http').Server($a)
	return http
}
$a.g = function () {
	var $a = this, g = G(arguments)
	if (S(g.f) && U(g.s)) {
		return $a.get(g.f)
	}
	if (g.A) {
		multPaths(g.f)
	}
	else if (g.O) {
		multRts(g.f)
	}
	else {
		$a.get(parPt(g.f), g.r)
	}
	return $a
	function multRts(rtsOb) {
		_.e(rtsOb, function (v, k) {
			$a.g(k, v)
		})
	}
	
	function multPaths(pts, fn1, fn2) {
		_.e(pts, function (pt) {
			$a.g(pt, fn1, fn2)
		})
	}
}
$a.s = function (k, v) {
	if (O(k)) {
		_.e(k, function (v, k) {
			$a.set(k, v)
		})
		return $a
	}
	$a.set(k, v)
}
$a.po = function (a, b, c) {
	return $a.post(a, b, c)
}
$a.de = function (a, b, c) {
	return $a.delete(a, b, c)
}
$a.v = $a.vw = $a.vws = $a.views = function (eng, dir) {
	$a.s({
		'view engine': eng,
		views: dir
	})
	return $a
}
$a.port = function (port) {
	var $a = this
	if (U(port)) {
		return $a.g('port')
	}
	$a.s('port', port || process.env.PORT || 3333)
	return $a
}
$a.u = function (a) {
	var $a = this, g = G(arguments)
	if (g.A) {
		_.e(g.f, function (mw) {
			$a.use(mw)
		})
		return $a
	}
	$a.use.apply($a, g)
	return $a
}
$a.s = function (ob, v) {
	var $a = this
	if (O(ob)) {
		_.e(ob, function (v, k) {
			$a.set(k, v)
		})
	}
	else {
		$a.set(ob, v)
	}
	return $a
}
$a.g = $a.get;
//$a.s({ port: process.env.PORT || 4000, 'view engine': 'jade', views: __dirname + '/jade/'})
//  $a.ls(port,[hostN],[backlog],[cb])  Binds/listens for cns  on  spec  host/port ~ $h.s.ls()
//    conven met  ~ fn: return http.createServer($a).listen.apply(srv, g) // hSrv = ht.Srv($a, 80)
//$a.s('port', process.env.PORT || 3000)
// $a is req-handling fn ,designed to be passed to $h srv