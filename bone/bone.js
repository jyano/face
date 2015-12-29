Bb.M.prototype.idAttribute = '_id'
Temp = function (i, h) {
	var s = ''
	return _.tp($('#' + i).html(), h || {})
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	s = "<script type='text/template'>" + s + "</script>"
	return $(s).id(i).A()
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return _.tp($('#' + i).html(), h || {})
}
$Df = function (ob) {
	return $M({df: ob})
}
//function qT_superTemplate() {
qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	return fn(ob, $el || $._d())
}
function QTexample() {
	function sampleTemplates() {
		$tp.thed = function (ob, $el) {
			return $el.A($.thead().A(
					$.tr().k('header').A(
							$.th().A('Name'),
							$.th().A('Age'))
			))
			// $tp.thed :  use like this:  t=qT(thed).a()
		}
		$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
			//two ways ok!!!!
//can pass:
//1) jq/el
			return $el(
					$.li(ob.me),
					$.li(ob.me)
			)
			//2)
			// or .... array
			return [$.li().A(ob.me), $.li().A(ob.me)]
		}
	}
	
	e = qT($tp.lii, {me: 'jason'}).a()
}
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
qT = function (f, o, e) {
	return f(ob(o), e || _d())
}
//a sample template
lii = function (o, e) {
	return e(li(o.me), li(o.me))
}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
thed = function (o, e) {
	return e(
			thead()(
					tr().k('header')(
							th()('Name'), th()('Age')
					)
			)
	)
}
// t=qT(thed).a()
listTp = function () {
	$.dI('list-tp', [$.la()]).C('o')
	//$.d('o').id('list-tp').A($.la())
}
rFn = function () {
	var da, tp, ul
	$l('r: ' + this.model.g('d')[0].h)
	//$.c('b').ab(300,300)
	da = this.model.g('d')
	tp = this.tp
	ul = this.$el.find('ul')
	_.e(da, function (da) {
		ul.A(tp.clone().find('a')
				.hr('href', da.h).T(da.t).end())
	})
}
rFn2 = function () {
	$l('rr: ' + this.model.g('d')[0].h)  //$.c('b').ab(300,300)
	da = this.model.g('d');
	tp = this.tp
	ul = this.$el.find('ul')
	_.e(da, function (da) {
		clo = tp.clone()
		ul.A(clo.find('a').hr('href', da.h).T(da.t).end())
	})
}
GOODGIRL = function () {
	saveFromLocStor = function () {
		$ta = ta().id('input')
		$ta.q.value = $g('myText') || ''
		$ta.o('u', function () {
			$s('mytext', $ta.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		_.ev(.1, function () {
			$('#input').val(
					$g('myText') || '')
		})
	}
}
LOCALSTORAGEYANOMODALPHA = function () {
	$ls = L = function (k, v0) {
		if (D(v0)) {
			L.s(k, v0)
		}
		var fn = function (v) {
			if (U(v)) {
				return L.g(k)
			}
			L.s(k, v)
			return fn
		}
		return fn
	}
	L.g = function (k) {
		return _lS.getItem(k)
	}
	L.s = function (k, v) {
		_lS.setItem(k, v)
		return L
	}
	L.r = L.rm = function (k) {
		var vOld = _lS.getItem(k)
		_lS.removeItem(k)
		return vOld
	}
	L.l = L.L = function () {
		return _lS.length
	}
	L.clr = L.x = function () {
		_lS.clear()
		return L
	}
	$.x('r', 'localStorage')
	$ls.s('food', 'zebra')
	//  j = $ls('jason'); j('eats')
	// j = $ls('jason')('eats')
	j = $ls('jason', 'eats')
	$.h1('i didnt know that jason ' +
	j() + ' ' + $ls.g('food') + '!')
}
function sessionStorageUseless() {
	ssS = sessionStorage
	sR = function (a) {
		var i = ssS.getItem(a)
		ssS.removeItem(a)
		return i
	}
	sS = function (a, b) {
		ssS.setItem(a, b);
		return ssS
	}
	sG = function (a) {
		return ssS.getItem(a)
	}
	sL = function () {
		return ssS.length
	}
	sX = function () {
		ssS.clear();
		return ssS
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage
					.setItem('mytext', i.value)
		}, false)
	}
}
// http://www.sitepoint.com/building-list-jquery-local-storage/
STORAGE = function () {
	z()
	saveFromLocStor = function () {
		i = ta().id('input')
		i.q.value = localStorage.getItem('myText') || ''
		i.o('u', function () {
			localStorage.setItem('mytext', i.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		i = qi('input')
		I(function () {
			i.q.value = localStorage.getItem('myText') || ''
		}, 50)
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage.setItem('mytext', i.value)
		}, false)
	}
}
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
BBVT89 = function () {
	listTp();
	m = $M()({d: BBVTdArr})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		r: rFn,
		ev: {'click button': 'r'}
	})
	v = Vw({m: m, blOp: 'emp!'})
}
BBVT98 = function () {
	listTp();
	m = $M()({d: BBVTdArr})
	$.d('y').id('ct').A(
			$.bt('Load', function () {
				v.r()
			}),
			$.ul().id('list'))
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp')
					.children()
		},
		r: rFn2,
		events: {'click button': 'r'}
	})
	v = Vw({zm: m, blOp: 'emp!'})
}
VT69 = function () {
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
VT79 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = V$({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})
	new v({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBVT99 = function () {
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
	
		
		events: {'click button': function(){
		$l('click')
		this.R()}}})
	
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT8 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBVT7 = function () {
	listTp();
	m = $M()({d: BBVTdArr})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		r: rFn,
		ev: {'click button': 'r'}
	})
	v = Vw({m: m, blOp: 'emp!'})
}
BBVT1 = function () {
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT6 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBVT5 = function () {
	listTp();
	m = $M()({d: BBVTdArr})
	$.d('y').id('ct').A(
			$.bt('Load', function () {
				v.r()
			}),
			$.ul().id('list'))
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp')
					.children()
		},
		r: rFn2,
		events: {'click button': 'r'}
	})
	v = Vw({zm: m, blOp: 'emp!'})
}
BBVT1 = function () {
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		events: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT33 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = _V({
		el: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			$l('rr: ' + this.model.get('d')[0].h)
			//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp
			ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h)
						.T(da.t).end())
			})
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $$M({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBLS = function () {
	bbLocStorPLUG()
	Cl = bb.C.e({
		localStorage: new bb.LocalStorage('clN')
	})
}
$g = $get = function (a) {
	return _lS.getItem(a)//= lG
}
error = _$s = $set = function (key, val) {
	_lS.setItem(key, val);
	return val
	//=lS
}
$k = $key = function (key) {
	return (S(key)) ? $g($k(key)) :
			_lS.key(key)
}
$len = function () {
	return _lS.length //= lL
}
$rm = function (a) {
	var i = _lS.getItem(a)
	_lS.removeItem(a)
	return i //= lR
}
$clr = function () {
	_lS.clear();
	return _lS//= lX
}
BUC51 = BUCKYVID51 = function () {
//buck is just a local storage example
//https://www.youtube.com/watch?v=Kn_AIiV6Cp0&index=53&list=PL081AC329706B2953
	$CSS(bucCSS)
	$.f().a2($.scI('leftbox')).A(
			$.p(['(key) One: ', $.ip().id('one')]),
			$.p(['(value) Two: ', $.ta().id('two')]),
			$.bt('save', function () {
				$s('one', $.V('one'))
				$('#rightbox').html(
						'one: ' + $g('one') + ', ' +
						'two: ' + $g($s('two', $.V('two'))))
				return false
			})
	)
	$.scI('rightbox', ['nothing!'])
}
BUC52 = function () {
	$CSS(bucCSS)
	$.scI('leftbox', [$.f([$.p(['(key) One: ', $.ip().id('one')]),
		$.p(['(value) Two: ', $.ta().id('two')])]).A(
			$.bt('clr', function () {
				$clr()
				display()
				return false
			}),
			$.bt('save', function () {
				var one = $.V('one')
				var two = $.V('two')
				$set(one, two)
				display()
				return false
			})
	)])
	$.scI('rightbox', ['nothing yet hoss!'])
	display()
	function display() {
		rBox = $('#rightbox').html('')
		_.t($len(), function (i) {
			var key = $key(i)
			val = $g(key)
			var str = 'key:  ' + key + ',  val: ' + val
			rBox.A(str, $.br())
		})
	}
}
bbLocStorPLUG = function () {
	(function (root, factory) {
		if (typeof exports === 'object' && typeof require === 'function') {
			module.exports = factory(require("backbone"));
		} else if (typeof define === "function" && define.amd) {
			// AMD. Register as an anonymous module.
			define(["backbone"], function (Bb) {
				// Use global variables if the locals are undefined.
				return factory(Bb || root.Bb);
			});
		} else {
			factory(Bb);
		}
	}(this, function (Bb) {
// A simple module to replace `Bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
// Generate a pseudo-GUID by concatenating random hexadecimal.
		function guid() {
			return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		};
		function isObject(item) {
			return item === Object(item);
		}
		
		function contains(array, item) {
			var i = array.length;
			while (i--) if (array[i] === item) return true;
			return false;
		}
		
		function extend(obj, props) {
			for (var key in props) obj[key] = props[key]
			return obj;
		}
		
		function result(object, property) {
			if (object == null) return void 0;
			var value = object[property];
			return (typeof value === 'function') ? object[property]() : value;
		}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Bb.LocalStorage instead
		Bb.LocalStorage = window.Store = function (name, serializer) {
			if (!this.localStorage) {
				throw "Bb.localStorage: Environment does not support localStorage."
			}
			this.name = name;
			this.serializer = serializer || {
				serialize: function (item) {
					return isObject(item) ? JSON.stringify(item) : item;
				},
				// fix for "illegal access" error on Android when JSON.parse is passed null
				deserialize: function (data) {
					return data && JSON.parse(data);
				}
			};
			var store = this.localStorage().getItem(this.name);
			this.records = (store && store.split(",")) || [];
		};
		extend(Bb.LocalStorage.prototype, {
			// Save the current state of the **Store** to *localStorage*.
			save: function () {
				this.localStorage().setItem(this.name, this.records.join(","));
			},
			// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
			// have an id of it's own.
			create: function (model) {
				if (!model.id && model.id !== 0) {
					model.id = guid()
					model.set(model.idAttribute, model.id)
				}
				this.localStorage().setItem(this._itemName(model.id),
						this.serializer.serialize(model))
				this.records.push(model.id.toString())
				this.save();
				return this.find(model)
			},
			// Update a model by replacing its copy in `this.data`.
			update: function (model) {
				this.localStorage().setItem(this._itemName(model.id),
						this.serializer.serialize(model))
				var modelId = model.id.toString()
				if (!contains(this.records, modelId)) {
					this.records.push(modelId)
					this.save()
				}
				return this.find(model)
			},
			// Retrieve a model from `this.data` by id.
			find: function (model) {
				return this.serializer.deserialize(
						this.localStorage().getItem(this._itemName(model.id)))
			},
			// Return the array of all models currently in storage.
			findAll: function () {
				var result = []
				for (var i = 0, id, data; i < this.records.length; i++) {
					id = this.records[i]
					data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
					if (data != null) result.push(data)
				}
				return result
			},
			// Delete a model from `this.data`, returning it.
			destroy: function (model) {
				this.localStorage().removeItem(this._itemName(model.id));
				var modelId = model.id.toString();
				for (var i = 0, id; i < this.records.length; i++) {
					if (this.records[i] === modelId) {
						this.records.splice(i, 1);
					}
				}
				this.save();
				return model;
			},
			localStorage: function () {
				return localStorage;
			},
			// Clear localStorage for specific collection.
			_clear: function () {
				var local = this.localStorage(),
						itemRe = new RegExp("^" + this.name + "-");
				// Remove id-tracking item (e.g., "foo").
				local.removeItem(this.name);
				// Match all data items (e.g., "foo-ID") and remove.
				for (var k in local) {
					if (itemRe.test(k)) {
						local.removeItem(k);
					}
				}
				this.records.length = 0;
			},
			// Size of localStorage.
			_storageSize: function () {
				return this.localStorage().length;
			},
			_itemName: function (id) {
				return this.name + "-" + id;
			}
		})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Bb.localSync is deprecated, use Bb.LocalStorage.sync instead
		Bb.LocalStorage.sync = window.Store.sync = Bb.localSync = function (method, model, options) {
			var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
			var resp, errorMessage;
			//If $ is having Deferred - use it.
			var syncDfd = Bb.$ ?
					(Bb.$.Deferred && Bb.$.Deferred()) :
					(Bb.Deferred && Bb.Deferred());
			try {
				switch (method) {
					case "read":
						resp = model.id != undefined ? store.find(model) : store.findAll();
						break;
					case "create":
						resp = store.create(model);
						break;
					case "update":
						resp = store.update(model);
						break;
					case "delete":
						resp = store.destroy(model);
						break;
				}
			} catch (error) {
				if (error.code === 22 && store._storageSize() === 0)
					errorMessage = "Private browsing is unsupported";
				else
					errorMessage = error.message;
			}
			if (resp) {
				if (options && options.success) {
					if (Bb.VERSION === "0.9.10") {
						options.success(model, resp, options);
					} else {
						options.success(resp);
					}
				}
				if (syncDfd) {
					syncDfd.resolve(resp);
				}
			} else {
				errorMessage = errorMessage ? errorMessage
						: "Record Not Found";
				if (options && options.error)
					if (Bb.VERSION === "0.9.10") {
						options.error(model, errorMessage, options);
					} else {
						options.error(errorMessage);
					}
				if (syncDfd)
					syncDfd.reject(errorMessage);
			}
			// add compatibility with $.ajax
			// always execute callback for success and error
			if (options && options.complete) options.complete(resp);
			return syncDfd && syncDfd.promise();
		};
		Bb.ajaxSync = Bb.sync
		Bb.getSyncMethod = function (model, options) {
			forceAjaxSync = options && options.ajaxSync
			if (!forceAjaxSync && (result(model, 'localStorage') ||
					result(model.collection, 'localStorage'))) {
				return Bb.localSync
			}
			return Bb.ajaxSync
		}
// Override 'Bb.sync' to default to localSync,
// the original 'Bb.sync' is still available in 'Bb.ajaxSync'
		Bb.sync = function (met, md, op) {
			return Bb.getSyncMethod(md, op).apply(this, [met, md, op])
		}
		return Bb.LocalStorage
	}))
}
$store = function (name) {
	return new Backbone.LocalStorage(name)
}
MIN = function () {
	bbLocStorPLUG()
	
	Note = M$({
		defaults: function () {
			return {
				content: "Note created on " + 
				new Date().toISOString()
			}
		}
	})
	NoteCollection = C$({
		model: Note,
		localStorage: $store("choose-some-identifier")
	})
	myNotes = new NoteCollection();
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.save()
	myNotes.models.forEach(function (model) {
		console.log("Model in collection: "
		 + model.get("content"));
	})
	$.bt('clr', function () {
	
	})
	
}
EVENTS = EVS = function () {
	$.x('o', 'beauty')
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	$$V({
		el: dv,
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': function () {
				this.R()
			},
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
}
BBEV = function () {
	$.x().i('chicks')
	ev = bb.Ev()
	ev.b("fun:had", // bind? on?
			function () {
				alert("wee!")
			})
	//trigger
	ev.tr("fun:had")  //it'll alert "wee!"
}
BB11 = VME = EVENTS = EVS = function () {
	q = $.d('r', 200).A(
			$.h1('hello'),
			bt = $.bt('-------')
	)
	$$V({
		el: q,
		R: function () {
			$.C($r())
		},
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				q.C($r())
			}
		}
	})
}
BB220 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = V$({
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
	new V$({
		I: 1,
		el: dv
	})
} 