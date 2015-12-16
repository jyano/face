 
 
DIRECATMIN19 = function () {
	$CSS(CssOb);
	$.dI('wrapper', [
		$('<h1>').A('games directory').col('o'),
		$.dK('tools', [
			$('<h4>').col('g').A('search:'), $.br(),
			$('<input>').id('searchBox'), $.br(),
			$('<h5>').col('y').A('Filter:'), $.dI('filter'),
			$.dI('count')
		]),
		$.ulI('listing', [])
	])
	app = {m: {}, v: {}, r: {}, c: {}}
	app.m.Person = M$({
		defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
		initialize: function () {
			this.set('type', this.get('par') ? 'student' : 'parent')
		}
	})
	
	app.c.People = C$({
		model: app.m.Person,
		comparator: function (per) {
			return per.get('lN')
		}
	})
	
	app.i = function () {
		direc = new app.v.People(dirData)
		rtr = new app.r.Rtr()
		// Bb.h.start()
	}
	
	app.r.Rtr = Bb.R.x({
		routes: {
			'filter/:type': 'urlFilter'
		},
		urlFilter: function (type) {
			direc.filterType = type
			direc.trigger('change:filterType')
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.r().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.r()
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.r().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.r()
		}
	})
 
	
	app.i(dirData)
} 