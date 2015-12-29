 __ ='fadsfasasdf'
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
} 
CLICK1 = VWW = function () {
	d = $.d('r', 200).A(
			$.h1('hello'),
			$.bt(__)
	)
	//d.$(function(){v.r()})
	mOv = function () {
		$l('mouse over !')
	}
	v = V$({
		E: {
			'click button': function () {
				$l('$')},
			$$: 'R',
			v: mOv
		},
		
		el: d,
		R: function () {
			alert('double click')
			$.bd().C($r())
		}
	})
	
	new v()
}
 CHAINB2 = function () {
	 //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	 // sol: bb   supports  _.chain,
	 // which returns ob  w  us-arr-ops  attached as mets which return that ob
	 //chain starts chain, returns wrapper around cl's mds (wrapped arr)
	 //  The chain ends with call to val(),
	 // which  terminates chain and returns resulting array
	 cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			 .chain().filter(function (i) {
				 return i.g('a') > 10
			 }).m(function (i) {
				 return i.g('n')
			 })
			 .val() //['I','R']
	 // Some of bb- spec mets do return this, which means they can be chained as well:
	 cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
 }
 CHAINB1 = function () {
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
CHB = CHAINB = function () {
	
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	
	Cl = C$()
	
	new Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	
	return
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
COUNTER0 = function () {
	 
	Td = $$M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $$c().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	
	TdsCl = $$c()
	
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
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
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
CNTR = COUNTER = function () {
	
	 
	Td = _M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	
	TdsCl = _Cl()()
	
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	 
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
	c = _C()()
	f1 = c.add(f1)
	f2 = c.add(f2)
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
BACKSETR = function () {
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
 ITEMS = function () {
	 
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
	 $start()
 }
 ///  START PERFECT ////
 XMDGET = function () {
	 Md = _M()
	 md = Md({n: 'j'});
	 $.h3('p: ' + md.g('n'))
 }
 XEXTEV = function () {
	 $.x('o', 'EXTEV')
	 o = _.x({}, Bb.E)
	 o.on('yo', function () {
		 $.sp(G(arguments)).fS(50)
	 })
	 o.trigger('yo', 'a', 'b', 'c')
 } 
 XEVENTS = EVS = function () {
	 $.x('o', 'beauty')
	 q = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))
	 Vw = $$V({
		 el: q, r: function () {
			 $.C($r())
		 },
		 events: {
			 'click button': function () {
				 bt.C($r())
			 },
			 'dblclick': 'r',
			 'mouseover': function () {
				 q.C($r())
			 }
		 }
	 })
	 Vw()
 }
 XCHANGE = function () {
	 Md = M$()
	 Vw = V$({
		 r: function () {
			 return this.h(this.g('rx'))
		 },
		 i: function () {
			 var vw = this;
			 vw.r();
			 vw.oC(function () {
				 vw.r()
			 })
		 }
	 })
	 $.x('x', 'bbv');
	 $('body').fS(30)
	 div = $.dA('o', 300, 400).XY(200, 200)
	 ip = $.ip()
	 $.bt('change', function () {
		 m.s('rx', ip.v())
	 })
	 m = new Md({rx: 'antibiotic'})
	
	 new Vw({
		 el: div,
		 m: m
	 })
 }
 
BACKVAL4 = function () {
	Person = _M({
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
BBVT4 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = _V({
		q: '#ct',
		events: {'click button': 'r'},
		R: function () {
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
		I: function (op) {
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
	md = $$m({
		df: [{t: 'a.com', h: 'a.com'},
			{t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = _V({
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
		E: {'click button': 'rr'}
	})
	vw = Vw({
		blOp: 'empty!',
		model: md
	})
	return vw
}
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
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	
	Vw = _V({
		R: function () {
			q.A($.ul(['hello']))
		},
		I: function () {
			this.R()
		}
	})
	
	new q.$V({
		R: function () {
		},
		I: function () {
		}
	})
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
VALIDCOL = VALIDATECOLLECTION = function () {
	Per = $$M({
		I: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	 
	Per = _M({
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
	PerV = _V({
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
	peepC = _Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = _V({
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
FLCL030 = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = Bb.V.e({
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
	Cl = $$C({
		i: function () {
		}
	})
	cl = Cl({})
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
FLCL02 = function () {
	$.x('r', 'filtering a cl, but tp missing?!')
	// ... get the filter info from the DOM
	// get the filtered list from the collection
	// iterate over the filtered list and render the results in to the html array
	// populate the DOM with the resulting HTML
	FlV = $V({
		ev: {'click #run': 'runFilter'},
		runFilter: function (e) {
			e.pD();
			this.fl = {};
			this.r()
		},
		r: function () {
			HT = [];
			_.e(this.cl.where(this.fl),
					function (item) {
						HT.push(_.tp($('my-item-template').H())(item.tJ()))
					})
			this.q.h(HT);
			return this
		}
	})
	Cl = $$C({
		i: function () {
			$l('fuck')
		}
	})
	cl = Cl()
	cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
	res = cl.where({a: 'f', b: 's'})
	_.e(res, function (q) {
		var j = q.tJ();
		$.h1(j.a + ' !@@@##@ ' + j.b)
	})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
PEOPL = function () {
	$.x()
	Per = $$M({
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
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
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
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
PEOPL = function () {
	$.x()
	Per = $$M({
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
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
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
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
DELETE1 = function () {

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
	$.h1('KKJJKJKJK')
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
 function alpha() {
	 _.in(5, function () {
		 $l('-> img')
		 r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
	 })
	 r.A('mvc/rnav/j', function () {
		 alert('!')
	 })
	 $.bt('hi1', function () {
		 rt.n('po/4')
	 })
	 $.bt('goodbye', function () {
		 ro.n('goodbye')
	 })
	 $.bt('add', function () {
		 rtr.n('/itemlist')
	 })
	 $.bt('hiiiii', function () {
		 r.n('b/rnavv/j', {trigger: true})
	 })
	 $.bt('add', function () {
		 rtr.n('/wap/items/itemlist')
	 })
	 $.bt('add1', function () {
		 $.A($.h1('k'))
		 rtr.n('/wap/items/j')
	 })
	 $.h = function (h) {
		 $.bd().H(h)
	 }
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
	 function knockAncs(ev) {
		 ev.preventDefault()
		 rtr.n($(this).attr('href', {trigger: true}))
	 }
	
	 $.a().A($.h1('afsd'))
	 anchorClickBlocker()
 }//notes:  '':'_', (handled by _$$R now, instead) (see _$$R api)
 PEEP3 = SWEEET = function () {
	 $.x('x', 'bb view people')
	 Vw = V$({
		 el: ul = $.ul(),
		 I: function () {
			 this.r().C$('init..')
		 },
		 R: function () {
			 var ul = this.q
			 this.ECl(function (p) {
				 ul.A($.li([p.n, '(', p.a, ')']))
			 })
			 return this
		 }
	 })
	 vw = Vw({cl: peep})
	 _.in(function () {
		 peep.pop();
		 vw.r()
	 })
 }
 
 SWEET3 = BBVP = BBVIEWPEOPLE = function () {
	 $.x('x', 'bb view people')
	
	 
	 Vw = $.ulV({
	 
		 I: function () {
			 this.$el.C($r())
		 },
		 R: function () {
			 var el = this.$el.E()
			 this.collection(function (p) {
				 el.A($.li().A(p.n + '(' + p.a + ')'))
			 })
			 return this
		 }
	 })
	 
	 vw = new Vw({
		 cl: peep = peep
	 })
	 /*
	
	  $.A(vw.r().q)
	  _.in(function(){peep.pop(); vw.r()},'*')
	  */
 
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
		 cl: peep = peep
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
 BB19 = RESET = function () {
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
	 //   Resetting/Refreshing Cls
	 // Rather than adding or removing mds individually,
	 // you might want to update entire cl at once.
	 // Cl.set() takes array of mds and performs necessary
	 // add, rm, and change operations required to update cl.
	 // Above logs:
	 // Completed go to Jamaica.
	 // Removed go to Disneyland.
	 // Added go to Disney World.
///////////////////////////////////////////////////////
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
	 //myCl.reset()
	 // -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
	 // The reason you might want to use this is to perform super-optimized
	 //rendering in extreme cases where individual evs are too expensive.
	 td = $M()
	 tds = $Cl([td]).on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
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
	 // 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
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
 }
 THOUGHTS = function () {
	 $.get('/thoughts', function (obs) {
		 _.e(obs, function (ob) {
			 $.h1('ob: ' + ob.un)
		 })
	 })
 }
 BB16 = COLLECTIONONADD = CLA = CLONADD = function () {
	 $.i('chicks').A()
	 Cl = _C({})
	 cl = Cl().oA(function (s) {
		 $l("new!!!!!! " + s.g('n'))
	 }).A([{n: 'g1'}, {n: 'g2'}])
 }
 BB17 = COLLECTIONLENGTH = TDS = CRM = CLLEN = function () {
	 Td = _M({df: {tt: '', completed: false}});
	 Md = _M({
		 d: {tt: '', completed: false}
	 })
	 Cl = _C({md: Md})
	 cl = Cl([Td({tt: 'Read', id: 2})]);
	 $Ms('len 1?: ' + cl.length)
	 TdsCl = _C({md: Td})
	 tds = TdsCl([
		 a = Td({tt: 'Jam'}),
		 b = Td({tt: 'Chin'})
	 ])
	 $Ms('len 2?: ' + tds.length)
	 tds.A(c = Td({tt: 'Disn'}))
	 $Ms('len 3?: ' + tds.length)
	 tds.rm([a, b]);
	 $Ms('len 1?: ' + tds.length)
	 tds.rm(c);
	 $Ms('len 0?: ' + tds.length)
 }
 BB18 = FLCL = FILTERCOLLECTION = function () {

//$.x('r', 'filtering a cl:')
	 FlV = Bb.V.x({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function (e) {
			 e.pD();
			 this.fl = {
				 // ... get the filter info from the DOM
			 };
			 this.rr()
		 },
		 rr: function () {// get the filtered list from the collection
			 // iterate over the filtered list and render the results in to the html array
			 // populate the DOM with the resulting HTML
			 HT = []
			 _.e(this.cl.where(this.fl),
					 function (item) {
						 HT.push(
								 _.tp($('my-item-template').H())(item.tJ())
						 )
					 })
			 this.$el.html(HT);
			 return this
		 }
	 })
	 ///
	 Cl = _C({
		 i: function () {
		 }
	 })
	 cl = Cl({})
	 cl.add([
		 {a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a: 'f', b: 's'},
		 {a: 's', b: 't'}
	 ])
	 res = cl.where({a: 'f', b: 's'})
	 //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
 }
 function filteredCol() {
	 // collections:
	 FLCL004 = function () {
		 $.x('r', 'filtering a cl:')
		 /*
		  FlV = Bb.V.e({
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
		 Cl = C$({
			 I: function () {
			 }
		 })
		 cl = new Cl({})
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
	 FLCL0 = function () {
		 $.x('r', 'filtering a cl, but tp missing?!')
		 // ... get the filter info from the DOM
		 // get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 FlV = $V({
			 ev: {'click #run': 'runFilter'},
			 runFilter: function (e) {
				 e.pD();
				 this.fl = {};
				 this.r()
			 },
			 r: function () {
				 HT = [];
				 _.e(this.cl.where(this.fl),
						 function (item) {
							 HT.push(_.tp($('my-item-template').H())(item.tJ()))
						 })
				 this.q.h(HT);
				 return this
			 }
		 })
		 Cl = $$C({
			 i: function () {
				 $l('fuck')
			 }
		 })
		 cl = Cl()
		 cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
		 res = cl.where({a: 'f', b: 's'})
		 _.e(res, function (q) {
			 var j = q.tJ();
			 $.h1(j.a + ' !@@@##@ ' + j.b)
		 })
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	 }
 }
 
 function clicks() {
	 //looks for clicks on any anchor els where
	 //href starts with '/' (no domain) and stop
	 //bw from nv to it
	 $.bd().on('click', 'a[href^="/"]', function (ev) {
		 $l('GAPS IN HISTORY')
		 ev.preventDefault()
		 rtr.n($(this).attr('href', {trigger: true}))
	 })
 }
 Tsk = V$({
	 el: $('#cont'),
	 I: function () {
		 this.r()
	 },
	 R: function () {
		 this.$el.ht(Temp('task'))
	 },
	 E: {'click button': 'add'},
	 add: function () {
		 alert($('#task_desc').v() + ' task added')
	 }
 })
 AP = TASK = function () {
	 $.x('g', 'tasker');
	 Temp('task', [
		 $.lb('Task: '),
		 $.ip().id('task_desc'),
		 $.bt('add task').id('btn')
	 ])
	 Ap.M.Tsk = $$M({})
	 tsk1 = Ap.M.Tsk({
		 title: 'go to the store',
		 priority: 4
	 })
	 tsk2 = Ap.M.Tsk({
		 title: 'go to the park',
		 priority: 3
	 })
	 TskV = Ap.V.Tsk = $$V({
		 t: 'li',
		 el: $('#container'),
		 i: function () {
			 this.r()
		 },
		 r: function () {
			 this.$el.html(this.g('t'));
			 this.$el.html(temp('task'))
		 },
		 events: {'click button': 'add'},
		 add: function () {
			 alert($('#task_desc') + ' task added')
		 }
	 })
	 tskVw = Ap.V.Tsk({m: task1})
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
	 r = $R({
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
	 Bb.h.start({pushState: true})
 }
 
 DON = DONUTS = function () {
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
	 DNUTS = MOD = function () {
		 m = bbM({n: 'j'})
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
 function server() {
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 AVAILSRV = function () {

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
	 }
	 Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	 Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	 Ap.T.Avail = function (model) {
		 return $.d('g', 400, 100).mar(20).A(
				 $.h4(model.g('c')).id('avail').C('y', 'r'),
				 $.br(), $.sp('delete').id('deleteAvail'),
				 $.sp(' '), $.sp('edit').id('editAvail'),
				 $.sp(' '), $.cb().id('selAvail'))
	 }
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
 }
 _VIEWS = function () {
	 Ap.V.Avail = Bb.V.x({
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
	 Ap.V.Avails = Bb.V.x({
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
 }
 _COMMON = function () {
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
	 _VIEWS()
 }
 $AVA$ = AVAILCOMMON = function () {
	 _COMMON()
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
		 var m = new Ap.M.Avail({
			 collection: qiv('newAvail')
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
	 Ap.M.Avail = M$({urlRoot: '/avail'})
	 Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = V$({
		 R: function () {
			 this.q(Ap.T.Avail(this.model))
			 return this
		 },
		 E: {
			 'click #deleteAvail': 'deleteAvail',
			 'click #editAvail': 'editAvail',
			 'blur #avail': 'changeAvail'
		 },
		 changeAvail: function () {
			 $(this.$el.find('#avail')).cE(0)
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
	 Ap.V.Avails = V$({
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
	 avs = new Ap.C.Avails
	 avs.on('destroy', function (j) {
		 alert('i am col and i was destroyed')
		 v.trigger('modelDeleted')
	 })
	 v = new Ap.V.Avails({cl: avs})
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
 AVAIL2 = function () {
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 $.ip('new avail').id('newAvail').A()
	 $.bt('ok', function () {
		 Ap.M.Avail({c: qiv('newAvail')}).save()
		 v.render()
	 })
	 $.d().id('availsDiv')
	 Ap.T.Avail = function (model) {
		 return $._d().W(400).H(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = _M({urlRoot: '/avail'})
	 Ap.C.Avails = _C({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = _V({
		 R: function () {
			 this.$el.append(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
			 'click #deleteAvail': 'deleteAvail',
			 'click #editAvail': 'editAvail',
			 'blur #avail': 'changeAvail'
		 },
		 changeAvail: function () {
			 qq(this.$el.find('#avail')).at('contenteditable', 'false')
			 var newAvail = this.$el.find('#avail').text()
			 this.model.s('c', newAvail)
			 this.model.save()
		 },
		 deleteAvail: function () {
			 this.model.destroy()
			 this.$el.remove()
		 },
		 editAvail: function () {
			 this.$el.find('#avail').ed(1)
		 }
	 })
	 Ap.V.Avails = _V({
		 el: '#availsDiv',
		 I: function () {
			 this.ren()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.$el.html('')
					 t.$el.append("<h1>Avails List</h1>")
					 t.collection.each(function (m) {
						 t.$el.append(Ap.V.Avail({model: m}).render().el)
						 return t
					 }, t)
				 }
			 })
		 }
	 })
	 avs = Ap.C.Avails()
	 v = Ap.V.Avails({collection: avs})//.render()
	 avs.on('destroy', function (aa) {
		 $l('destroy!!!!')
	 })
 }
 function boneSetup() {
	 Ap.M.Avail = $$M({urlRoot: '/avail'})
	 Ap.T.Avail = function (model) {
		 return $.d('g', 400, 100).mar(20).A(
				 $.h4(model.g('c')).id('avail').col('y', 'r'),
				 $.br(),
				 $.sp('delete').id('deleteAvail'),
				 $.sp(' '), $.sp('edit').id('editAvail'),
				 $.sp(' '), $.cb().id('selAvail')
		 )
	 }
	 Ap.V.Avail = $$V({
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
	 Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
 }
 AVAIL4 = function () {
	 tx('new avail').id('newAvail').a()
	 bt('ok', function () {
		 Ap.M.Avail({c: qiv('newAvail')}).save()
		 v.render()
	 }).a()
	 di('availsDiv').a()
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 Ap.T.Avail = function (model) {
		 return _d().w(400).h(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = bbM({urlRoot: '/avail'})
	 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = bbV({
		 R: function () {
			 this.$el.append(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
			 'click #deleteAvail': 'deleteAvail',
			 'click #editAvail': 'editAvail',
			 'blur #avail': 'changeAvail'
		 },
		 changeAvail: function () {
			 qq(this.$el.find('#avail')).at('contenteditable', 'false')
			 var newAvail = this.$el.find('#avail').text()
			 this.model.s('c', newAvail)
			 this.model.save()
		 },
		 deleteAvail: function () {
			 this.model.destroy()
			 this.$el.remove()
		 },
		 editAvail: function () {
			 qq(this.$el.find('#avail')).at('contenteditable', 'true')
		 }
	 })
	 Ap.V.Avails = bbV({
		 el: '#availsDiv',
		 I: function () {
			 this.render()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.$el.html('')
					 t.$el.append("<h1>Avails List</h1>")
					 t.collection.each(function (m) {
						 t.$el.append(Ap.V.Avail({model: m}).render().el)
						 return t
					 }, t)
				 }
			 })
		 }
	 })
	 avs = Ap.C.Avails()
	 v = Ap.V.Avails({collection: avs})//.render()
	 avs.on('destroy', function (aa) {
		 $l('destroy!!!!')
	 })
 }
 AVAIL5 = function () {
	 tx('new avail').id('newAvail').a()
	 bt('ok', function () {
		 var m = Ap.M.Avail({
			 c: qiv('newAvail')
		 })
		 m.save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).a()
	 di('availsDiv').a()
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 Ap.T.Avail = function (model) {
		 return _d().w(400).h(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = bbM({urlRoot: '/avail'})
	 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = bbV({
		 R: function () {
			 this.q(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
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
			 qq(this.$el.find('#avail')).cE(1)
		 }
	 })
	 Ap.V.Avails = bbV({
		 el: '#availsDiv',
		 I: function () {
			 this.render()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.q.H('')
					 t.q(h1('Avails List'))
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
	 avs = Ap.C.Avails()
	 avs.on('destroy',
			 function (j) {
				 alert('i am col and i was destroyed')
				 v.trigger('modelDeleted')
			 })
	 v = Ap.V.Avails({cl: avs})
	 v.on('modelDeleted', function () {
		 alert('modDel')
	 })
	 a = bbM({
		 defaults: {prop: 3},
		 test: function () {
			 console.log(this.get('prop'))
		 },
		 test2: function (a) {
			 console.log(
					 (function () {
						 return this.get('prop')
					 })()
			 )
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 f = a()
 }
 AVAIL = function () {
	 f = $M({
		 defaults: {prop: 3},
		 test: function () {
			 $l(this.get('prop'))
		 },
		 test2: function (a) {
			 var prop = this.get('prop')
			 $l('prop: ' + prop)
			 return prop
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 boneSetup()
	 avs = Ap.C.Avails()
	 avs.on('destroy', function (j) {
		 alert('i am col and i was destroyed')
		 v.trigger('modelDeleted')
	 })
	 Ap.V.Avails = $$V({
		 el: '#availsDiv',
		 i: function () {
			 this.r()
		 },
		 r: function () {
			 var t = this;
			 t.collection.fetch({
				 success: function () {
					 t.q.H('');// t.$el.html('')
					 t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					 t.collection.each(function (m) {
						 t.$el.A(Ap.V.Avail({model: m}).render().el)
						 return t
					 }, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				 }
			 })
		 }
	 })
	 v = Ap.V.Avails({
		 collection: avs
	 })//.render()
	 //v=Ap.V.Avails({cl:avs})
	 v.on('modelDeleted', function () {
		 alert('modDel')
	 })
	 $.ip('new avail').id('newAvail').A()
	 $.bt('ok', function () {
		 Ap.M.Avail({
			 c: $('#newAvail').v()
		 }).save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).A()
	 $.dI('availsDiv')
 }
 function setup() {
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 Ap.T.Avail = function (model) {
		 return _d().w(400).h(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = bbM({urlRoot: '/avail'})
	 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = bbV({
		 R: function () {
			 this.q(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
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
			 qq(this.$el.find('#avail')).cE(1)
		 }
	 })
	 Ap.V.Avails = bbV({
		 el: '#availsDiv',
		 I: function () {
			 this.render()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.q.H('')
					 t.q(h1('Avails List'))
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
	 Ap.M.Avail = $$M({urlRoot: '/avail'})
	 Ap.T.Avail = function (model) {
		 return $.d('g', 400, 100).mar(20).A(
				 $.h4(model.g('c')).id('avail').col('y', 'r'),
				 $.br(),
				 $.sp('delete').id('deleteAvail'),
				 $.sp(' '), $.sp('edit').id('editAvail'),
				 $.sp(' '), $.cb().id('selAvail')
		 )
	 }
	 Ap.V.Avail = $$V({
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
	 Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avails = $$V({
		 el: '#availsDiv',
		 i: function () {
			 this.r()
		 },
		 r: function () {
			 var t = this;
			 t.collection.fetch({
				 success: function () {
					 t.q.H('');// t.$el.html('')
					 t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					 t.collection.each(function (m) {
						 t.$el.A(Ap.V.Avail({model: m}).render().el)
						 return t
					 }, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				 }
			 })
		 }
	 })
 }
 function status() {
	 f = $M({
		 defaults: {prop: 3},
		 test: function () {
			 $l(this.get('prop'))
		 },
		 test2: function (a) {
			 var prop = this.get('prop')
			 $l('prop: ' + prop)
			 return prop
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 v = Ap.V.Avails({
		 collection: avs
	 })//.render()
//v=Ap.V.Avails({cl:avs})
	 v.on('modelDeleted',
			 function () {
				 alert('modDel')
			 })
	 $.ip('new avail').id('newAvail').A()
	 $.bt('ok', function () {
		 Ap.M.Avail({
			 c: $('#newAvail').v()
		 }).save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).A()
	 $.dI('availsDiv')
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
	 bt('ok', function () {
		 var m = Ap.M.Avail({
			 c: qiv('newAvail')
		 })
		 m.save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).a()
	 v = Ap.V.Avails({cl: avs})
	 v.on('modelDeleted', function () {
		 alert('modDel')
	 })
	 a = bbM({
		 defaults: {prop: 3},
		 test: function () {
			 console.log(this.get('prop'))
		 },
		 test2: function (a) {
			 console.log(
					 (function () {
						 return this.get('prop')
					 })()
			 )
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 f = a()
	 di('availsDiv').a()
	 avs = Ap.C.Avails()
	 avs.on('destroy',
			 function (j) {
				 alert('i am col and i was destroyed')
				 v.trigger('modelDeleted')
			 })
	 v = Ap.V.Avails({cl: avs})
	 v.on('modelDeleted', function () {
		 alert('modDel')
	 })
	 a = bbM({
		 defaults: {prop: 3},
		 test: function () {
			 console.log(this.get('prop'))
		 },
		 test2: function (a) {
			 console.log(
					 (function () {
						 return this.get('prop')
					 })()
			 )
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 f = a()
	 AVAILold = function () {
		 tx('new avail').id('newAvail').a()
		 bt('ok', function () {
			 var m = Ap.M.Avail({
				 c: qiv('newAvail')
			 })
			 m.save()
			 m.on('destroy', function () {
				 alert('i am the model and i was destroyed')
			 })
			 v.render()
		 }).a()
		 di('availsDiv').a()
		 Ap = {M: {}, C: {}, V: {}, T: {}}
		 Ap.T.Avail = function (model) {
			 return _d().w(400).h(100).M(20).c('g')(
					 h4(model.g('c')).id('avail').c('y', 'r'),
					 br(), sp('delete').id('deleteAvail'),
					 sp(' '), sp('edit').id('editAvail'),
					 sp(' '), cb2().id('selAvail')).q
		 }
		 Ap.M.Avail = bbM({urlRoot: '/avail'})
		 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		 Ap.V.Avail = bbV({
			 R: function () {
				 this.q(Ap.T.Avail(this.model))
				 return this
			 },
			 events: {
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
				 qq(this.$el.find('#avail')).cE(1)
			 }
		 })
		 Ap.V.Avails = bbV({
			 el: '#availsDiv',
			 I: function () {
				 this.render()
			 },
			 R: function () {
				 var t = this
				 t.collection.fetch({
					 success: function () {
						 t.q.H('')
						 t.q(h1('Avails List'))
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
		 avs = Ap.C.Avails()
		 avs.on('destroy',
				 function (j) {
					 alert('i am col and i was destroyed')
					 v.trigger('modelDeleted')
				 })
		 v = Ap.V.Avails({cl: avs})
		 v.on('modelDeleted', function () {
			 alert('modDel')
		 })
		 a = bbM({
			 defaults: {prop: 3},
			 test: function () {
				 console.log(this.get('prop'))
			 },
			 test2: function (a) {
				 console.log(
						 (function () {
							 return this.get('prop')
						 })()
				 )
			 },
			 happy: function (a) {
				 this.test2(a)
			 }
		 })
		 f = a()
	 }
	 v = Ap.V.Avails({
		 collection: avs
	 })//.render()
//v=Ap.V.Avails({cl:avs})
	 v.on('modelDeleted',
			 function () {
				 alert('modDel')
			 })
	 $.ip('new avail').id('newAvail').A()
	 $.bt('ok', function () {
		 Ap.M.Avail({
			 c: $('#newAvail').v()
		 }).save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).A()
	 $.dI('availsDiv')
	 $.ip('new avail').id('newAvail').A()
	 $.bt('ok', function () {
		 Ap.M.Avail({
			 c: $('#newAvail').v()
		 }).save()
		 v.render()
	 }).A()
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
	 avs = Ap.C.Avails()
	 avs.on('destroy', function (j) {
		 alert('i am col and i was destroyed')
		 v.trigger('modelDeleted')
	 })
 }
 AVAIL1OLD = function () {
	 z()
	 tx('new avail').id('newAvail').a()
	 bt('ok', function () {
		 Ap.M.Avail({c: qiv('newAvail')}).save()
		 v.render()
	 }).a()
	 di('availsDiv').a()
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 Ap.T.Avail = function (model) {
		 return _d().w(400).h(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = bbM({urlRoot: '/avail'})
	 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = bbV({
		 R: function () {
			 this.$el.append(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
			 'click #deleteAvail': 'deleteAvail',
			 'click #editAvail': 'editAvail',
			 'blur #avail': 'changeAvail'
		 },
		 changeAvail: function () {
			 qq(this.$el.find('#avail')).at('contenteditable', 'false')
			 var newAvail = this.$el.find('#avail').text()
			 this.model.s('c', newAvail)
			 this.model.save()
		 },
		 deleteAvail: function () {
			 this.model.destroy()
			 this.$el.remove()
		 },
		 editAvail: function () {
			 qq(this.$el.find('#avail')).at('contenteditable', 'true')
		 }
	 })
	 Ap.V.Avails = bbV({
		 el: '#availsDiv',
		 I: function () {
			 this.render()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.$el.html('')
					 t.$el.append("<h1>Avails List</h1>")
					 t.collection.each(function (m) {
						 t.$el.append(Ap.V.Avail({model: m}).render().el)
						 return t
					 }, t)
				 }
			 })
		 }
	 })
	 avs = Ap.C.Avails()
	 v = Ap.V.Avails({collection: avs})//.render()
	 avs.on('destroy', function (aa) {
		 $l('destroy!!!!')
	 })
 }
 AVAILOLD = function () {
	 z()
	 tx('new avail').id('newAvail').a()
	 bt('ok', function () {
		 var m = Ap.M.Avail({
			 c: qiv('newAvail')
		 })
		 m.save()
		 m.on('destroy', function () {
			 alert('i am the model and i was destroyed')
		 })
		 v.render()
	 }).a()
	 di('availsDiv').a()
	 Ap = {M: {}, C: {}, V: {}, T: {}}
	 Ap.T.Avail = function (model) {
		 return _d().w(400).h(100).M(20).c('g')(
				 h4(model.g('c')).id('avail').c('y', 'r'),
				 br(), sp('delete').id('deleteAvail'),
				 sp(' '), sp('edit').id('editAvail'),
				 sp(' '), cb2().id('selAvail')).q
	 }
	 Ap.M.Avail = bbM({urlRoot: '/avail'})
	 Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	 Ap.V.Avail = bbV({
		 R: function () {
			 this.q(Ap.T.Avail(this.model))
			 return this
		 },
		 events: {
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
			 qq(this.$el.find('#avail')).cE(1)
		 }
	 })
	 Ap.V.Avails = bbV({
		 el: '#availsDiv',
		 I: function () {
			 this.render()
		 },
		 R: function () {
			 var t = this
			 t.collection.fetch({
				 success: function () {
					 t.q.H('')
					 t.q(h1('Avails List'))
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
	 avs = Ap.C.Avails()
	 avs.on('destroy',
			 function (j) {
				 alert('i am col and i was destroyed')
				 v.trigger('modelDeleted')
			 })
	 v = Ap.V.Avails({cl: avs})
	 v.on('modelDeleted', function () {
		 alert('modDel')
	 })
	 a = bbM({
		 defaults: {prop: 3},
		 test: function () {
			 console.log(this.get('prop'))
		 },
		 test2: function (a) {
			 console.log(
					 (function () {
						 return this.get('prop')
					 })()
			 )
		 },
		 happy: function (a) {
			 this.test2(a)
		 }
	 })
	 f = a()
 }
 server = {
	 d: 2,
	 n: 2,
	 docs: {
		 1: {text: 'this is a doc', id: 1}
	 },
	 notes: {
		 1: {1: {text: 'note'}, 2: {text: 'another note'}}
	 },
	 get: {
		 '/docs': function (q, p) {
			 var res = []
			 for (var doc in docs) {
				 if (docs.hasOwnProperty(doc)) {
					 res.push(docs[doc])
				 }
			 }
			 p.json(res)
		 },
		 '/docs/:did/notes': function (q, p) {
			 var res = [], n = notes[q.params.id]
			 for (var note in n) {
				 if (n.hasOwnProperty(note)) {
					 res.push(n[notes])
				 }
			 }
		 }
	 },
	 post: {
		 '/docs': function (q, p) {
			 var doc = q.body
			 doc.id = d++
			 docs.doc.id = doc
			 p.json(doc)
		 },
		 '/docs/:did/notes': function (q, p) {
			 var note = q.body, id = q.params.id
			 note.id = n++
			 if (!notes[id]) {
				 notes[id] = {}
			 }
			 notes[id][notes.id] = note
			 p.json(note)
		 }
	 },
	 put: {
		 'docs/:id': function (q, p) {
			 docs[q.params.id] = q.body
			 p.json(q.body)
		 },
		 'docs/:did/notes:nid': function (q, p) {
			 notes[q.params.id][q.params.nid] = q.body
			 p.json(q.body)
		 }
	 }
 }
 //$mk.server = server
 NOTES = function () {
	 server = {
		 d: 2,
		 n: 2,
		 docs: {
			 1: {text: 'this is a doc', id: 1}
		 },
		 notes: {
			 1: {1: {text: 'note'}, 2: {text: 'another note'}}
		 },
		 get: {
			 '/docs': function (q, p) {
				 var res = []
				 for (var doc in docs) {
					 if (docs.hasOwnProperty(doc)) {
						 res.push(docs[doc])
					 }
				 }
				 p.json(res)
			 },
			 '/docs/:did/notes': function (q, p) {
				 var res = [], n = notes[q.params.id]
				 for (var note in n) {
					 if (n.hasOwnProperty(note)) {
						 res.push(n[notes])
					 }
				 }
			 }
		 },
		 post: {
			 '/docs': function (q, p) {
				 var doc = q.body
				 doc.id = d++
				 docs.doc.id = doc
				 p.json(doc)
			 },
			 '/docs/:did/notes': function (q, p) {
				 var note = q.body, id = q.params.id
				 note.id = n++
				 if (!notes[id]) {
					 notes[id] = {}
				 }
				 notes[id][notes.id] = note
				 p.json(note)
			 }
		 },
		 put: {
			 'docs/:id': function (q, p) {
				 docs[q.params.id] = q.body
				 p.json(q.body)
			 },
			 'docs/:did/notes:nid': function (q, p) {
				 notes[q.params.id][q.params.nid] = q.body
				 p.json(q.body)
			 }
		 }
	 }
	 Note = Bb.M.x({})
	 Notes = Bb.C.x({
		 m: Note,
		 i: function (mds, op) {
			 this.doc = op.doc
		 },
		 u: function () {
			 return this.doc.url() + '/notes'
		 }
	 })
	 Doc = Bb.M.x({
		 i: function (op) {
			 this.notes = new Notes([], {doc: this})
		 },
		 addNote: function (tx) {
			 this.notes.create({
				 text: tx
			 })
		 }
	 })
	 Docs = Bb.C.x({
		 m: Doc, u: '/documents',
		 i: function () {
			 this.on('reset', this.getNotes, this)
		 },
		 getNotes: function () {
			 this.each(function (doc) {
				 doc.notes = new Notes([], {doc: doc})
				 doc.notes.fetch()
			 })
		 }
	 })
	 ds = new Docs()
	 ds.fetch()
 }
 NOTES = MINIMALBACKBONELOCALSTOREEXAMPLE = MINLS = function () {
	 //Minimal Bb.localStorage example
	 //THE MODEL AND THE COLLECTION
	 //In order to use Bb.localStorage to save a model
	 // we also need a collection.
	 // The `localStorage` property of the collection
	 // needs to be set to a new Bb.LocalStorage object
	 // with an identifier for the collection
	 // that is used when reading or writing the model values to LocalStorage.
	 //The defaults function of the model
	 // returns an object with a content property
	 // that makes it easy to identify when the model was added to the collection
	 // and if it's new or has been fetched from local storage.
	 //ADDING AND SAVING NOTE MODELS
	 //Bb collections have a fetch method that retrieves models from the server or,
	 // in this case, local storage.
	 //Before calling save on the model we need to add it to the collection,
	 // otherwise Bb would attempt to use an Http request to store it on a server.
	 myNotes = new NoteCollection()
	 myNotes.fetch();
	 note1 = new Note();
	 myNotes.add(note1);
	 note1.sv()
	 myNotes.models.forEach(function (md) {
		 $l("Md in cl: " + md.g("content"))
	 })
	 function notes() {
		 Note = Bb.M.x({})
		 Notes = Bb.C.x({
			 m: Note,
			 i: function (mds, op) {
				 this.doc = op.doc
			 },
			 u: function () {
				 return this.doc.url() + '/notes'
			 }
		 })
		 Doc = Bb.M.x({
			 i: function (op) {
				 this.notes = new Notes([], {doc: this})
			 },
			 addNote: function (tx) {
				 this.notes.create({
					 text: tx
				 })
			 }
		 })
		 Docs = Bb.C.x({
			 m: Doc, u: '/documents',
			 i: function () {
				 this.on('reset', this.getNotes, this)
			 },
			 getNotes: function () {
				 this.each(function (doc) {
					 doc.notes = new Notes([], {doc: doc})
					 doc.notes.fetch()
				 })
			 }
		 })
		 ds = new Docs()
		 ds.fetch()
	 }
 }
	
