$L()

Rtr = R$ = function (ob) {return Bb.R.x(ob || {})}

$R = function (ob) {ob = ob || {}
	ob.routes = ob.R ? ob.R : 
	ob.routes || ob.rt || ob.r || {} //if (ob.i) {ob.initialize = ob.i}
		//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
		//if (ob.x) {ob.index = ob.x}
		//if (ob.h) {ob.home = ob.h}
		//ob.routes[''] = ob.routes[''] || 'index'
		//ob.routes = _.x({'': '_'}, ob.routes)
		//ob.routes['*other'] = 'd'
		//ob = _.x({
		//_: function () {$l('INDEX ( _ ) ')},
		//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
		//}, ob)
		//return function (a, b, c, d) {return new Rt(a, b, c, d)}
	   //metaClass.. no need for 'new' //= $$R
	var Rt = Bb.R.x(ob)
	var rt = new Rt()
	//rt._ = _$start
	//rt.$ = $start
	return rt
}
 
function _pre() {
	Bb.R = Bb.Router
	Bb.R.x = Bb.R.extend
	
	_$start = function () {
		Bb.h.start()
	}
	
	$start = function () {
	
		Bb.h.start({pushState: true})
	}
	
	$route = function (Rtr) {
		var rtr = new Rtr;
		$start();
		return rtr
	}
	Router = function () {
		rtr = ro = rt = Bb.Router.prototype;
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
 	_$r = function (ob) {var rt = $R(ob); rt._(); return rt}
 $rR = function (ob) {return _$r({r: ob})}
	}
	Bb.h = Bb.history
	Bb.h.tr = Bb.h.trigger
	Bb.h.s = Bb.h.start
	Bb.H = Bb.History
	$RoApp = function (name, fn) {
		startRtr = function (name) {
			Bb.h.start({
				pushState: true,
				root: "/mvc/" + name + "/"
			})
		}
		
		$Fn(name, function () {
			Ap = {M: {}, V: {}, C: {}}
			$l('name: ' + (name = _.tU(name)))
			$rtHeader(name)
			d = $.dI('ct').fS(40)
			fn();
			startRtr(name)
		})
	}
}
ROUTEZ = function () {
	$.h4('routez (pushState=false)')
	sty()
	setup();
	Bb.LinkView = function (lbTx, aTx, href) {
		var content = $.__d($.lb(lbTx), $.br(), $.a(aTx, '#' + href))
		return Bb.contentView(content)
	}
	$R({
		initialize: function () {
			_$start()
		},
		r: {'': 'pg1', pg1: 'pg1', pg2: 'pg2'},
		pg2: Bb.LinkView('welcome to page 2!', 'go to page 1', 'pg1'),
		pg1: Bb.LinkView('welcome to page 1!', 'go to page 2', 'pg2')
	})
	function setup() {
		
		Bb.InitView = function (fn) {
			return Bb.V.x({initialize: fn})
		}
		Bb.V.auto = Bb.InitView(function () {
			this.R()
		})
		Bb.V.ctAuto = Bb.V.auto.x({el: $('#ct')})
		Bb.contentView = function (link) {
			var children = A(link) ? link : arguments
			return function () {
				new (Bb.V.ctAuto.x({R: ren}))
				function ren() {
					var q = this.$el.E()
					_.e(children, function (child) {
						q.A(child)
					})
				}
			}
		}
	}
	
	function sty() {
		$.fS(60).dI('ct')
		$s({
			$: {C: 'g', M: 10},
			d: {M: 12, B: '8px dotted orange'},
			label: {fS: 80, c: 'y', C: 'z', B: '4px dotted r'}
		})
	}
}