CLONE = function () {
	b2d.Common.Math.b2Transform.prototype.toArr = function () {
		var tf = this,
				pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
	W().Y().P().P().P()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(900, 200, 'p', 100, 150)
	T.t(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		_.in(1, function () {
			tf = trf
		})
	})
	b1 = w.D(400, 400, 'x', [
		[100, 100, 10], [100, 200],
		['y', 20, 0, 100],
		['b', 20, 0, -100],
		['g', 20, 200, 0]])
	_.in(1, cl);
	//_.ev(10, cl);
	function cl() {
		c = b1.X(300, '+').I(100000, -1000).clone()
	}
}
FORCES = function () {
	W({g: 50})
	//dummy
	w.ball()
	//linVel
	_.t(3, function () {
		w.D(300, 300, 'y', 20).K('lV')
	})
	_.ev(1, function () {
		w.e('lV', function (b) {
			b.lV(0, 20)
		})
	})
	//F('+') <-constant
	w.D(100, 100, 'o', 10).F(40, -60, '+')
	b = w.D(300, 500, 'z', 30, 80).rot(1).fixRot()
	t = {
		i: function () {
			b.I(V(10, -30), b.wC())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			cjs.t(function () {
				b.F(V(0, -3), b.wC())
			})
		}
	}
}
QUERY = function () {
	W().Y()
	w.S(200, 300, 'b', 100).$(function () {
		this.C('***')
	})
	w.S(200, 500, 'g', 100).K('g')
			.cir({x: 100, r: 80, c: 'r'})
			.$(function () {
				this.C('w')
			})
	w.e('g', function (b) {
		b.$$(function () {
			this.B().C('z')
			this.C('w')
		})
	})
	w.e$(function (o) {
		this.C('y')
		$l('mass: ' + this.B().mass().toFixed(3))
	})
	w.$(function (o) {
		w.ball({x: o.x, y: o.y, r: 8})
	})
	w.$$(function (o) {
		w.S(o.x, o.y, 'x', [[20, 10]])
	})
	w.S(600, 400, 'b', 100, 300);
	w.dot(600, 300)
	_.in(function () {
		w.q(600, 300, function (f) {
			f.C('r')
		})
	})
	w.D(1100, 500, 'o', 80).d(.1).$(function () {
		this.B().I(100, -2000)
	})
	w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(
			function () {
				this.kill()
			}
	)
}