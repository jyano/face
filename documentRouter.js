DOC1=function(){
	Li_ = Bb.V.x({
		tagName: 'li',
		events: {
			click: function () {
				$ev.trigger('doc:selected', this.model)
			}
		},
		R: function () {
			var vw = this
			md = vw.model
			tt = vw.model.get('title')
			$l(tt)
			vw.$el.A(vw.model.get('title'))
			return vw
		}
	})
	Ul_ = Bb.V.x({
		tagName: 'ul', R: function () {
			cl = this.collection
			_.e(this.collection, function (doc) {
				J.s($l(doc.attributes))
				var li = new Li_({model: doc})
				this.$el.A(li.R().el)
			}, this)
			return this
		}
	})
	Div_ = Bb.V.x({
		R: function () {
			var vw = this, md = vw.model
			var content = $.d().A(md.get('content'))
			vw.$el.A($.h1(md.get('title')), content)
			return vw
		}
	})
	$ev = _.x({},Bb.E)
	
	$ev.on('doc:selected', function(doc){
	
		$l('sel')
		
		rtr.navigate('view/' + doc.get('title'), {trigger: 'true'})
	
	})
	 
	RtrCos = Bb.R.x({

		
		
		routes: {
			contents: function () {
				$l('contents')
			
				var ul = new Ul_({ collection: docs } )
				$.bd().E( ul.R().el  )
			},


			'view/:title': function (doc) {
				var selDoc = _(docs).find(function (doc) {
					return doc.get('title')
				})
				
				var d = new Div_({model: selDoc})
				
				$.bd().E().A(d.R().el )
				
				
			}
		}
	})
	rtr = new RtrCos()
	
	_$start()
	
	 rtr.navigate('contents', {trigger: 'true'})
}
DOC = function () {

	
	
	Li_ = Bb.V.x({
	
		tagName: 'li', events: {click: function () {$ev.trigger('doc:selected', this.model)}},
		R: function () {
			var vw = this
			md = vw.model
			tt = vw.model.get('title')
			$l(tt)
			vw.$el.A(vw.model.get('title'))
			return vw
		},
		
		initialize:function(){
			this.R()
		}
	})
	
	
	Ul_ = Bb.V.x({
		tagName: 'ul', R: function () {
		
		var vw=this,  cl =vw.collection, q = vw.$el
			
			_.e(cl, function (doc) {q.A( (new Li_({model: doc})).el  )})
			
			
			return vw
		}
	})
	
	
	Div_ = Bb.V.x({
		R: function () {
			var vw = this, md = vw.model
			var content = $.d().A(md.get('content'))
			vw.$el.A($.h1(md.get('title')), content)
			return vw
		}
	})
	
	
	$ev = _.x({}, Bb.E).on('doc:selected', function (doc) {rtr.navigate('view/' + doc.get('title'), {trigger: 'true'})})
	

	
	RtrCos = Bb.R.x({
	
		
		routes: {
			contents: function () {
				var ul = new Ul_({collection: docs})
				$.bd().E(ul.R().el)},
			'view/:title': function (doc) {
				var selDoc = _(docs).find(function (doc) {
					return doc.get('title')})
				var d = new Div_({model: selDoc})
				$.bd().E().A(d.R().el)
			}
		}
	})
	
	
	
	
	rtr = new RtrCos()
	_$start()
	rtr.navigate('contents', {trigger: 'true'})
}


bbMock()


 function bbMock(){
 
	 docs = _.m($mk.docs, function (doc) {
		 return new Bb.Model(doc)
	 })
 }