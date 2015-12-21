b2d.fixtParse = function (arr) {
	b2d.polySens = function (kind) {
		return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
	}
//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture
	return _.m(arr, function (fixt) {
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {// weird
			return b2d.polySens.apply(null, fixt)
		}
		var len = fixt.length
		return (len == 1) ? b2d.circ(fixt[0])
				: (len == 2) ? b2d.poly.apply(null, fixt)
				: (len == 3) ? b2d.circ.apply(null, fixt)
				: b2d.poly.apply(null, fixt)
	})
	b2d.fixtParse = function (arr) {
		return _.m(arr, function (fixt) {
			var len
			if (!A(fixt)) {
				return fixt
			}
			if (fixt.isSensor) {
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
}


