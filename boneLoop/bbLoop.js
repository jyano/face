 
	KO0 = function () {
		$.x();
		$.ipV('n');
		$.h1T('n')
		$.ulE('arr', [$.liT()])
		$.sb().b$('A')
		$.dA('b', 100, 300, 200, '+').bT('n')
		ok({
			n: ko.o('zi'), arr: ko.oa(),
			A: function () {
				this.arr.push(this.n())
			}
		}) // ok('n', ko.o('zi'))
		$.in(1, function () {
			vm.n('girf')
			_.e(['a', 'b', 'c'], function (i) {
				vm.arr.push(i)
			})
		}, '*')
	}
	KOE = function () {
		$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tBE('peep', [
				$.tr([
					$.tdT('f'),
					', ',
					$.tdT('l')
				])
			])])
		OK({
			peep: [
				{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}
			]
		})
	}
	NEST = function () {
		$.x('x').h2('Pp')
		Per = function (n, ch) {
			this.n = n
			this.ch = $oa(ch)
			this.A = function () {
				this.ch.push('new ch ' + $r())
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.uLE('peep',
				$.d([  // name has length children
					$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
					//new
					$.a$('New', 'A')
				]),
				$.uLE('ch',
						$.spT(), //child name
						$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
				)
		)
		$.cbC('showDT').a2Lb('Show time:')
		//anonymous vm
		ok({peep: peep, showDT: $o()})
	}
	TPLIST = function () {
		$.x()
		Meals = [{m: "sand", p: 0}, {m: "lobst", p: 34.95}, {m: "zebra", p: 290}]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([
						$.sl().b({o: 'Meals', ot: 'meal'})
					]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
//sort, remove
	BTRLST1 = function () {
		$.x('o')
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
	BTRLST = function () {
		$.x('o')
		f = $.fSb('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').bEn('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
//add, conditional el
 
 
	
	FLCL = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = bb.V.e({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		
		 this.$el.html(HT); return this }
		 })*/
		Cl = bb.C.e({
			i: function () {
			}
		})
		cl = Cl.o({})
		/*
		 cl.add([{a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a:'f', b: 's'},
		 {a: 's', b:'t'}
		 ])
		
		
		 res = cl.where({a:'f',b:'s'})
		 */
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	PEOPLE = function () {
		$.x()
		Per = bb.M.e({
			i: function () {
				//this.oV(function(mod, err){$l(err)})
			},
			d: {n: 'doe', a: 30, j: 'wrk'},
			validate: function (ats) {
				if (ats.age < 0) {
					return 'a < 0!'
				}
			},
			work: function () {
				return this.g('n') + ' is working'
			}
		})
		p = Per.o({n: 'y', a: 34})
		//p.oV(function (mod, z) {$l(z)})
		PerV = bb.V.e({
			tn: 'li',
			k: 'person', x: 'some-person',
			i: function () {
				this.r()
			},
			tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
			r: function () {
				var t = this
				//this works, but doesnt use a template
				// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
				t.H(
						t.T(
								t.J()
						)
				)
			}
		})
		pV = PerV.o({m: p})
		peepC = bb.C.e({m: Per})
		pC = peepC.o([
			{n: 'rigo', a: 29},
			{n: 'j', a: 2},
			{n: 's', j: 'gx'}
		])
		pC.add(p)
		pC.at(1).n('joejoe')
		pC.at(1).s('name', 'joejoe')
		PeepV = bb.V.e({
			tn: 'ul',
			i: function () {
				$l('hi')
				$l(this.cl)
			},
			r: function () {//var t=this
				this.cl.each(function (p) {
					var v, pV  //$l(p.g('n'))
					pV = PerV.o({m: p}) //$l(pV.el)
					this.$el.append(pV.el) //t.q( pV.el  )
				}, this)
			}
		})
		pcv = PeepV.o({cl: pC})
		pcv.r()
		$.A(pcv.el)
	}
	KOGRID = function () {
		$.z().f().at({action: '/someServerSideHandler'}).A(
				$.p('You have asked for').A(
						$.sp('&nbsp;').bT('gifts().length'),
						'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A(
								$.tr().A(
										//tHR
										$.th().A('Gift name'),
										$.th().A('Price')
								)),
						$.tB().bE('gifts').A(
								$.tr().A(  //tBR
										$.td().A($.ip().K('required').b({v: 'name', u: true})),
										$.td().A($.ip().K('required number')
												.b({v: 'price', u: true})),
										$.td().A(
												$.a('delete').b$('$root.removeGift')
										)))),
				$.bt('add gift').b$('addGift'),
				$.sb().bEn('gifts().length > 0')
		).A()
		Gift = function (gifts) {
			var vm = this
			vm.gifts = ko.oa(gifts)
			vm.addGift = function () {
				vm.gifts.push({name: "", price: ""})
			}
			vm.removeGift = function (gift) {
				vm.gifts.remove(gift)
			}
			vm.save = function (form) {
				alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
			}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
		}
		ko.b(new Gift([
			{name: "Tall Hat", price: "39.95"},
			{name: "Long Cloak", price: "120.00"}
		]))
		// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	}
	PLAN = function () {
		$.z().h1('Plan!')
		$.p().A($.lb().A(
						$.cC('displayAdvancedOptions'), 'Display advanced options'
				)
		)
		$.p().A('Show:',
				$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
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
		$.p([$.bt(), $.bt()])
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
		 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
		 </p>
		 */
		Planets = function () {
			this.planets = ko.oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = ko.o("all");
			this.displayAdvancedOptions = ko.o(false);
			this.addPlanet = function (type) {
				this.planets.push({
					name: "New planet",
					type: type
				})
			}
			this.planetsToShow = ko.pc(function () {
				// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow();
				if (desiredType == "all") return this.planets();
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType;
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) $(el).hide().slideDown()
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) $(el).slideUp(function () {
					$(el).remove();
				})
			}
		}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
		ko.bh.fadeVisible = {
			init: function (el, valAcc) {
				// Initially set the el to be instantly visible/hidden depending on the value
				var value = valAcc();
				$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
			},
			update: function (el, valAcc) {
				// Whenever the value subsequently changes, slowly fade the el in or out
				var value = valAcc();
				ko.unwrap(value) ? $(el).fadeIn() :
						$(el).fadeOut();
			}
		}
		ok(new Planets())
	}
	PLAN = function () {
		$.z().h1('Plan!')
		$.p().A($.lb().A(
						$.cC('displayAdvancedOptions'), 'Display advanced options'
				)
		)
		$.p().A('Show:',
				$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
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
		$.p([$.bt(), $.bt()])
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
		 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
		 </p>
		 */
		Planets = function () {
			this.planets = ko.oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = ko.o("all");
			this.displayAdvancedOptions = ko.o(false);
			this.addPlanet = function (type) {
				this.planets.push({
					name: "New planet",
					type: type
				})
			}
			this.planetsToShow = ko.pc(function () {
				// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow();
				if (desiredType == "all") return this.planets();
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType;
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) $(el).hide().slideDown()
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) $(el).slideUp(function () {
					$(el).remove();
				})
			}
		}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
		ko.bh.fadeVisible = {
			init: function (el, valAcc) {
				// Initially set the el to be instantly visible/hidden depending on the value
				var value = valAcc();
				$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
			},
			update: function (el, valAcc) {
				// Whenever the value subsequently changes, slowly fade the el in or out
				var value = valAcc();
				ko.unwrap(value) ? $(el).fadeIn() :
						$(el).fadeOut();
			}
		}
		ok(new Planets())
	}
	function protoErr() {
		CHERRY = function () {
			$l('cherry')
			$.x('o')
			$.p($.sp('spam?'), $.cC('wants'))
			$.d(['Preferred flavors of spam:',
				$.d([
					$.p($.sp('cherry'), $.cC('flav').v('cherry')),
					$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
					$.p($.sp('Glut'), $.cC('flav').v('glut'))
				])
			]).bVs('wants')
			ok({
				wants: ko.o(1),
				flav: ko.oa(["cherry", "almond"])
			})
			// vm.flav.push("msg")
			/*
			 function $.cKO(m, b, v){
			 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
			 if(v){ cb.v(v)}
			 return p
			 }*/
		}
	}
	 