b2d.fixt = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtParse = function (arr) {

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture
	var func = function (fixt) {
		var len
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {// weird
			return b2d.polySens.apply(null, fixt)
		}
		len = fixt.length
		return (len == 1) ? b2d.circ(fixt[0])
				: (len == 2) ? b2d.poly.apply(null, fixt)
				: (len == 3) ? b2d.circ.apply(null, fixt)
				: b2d.poly.apply(null, fixt)
	}
	return _.map(arr, func)
}
b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.overlapping = function (b1, b2) {
	var v1 = b1.polyVerts(),
			v2 = b2.polyVerts()
	var p = v1.union(v2)
	return !(_.isEqual(p.verts(), v1.verts()) || _.isEqual(p.verts(), v2.verts()))
}
b2d.polyDot = function (verts) {// see f.dots
	var t = 0
	_.each(
			A(verts) ? verts : verts.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t)
				t += 100
			}
	)
}
b2d.fixtParse = function (arr) {
	return _.map(arr, function (fixt) {
		var len
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {
			b2d.polySens = function (kind) {
				return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
			}
			return b2d.polySens.apply(null, fixt)
			return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
		}
		len = fixt.length
		if (len == 1) {
			return b2d.circ(fixt[0])
		}
		else if (len == 2) {
			return b2d.poly.apply(null, fixt)
		}
		else if (len == 3) {
			return b2d.circ.apply(null, fixt)
		}
		return b2d.poly.apply(null, fixt)
	})
}
