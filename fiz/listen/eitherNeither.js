b2d.either = function (ob1, ob2, is1, is2) {
	return (ob1.is(is1) && ob2.is(is2)) ||
			(ob1.is(is2) && ob2.is(is1))
	return {
		is: function (data) {
			return body1.is(data) || body2.is(data)
		}
	}
}
b2d.neither = function (body1, body2) {
	return {
		is: function (data) {
			return !body1.is(data) && !body2.is(data)
		}
	}
}
 