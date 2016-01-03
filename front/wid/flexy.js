KOE = function () {
	$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tBE('peep', [
			$.tr([
				$.tdT('f'),
				', ',
				$.tdT('l')
			])
		])])
	ok({
		peep: [
			{f: 'a', l: 'A'},
			{f: 'b', l: 'B'},
			{f: 'c', l: 'C'}
		]
	})
}
BARN = function () {
	$l('barn')
	$.z().ulE(
			'PL', [
				$.li([
					$.sp('Planet: '),
					$.b().bT('n'),
					$.dI('cap', [$.pT('cap.n')])
				])
			])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}
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
e$ol = ol$e = $ol$e = $ol.e$ = $.ol.e$ = $.olE = $.olBe = function (a, b) {
	var ol = $.ol().e$(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
ko.t$ = t$ = sp$t = sp_t$ = $.sp.t$ = function () {
}
ko.v$ = function () {
}
e$ = function (arr) {
	$.d().e$()
}
e$example = function () {
	ul_e$([{n: 'j'}, {n: 'r'}, {n: 'y'}], [$.li()])
}
e$ul = ul$e = $ul$e = $ul.e$ = $.ul.e$ = $.ulE = $.uE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().e$(a)
	if (c) {
		b = $.li(g.r)
	}
	else if (O(b) && !A(b)) {
		b = [b]
	}
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
}
$.li.tb$ = $.liBt = function (a) {
	return $.li().t$(a)
}
$.tB.e$ = function (a, b) {
	var g = G(arguments), tB = $.tB()
	tB.e$(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	else {
		if (true) {
			_.e(g.r, function (q) {
				tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
			})
		}
	}
	return tB
}
$.tBTr = $.tBT = function (arr) {
	var g = G(arguments)
	var tr = $.tr()
	g.r(function (q) {
		tr.A(q)
	})
	return $.tB().e$(arr).A(tr)
}
$.ko.table = function (arrBindingName, ch) {
	return $.t([
		$.tH(ch.tH),
		$.tB(arrBindingName).e$('peep')
	]).A(ch.tr)
}
$.dE = function (a, b) {
	var d = $.d().e$(a)
	if (A(b)) {
		_.e(b, function (el) {
			d.A(el)
		})
	}
	else if (S(b)) {
		d.A(b)
	}
	return d
}
$.uUl = $.U = function () {
	var g = G(arguments)
	//return $.ul.e$(g.f, $.li(g.r))
	var li = $.li(g.r)
	return $.u().e$(g.f).A(li)
}
// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
AVAILSRV = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	M$ = function (ob) {
		ob = O(ob) ? ob : {}
		var Md, md
		Md = bb._M(ob)
		md = new Md(ob)
		return md
	}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	AVAIL = function () {
		$.x('x');
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
}
AVAIL = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	Bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
}
RESTPERSIST0 = function () {
	
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
	Td = $M({df: {tt: '', completed: false}})
	TdsCl = $Cl({md: Td, url: '/tds'})
	tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
}
SAVEMDTOSERVER = function () {
	
	
	// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
	//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
	// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2);
	td2.s('tt', 'go fishing');
	td2.S(); // sends HTTP PUT to /tds/2
	tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
	//  Deleting mds from server
	//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2)
	td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
	// Calling destroy onMd will return false if md isNew:
	td = new Bb.Md();
	$l(td.destroy())  // false
	// Options
	// Each RESTful API met accepts a variety of ops.
	//  Most importantly, all mets accept success and error cbs which can be used
	//  to custize handling of server responses.
	//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
	//  instead of entire md; i.e. md.save(attrs, {patch: true}):
	// Save partial using PATCH
	md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
	md.save();
	md.save({b: 2, d: 4}, {patch: true});
	$l(this.syncArgs.met);
	// 'patch'
	// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
}
OBJECT = function () {
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		s1.A('your objects', $.br(2), t = $.ip(),
				$.bt('new object', function () {
					$.P('newObj',
							{t: t.V()})
				}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//http://robdodson.me/some-more-backbone-dot-js-basics/
ITEMS = function () {
	Ap = {M: {}, V: {}, C: {}}
	$Ro = Router = $$R({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
DUDE = BKSARR = LS1 = function () {
	$Ms('LS1')
	Bks = Bb.C.x({
		model: Bb.M,
		localStorage: new Bb.LocalStorage('bks')
	})
	bks = new Bks(bksArr)
	Dude = Bb.M
	d = new Dude()
	d1 = Dude.c
	//bks.save()
}
bbLocStorPLUG = function () {
	bbLocStorPLUG1 = function () {
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
$store = function (name) {
	return new Backbone.LocalStorage(name)
}
Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
	})
}
// http://www.sitepoint.com/building-list-jquery-local-storage/
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
BBLS = function () {
	bbLocStorPLUG()
	Cl = bb.C.e({
		localStorage: new bb.LocalStorage('clN')
	})
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
ADDER = function () {
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
//bind bt 'click' to parent.rem
ADDER = function () {
	$.x()
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
// kob= ko.observable.prototype; kob.rm= kob.remove
MENU = function () {
	$.z('b').h2('Your seat reservations')
	$.bt('reserve').b$('A')
	AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
	$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
					$.tr().A(
							$.td().bT('n'),
							$.td().bT('m().n'),
							$.td().A(
									$.sl().b({
										o: '$root.AM',
										ot: 'm'    //v : 'm',
									})
							),
							$.td().bT('m().p')
					)
			)
	)
	ko.b({
		seats: $oa([
			{n: 'Jo', m: ko.o(AM[0])},
			{n: 'Bo', m: ko.o(AM[1])}]),
		A: function () {
			vm.seats.push({
				n: 'hahaha',
				m: ko.o({n: 'noodles', p: 30})
			})
		}
	})
}
CHERRY = function () {
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
FOREACH = function () {
	z()
	_d().b('fe', 'p')(
			pg(
					sp().b('t', 'f'),
					sp(' '),
					sp().b('t', 'l'))
	).a()
	vm = {
		p: ko.oa([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}])
	}
	ko.ab(vm)
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
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
SPAM2 = function () {
	z()
	cbKO('Send me spam', 'wantsSpam').A()
	$.div().koBind('vs', 'wantsSpam')(
			'Preferred flavors of spam:',
			$.div().A(cbKO('Cherry', 'flav', 'cherry')),
			$.div().A(cbKO('Almond', 'flav', 'almond')),
			$.div().A(cbKO('Glut', 'flav', 'glut'))
	).A()
	vm = {
		wantsSpam: ko.o(true),
		flav: ko.oa(["cherry", "almond"])
	}
	ko.aB(vm)
	//viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
//bind cb 'checked' to boolean
SPAM = function () {
	$.x()
	$.cbC('spam').a2($.p('spam? '))
	$b({spam: ko.o(1)})
	_.in(2, function () {
		vm.spam(0);
		$.c$()
	})
}
SPAM = function () {
	$l('spam')
	z()
	c = cbKO('Send me spam', 'wantsSpam').A()
	vm = {wantsSpam: ko.o(true)}
	ko.aB(vm)
}
LIST = function () {
	$.x('z')
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
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
LIST = function () {
	$.x('z')
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
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
	$b(new Lst())
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
function classic() {
	BETTERLIST = function () {
		z()
		$.d()(
				fo().b('S', 'addItem')(
						sp('add item'),
						tx().b({
							v: 'itemToAdd'//,vu:'afterkeydown'
						}),
						sm('add').b('ea', 'itemToAdd().length>0')),
				_d()(
						sp('Your values:'),
						sel().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				_d()(
						bt('remove').b({
							c: 'removeSelected',
							ea: 'selectedItems().length>0'
						}),
						bt('sort').b({
							c: 'sortItems',
							ea: 'allItems().length>1'
						}))
		).a()
		ko.ab(o = BLM())
	}
}
tabl()
function tabl() {
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
		}
		// To actually transmit to server as a regular form post, write this:
		// ko.utils.postJson($("form")[0], self.gifts)
	}
	KOGRID = function () {
		$.z()
		f = $.f().at({action: '/someServerSideHandler'})
		f.A(
				$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A($.tr().A(//tHR
								$.th().A('Gift name'),
								$.th().A('Price'))),
						$.tB().bE('gifts').A($.tr().A(  //tBR
								$.td().A($.ip().K('required').b({v: 'name', u: true})),
								$.td().A($.ip().K('required number')
										.b({v: 'price', u: true})),
								$.td().A($.a('delete').b$('$root.removeGift'))))),
				$.bt('add gift').b$('addGift'),
				$.sb().bEn('gifts().length > 0')
		).A()
		ok(new Gift([
			{name: "Tall Hat", price: "39.95"},
			{name: "Long Cloak", price: "120.00"}
		]))
		// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	}
//broken
	MENU = function () {
		$.z('b').h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
						$.tr().A(
								$.td().bT('n'),
								$.td().bT('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().bT('m().p')
						)
				)
		)
		ok({
			seats: $oa([
				{n: 'Jo', m: ko.o(AM[0])},
				{n: 'Bo', m: ko.o(AM[1])}]),
			A: function () {
				vm.seats.push({
					n: 'hahaha',
					m: ko.o({n: 'noodles', p: 30})
				})
			}
		})
	}
}
HLF = HIGHLIGHTFADE = function () {
	$s({
		_ct: {
			C: 'r', P: 10
			//B:'40px solid green'
		},
		_gg: {C: 'o', w: 100, h: 100}
	})
	// ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"
	d = $('<div>').A().A('Click to tog ').K('gg')
	d.a2($.dK('ct'))
	$.$(function () {
		$l('$.$')
		$(".gg").toggle("highlight")
	})
}
NV1 = UITAB = function () {
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
	alt = function () {
		NV8 = UITAB = function () {
			z()
			$.d([
				$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
					$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
					$('<li><a href="#fragment-3"><span>Three</span></a></li>')
				]),
				$.dI('fragment-1').A(
						$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
				$.dI('fragment-2').A(l1),
				$.dI('fragment-3').A(l2)
			]).tabs()
		}
	}
}
NV2 = ACCORD = ACC = function () {
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
	alt = function () {
		NV5 = UI54 = ACCORD = ACC = function () {
			z()
			ul = $.ul([
				$.li('List item 1'),
				$.li('List item 2'),
				$.li('List item 3')
			])
			$.d([
				$.h3('Section 1'), $.d([$.p(l1)]),
				$.h3('Section 2'), $.d([$.p(l2)]),
				$.h3('Section 3'), $.d([$.p(l1), ul])
			]).accordion()
		}
	}
}
UIBT = IP6 = UI15 = UIBUT = function () {
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	_.in(3, function () {
		$.C('o')
		$.d().A('hello').WH(70, 50).button()
		$.d().A('hello').WH(70, 50).H(200).css({
			borderColor: 'blue',
			borderStyle: 'dashed',
			borderWidth: 20
		})
	})
}
UI0 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
NV5 = UISLMENU = USM = function () {
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
JU3 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
JU333 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$('body').resize(function () {
		ovL.WH($(document).W(), $(document).H()).hd().fI()
	})
}
DGG = DRAGGY = function () {
	$.d('r', 500, 500).K('sel')
	$('.sel').dgb({
		delay: 1000,
		distance: 100,
		helper: "clone",
		addClasses: false,
		snapMode: "inner",
		grid: [50, 20],
		snap: true
	})
}
APP2 = function () {
	k = $('.k')
	k.dgb({appendTo: "body"})
	k.dgb({helper: "clone"})
}
TABSELIX = function () {
	$s({
		ip: {bor: '1px solid #000'}, d: {pad: 5}
	})
	$.d([
		'no tabindex'
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d(['-tIx',
		$.ip().tIx(-1, '-tIx')
	])
	$(":tabbable").bdC("red")
}
MENU1 = function () {
	$s({
		'.ui-menu': {
			width: 200,
			C: 'r'
		}
	})
	$.ul().A(
			$.li('Item 1'),
			$.li('Item 2'),
			$.li().A(
					'Item 3',
					$.li('Item 3-1'),
					$.li('Item 3-2'),
					$.li('Item 3-3'),
					$.li('Item 3-4'),
					$.li('Item 3-5')),
			$.li('Item 4'),
			$.li('Item 5')
	).id("menu")
	$("#menu").menu()
}
JUSTREDDIV = IXSTAT = function () {
	$.x()
	k = $.d('r', 500, 200)
	// to clb bT-like elS. Applies clb df ct stys to el
	// and its ch t, lks, and icons.
	k.K('.ui-state-default')
	//   on mv to clb bt-oid. Applies "clickable hover" ct stys
	// to an element and its child text, links, and icons.
	k.K('.ui-state-hover')
	//  on kb fcs to clb btoids. Applies "clickable focus"
	// ct stys  to el and its child text, links, and icons.
	k.K('.ui-state-focus')
	//   on md to clb btoids. Applies "clickable active" cot stysto an el
	// and its ch t, lks, and icons.
	k.K('.ui-state-active')
}
DATESCR = function () {
	$.x('b', 'jqui')
	('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
	('<script src="/jquery-ui.min.js">').A()
	d = $.d('b', 400, 400).A(
			ip = $.ip('date').datepicker()
	).pad(20)
}
DROP = function () {
	$CSS({
		$dgb: {
			w: 100, h: 50, pad: '0.5em', fl: 'l',
			mar: '22px 5px 10px 0'
		},
		$dpb: {w: 130, h: 90, pad: '0.5em', mar: 10, fl: 'l'},
		div: {w: 400, h: 300, C: 'r', c: 'y'},
		$dgb2: {w: 100, h: 50, pad: '0.5em', mar: '0px 5px 10px 0'},
		'#dpb2,#dpb3,#dpb4,#dpb5': {w: 12, h: 90, pad: '0.5em', fl: 'l', mar: 10}
	})
	$.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
	$.d().id('dpb').K('ui-widget-header').A($.p('here'))
	$("#dgb").dgb()
	$("#dpb").dpb()
	Dpb(2, 'Drag me to my target', 'ui-widget-content')
	Dpb(2, 'here');
	Dpb(3, "dsbld !drop");
	Dpb(4, 'tol toch');
	Dpb(5, 'tol fit')
	$("#dgb2").dgb()
	$("#dpb2").dpb({
		drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb3").dpb({
		disabled: "true", drop: function (ev, ui) {
			$(this)
					.K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb4").dpb({
		tolerance: 'touch', drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd w tch")
		}
	})
	$("#dpb5").dpb({
		tolerance: 'fit', drop: function (ev, ui) {
			$(this).K("ui-state-highlight")
					.find("p").html("Dpd whn fulfit")
		}
	})
	function Dpb(id, pT, k) {
		k = k || "ui-widget-header"
		return $.d().id('dpb' + id).K(k).A($.p(pT))
	}
}
CRAZYWEIRD = POSI = function () {
	$s({
		$par: {
			C: 'b', ta: 'c', w: '60%', ht: 40,
			mar: '10px auto', pad: 5, bor: '1px solid #777'
		},
		_psb: {
			p: 'a', ds: 'b',
			r: 0, b: 0, C: 'r', ta: 'c'
		},
		$psb1: {w: 75, h: 75},
		$psb2: {w: 120, h: 40},
		'select,input': {mL: 15}
	})
	$.d([$.p('This is the ps par el')]).id('par')
	$.dK('psb').id("psb1")
	$.p('to ps')
	$.d([$.p('to ps2')]).K('psb', 'psb2')
	$.d().mgT(75).pad(20), 'ps...'
	$.d().pdB(20)
	$.b().A('my:')
	$.sl('my_hz', 'left', 'center', 'right')
	$.sl("my_vrt", 'top', 'center', 'bottom')
	$.d().pdB(20)
	$.p().A('at:')
	$.sl("at_hz", 'left', 'center', 'right')
	$.sl("at_vrt", 'top', 'center', 'bottom')
	$.d([
		$.b().A('cl:'),
		$.sl('cl_vrt', 'flip', 'flit', 'flipfit', 'none'),
		$.sl('cl_hz', 'flip', 'flit', 'flipfit', 'none')
	]).pdB(200)
	$("select, input").bind("click keyup change", ps)
	$("#par").dgb({drag: ps})
	$(".psb").al(.5)
	ps()
	function ps() {
		$(".psb").ps({
			of: $("#par"),
			my: $("#my_hz").v() + $("#my_vrt").v(),
			at: $("#at_hz").v() + $("#at_vrt").v(),
			collision: $("#cl_hz").v() + $("#cl_vrt").v()
		})
	}
}
BLANK = LAYOUTHELP = function () {
	k = $('.k')
	k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
	k.K('ui-helper-hidden-accessible')// Hides cont
	k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
	k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
	k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
	k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
	k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
	k.K('.ui-widget-content')
	// : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
	// (can be appld to par  or sib  of hdr).
}
NOTWORKING = ICONN = function () {
	$.x('y', 'icon')
	$.sp('helllloooo1')
	$.sp('helllloooo2')
			.K("ui-icon ui-icon-arrowthick-1-n")
	k = $.d('k', 500, 500)
	k.K('ui-icon ui-icon-triangle-1-e')
	/*
	 Base class to be applied to an icon element.
	 Sets dimensions to a 16px square
	 block,
	 hides inner text,
	 sets background image to
	 "content" state sprite image.
	
	 Note: ui-icon class will be given    different sprite background image
	 depending on its parent container.
	
	 For example,
	 a ui-icon element
	 within a ui-state-default container
	 will get colored according to
	 the ui-state-default's icon color.
	 Icon types
	
	 After declaring a ui-icon class,
	 you can follow up with a second class
	 describing the type of icon.
	 Icon classes generally follow a syntax
	
	
	 */
	//  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
	//    .ui-icon-triangle-1-e
	//  ThemeRoller provides
	// full set of CSS framework icons  in  prev col
	//  Hv over them to see the class name.
}
NOTHINGATALL = VLAYSHAD = function () {
	k = $('.k')
	k.K('ui-widget-overlay')
	/*
	
	 Applies 100% width & height dimensions to an overlay screen,
	 along with background color/texture, and screen opacity.
	 k.K('ui-widget-shadow')
	 appy to vlay widg shad els
	 Applies bg    c/texture, cust cor rad, al,
	 top/left ofs and shd "thickness".
	 Thickness is appld via pad  all sides of shad  that
	 set to mat  the dims of the overlay el .
	 Offsets are appld via t and l  margs  (can be pos  or neg ).
	 */
	// https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
}
ITHINKNOTHING = CORRAD = function () {
	$.x('o')
	$.d('d', 500, 500)
	k = $.d('d', 500, 500)
	/*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
	 k.K('.ui-corner-tr')// t r cor
	 k.K('.ui-corner-bl')//to bt l corn
	 k.K('.ui-corner-br')// bt r cor
	 k.K('.ui-corner-top')//o both t cors
	 k.K('.ui-corner-bottom')//both bt cors
	 k.K('.ui-corner-right')// both r cors
	 k.K('.ui-corner-left')// both left cors
	 k.K('.ui-corner-all')//all 4 cors
	 */
}
STUCKLOGINFORM = UICT = function () {

//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
	num = 3
	if (num == 1) {
		$.dK("ui-widget").A(
				$.dK("ui-widget-header ui-corner-top").A(
						$.h2('his is a ui-widget-header container')),
				$.dK("ui-widget-content ui-corner-bottom").A(
						$.p('This is a ui-widget-content container')))
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.a('clickable and selected')),
				$.d([
					$.a('clickable but not selected')
				]).K("ui-state-default ui-corner-all"))
	}
	$('.ui-state-default a').hv(function () {
		$(this).parent().K("ui-state-hover")
	}, function () {
		$(this).parent().xK("ui-state-hover")
	})
	if (num == 2) {
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
				$.dK("ui-state-default ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"),
						$.a('clb, !selected')))
		$(".ui-state-default a").hv(function () {
					$(this).pa().K("ui-state-hover")
				},
				function () {
					$(this).pa().xK("ui-state-hover")
				})
	}
	if (num == 3) {
		$CSS({
			'_ui-form': {w: 470, mar: '0 auto'},
			'_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
			'_ui-form _ui-widget-content': {padding: 20},
			'_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
			'_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
			'_ui-form _ui-state-error': {pad: 4},
			'_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
			'_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
		})
		$.dK("ui-widget ui-form").A(
				$.dK("ui-widget-header ui-corner-all").A(
						$.h2('Login Form')),
				$.dK("ui-widget-content ui-corner-all").A(
						$.f().K('ui-helper-clearfix').A(
								$.lb('Username').K("ui-helper-reset"),
								$.d("ui-state-error ui-corner-all").A(
										$.ip(), $.dK("ui-icon ui-icon-alert"),
										$.p('Required field')
												.K("ui-helper-reset ui-state-error-text")))))
	}
	// <link rel="stylesheet" type="text/css" href="css/ui.form.css">
//http://www.w3.org/TR/html4/strict.dtd">
}
LOOKSLIKEHIGHLIGHT = DOESNOTHING = INTX = function () {
	$.x()
	$CSS({
		$d: {C: 'r'}
	})
	k = $('.k')
	// to highlighted/selected els
	// Applies "highlight" ct sty to an el and
	// its ch text, links, and icons.
	k.K('.ui-state-highlight')
	// appl to z msg ct eles. Applies z ct stys to   el
	// and its ch text, links, and icons.
	k.K('.ui-state-error')
	//  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
	k.K('.ui-state-error-text')
	//// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
	k.K('.ui-state-disabled')
	//    apl2 priority-1 bt when need bt hier
	k.K('.ui-priority-primary')
	k.K('.ui-priority-secondary')
	//: Class to be applied to a priority-2 button in situations where button hierarchy is needed.
	j = $('<div>').A($.h3('hello'))
			.id('d').WH(100, 100).A()
			.K('.ui-state-highlight')
	$.d('r', 100, 100).A($.h3('hello'))
}
BROKENMENUMAYBE = HLFDL = function () {
	$.d(['z1']).K('error')
	$.d(['z2']).K('error')
	$.d(['hl1']).K('highlight')
	$.d(['hl2']).K('highlight')
	//   http://jsfiddle.net/774wH/
	function errorHighlight(e, type, icon) {
		if (!icon) {
			if (type === 'highlight') {
				icon = 'ui-icon-info';
			} else {
				icon = 'ui-icon-alert';
			}
		}
		return $(this).each(function () {
			$(this).addClass('ui-widget');
			var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
			h += '<p>';
			h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
			h += $(this).text();
			h += '</p>';
			h += '</div>';
			$(this).html(h);
		});
	}

//error dialog
	(function ($) {
		$.fn.error = function () {
			errorHighlight(this, 'error');
		};
	})(jQuery);
//highlight (alert) dialog
	$.fn.highlight = function () {
		errorHighlight(this, 'highlight');
	};
	$('.error').error()
	$('.highlight').highlight()
}
// https://msdn.microsoft.com/en-us/magazine/ff706600