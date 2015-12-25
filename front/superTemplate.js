function qT_superTemplate(){
	qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
		return fn(ob, $el || $._d())
	}
	function QTexample() {
		function sampleTemplates() {
			$tp.thed = function (ob, $el) {
				return $el.A($.thead().A(
						$.tr().k('header').A(
								$.th().A('Name'),
								$.th().A('Age'))
				))
				// $tp.thed :  use like this:  t=qT(thed).a()
			}
			$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
				//two ways ok!!!!
//can pass:
//1) jq/el
				return $el(
						$.li(ob.me),
						$.li(ob.me)
				)
				//2)
				// or .... array
				return [$.li().A(ob.me), $.li().A(ob.me)]
			}
		}
		
		e = qT($tp.lii, {me: 'jason'}).a()
	}

//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	qT = function (f, o, e) {
		return f(ob(o), e || _d())
	}
//a sample template
	lii = function (o, e) {
		return e(li(o.me), li(o.me))
	}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
	thed = function (o, e) {
		return e(
				thead()(
						tr().k('header')(
								th()('Name'), th()('Age')
						)
				)
		)
	}
// t=qT(thed).a()
	listTp = function () {
		$.dI('list-tp', [$.la()]).C('o')
		//$.d('o').id('list-tp').A($.la())
	}
	rFn = function () {
		var da, tp, ul
		$l('r: ' + this.model.g('d')[0].h)
		//$.c('b').ab(300,300)
		da = this.model.g('d')
		tp = this.tp
		ul = this.$el.find('ul')
		_.e(da, function (da) {
			ul.A(tp.clone().find('a')
					.hr('href', da.h).T(da.t).end())
		})
	}
	rFn2 = function () {
		$l('rr: ' + this.model.g('d')[0].h)  //$.c('b').ab(300,300)
		da = this.model.g('d');
		tp = this.tp
		ul = this.$el.find('ul')
		_.e(da, function (da) {
			clo = tp.clone()
			ul.A(clo.find('a').hr('href', da.h).T(da.t).end())
		})
	}
	GOODGIRL = function () {
		saveFromLocStor = function () {
			$ta = ta().id('input')
			$ta.q.value = $g('myText') || ''
			$ta.o('u', function () {
				$s('mytext', $ta.value)
			}, false)
		}
		readDatFromOtherPageLoc = function () {
			//put windows side by side and watch one update the other
			_.ev(.1, function () {
				$('#input').val(
						$g('myText') || '')
			})
		}
	}
	LOCALSTORAGEYANOMODALPHA = function () {
		$ls = L = function (k, v0) {
			if (D(v0)) {
				L.s(k, v0)
			}
			var fn = function (v) {
				if (U(v)) {
					return L.g(k)
				}
				L.s(k, v)
				return fn
			}
			return fn
		}
		L.g = function (k) {
			return _lS.getItem(k)
		}
		L.s = function (k, v) {
			_lS.setItem(k, v)
			return L
		}
		L.r = L.rm = function (k) {
			var vOld = _lS.getItem(k)
			_lS.removeItem(k)
			return vOld
		}
		L.l = L.L = function () {
			return _lS.length
		}
		L.clr = L.x = function () {
			_lS.clear()
			return L
		}
		$.x('r', 'localStorage')
		$ls.s('food', 'zebra')
		//  j = $ls('jason'); j('eats')
		// j = $ls('jason')('eats')
		j = $ls('jason', 'eats')
		$.h1('i didnt know that jason ' +
		j() + ' ' + $ls.g('food') + '!')
	}
	function sessionStorageUseless() {
		ssS = sessionStorage
		sR = function (a) {
			var i = ssS.getItem(a)
			ssS.removeItem(a)
			return i
		}
		sS = function (a, b) {
			ssS.setItem(a, b);
			return ssS
		}
		sG = function (a) {
			return ssS.getItem(a)
		}
		sL = function () {
			return ssS.length
		}
		sX = function () {
			ssS.clear();
			return ssS
		}
		saveFromSesStor = function () {
			i = ta().id('input')
			i.q.value = sessionStorage.getItem('myText') || ''
			i.o('u', function () {
				sessionStorage
						.setItem('mytext', i.value)
			}, false)
		}
	}

