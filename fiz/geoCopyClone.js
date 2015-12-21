 
	b.clone = function (x, y, a) {
		var b = this
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.D(x, y).type(b.type()).rot(a)
		arr = []
		b.fs(function (f) {
			var h, x, y, r
			arr.push(f)
			_.e(arr, function (f) {
				if (f.iC()) {
					h = f.H()
					x = h.m_p.x * 30
					y = h.m_p.y * 30
					r = h.m_radius * 30
					b1.cir(r, x, y, $r())
				}
				else {
					b1.pol({c: $r(), v: f.vs()})
				}
			})
		})
		return b1
	}
	b.polyClone = function (x, y, a) {
		var b = this, b1
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.B(x, y).type(b.type()).rot(a)
		b.fs(function (f) {
			b1.pol(_.m(f.vs(), function (v) {
				return [v.x, v.y]
			}))
		})
		return b1
	}
	b.copy = function (x, y) {
		var b = this, w = b.W(), g = G(arguments)
		return w.pol(x, y, b)
	}
	b.clone = function (x, y, a) {
		var b = this
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.D(x, y).type(b.type()).rot(a)
		arr = []
		b.fs(function (f) {
			var h, x, y, r
			arr.push(f)
			_.e(arr, function (f) {
				if (f.iC()) {
					h = f.H()
					x = h.m_p.x * 30
					y = h.m_p.y * 30
					r = h.m_radius * 30
					b1.cir(r, x, y, $r())
				}
				else {
					b1.pol({c: $r(), v: f.vs()})
				}
			})
		})
		return b1
	}
	b.polyClone = function (x, y, a) {
		var b = this, b1
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.B(x, y).type(b.type()).rot(a)
		b.fs(function (f) {
			b1.pol(_.m(f.vs(), function (v) {
				return [v.x, v.y]
			}))
		})
		return b1
	}
	b.copy = function (x, y) {
		return this.W().pol(x, y, this)
	}
	f.cloneTo = function (b) {

// *makes pol
// * gets the verts from its shape..  conver it to an array of arrs,
// and it will polif the specified body with that vsA
// (lets you 'stamp' in a specified body)
		var f = this
		if (f.isCir()) {
			var h = f.H()
			var x = h.m_p.x * 30
			var y = h.m_p.y * 30
			b.cir(h.rad(), x, y, $r())
		}
		else {
			b.pol({c: $r(), v: f.vs()})
			// alt??! b.pol( f.vsA() )
			// maybe both work???
		}
		return f
	}
	b.clone = function (x, y, rt) {
		var b = this
		x = N(x, b.X())
		y = N(y, b.Y())
		rt = N(rt, b.rt())
		var ty = b.ty()
		//make a new body at the right 'transform' (copying this body)
		var b1 = w.D(x, y).ty(ty).rt(rt)
		//then.. for each of this body's fixtures....
		// stamp it 'on' that damn body
		// when u are done.. it will be just like you !!!
		return b.cloneTo(b1)
	} //= b.cloneNew = b.pClone = b.polyClone
	CLO = function () {
		W([400, 400]).G(100)
		b = w.D(200, 200, 'r', 30, 30)
		b.clone(300, 300).C('g')
	}
	b.cloneTo = function (b1) {

// b.polEachF will take a different body..
// and it will polif that body with EACH if its fs
		this.fs(function (f) {
			f.cloneTo(b1)
		})
		return b1
	}
	function copy() {
		b.copy = function (x, y) {
			var b = this, w = b.W()
			return w.pol(x, y, b)
		}
		COP = function () {
			W([400, 400]).G(100)
			b = w.D(200, 200, 'r', 30, 30)
			b.copy(300, 300).C('g')
		}
	}
	
 