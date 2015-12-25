FLCL00 = function () {
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
// collections:
FLCL00 = function () {
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
function viewTemplateApps(){
	BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	BBVT = function () {
		$.x('x', 'bb view and template');
		listTp();
		m = $M()({d: BBVTdArr})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		Vw = $V({
			q: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp').children()
			},
			r: rFn,
			ev: {'click button': 'r'}
		})
		v = Vw({m: m, blOp: 'emp!'})
	}
	BBVT = function () {
		$.x('x', 'bb view and template');
		listTp();
		m = $M()({d: BBVTdArr})
		$.d('y').id('ct').A(
				$.bt('Load', function () {
					v.r()
				}),
				$.ul().id('list'))
		Vw = $V({
			q: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp')
						.children()
			},
			r: rFn2,
			events: {'click button': 'r'}
		})
		v = Vw({zm: m, blOp: 'emp!'})
	}
	BBVT = function () {
		$.x('x', 'bb view and template');
		md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		Vw = Bb.V.e({
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
	BBVT = function () {
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
	}
	BBVT = function () {
		BBVT = function () {
			$.x('x', 'bb view and template');
			md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
			$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
			$.dI('list-tp', [$.la()]).C('o')
			Vw = Bb.V.e({
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
		BBVT = function () {
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
		}
		$.x('x', 'bb view and template');
		listTp();
		m = $M()({d: BBVTdArr})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		Vw = $V({
			q: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp').children()
			},
			r: rFn,
			ev: {'click button': 'r'}
		})
		v = Vw({m: m, blOp: 'emp!'})
	}
	BBVT1 = function () {
		$.x('x', 'bb view and template');
		md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		Vw = Bb.V.e({
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
	BBVT = function () {
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
	}
	BBVT = function () {
		$.x('x', 'bb view and template');
		listTp();
		m = $M()({d: BBVTdArr})
		$.d('y').id('ct').A(
				$.bt('Load', function () {
					v.r()
				}),
				$.ul().id('list'))
		Vw = $V({
			q: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp')
						.children()
			},
			r: rFn2,
			events: {'click button': 'r'}
		})
		v = Vw({zm: m, blOp: 'emp!'})
	}
	BBVT1 = function () {
		$.x('x', 'bb view and template');
		md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		Vw = Bb.V.e({
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
	BBVT = function () {
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
	}
}