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

