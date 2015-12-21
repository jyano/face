 
	$.scrp = function (i, t) {
		var scr = $("<script type='text/html'>")
		scr.id(i)
		if (t) {
			scr.A(t)
		}
		scr.A()
		return scr
	}
	script = scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
	$.scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
