
 
CLICK1 = VWW = function () {
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
BKS = function () {
	$.x().h1('BCL')
	Bk = _M({
		d: {ID: '', n: ''}, id: "ID",
		url: 'http://localhost:51377/api/Books'
	})
	BksC = _C({m: Bk})
	cl1 = BksC()
	bk1 = Bk({ID: 1, n: "Bk 1"})
	bk2 = Bk({ID: 2, n: "Bk 2"})
	cl2 = BksC([bk1, bk2])
	bk3 = Bk({ID: 3, n: "Bk 3"})
	cl2.A(bk3)
	change = function () {
		bk3 = new Bk({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
		cl2.add(bk3_changed, {merge: true})
	}
	add = function () {
		bk4 = Bk.o({ID: 4, n: "Bk 4"})
		bk5 = Bk.o({ID: 5, n: "Bk 5"})
		cl2.add([bk4, bk5])
	}
	addAt = function (n) {
		bk0 = new Bk({ID: 0, n: "Bk 0"})
		cl2.add(bk0, {at: n || 0})
	}
}
CHB = CHAINB = function () {
	CHAINB = function () {
		//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
		// sol: bb   supports  _.chain,
		// which returns ob  w  us-arr-ops  attached as mets which return that ob
		//chain starts chain, returns wrapper around cl's mds (wrapped arr)
		//  The chain ends with call to val(),
		// which  terminates chain and returns resulting array
		cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
				.chain().fl(function (i) {
					return i.g('a') > 10
				})
				.m(function (i) {
					return i.g('n')
				})
				.val() //['I','R']
		// Some of bb- spec mets do return this, which means they can be chained as well:
		cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	}
	CHAINB = function () {
		//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
		// sol: bb   supports  _.chain,
		// which returns ob  w  us-arr-ops  attached as mets which return that ob
		//chain starts chain, returns wrapper around cl's mds (wrapped arr)
		//  The chain ends with call to val(),
		// which  terminates chain and returns resulting array
		cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
				.chain().fl(function (i) {
					return i.g('a') > 10
				})
				.m(function (i) {
					return i.g('n')
				})
				.val() //['I','R']
		// Some of bb- spec mets do return this, which means they can be chained as well:
		cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	}
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
USM = USMETS = function () {
	function unders() {
		USMETS0 = function () {
			tds = $C({})
			// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
			tds.any(function (md) {
				return md.id === 100
			})
			tds.some(function (md) {
				return md.id === 100;
			})
			//  size() return cl size, tds.size() ~ tds.length;
			//  isEmpty()  determine whethercl is empty
			isEmpty = tds.isEmpty()
			//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
			tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
				tt: 'Austria.',
				completed: true
			}])
			byCompleted = tds.groupBy('completed');
			completed = $cl(byCompleted[true]);
			$l(completed.pluck('tt')) //  ["Aust"]
			//Underscore  operations  on  objects  are  avail as mets  on   Mds.
			//   pick()  extractset   of   atts   frommd
			Td = $$M({d: {tt: '', completed: false}})
			td = Td({tt: 'go to Austria.'});
			$l(td.pick('tt')) //  {tt: "go to Austria"}
			//  omit(), extract all atts from md, except those listed
			td = Td({tt: 'go to Austria.'});
			$l(td.omit('tt'))   //   {completed: false}
			// keys(), vals() -> lists of attr names, vals
			td = Td({tt: 'go to Austria.'});
			$l(td.keys())   //   ["tt", "completed"]
			$l(td.vals())  //  ["go to Austria.", false]
			// pairs() get  list  of atts as [key, val] pairs
			pairs = Td({tt: 'Aust'}).pairs();
			$l(pairs[0]); // ["tt", "Aust"]
			$l(pairs[1]) // ["completed", false]
			//  invert() creates ob where vals are keys, atts are vals
			Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
		}
		CHAINABLE0 = function () {
			//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
			// sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
			//chain starts chain, returns wrapper around cl's mds (wrapped arr)
			//  The chain ends with call to val(), which  terminates chain and returns resulting array
			Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
					.fl(function (i) {
						return i.g('a') > 10
					})
					.m(function (i) {
						return i.g('n')
					})
					.val() //['I','R']
			// Some of bb- spec mets do return this, which means they can be chained as well:
			$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
		}
	}
	
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = _M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
CNTR = COUNTER = function () {
	COUNTER0 = function () {
		z()
		Td = $$M({df: {tt: '', completed: false}})
		// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
		items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
			id: 1,
			n: "Bear"
		}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
		$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
		//    to retriev a md from a cl, use Cl.get(), accepts single id:
		tds = TdsCl([td = Td({id: 2, tt: 'book'})])
		td2 = tds.g(2);
		$l(td2 === td) // true
		//   mds  passed by reference
		$l(tdCid === td); // true
		//Listening for evs
		//   can listen for add and rm evs which occur when mds are added/rmd from cl
		TdsCl = $cl()
		TdsCl.on("add", function (td) {
			$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
		})
		TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
		// can bind to change event to listen for changes to any of mds in cl
		TdsCl = $cl()
		TdsCl.on("change:tt", function (m) {
			$l("Nah! I " + m.g('tt'))
		})
		TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
		td = TdsCl.g(3)
		td.s('tt', 'go fishing')  //  Nah! I  go fishing
		Td = $M({df: {tt: '', completed: false}})
		td = Td().s({tt: 'Buy cookies', completed: true})
		td.on({
			'change:tt': ttChd = function () {
				$l('tt chd!')
			},
			'change:completed': sttChd = function () {
				$l('stt chd!')
			}
		})
		td.s({tt: 'groceries'})  // tt chd!
		// Use once, dont need to unbind   ev  listener
		TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
		TdCounter.once('event', incrA = function () {
			TdCounter.cA += 1;
			TdCounter.trigger('event')
		})  // This triggering will not  produce any effect on counters
		TdCounter.once('event', incrB = function () {
			TdCounter.cB += 1
		})
		TdCounter.trigger('event')   // Trigger event for first time
		TdCounter.cA //1
		TdCounter.cB //1
		// counterA and counterB should only have been incred once.
	}
	z()
	Td = _M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	TdsCl = $cl()
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
}
FRND = function () {
	FRND = function () {
		$.x().h1('backcl')
		Frnd = $M({d: {lame: 1}})
		f1 = Frnd({n: "Lul", a: 67})
		f2 = Frnd({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = $M({
			d: {lame: true},
			i: function () {
				var t = this
				t.on('error', function (m, e) {
					alert(3);
					$l(e)
				})
				t.on('change:n',
						function (m, e) {
							alert(3);
							$l(e)
						})
			},
			v: function (at) {
				if (at.n == 'rigo') {
					return "n cant be rigo!"
				}
			}
		})
		p = Per({n: "rigo", a: 7})
		cl = $Cl()()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = $Cl({m: Per})
		pers = Pers()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	Friend = _M({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = _C()
	f1 = c.a(f1)
	f2 = c.a(f2)
	c.rm(f1)
	PERS = function () {
		$.x()
		Per = _M({})
		p1 = Per({n: 'j'})
		p2 = Per({n: 'y'})
		Pers = _C({model: Per})
		pers = Pers([p1, p2])
	}
}
DON = DONUTS = function () {
	m = _M({n: 'j'})
	Donut = _M({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	bostonCream = Donut({
		n: 'Boston Cream',
		cream_filled: true
	})
	bostonCream.s({sprinkles: true})
	bostonCream.S() //save
	Donuts = bbC({
		m: Donut,
		url: "/donuts"
	})
	donuts = Donuts()
	donuts.fetch()// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	DonutShop = _M({
		defaults: {n: "Untitled"},
		initialize: function () {
			var t = this
			t.donuts = Donuts()
			t.donuts.url = 'donut_shops/' + t.id + "/donuts"
		}
	})
	donutShop.oA(function (donut) {
		alert("added " + donut.get("name"))
	})
	lemonFilled = donutShop.donuts.a({
		n: "Lemon Filled"
	})
	a = Eve()
	a.o("fun:had", function () {
		alert("wee!")
	});
	a.e("fun:had")//it'll alert "wee!"
}
CHAINABLE0 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(), which  terminates chain and returns resulting array
	Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
USMETS0 = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = _M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
SWEET = BBVP = BBVIEWPEOPLE = function () {
	$.x('x', 'bb view people')
	Vw = $.ulV({
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
	})
	vw = Vw({
		cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	})
	$.x('x', 'bb view people')
	Vw = $V({
		el: $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A(
						$.li([p.n, '(', p.a, ')'])
						//ul.li(p.n, '(', p.a, ')')
				)
			})
			return this
		}
	})
	Vw = $.ulV({
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
	})
	vw = Vw({cl: peep})
	//$.A(vw.r().q)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
 
BACKSET = function () {
	$.x()
	Sb = Sidebar = Bb.m.e({
		ask: function () {
			this.s({c: prompt("color?")})
		}
	})
	sb = Sb.o()
	sb.on('change:c', function (md, c) {
		$('body').C(c)
	})
	sb.set({c: 'b'})
	sb.ask()
	//right from ko site
	d = $.dA(400)
	Sid = Bb.M({
		promptColor: function () {
			this.s({
				co: pr('color:')
			})
		}
	})
	sb = Sid()
	sb.on('change:co', function (md, c) {
		d.C($l(c))
	})
	sb.C('w')
	sb.ask()
	Per = Bb.M.e({
		i: function () {
			alert("Welcome")
		}
	})
	p = Per({})
	p.s({n: "mac", a: 67})
	$.dA(300).id('sb')
	Sidebar = Bb.M.e({
		fn: function () {
			return this.s({
				c: prompt("c?")
			})
		}
	})
	Sidebar().oC('c', function (m, c) {
		$('#sb').C(c)
	}).s({c: 'w'}).fn()
} 

BABY = function () {
	$d(m = new Bb.M({}))
}
 
SWEET = function () {
	$.x('x', 'bb view people')
	Bb.View.prototype.C$ = function (s) {
		this.$el.C$(s);
		return this
	}
	Vw = $V({
		el: ul = $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A(
						$.li([p.n, '(', p.a, ')'])
				)
			})
			return this
		}
	})
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	vw = Vw({cl: peep})
	_.in(function () {
		peep.pop();
		vw.r()
	})
	BBVP1 = function () {
		$.x('x', 'bb view people')
		Vw = $.ulV({
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
		})
		vw = Vw({
			cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		})
		/*
		
		 $.A(vw.r().q)
		 _.in(function(){peep.pop(); vw.r()},'*')
		 */
	}
}
//function rtrTpFnsTpFnsBackDemo() {
BACKDEMO = function () {
	Temp('task', [
		lb('Task: '),
		tx().id('task_desc'),
		bt('add task').id('btn')])
	di('container').a()
	bbR({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})()
	bbH()
	Task = bbV({
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert(qiv('task_desc') + ' task added')
		}
	})
}
function rtrTp() {
	BACKDEMO0 = function () {
		$.x().d('yoo hoo').id('cont')
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
		}
		$R({
			rt: {'': 'f', 'f': 'f', 's': 's'},
			f: function () {
				$l('fir')
			}, s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		}, '+')
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		Tsk = $V({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
	BACKDEMO1 = function () {
		$.x().d('yoo hoo').id('cont')
		$R({
			rt: {
				'': 'f', 'f': 'f', 's': 's',
				'/wap/items/q': q
			},
			q: function () {
				alert('q')
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		})
		Temp = function (i, h) {
			var s = ''
			return _.tp(
					$('#' + i).html(), h || {}
			)
			if (A(h)) {
				_.e(h, function (h) {
					s += h.oh()
				})
			}
			_str = "<script type='text/template'>" + _str + "</script>"
			str = $(s)
			return $(s).id(i).A()
		}
		/*
		
		
		 Temp('task', [
		
		 $.lb('Task: '),
		 $.ip().id('task_desc'),
		 $.bt('add task').id('btn')
		 ])
		
		
		 Tsk=$V({el: $('#cont'),
		
		 i: function(){this.r()},
		 r: function(){this.$el.ht( Temp('task') )},
		 e: {'click button': 'add'},
		 add: function(){alert( $('#task_desc').v() + ' task added')}
		
		 })
		 */
		$.bt('sfad', function () {
			r.n('/wap/items/q')
		})
	}
	BACKDEMO = function () {
		$.x()
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
		}
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		$.dI('cont')
		$$R({
			rt: {
				'': 'f',
				'f': 'f',
				's': 's'
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				new Task()
				$l('sec')
			}
		})
		Tsk = Bb.V.e({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
}
//router:
BACKDEMO0 = function () {
	$.x().d('yoo hoo').id('cont')
	$R({
		rt: {'': 'f', 'f': 'f', 's': 's'},
		f: function () {
			$l('fir')
		}, s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	}, '+')
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	Tsk = $V({
		el: $('#cont'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(Temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert($('#task_desc').v() + ' task added')
		}
	})
}
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
}
Temp = function (i, h) {
	var s = ''
	return _.tp(
			$('#' + i).html(), h || {}
	)
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return $(s).id(i).A()
}
BACKDEMO1 = function () {
	$R({
		rt: {
			'': 'f', 'f': 'f', 's': 's',
			'/wap/items/q': q
		},
		q: function () {
			alert('q')
		},
		f: function () {
			$l('fir')
		},
		s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	})
	/*
	
	
	 Temp('task', [
	
	 $.lb('Task: '),
	 $.ip().id('task_desc'),
	 $.bt('add task').id('btn')
	 ])
	
	
	 Tsk=$V({el: $('#cont'),
	
	 i: function(){this.r()},
	 r: function(){this.$el.ht( Temp('task') )},
	 e: {'click button': 'add'},
	 add: function(){alert( $('#task_desc').v() + ' task added')}
	
	 })
	 */
	$.bt('sfad', function () {
		r.n('/wap/items/q')
	})
}
BACKDEMO = function () {
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	$.dI('cont')
	$$R({
		rt: {
			'': 'f',
			'f': 'f',
			's': 's'
		},
		f: function () {
			$l('fir')
		},
		s: function () {
			new Task()
			$l('sec')
		}
	})
	Tsk = Bb.V.e({
		el: $('#cont'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(Temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert($('#task_desc').v() + ' task added')
		}
	})
}
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
}
Tsk = $V({
	el: $('#cont'),
	i: function () {
		this.r()
	},
	r: function () {
		this.$el.ht(Temp('task'))
	},
	e: {'click button': 'add'},
	add: function () {
		alert($('#task_desc').v() + ' task added')
	}
})
BACKDEMO = function () {


//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	BACKDEMO = function () {
		BACKDEMO = function () {
			z()
			Temp('task', [
				lb('Task: '),
				tx().id('task_desc'),
				bt('add task').id('btn')])
			di('container').a()
			bbR({
				R: {
					'': 'first',
					'first': 'first',
					'second': 'second'
				},
				first: function () {
					$l('first')
				},
				second: function () {
					new Task()
					$l('second')
				}
			})()
			bbH()
			Task = bbV({
				el: $('#container'),
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.html(temp('task'))
				},
				e: {'click button': 'add'},
				add: function () {
					alert(qiv('task_desc') + ' task added')
				}
			})
		}
		Temp('task', [
			lb('Task: '),
			tx().id('task_desc'),
			bt('add task').id('btn')])
		di('container').a()
		bbR({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})()
		bbH()
		Task = bbV({
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert(qiv('task_desc') + ' task added')
			}
		})
	}
	//$.x().d('yoo hoo').id('cont')
	$R({
		rt: {'': 'f', 'f': 'f', 's': 's'},
		f: function () {
			$l('fir')
		}, s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	}, '+')
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	BACKDEMOoldSchol = function () {
		z()
		Temp('task', [
			lb('Task: '),
			tx().id('task_desc'),
			bt('add task').id('btn')])
		di('container').a()
		bbR({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})()
		bbH()
		Task = bbV({
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert(qiv('task_desc') + ' task added')
			}
		})
	}
}
TASKER = AP = TASK = function () {
	t1 = Ap.M.Tsk({tskN: 'go  store', pr: 4})
	t2 = Ap.M.Tsk({tskN: 'go park', pr: 3})
	TskV = Ap.V.Tsk = $$V({
		tag: 'li',
		// el: $('#container'),
		ren: function () {
			this.A(this.get('tskN'))
			return this
		},
		i: function () {
			this.ren()
		},
		r: function () {
			this.$el.html(this.get('tskN'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	Ap.V.Task = bbV({
		t: 'li',
		ren: function () {
			return this.H(
					this.g('title'))
		}
	})
	tskV = Ap.V.Tsk({m: task})
	tskVw = Ap.V.Tsk({m: task1})
	tskV = Ap.V.Tsk({m: t1})
	Ap.C.Tasks = _C({m: Ap.M.Tsk})
	tasks = Ap.C.Tsks([{tskN: 'hi'}, {tskN: 'bye'}])
	Ap.V.Tsks = _V({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Tsk({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tsksV = Ap.V.Tsks({cl: tsks})
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
	Ap.C.Tsks = $$C({m: Ap.M.Tsk})
	tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var that = this
			//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.$el.A()
		}
	})
	tsksVw = Ap.V.Tsks({cl: tsks})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	$.d().id('container')
	rtr = $R({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})
	Ap.C.Tasks = bbC({m: Ap.M.Task})
	tsks = Ap.C.Tsks([
		{title: 'hi'},
		{title: 'bye'}])
	_V({
		tag: 'li',
		ren: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Tsk({m: t})
						this.$el.A(v.el)
					},
					this)
			$bd()(this.el)
		}
	})({cl: tasks})
	Bb.h.start({pushState: true})
}
BACKVAL1 = function () {
	Person = bbM({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BACKVAL = function () {
	Person = bbM({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BBVT = function () {
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
	$.x('x', 'bb view and template');
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
	md = new bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = bb.V.e({
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
BB15 = BBC = PEPOP = function () {
	$.x('x', 'bb view people')
	vw = $V({
		t: 'ul',
		collection: peep,
		ren: function () {
			var vw = this
			var q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		},
		i: function () {
			this.ren().$el.C('y').A()
		}
	})
	// alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BB20 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A(
			$.h1('hello'),
			bt = $.bt('-------')
	)
	$V({
		el: dv,
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'r',
			'mouseover': function () {
				dv.C($r())
			}
		},
		r: function () {
			$.C($r())
		}
	})
}
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		ren: function () {
			q.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	q.V({
		r: function () {
		},
		i: function () {
		}
	})()
}
MDVW = function () {
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	m = $M({d: {n: 'j', a: 20, o: 'p'}})
	m.V($$V({
		t: 'li', _: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	}))
	_.in(2, function () {
		$.C('R')
		$l('- - --- - - - - ')
		m.l()
	})
	function old() {
		PERVY = function () {
			$.x('n')
			$$V({
				t: 'li', _: 'some-per', k: 'per',
				r: function () {
					this.A('n').A()
				},
				i: function () {
					$l(this.model);
					this.r()
				}
			})({
				m: $M({d: {n: 'j', a: 20, o: 'p'}})
			}) //-> p.V(PerV)
		}
	}
}
BB0 = EXTEV = EXTENDEVENT = function () {
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
}
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
BB2 = DFM = function () {
	$V({
		el: $.li(),
		ren: function () {
			this.$el.A('n: ' + this.model.get('n'))
			return this
		},
		i: function () {
			this.$el.C('r', 'b').fS(149)
			this.ren()
		},
		m: $Df({n: 'j'})
	})
}
BB3 = BVR = VWR = DIVADD = function () {
	Vw = _V({
		el: $.dI('d1', 'r', 500, 500),
		ren: function () {
			this.$el.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	_.t(4, function () {
		Vw()
	})// alpha! <- 
	//q.V({r: function () { }, i: function () {  }})()
}
BB4 = VEL = VIEW = function () {
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		r: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.r()
			})
		},
		i: function () {
			this.r()
		}
	})
	Vw = _V({
		r: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		i: function () {
			this.r()
		}
	})
	$.bt('orange', function () {
		Vw({el: $.d('O', 500, 500)})
	})
	//  uses jq.fn.V ...very cool
	$.fn.V = function (ob) {
		ob = ob || {};
		ob.el = this
		return $V(ob)
	}
}
BB5 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
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
BB6 = MDV = MVW = BMV = function () {
	md = $M({d: {n: 'j', a: 20, o: 'p'}})
	md._V({
		t: 'li',
		_: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})
	_.in(2, function () {
		$.C('R');
		$l('- - --- - - - - ');
		md.l();
		$l(JSON.stringify(md.j()))
	})
}
//valid:
// md.validate() checking attr vals  prior to setting them.
//
// By default occurs when md is persisted using save() or when set() is called if {vld:true}
//
// Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
// .save() will not continue and atts of md will not be modified on server.
//
// Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
// This object is distinct from current atts of md  and from  pams passed to operation.
//
// Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
// validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
VALID = function () {
	$.x('x', 'valid')
	Per = new bb.M({n: 'J'})
	Per.validate = function (at) {
		if (!at.n) {
			return '!name'
		}
	}
	Per.s({n: 'S'})
	$l(P.g('n'))  // 'S'
	Per.unset('name', {vld: true}) // false
	Td = bb.M.x({
		df: {completed: false},
		vld: function (at) {
			if (U(at.tt)) {
				return "!tt"
			}
		},
		i: function () {
			this.on("invalid", function (md, z) {
				$l('err: ' + z)
			})
		}
	})
	td = new Td()
	td.s('completed', true, {vld: true}); // logs: !tt
	$l('completed: ' + td.g('completed')); // completed: false
	emptyTd = new Td(null, {vld: true});
	$l(emptyTd.validationError);
}
INVALID = function () {
	$.x('x', 'valid')
	$l('---- VALIDD ------')
	Md = $$M({
		validate: function (at) {
			if (!at.n) {
				return '!name'
			}
		}
	})
	md = Md({n: 'J'})
	md.oIv(function () {
		$Ms('INVALID !1 1!!!')
	})
	md.s({n: 'S'}, {validate: true})
	$l('n: ' + md.g('n'))
	md.unset('n')
	$l('n: ' + md.g('n'))
	md.s({n: 'S'}, {validate: true})
	md.unset('n', {validate: true})
	$l('n: ' + md.g('n'))
	function more() {
		p2 = Per({n: "qigo", a: 47})
		p3 = Per({n: "rigo", a: 7})
		$.bt('p2 validty', function () {
			$l('isValid: ' + p2.isValid())
		}) //  valid
		$.bt('p3 validty', function () {
			$l('isValid: ' + p3.isValid())
		}) //not valid
	}
}
BB7 = BVD = MVD = function () {
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			this.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			this.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(1, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
VALIDCOL = VALIDATECOLLECTION = function () {
	$.x('b', 'people')
	Per = $M({
		i: function () {
			this.oIv(function (m, z) {
				$l(z)
			})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (at) {
			if (at.a < 0) {
				return 'a<0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34})
	p.oIv(function (m, z) {
		$l('err: ' + z)
	})
	PerV = $V({
		t: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		//tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var v = this
			//this works, but doesnt use a template
			v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
			v.h(v.tJ())
		}
	})
	pV = PerV({m: p})
	peepC = $Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = $V({
		tn: 'ul',
		i: function () {
			$l('hi');
			$l(this.cl)
		},
		r: function () {
			var vw = this
			vw.eCl(function (p) {
				var v, pV
				$l(p.g('n'))
				pV = PerV({m: p})
				$l(pV.el)
				vw.q.A(pV.el)
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
	/*
	
	 md.validate() checking attr vals  prior to setting them.
	
	 By default occurs when md is persisted using save() or when set() is called if {vld:true}
	
	 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
	 .save() will not continue and atts of md will not be modified on server.
	
	 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
	 This object is distinct from current atts of md  and from  pams passed to operation.
	
	 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
	
	
	 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	
	
	 */
}
BB10 = PVR = PER = function () {
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
 