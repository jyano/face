BB5 = SAMP = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab()
					.LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({
			model: md
		})
		r.rr().$el.a2(d)
	})
}
BB6 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
BB8 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = Bb.V.x({
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
	new Vw({
		I: 1,
		el: dv
	})
}
clEvents()
function clEvents() {
	cl.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }
	cl.tr = function (a, b) {
		this.trigger(a, b);
		return this
	}
	cl.oRm = function (a, b, c) {
		return this.on('remove', a, b, c)
	}   // "remove" (model, collection, options) — when a model is rcl from a collection.
	cl.oX = cl.oD = function (fn) {
		return this.on('destroy', fn)
	} // "destroy" (model, collection, options) — when a model is destroyed.
	cl.oR = cl.oRs = function (fn) {
		return this.on('reset', fn)
	}  // "reset" (collection, options) — when the collection's entire contents have been replaced.
	cl.oSo = function (a, b, c) {
		return this.o('sort', a, b, c)
	}    // "sort" (collection, options) — when the collection has been re-sorted.
	cl.oC = cl.oCh = function (n, fn) {
		if (U(fn)) {
			return this.on('change', n)
		}
		return this.on('change:' + n, fn)
	} // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
	cl.oQ = cl.Rq = function (mdCl, fn) {
		return this.on('request', fn)
	}      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
	cl.oS = cl.oSy = function (a, b, c) {
		return this.o('sync', a, b, c)
	} // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
	cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
		return this.o('error', a, b, c)
	} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
	cl.oIv = function (a, b, c) {
		return this.on('invalid', a, b, c)
	}  //"invalid" (model, error, options) — when a model's validation fails on the client.
	cl.o$ = cl.oAl = function (fn) {
		return this.on('all', fn)
	}   //passes event name as 1st ag
	cl.oA = function (fn) {
		fn = fn || function (m) {
			m.at = m.attributes
			m.s = function (a, b, c) {
				if (O(a) && O(b)) {
					if (b.v) {
						b.validate = b.v ? true : false
					}
				}
				if (S(a) && O(c)) {
					if (c.v) {
						c.validate = c.v ? true : false
					}
				}
				return m.set(a, b, c)
			}
			m.g = m.get
			m.j = m.toJSON
			m.o = m.on
			E$(m)
			a.A(m)
		}
		return this.on('add', fn)
	} // "add" (model, collection, options) — when a model is added to a collection.
}
$ev = _.x({}, Bb.E)
$on = function (ev, fn) {
	$ev.on(ev, fn)
}