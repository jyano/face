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
XVIEW = function () {
	$.x('b', 'viw')
	Vw = $$V({
		el: q = $.dA('g', 400, 400, 200, 200),
		r: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.r()
			})
		},
		i: function () {
			this.r()
		}
	})
	Vw2 = $$V({
		r: function () {
			this.A(
					$.ul(['hello']).fZ(30)
			)
		},
		i: function () {
			this.r()
		}
	})
	Vw()
	$.bt('orange', function () {
		d2 = $.d('O', 500, 500)
		Vw2({el: d2})
	})
}
XPEOPOP = function () {
	$.x('x', 'bb view people')
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	Vw = $$V({
		t: 'ul',
		r: function () {
			var vw = this, q = vw.$el.E();
			_.e(vw.collection, function (p) {
				var li = $.li([p.n + '(' + p.a + ')'])
				q.A(li)
			});
			return this
		},
		i: function () {
			this.$el.C('y')
		}
	})
	vw = Vw({cl: peep})  // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.r().el)
	_.in(function () {
		peep.pop();
		vw.r()
	})
}
XDIVADD = function () {
	z()
	q = $.dI('d1', 'r', 500, 500)
	Vw = $$V({
		r: function () {
			q.A($.ul(['hello']))
		},
		initialize: function () {
			this.r()
		}
	})
	_.t(3, function () {
		Vw()
	}) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
}
XCLONADD = function () {
	$.x().h1('backcl');
	$.i('chicks').A()
	Cl = $$C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
XMDVW = function () {
	$.x('n')
	Md = $$M({d: {n: 'j', a: 20, o: 'p'}})
	Vw = $$V({
		t: 'li',
		_: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})
	md = Md()
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	md.V(Vw)
	_.in(2, function () {
		$.C('R');
		$l('- - --- - - - - ');
		md.l();
		$Ms(JSON.stringify(md.j()))
	})
}
XBACKVALL = function () {
	z();
	$l('backvall')
	Md = $$M({
		defaults: {lame: true},
		validate: function (at) {
			$l('in validate')
			_at = at
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			var t = this
			t.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			t.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(3, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
XCLLEN = function () {
	z();
	$Ms('CLLEN')
	Td = $$M({df: {tt: '', completed: false}});
	Md = $$M({
		d: {tt: '', completed: false}
	})
	Cl = $$C({
		md: Md
	})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = $$C({md: Td})
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
XBBRECS = BBSAMP = function () {
	$.x('b', 'bbsampp', '+')
	d = $.d()
	Rec = $$M()
	RecV = $$V({
		k: 'rec', e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md}).rr().$el.a2(d)
	})
}
XCHANGECOL = function () {
	z()
	d = $.dA(400, 400, 300, 200)
	Md = $$M({
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
XNNN = PER0 = function () {
	$.x('n')
	Per = $$M({d: {n: 'j', a: 20, o: 'p'}})
	PerV = $$V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n')
			this.$el.A()
		},
		i: function () {
			this.r()
		}
	})
	pV = PerV({m: p = Per()})
	_.ev(.5, function () {
		pV.r()
	})
}
XTKZ = function () {
	$$$('TKZ');
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Backbone.Model.extend({})
	App.Views.Task = Backbone.View.extend({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Backbone.Collection.extend({model: App.Models.Task})
	App.Views.Tasks = Backbone.View.extend({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
		{title: 'store', prior: 5}, {title: 'haha', prior: 3}])
	tasksView = new App.Views.Tasks({collection: tasksCollection})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([{title: 'yooo', prior: 4}])
	}).button()
}
XDEFAULT = function () {
	$.x('n')
	Md = $$M({
		defaults: {n: 'j', a: 20, o: 'p'}
	})
	Vw = $$V({
		t: 'li',
		r: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		i: function () {
			this.$el.A().C('r').col('b').fS(149);
			this.r()
		}
	})
	md = Md()
	vw = Vw({
		m: md
	})
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
	Md = $$M()
	Vw = $$V({
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
	m = Md({rx: 'antibiotic'})
	Vw({
		el: div,
		m: m
	})
}