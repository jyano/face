function old() {
	f.K = f.addClass = function (clas) {
		this.classes = this.classes || []
		var that = this, func
		if (U(clas)) {
			return this.getClasses()
		}
		if (F(clas)) {
			func = _.bind(clas, that)
			this.addClass(func(that.getClasses()))
			return this
		}
		_.each(arguments, function (clas) {
			if (S(clas)) {
				clas = clas.trim()
				_.each(clas.split(' '),
						function (clas) {
							clas = clas.trim()
							if (clas != '' && !that.hasClass(clas)) {
								that.classes.push(clas)
							}
						})
			}
		})
		return this
	}
	b.fK = b.fixtClass = function (k) {
		var f = this.f()
		if (U(k)) {
			return f.gK()
		}
		f.K(clas)
		return this
	}
}
function _post() {
	f.near = function (what) {
		var body = this.GetBody()
		//return (this.K()==what) || (body.K()==what)
		// if has sibling fixture that matches, return IT!
		return false
	}
	f.classCount = function () {
		if (!A(this.classes)) {
			return 0
		}
		return this.classes.length
	}
	b.classCount = function () {
		if (!A(this.classes)) {
			return 0
		}
		return this.classes.length
	}
	b.toggleClass = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		if (this.hasClass(clas)) {
			this.removeClass(clas)
		} else {
			this.addClass(clas)
		}
		return this
	}
	b.removeClass = function (clas) {
		var ix
		this.classes = this.classes || []
		if (S(clas)) {
			if (this.hasClass(clas)) {
				ix = this.classes.indexOf(clas)
				this.classes[ix] = null
				this.classes = _.compact(this.classes)
			}
		}
		return this
	}
	f.toggleClass = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		if (this.hasClass(clas)) {
			this.removeClass(clas)
		} else {
			this.addClass(clas)
		}
		return this
	}
	f.removeClass = function (clas) {
		var ix
		this.classes = this.classes || []
		if (S(clas)) {
			if (this.hasClass(clas)) {
				ix = this.classes.indexOf(clas)
				this.classes[ix] = null
				this.classes = _.compact(this.classes)
			}
		}
		return this
	}
	f._of = function (k) {
		var f = this, b = this.B(), res
		if (O(k)) {
			return f == k
		}
		if (S(k)) {
			k = k.trim()
			f._K = f._K || []
			if (_.ct(f._K, k)) {
				return true
			}
		}
		return b.of(k)
	}//new, not yet used
	b.be = function (kindOrBody) {


//this is an OR statement.  at least one must be true
		var that = this, is = false
		if (b2d.isBody(kindOrBody)) {
			return this == kindOrBody
		}
		_.each(arguments, function (kind) {
			if (that.hasClass(kind)) {
				is = true
			}
		})
		return is
	}
	b.not = p.notAny = function (kind) {
//this is an AND: ALL MUST BE FALSE
		var that = this, not = true
		_.each(kind, function (kind) {
			if (that.is(kind)) {
				not = false
			}
		})
		return not
	}
	f.got = f.mat = f.matches = function (k) {
		return k && this.has(k)
	}//not used, new
	f.has = function (k) {
		return !k || _.ct(this._K || [], k.trim())
	}//not used, new
	f.hasK = function self(clas) {
		var fixt = this,
				hasClass,
				g = G(arguments)
		fixt.classes = fixt.classes || []
		if (!clas) {
			return true
		}
		if (A(clas)) {
			g = clas
		}
		_.each(g, function (clas) {
			if (!clas || _.contains(fixt.classes, clas.trim())) {
				hasClass = true
			}
		})
		return hasClass
	}
	f.hasAllK = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		var body = this, anyYes = null, anyNo = null
		_.each(arguments, function (clas) {
			if (body.hasClass(clas)) {
				anyYes = true
			}
			else if (!body.hasClass(clas)) {
				anyNo = true
			}
		})
		return (anyYes && !anyNo)
	}
}
b.has = b.hasClass = b.ofClass = b.hasClasses = function self(clas) {
	var body = this, hasClass;
	body.classes = body.classes || []
	if (!clas) {
		return true
	}
	if (A(clas)) {
		return self.apply(body, clas)
	}
	_.each(arguments, function (clas) {
		if (!clas || _.contains(body.classes, clas.trim())) {
			hasClass = true
		}
	})
	return hasClass
}
b.hasAllClasses = function (clas) {
	if (U(clas) || clas == '') {
		return false
	}
	var body = this, anyYes = null, anyNo = null
	_.each(arguments, function (clas) {
		if (body.hasClass(clas)) {
			anyYes = true
		}
		else if (!body.hasClass(clas)) {
			anyNo = true
		}
	})
	return (anyYes && !anyNo)
}
b.contains = function (clas) {
	var fs = this.fixts(), contains = false
	_.each(fs, function (f) {
		if (f.hasClass(clas)) {
			contains = true
		}
	})
	return contains
}
  