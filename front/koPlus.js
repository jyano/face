$L('bindings', 'elements', 'apps')
$.fn.u$ = $.fn.uN$ = function (s) {
	return this.b('uniqueName' + s)
}
$.fn.tp$ = $.fn.bTp = function (s) {
	return this.b('template', s)
}
function comput() {
	COMP = function () {
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			//   $.p('L: ', $.b().bT('fL') ),
			$.bt('caps').b$('capL')
		])
		ok({
			f: $o('j'),
			l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
	function computed() {
		K1 = function () {
			$.p('f').A($.S().t$('f'))
			$.p('l').A($.S().t$('l'))
			$.p('f:').A($.ip().v$('f'))
			$.p('l:').A($.ip().v$('l'))
			$.p('full:').A($.S().t$('full'))
			$.bt('tU').b$('tU')
			vm = {
				f: $o('a'),
				l: $o('b'),
				tU: function () {
					this.l(_.tU(this.l()))
				}
			}
			vm.full = ko.c(function () {
				return vm.f() + ' ' + vm.l()
			})
			ok(vm)
		} //bT  bV(value)  b$ ko.c(computed)}
		K2 = COMPUTED = CPD = function () {
			$.d().A(
					$.p('F: ', $.b().bT('f')),
					$.p('L: ', $.b().bT('l')),
					$.p('F: ', $.ip().bV('f')),
					$.p('L: ', $.ip().bV('l')).id('l'),
					$.p('L: ', $.b().bT('fl')),
					$.bt('caps').b$('capL')
			)
			vm = {
				f: $o('j'),
				l: $o('y'),
				capL: function () {
					this.l(_.tU(this.l()))
				}
			}
			vm.fl = ko.c(function () {
				return vm.f() + ' ' + vm.l()
			})
			ok(vm)
			function klassk() {
				KNOCKS = function () {
					format()
					s2(h1('KNOCKOUT'),
							pg('F: ', _B().b('t', 'f')),
							pg('L: ', _B().b('t', 'l')),
							pg('F: ', ip().b('V', 'f')),
							pg('L: ', ip().b('V', 'l')).id('l'),
							pg('L: ', _B().b('t', 'fl')),
							bt('caps').b('$', 'capL'))
					vm = {}
					vm.f = $o('j')
					vm.l = $o('y')
					vm.fl = ko.c(function () {
						return vm.f() + ' ' + vm.l()
					})
					vm.capL = function () {
						vm.l(uC(vm.l()))
					}
					ko.ab(vm)
				}
			}
		}
	}

//bT,bV and computed
	COMP = function () {
		$.z().h1('KNOCKOUT')
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			$.p('L: ', $.b().bT('fL')),
			$.bt('caps').b$('capL')
		]).A()
		ok({
			f: ko.o('j'),
			l: ko.o('y'),
			fL: ko.c(function () {
				return this.f() + ' ' + this.l()
			}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
	COMP = function () {
		$.z().h1('KNOCKOUT')
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			//   $.p('L: ', $.b().bT('fL') ),
			$.bt('caps').b$('capL')
		])
		ok({
			f: $o('j'),
			l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
}
function task() {
	TASKS = function () {
		$.f().bSb('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ko.b({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: ko.oa(),
			nT: ko.o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
		 */
	}
	Task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	Task = function (d) {
		return {t: $o(d.t), iD: $o(d.iD)}
	}
	TASKER = function () {
		$.x()
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Task = bb.M.e({})
		t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
		t2 = Ap.M.Task.o({t: 'go park', pr: 3})
		Ap.V.Tsk = bb.V.e({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = Ap.V.Tsk.o({m: t1})
		Ap.C.Tasks = bb.C.e({m: Ap.M.Tsk})
		tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = bb.V.e({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tasksV = Ap.V.Tasks.o({cl: tasks})
	}
	TASKS = function () {
		$.f().bSb('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({
			e: 'ts',
			vs: 'visible:ts().length>0'
		}).A(
				$.li().A(
						$.cb().bC('iD'),
						$.ip().b("value:t, disable:iD"),
						$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ko.b({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: ko.oa(),
			nT: ko.o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
		 */
	}
	TASK = function () {
		$.z('r')
	}
}
function misc() {
	CHERRYMISC = function () {
		$.x('o')
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([
				$.p($.sp('cherry'),
						$.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
		ok({
			wants: $o(1),
			flav: $oa(["cherry", "almond"])
		})
		// vm.flav.push("msg")
		/*
		 function $.cKO(m, b, v){
		 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
		 if(v){ cb.v(v)}
		 return p
		 }*/
		$.x('o')
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([$.p($.sp('cherry'), $.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
		_.in(function () {
			vm.flav.push("glut")
		})
		ok({
			wants: $o(1),
			flav: $oa(["cherry", "almond"])
		})
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([
				$.p($.sp('cherry'), $.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
		ok({
			wants: $o(1),
			flav: $oa(["cherry", "almond"])
		})
		// vm.flav.push("msg")
		/*
		 function $.cKO(m, b, v){
		 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
		 if(v){ cb.v(v)}
		 return p
		 }*/
	}
	ULTASKMISC = function () {
		$.z().h3('Tasks')
		$.f().bSm('aT').A().A("Add task: ", $.ip().bV('nT').ph("What?"), $.bt('Add'))
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: $oa(),
			nT: $o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: $o(o.nT()), iD: $o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
		 */
		$.f().bSm('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({
			e: 'ts', vs: 'visible:ts().length>0'
		}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		$.z().h3('Tasks')
		$.f().bSm('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: $oa(),
			nT: $o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: $o(o.nT()), iD: $o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		s2(
				h3('Tasks'),
				_f().b("S", "aT")(
						"Add task: ",
						ip().b('v', 'nT').ph("What?"),
						bt('Add').at('t', 's')
				),
				ul(
						li()(
								cb().b('ch', 'iD'),
								ip().b("value:t, disable:iD"),
								lk('Del').b('ch', '$parent.rmT')
						)
				).b("foreach:ts, visible:ts().length>0"),
				sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
				sp("- beer!").b("visible: inc().length==0")
		)
		//ko.ab(TLVM())
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
	}
}
function classic() {
	knockoutBind2 = function (a) {

//= bd
		var g = G(arguments), a = g[0]
		if (g.p) {
			a = 'text: ' + a
		}
		if (g.n) {
			a = 'click: ' + a
		}
		if (g.m) {
			a = 'value: ' + a
		}
		if (g.d) {
			a = 'checked: ' + a
		}
		q.attr({'data-bind': a})
		return q
	}
}
function alphaPams() {
	$.fn.pm = $.fn.pam = $.fn.pams = $.fn.par = function (a, b) {
		this.at('params', a + ': ' + b);
		return this
	}
	$.fn.qA = function (t) {
		return $('<' + t + '>').A()
	}
	$.fn.qAP = function (a, b, c) {
		this.qA(a).par(b, c)
		return this
	}
}
function declarativeAppLoader() {
	FOCUS = function () {
		_$({
			C: 'u',
			t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().b("hasFocus: editingName"),
				$.h1('editing..').bVs('editingName'),
				$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")
			]
		})
	}
	VISABLE = function () {
		_$({
			C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
			el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
			_: function () {
				vm.vs(0);
				_.in(function () {
					vm.vs(1)
				})
			}
		})
	}
	ATTR = function () {
		z()
		_$({
			C: 'w',
			t: 'attributes.. unlikely to use?',
			vm: {url: $o("year-end.html"), tt: $o("stats report")},
			A: [$.aA('{href:url,title:tt}', 'report')]
		})
	}
	KOCSS = function () {
		_$({
			c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
			A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
			_: function () {
				vm.n(-5)
			}
		})
	}
}
function planet() {
	PLANS = [
		{name: "Mercury", type: "rock"},
		{name: "Venus", type: "rock"},
		{name: "Earth", type: "rock"},
		{name: "Mars", type: "rock"},
		{name: "Jupiter", type: "gasgiant"},
		{name: "Saturn", type: "gasgiant"},
		{name: "Uranus", type: "gasgiant"},
		{name: "Neptune", type: "gasgiant"}
	]
	Planets = function () {
		this.planets = $oa(PLANS)
		this.typeToShow = $o("all");
		this.displayAdvancedOptions = $o(false);
		this.addPlanet = function (type) {
			this.planets.push({name: "New planet", type: type})
		}
		this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow()
			if (desiredType == "all") return this.planets()
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).hide().slideDown()
			}
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).slideUp(function () {
					$(el).rm()
				})
			}
		}
	}
	PLAN = function () {
		$.x('g', 'Plan')
		$.p().A(
				$.lb().A(
						$.cC('displayAdvancedOptions'),
						'Display advanced options'
				)
		)
		$.p().A(
				'Show:',
				$.lb([$.ip()]),
				$.lb([$.ip()]),
				$.lb([$.ip()])
		)
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 Show:
		 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
		 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
		 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
		 </p>*/
		$.d([$.d([$.d()])])
		/*
		
		 <div data-bind='template: { foreach: planetsToShow,
		 beforeRemove: hidePlanetElement,
		 afterAdd: showPlanetElement }'>
		 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
		 </div>
		
		 */
		$.p().A(
				$.bt('add rocky plan').b('click: addPlanet.bind($data, "rock")'),
				$.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')
		).b('fadeVisible: displayAdvancedOptions')
		// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
		// Could be stored in a separate utility library
		ok(new Planets())
	}
	PLANS = [
		{name: "Mercury", type: "rock"},
		{name: "Venus", type: "rock"},
		{name: "Earth", type: "rock"},
		{name: "Mars", type: "rock"},
		{name: "Jupiter", type: "gasgiant"},
		{name: "Saturn", type: "gasgiant"},
		{name: "Uranus", type: "gasgiant"},
		{name: "Neptune", type: "gasgiant"}
	]
	Planets = function () {
		this.planets = $oa(PLANS)
		this.typeToShow = $o("all");
		this.displayAdvancedOptions = $o(false);
		this.addPlanet = function (type) {
			this.planets.push({name: "New planet", type: type})
		}
		this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow()
			if (desiredType == "all") return this.planets()
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).hide().slideDown()
			}
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).slideUp(function () {
					$(el).rm()
				})
			}
		}
	}
}
function virtual() {
	VIRTUALELS = function () {
		ko.bh.randomOrder = {
			init: function (el, valueAccessor) {
				
				// Build an array of child elements
				var ch = ko.vE.firstChild(el),
						CH = []
				while (ch) {
					CH.push(ch)
					ch = ko.vE.nextSibling(ch)
				}
				// Remove them all, then put them back in a random order
				ko.vE.emptyNode(el)
				while (CH.length) {
					ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
				}
			}
		}
	}
	VIRT = function () {
		$.z()
		$.d().b({randomOrder: true})
		$.d('First')
		$.d('Second')
		$.d('Third')
		ko.bindingHandlers.randomOrder = {
			init: function (el, valAcc) {
				// Pull out each of the child els into an array
				var childElems = []
				while (el.firstChild)
					childElems.push(el.removeChild(el.firstChild))
				// Put them back in a random order
				while (childElems.length) {
					var randomIndex = M.fl(M.rn() * childElems.length),
							chosenChild = childElems.splice(randomIndex, 1);
					el.appendChild(chosenChild[0]);
				}
			}
		}
	}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components
 
	VIRTP = function () {
		$z()
		ko.bindingProvider.instance.preprocessNode = function (node) {
			// Only react if this is a comment node of the form <!-- template: ... -->
			if (node.nodeType == 8) {
				var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
				if (match) {
					// Create a pair of comments to replace the single comment
					var c1 = document.createComment("ko " + match[1]),
							c2 = document.createComment("/ko");
					node.parentNode.insertBefore(c1, node);
					node.parentNode.replaceChild(c2, node);
					// Tell Knockout about the new nodes so that it can apply bindings to them
					return [c1, c2];
				}
			}
		}
	}
	VIRTP = function () {
		$z()
		ko.bindingProvider.instance.preprocessNode = function (node) {
			// Only react if this is a comment node of the form <!-- template: ... -->
			if (node.nodeType == 8) {
				var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
				if (match) {
					// Create a pair of comments to replace the single comment
					var c1 = document.createComment("ko " + match[1]),
							c2 = document.createComment("/ko");
					node.parentNode.insertBefore(c1, node);
					node.parentNode.replaceChild(c2, node);
					// Tell Knockout about the new nodes so that it can apply bindings to them
					return [c1, c2];
				}
			}
		}
	}
	VWW = function () {
		$.x()
		d = $.d('r', 200).A(
				$.h1('hello'),
				$.bt(__)
		)
		//d.$(function(){v.r()})
		mOv = function () {
			$l('mouse over !')
		}
		v = $V({
			e: {
				'click button': function () {
					$l('$')
				},
				$$: 'r',
				v: mOv
			},
			q: d,
			r: function () {
				alert('double click')
				$.bd().C($r())
			}
		})()
	}
	VIRTUALELS = function () {
		ko.bh.randomOrder = {
			init: function (el, valueAccessor) {
				
				// Build an array of child elements
				var ch = ko.vE.firstChild(el),
						CH = []
				while (ch) {
					CH.push(ch)
					ch = ko.vE.nextSibling(ch)
				}
				// Remove them all, then put them back in a random order
				ko.vE.emptyNode(el)
				while (CH.length) {
					ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
				}
			}
		}
	}
	VM = function (p) {
		this.somePop = p.smKey
	}
	VM.prototype.doSmg = function () {
	}
	Task = function (title, done) {
		this.tt = this.title = $o(title)
		this.done = $o(done)
	}
	tasks = $oa([
		new Task('Find new desktop background', true),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', true)
	])
	Planets = function () {
		this.planets = $oa(PLANS)
		this.typeToShow = $o("all");
		this.displayAdvancedOptions = $o(false);
		this.addPlanet = function (type) {
			this.planets.push({name: "New planet", type: type})
		}
		this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow()
			if (desiredType == "all") return this.planets()
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).hide().slideDown()
			}
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) {
				$(el).slideUp(function () {
					$(el).rm()
				})
			}
		}
	}
	Task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	Per = function (n, ch) {
		var per = this
		per.n = n
		per.ch = $oa(ch)
		per.A = function () {
			this.ch.push('new ch')
		}
	}
	Per = function (n, ch) {
		var per = this
		per.n = n
		per.ch = $oa(ch)
		per.A = function () {
			per.ch.push('new ch')
		}
	}
	peep = [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
	function SurvVM(qu, ptsBdg, aws) {
		this.qu = qu;
		this.ptsBdg = ptsBdg
		this.aws = $.map(aws, function (tx) {
			return new Aw(tx)
		});
		this.save = function () {
			alert('To do')
		};
		this.ptsUsed = ko.c(function () {
					var tot = 0;
					for (var i = 0; i < this.aws.length; i++) {
						tot += this.aws[i].points()
					}
					return tot
				},
				this)
	}
	
	ExpanderCmVM = function () {
		this.isExpanded = ko.o(false)
		this.toggleText = ko.c(function () {
			return this.isExpanded() ? '-' : '+'
		}, this)
	}
	ExpanderCmVM.prototype.toggle = function () {
		this.isExpanded(!this.isExpanded())
	}
	AppVM = function () {
		this.items = [
			{
				binding: 'vs',
				desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
			},
			{
				binding: 't',
				desc: 'causes the assoc DOM el to display the text value of your pam.'
			},
			{
				binding: 'cm',
				desc: 'injects a spec cm into an el, and optly passes pams to it.'
			}
		]
	}
	Aw = function (text) {
		this.awText = text;
		this.points = $o(1)
	}
	initialData = [
		{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
		{name: "Speedy Coyote", sales: 89, price: 190.00},
		{name: "Furious Lizard", sales: 152, price: 25.00},
		{name: "Indifferent Monkey", sales: 1, price: 99.95},
		{name: "Brooding Dragon", sales: 0, price: 6350},
		{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
		{name: "Optimistic Snail", sales: 420, price: 1.50}
	]
	Feed = function () {
		this.ms = ko.o('pf!')
	}
	Ms = function (m) {
		return {m: ko.o(m || '')}
	}
	Task = function (d) {
		return {t: $o(d.t), iD: $o(d.iD)}
	}
	Per = function (n, ch) {
		this.n = n
		this.ch = $oa(ch)
		this.A = function () {
			this.ch.p('new ch ' + $r())
		}
	}
}
function huh() {
	TLVM = function () {
		var o = {
			ts: $oa([]),
			nT: $o()
		}
		o.inc = ko.c(function () {
			return ko.ut.af(
					o.ts(),
					function (t) {
						return !t.iD()
					}
			)
		})
		o.aT = function () {
			o.ts.push(Task({t: o.nT()}))
			o.nT("")
		}
		o.rmT = function (t) {
			o.ts.remove(t)
		}
		$.gJ('/ts', function (d) {
			o.ts(_.m(d, function (i) {
				return Task(i)
			}))
		})
		return o
	}
	KOSCR = function () {
		$.bd().A(
				$.scrp('tt').A($.h1('afsdfds')),
				$.d().bT("{name:'tt'}")
		)
		ok({})
	}
	BLM = function () {
		var o = {}
		o.itemToAdd = $o('')
		o.allItems = $oa(['a', 'b', 'c'])
		o.selectedItems = $oa(['d'])
		o.addItem = function () {
			if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
			) {
				o.allItems.push(o.itemToAdd());
				o.itemToAdd('')
			}
		}
		o.removeSelected = function () {
			o.allItems.removeAll(o.selectedItems())
			o.selectedItems([])
		}
		o.sortItems = function () {
			o.allItems.sort()
		}
		return o
	}
}
function err() {
	KOC = function () {
		$.z()
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().bT("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().bT('title')),
				$.scrp('details').A(
						$.d([$.h2().bT('title'), $.p().bT('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
		)
		ko.b({
			articles: [
				{id: 1, title: "Article One", content: "Content for article one."},
				{id: 2, title: "Article Two", content: "Content for article two."},
				{id: 3, title: "Article Three", content: "Content for article three."}
			],
			selectedView: ko.o("summary"),
			selectedArticle: ko.o(),
			templateToUse: function (i) {
				return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
			}
		})
	}
	SLOP = function () {
		$l('slop')
		$.z()
		$.p('Choose some countries youd like to visit:').A(
				$.sl().b({
					o: 'cunts',
					so: 'chosenCunts'
				}).sz(5).mlt()
		)
		$b({
					cunts: $oa('Fra', 'Ger', 'Spa'),
					chosenCunts: $oa('Ger')
				}
		)// Initially, only Germany is selected
		_.in(function () {
			vm.chosenCunts.push('Fra')
		}, '*') // ... then later  France is selected too
	}
}
 
//scrp
KOSCR = function () {
	KOTEMP = function () {
		$.format()
		s2(
				ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
				ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
				hr(),
				_d().b('T', "{name: templateToUse, foreach: articles }"),
				script("summary")(_d().b('t', 'title')),
				script('details')(
						_d()(
								h2().b('t', 'title'),
								pg().b('t', 'content'),
								bt('edit').b('$', '$parent.selectedArticle'))
				),
				script('edit')(
						_d()(ip().b('v', 'title'),
								br(),
								ip().b('v', 'content'))
				))
		viewModel = {
			articles: [
				{id: 1, title: "Article One", content: "Content for article one."},
				{id: 2, title: "Article Two", content: "Content for article two."},
				{id: 3, title: "Article Three", content: "Content for article three."}
			],
			selectedView: ko.o("summary"),
			selectedArticle: ko.o()
		}
		viewModel.templateToUse = function (i) {
			return i === this.selectedArticle() ?
					'edit'
					: this.selectedView()
		}.bind(viewModel)
		ko.ab(viewModel)
	}
	KOTEMP2 = function () {
		$.B().A(
				scrp('tt').A($.h1('afsdfds')
				),
				$.d().b('T', "{name:'tt'}")
		)
		ok({})
	}
//
//1 parameter: object that you want to use as the context for binding descendant elements.
//    If the expression you supply evaluates to null or undefined,
// descendant elements will not be bound at all,
// but will instead be removed from the document.
//    If the expression you supply involves any observable values,
// the expression will be re-evaluated whenever any of those observables change.
// Then, descendant elements will be cleared out,
// and a new copy of the markup will be added to your document and
// bound in the context of the new evaluation result.
//Note 1: Using “with” without a container element
//Just like other control flow elements such as if and foreach,
// you can use with without any container element to host it.
// This is useful if you need to use with in a place where
// it would not be legal to introduce a new container element just
// to hold the with binding.
//<ul>
//<li>Header element</li>
//<!-- ko with: outboundFlight -->
//...
//<!-- /ko -->
//<!-- ko with: inboundFlight -->
//...
//<!-- /ko -->
//</ul>
//The <!-- ko --> and <!-- /ko --> comments act as start/end markers, defining a “virtual element” that contains the markup inside. Knockout understands this virtual element syntax and binds as if you had a real container element.
	KOC = function () {
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().bT("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().bT('title')),
				$.scrp('details').A(
						$.d([$.h2().bT('title'), $.p().bT('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
		)
		ko.b({
			articles: [
				{id: 1, title: "Article One", content: "Content for article one."},
				{id: 2, title: "Article Two", content: "Content for article two."},
				{id: 3, title: "Article Three", content: "Content for article three."}
			],
			selectedView: ko.o("summary"),
			selectedArticle: ko.o(),
			templateToUse: function (i) {
				return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
			}
		})
	}
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
	);
	ko.b({})
}
// kob= ko.observable.prototype; kob.rm= kob.remove
KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().bT('title')),
			$.scrp('details').A(
					$.d([$.h2().bT('title'), $.p().bT('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().bV('title'),
				$.br(), $.ip().bV('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}//broken select and inputs