
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

function TWTmvc() {
	Tweet = _M({
		initialize: function () {
			$l('new Tweet model')
		},
		df: {un: 'fred', sts: 'sleeping'}
	})
	TweetsList = _C({
		url: '/tweets',
		model: Tweet
	})
	TweetView = _V({
		events: {
			'click .edit': function (ev) {
				$.pD(ev)
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev)
				tweets.remove(this.model)
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.$('.sts').ed(0)//.rmAt('contenteditable')
		},
		ren: function () {
			this.$el.E(
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[details]').K('details'),
					$.a('[edit]').K('edit'),
					$.a('[delete]').K('delete'),
					$.br()
			)
			return this
		}
	})
}

TWT0 = TWTPART1WORKS = $TWT$(function () {
	$l('twt00 tweet video part 1 good')
	form = $.f().A(
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post')
	)
	form.submit(function (ev) {
		//ev.preventDefault()
		var un = $('#un').val()
		var sts = $('#sts').val()
		var tweet = Tweet({un: un, sts: sts})
		tweets.add(tweet)
		$l(tweets.toJSON())
		return false
	})
	$.hr()
	div = $.d('y', 500, 200)
	Tweet = _M({df: {un: 'fred', sts: 'sleeping'}})
	TweetsList = _C({model: Tweet})
	tweets = TweetsList()
	tweets.add({un: 'zzzzzzzzz'})
	TweetView = _V({
		events: {
			'click .edit': function (ev) {
				ev.preventDefault()
				this.$('.sts').at('contenteditable', true).focus()
			},
			'click .delete': function (ev) {
				ev.preventDefault()
				tweets.remove(this.model)
			},
			'blur .sts': 'close'
		},
		
		close: function () {
			var sts = this.$('.sts').text()
			this.model.set('sts', sts)
			this.$('.sts').removeAttr('contenteditable')
		},
		
		model: Tweet(),
		
		tagName: 'div',
		
		ren: function () {
			this.$el.empty().A(
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[edit]').K('edit'), $.a('[delete]').K('delete')
			)
			
			return this
		}
	})
	
	TweetsView = _V({
		el: div,
		i: function () {
			var vw = this
			this.ren()
			this.collection.on('add', function () {
				vw.ren()
			})
			this.collection.on('remove', function () {
				vw.ren()
			})
		},
		collection: tweets,
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				vw.$el.A(TweetView({model: md}).ren().el)
			})
			return vw
		}
	})
	appView = tweetsView = TweetsView({
		collection: tweets
	})
	//
})

TWT=function(){

	$l("TWT video part 2...")
	Bb.Model.prototype.idAttribute = '_id'
	
	Twit= Bb.M.x({
		defaults: {author: 'jt', status: 'zzzzzzz'}
	})
	
	Twits = Bb.C.x({
		model: Twit,
		url: '/twits'
	})
}
TWITTEMP = function (fn) {
	$CSS(twtCss)
	form = $.f().A(
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post'))
	$.hr()
	div = $.d('y', 500, 200)
	Twit = M$({
		initialize: function () {
			$l('new Twit model')
		},
		defaults: {author: 'jy', status: 'zzzzzzz'}
	})
	TwitsList = C$({url: '/twits', model: Twit})
	TwitView = V$({
		model: new Twit,
		tagName: 'div',
		events: {
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
		ren: function () {
			this.$el.E(
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[details]').K('details'),
					$.a('[edit]').K('edit'),
					$.a('[delete]').K('delete'),
					$.br()
			)
			return this
		},
		close: function () {
			var sts = this.$('.sts').text()
			this.model.set('sts', sts)
			this.$('.sts').removeAttr('contenteditable')
		}
	})
	TwitsView = V$({
		el: div,
		i: function () {
			var vw = this
			this.ren()
			this.collection.on('add', function () {
				vw.ren()
			})
			this.collection.on('remove', function () {
				vw.ren()
			})
		},
		collection: twits,
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				vw.$el.A(TwitView({model: md}).ren().el)
			})
			return vw
		}
	})
	twits = TwitsList()
	twits.add({un: 'zzzzzzzzz'})
	appView = twitsView = TwitsView({
		collection: twits
	})
	form.submit(function (ev) {
		//ev.preventDefault()
		var un = $('#un').val()
		var sts = $('#sts').val()
		var twit = Twit({un: un, sts: sts})
		twits.add(twit)
		$l(twits.toJSON())
		return false
	})
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