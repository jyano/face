$l('fiz/collide/cxPt.js says welcome to FIZ !!!')
function contactManager() {
	b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
		var m = new BXD.b2ContactManager
		m.c = m.cl = m.Collide
		m.a = m.aP = m.AddPair
		m.f = m.fNC = m.FindNewContacts
		m.d = m.ds = m.Destroy
		return m
	}
}
function cxBdFx() {
	cx.bA = cx.a = function () {
		return this.A().gB()
	}
	cx.bB = cx.b = function () {
		return this.B().gB()
	}
	cx.fA = cx.A = function () {
		return this.GetFixtureA()
	}
	cx.fB = cx.B = function () {
		return this.GetFixtureB()
	}
	cx.fA = cx.A = function (k) {
		var $$ = this.GetFixtureA()
		return D(k) ? $$.of(k) : $$
	}
	cx.fB = cx.B = function (k) {
		var $$ = this.GetFixtureB()
		return D(k) ? $$.of(k) : $$
	}
	cx.bA = cx.a = function (k) {
		var $$ = this.fA().B()
		return D(k) ? $$.of(k) : $$
	}
	cx.bB = cx.b = function (k) {
		var $$ = this.fB().B()
		return D(k) ? $$.of(k) : $$
	}
}
function linVelWor() {
//linVelFromWorPt()
	b.lVW = function () {
		var b = this, g = G(arguments);
		return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
	}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
//////////}
}
function destroy() {
	cx.ds = cx.destroy = cx.destroyBoth = function () {
		this.a().K('destroy')
		this.b().K('destroy')
		return this
	}
	cx.destroy = cx.destroyBoth = function () {
		this.a().setDestroy()
		this.b().setDestroy()
		return this
	}
}
function prePost() {
	b.pre = function () {
		var b = this, w = b.W(), g = G(arguments)
		w.pre(function (cx) {
			cx.w(b, g.f, g.s, g.t)
		})
	}
	w.pre = function () {
		w._pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
		w.onPre = w.pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
		var w = this, g = G(arguments), o, fn
		if (F(g.t)) {
			fn = function (cx, i) {
				if (cx.w(g.f, g.s)) {
					g.t(cx)
				}
			}
		}
		else if (F(g.s)) {
			fn = function (cx, i) {
				cx.w(g.f, function (f) {
					_.b(g.s, this)(f, cx, i)
				})
			} //this good
		}
		else {
			fn = g.f
		}
		//fn=$.mo(.2,fn) //this will break it!!
		w.pH.push(fn)
		return w
		function pre() {
			w.pre = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PRE.push(fn)
				})
				return w
			}
		}
		
		function alt() {
			w.pre = function () {
				var w = this, g = G(arguments), o, fn
				w._pre = function () {
					var that = this
					_.each(arguments, function (func) {
						that.preHandlers.push(func)
					})
					return this
				}
				//this good
				//fn=$.mo(.2,fn) //this will break it!!
				return w._pre(
						F(g.t) ?
								function (cx, i) {
									if (cx.w(g.f, g.s)) {
										g.t(cx)
									}
								} :
								F(g.s) ?
										function (cx, i) {
											cx.w(g.f, function (f) {
												_.b(g.s, this)(f, cx, i)
											})
										} :
										g.f
				)
			}
		}
	}
	w.preCl = function () {
//  preSolve(){
		var w = this, g = G(arguments)
		w.pre(function (cx) {
			cx.w.apply(cx, g)
		})
		return w
	}
	w.post = w.po = function () {
		var w = this, g = G(arguments)
		g.e(function (fn) {
			w.PH.push(
					function (cx, I) {
						var i = _.m(I.normalImpulses, M.fl)[0],
								t = _.m(I.tangentImpulses, M.fl)[0]
						return fn(
								cx, i, t)
					})
		})
		return w
		function alt() {
			w.post = w.po = function () {
				var w = this, g = G(arguments)
				g.e(function (fn) {
					w.PH.push(
							function (cx, I) {
								var i = _.m(I.normalImpulses, M.fl)[0],
										t = _.m(I.tangentImpulses, M.fl)[0]
								return fn(
										cx, i, t)
							})
				})
				return w
			}
			w.po = w.post = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PO.push(fn)
				})
				return w
			}
			w.post = function () {
				var that = this
				_.e(arguments, function (func) {
					that.postHandlers.push(func)
				})
				return this
			}
		}
	}
} 