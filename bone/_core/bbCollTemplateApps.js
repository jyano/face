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