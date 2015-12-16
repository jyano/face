BB16 = COLLECTIONONADD= CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB17 = COLLECTIONLENGTH=TDS = CRM = CLLEN = function () {
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
FLCL = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = Bb.V.x({
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
	cl.add([
		{a: 'f', b: 's'},
		{a: 't', b: 's'},
		{a: 'f', b: 's'},
		{a: 's', b: 't'}
	])
	res = cl.where({a: 'f', b: 's'})
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
BB18 = FLCL = FILTERCOLLECTION= function () {
	
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
	
	vw = $V({t: 'ul',
		collection: peep,
		ren: function () {var vw = this
			var q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))})
						return this},
		i: function () {this.ren().$el.C('y').A()}
	
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
 