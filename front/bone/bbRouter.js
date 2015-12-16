R$ = function (ob) {
	return Bb.R.x(ob || {})
}
_R = function (ob) {//metaClass
	ob = ob || {}
	if (ob.i) {
		ob.initialize = ob.i
	}
	if (ob.$) {
		ob.initialize = function () {
			Bb.h.start({pushState: true})
			if (F(ob.$)) {
				ob.$()
			}
		}
	}
	if (ob.x) {
		ob.index = ob.x
	}
	if (ob.h) {
		ob.home = ob.h
	}
	ob.routes = ob.R ? ob.R : ob.routes || ob.rt || ob.r || {}
	ob.routes[''] = ob.routes[''] || 'index'
	ob.routes = _.x({'': '_'}, ob.routes)
	ob.routes['*other'] = 'd'
	ob = _.x({
		_: function () {
			$l('INDEX ( _ ) ')
		},
		d: function (other) {
			$l('DEFAULT(d): "' + other + '"')
		}
	}, ob)
	return R$(ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
} //metaClass.. no need for 'new' //= $$R
$R = function (ob) {
	var Rt = _R(ob)
	var rt = new Rt()
	rt._ = function () {
		Bb.history.start()
	}
	rt.$ = function () {
		Bb.history.start({pushState: true})
	}
	return rt
}
rtr = ro = rt = Bb.Router.prototype;
Bb.R = Bb.Router;
Bb.R.x = Bb.R.extend
rtr.n = function (url, op) {
	this.navigate(url, op);
	return this
}
rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
	return this.n(url, {trigger: true})
}
rtr.rt = function (rt, fn) {
	var rtr = this
	if (O(rt)) {
		_.e(rt, function (v, k) {
			rtr.rt(k, v)
		})
	}
	else {
		this.on('route:' + rt, fn)
	}
	return this
}  // rtr.A = ro.oR =
rtr.rp = function (url, op) {
	return this._n(url, _.x({replace: true},
			G(arguments).n ? {trigger: true} : {}))
}//navigate: replace
// history:
Bb.h = Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
Bb.H = Bb.History
