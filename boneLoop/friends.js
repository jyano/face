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