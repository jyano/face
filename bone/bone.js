 
 RT3 = ITEMZ = function () {
	 ITEMZZ = function () {
		 Ap = {M: {}, V: {}, C: {}}
		 Ap.M.Item = $$M({})
		 $$R({
			 routes: {
				 '': 'welcome',
				 'itemlist': 'showItemList',
				 'j': 'j',
				 '': 'welcome',
				 'wap/items': 'welcome1',
				 'wap/items/itemlist': 'showItemList',
				 'wap/items/j': 'j'
			 },
			 welcome: function () {
				 $.bd().E().A($.h1('welcome'))
			 },
			 j: function () {
				 $l('asdfjfsdafsdf')
			 },
			 showItemList: function () {
				 $.bd().E().A($.h1('show item list'))
			 }
		 })()
		 i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		 i1.oR('j', function () {
			 $.bd().E().A($.h1('j'))
		 })
		 i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		 r.A('/wap/items/j', function () {
			 $.bd().E().A(
					 $.h1('j')
			 )
		 })
		 r.A('/wap/items/q', function () {
			 $.bd().E().A($.h1('q'))
		 })
		 Bb.h.start({pushState: true})
		 $.bt('add', function () {
			 r.n('/wap/items/itemlist')
		 })
		 $.bt('add1', function () {
			 $.A($.h1('k'))
			 r.n('/wap/items/j')
		 })
		 $.bt('add', function () {
			 r.n('/itemlist')
		 })
	 }
	 Ap = {M: {}, V: {}, C: {}}
	 Ap.M.Item = _M({})
	 rtr = $R({
		 routes: {
			 '': 'welcome',
			 'itemlist': 'showItemList',
			 'j': 'j',
			 'wap/items': 'welcome1',
			 'wap/items/itemlist': 'showItemList',
			 'wap/items/j': 'j'
		 },
		 welcome: function () {
			 $.bd().E().A($.h1('welcome'))
		 },
		 j: function () {
			 $l('asdfjfsdafsdf')
		 },
		 showItemList: function () {
			 $.bd().E().A($.h1('show item list'))
		 }
	 })
	 item1 = Ap.M.Item({
		 n: 'jason', g: 'licensing exams and work history '
	 })
	 item1.oR('j', function () {
		 $.bd().E().A($.h1('j'))
	 })
	 rtr.A('/wap/items/j', function () {
		 $.bd().E().A(
				 $.h1('j')
		 )
	 })
	 rtr.A('/wap/items/q', function () {
		 $.bd().E().A($.h1('q'))
	 })
	 Bb.h.s()
 }
  
	 $RoApp('TWOVWS', function () {
	 
		 FirstVw = $$V({
			 i: function () {
				 this.r()
			 },
			 r: function () {
				 this.$el.E().A($.d().A(
						 $.sp('My 1st View').fS(60),
						 $.bt('Go to 2nd View', function (e) {
							 $l('clicked "go to 2nd View" anchor')
							 r.n('sec')
						 }).C('y')))
			 }
		 })
		 SecVw = $$V({
			 i: function () {
				 this.r()
			 },
			 r: function () {
				 this.$el.E().A($.d().A(
						 $.bt('Go to 1st View', function (e) {
							 $l('clicked "go to 1st View" anchor')
							 r.n('first')
						 }).C('o'),
						 $.sp('My 2nd View').fS(50)))
			 }
		 }) 
	 
		 r = $R({
			 r: {
				 '': 'pg1',
				 'first': 'pg1',
				 'sec': 'pg2'
			 },
			 pg1: function () {
				 $l('in pg1')
				 FirstVw({
					 el: $('#ct')
				 })
			 },
			 pg2: function () {
				 $l('in pg2')
				 SecVw({el: $('#ct')})
			 }
		 })
	 })
 
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
 $trg = function () {
	 $ev.trigger.apply($ev, arguments)
 }
 $ev = _.x({}, Bb.E)
 $Rtr = function (ob, home) {
	 return $Trg$(new ( R$R(ob) ), (home || ''))
 }
 $on = function (ev, fn) {
	 $ev.on(ev, fn)
 }
 $TrRtrFn = function (rtr, fn) {
	
	 //rtr =	$Trg$( new( R$R( ob ) ), 'contents')
	 return function (md) {
		 $Trg(rtr, fn(md))
	 }
 }
 Bb.Co = Bb.Controller = function (Vw, md) {
	 return new Vw({model: md})
 }
 Bb.el = function (Vw, md) {
	 return new Vw({model: md}).el
 }
 R$R = function (fn) {
	 return R$({R: fn})
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
 //function rtrTpFnsTpFnsBackDemo() {
 
 BACKDEMO0 = function () {
		 $.x().d('yoo hoo').id('cont')
		 Temp = function (i, h) {
			 var s = ''
			 return _.tp($('#' + i).html(), h || {})
			 if (A(h)) {
				 _.e(h, function (h) {
					 s += h.oh()
				 })
			 }
			 s = "<script type='text/template'>" + s + "</script>"
			 return $(s).id(i).A()
		 }
		 $R({
			 rt: {'': 'f', 'f': 'f', 's': 's'},
			 f: function () {
				 $l('fir')
			 }, s: function () {
				 $l('sec')
			 },
			 task: function () {
				 t = new Task();
				 $l('t = new Task')
			 }
		 }, '+')
		 Temp('task', [
			 $.lb('Task: '),
			 $.ip().id('task_desc'),
			 $.bt('add task').id('btn')])
		 Tsk = $V({
			 el: $('#cont'),
			 i: function () {
				 this.r()
			 },
			 r: function () {
				 this.$el.ht(Temp('task'))
			 },
			 e: {'click button': 'add'},
			 add: function () {
				 alert($('#task_desc').v() + ' task added')
			 }
		 })
	 } 