$TWT$ = $TWTAPP$ = function (fn) {
//https://www.youtube.com/watch?v=2BDGBJUtAmo
//Introduction to Backbone.js Part 1 - Client-side
//Michael Yagudaev
	return function () {
		$CSS(twtCss)
		TWTmvc()
		if (fn) {
			fn()
		}
	}
}

Twit = Bb.M.x({
	
	idAttribute: "_id",
	
	//url: '/twits',
	
	df: {un: 'fred', sts: 'sleeping'}
})

Twits= TwitsList = Bb.C.x({
	url: '/twits',
	model: Twit
})


// NO SERVER
TWIT0 = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([
		$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
			ev.preventDefault()
			twits.create({
				un: $('#un').v(),
				sts: $('#sts').v()
			})
		})])
	TwitView = Bb.V.x({
		E: {
			'click .edit': function (ev) {
				$.pD(ev)
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev)
				twits.remove(this.model)
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		tagName: 'p',
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.$('.sts').ed(0)//.rmAt('contenteditable')
		},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	TwitsView = Bb.V.x({
		initialize: function () {
			var vw = this
			this.collection.on('all', function () {
				$l('TwitsView picked up on collection event')
				vw.R()
			})
		},
		R: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({
					model: md
				})
				vw.$el.A(twitV.R().el)
			})
		}
	})
	twits = new TwitsList()
	twitsV = new TwitsView({
		el: $.d(),
		collection: twits
	})
}

// SERVER 
TWIT00 = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
		
			ev.preventDefault()
		
			twits.create({
				un: $('#un').v(),
				 sts: $('#sts').v()
				 
			}, {success: function(doc){
				$l('success')
				$l(doc)}
			})
			
		})])
	
	
	TwitView = Bb.V.x({
		tagName: 'p',
		events: {
			'click .edit': function (ev) {$.pD(ev); this.$('.sts').edFoc()},
			'click .delete': function (ev) {$.pD(ev); this.model.destroy()},
			'blur .sts': 'close', 
			'keypress .sts': function (ev) {if ((ev.which) == 13) {this.close()}}
		},
		
		close: function () {var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.model.save()
			vw.$('.sts').ed(0)},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this}
	})
	TwitsView = Bb.V.x({
		I: function () {var vw = this 
			this.collection.on('all', function () {vw.R()})
			this.collection.fetch()},
		R: function () {var vw = this; vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({model: md})
				vw.$el.A(twitV.R().el)})}})
	twits = new TwitsList()
	twitsV = new TwitsView({el: $.d(), collection: twits})
	
	//Bb.M.prototype.idAttribute = '_id'
}



// video timelog:
// 2:50 makes tweet model 
// 6:50 tweet collection
// 11:35 ..lets make it interactive
// and let users send tweets..
// 16: finally makes function for form submit
// first the button makesa tweet
// and just adds it to the collection
//19:15
//.. now comes the fun part, rendering with views
//19:50 .. templates of course..
//v1 740 tangents off,,,
//1025 shows coll.first(2)
//1140  STARTS HTML (FORM)
//1600 ENDS TANGENT. defines form on submit fn.. it just:
// coll.add(new Tweet)
//1918  starts talking bout views
// but get this: template is just, literally: 2 spans
//2239 actually makes view
//3300 working
//3330 adds css ////////////////////
////////////////// testing..
////come back at 3420.. adds 2 a-links to template
// (so now, its :2 spans, 2 links)
//3520 EVENTS
//CONTENT EDITABLE
//3820 CLOSE(-EDIT)
//4000 KEUPRESS ENTER ALSO CLOSE EDIT.. NOT ME
//4400 DELETE
// //TWEETS.REMOVE(this.model) .. AND 'ON REMOVE;
// this.cl.on('add', this.render, this)
// this.cl.on('remove', this.render, this)
// SERVER 
TWIT = function () {
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([$.lb('un'), $.ip().at('name', 'un').id('un'),
		$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {ev.preventDefault()
			twits.create({un: $('#un').v(), sts: $('#sts').v()})})])

	
	
	TwitView = Bb.V.x({tagName: 'p',
		events: {
			'click .edit': function (ev) {$.pD(ev);this.$('.sts').edFoc()},
			'click .delete': function (ev) {$.pD(ev); this.model.destroy()},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {if ((ev.which) == 13) {this.close()}}},
		close: function () {var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.model.save();vw.$('.sts').ed(0)},
		R: function () {this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'), 
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	
	TwitsView = Bb.V.x({
		initialize: function () {
			var vw = this
			this.collection.on('all', function () {vw.R()})
			this.collection.fetch()},
		R: function () {var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({model: md})
				vw.$el.A(twitV.R().el)})}})
	twits = new TwitsList()
	twitsV = new TwitsView({el: $.d(), collection: twits})
	//Bb.M.prototype.idAttribute = '_id'
}
