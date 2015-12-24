 
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
 
  