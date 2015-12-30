bbLocStorPLUG = function () {
	(function (root, factory) {
		if (typeof exports === 'object' && typeof require === 'function') {
			module.exports = factory(require("backbone"));
		} else if (typeof define === "function" && define.amd) {
			// AMD. Register as an anonymous module.
			define(["backbone"], function (bb) {
				// Use global variables if the locals are undefined.
				return factory(bb || root.bb);
			});
		} else {
			factory(bb);
		}
	}(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
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
// window.Store is deprectated, use bb.LocalStorage instead
		bb.LocalStorage = window.Store = function (name, serializer) {
			if (!this.localStorage) {
				throw "bb.localStorage: Environment does not support localStorage."
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
		extend(bb.LocalStorage.prototype, {
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
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
		bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
			var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
			var resp, errorMessage;
			//If $ is having Deferred - use it.
			var syncDfd = bb.$ ?
					(bb.$.Deferred && bb.$.Deferred()) :
					(bb.Deferred && bb.Deferred());
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
					if (bb.VERSION === "0.9.10") {
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
					if (bb.VERSION === "0.9.10") {
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
		bb.ajaxSync = bb.sync
		bb.getSyncMethod = function (model, options) {
			forceAjaxSync = options && options.ajaxSync
			if (!forceAjaxSync && (result(model, 'localStorage') ||
					result(model.collection, 'localStorage'))) {
				return bb.localSync
			}
			return bb.ajaxSync
		}
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'
		bb.sync = function (met, md, op) {
			return bb.getSyncMethod(md, op).apply(this, [met, md, op])
		}
		return bb.LocalStorage
	}))
}
Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
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
MIN111 = function () {
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
	n = 0
	myNotes.models.forEach(function (model) {
		$l("Model in collection: "
				+ model.get("content")
				+ n++
		);
	})
	$.bt('clr', function () {
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
