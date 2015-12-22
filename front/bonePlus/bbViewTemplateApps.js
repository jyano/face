BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
BBVT = function () {
	$.x('x', 'bb view and template');
	listTp();
	m = $M()({d: BBVTdArr})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		r: rFn,
		ev: {'click button': 'r'}
	})
	v = Vw({m: m, blOp: 'emp!'})
}
BBVT = function () {
	$.x('x', 'bb view and template');
	listTp();
	m = $M()({d: BBVTdArr})
	$.d('y').id('ct').A(
			$.bt('Load', function () {
				v.r()
			}),
			$.ul().id('list'))
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp')
					.children()
		},
		r: rFn2,
		events: {'click button': 'r'}
	})
	v = Vw({zm: m, blOp: 'emp!'})
}
BBVT = function () {
	$.x('x', 'bb view and template');
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT = function () {
	$.x('x', 'bb view and template');
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBVT = function () {
	BBVT = function () {
		$.x('x', 'bb view and template');
		md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		Vw = Bb.V.e({
			el: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp').children()
			},
			rr: function () {
				var da, tp;
				$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
				da = this.model.get('d')
				tp = this.tp, ul = this.$el.find('ul')
				_.e(da, function (da) {
					ul.A(tp.clone()
							.find('a').hr('href', da.h).T(da.t).end())
				})
			},
			ev: {'click button': 'rr'}
		})
		vw = new Vw({blOp: 'empty!', model: md})
		return vw
	}
	BBVT = function () {
		$.x('x', 'bb view and template');
		$.dI('ct', [
					$.bt('Load'),
					$.ul().id('list')
				]
		).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		v = $V({
			q: '#ct',
			events: {'click button': 'r'},
			r: function () {
				var da, tp, ul
				$l('RENDER')
				/*
				 $l('rr: '+ this.model.get('d')[0].h )
				 //$.c('b').ab(300,300)
				 da=this.model.get('d')
				 tp=this.tp
				 ul= this.$el.find('ul')
				 _.e(da, function(da){ul.A(tp.clone()
				 .find('a').hr('href', da.h)
				 .T(da.t).end())})
				 */
			},
			i: function (op) {
				$l(op.blOp)
				this.tp = $('#list-tp').children()
			}
		})({
			blOp: 'empty!',
			m: m = $M()({
				d: [
					{t: 'a.com', h: 'a.com'},
					{t: 'b.com', h: 'b.com'},
					{t: 'c.com', h: 'c.com'}
				]
			})
		})
	}
	$.x('x', 'bb view and template');
	listTp();
	m = $M()({d: BBVTdArr})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		r: rFn,
		ev: {'click button': 'r'}
	})
	v = Vw({m: m, blOp: 'emp!'})
}
BBVT1 = function () {
	$.x('x', 'bb view and template');
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT = function () {
	$.x('x', 'bb view and template');
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}
BBVT = function () {
	$.x('x', 'bb view and template');
	listTp();
	m = $M()({d: BBVTdArr})
	$.d('y').id('ct').A(
			$.bt('Load', function () {
				v.r()
			}),
			$.ul().id('list'))
	Vw = $V({
		q: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp')
					.children()
		},
		r: rFn2,
		events: {'click button': 'r'}
	})
	v = Vw({zm: m, blOp: 'emp!'})
}
BBVT1 = function () {
	$.x('x', 'bb view and template');
	md = new Bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = Bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
BBVT = function () {
	$.x('x', 'bb view and template');
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
}