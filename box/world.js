$L('can', 'grav')
$Wor = function () {
	//= _$W
	var g = G(arguments), o
	o = // g.O? g.f:
			g.O_ ? {grav: g.f, doSleep: g.s} :
					N(g.s) ? {grav: V(g.f, g.s), doSleep: g.t} :
							N(g.f) ? {grav: V(0, g.f), doSleep: g.s} :
							{grav: V(0, 10), doSleep: g.f}
	o.doSleep = U(o.doSleep) ? true : o.doSleep ? true : false
	return w = new b2d.W(o.grav, o.doSleep)
}

$box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
}

w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.bug = function (id) {
	var can, ctx
	can = id? $("#" + id)[0]: $0("#canvas")
	ctx= can.getContext("2d")
	return this.SDD(
			$dD().ctx( ctx ).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
}
w.loop  = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
function can() {
	bx.can = function () {
		$('<canvas id="canvas" width="500" height="200" ></canvas>').A()
	}
	$.xI = function (id, col) {
		return $.cI(id).C(col)[0].getContext("2d")
	}
}
function grav() {
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	w.gv = w.G = function (x, y) {
		var w = this, v, gv
		var gv = w.GG()
		if (U(x)) {
			return gv
		}
		if (N(x)) {
			v = N(y) ? V(x, y) : V(0, x)
		}
		if (x == 'flip') {
			v = V(-gv.x, -gv.y)
		}
		return w.SG(v)
		function alt() {
			w.G = function (x, y) {
				var v, currGrav = this.GetGravity()
				if (U(x)) {
					return currGrav
				}
				if (N(x)) {
					v = N(y) ? V(x, y) : V(0, x)
				}
				if (x == 'flip') {
					v = V(-currGrav.x, -currGrav.y)
				}
				w.SetGravity(v)
				return this
			}
			w.G = function (x, y) {
				var w = this,
						v, currG = w.GetGravity()
				if (U(x)) {
					return currG
				}
				if (N(x)) {
					v = N(y) ? V(x, y) : V(0, x)
				}
				else if (x == 'flip') {
					v = V(-currG.x, -currG.y)
				}
				w.SetGravity(v)
				return w
				function alt() {
					w.G = function (x, y) {
						var v, currGrav = this.GetGravity()
						if (U(x)) {
							return currGrav
						}
						if (N(x)) {
							v = N(y) ? V(x, y) : V(0, x)
						}
						if (x == 'flip') {
							v = V(-currGrav.x, -currGrav.y)
						}
						w.SetGravity(v)
						return this
					}
				}
			}
		}
	}
}
function _pre() {
	w.CF = function () {
		this.ClearForces();
		return this
	}
	w.DDD = function () {
		this.DrawDebugData();
		return this
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
}
function _post(){
	$boxFn = function (fn) {
		return function () {
			$box()
			fn()
		}
	}}
	 
	 
	w.CJ=function(jtD){
	
		return this.CreateJoint(jtD)
	}
	
	
	w.DJ= function(jt){
	
		this.DestroyJoint(jt)
		return this
	}