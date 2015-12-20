w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.bH.push(fn)
	return w
}
 

w.b = w.bg = w.beg = function () {

//ADDS one or more handlers to beginHandlers array
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.BG.push(fn)
	})
	return w
}

w.beg = w.begin = function (what, what2, func) {
	var w = this
	if (F(what)) {
		_.each(arguments, function (func) {
			w.beginHandlers.push(func)
		})
	}
	else if (F(what2)) {
		func = what2
		w.beginHandlers.push(function (cx) {
			if (cx.with(what)) {
				func(cx)
			}
		})
	}
	else if (F(func)) {
		w.beginHandlers.push(function (cx) {
			if (cx.with(what, what2)) {
				func(cx)
			}
		})
	}
	
	return this
}//ADDS one or more handlers to beginHandlers array
