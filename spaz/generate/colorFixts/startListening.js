w.startListening = function () {
	var w = this
	w.listen = w.sCL = w.SetContactListener
	b2d.listener = function () {
		return new b2.Dynamics.b2ContactListener
	}
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.endHandlers = w.endHandlers || []
	w.listener.BeginContact = function (cx) {
		_.each(w.beginHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listener.EndContact = function (cx) {
		_.each(w.endHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listen(w.listener)
}