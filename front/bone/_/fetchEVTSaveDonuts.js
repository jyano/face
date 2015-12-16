FETCH = EVTSAVE = function () {
	m = _M({n: 'j'})
	Don = _M({
		d: {n: null, sprink: 0, cream: 0},
		u: function () {
			return this.id ? '/dn/' + this.id : '/dn'
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S() //save
	Dons = _C({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch()
	// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	Shop = _M({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		},
		df: {n: "z"}
	}).o()
	Shop.oA(function (dn) {
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({n: "Lem"})
	ev = Bb.E()
	ev.b("fun:had", function () {
		alert("wee!")
	})
	ev.tr("fun:had")  //it'll alert "wee!"
}
FETCH = EVTSAVE = DONUTS = function () {
	m = $M({
		n: 'j'
	})
	m = _M({n: 'j'})
	Don = $M({
		d: {n: null, sprink: 0, cream: 0},
		url: function () {
			return '/dn/' + this.id || ''
		}
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
}
MOD = DONUT = function () {
	m = _M({n: 'j'})
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
		nm: 'Boston Cream',
		cream: 1
	})
	bostonCream.s({sprink: 1})
	bostonCream.S() //save
	Donuts = bbC({m: Donut, url: "/donuts"})
	donuts = Donuts()
	donuts.fet()// donuts.at(0); -> gets donuts by index.
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
 
	FETCH = EVTSAVE = function () {
		m = bb.M.x({
			n: 'j'
		})
		Don = $M({
			//defaults
			d: {n: null, sprink: 0, cream: 0},
			//u? url?
			u: function () {
				return '/dn/' + this.id || ''
			}
		})
		bc = bostonCream = Don({n: 'Bos', cream: 1})
		bc.s({sprink: 1}).S()  //save
		Dons = $Cl({m: Don, url: "/dn"})
		dons = Dons()
		dons.fetch() //f F
		dons.at(0)  // a -> gets donuts by index.
		dons.get(0) // g   -> gets donuts by id.
		dons.each(function (d) { // e
			$l(d.get("name"))
		})
		dons.select(function (d) {//sl
			return d.get("name").length > 2
		})// Select donuts with names longer than 2
		dons.map(function (d) {//m
			return d.get("name")
		})
		Shop = $m({
			i: function () {
				this.dons = Dons()
				this.dons.url = 'shops/' + this.id + "/dn"
			}, df: {n: "z"}
		})
		Shop.oA(function (dn) { //on ? alert added?
			alert("added " + dn.g('n'))
		})
		lem = Shop.dons.A({
			n: "Lem"
		})
		//////
	}
	FETCH = EVTSAVE = function () {
		m = Bb.M.e({n: 'j'})
		Don = Bb.M.e({
			d: {n: null, sprink: 0, cream: 0},
			u: function () {
				return this.id ? '/dn/' + this.id : '/dn'
			}
		})
		bc = bostonCream = Don.o({n: 'Bos', cream: 1})
		bc.s({sprink: 1}).S() //save
		Dons = Bb.C.e({m: Don, url: "/dn"})
		dons = Dons.o()
		dons.fetch()
		// donuts.at(0); -> gets donuts by index.
		// donuts.get(0); -> gets donuts by id.
		// donuts.each(function(d){$l(d.get("name"))})
		// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
		// donuts.map(function(d){return d.get("name")})
		Shop = Bb.M.e({
			i: function () {
				this.dons = Dons()
				this.dons.url = 'shops/' + this.id + "/dn"
			},
			df: {n: "z"}
		}).o()
		Shop.oA(function (dn) {
			alert("added " + dn.g('n'))
		})
		lem = Shop.dons.A({n: "Lem"})
		ev = Bb.E()
		ev.b("fun:had", function () {
			alert("wee!")
		})
		ev.tr("fun:had")  //it'll alert "wee!"
	}
	MODDONUT = function () {
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
	FETCH = EVTSAVE = function () {
		m = Bb.M.x({
			n: 'j'
		})
		Don = $M({
			//defaults
			d: {n: null, sprink: 0, cream: 0},
			//u? url?
			u: function () {
				return '/dn/' + this.id || ''
			}
		})
		bc = bostonCream = Don({n: 'Bos', cream: 1})
		bc.s({sprink: 1}).S()  //save
		Dons = $Cl({m: Don, url: "/dn"})
		dons = Dons()
		dons.fetch() //f F
		dons.at(0)  // a -> gets donuts by index.
		dons.get(0) // g   -> gets donuts by id.
		dons.each(function (d) { // e
			$l(d.get("name"))
		})
		dons.select(function (d) {//sl
			return d.get("name").length > 2
		})// Select donuts with names longer than 2
		dons.map(function (d) {//m
			return d.get("name")
		})
		Shop = $m({
			i: function () {
				this.dons = Dons()
				this.dons.url = 'shops/' + this.id + "/dn"
			}, df: {n: "z"}
		})
		Shop.oA(function (dn) { //on ? alert added?
			alert("added " + dn.g('n'))
		})
		lem = Shop.dons.A({
			n: "Lem"
		})
		//////
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
 
FETCH = EVTSAVE = function () {
	m = Bb.M.e({n: 'j'})
	Don = Bb.M.e({
		d: {n: null, sprink: 0, cream: 0},
		u: function () {
			return this.id ? '/dn/' + this.id : '/dn'
		}
	})
	bc = bostonCream = Don.o({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S() //save
	Dons = Bb.C.e({m: Don, url: "/dn"})
	dons = Dons.o()
	dons.fetch()
	// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	Shop = Bb.M.e({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		},
		df: {n: "z"}
	}).o()
	Shop.oA(function (dn) {
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({n: "Lem"})
	ev = Bb.E()
	ev.b("fun:had", function () {
		alert("wee!")
	})
	ev.tr("fun:had")  //it'll alert "wee!"
}
MODDONUT = function () {
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
FETCH = EVTSAVE = function () {
	m = Bb.M.x({
		n: 'j'
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
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
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
FETCH = EVTSAVE = function () {
	m = bb.M.x({
		n: 'j'
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
}
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}