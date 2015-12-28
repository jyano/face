TASKER = function () {
	$.x()
	Ap.M.Task = $$M({})
	t1 = Ap.M.Task({t: 'go  store', pr: 4})
	t2 = Ap.M.Task({t: 'go park', pr: 3})
	Ap.V.Tsk = $$V({
		t: 'li',
		rr: function () {
			this.A(this.g('t'))
			return this
		}
	})
	taskView = Ap.V.Tsk({m: t1})
	Ap.C.Tasks = $$C({m: Ap.M.Tsk})
	tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
	Ap.V.Tasks = $$V({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Task({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tasksV = Ap.V.Tasks({cl: tasks})
}
TASKER00 = function () {
	$.x('g', 'tasker');
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Tsk = $M()
	t1 = Ap.M.Tsk({t: 'store', pr: 4})
	t2 = Ap.M.Tsk({t: 'park', pr: 3})
	Ap.V.Tsk = $V({
		t: 'li',
		r: function () {
			this.A(this.g('tt'));
			return this
		}
	})
	tskV = Ap.V.Tsk({m: t1})
	Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
	tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var v = this
			v.eCl(function (t) {
				v.q.A(Ap.V.Tsk({m: t}).r().q)
			})
			this.q.A()
		}
	})
	tsksV = Ap.V.Tsks({cl: tsks})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	function alt() {
		TASKER0 = function () {
			$.x()
			Ap = {M: {}, C: {}, V: {}}
			Ap.M.Task = Bb.M.e({})
			t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
			t2 = Ap.M.Task.o({t: 'go park', pr: 3})
			Ap.V.Tsk = Bb.V.e({
				t: 'li',
				rr: function () {
					this.A(this.g('t'))
					return this
				}
			})
			taskView = Ap.V.Tsk.o({m: t1})
			Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
			tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
			Ap.V.Tasks = Bb.V.e({
				t: 'li',
				rr: function () {
					var that = this
					this.cl.each(
							function (t) {
								var v = Ap.V.Task.o({m: t})
								that.$el.A(v.rr().el)
							}, this)
					this.el.A()
				}
			})
			tasksV = Ap.V.Tasks.o({cl: tasks})
		}
		function oldSchol() {
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
		}
	}
}
AP = TASK = function () {
	$.x('g', 'tasker');
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
	Ap.M.Tsk = $$M({})
	tsk1 = Ap.M.Tsk({
		title: 'go to the store',
		priority: 4
	})
	tsk2 = Ap.M.Tsk({
		title: 'go to the park',
		priority: 3
	})
	TskV = Ap.V.Tsk = $$V({
		t: 'li',
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(this.g('t'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	tskVw = Ap.V.Tsk({m: task1})
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
	r = $R({
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
	Bb.h.start({pushState: true})
}
TASKS = function () {
	z()
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Task = bbM({})
	task1 = Ap.M.Task({
		title: 'go to the store',
		priority: 4
	})
	task2 = Ap.M.Task({
		title: 'go to the park',
		priority: 3
	})
	Ap.V.Task = bbV({
		t: 'li',
		R: function () {
			return this.H(
					this.g('title'))
		}
	})
	taskView = Ap.V.Task({m: task})
	Ap.C.Tasks = bbC({m: Ap.M.Task})
	tasks = Ap.C.Tasks([
		{title: 'hi'},
		{title: 'bye'}])
	Ap.V.Tasks = bbV({
		t: 'li',
		R: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Task({m: t})
						this.$el.append(v.el)
					},
					this)
			$b()(this.el)
		}
	})
	tasksV = Ap.V.Tasks({cl: tasks})
}
ITEMS = function () {
	z()
	Router = bbR({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	router = Router()
	Ap = {
		M: {}, V: {}, C: {}
	}
	Ap.M.item = bbM({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	bbH()
}
 