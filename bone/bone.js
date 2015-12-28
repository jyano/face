
Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.x = Bb.e = function (ob) {
	ob = ob || {}
	var Ev = Bb.E.extend(ob)
	return function (a, b, c, d) {
		return new Ev(a, b, c, d)
	}
}

//$L('events', 'models', 'router', 'history', 'mod', 'rtr', 'views', 'vew', 'collec', 'col')
Bb.E = Bb.Ev = Bb.Events;
Bb.E.x = Bb.E.extend
Bb.E.b = Bb.E.bind;
Bb.E.tr = Bb.E.trg = Bb.E.trigger
Bb.sEv = function (md) {
		md.b = md.bind
		md.O = md.o$ = md.oAl = function (fn) {
			return this.on('all', fn)
		}//passes event name as 1st ag
		md.oZ = md.oE = md.oEr = function (a, b, c) {
			return this.on('error', a, b, c)
		} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
		md.oA = function (fn) {
			return this.on('add', fn || function (m) {
				m.at = m.attributes
				$l('E$???????????? (in md.oA')//E$(m) // a.A(m)
			})
		}//when a md is "added" to cl (model, collection, options)
		md.oC = md.oCh = function (n, fn) {
			var g = G(arguments), o
			o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
			// "change" (model, options)    "change:[attribute]" (model, value, options)
			return g.at ?
					this.on('change:' + o.at, o.fn) :
					this.on('change', o.fn)
		}//=md.$
		md.oRm = function (a, b, c) {
			return this.on('remove', a, b, c)
		}// "remove" (md, cl, ops)  — when md rmd from a collection.//=md.oH=md.o_
		md.oR = md.oRt = function (n, f) {
			var o = this
			//"route:[name]" (params)
			// — Fired by the router when a specific route is matched.
			// "route" (route, params)
			// — Fired by the router when any route has been matched.
			//"route" (router, route, params)
			// — Fired by history when any route has been matched.
			if (U(f)) {
				return o.on('route', n)
			}
			return o.on('route:' + n, f)
		}
		md.oI = md.oIv = function (a, b, c) {
			//"invalid" (model, error, options)
			// — when a model's validation fails on the client.
			return this.on('invalid', a, b, c)
		}
		md.oSo = function (a, b, c) {
			// "sort" (collection, options) — when the collection has been re-sorted.
			return this.on('sort', a, b, c)
		}
		md.oD = md.oDs = function (a, b, c) {
			// "destroy" (model, collection, options)
			// — when a model is destroyed.
			return this.on('destroy', a, b, c)
		}//=md.oX
		md.oS = md.oSy = function (a, b, c) {
			// "sync" (model_or_collection, resp, options)
			// — when a model or collection has been successfully synced with the server.
			return this.on('sync', a, b, c)
		}
		md.oQ = md.oRq = function (a, b, c) {
			return this.on('request', a, b, c)
		}// "request" (model_or_collection, xhr, options)
// — when a model or collection has started a request to the server.
		md.oRs = function (fn, a, b, c) {
			// "reset" (collection, options)
			// — when the collection's entire contents have been replaced.
			return this.on('reset', fn, a, b, c)
		}
		md.tr = function (a, b) {
			this.trigger(a, b);
			return this
		}
		return md
	};
	
Eve = function () {
		var e = _({}).extend(Backbone.Events)
		e.o = e.bind
		e.e = e.trigger
		return e
	}
	
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
