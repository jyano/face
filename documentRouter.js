DOC = function () {
	
	Li_ = V$Li$({R: 'title', $: $TrgFn('doc:selected')})
	
	Ul_ = V$Ul($RenClFn(Li_))
	
	Div_ = V$R(function () {
		this.h1('title').C('_b'); this.d('content').C('y')
	
		return this 
	})
	
	$ev.on('doc:selected', function (md) {$Trg(rtr, 'view/' + md.g('title') )})
	
	rtr =	$Trg$(new( R$R({
	
		contents: function () {
		
			$.bd().E(Cl$Ul(docs).R().el)},
		
		'view/:title': function (title) {
		
			$.E(M$D(C$.f(docs, 'title', title)).R().el)}
	
	})), 'contents')
	
}

 
 
 
 

$L()
function _pre(){
	$.E = function () {
		var bd = $.bd()
		bd.E.apply(bd, arguments)
		return $
	}
	md.h1 = function (val) {
		
		var h1 = $.h1(this.get(val))
	 
		return h1
		
	}
	md.sp = function (val) {
		return $.sp().A(this.get(val))
	}
	md.d = function (val) {
		return $.d().A(this.get(val))
	}
	vw.h1 = function (val) {
		var h1 = this.model.h1(val)
		this.$el.A(h1)
		return  h1
	}
	vw.d = function (val) {
		return this.model.d(val).a2(this.$el)
	}
	
	$Nav = function (rtr, rt, op) {
		rtr.navigate(rt, op)
		return rtr
	}
	$Trg = function (rtr, rt) {
		return $Nav(rtr, rt, {trigger: 'true'})
	}
	$Trg$ = function (rtr, rt) {
	$start()
		return $Nav(rtr, rt, {trigger: 'true'})
	}
	
	bbMock()
	function bbMock() {
		docs = _.m($mk.docs, function (doc) {
			return new Bb.Model(doc)
		})
	}
	
	Bb.Co = Bb.Controller = function (Vw, md) {
		return new Vw({model: md})
	}
	Bb.el = function (Vw, md) {
		return new Vw({model: md}).el
	}
	$trg = function () {
		$ev.trigger.apply($ev, arguments)
	}
	V$Ul = function (ob) {
		ob = F(ob) ? {R: ob} : ob
		return V$(_.x({tagName: 'ul'}, ob))
	}
	V$Li = function (ob) {
		return V$(_.x({tagName: 'li'}, ob))
	}
	V$Li$ = function (ob) {
		return V$(_.x({
			I: 1,
			tagName: 'li'
		}, ob))
	}
	$RenClFn = function (Vw) {
		return function () {
			return this.renCl(Vw)
		}
	}
	V$R = function (fn) {
		return V$({R: fn})
	}
	$TrgFn = function (str) {
		return function () {
			this.trg(str)
		}
	}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
	DOC1 = function () {
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
		$ev = _.x({}, Bb.E)
		$ev.on('doc:selected', function (doc) {
			$l('sel')
			rtr.navigate('view/' + doc.get('title'), {trigger: 'true'})
		})
		RtrCos = Bb.R.x({
			routes: {
				contents: function () {
					$l('contents')
					var ul = new Ul_({collection: docs})
					$.bd().E(ul.R().el)
				},
				'view/:title': function (doc) {
					var selDoc = _(docs).find(function (doc) {
						return doc.get('title')
					})
					var d = new Div_({model: selDoc})
					$.bd().E().A(d.R().el)
				}
			}
		})
		rtr = new RtrCos()
		_$start()
		rtr.navigate('contents', {trigger: 'true'})
	}
	R$R = function (fn) {
		return R$({R: fn})
	}
	Cl$Ul = function (cl) {
		return new Ul_({collection: cl})
	}

	M$D = function (md) {
		return new Div_({model: md})
	}
	C$.f = function (docs, key, val) {
		return docs.find(function (doc) {
			return doc.g(key) == val
		})
		//docs.find(function (doc) {return doc.g('title') == title}) -->  C$.f(docs, 'title', title)
	}
	$ev = _.x({}, Bb.E)
}