$L('cap', 'scaled', 'range', 'dim','position','drag','levels')
b.copyXY = function (b1) {
	var b = this
	b.XY(b1.X(), b1.Y());
	b.rt(b1.rt())
	return b
}
w.jukeBox = function () {
	var w = this
	w.S(500, 500, 'o', 200)
	w.S(500, 500, 'r', 10)
	w.S(200, 200, 'm', 40)
	w.S(800, 200, 'b', 60)
	w.S(800, 800, 'l', 80)
	w.S(200, 800, 'g', 100)
	return w
}
w.textDsp = function (textFn) {
	var w = this
	var ht = w.stage.H()
	var wd = w.stage.W()
	var d = $.div('z', wd, 200).A()
	d.abs()
	d.XY(0, ht)
	d.css('color', 'white')
	d.fontSize(30)
	setInterval(setText, 1000)
	function setText() {
		d.text(textFn())
	}
	
	return w
}
_.lower = function (a, b) {
	return a > b ? b : a
}
$.fn.wValOnTk = function (fn) {
	var r = this
	$t(function () {
		fn(r.val())
	})
	return r
}

function can() {
	w.$cv = function () {
		return this.hud.c
	}
	w.$cvM = function (ob) {
		return this.$cv().m(ob)
	}
}
function range() {
	$.tallRange = function () {
		var r = $.rg().W(500).A() //range
		r.abs(775, 500)
		r.css('transform', 'rotate(90deg)')
		return r.val(0)
	}
	w.range = function () {
		var w = this
		var r = $._range90(775, 500).wValOnTk(function (val) {
			var zoom = val / 25 + 1
			w.ZOOM(zoom)
		})
		return r
	}
	$._range = function (x, y) {
		var w = this
		var r = $.range().A()
		r.abs(x, y)
		r.W(500)
		r.attr({
			min: .2,
			max: 10, step: .2, value: 1
		})
		r.val(1)
		return r
	}
	$._range90 = function (x, y) {
		var w = this
		var r = $._range(x, y)
		return r.css('transform', 'rotate(90deg) scaleX(1.7) scaleY(3)')
	}
}
function dims() {
	w.gameH = function () {
		return this.H
	}
	w.worldH = function () {
		return this.h
	}
	w.gameW = function () {
		return this.W
	}
	w.worldW = function () {
		return this.w
	}
}
function position() {
	w.toX = function (x) {
		return N(x) ? x : this.W / 2
	}
	w.toY = function (y) {
		return N(y) ? y : this.H / 2
	}
	w.tXY = alpha = function (x, y) {
		var w = this
		if (U(x)) {
			return {x: w.tX(), y: w.tY()}
		}
		y = N(y) ? y : x
		return w.tX(x).tY(y)
	}
	w.stgX = function (x) {
		var w = this;
		if (U(x)) {
			return w.stage.x
		}
		w.stage.x = x
		return w
	}
	w.stgY = function (y) {
		var w = this;
		if (U(y)) {
			return w.stage.y
		}
		w.stage.y = y
		return w
	}
	w.stgXY = function (x, y) {
		var w = this
		w.stgX(x)
		w.stgY(y)
		return w
	}
}
function drag() {
	w.dragX = function () {
		var w = this
		var dif
		w.$cvM({
			mD: function (x, y) {
				dif = x - w.stage.x
			},
			pM: function (x, y) {
				w.stage.x = x - dif
			}
		})
		return w
	}
	w.dragY = function () {
		var w = this
		var d
		w.$cvM({
			mD: function (x, y) {
				d = y - w.stage.y
			},
			pM: function (x, y) {
				w.stage.y = y - d
			}
		})
		return w
	}
	w.drag = function () {
		var w = this
		w.dragX()
		w.dragY()
		return w
	}
	w.dragScale = function () {
		var w = this
		var o = {}
		$cv = $(w.s.HUD.canvas)
		$cv.mousedown(function (e) {
			o.Scl = w.z
			o.Y = e.clientY
		})
		$cv.pressmove(
				function (e) {
					var x = e.clientX
					var y = e.clientY
					var newSc = o.Scl + (o.Y - e.clientY) * .005
					newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
					w.ZOOM(newSc)
				})
		return w
	}
	w.drag = function () {
		w.dragX = function () {
			var w = this
			var d
			w.i.c.m({
				mD: function (x) {
					d = x - w.st.x
				},
				pM: function (x) {
					w.st.x = x - d
				}
			})
			return w
		}
		w.dragY = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x, y) {
					d = y - w.s.y
				},
				pM: function (x, y) {
					w.s.y = y - d
				}
			})
			return w
		}
		return this.dragX().dragY()
	}
	w.dragScale = function () {
		var w = this
		var pX = 0, pY = 0, pmX, pmY, o = {}
		var c = $(w.i.canvas)
		c.mousedown(function (e) {
			o.Scl = w._zoom
			o.Y = e.clientY
		})
		c.pressmove(function (e) {
			var x = e.clientX,
					y = e.clientY,
					newSc = o.Scl + (o.Y - e.clientY) * .005
			newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
			w.zoom(newSc)
		})
		return this
	}
}
function scaled() {
	w.scaled = function (a) {
		return a * this.zoom()
	}
	w.zHalf = w.scaledHalf = function (a) {
		return this.scaled(a / 2)
	}
	w.scaledDouble = function (a) {
		return this.scaled(a * 2)
	}
	w.zDif = w.scaledDif = function (a, b) {
		return this.scaled(a - b)
	}
	w.scaledSum = function (a, b) {
		return this.scaled(a + b)
	}
	w.scaledQuotient = function (a, b) {
		return this.scaled(a / b)
	}
	w.scaledProduct = function (a, b) {
		return this.scaled(a * b)
	}
	w.scaledWorldW = function () {
		return this.scaled(this.worldW)
	}
	w.scaledWorldH = function () {
		return this.scaled(this.worldH)
	}
}
function cap() {
	$capTop = function (n, max) {
		return cjs.cap(n, 0, max)
		cjs.adj2 = function (income, tax) {
			
			//tax ~ deltaLimit ~ buffer
			var income = income || 0
			var tax = tax || 0
			if (Math.abs(income) <= tax) {
				return 0
			}
			return income > 0 ? income - tax :
			income + tax
		}
		_.cap = cjs.cap
		$t = function (fn) {
			cjs.tick(fn)
		}
	}
	_.capTop = function (n, max) {
		return _.cap(n, 0, max)
	}
	w.cap = function (s, a, b) {
		subScDif = function (a, x, z) {
			return a - x + a / z
		}
		return zeroToMax(s, a * this.z - b)
		function zeroToMax(s, max) {
			return _.cap(s, 0, max)
		}
	}
}
function levels() {
	w.bt = function (text, fn) {
		var w = this
		$.bt(text, fn).A().abs(w.gameW / 2, w.gameH)
				.WH(200, 100).css('fontSize', 40)
	}
	w.manyBalls = function () {
		var w = this
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		return w
	}
	w.scrollLevel = function () {
		var w = this
		_.times(10, function (i) {
			w.D(100 + i * 100, 100, $r(), 35).den(.1)
		})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 900, 'r', 400, 100)
		w.S(1200, 600, 'w', [[400, 500, '-']])
		w.S(400, 300, 'r', 200, 100)
		w.S(800, 300, 'z', 100, 100)
		w.S(1200, 300, 'b', 300, 100)
		w.S(1600, 300, 'z', 100, 100)
		w.S(2000, 300, 'r', 200, 100)
		return w
	}
	w.levelScrollCirs = function () {
		var w = this
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		return w
	}
	_level_ = function () {
		W([1200, 600, 2400, 800], {g: [10, 10]}).scrollLevel()
		co = w.tensor()
		_.t(10, function (i) {
			co.body(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).rest(.2))
		})
		b = w.D(300, 300, 'w', 40).bo(.8).den(.1).bindSprite('flame')
		cjs.rulers()
		return w
	}
	$FIREBALL = function () {
		_level_();
		return b
	}
	DEV = function () {
		_level_()
		w.db().dev().mark()
		t = w.ship(1250, 600).track()
	}
}