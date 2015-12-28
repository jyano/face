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