// http://www.sitepoint.com/building-list-jquery-local-storage/
	STORAGE = function () {
		z()
		saveFromLocStor = function () {
			i = ta().id('input')
			i.q.value = localStorage.getItem('myText') || ''
			i.o('u', function () {
				localStorage.setItem('mytext', i.value)
			}, false)
		}
		readDatFromOtherPageLoc = function () {
			//put windows side by side and watch one update the other
			i = qi('input')
			I(function () {
				i.q.value = localStorage.getItem('myText') || ''
			}, 50)
		}
		saveFromSesStor = function () {
			i = ta().id('input')
			i.q.value = sessionStorage.getItem('myText') || ''
			i.o('u', function () {
				sessionStorage.setItem('mytext', i.value)
			}, false)
		}
	}
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
function rtrTpFnsTpFnsBackDemo() {
	BACKDEMO = function () {
		Temp('task', [
			lb('Task: '),
			tx().id('task_desc'),
			bt('add task').id('btn')])
		di('container').a()
		bbR({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})()
		bbH()
		Task = bbV({
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert(qiv('task_desc') + ' task added')
			}
		})
	}
	function rtrTp() {
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
		BACKDEMO1 = function () {
			$.x().d('yoo hoo').id('cont')
			$R({
				rt: {
					'': 'f', 'f': 'f', 's': 's',
					'/wap/items/q': q
				},
				q: function () {
					alert('q')
				},
				f: function () {
					$l('fir')
				},
				s: function () {
					$l('sec')
				},
				task: function () {
					t = new Task();
					$l('t = new Task')
				}
			})
			Temp = function (i, h) {
				var s = ''
				return _.tp(
						$('#' + i).html(), h || {}
				)
				if (A(h)) {
					_.e(h, function (h) {
						s += h.oh()
					})
				}
				_str = "<script type='text/template'>" + _str + "</script>"
				str = $(s)
				return $(s).id(i).A()
			}
			/*
			
			
			 Temp('task', [
			
			 $.lb('Task: '),
			 $.ip().id('task_desc'),
			 $.bt('add task').id('btn')
			 ])
			
			
			 Tsk=$V({el: $('#cont'),
			
			 i: function(){this.r()},
			 r: function(){this.$el.ht( Temp('task') )},
			 e: {'click button': 'add'},
			 add: function(){alert( $('#task_desc').v() + ' task added')}
			
			 })
			 */
			$.bt('sfad', function () {
				r.n('/wap/items/q')
			})
		}
		BACKDEMO = function () {
			$.x()
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
			Temp('task', [
				$.lb('Task: '),
				$.ip().id('task_desc'),
				$.bt('add task').id('btn')])
			$.dI('cont')
			$$R({
				rt: {
					'': 'f',
					'f': 'f',
					's': 's'
				},
				f: function () {
					$l('fir')
				},
				s: function () {
					new Task()
					$l('sec')
				}
			})
			Tsk = Bb.V.e({
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
	}

//router:
	BACKDEMO0 = function () {
		$.x().d('yoo hoo').id('cont')
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
	Temp = function (i, h) {
		var s = ''
		return _.tp(
				$('#' + i).html(), h || {}
		)
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		_str = "<script type='text/template'>" + _str + "</script>"
		str = $(s)
		return $(s).id(i).A()
	}
	BACKDEMO1 = function () {
		$R({
			rt: {
				'': 'f', 'f': 'f', 's': 's',
				'/wap/items/q': q
			},
			q: function () {
				alert('q')
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		})
		/*
		
		
		 Temp('task', [
		
		 $.lb('Task: '),
		 $.ip().id('task_desc'),
		 $.bt('add task').id('btn')
		 ])
		
		
		 Tsk=$V({el: $('#cont'),
		
		 i: function(){this.r()},
		 r: function(){this.$el.ht( Temp('task') )},
		 e: {'click button': 'add'},
		 add: function(){alert( $('#task_desc').v() + ' task added')}
		
		 })
		 */
		$.bt('sfad', function () {
			r.n('/wap/items/q')
		})
	}
	BACKDEMO = function () {
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		$.dI('cont')
		$$R({
			rt: {
				'': 'f',
				'f': 'f',
				's': 's'
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				new Task()
				$l('sec')
			}
		})
		Tsk = Bb.V.e({
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
	BACKDEMO = function () {


//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
		BACKDEMO = function () {
			BACKDEMO = function () {
				z()
				Temp('task', [
					lb('Task: '),
					tx().id('task_desc'),
					bt('add task').id('btn')])
				di('container').a()
				bbR({
					R: {
						'': 'first',
						'first': 'first',
						'second': 'second'
					},
					first: function () {
						$l('first')
					},
					second: function () {
						new Task()
						$l('second')
					}
				})()
				bbH()
				Task = bbV({
					el: $('#container'),
					i: function () {
						this.r()
					},
					r: function () {
						this.$el.html(temp('task'))
					},
					e: {'click button': 'add'},
					add: function () {
						alert(qiv('task_desc') + ' task added')
					}
				})
			}
			Temp('task', [
				lb('Task: '),
				tx().id('task_desc'),
				bt('add task').id('btn')])
			di('container').a()
			bbR({
				R: {
					'': 'first',
					'first': 'first',
					'second': 'second'
				},
				first: function () {
					$l('first')
				},
				second: function () {
					new Task()
					$l('second')
				}
			})()
			bbH()
			Task = bbV({
				el: $('#container'),
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.html(temp('task'))
				},
				e: {'click button': 'add'},
				add: function () {
					alert(qiv('task_desc') + ' task added')
				}
			})
		}
		//$.x().d('yoo hoo').id('cont')
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
		BACKDEMOoldSchol = function () {
			z()
			Temp('task', [
				lb('Task: '),
				tx().id('task_desc'),
				bt('add task').id('btn')])
			di('container').a()
			bbR({
				R: {
					'': 'first',
					'first': 'first',
					'second': 'second'
				},
				first: function () {
					$l('first')
				},
				second: function () {
					new Task()
					$l('second')
				}
			})()
			bbH()
			Task = bbV({
				el: $('#container'),
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.html(temp('task'))
				},
				e: {'click button': 'add'},
				add: function () {
					alert(qiv('task_desc') + ' task added')
				}
			})
		}
	}
	TASKER = AP = TASK = function () {
		t1 = Ap.M.Tsk({tskN: 'go  store', pr: 4})
		t2 = Ap.M.Tsk({tskN: 'go park', pr: 3})
		TskV = Ap.V.Tsk = $$V({
			tag: 'li',
			// el: $('#container'),
			ren: function () {
				this.A(this.get('tskN'))
				return this
			},
			i: function () {
				this.ren()
			},
			r: function () {
				this.$el.html(this.get('tskN'));
				this.$el.html(temp('task'))
			},
			events: {'click button': 'add'},
			add: function () {
				alert($('#task_desc') + ' task added')
			}
		})
		Ap.V.Task = bbV({
			t: 'li',
			ren: function () {
				return this.H(
						this.g('title'))
			}
		})
		tskV = Ap.V.Tsk({m: task})
		tskVw = Ap.V.Tsk({m: task1})
		tskV = Ap.V.Tsk({m: t1})
		Ap.C.Tasks = _C({m: Ap.M.Tsk})
		tasks = Ap.C.Tsks([{tskN: 'hi'}, {tskN: 'bye'}])
		Ap.V.Tsks = _V({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Tsk({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tsksV = Ap.V.Tsks({cl: tsks})
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')
		])
		Ap.C.Tsks = $$C({m: Ap.M.Tsk})
		tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
		Ap.V.Tsks = $V({
			t: 'li',
			r: function () {
				var that = this
				//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.$el.A()
			}
		})
		tsksVw = Ap.V.Tsks({cl: tsks})
		$.bt('r Ap.V.Tsks tsksV', function () {
			tsksV.r()
		})
		$.d().id('container')
		rtr = $R({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})
		Ap.C.Tasks = bbC({m: Ap.M.Task})
		tsks = Ap.C.Tsks([
			{title: 'hi'},
			{title: 'bye'}])
		_V({
			tag: 'li',
			ren: function () {
				this.cl.each(
						function (t) {
							var v = Ap.V.Tsk({m: t})
							this.$el.A(v.el)
						},
						this)
				$bd()(this.el)
			}
		})({cl: tasks})
		Bb.h.start({pushState: true})
	}
}
