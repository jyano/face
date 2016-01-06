bx.iV = bx.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
bx.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
bx.iBD = bx.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
bx.iB = bx.isB = bx.isBody = isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
bx.iFD = bx.isFD = bx.isFixtDef = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
bx.iF = bx.isFixt = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}
bx.iV = bx.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
bx.iH = bx.isShape = function (h) {
	if (!O(h)) {
		return
	}
	var ty = h.constructor.name
	return ty == "b2PolygonShape" ? 'p' :
			ty == "b2CircleShape" ? 'c' :
					ty == "b2AShape" ? 'a' : false
	alt = function (h) {
		var typ
		if (O(h)) {
			typ = h.constructor.name
			return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
		}
	}
}
bx.iPH = bx.iP = function () {
	return this.iH() == 'p'
}
bx.iCH = bx.iC = function () {
	return this.iH() == 'c'
}
bx.iAH = bx.iA = function () {
	return this.iH() == 'a'
}