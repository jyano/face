fD.K = function (k) {
	var fD = this
	if (U(k)) {
		fD.getClass = function () {
			var g = G(arguments), fD = this, classes
			fD._K = fD._K || []
			this.classes = this.classes || []
			var ks = fD.classes.join(' ')
			if (g.p) {
				ks += ' : ' + fD.body().getClasses()
			}
			return ks
		}
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(k)
	return fD
}
f.aK = function (k) {
	var f = this
	f._K = f._K || []
	if (S(k) && !f.of(k)) {
		f._K.push(k)
	}
	return f
}
f._gK = function () {
	var f = this
	f._K = f._K || []
	return f._K.join(' ')
}
f.gK = function () {
	var g = G(arguments), classes
	this.classes = this.classes || []
	classes = this.classes.join(' ')
	if (g.p) {
		classes += ' : ' + this.body().getClasses()
	}
	return classes
}
f.K = function () {
	var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) {
		return f.gK()
	}
	if (g.O && g.f.k) {
		f.aK(g.f.k)
	}
	else if (g.S_) {
		_.eW(g.f, function (k) {
			f.aK(k)
		})
	}
	return f
}
f.of = function (k) {
	var f = this, b = f.B();
	//return S(k) ? f.of(k) : (f == k || b == k)
	return f._of(k) || b.of(k)
	/*
	
	 //if (!f) {return false}
	 if (!k) {
	 return true
	 }
	 return f == k || (S(k) && f.has(k)) || b.of(k)
	 */
}
f.ofK = function () {
	var f = this, b = f.B(),
			g = G(arguments)
	return f.hK(g) || b.hK(g)
}
f.is = function (k) {
	var f = this
	//	return S(k) ? f.hK(k) : f == k
	return k && f.of(k)
}
b.gK = function () {
	this.classes = this.classes || []
	return this.classes.join(' ')
}
b.aK = function (clas) {
	var that = this, func
	this.classes = this.classes || []
	if (U(clas)) {
		$l('need to provide a class!');
		return this
	}
	if (F(clas)) { // use case??
		func = _.bind(clas, that)
		this.addClass(func(that.getClasses()))
		return this
	}
	_.each(arguments, function (clas) {
		if (S(clas)) {
			_.each(clas.trim().split(' '), function (clas) {
				clas = clas.trim()
				if (clas != '' && !that.hasClass(clas)) {
					that.classes.push(clas)
				}
			})
		}
	})
	return this
}
b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
	/*
	 if (U(k)) {
	 return this.getClasses()
	 }
	 _.each(arguments, function (k) {
	 b.addClass(k)
	 })
	 */
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!b.of(k)) {
			b._K.push(k)
		}
	})
	return this
}
b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
	/*
	 var that = this, is = false
	 _.each(arguments, function (k) {
	 if (that.K() == k) {
	 is = true
	 }
	 })
	 return is
	 */
}