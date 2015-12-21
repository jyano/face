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
	z()
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
 