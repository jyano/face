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