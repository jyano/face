 
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
	 
	// WORKS //////////////////////////
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
	DIRT = function () {
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: ko.oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: ko.oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			}
			else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}//???
	KOFLM = function () {
		$.z('x')
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
				$.li().A(d,
						$.dI('box').css('display', 'none').A(
								$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
				),
				$.li().bT('matterTitle'),
				$.li().bT('matterComment')
		)))
	}
	LIST = function () {
		$.x('z')
		f = $.f().A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').bE('itemToAdd().length>0')
		)
		f.bSb('addItem')
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
	}
	function knock() {
		BARN = function () {
			$.x()
			$.ulE('PL', [$.li([
				$.sp('Planet: '),
				$.b().bT('n'),
				$.dI('cap', [$.pT('cap.n')])
			])])
			ok('PL', [
				{n: 'Merc', cap: null},
				{n: 'Earth', cap: {n: 'Barn'}}
			])
		}
		KOFL = function () {
			
			//filter the items using the filter text
			vm.filteredItems = ko.c(function () {
				var t = this, fl
				fl = t.filter().toLowerCase()
				if (!fl) {
					return t.items();
				}
				else {
					return ko.utils.arrayFilter(t.items(),
							function (it) {
								return ko.utils.stringStartsWith(
										it.name().toLowerCase(), fl)
							})
				}
			}, vm)
		}//???
		KOFLM = function () {
			$.z('x')
			d = $.dI('hover').A(
					$.a().A(
							$.i('me').bT('matterId')
					)
			)
			d.mouseover(function () {
				var d = this
				//Show the div onmouseover.
				$l("!!!")
				$(d).next("#box").gg()
			})
			d.mouseout(function () {
				function onMouseOut(obj) {
					
					//d
					//Hide to div onmouseout
					//Todo:none
				}
			})
			$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
					$.li().A(d,
							$.dI('box').css('display', 'none').A(
									$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
					),
					$.li().bT('matterTitle'),
					$.li().bT('matterComment')
			)))
		}
		BBVP0 = function () {
			$.x('x', 'bb view people')
			vw = _V({
				t: 'ul',
				i: function () {
					this.$el.C('y')
				},
				r: function () {
					var el = this.$el.E()
					_.e(this.collection, function (p) {//$('#peep')
						el.A(
								$.li().A(p.n + '(' + p.a + ')')
						)
					})
					return this
				}
			})({cl: peep})
			$.A(vw.r().el)
			_.in(function () {
				peep.pop();
				vw.r()
			})
			vw = $.ulV({
				i: function () {
					this.q.C($r())
				},
				r: function () {
					var el = this.q.E()
					this.cl(function (p) {
						el.A($.li().A(p.n + '(' + p.a + ')'))
					})
					return this
				}
			})({cl: peep})
			$.A(vw.r().q)
			_.in(function () {
				peep.pop();
				vw.r()
			}, '*')
		}
		REN = WOB = VIEWRENDER = function () {
			ul = $.ul().id('peep')
			vw = {
				ren: function () {
					$('#peep').E()
					_.e(peep, function (p) {
						$('#peep').A('<li>' + p.n + '(' + p.a + ')</li>')
					})
				}
			}
			vw.ren()
			_.in(function () {
				peep.pop();
				vw.ren()
			}, '*')
		};
		KOOA = function () {
			$.x()
			OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
			$.dE('peep', [$.p(
					$.spT('f'), ' ', $.spT('l')
			)])
			$.bt('push', function () {
				vm.peep.push({f: 'j', l: 'y'})
			})
		}
		ADD = function () {
			$.x('x', 'course')
			OK({
				cl: $oa(),
				a: function () {
					this.cl.p({
						n: 'j', c: $r()
					})
					return this
				}
			})
			$.s$('a', 'play'); //the order of these mets should reverse
			$.U('cl', [
				'name is ', $.sT('n'), ' and gusta ', $.sT('c')
			])
			vm.a().a().a()
			//https://www.youtube.com/watch?v=JGwRIbWWqjE
		}
		DELETE1 = function () {
			$.x('kkk')
//bind bt 'click' to parent.rem
			$.h4('People')
			$.ulE('peep', [$.li([
				$.sp('pos/name: '),
				$.spT('$index'),
				$.spT('n'),
				$.$bt('del', 'rm', '-')
			])])
			$.$bt('A')
			ok({
				peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
				A: function () {
					this.peep.push({n: "New at " + $D()})
				},
				rm: function (a) {
					vm.peep.remove(this)
				}
			})
		}
		ADD11 = function () {
			OK({
				cl: $oa(),
				a: function () {
					this.cl.p({
						n: 'j', c: $r()
					})
					return this
				}
			})
			$.s$('a', 'play'); //the order of these mets should reverse
			$.U('cl', [
				'name is ', $.sT('n'), ' and gusta ', $.sT('c')
			])
			vm.a().a().a()
			//https://www.youtube.com/watch?v=JGwRIbWWqjE
		}
		ROOT11 = function () {
			$.x('x')
			$.uE('fs', [$.li().b({
				t: '$data',
				s: '{selected: $data==$root.chFI()}',
				$: '$root.gtf'
			})
			]).K('fs')
			ok({
				fs: ['I', 'A', 'Se', 'Sp'],
				chFI: ko.o(),
				gtf: function (f) {
					$l('click: ' + 'f: ' + f + ', this: ' + this)
					f = f || 'frog'
					vm.chFI(f)
				}
			})
		}
		BARN1 = function () {
			$.ulE('PL', [$.li([
				$.sp('Planet: '),
				$.b().bT('n'),
				$.dI('cap', [$.pT('cap.n')])
			])])
			ok('PL', [
				{n: 'Merc', cap: null},
				{n: 'Earth', cap: {n: 'Barn'}}
			])
		}
		KOOA11 = function () {
			$.x()
			OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
			$.dE('peep', [$.p(
					t$('f'), ' ', t$('l')
			)])
			$.bt('push', function () {
				vm.peep.push({f: 'j', l: 'y'})
			})
		}
		LISTT = function () {
			f = $.f().A(
					$.sp('add item'),
					$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
					$.sb('add').bE('itemToAdd().length>0')
			)
			f.A($.sm('addItem'))
			$.d().A(f,
					$.d().A(
							$.sp('Your values:'),
							$.sl().h(5).b({
								o: 'allItems',
								so: 'selectedItems'
							})
					),
					$.d().A(
							$.bt('remove').b({
								c: 'removeSelected',
								e: 'selectedItems().length>0'
							}),
							$.bt('sort').b({
								c: 'sortItems',
								e: 'allItems().length>1'
							}))
			)
			ok({
				itemToAdd: ko.o(''),
				allItems: ko.oa(['a', 'b', 'c']),
				selectedItems: ko.oa(['d']),
				addItem: function () {
					$l('addItem')
					if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
						vm.allItems.push(vm.itemToAdd());
						vm.itemToAdd('')
					}
				},
				removeSelected: function () {
					allItems.removeAll(o.selectedItems())
					selectedItems([])
				},
				sortItems: function () {
					o.allItems.sort()
				}
			})
		}
	}
	function knock() {
		ROOT = function () {
			$.x('x')
			$.uE('fs', [$.li().b({
				t: '$data',
				s: '{selected: $data==$root.chFI()}',
				$: '$root.gtf'
			})
			]).K('fs')
			ok({
				fs: ['I', 'A', 'Se', 'Sp'],
				chFI: ko.o(),
				gtf: function (f) {
					$l('click: ' + 'f: ' + f + ', this: ' + this)
					f = f || 'frog'
					vm.chFI(f)
				}
			})
		}
	}