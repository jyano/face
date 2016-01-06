// collections:
FLCL004 = function () {
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
	Cl = C$({
		I: function () {
		}
	})
	cl = new Cl({})
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
FLCL030 = function () {
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
FLCL02 = function () {
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
 