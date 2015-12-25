 
	$g = $get = function (a) {
		return _lS.getItem(a)//= lG
	}
	$s = $set = function (key, val) {
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
jetLS()
	function jetLS(){
		EF4 = function () {
			$.x('o', 'jqls')
			$.d([$.h3('Pending')
				
				/*
				 ,  $.d([
				 $.dK('task-header').A('Sample Header'),
				 $.d([  '25/06/1992'  ]).K('task-date'),
				 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
				 ]).K('td-task')
				 */
			]).id('pending').K('task-list')
			$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
			$.d([$.h3('Completed')]).id('completed').K('task-list')
			$.d([
				$.h3('Add a task'),
				$.f([
					$.ip().ph('Title'),
					$.ta().ph('Description'),
					$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
					$.bt('Add Task').K('btn btn-primary')
				]).C('u').id('td-form'),
				$.bt('Clear Data').K('btn btn-primary'),
				$.d(['Drag Here to Delete']).id('delete-div')
			]).K('task-list')
			// {
			// width:250; // float:left;
			// mar:0;
			// background-color:gray;
			// min-height:240;
			// border-radius:10;
			// padding-bottom:15;
			// }
			$CSS({
				'.task-list': {
					w: '250px', float: 'left',
					mar: '0px', C: 'gray', 'min-height': '240px',
					'border-radius': '10px', 'padding-bottom': '15px'
				},
				h3: {'text-align': 'center'},
				'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
				'.task-list input': {h: '30px'},
				'.task-list input[type="button"]': {w: '100px', mar: '5px'},
				'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
				'.td-task > .task-header': {'font-weight': 'bold'},
				'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
				'.td-task > .task-desc': {'font-size': 'smaller'},
				'#delete-div': {
					C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
					'line-height': '75px', 'text-align': 'center'
				}
			})
			//<style type="text/css"> h3{text-align:center;  }</style>
			$l($('head').oh())
			data = _.jP($ls.g("tdData")) || {}
			options = {}
			td = {
				add: function () {
					var ips = $('#td-form :input'),
							id, title,
							desc, date,
							tempData
					if (ips.length !== 4) {
						return
					}
					title = ips[0].value
					desc = ips[1].value
					date = ips[2].value
					if (!title) {
						return $.dlg("!Title")
					}
					id = _.gT()
					tempData = {
						id: id, code: "1", title: title,
						date: date, desc: desc
					}
					data[id] = tempData
					$ls.s("tdData", _.jS(data))
					genEl(tempData)
					ips[0].value = "";
					ips[1].value = "";
					ips[2].value = ""
				},
				clear: function () {
					data = {}
					$ls.s('tdData', _.jS(data))
					$('.td-task').rm()
				}
			}
			genEl = function (pams) {
				$l('genEl')
				pams = pams || {}
				var parent
				if (!pams.code) {
					$l('!pams.code');
					return;
				}
				parent = $(codes[pams.code]), wrapper;
				if (!parent) {
					$l('!parent');
					return
				}
				wrapper = $.d()
						.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id}).a2(parent)
				$.d().at({class: 'task-header', text: pams.title}).a2(wrapper);
				$.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
				$.d({class: 'task-desc', text: pams.desc}).a2(wrapper)
				wrapper.draggable({
					start: function () {
						$("#" + 'delete-div').show()
					},
					stop: function () {
						$("#" + 'delete-div').hide()
					},
					revert: "invalid", revertDuration: 200
				})
			}
			rmEl = function (pams) {
				$('#task-' + pams.id).rm()
			}
			$.each(data, function (index, pams) {
				genEl(pams)
			})
			/*genEl({
			 id: "123", code: "1",
			 title: "asd",   date: "22/12/2013",  desc: "Blah Blah"     });*/
			/*rmEl({      id: "123",
			 code: "1",  title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			// Adding drop function to each category of task and del div
			$.each({"1": "#pending", "2": "#inProgress", "3": "#completed"},
					function (index, value) {
						$(value).droppable({
							drop: function (event, ui) {
								var element = ui.helper,
										css_id = element.attr('id'),
										id = css_id.replace('task-', ''),
										object = data[id]
								rmEl(object)
								object.code = index
								genEl(object)
								data[id] = object
								$ls.s("tdData", _.jS(data))
								$('#delete-div').hide()
							}
						})
					})
			$('#delete-div').droppable({
				drop: function (event, ui) {
					var element = ui.helper,
							css_id = element.attr("id"),
							id = css_id.replace('task-', ""),
							object = data[id];
					// Removing old element
					rmEl(object);
					// Updating local storage
					delete data[id];
					$ls.s("tdData", _.jS(data));
					// Hiding Delete Area
					$("#" + 'delete-div').hide();
				}
			})
			function alt() {
				JU16 = SAMPLER = EFFECTS = EFS = function () {
					$.x('x')
					$CSS({
						_toggler: {w: 500, h: 200, p: 'r'},
						$button: {pad: '.5em 1em', 'text-decoration': 'none'},
						$ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
						'$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
						'_ui-efs-transfer': {bor: '2px dotted gray'}
					})
					$.d([
						$.d([
							$.h3('Effect').K('ui-widget-header ui-corner-all'),
							$.p('afsdfsdfsa fasdsafdas fdsdfa')
						]).id('ef').K("ui-widget-content ui-corner-all")
					]).K('toggler')
					sl = $.sl().n('efs').id('efTypes')
					_.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
								'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
							function (a) {
								sl.A($.op(a))
							})
					$.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
					function runEf() {
						$l('runEf')
						var selEf = $("#efTypes").val()
						op = ( selEf === "scale" ) ? {percent: 0} :
								( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
										( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
						$("#ef").effect(selEf, op, 500, cb)
						function cb() {
							_.in(function () {
								$("#ef").removeAttr("style").hide().fadeIn()
							})
						}
						
						$("#button").$(function () {
							runEf();
							return false
						})
					}
				}
				JU13 = SAMPLER = EFFECTS = EFS = function () {
					$.x('x')
					$CSS({
						_toggler: {w: 500, h: 200, p: 'r'},
						$button: {pad: '.5em 1em', 'text-decoration': 'none'},
						$ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
						'$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
						'_ui-efs-transfer': {bor: '2px dotted gray'}
					})
					$.d([
						$.d([
							$.h3('Effect').K('ui-widget-header ui-corner-all'),
							$.p('afsdfsdfsa fasdsafdas fdsdfa')
						]).id('ef').K("ui-widget-content ui-corner-all")
					]).K('toggler')
					sl = $.sl().n('efs').id('efTypes')
					_.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
								'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
							function (a) {
								sl.A($.op(a))
							})
					$.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
					function runEf() {
						$l('runEf')
						var selEf = $("#efTypes").val()
						op = ( selEf === "scale" ) ? {percent: 0} :
								( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
										( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
						$("#ef").effect(selEf, op, 500, cb)
						function cb() {
							_.in(function () {
								$("#ef").removeAttr("style").hide().fadeIn()
							})
						}
						
						$("#button").$(function () {
							runEf();
							return false
						})
					}
				}
			}
		}
		JU63 = JQLS10 = function () {
			$.d([$.h3('Pending')
				
				/*
				 ,  $.d([
				
				 $.dK('task-header').A('Sample Header'),
				
				 $.d([  '25/06/1992'  ]).K('task-date'),
				
				 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
				
				
				 ]).K('td-task')
				 */
			]).id('pending').K('task-list')
			$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
			$.d([$.h3('Completed')]).id('completed').K('task-list')
			$.d([
				$.h3('Add a task'),
				$.f([
					$.ip().ph('Title'),
					$.ta().ph('Description'),
					$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
					$.bt('Add Task').K('btn btn-primary')
				]).C('u').id('td-form'),
				$.bt('Clear Data').K('btn btn-primary'),
				$.d(['Drag Here to Delete']).id('delete-div')
			]).K('task-list')
			$CSS(JQLScss) //<style type="text/css"> h3{text-align:center;  }</style>
			$l($('head').oh())
			El = function (o) {
				var q
				if (q = $(codes[o.code])) {
					wrapper = $.dI('task-' + o.id).K('td-task').at('data', o.id)
					wrapper.A(
							$.d(o.tt).K('task-header'),
							$.d(o.date).K('task-date'),
							$.d(o.desc).K('task-desc')
					).a2(q)
				}
			}
			addItem = function (dat) {
				ips = $('#td-form :input')
				if (ips.length != 4) {
					return
				}
				if (!tt) {
					return $l("Title empty!")
				}
				El(dat[id = _.gT()] = {
					id: id,
					code: "1",
					tt: ips[0].value, date: ips[2].value, desc: ips[1].value
				})
				ips[0].value = ips[1].value = ips[2].value = ''
				$ls.s('tdData', _.jS(dat))
			}
			rmEl = function (o) {
				$('#task-' + o.id).rm()
			}
			exEl = El({
				code: "1", id: "123",
				tt: "My Uber Important Task", date: "5/2/2014",
				desc: "I have to do a lot of steps to implement this task!"
			})
			wrapper.dgb({
				start: function () {
					$('#delete-div').show()
				},
				stop: function () {
					$('#delete-div').hide()
				}
			})
			$ls.s("tdData", _.jS(data = _.jP($ls.g("tdData"))))
			$('.td-task').dgg()
			$.each(codes, function (k, v) {
				$(v).dpb({//on drop !!!
					drop: function (ev, ui) {
						el = ui.helper
						css_id = el.attr("id")
						id = css_id.replace(ops.taskId, '')
						ob = data[id]
						rmEl(ob)
						ob.code = k
						El(ob)
						data[id] = ob
						$ls.s("tdData", _.jS(data))
						$('#delete-div').hide()
					}
				})
			})
			$('#delete-div').dpb({
				drop: function (ev, ui) {
					el = ui.helper
					css_id = el.attr('id')
					id = css_id.replace(op.taskId, '')
					o = data[id]
					rmEl(o)
					delete data[id]
					$ls.s("tdData", _.jS(data))
					$('#delete-div').hide()
				}
			})
			data = _.jP($ls.g("tdData")) || {}
			codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
			options = {}
			td = {
				add: function () {
					var ips = $('#td-form :input'),
							id, title,
							desc, date,
							tempData
					if (ips.length !== 4) {
						return
					}
					title = ips[0].value
					desc = ips[1].value
					date = ips[2].value
					if (!title) {
						return $.dlg("!Title")
					}
					id = _.gT()
					tempData = {
						id: id, code: "1", title: title,
						date: date, desc: desc
					}
					data[id] = tempData
					$ls.s("tdData", _.jS(data))
					genEl(tempData)
					ips[0].value = "";
					ips[1].value = "";
					ips[2].value = ""
				},
				clear: function () {
					data = {}
					$ls.s('tdData', _.jS(data))
					$('.td-task').rm()
				}
			}
			genEl = function (pams) {
				$l('genEl')
				var parent = $(codes[pams.code]),
						wrapper
				if (!pams.code || !parent) {
					$l('!parent');
					return
				}
				wrapper = $.d()
				wrapper.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id})
						.a2(parent)
				$.d().at({class: 'task-header', text: pams.title}).a2(wrapper)
				$.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
				$.d().at({class: 'task-desc', text: pams.desc}).a2(wrapper)
				wrapper.draggable({
					start: function () {
						$("#" + 'delete-div').show()
					},
					stop: function () {
						$("#" + 'delete-div').hide()
					},
					revert: "invalid", revertDuration: 200
				})
			}
			rmEl = function (pams) {
				$('#task-' + pams.id).rm()
			}
			$.each(data, function (index, pams) {
				genEl(pams)
			})
			/*genEl({
			 id: "123",
			 code: "1",
			 title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			/*rmEl({
			 id: "123",
			 code: "1",
			 title: "asd",
			 date: "22/12/2013",
			 desc: "Blah Blah"
			 });*/
			// Adding drop function to each category of task and del div
			$.each(codes, function (index, value) {
				$(value).droppable({
					drop: function (event, ui) {
						var element = ui.helper,
								css_id = element.attr("id"),
								id = css_id.replace('task-', ""),
								object = data[id]
						rmEl(object)
						object.code = index
						genEl(object)
						data[id] = object
						$ls.s("tdData", _.jS(data))
						$('#delete-div').hide()
					}
				})
			})
			$('#delete-div').droppable({
				drop: function (event, ui) {
					var element = ui.helper,
							css_id = element.attr("id"),
							id = css_id.replace('task-', ""),
							object = data[id];
					// Removing old element
					rmEl(object);
					// Updating local storage
					delete data[id];
					$ls.s("tdData", _.jS(data));
					// Hiding Delete Area
					$("#" + 'delete-div').hide();
				}
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
					content: "Note created on " + new Date().toISOString()
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
			console.log("Model in collection: " + model.get("content"));
		});
		$.bt('clr', function () {
		})
	}