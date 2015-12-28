
__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
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
BBSORT = function () {
	SORT = function () {
		$.x('a', 'sort dont work')
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End_"}))
		chps.add(Chp({p: 1, tt: "Beg2_"}))
		chps.add(Chp({p: 5, tt: "Mid_"}))
		chps.add(Chp({p: 1, tt: "Beg_"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
	}
	BBSORT = function () {
		Chp = Bb.M.e()
		chps = Bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp({p: 9, tt: "End"}))
		chps.add(Chp({p: 5, tt: "Mid"}))
		chps.add(Chp({p: 1, tt: "Beg"}))
		chps = $Cl({m: Chp = $M()})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End"}));
		chps.add(Chp({p: 5, tt: "Mid"}));
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
	}
	SORT = function () {
		$.x('a', 'sort dont work')
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End_"}))
		chps.add(Chp({p: 1, tt: "Beg2_"}))
		chps.add(Chp({p: 5, tt: "Mid_"}))
		chps.add(Chp({p: 1, tt: "Beg_"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
/////
		chps = $Cl({m: Chp = $M()})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End"}));
		chps.add(Chp({p: 5, tt: "Mid"}));
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
//// $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End_"}))
		chps.add(Chp({p: 1, tt: "Beg2_"}))
		chps.add(Chp({p: 5, tt: "Mid_"}))
		chps.add(Chp({p: 1, tt: "Beg_"}))
		$Ms(chps.pluck('tt'))
		chps.sort()
		$Ms(chps.pluck('tt'))
////
		$.x('a', 'sort dont work')
		chps = $Cl({m: Chp = $M()})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End"}));
		chps.add(Chp({p: 5, tt: "Mid"}));
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
/////
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp({p: 9, tt: "End"}))
		chps.add(Chp({p: 5, tt: "Mid"}))
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
///
		Chp = Bb.M.e()
		chps = Bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
///
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
////
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
///
		Chp = Bb.M.e()
		chps = Bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	INDEXSORT0 = function () {
		tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
			tt: '  Aust',
			completed: true
		}])
		tds.forEach(function (md) {
			$l(md.g('tt'))
		}) //   Belgium.//   China. //   Austria.
		// sortBy()- sort a cl on spec attr, ex: sortByAlph
		tds.sortBy(function (td) {
			return td.g("tt").tLC()
		}).forEach(function (m) {
			$l(m.g('tt'))
		}) // go to Austria. // go to Belgium. // go to China.
		count = 1;
		$l(tds.map(function (md) {
			return count++ + ". " + md.g('tt')
		})) //1. go to Belgium. //2. go to China. //3. go to Austria.
		tds.max(function (m) {
			return m.id
		}).id;
		tds.min(function (m) {
			return m.id
		}).id
		//  pluck() extract  spec attr
		captions = tds.pluck('caption') // returns list of captions
		// filter()  ex: Filter by array of md IDs
		Tds = $Cl({
			md: Td, filterById: function (ids) {
				return this.mds.filter(function (c) {
					return _.contains(ids, c.id)
				})
			}
		})
		//   indexOf() return index of particular item within cl
		peop = $cl()
		peop.comparator = function (a, b) {
			return a.g('n') < b.g('n') ? -1 : 1
		}
		peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
		peop.indexOf(rob)//0
		peop.indexOf(tom)//2
	}
	BBSORT00 = function () {
		$.x('a', 'sort dont work')
		chps = $Cl({m: Chp = $M()})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End"}));
		chps.add(Chp({p: 5, tt: "Mid"}));
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
	}
	BBSORT0 = function () {
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp({p: 9, tt: "End"}))
		chps.add(Chp({p: 5, tt: "Mid"}))
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	BBSORT = function () {
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
	}
	INDEXSORT0 = function () {
		tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
			tt: '  Aust',
			completed: true
		}])
		tds.forEach(function (md) {
			$l(md.g('tt'))
		}) //   Belgium.//   China. //   Austria.
		// sortBy()- sort a cl on spec attr, ex: sortByAlph
		tds.sortBy(function (td) {
			return td.g("tt").tLC()
		}).forEach(function (m) {
			$l(m.g('tt'))
		}) // go to Austria. // go to Belgium. // go to China.
		count = 1;
		$l(tds.map(function (md) {
			return count++ + ". " + md.g('tt')
		})) //1. go to Belgium. //2. go to China. //3. go to Austria.
		tds.max(function (m) {
			return m.id
		}).id;
		tds.min(function (m) {
			return m.id
		}).id
		//  pluck() extract  spec attr
		captions = tds.pluck('caption') // returns list of captions
		// filter()  ex: Filter by array of md IDs
		Tds = $Cl({
			md: Td, filterById: function (ids) {
				return this.mds.filter(function (c) {
					return _.contains(ids, c.id)
				})
			}
		})
		//   indexOf() return index of particular item within cl
		peop = $cl()
		peop.comparator = function (a, b) {
			return a.g('n') < b.g('n') ? -1 : 1
		}
		peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
		peop.indexOf(rob)//0
		peop.indexOf(tom)//2
	}
	BBSORT = function () {
		Chp = Bb.M.e()
		chps = Bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	BBSORT = function () {
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
	}
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
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
PLV0 = function () {
	$.x('o', 'hi')
	Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
	p = Per.o({})
	p1 = Per.o({n: 'b'})
	p2 = {n: 'c'}
	PerV = Bb.V.e({
		t: 'li',
		x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.$el.A('fasdfsfasd')
			_m = this.model
			//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
		},
		i: function () {
			this.r()
		}
	})
	PepC = Bb.C.e({m: Per})
	pV = PerV.o({m: p})
	pC = PepC.o()
	pC.add([p, p1, p2])
	PepV = Bb.V.e({
		cl: PepC, el: ul = $.ul(),
		i: function () {
		},
		r: function () {
			ul = this.q.E()
			this.j(function (md) {
				PerV.o({m: md}, ul)
			})
		}
	})
	pCV = PepV.o({cl: pC})
	$.in(.2, function () {
		pCV.r()
	}, '*')
	$.in(.4, function () {
		pCV.r()
	}, '*')
}
PLV = function () {
	$.x('o', 'hi')
	Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
	p = Per.o({})
	p1 = Per.o({n: 'b'})
	p2 = {n: 'c'}
	PerV = Bb.V.e({
		t: 'li',
		x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.$el.A('fasdfsfasd')
			_m = this.model
			//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
		},
		i: function () {
			this.r()
		}
	})
	PepC = Bb.C.e({m: Per})
	pV = PerV.o({m: p})
	pC = PepC.o()
	pC.add([p, p1, p2])
	PepV = Bb.V.e({
		cl: PepC, el: ul = $.ul(),
		i: function () {
		},
		r: function () {
			ul = this.q.E()
			this.J(function (md) {
				PerV.o({m: md}, ul)
			})
		}
	})
	pCV = PepV.o({cl: pC})
	$.in(.2, function () {
		pCV.r()
	}, '*')
	$.in(.4, function () {
		pCV.r()
	}, '*')
}
BCL = function () {
	$.x().h1('BCL')
	Bk = Bb.M.e({
		d: {ID: '', n: ''}, id: "ID",
		url: 'http://localhost:51377/api/Books'
	})
	BksC = Bb.C.e({m: Bk})
	cl1 = BksC.o()
	bk1 = Bk.o({ID: 1, n: "Bk 1"})
	bk2 = Bk.o({ID: 2, n: "Bk 2"})
	cl2 = BksC.o([bk1, bk2])
	bk3 = Bk.o({ID: 3, n: "Bk 3"})
	cl2.add(bk3)
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
BBCOL = function () {
	BBCOL0 = function () {
		$.x()
		Per = $$M({})
		p1 = Per({n: 'j'})
		p2 = Per({n: 'y'})
		Pers = $$C({model: Per})
		pers = Pers([p1, p2])
	}
	$.x()
	Per = Bb.M.e({})
	p1 = Per.o({n: 'j'})
	p2 = Per.o({n: 'y'})
	Pers = Bb.C.e({model: Per})
	pers = Pers.o([p1, p2])
}
BBCL = function () {
	$.x().h1('backcl')
	bads = Bb.C.e().o().oA(function (s) {
		alert("new baddie: " + s.g("n"))
	})
	bads.add([{n: "bad1"}, {n: "bad2"}])
	Frnd = Bb.M.e({d: {lame: 1}})
	f1 = Frnd.o({n: "Lul", a: 67})
	f2 = Frnd.o({g: 'jigo'})
	f2.s({n: "Rigo", a: 7})
	f2.s('n', 'hah')
	Per = Bb.M.e({
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
	p = Per.o({n: "rigo", a: 7})
	cl = Bb.C.e().o()
	f1 = cl.A(f1)
	f2 = cl.A(f2)
	cl.rm(f1)
	Pers = Bb.C.e({m: Per})
	pers = Pers.o()
	p1 = pers.add(p)
	pers.add(p2)
	pers.rm(p1)
}
BADS = function () {
	$.x().h1('backcl').i('chicks').A()
	bads = $Cl()()
	bads.oA(function (s) {
		alert("new baddie: " + s.g("n"))
	})
	bads.add([{n: "bad1"}, {n: "bad2"}])
}
BACKCOL = function () {
	baddies = $C()
	baddies.oA(function (s) {
		alert("new baddie: " + s.g("n"))
	})
	baddies.add([{n: "bad1"}, {n: "bad2"}])
}
BACKCOL2 = function () {
	Friend = bbM({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = bbC()
	f1 = c.a(f1)
	f2 = c.a(f2)
	c.rm(f1)
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
COLLEC = function () {
	$.x().h1('BCL')
	Bk = $$M({
		d: {ID: '', n: ''}, id: "ID",
		url: 'http://localhost:51377/api/Books'
	})
	BksC = $$C({m: Bk})
	cl1 = BksC()
	bk1 = Bko({ID: 1, n: "Bk 1"})
	bk2 = Bko({ID: 2, n: "Bk 2"})
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
oldWay = function () {
	PLV = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
			t: 'li',
			x: 'some-per', k: 'per',
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			r: function () {
				this.$el.A('fasdfsfasd')
				_m = this.model
				//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
			},
			i: function () {
				this.r()
			}
		})
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.j(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
		PerV = Bb.V.e({
			t: 'li',
			x: 'some-per', k: 'per',
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			r: function () {
				this.$el.A('fasdfsfasd')
				_m = this.model
				//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
			},
			i: function () {
				this.r()
			}
		})
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.J(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BACKCOL = function () {
		z()
		baddies = $C().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
		baddies = bbC().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BB20 = BCL = function () {
		$.x().h1('BCL')
		Bk = Bb.M.e({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = Bb.C.e({m: Bk})
		cl1 = BksC.o()
		bk1 = Bk.o({ID: 1, n: "Bk 1"})
		bk2 = Bk.o({ID: 2, n: "Bk 2"})
		cl2 = BksC.o([bk1, bk2])
		bk3 = Bk.o({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
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
	BB21 = PLV0 = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
			t: 'li',
			x: 'some-per', k: 'per',
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			r: function () {
				this.$el.A('fasdfsfasd')
				_m = this.model
				//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
			},
			i: function () {
				this.r()
			}
		})
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.j(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BBCL = function () {
		$.x().h1('backcl')
		bads = Bb.C.e().o().oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
		Frnd = Bb.M.e({d: {lame: 1}})
		f1 = Frnd.o({n: "Lul", a: 67})
		f2 = Frnd.o({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = Bb.M.e({
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
		p = Per.o({n: "rigo", a: 7})
		cl = Bb.C.e().o()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = Bb.C.e({m: Per})
		pers = Pers.o()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	BBCOL = function () {
		$.x()
		Per = Bb.M.x({})
		p1 = Per.o({n: 'j'})
		p2 = Per.o({n: 'y'})
		Pers = Bb.C.e({model: Per})
		pers = Pers.o([p1, p2])
	}
}
RESET = function () {
	 
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
	// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
	function more() {
		//  replace  entire cl  content
		TdsCl = $cl()
		// we can listen for reset evs
		TdsCl.on("reset", function () {
			$l("Cl reset.")
		})
		TdsCl.A([{
			tt: 'go to Jamaica.', completed: false
		}, {
			tt: 'go to China.',
			completed: false
		},
			{tt: 'go to Disneyland.', completed: true}]);
		$l('Cl size: ' + TdsCl.length); // Cl size: 3
		TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
		// Above logs 'Cl reset.'
		$l('Cl size: ' + TdsCl.length); // Cl size: 1
		// use reset with no arguments to clear outcl completely.
		//  This is handy when dynamically loading new page of results
		// where you want to blank out current page of results.
		myCl.reset()
		// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
		// The reason you might want to use this is to perform super-optimized
		//rendering in extreme cases where individual evs are too expensive.
		td = $M()()
		tds = $Cl([td])()
				.on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
					$l(ops.prevMds);
					$l([td]);
					$l(ops.prevMds[0] === td); // true
				})
		tds.reset([])
		// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
		Beat = $M({d: {job: 'mus'}})
		john = Beat({fN: 'John', lN: 'Lennon'});
		paul = Beat({fN: 'Paul', lN: 'McCartney'});
		george = Beat({fN: 'George', lN: 'Harrison'});
		ringo = Beat({fN: 'Ringo', lN: 'Starr'});
		theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
		pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
		theBeats.s([john, paul, george, pete]); // Update cl
		// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
		// Updates any of John, Paul and Georges's atts that may have
		// changed over years.
	}
}
BABY = function () {
	$d(m = new Bb.M({}))
}
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
THOUGHTS = function () {
	$.get('/thoughts', function (obs) {
		_.e(obs, function (ob) {
			$.h1('ob: ' + ob.un)
		})
	})
}
function rtrApps() {
	$RoApp = function (name, fn) {
		startRtr = function (name) {
			Bb.h.start({
				pushState: true,
				root: "/mvc/" + name + "/"
			})
		}
		$Fn(name, function () {
			Ap = {M: {}, V: {}, C: {}}
			$l('name: ' + (name = _.tU(name)))
			$rtHeader(name)
			d = $.dI('ct').fS(40)
			fn();
			startRtr(name)
		})
	}
	rtsOb6 = rtsOb1 = {
		routes: {
			'': 'home',
			'view': 'view',
			':id': 'en',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			$l('home')
		},
		view: function () {
			$l('image')
		},
		en: function (id) {
			$l('id:' + id)
		}
	}
	rtsOb3 = {
		r: {
			hello: 'hi',
			goodbye: function () {
				$.C('o')
			}
		},
		_: function () {
			$l('indexxxxx')
			$.C('p')
		},
		hi: function () {
			$.C('g');
			alert('well hi there!')
		},
		d: function () {
			$.C('z')
			$.A(
					$.sp('d e f a u l t')
							.fS(30).C('g').col('w')
			)
		}
	}
	rtsOb4 = {
		r: {
			':post/:id': 'pam',
			'post/*id': 'splatMustBeLast',
			'*post': 'splat'
		},
		pam: function (post, id) {
			$l('Get post ' + id)
			$l('fnPam: ' + post + ', id# ' + id)
		},
		splat: function () {
			alert('1')
		},
		splatMustBeLast: function () {
			alert('2')
		},
		d: function (a) {
			$l('ddddddddd:' + a)
		},
		e: function (a) {
			$l('eeeeeeeee:' + a)
		}
	}
	RT1 = function () {
		$bd('font-size', 30).dI('ct')
		_$r({
			r: {
				'': 'pg1', pg1: 'pg1',
				pg2: $VW$('pg2', 'pg1', 'pg1')
			},
			pg1: $VW$('pg1', 'pg2', 'pg2')
		})
	}
	function $VW$(lbTx, aTx, href) {
		return function () {
			$autoV = function (fn) {
				return Bb.V.x({
					initialize: function () {
						this.render()
					},
					render: fn
				})
			}
			return new (($autoV(function () {
				this.$el.html($.__d(
						$.lb(lbTx),
						$.a(aTx, '#' + href)
				).oh())
			})))({
				el: $('#ct')
			})
		}
	}
	
	RT1OLD = NOPUSHSTATE = VID0 = WORKS = function () {
		$bd('font-size', 30)
				.dI('ct')
		$r({
			r: {
				'': 'pg1',
				'pg1': 'pg1',
				'pg2': 'pg2'
			},
			pg1: $VW$('view 1: want to know your NPI NUMBER??', 'Its at view 2. go ->', 'pg2'),
			pg2: $VW$('vw 2: nada', 'what was the question again?', 'pg1')
		})
	}
	RT2 = ROUTEE1 = function () {
		$l('RT2')
		n = 0
		rtr = $R({
			routes: {'*x': 'd'},
			d: function (a) {
				$l('educated? -> ' + a)
			},
			e: function (a) {
				$l('e:' + a)
				$l('n: =' + n++)
				$.h1().A('EDUCATION').A()
			}
		})
		$.bt('d', function () {
			rtr.N('e')
		})
		$.bt('e', function () {
			rtr.N('e')
		})
		Bb.h.s()
	}
	RT3 = ITEMZ = function () {
		ITEMZZ = function () {
			$.x();
			Ap = {M: {}, V: {}, C: {}}
			Ap.M.Item = $$M({})
			$$R({
				routes: {
					'': 'welcome',
					'itemlist': 'showItemList',
					'j': 'j',
					'': 'welcome',
					'wap/items': 'welcome1',
					'wap/items/itemlist': 'showItemList',
					'wap/items/j': 'j'
				},
				welcome: function () {
					$.bd().E().A($.h1('welcome'))
				},
				j: function () {
					$l('asdfjfsdafsdf')
				},
				showItemList: function () {
					$.bd().E().A($.h1('show item list'))
				}
			})()
			i1 = Ap.M.Item({n: 'jason', g: 'mason'})
			i1.oR('j', function () {
				$.bd().E().A($.h1('j'))
			})
			i1 = Ap.M.Item({n: 'jason', g: 'mason'})
			r.A('/wap/items/j', function () {
				$.bd().E().A(
						$.h1('j')
				)
			})
			r.A('/wap/items/q', function () {
				$.bd().E().A($.h1('q'))
			})
			Bb.h.start({pushState: true})
			$.bt('add', function () {
				r.n('/wap/items/itemlist')
			})
			$.bt('add1', function () {
				$.A($.h1('k'))
				r.n('/wap/items/j')
			})
			$.bt('add', function () {
				r.n('/itemlist')
			})
		}
		Ap = {M: {}, V: {}, C: {}}
		Ap.M.Item = _M({})
		rtr = $R({
			routes: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j',
				'wap/items': 'welcome1',
				'wap/items/itemlist': 'showItemList',
				'wap/items/j': 'j'
			},
			welcome: function () {
				$.bd().E().A($.h1('welcome'))
			},
			j: function () {
				$l('asdfjfsdafsdf')
			},
			showItemList: function () {
				$.bd().E().A($.h1('show item list'))
			}
		})
		item1 = Ap.M.Item({
			n: 'jason', g: 'licensing exams and work history '
		})
		item1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		rtr.A('/wap/items/j', function () {
			$.bd().E().A(
					$.h1('j')
			)
		})
		rtr.A('/wap/items/q', function () {
			$.bd().E().A($.h1('q'))
		})
		$.bt('add', function () {
			rtr.n('/wap/items/itemlist')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			rtr.n('/wap/items/j')
		})
		$.bt('add', function () {
			rtr.n('/itemlist')
		})
		Bb.h.s()
	}
	RT4 = NAVTOE = function () {
		rtr = $R({
			routes: {'*x': 'd'},
			d: function (a) {
				$l('d:' + a)
			},
			e: function (a) {
				$l('e:' + a)
			}
		})
		Bb.h.s()
		_.in(2, function () {
			rtr.N('e')
		})
	}
	rtsOb = rtsOb2 = {
		rt: {
			'': 'index',
			'wap/rtr/images/:id': 'image',
			view: 'viewImage'
		},
		image: function (id) {
			$l('image===')
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			})
			$.bd().C('z')
		},
		h: function () {
			alert('you are viewing MEDICAL page')
		},
		x: function () {
			alert('you are viewing index')
		},
		viewImage: function () {
			alert('you are viewing a BOARD CERTIFICATION image')
		}
	}
	RT5 = AHREF = function () {
		rtr = $R(rtsOb)
		_.in(function () {
			$l('REFERENCES')
			r.n('/wap/rtr/images/32903290239032902390')
		})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.bd().on('click', 'a[href^="/"]', function (ev) {
			$l('GAPS IN HISTORY')
			ev.preventDefault()
			rtr.n($(this).attr('href', {trigger: true}))
		})
	}
	RT6 = RTENAV = function () {
		RTENAV = function () {
			z()
			Rt = $$R({
				routes: {
					'po/:id': 'gp',
					'*a': 'dr'
				},
				dr: function (a) {
					al(a)
				},
				gp: function (id) {
					al('Get post ' + id)
				}
			})
			r = Rt()
			r.A('b/rnav/j', function () {
				alert('!')
			})
			Bb.h.s({pushState: true})
			$.bt('hi', function () {
				r.n('po/2', {t: 1})
			}).a()
			$.bt('hi', function () {
				rt.n('po/2')
			})
			$.bt('hi1', function () {
				rt.n('po/4')
			})
			$.bt('hiiiii', function () {
				r.navigate('b/rnavv/j', {trigger: true})
			})
		}
		Rt = $$R({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		r.A('b/rnav/j', function () {
			alert('!')
		})
		Bb.h.s({pushState: true})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('DEA', function () {
			rt.n('po/2')
		})
		$.bt('STATE LICENSE', function () {
			rt.n('po/4')
		})
		$.bt('LIFE SUPPORT (CPR)', function () {
			r.navigate('b/rnavv/j', {trigger: true})
		})
	}
	RT7 = function () {
		RTR0 = function () {
			$.x('y');
			$CSS({h1: {'font-size': 100}})
			r = $$R({
				rt: {
					'': 'index',
					'wap/rtr/images/:id': 'image',
					view: 'viewImage'
				},
				image: function (id) {
					_.t(10, function () {
						$l($r() + '-id: ' + id)
					})
					$.bd().C('z')
				},
				h: function () {
					alert('you are viewing home page')
				},
				x: function () {
					alert('you are viewing index')
				},
				viewImage: function () {
					alert('you are viewing an image')
				}
			})()
			Bb.h.start({pushState: true})
			_.in(3, function () {
				r.n('55c24c8f4198473b0d000004.png')
			})
			//looks for clicks on any anchor els where
			//href starts with '/' (no domain) and stop
			//bw from nv to it
			$.a().A($.h1('afsd'))
			$('body').on('click', 'a[href^="/"]', function (ev) {
				ev.preventDefault()
				r.n($(this).attr('href', {trigger: true}))
			})
		}
		$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			rtr.n($(this).attr('href', {trigger: true}))
		}).A($.a().A($.h1('afsd')))
		rtr = _$R(rtsOb2)()
		_.in(3, function () {
			rtr.n('55c24c8f4198473b0d000004.png')
		})
		Bb.h.start({pushState: true})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
	}
	RT8 = VID00 = function () {
		VID00 = function () {
			$FirstVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var first = $.d().rm().A(
							$.lb().A('My 1st View'), $.br(),
							$.a().hr('sec').A('Go to 2nd View')
					).oh();
					this.$el.html(first)
				}
			})
			$SecVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var sec = $.d().rm()
							.A($.lb().A('My 2nd View'), $.br(), $.a()
									.hr('first').A('Go to 1st View'))
							.oh()
					this.$el.html(sec)
				}
			})
			z();
			$('body').C('o').css('font-size', 80)
			$.d().id('ct')
			$$R({
				r: {
					'': 'pg1',
					'first': 'pg1',
					'sec': 'pg2'
				},
				pg1: function () {
					new $FirstVw({el: $('#ct')})
				},
				pg2: function () {
					new $SecVw({el: $('#ct')})
				}
			})()
			Bb.h.start(
					//{pushState:true}
			)
		}
		$FirstVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var first = $.d().rm().A(
						$.lb().A('My 1st View'), $.br(),
						$.a().hr('sec').A('Go to 2nd View')
				).oh();
				this.$el.html(first)
			}
		})
		$SecVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var sec = $.d().rm()
						.A($.lb().A('My 2nd View'), $.br(), $.a()
								.hr('first').A('Go to 1st View'))
						.oh()
				this.$el.html(sec)
			}
		})
		$bd('font-size', 80).dI('ct')
		_$R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				new $FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new $SecVw({el: $('#ct')})
			}
		})()
		Bb.h.start(
				//{pushState:true}
		)
	}  //push state not working???
	RT114 = STILLNOPUSH = VID1 = function () {
		STILLNOPUSH = VID1 = function () {
			z();
			$('body').C('o').css('font-size', 80)
			$.d().id('ct')
			$$R({
				r: {
					':post/:id': 'pam',
					'*post': 'splat',
					'post/*id': 'splatMustBeLast'
				},
				pam: function (post, id) {
					$l('fnPam: ' + post + ', id# ' + id)
				},
				splat: function () {
					alert('1')
				},
				splatMustBeLast: function () {
					alert('2')
				}
			})()
			Bb.h.start({pushState: true})
		}
		$bd('font-size', 80).dI('ct')
		_$R({
			r: {
				':post/:id': 'pam',
				'*post': 'splat',
				'post/*id': 'splatMustBeLast'
			},
			pam: function (post, id) {
				$l('fnPam: ' + post + ', id# ' + id)
			},
			splat: function () {
				alert('1')
			},
			splatMustBeLast: function () {
				alert('2')
			}
		})()
		Bb.h.start({pushState: true})
	}
	RT17 = RTPAMS = function () {
		RT12 = RTPAMS = function () {
			RTPAMS = function () {
				r = $$R(rtsOb6)()
				r.oR('dfR', $l)
				r.oR('gPo', function (id) {
					$l('gPo# ' + id)
				})
				r.oR('gPo', function () {
					$l(3)
				}) //both routes fire!
				r.oR('dlF', $l)
				r.oR('ldV', function (rt, ac) {
					$l(rt + '_' + ac)
				})
			}
			$.x().A('driver lincese')
			r = _$R(rtsOb1)()
			r.oR('dfR LIABILITY', $l)
			r.oR('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.oR('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.oR('dlF HOSPITAL AFFILIATION', $l)
			r.oR('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
		}
		RTPAMS = function () {
			z();
			$.x().A('rtpams hahahahhahaha')
			r = $$R({
				routes: {
					"*x": "d",
					'': 'home',
					'view': 'v',
					'new': 'nn',
					':id': 'en',
					'posts/:id': 'gPo',
					'*acts': 'dfR',
					'download/*path': 'dlF',
					':route/:action': 'ldV'
				},
				home: function () {
					$l('home')
				},
				v: function () {
					$l('image')
				},
				nn: function () {
				},
				en: function (id) {
					$l('id:' + id)
				}
			})()
			r.oR('dfR', alert)
			r.oR('gPo', function (id) {
				alert('gPo# ' + id)
			})
			r.oR('gPo', function () {
				alert(3)
			}) //both routes fire!
			r.oR('dlF', alert)
			r.oR('ldV', function (rt, ac) {
				alert(rt + '_' + ac)
			})
			// H$()  // or Bb.h.s({pushState: true})
			// r.oR('dfR', alert)
			r.on('route:gPo', function (id) {
				alert('gPo# ' + id)
			})
			r.oR('gPo', function () {
				alert(3)
			}) //both routes fire!
			//r.oR('dlF', alert)
			r.oR('ldV', function (rt, ac) {
				alert(rt + '_' + ac)
			})
			Bb.h.start({pushState: true})
			r.o('dfR', $l)
			r.o('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.o('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.o('dlF', $l)
			r.o('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
			r.oR('d', function (a) {
				alert(a)
				$l('d:' + a)
			})//#hello -> 'hello'
			r.oR('e', function (a) {
				alert(a)
				$l('e:' + a)
			})//#e -> 'e' (could do '/#/e')
			r.oR('d', function (a) {
				alert(a)
			})//#hello -> 'hello'
			r.oR('e', function (a) {
				alert(a)
			})//#e -> 'e' (could do '/#/e')
			w.h.start() // H$()
			_.in(2, function () {
				Bb.h.navigate('d', {trigger: true})
			})
			_.in(2, function () {
				Bb.h.navigate('d', {trigger: true})
			})
		}
		z();
		$.x().A('rtpams hahahahhahaha')
		r = $$R({
			routes: {
				"*x": "d",
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		})()
		r.oR('dfR', alert)
		r.oR('gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		// H$()  // or Bb.h.s({pushState: true})
		// r.oR('dfR', alert)
		r.on('route:gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		//r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		Bb.h.start({pushState: true})
		r.o('dfR', $l)
		r.o('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.o('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.o('dlF', $l)
		r.o('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
		r.oR('d', function (a) {
			alert(a)
			$l('d:' + a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
			$l('e:' + a)
		})//#e -> 'e' (could do '/#/e')
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		w.h.start() // H$()
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
	}
	RT = HOWDYPAM = ADDRESSES = function () {
		d = $.d()
		$.bt('add LAST SEVEN YEARS', function () {
			r.n('items')
		})
		$.bt('add1 address', function () {
			$.A($.h1('k'))
			r.n('items/j')
		})
		rts = {
			'cool/:name': 'welcome',
			'image/:id': 'image',
			'items': 'items',
			'items/:item': 'item',
			'itemlist': 'showItemList'
		}
		$R({
			r: rts,
			welcome: function (name) {
				var greet = 'howdy, ' + name + '!'
				d.h(greet)
				$l(greet)
				//$.bd().E().A($.h1('welcome'))
			},
			items: function () {
				$.bd().E().A($.h1('show item list'))
			},
			item: function (item) {
				$.bd().E().A($.h1('show item: ' + item))
			},
			image: function (id) {
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			_: function () {
				$l('you are viewing index')
			}
		})
		Bb.h.start({pushState: true})
		// _.in(2,function(){ r.n('cool/jason') })
		//_.in(5, function () {$l('-> img'); r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})})
	}
	$RoApp('RT13', function () {
		rtr = $R(rtsOb4)
		$.bt('index', function () {
			rtr.n('')
		})
		$.bt('hello', function () {
			rtr.n('hello')
		})
		$.bt('goodbye', function () {
			rtr.n('goodbye')
		})
		$.bt('default', function () {
			r.n('asfd/afsd')
		})
	})
	$RoApp('RT14', function () {
		$R(rtsOb4)
		r.A('rnav/j', function () {
			alert('!')
		})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.n('b/rnavv/j', {trigger: true})
		})
		$.a('home', '/b/routee')
		_.in(2, function () {
			r.n('d')
		})
		function alpha() {
			function anchorClickBlocker() {
				//looks for clicks on any anchor els where
				//href starts with '/' (no domain) and stop
				//bw from nv to it
				$.bd().on('click', 'a[href^="/"]', function (ev) {
					$l('wow')
					ev.preventDefault()
					r.n($(this).attr('href', {trigger: true}))
				})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
				$('body').on('click', 'a[href^="/"]', function (ev) {
					ev.preventDefault()
					r.n($(this).attr('href'))
				})
			}
			
			$.a().A($.h1('afsd'))
			anchorClickBlocker()
		}
	})
	$RoApp('RT15', function () {
		FirstVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.sp('My 1st View').fS(60),
						$.bt('Go to 2nd View', function (e) {
							$l('clicked "go to 2nd View" anchor')
							r.n('sec')
						}).C('y')))
			}
		})
		FirstVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.sp('My 1st View').fS(60),
						$.bt('Go to 2nd View', function (e) {
							$l('clicked "go to 2nd View" anchor')
							r.n('sec')
						}).C('y')))
			}
		})
		SecVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.bt('Go to 1st View', function (e) {
							$l('clicked "go to 1st View" anchor')
							r.n('first')
						}).C('o'),
						$.sp('My 2nd View').fS(50)
				))
			}
		})
		SecVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.bt('Go to 1st View', function (e) {
							$l('clicked "go to 1st View" anchor')
							r.n('first')
						}).C('o'),
						$.sp('My 2nd View').fS(50)
				))
			}
		})
		r = $R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				$l('in pg1')
				FirstVw({
					el: $('#ct')
				})
			},
			pg2: function () {
				$l('in pg2')
				SecVw({el: $('#ct')})
			}
		})
		r = $R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				$l('in pg1')
				FirstVw({
					el: $('#ct')
				})
			},
			pg2: function () {
				$l('in pg2')
				SecVw({el: $('#ct')})
			}
		})
	})
	RTRVIEWS = SHOWVW = NORTR = function () {
		v1 = v2 = v3 = 0
		$.d('r', 100, 100).id('div')
		// ha.. this is just 'no router'
		V1 = $V({
			i: function () {
				this.r()
			}, r: function () {
				
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		V2 = $V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this
			}
		})
		V3 = $V({
			i: function () {
				this.render()
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3")
				return this
			}
		})
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(this.model.get('Ms') + " from the View 1")
				return this
			}
		})
		V2 = $$V({
			i: function () {
				this.r();
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this;
			}
		})
		V3 = $$V({
			i: function () {
				this.render();
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3");
				return this;
			}
		})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $V({
			chV: 0,
			render: function () {
				this.$el.ht('Hi Area').A(
						this.chV.$el
				)
				return this
			}
		})
		hi = V1({Ms: "Hello world"})
		ct = CtV({
			el: $("#div"),
			model: hi
		})
		/*
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		$.bt('v1', function () {
					if (!v1) {
						v1 = V1({model: hi})
					}
					ct.chV = v1
					ct.render()
				}
		)
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.render()
		})
		// Now we need a view that will contain the view
		// and render it whenever the user makes a choice on the screen.
		CtV = $$V({
			myChildV: null,
			r: function () {
				this.$el.ht("Greeting Area");
				this.$el.A(this.myChildV.$el);
				return this;
			}
		})
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		greet = V1({
			Ms: "Hello world"
		})
		cont = CtV({
			el: $("#AppContainer"),
			model: greet
		})
		v1 = null;
		v2 = null;
		v3 = null;
		function showView1() {
			if (view1 == null) {
				view1 = new View1({model: greeting});
			}
			container.myChildView = view1;
			container.render();
		}
		
		function showView2() {
			if (view2 == null) {
				view2 = new View2({model: greeting});
			}
			container.myChildView = view2;
			container.render();
		}
		
		function showView3() {
			if (view3 == null) {
				view3 = new View3({model: greeting});
			}
			container.myChildView = view3;
			container.render();
		}
	}
	SHOWVW = NOROUTER = function () {
		$.x()
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.h(
						this.model.get('Ms') + " from the View 1")
				return this
			}
		})
		V2 = $$V({
			i: function () {
				this.r();
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this;
			}
		})
		V3 = $$V({
			i: function () {
				this.render();
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3");
				return this;
			}
		})
		// Now we need a view that will contain the view
		// and render it whenever the user makes a choice on the screen.
		CtV = $$V({
			myChildV: null,
			r: function () {
				this.h("Greeting Area");
				this.A(
						this.myChildV.$el);
				return this;
			}
		})
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		greet = V1({Ms: "Hello world"})
		cont = CtV({
			el: $("#AppContainer"),
			model: greet
		})
		v1 = null;
		v2 = null;
		v3 = null;
		function showView1() {
			if (view1 == null) {
				view1 = new View1({model: greeting});
			}
			container.myChildView = view1;
			container.render();
		}
		
		function showView2() {
			if (view2 == null) {
				view2 = new View2({model: greeting});
			}
			container.myChildView = view2;
			container.render();
		}
		
		function showView3() {
			if (view3 == null) {
				view3 = new View3({model: greeting});
			}
			container.myChildView = view3;
			container.render();
		}
	}
	NORTR = function () {
		$.x(null, 'no router')
		v1 = 0
		v2 = 0
		v3 = 0
		dv = $.d('r', 100, 100).id('div')
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		hi = V1({
			Ms: "Hello world"
		})
		$.bt('v1', function () {
			v1 = v1 || V1({m: hi})
			ct.chV = v1
			ct.r()
		})
		V2 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(
						this.g('Ms') + " from the View 2"
				);
				return this
			}
		})
		//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $$V({
			chV: 0,
			r: function () {
				this.h('Hi Area')
				this.A(this.chV.$el)
				return this
			}
		})
		/*
		
		 ct = CtV({
		 el:dv,
		 model: hi
		 })
		
		
		
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		
		
		 */
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.r()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({model: hi})
			}
			ct.chV = v3
			ct.r()
		})
	}
	SHOWVW = NOROUTER = function () {
		$.x()
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.h(
						this.model.get('Ms') + " from the View 1")
				return this
			}
		})
		V2 = $$V({
			i: function () {
				this.r();
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this;
			}
		})
		V3 = $$V({
			i: function () {
				this.render();
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3");
				return this;
			}
		})
		// Now we need a view that will contain the view
		// and render it whenever the user makes a choice on the screen.
		CtV = $$V({
			myChildV: null,
			r: function () {
				this.h("Greeting Area");
				this.A(
						this.myChildV.$el);
				return this;
			}
		})
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		greet = V1({Ms: "Hello world"})
		cont = CtV({
			el: $("#AppContainer"),
			model: greet
		})
		v1 = null;
		v2 = null;
		v3 = null;
		function showView1() {
			if (view1 == null) {
				view1 = new View1({model: greeting});
			}
			container.myChildView = view1;
			container.render();
		}
		
		function showView2() {
			if (view2 == null) {
				view2 = new View2({model: greeting});
			}
			container.myChildView = view2;
			container.render();
		}
		
		function showView3() {
			if (view3 == null) {
				view3 = new View3({model: greeting});
			}
			container.myChildView = view3;
			container.render();
		}
	}
	NORTR = function () {
		$.x(null, 'no router')
		v1 = 0
		v2 = 0
		v3 = 0
		dv = $.d('r', 100, 100).id('div')
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		hi = V1({
			Ms: "Hello world"
		})
		$.bt('v1', function () {
			v1 = v1 || V1({m: hi})
			ct.chV = v1
			ct.r()
		})
		V2 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(
						this.g('Ms') + " from the View 2"
				);
				return this
			}
		})
		//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $$V({
			chV: 0,
			r: function () {
				this.h('Hi Area')
				this.A(this.chV.$el)
				return this
			}
		})
		/*
		
		 ct = CtV({
		 el:dv,
		 model: hi
		 })
		
		
		
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		
		
		 */
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.r()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({model: hi})
			}
			ct.chV = v3
			ct.r()
		})
	}
	NORTR = function () {
		v1 = v2 = v3 = 0
		$.d('r', 100, 100).id('div')
		// ha.. this is just 'no router'
		V1 = $V({
			i: function () {
				this.r()
			}, r: function () {
				
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		V2 = $V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this
			}
		})
		V3 = $V({
			i: function () {
				this.render()
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3")
				return this
			}
		})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $V({
			chV: 0,
			render: function () {
				this.$el.ht('Hi Area').A(
						this.chV.$el
				)
				return this
			}
		})
		hi = V1({Ms: "Hello world"})
		ct = CtV({
			el: $("#div"),
			model: hi
		})
		/*
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		$.bt('v1', function () {
					if (!v1) {
						v1 = V1({model: hi})
					}
					ct.chV = v1
					ct.render()
				}
		)
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.render()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({model: hi})
			}
			ct.chV = v3
			ct.render()
		})
	}
	ROUTE = function () {
		z()
		$R({r: {"*x": "d"}}, '+')
		r.oR('d', function (a) {
			$l('d:' + a)
		})
		r.oR('e', function (a) {
			$l('e:' + a)
		})
	}
	ROUTEPAMS = function () {
		$.x().A('hahahahhahaha')
		RTob = {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		}
		$R({
			rt: RTob,
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		}, '+')
		r.oR('dfR', $l)
		r.oR('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.oR('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.oR('dlF', $l)
		r.oR('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
	}
	ROUTE = function () {
		z()
		r = bbR({
			R: {"*x": "d"}
		})()
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		bbH()
	}
	ROUTEPAMS = function () {
		z()
		rtr = bbR({
			R: {
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				al('home')
			},
			v: function () {
				al('image')
			},
			nn: function () {
			},
			en: function (id) {
				al(id)
			}
		})
		r = rtr()
		r.oR('dfR', al)
		r.oR('gPo', function (id) {
			al('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', al)
		r.oR('ldV', function (rt, ac) {
			al(rt + '_' + ac)
		})
		bbH()  // or Bb.h.s({pushState: true})
	}
	ROUTENAV = function () {
		z()
		Rt = bbR({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		bbH()
		bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
	}
	RTR = function () {
		$.x('b')
		RTob = {
			'': 'index',
			'wap/rtr/images/:id': 'image',
			view: 'viewImage'
		}
		$R({
			r: RTob,
			h: function () {
				$l('you are viewing home page')
			},
			x: function () {
				$l('you are viewing index')
			},
			image: function (id) {
				$l('image===')
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				});
				$.bd().C('z')
			},
			viewImage: function () {
				$l('you are viewing an image')
			}
		}, '+')
		$.in(function () {
			$l('......')
			r.n('/wap/rtr/images/32903290239032902390')
		}, '*')
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.bd().on('click', 'a[href^="/"]', function (ev) {
			$l('wow')
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
	}
	ROUTENAV = function () {
		$.x('b')
		$R({
			r: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				$l(a)
			},
			gp: function (id) {
				$.bd().C($r())
				$l('Get post ' + id)
			}
		}, '+')
		$.bt('hi', function () {
			rt.n('po/2')
		})
	}
	ROUTE = function () {
		z()
		r = bbR({
			R: {"*x": "d"}
		})()
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		bbH()
	}
	ROUTEPAMS = function () {
		z()
		rtr = bbR({
			R: {
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				al('home')
			},
			v: function () {
				al('image')
			},
			nn: function () {
			},
			en: function (id) {
				al(id)
			}
		})
		r = rtr()
		r.oR('dfR', al)
		r.oR('gPo', function (id) {
			al('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', al)
		r.oR('ldV', function (rt, ac) {
			al(rt + '_' + ac)
		})
		bbH()  // or Bb.h.s({pushState: true})
	}
	ROUTENAV = function () {
		z()
		Rt = bbR({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		bbH()
		bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
	}
	function routApps() {
		ROUTEE = function () {
			$.x();
			$l('routee')
			r = $$R({
				routes: {
					'*x': 'd'
				},
				d: function (a) {
					$l('dddddddddddddddddddd')
					$l('d:' + a)
				},
				e: function (a) {
					$l('e:' + a)
				}
			})()
			// r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})
			Bb.h.start()
			_.in(2, function () {
				Bb.h.navigate('d', {trigger: true})
			})
		}
		NOPUSHSTATE = VID0 = function () {
			z();
			FirstVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var first = $.d().rm().A(
							$.lb().A('My 1st View'), $.br(),
							$.a().hr('#sec').A('Go to 2nd View')
					).oh();
					this.$el.html(first)
				}
			})
			SecVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var sec = $.d().rm()
							.A($.lb().A('My 2nd View'), $.br(), $.a()
									.hr('#first').A('Go to 1st View'))
							.oh()
					this.$el.html(sec)
				}
			})
			$('body').C('o').css('font-size', 80)
			$.d().id('ct')
			$$R({
				r: {'': 'pg1', 'first': 'pg1', 'sec': 'pg2'},
				pg1: function () {
					new FirstVw({el: $('#ct')})
				},
				pg2: function () {
					new SecVw({el: $('#ct')})
				}
			})()
			Bb.h.start(
					//{pushState:true}
			)
		}
		STILLNOPUSH = VID1 = function () {
			z();
			$('body').C('o').css('font-size', 80)
			$.d().id('ct')
			$$R({
				r: {
					':post/:id': 'pam',
					'*post': 'splat',
					'post/*id': 'splatMustBeLast'
				},
				pam: function (post, id) {
					$l('fnPam: ' + post + ', id# ' + id)
				},
				splat: function () {
					alert('1')
				},
				splatMustBeLast: function () {
					alert('2')
				}
			})()
			Bb.h.start({pushState: true})
		}
//WORKS (above):
		VID00 = function () {
			$FirstVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var first = $.d().rm().A(
							$.lb().A('My 1st View'), $.br(),
							$.a().hr('sec').A('Go to 2nd View')
					).oh();
					this.$el.html(first)
				}
			})
			$SecVw = Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: function () {
					var sec = $.d().rm()
							.A($.lb().A('My 2nd View'), $.br(), $.a()
									.hr('first').A('Go to 1st View'))
							.oh()
					this.$el.html(sec)
				}
			})
			z();
			$('body').C('o').css('font-size', 80)
			$.d().id('ct')
			$$R({
				r: {
					'': 'pg1',
					'first': 'pg1',
					'sec': 'pg2'
				},
				pg1: function () {
					new $FirstVw({el: $('#ct')})
				},
				pg2: function () {
					new $SecVw({el: $('#ct')})
				}
			})()
			Bb.h.start(
					//{pushState:true}
			)
		}  //push state not working???
		SHOWVW = NORTR = function () {
			$.x()
			V1 = $$V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.ht(this.model.get('Ms') + " from the View 1")
					return this
				}
			})
			V2 = $$V({
				i: function () {
					this.r();
				},
				r: function () {
					this.$el.ht(this.model.g('Ms') + " from the View 2");
					return this;
				}
			})
			V3 = $$V({
				i: function () {
					this.render();
				},
				r: function () {
					this.$el.html(this.model.get('Message') + " from the View 3");
					return this;
				}
			})
			// Now we need a view that will contain the view
			// and render it whenever the user makes a choice on the screen.
			CtV = $$V({
				myChildV: null,
				r: function () {
					this.$el.ht("Greeting Area");
					this.$el.A(this.myChildV.$el);
					return this;
				}
			})
			/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
			 We will then position three buttons on the UI which will let the user to change the view.
			 Below code shows the application setup that is creating the container view and the functions
			 that will get invoked when the user selects the view from screen.
			 */
			greet = V1({
				Ms: "Hello world"
			})
			cont = CtV({
				el: $("#AppContainer"),
				model: greet
			})
			v1 = null;
			v2 = null;
			v3 = null;
			function showView1() {
				if (view1 == null) {
					view1 = new View1({model: greeting});
				}
				container.myChildView = view1;
				container.render();
			}
			
			function showView2() {
				if (view2 == null) {
					view2 = new View2({model: greeting});
				}
				container.myChildView = view2;
				container.render();
			}
			
			function showView3() {
				if (view3 == null) {
					view3 = new View3({model: greeting});
				}
				container.myChildView = view3;
				container.render();
			}
		}
		NORTR0 = function () {
			$.x(null, 'no router');
			v1 = v2 = v3 = 0
			$.d('r', 100, 100).id('div')
			// ha.. this is just 'no router'
			V1 = $V({
				i: function () {
					this.r()
				}, r: function () {
					
					//this.$el.ht(this.model.get('Ms') + " from the View 1" )
					return this
				}
			})
			V2 = $V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.ht(this.model.g('Ms') + " from the View 2");
					return this
				}
			})
			V3 = $V({
				i: function () {
					this.render()
				},
				r: function () {
					this.$el.html(this.model.get('Message') + " from the View 3")
					return this
				}
			})
			// Now we need a view that will contain the view
			// and render it
			// whenever the user makes a choice on the screen.
			CtV = $V({
				chV: 0,
				render: function () {
					this.$el.ht('Hi Area').A(
							this.chV.$el
					)
					return this
				}
			})
			hi = V1({Ms: "Hello world"})
			ct = CtV({
				el: $("#div"),
				model: hi
			})
			/*
			 Now lets create a simple div on the UI which will be used as el to this ContainerView.
			 We will then position three buttons on the UI which will let the user to change the view.
			 Below code shows the application setup that is creating the container view and the functions
			 that will get invoked when the user selects the view from screen.
			 */
			$.bt('v1', function () {
						if (!v1) {
							v1 = V1({model: hi})
						}
						ct.chV = v1
						ct.render()
					}
			)
			$.bt('v2', function () {
				if (!v2) {
					v2 = V2({model: hi})
				}
				ct.chV = v2
				ct.render()
			})
			$.bt('v3', function () {
				if (!v3) {
					v3 = V3({model: hi})
				}
				ct.chV = v3
				ct.render()
			})
		}
		RTPAMS = function () {
			z();
			$.x().A('rtpams hahahahhahaha')
			r = $$R({
				routes: {
					"*x": "d",
					'': 'home',
					'view': 'v',
					'new': 'nn',
					':id': 'en',
					'posts/:id': 'gPo',
					'*acts': 'dfR',
					'download/*path': 'dlF',
					':route/:action': 'ldV'
				},
				home: function () {
					$l('home')
				},
				v: function () {
					$l('image')
				},
				nn: function () {
				},
				en: function (id) {
					$l('id:' + id)
				}
			})()
			r.oR('dfR', alert)
			r.oR('gPo', function (id) {
				alert('gPo# ' + id)
			})
			r.oR('gPo', function () {
				alert(3)
			}) //both routes fire!
			r.oR('dlF', alert)
			r.oR('ldV', function (rt, ac) {
				alert(rt + '_' + ac)
			})
			// H$()  // or Bb.h.s({pushState: true})
			// r.oR('dfR', alert)
			r.on('route:gPo', function (id) {
				alert('gPo# ' + id)
			})
			r.oR('gPo', function () {
				alert(3)
			}) //both routes fire!
			//r.oR('dlF', alert)
			r.oR('ldV', function (rt, ac) {
				alert(rt + '_' + ac)
			})
			Bb.h.start({pushState: true})
			r.o('dfR', $l)
			r.o('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.o('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.o('dlF', $l)
			r.o('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
			r.oR('d', function (a) {
				alert(a)
				$l('d:' + a)
			})//#hello -> 'hello'
			r.oR('e', function (a) {
				alert(a)
				$l('e:' + a)
			})//#e -> 'e' (could do '/#/e')
			r.oR('d', function (a) {
				alert(a)
			})//#hello -> 'hello'
			r.oR('e', function (a) {
				alert(a)
			})//#e -> 'e' (could do '/#/e')
			w.h.start() // H$()
			_.in(2, function () {
				Bb.h.navigate('d', {trigger: true})
			})
			_.in(2, function () {
				Bb.h.navigate('d', {trigger: true})
			})
		}
		ITEMZ = function () {
			$.x();
			Ap = {M: {}, V: {}, C: {}}
			Ap.M.Item = $$M({})
			$$R({
				routes: {
					'': 'welcome',
					'itemlist': 'showItemList',
					'j': 'j',
					'': 'welcome',
					'wap/items': 'welcome1',
					'wap/items/itemlist': 'showItemList',
					'wap/items/j': 'j'
				},
				welcome: function () {
					$.bd().E().A($.h1('welcome'))
				},
				j: function () {
					$l('asdfjfsdafsdf')
				},
				showItemList: function () {
					$.bd().E().A($.h1('show item list'))
				}
			})()
			i1 = Ap.M.Item({n: 'jason', g: 'mason'})
			i1.oR('j', function () {
				$.bd().E().A($.h1('j'))
			})
			i1 = Ap.M.Item({n: 'jason', g: 'mason'})
			r.A('/wap/items/j', function () {
				$.bd().E().A(
						$.h1('j')
				)
			})
			r.A('/wap/items/q', function () {
				$.bd().E().A($.h1('q'))
			})
			Bb.h.start({pushState: true})
			$.bt('add', function () {
				r.n('/wap/items/itemlist')
			})
			$.bt('add1', function () {
				$.A($.h1('k'))
				r.n('/wap/items/j')
			})
			$.bt('add', function () {
				r.n('/itemlist')
			})
		}
		RTR0 = function () {
			$.x('y');
			$CSS({h1: {'font-size': 100}})
			r = $$R({
				rt: {
					'': 'index',
					'wap/rtr/images/:id': 'image',
					view: 'viewImage'
				},
				image: function (id) {
					_.t(10, function () {
						$l($r() + '-id: ' + id)
					})
					$.bd().C('z')
				},
				h: function () {
					alert('you are viewing home page')
				},
				x: function () {
					alert('you are viewing index')
				},
				viewImage: function () {
					alert('you are viewing an image')
				}
			})()
			Bb.h.start({pushState: true})
			_.in(3, function () {
				r.n('55c24c8f4198473b0d000004.png')
			})
			//looks for clicks on any anchor els where
			//href starts with '/' (no domain) and stop
			//bw from nv to it
			$.a().A($.h1('afsd'))
			$('body').on('click', 'a[href^="/"]', function (ev) {
				ev.preventDefault()
				r.n($(this).attr('href', {trigger: true}))
			})
		}
		RTENAV = function () {
			z()
			Rt = $$R({
				routes: {
					'po/:id': 'gp',
					'*a': 'dr'
				},
				dr: function (a) {
					al(a)
				},
				gp: function (id) {
					al('Get post ' + id)
				}
			})
			r = Rt()
			r.A('mvc/rnav/j', function () {
				alert('!')
			})
			Bb.h.s({pushState: true})
			$.bt('hi', function () {
				r.n('po/2', {t: 1})
			}).a()
			$.bt('hi', function () {
				rt.n('po/2')
			})
			$.bt('hi1', function () {
				rt.n('po/4')
			})
			$.bt('hiiiii', function () {
				r.navigate('mvc/rnavv/j', {trigger: true})
			})
		}
		AHREF = RTR1 = function () {
			$.x('b')
			$R({
				routes: {
					'': 'index',
					'wap/rtr/images/:id': 'image',
					view: 'viewImage'
				},
				h: function () {
					$l('you are viewing home page')
				},
				x: function () {
					$l('you are viewing index')
				},
				image: function (id) {
					$l('image===')
					_.t(10, function () {
						$l($r() + '-id: ' + id)
					});
					$.bd().C('z')
				},
				viewImage: function () {
					$l('you are viewing an image')
				}
			})
			_.in(function () {
				$l('......')
				r.n('/wap/rtr/images/32903290239032902390')
			})
			//looks for clicks on any anchor els where
			//href starts with '/' (no domain) and stop
			//bw from nv to it
			$.bd().on('click', 'a[href^="/"]', function (ev) {
				$l('wow')
				ev.preventDefault()
				r.n($(this).attr('href', {trigger: true}))
			})
		}
		RTPAMS = function () {
			$.x().A('hahahahhahaha')
			r = $$R({
				routes: {
					'': 'home',
					'view': 'v',
					'new': 'nn',
					':id': 'en',
					'posts/:id': 'gPo',
					'*acts': 'dfR', 'download/*path': 'dlF',
					':route/:action': 'ldV'
				},
				home: function () {
					$l('home')
				},
				v: function () {
					$l('image')
				},
				nn: function () {
				},
				en: function (id) {
					$l('id:' + id)
				}
			})()
			r.oR('dfR', $l)
			r.oR('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.oR('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.oR('dlF', $l)
			r.oR('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
		}
		function roap() {
			$l('bbRoApps2');
			$Fn = function (name, fn) {
				window[name] = fn;
				return fn
			}
			$RoApp = function (name, fn) {
				$Fn(name, function () {
					z();
					header(name);
					fn();
					startRtr(name)
					function header(name) {
						$.d().A($.d().A('this is a RoApp').fS(75).col('r'),
								$.sp().A(name).fS(100).col('x').C('o'))
					}
					
					function startRtr(name) {
						Bb.h.start({pushState: true, root: "/mvc/" + name + "/"})
					}
				})
			}
			$RoApp('ROAP1', function () {
				ro = $R({
					r: {
						hello: 'hi',
						goodbye: function () {
							$.C('o')
						}
					},
					_: function () {
						$.C('p')
					},
					hi: function () {
						$.C('g');
						alert('well hi there!')
					}
				})
				$.bt('index', function () {
					ro.n('')
				})
				$.bt('hello', function () {
					ro.n('hello')
				})
				$.bt('goodbye', function () {
					ro.n('goodbye')
				})
			})
			$RoApp('ROAP2', function () {
				ro = $R({
					r: {
						hello: 'hi',
						goodbye: function () {
							$.C('o')
						}
					},
					_: function () {
						$.C('p')
					},
					hi: function () {
						$.C('g');
						alert('well hi there!')
					}
				})
				$.bt('index', function () {
					ro.n('')
				})
				$.bt('hello', function () {
					ro.n('hello')
				})
				$.bt('goodbye', function () {
					ro.n('goodbye')
				})
			})
//notes:  '':'_', (handled by _$$R now, instead) (see _$$R api)
		}
	}
	
	function routApps2() {
		$Fn = function (name, fn) {
			window[name] = fn;
			return fn
		}
		$RoApp = function (name, fn) {
			$Fn(name, function () {
				name = _.tU(name)
				$l('name: ' + name)
				Ap = {M: {}, V: {}, C: {}}
				z();
				header(name);
				d = $.d().id('ct').fS(40)
				fn();
				startRtr(name)
				function header(name) {
					$.d().A(
							$.sp().A('this is RoApp: ').fS(75).col('r'),
							$.sp().A(name)
									.fS(100).col('x').C('o'),
							$.d('B').H(8).W('auto')
					)
				}
				
				function startRtr(name) {
					Bb.h.start({
						pushState: true,
						root: "/mvc/" + name + "/"
					})
				}
			})
		}
		$RoApp('ROAP', function () {
			$R({
				r: {
					hello: 'hi',
					goodbye: function () {
						$.C('o')
					}
				},
				_: function () {
					$l('indexxxxx')
					$.C('p')
				}, //index
				hi: function () {
					$.C('g');
					alert('well hi there!')
				},
				d: function () {
					$.C('z')
					$.A(
							$.sp('d e f a u l t')
									.fS(30).C('g').col('w')
					)
				} //default
			})
			$.bt('index', function () {
				r.n('')
			})
			$.bt('hello', function () {
				r.n('hello')
			})
			$.bt('goodbye', function () {
				r.n('goodbye')
			})
			$.bt('default', function () {
				r.n('asfd/afsd')
			})
		})
		$RoApp('TWOVWS', function () {
			FirstVw = $$V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.E().A($.d().A(
							$.sp('My 1st View').fS(60),
							$.bt('Go to 2nd View', function (e) {
								$l('clicked "go to 2nd View" anchor')
								r.n('sec')
							}).C('y')))
				}
			})
			SecVw = $$V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.E().A($.d().A(
							$.bt('Go to 1st View', function (e) {
								$l('clicked "go to 1st View" anchor')
								r.n('first')
							}).C('o'),
							$.sp('My 2nd View').fS(50)
					))
				}
			})
			r = $R({
				r: {
					'': 'pg1',
					'first': 'pg1',
					'sec': 'pg2'
				},
				pg1: function () {
					$l('in pg1')
					FirstVw({
						el: $('#ct')
					})
				},
				pg2: function () {
					$l('in pg2')
					SecVw({el: $('#ct')})
				}
			})
		})
		HOWDYPAM = function () {
			z()
			d = $.d()
			$R({
				r: {
					'cool/:name': 'welcome',
					'image/:id': 'image',
					'items': 'items',
					'items/:item': 'item',
					'itemlist': 'showItemList'
				},
				welcome: function (name) {
					var greet = 'howdy, ' + name + '!'
					d.h(greet)
					$l(greet)
					//$.bd().E().A($.h1('welcome'))
				},
				items: function () {
					$.bd().E().A($.h1('show item list'))
				},
				item: function (item) {
					$.bd().E().A($.h1('show item: ' + item))
				},
				image: function (id) {
					$l('image===')
					_.t(10, function () {
						$l($r() + '-id: ' + id)
					})
					$.bd().C('z')
				},
				_: function () {
					$l('you are viewing index')
				}
			})
			// _.in(2,function(){ r.n('cool/jason') })
			_.in(5, function () {
				$l('-> img')
				r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
			})
			$.bt('add', function () {
				r.n('items')
			})
			$.bt('add1', function () {
				$.A($.h1('k'))
				r.n('items/j')
			})
			Bb.h.start({pushState: true})
		}
		$RoApp('ROUTEE', function () {
			$.x();
			$l('routee')
			$R({
				r: {
					':post/:id': 'pam',
					'post/*id': 'splatMustBeLast',
					'*post': 'splat'
				},
				pam: function (post, id) {
					$l('Get post ' + id)
					$l('fnPam: ' + post + ', id# ' + id)
				},
				splat: function () {
					alert('1')
				},
				splatMustBeLast: function () {
					alert('2')
				},
				d: function (a) {
					$l('ddddddddd:' + a)
				},
				e: function (a) {
					$l('eeeeeeeee:' + a)
				}
			})
			r.A('rnav/j', function () {
				alert('!')
			})
			$.bt('hi', function () {
				r.n('po/2', {t: 1})
			}).a()
			$.bt('hi', function () {
				rt.n('po/2')
			})
			$.bt('hi1', function () {
				rt.n('po/4')
			})
			$.bt('hiiiii', function () {
				r.n('mvc/rnavv/j', {trigger: true})
			})
			$.a('home', '/mvc/routee')
			_.in(2, function () {
				r.n('d')
			})
			function alpha() {
				function anchorClickBlocker() {
					//looks for clicks on any anchor els where
					//href starts with '/' (no domain) and stop
					//bw from nv to it
					$.bd().on('click', 'a[href^="/"]', function (ev) {
						$l('wow')
						ev.preventDefault()
						r.n($(this).attr('href', {trigger: true}))
					})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
					$('body').on('click', 'a[href^="/"]', function (ev) {
						ev.preventDefault()
						r.n($(this).attr('href'))
					})
				}
				
				$.a().A($.h1('afsd'))
				anchorClickBlocker()
			}
		})
	}
	
	function ditto() {
///
		HOWDYPAM = function () {
			z()
			d = $.d()
			$R({
				r: {
					'cool/:name': 'welcome',
					'image/:id': 'image',
					'items': 'items',
					'items/:item': 'item',
					'itemlist': 'showItemList'
				},
				welcome: function (name) {
					var greet = 'howdy, ' + name + '!'
					d.h(greet)
					$l(greet)
					//$.bd().E().A($.h1('welcome'))
				},
				items: function () {
					$.bd().E().A($.h1('show item list'))
				},
				item: function (item) {
					$.bd().E().A($.h1('show item: ' + item))
				},
				image: function (id) {
					$l('image===')
					_.t(10, function () {
						$l($r() + '-id: ' + id)
					})
					$.bd().C('z')
				},
				_: function () {
					$l('you are viewing index')
				}
			})
			// _.in(2,function(){ r.n('cool/jason') })
			_.in(5, function () {
				$l('-> img')
				r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
			})
			$.bt('add', function () {
				r.n('items')
			})
			$.bt('add1', function () {
				$.A($.h1('k'))
				r.n('items/j')
			})
			Bb.h.start({pushState: true})
		}
		ROUTE = function () {
			z()
			r = R$({
				R: {"*x": "d"}
			})()
			r.oR('d', function (a) {
				alert(a)
			})//#hello -> 'hello'
			r.oR('e', function (a) {
				alert(a)
			})//#e -> 'e' (could do '/#/e')
			bbH()
		}
		ROUTEPAMS = function () {
			z()
			rtr = R$({
				R: {
					'': 'home',
					'view': 'v',
					'new': 'nn',
					':id': 'en',
					'posts/:id': 'gPo',
					'*acts': 'dfR',
					'download/*path': 'dlF',
					':route/:action': 'ldV'
				},
				home: function () {
					al('home')
				},
				v: function () {
					al('image')
				},
				nn: function () {
				},
				en: function (id) {
					al(id)
				}
			})
			r = rtr()
			r.oR('dfR', al)
			r.oR('gPo', function (id) {
				al('gPo# ' + id)
			})
			r.oR('gPo', function () {
				alert(3)
			}) //both routes fire!
			r.oR('dlF', al)
			r.oR('ldV', function (rt, ac) {
				al(rt + '_' + ac)
			})
			bbH()  // or Bb.h.s({pushState: true})
		}
		ROUTENAV = function () {
			z()
			Rt = R$({
				routes: {
					'po/:id': 'gp',
					'*a': 'dr'
				},
				dr: function (a) {
					al(a)
				},
				gp: function (id) {
					al('Get post ' + id)
				}
			})
			r = Rt()
			bbH()
			bt('hi', function () {
				r.n('po/2', {t: 1})
			}).a()
		}
		BBHS = function () {
			$l('BBHS');
			$('body').C('r');
			$.h('bbhs');
			bH = Bb.H
			bh = Bb.h
		}
		$RoApp('ROAP', function () {
			$R({
				r: {
					hello: 'hi',
					goodbye: function () {
						$.C('o')
					}
				},
				_: function () {
					$l('indexxxxx')
					$.C('p')
				}, //index
				hi: function () {
					$.C('g');
					alert('well hi there!')
				},
				d: function () {
					$.C('z')
					$.A(
							$.sp('d e f a u l t')
									.fS(30).C('g').col('w')
					)
				} //default
			})
			$.bt('index', function () {
				r.n('')
			})
			$.bt('hello', function () {
				r.n('hello')
			})
			$.bt('goodbye', function () {
				r.n('goodbye')
			})
			$.bt('default', function () {
				r.n('asfd/afsd')
			})
		})
		$RoApp('TWOVWS', function () {
			FirstVw = $$V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.E().A($.d().A(
							$.sp('My 1st View').fS(60),
							$.bt('Go to 2nd View', function (e) {
								$l('clicked "go to 2nd View" anchor')
								r.n('sec')
							}).C('y')))
				}
			})
			SecVw = $$V({
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.E().A($.d().A(
							$.bt('Go to 1st View', function (e) {
								$l('clicked "go to 1st View" anchor')
								r.n('first')
							}).C('o'),
							$.sp('My 2nd View').fS(50)
					))
				}
			})
			r = $R({
				r: {
					'': 'pg1',
					'first': 'pg1',
					'sec': 'pg2'
				},
				pg1: function () {
					$l('in pg1')
					FirstVw({
						el: $('#ct')
					})
				},
				pg2: function () {
					$l('in pg2')
					SecVw({el: $('#ct')})
				}
			})
		})
		$RoApp('ROUTEE', function () {
			$.x();
			$l('routee')
			$R({
				r: {
					':post/:id': 'pam',
					'post/*id': 'splatMustBeLast',
					'*post': 'splat'
				},
				pam: function (post, id) {
					$l('Get post ' + id)
					$l('fnPam: ' + post + ', id# ' + id)
				},
				splat: function () {
					alert('1')
				},
				splatMustBeLast: function () {
					alert('2')
				},
				d: function (a) {
					$l('ddddddddd:' + a)
				},
				e: function (a) {
					$l('eeeeeeeee:' + a)
				}
			})
			r.A('rnav/j', function () {
				alert('!')
			})
			$.bt('hi', function () {
				r.n('po/2', {t: 1})
			}).a()
			$.bt('hi', function () {
				rt.n('po/2')
			})
			$.bt('hi1', function () {
				rt.n('po/4')
			})
			$.bt('hiiiii', function () {
				r.n('mvc/rnavv/j', {trigger: true})
			})
			$.a('home', '/mvc/routee')
			_.in(2, function () {
				r.n('d')
			})
			function alpha() {
				function anchorClickBlocker() {
					//looks for clicks on any anchor els where
					//href starts with '/' (no domain) and stop
					//bw from nv to it
					$.bd().on('click', 'a[href^="/"]', function (ev) {
						$l('wow')
						ev.preventDefault()
						r.n($(this).attr('href', {trigger: true}))
					})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
					$('body').on('click', 'a[href^="/"]', function (ev) {
						ev.preventDefault()
						r.n($(this).attr('href'))
					})
				}
				
				$.a().A($.h1('afsd'))
				anchorClickBlocker()
			}
		})
	}
	
	function learnRooter() {
		rts = {
			help: "help",    // #help
			"search/:query": "search",  // #search/kiwis
			"search/:query/p:page": "search"   // #search/kiwis/p7
		}
		Workspace = Bb.R.x({
			routes: rts,
			help: function () {
			},
			search: function (query, page) {
			}
		})
		//  Part of a route can be made optional by surrounding it in parentheses (/:optional).
		//Trailing slashes are treated as part of the URL,
		// and (correctly) treated as a unique route when accessed.
		// docs and docs/ will fire different callbacks.
		// If you can't avoid generating both types of URLs, 
		// you can define a "docs(/)" matcher to capture both cases.
		//When the visitor presses the back button, or enters a URL, and a particular route is matched,
		// the name of the action will be fired as an event, so that other objects can listen to the router,
		// and be notified. In the following example, 
		// visiting #help/uploading will fire a route:help event from the router.
		routes = {
			"help/:page": "help",
			"download/*path": "download",
			"folder/:name": "openFolder",
			"folder/:name-:mode": "openFolder"
		}
		router.on("route:help", function (page) {
		});
		//constructor / initializenew Router([options]) 
		//When creating a new router, you may pass its routes hash directly as an option, if you choose.
		// All options will also be passed to your initialize function, if defined.
		//routerouter.route(route, name, [callback]) 
		//Manually create a route for the router, The route argument may be a routing string or
		// regular expression. Each matching capture from the route or regular expression will
		// be passed as an argument to the callback. The name argument will be triggered as a
		// "route:name" event whenever the route is matched. If the callback argument is 
		// omitted router[name] will be used instead. Routes added later may override previously declared routes.
		//
		initialize = function (options) {
			
			// Matches #page/10, passing "10"
			this.route("page/:number", "page", function (number) {
			});
			// Matches /117-a/b/c/open, passing "117-a/b/c" to this.open
			this.route(/^(.*?)\/open$/, "open");
		}
		//
		//open: function(id) { ... }
		//navigaterouter.navigate(fragment, [options]) 
		//Whenever you reach a point in your application that you'd like to save as a URL, 
		// call navigate in order to update the URL. If you also wish to call the route function,
		// set the trigger option to true. To update the URL without creating an entry in the browser's history,
		// set the replace option to true.
		//
		openPage = function (pageNumber) {
			this.document.pages.at(pageNumber).open();
			this.navigate("page/" + pageNumber);
		}
		//
		//# Or ...
		//
		//app.navigate("help/troubleshooting", {trigger: true});
		//
		//# Or ...
		//
		app.navigate("help/troubleshooting", {trigger: true, replace: true});
		//executerouter.execute(callback, args, name) 
		//This method is called internally within the router, whenever a route matches 
		// and its corresponding callback is about to be executed.
		// Return false from execute to cancel the current transition.
		// Override it to perform custom parsing or wrapping of your routes,
		// for example, to parse query strings before handing them to your route callback, like so:
		//
		Router = Backbone.Router.extend({
			execute: function (callback, args, name) {
				if (!loggedIn) {
					goToLogin();
					return false;
				}
				args.push(parseQueryString(args.pop()))
				if (callback) callback.apply(this, args)
			}
		})
		//Backbone.history
		//
		//History serves as a global router (per frame)
		// to handle hashchange events or pushState,
		// match the appropriate route, 
		// and trigger callbacks.
		// You shouldn't ever have to create one of these yourself since Backbone.history already contains one.
		//
		//pushState support exists on a purely opt-in basis in Backbone.
		// Older browsers that don't support pushState will continue to use hash-based URL fragments,
		// and if a hash URL is visited by a pushState-capable browser, 
		// it will be transparently upgraded to the true URL.
		// Note that using real URLs requires your web server 
		// to be able to correctly render those pages, 
		// so back-end changes are required as well.
		// For example, if you have a route of /documents/100,
		// your web server must be able to serve that page,
		// if the browser visits that URL directly.
		// 
		// For full search-engine crawlability,
		// it's best to have the server generate the complete HTML for the page
		// ... but if it's a web application, 
		// just rendering the same content you would have for the root URL,
		// and filling in the rest with Backbone Views and JavaScript works fine.
		//startBackbone.history.start([options]) 
		//When all of your Routers have been created, and all of the routes are set up properly,
		// call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes.
		// Subsequent calls to Backbone.history.start() will throw an error,
		// and Backbone.History.started is a boolean value indicating whether it has already been called.
		//To indicate that you'd like to use HTML5 pushState support in your application,
		// use Backbone.history.start({pushState: true}). If you'd like to use pushState,
		// but have browsers that don't support it natively use full page refreshes instead,
		// you can add {hashChange: false} to the options.
		//If your application is not being served from the root url / of your domain,
		// be sure to tell History where the root really is, as an option: 
		// Backbone.history.start({pushState: true, root: "/public/search/"})
		//When called, if a route succeeds with a match for the current URL,
		// Backbone.history.start() returns true. If no defined route matches the current URL, it returns false.
		//If the server has already rendered the entire page,
		// and you don't want the initial route to trigger when starting History, pass silent: true.
		//Because hash-based history in Internet Explorer relies on an <iframe>, 
		// be sure to call start() only after the DOM is ready.
		$(function () {
			new WorkspaceRouter();
			new HelpPaneRouter();
			Backbone.history.start({pushState: true});
		});
		//
		//For example, a route of "search/:query/p:page" 
		// will match a fragment of #search/obama/p2, passing "obama" and "2" to the action.
		//
		//A route of "file/*path" will match #file/nested/folder/file.txt,
		// passing "nested/folder/file.txt" to the action.
		//
		//A route of "docs/:section(/:subsection)" 
		// will match #docs/faq and #docs/faq/installing, 
		// passing "faq" to the action in the first case, 
		// and passing "faq" and "installing" to the action in the second.
		//
	}
	
	ITEMS = function () {
		Ap = {M: {}, V: {}, C: {}}
		Router = bbR({
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
		router = Router()
		Ap = {
			M: {}, V: {}, C: {}
		}
		Ap.M.item = bbM({})
		i1 = Ap.M.item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			show('j')
		})
		bbH()
		Ap.M.Item = $M({})
		$R({
			r: {
				'': 'welcome',
				itemlist: 'showItemList',
				'j': 'j'
			},
			welcome: function () {
				$.bd().E().A($.h1('welcome'))
			},
			j: function () {
			},
			showItemList: function () {
				$l('showItemList')
				$.bd().A($.h1('show item list'))
			}
		}, '+')
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		//bb.history.start({pushState: true})
		$.bt('add', function () {
			r.n('/itemlist')
		})
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
	SHOWVW = NOROUTER = function () {
		$.x()
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.h(
						this.model.get('Ms') + " from the View 1")
				return this
			}
		})
		V2 = $$V({
			i: function () {
				this.r();
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this;
			}
		})
		V3 = $$V({
			i: function () {
				this.render();
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3");
				return this;
			}
		})
		// Now we need a view that will contain the view
		// and render it whenever the user makes a choice on the screen.
		CtV = $$V({
			myChildV: null,
			r: function () {
				this.h("Greeting Area");
				this.A(
						this.myChildV.$el);
				return this;
			}
		})
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		greet = V1({Ms: "Hello world"})
		cont = CtV({
			el: $("#AppContainer"),
			model: greet
		})
		v1 = null;
		v2 = null;
		v3 = null;
		function showView1() {
			if (view1 == null) {
				view1 = new View1({model: greeting});
			}
			container.myChildView = view1;
			container.render();
		}
		
		function showView2() {
			if (view2 == null) {
				view2 = new View2({model: greeting});
			}
			container.myChildView = view2;
			container.render();
		}
		
		function showView3() {
			if (view3 == null) {
				view3 = new View3({model: greeting});
			}
			container.myChildView = view3;
			container.render();
		}
	}
	NORTR = function () {
		$.x(null, 'no router')
		v1 = 0
		v2 = 0
		v3 = 0
		dv = $.d('r', 100, 100).id('div')
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		hi = V1({
			Ms: "Hello world"
		})
		$.bt('v1', function () {
			v1 = v1 || V1({m: hi})
			ct.chV = v1
			ct.r()
		})
		V2 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(
						this.g('Ms') + " from the View 2"
				);
				return this
			}
		})
		//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $$V({
			chV: 0,
			r: function () {
				this.h('Hi Area')
				this.A(this.chV.$el)
				return this
			}
		})
		/*
		
		 ct = CtV({
		 el:dv,
		 model: hi
		 })
		
		
		
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		
		
		 */
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.r()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({model: hi})
			}
			ct.chV = v3
			ct.r()
		})
	}
}
function promptChangeColDivApps() {
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	FRND = function () {
		FRND = function () {
			FRND = function () {
				$.x().h1('FRND')
				Frnd = $M({d: {lame: 1}})
				Frnd = $$M({
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
				Frnds = $$C({m: Frnd})
				frnds = Frnds()
				f = Frnd({n: "paul", a: 7})
				p1 = frnds.A(f);
				f1 = Frnd({name: "Thomas", age: 67})
				f1 = Frnd({n: "Lul", a: 67})
				f1 = cl.A(f1)
				f2 = cl.A(f2)
				f2 = Frnd({game: 'jigo'})
				f2.s({name: "Rigo", age: 7})
				f2.s('mame', 'hah')
				frnds.A(f2);
				frnds.rm(f1)
				f1 = Frnd({n: "Lul", a: 67})
				f2 = Frnd({g: 'jigo'})
				f2.s({n: "Rigo", a: 7})
				f2.s('n', 'hah')
			}
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
		$.x().h1('frnd')
		Per = $M({
			d: {lame: true},
			v: function (at, op) {
				if (at.n == 'rigo') {
					return "n cant be rigo!"
				}
			},
			i: function () {
				var md = this;
				$l('new frnd!')
				md.on('change:n', function (m, e) {
					$l('change:n:' + e)
				})
				md.oIv(function (m, z) {
					$l('invalid trgd: ' + z)
				})
			}
		})
		p1 = Per({g: 'jigo'})
		p1.s('n', 'hah')
		p1.s({n: "rigo", a: 7}, {validate: true}
		)
		$l('n:' + p1.g('n'))
		p2 = Per({n: "qigo", a: 47})
		p3 = Per({n: "rigo", a: 7})
		$.bt('p2 validty', function () {
			$l('isValid: ' + p2.isValid())
		}) //  valid
		$.bt('p3 validty', function () {
			$l('isValid: ' + p3.isValid())
		}) //not valid
		//
		cl = $Cl({m: Per})()
		cl.add([p2, p3])
		cl.remove(p3)
	}
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
////////
		Frnd = $$M({
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
		Frnds = $$C({m: Frnd})
		frnds = Frnds()
		f = Frnd({n: "paul", a: 7})
		p1 = frnds.A(f);
		f1 = Frnd({name: "Thomas", age: 67})
		f1 = Frnd({n: "Lul", a: 67})
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		f2 = Frnd({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		frnds.A(f2);
		frnds.rm(f1)
////
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
	CHANGECOL = function () {
		z()
		d = $.dA(400, 400, 300, 200)
		sb = $$M({
			promptColor: function () {
				this.s({
					co: prompt('color:')
				})
			}
		})()
		sb.on('change:co', function (mod, col) {
			$l('new color!: ' + col);
			d.C(col)
		})
		sb.s({co: 'g'})
		_.in(2, function () {
			sb.promptColor()
		})
		function old() {
			BACKSETSBM = function () {
				$.x('g', 'backset')
				d = $.d('z', 500, 300).id('sb')
				Sb = $M({
					ask: function () {
						this.s({c: prompt('col?')})
					}
				})
				sb = Sb()
				// sb.on('change', function(){g=G(arguments)})
				sb.on('change:c', function (modThatChangedC, cChangedTo, ops) {
					$l('changed to ' + cChangedTo)
					o = ops
					modThatChangedC.s('dat', 'something')
					$('#sb').C(cChangedTo)
					$.h1(modThatChangedC.g('dat'))
				})
				sb.s({c: 'b'})
				//   sb.ask()
				//   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
				//   p=Per( {n:"mac", a:67})
			}
			BACKSETSB = function () {
				$.x()
				Sb = Sidebar = $$M({
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
				Per = Bb.M.x({
					i: function () {
						alert("Welcome")
					}
				})
				p = Per({})
				p.s({n: "mac", a: 67})
				$.dA(300).id('sb')
				Sidebar = Bb.M.x({
					fn: function () {
						return this.s({
							c: prompt("c?")
						})
					}
				})
				Sidebar()
						.oC('c', function (m, c) {
							$('#sb').C(c)
						}).s({c: 'w'}).fn()
			}
		}
	}
	BCL = function () {
		$.x().h1('BCL')
		Bk = bb.M.e({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = bb.C.e({m: Bk})
		cl1 = BksC.o()
		bk1 = Bk.o({ID: 1, n: "Bk 1"})
		bk2 = Bk.o({ID: 2, n: "Bk 2"})
		cl2 = BksC.o([bk1, bk2])
		bk3 = Bk.o({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
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
	BBCOL = function () {
		$.x()
		Per = bb.M.e({})
		p1 = Per.o({n: 'j'})
		p2 = Per.o({n: 'y'})
		Pers = bb.C.e({model: Per})
		pers = Pers.o([p1, p2])
	}
	BACKCOL = function () {
		z()
		baddies = bbC().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	BACKCOL = function () {
		z()
		baddies = bbC().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	function mod() {
		BACKMOD = function () {
			Person = bbM({
				i: function () {
					alert("Welcome")
				}
			})
			person = Person({})
			person.s({name: "Thomas", age: 67})
			z()
			dva(300).id('sb')
			Sidebar = bbM({
				fn: function () {
					return this.s({c: prompt("c?")})
				}
			})
			Sidebar()
					.oC('c',
					function (m, c) {
						qi('sb').c(c)
					})
					.s({c: 'w'}).fn()
		}
		MODCHANGE = function () {
			$.x()
			Bk = $M({
				d: {ID: "", n: ""},
				i: function () {
					var bk = this;
					$l('init..')
					this.on('change', function () {
						alert('change')
						if (bk.hasChanged('ID')) {
							alert('ID changed')
						}
						if (bk.hasChanged('n')) {
							alert('n changed')
						}
					})
				},
				showAlert: function () {
					alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
		}
		MODCHANGE = function () {
			$.x()
			Bk = $M({
				d: {ID: "", n: ""},
				i: function () {
					var bk = this;
					$l('init..')
					this.on('change', function () {
						alert('change')
						if (bk.hasChanged('ID')) {
							alert('ID changed')
						}
						if (bk.hasChanged('n')) {
							alert('n changed')
						}
					})
				},
				showAlert: function () {
					alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
		}
		MODCHANGE = function () {
			$.x()
			Bk = Bb.M.e({
				d: {ID: "", n: ""},
				initiate: function () {
					$l('init..')
					var that = this
					this.on('change', function () {
						alert('change')
						if (that.hasChanged('ID')) {
							alert('ID changed')
						}
						if (that.hasChanged('n')) {
							alert('n changed')
						}
					})
				},
				showAlert: function () {
					alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			// ChildBook = Bk.extend({})
			bk = Bk.o({ID: 1, n: "a"})
		}
		MODCHANGE = function () {
			$.x('x', 'modchange')
			Bk = $M({
				d: {ID: "ooooo", n: ""},
				i: function () {
					var bk = this;
					$l('init..')
					bk.$(function () {
						$l('change')
						g = G(arguments)
						o = g[1]
						m = g[0]
						if (bk.hC('ID')) {
							$l('ID changed')
						}
						// if(bk.hC('n')){$l('n changed') }
						bk.hC('n', function () {
							$l('n changed')
						})
					})
				},
				show: function () {
					$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			bk = Bk({ID: 1, n: "a"})
			bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
			_.in(function () {
				bk.s('n', 'z', {a: 1, b: 2, c: 3})
				_.in(function () {
					bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
				}, '*')
			}, '*')
		}
		MODCHANGE = function () {
			$.x()
			Bk = $M({
				d: {ID: "", n: ""},
				i: function () {
					var bk = this;
					$l('init..')
					this.on('change', function () {
						alert('change')
						if (bk.hasChanged('ID')) {
							alert('ID changed')
						}
						if (bk.hasChanged('n')) {
							alert('n changed')
						}
					})
				},
				showAlert: function () {
					alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
		}
		MODCHANGE = function () {
			$.x()
			Bk = Bb.M.e({
				d: {ID: "", n: ""},
				initiate: function () {
					$l('init..')
					var that = this
					this.on('change', function () {
						alert('change')
						if (that.hasChanged('ID')) {
							alert('ID changed')
						}
						if (that.hasChanged('n')) {
							alert('n changed')
						}
					})
				},
				showAlert: function () {
					alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			// ChildBook = Bk.extend({})
			bk = Bk.o({ID: 1, n: "a"})
		}
		MODCHANGE = function () {
			$.x('x', 'modchange')
			Bk = $M({
				d: {ID: "ooooo", n: ""},
				i: function () {
					var bk = this;
					$l('init..')
					bk.$(function () {
						$l('change')
						g = G(arguments)
						o = g[1]
						m = g[0]
						if (bk.hC('ID')) {
							$l('ID changed')
						}
						// if(bk.hC('n')){$l('n changed') }
						bk.hC('n', function () {
							$l('n changed')
						})
					})
				},
				show: function () {
					$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
				}
			})
			bk = Bk({ID: 1, n: "a"})
			bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
			_.in(function () {
				bk.s('n', 'z', {a: 1, b: 2, c: 3})
				_.in(function () {
					bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
				}, '*')
			}, '*')
		}
		MOD = function () {
			m = bbM({n: 'j'})
			Donut = bbM({
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
			DonutShop = bbM({
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
		BACKMOD = function () {
			Person = bbM({
				i: function () {
					alert("Welcome")
				}
			})
			person = Person({})
			person.s({name: "Thomas", age: 67})
			z()
			dva(300).id('sb')
			Sidebar = bbM({
				fn: function () {
					return this.s({c: prompt("c?")})
				}
			})
			Sidebar()
					.oC('c',
					function (m, c) {
						qi('sb').c(c)
					})
					.s({c: 'w'}).fn()
		}
	}
	
	BB9 = CHC = CHANGECOL = FRIEND = function () {
		d = $.dA(400, 400, 300, 200)
		Md = _M({
			promptColor: function () {
				this.s({
					co: prompt('color:')
				})
			}
		})
		sb = Md()
		sb.on('change:co', function (mod, col, ops) {
			$l('new color!: ' + col);
			d.C(col)
		})
		sb.s({co: 'g'})
		_.in(2, function () {
			sb.promptColor()
		})
	}
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BADS = function () {
		BADS = function () {
			z()
			$.h1('backcl').id('chicks').A()
			bads = $C()
			bads.oA(function (s) {
				$Ms("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		BADS = function () {
			$.x().h1('backcl').i('chicks').A()
			bads = $Cl()()
			bads.oA(function (s) {
				alert("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		BADS = function () {
			$.x().h1('backcl').i('chicks').A()
			bads = $$C()()
			bads.oA(function (s) {
				alert("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BBBEV = function () {
		$.x().i('chicks')
		ev = Bb.Ev()
		ev.b("fun:had", function () {
			alert("wee!")
		})// bind? on?
		ev.tr("fun:had")//trigger  //it'll alert "wee!"
	}
	EVENTS = EVS = function () {
		$.x('o', 'beauty')
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
		$V({
			el: q,
			ren: function () {
				$.C($r())
			},
			events: {
				'click button': function () {
					bt.C($r())
				},
				'dblclick': 'ren',
				'mouseover': function () {
					q.C($r())
				}
			}
		})
	}
	function huh() {
		BCL = function () {
			$.x().h1('BCL but whats up wit dose funcs?')
			BksC = $Cl({
				m: Bk = $M({
					d: {n: '', g: 'fun'},
					url: 'http://localhost:51377/api/Books'
				}),
				d: {pizzaTopping: 'pepperoni'}
			})
			cl1 = BksC()
			cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
			cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
			cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))
			add = function () {
				$l('add')
				cl2.A([
					bk4 = Bk({ID: 4, n: "Bk 4"}),
					bk5 = Bk({ID: 5, n: "Bk 5"})
				])
			}
			add()
			addAt = function (n) {
				cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
			}
			change = function () {
				bk3 = Bk({ID: 3, n: "Bk 3"})
				cl2.add(bk3)
				bk3_changed = Bk({ID: 3, n: "Changed Model"})
				cl2.add(bk3_changed, {merge: true})
			}
		}
		BCL = function () {
			$.x().h1('BCL')
			Bk = Bb.M.e({
				d: {ID: '', n: ''},
				id: "ID",
				url: 'http://localhost:51377/api/Books'
			})
			BksC = Bb.C.e({m: Bk})
			cl1 = BksC.o()
			bk1 = Bk.o({ID: 1, n: "Bk 1"})
			bk2 = Bk.o({ID: 2, n: "Bk 2"})
			cl2 = BksC.o([bk1, bk2])
			bk3 = Bk.o({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
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
				cl2.add(
						bk0, {at: n || 0}
				)
			}
		}
	}
}
 