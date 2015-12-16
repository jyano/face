TP = function () {
	$.x().A(
			a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
			b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
			c = _.tp(
					'<%_.e(peep,function(name){%>' +
					'<li>' + '<%=name%>' + '</li>' +
					'<%})%>'
					, {peep: ['moe', 'curly', 'larry']})
	)
}
TMP = function () {
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}
TMPWORKS = function () {
	$.x('b')
	data = {n: 'j', a: 20, o: 'p'}
	$V({
		t: 'li', i: function () {
			$l(this.model)
			this.r()
		},
		r: function () {
			this.A().A(
					$.h1(this.tp(this.model.toJSON())))
		},
		tp: tp = _.tp(
				'<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
		),
		x: 'some-per',
		k: 'per'
	})({
		m: Per = $M()(data)//=== M({df:data})()
	})
}
TMP = function () {
	$.x('r');
	data = {n: 'j', a: 20, o: 'p'}
	$V({
		t: 'li',
		i: function () {
			$l(this.model);
			this.r()
		},
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		x: 'some-per',
		k: 'per'
	})({
				m: Per = $M({
					d: data
				})()
			}
	)
}
TMP = function () {
	TMPWORKS = function () {
		$.x('b')
		data = {n: 'j', a: 20, o: 'p'}
		$V({
			t: 'li', i: function () {
				$l(this.model)
				this.r()
			},
			r: function () {
				this.A().A(
						$.h1(this.tp(this.model.toJSON())))
			},
			tp: tp = _.tp(
					'<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
			),
			x: 'some-per',
			k: 'per'
		})({
			m: Per = $M()(data)//=== M({df:data})()
		})
	}
	TMP = function () {
		$.x('r');
		data = {n: 'j', a: 20, o: 'p'}
		$V({
			t: 'li',
			i: function () {
				$l(this.model);
				this.r()
			},
			r: function () {
				this.A().A(this.tp(this.model.toJSON()))
			},
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			x: 'some-per',
			k: 'per'
		})({
					m: Per = $M({
						d: data
					})()
				}
		)
	}
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}
TMP = function () {
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}
TP = function () {
	$.x().A(
			a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
			b = _.tp('<b><%-tag%></b>', {tag: '<script>'}),
			// <%- vs <%= ?
			c = _.tp(
					'<%_.e(peep,function(name){%>' +
					'<li>' + '<%=name%>' + '</li>' +
					'<%})%>'
					, {peep: ['moe', 'curly', 'larry']}
			)
	)
}
TP = function () {
	z()
	c1 = tp("hello: <%= name %>", {name: 'moe'})
	c1b = tp("hello: <%= name %>")({name: 'moe'})
	c2 = tp(
			"<% _e(people, function(name){%>  " +
			"<li>  " +
			"<%= name %>  " +
			"</li>  " +
			"<% }) %>",
			{people: ['moe', 'curly', 'larry']}
	)
	c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
	$b()(c2)
}
TP = function () {
	z()
	c1 = tp("hello: <%= name %>", {name: 'moe'})
	c1b = tp("hello: <%= name %>")({name: 'moe'})
	c2 = tp(
			"<% _e(people, function(name){%>  " +
			"<li>  " +
			"<%= name %>  " +
			"</li>  " +
			"<% }) %>",
			{people: ['moe', 'curly', 'larry']}
	)
	c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
	$b()(c2)
}
TP = function () {
	$.x().A(
			a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
			b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
			c = _.tp(
					'<%_.e(peep,function(name){%>' +
					'<li>' + '<%=name%>' + '</li>' +
					'<%})%>'
					, {peep: ['moe', 'curly', 'larry']})
	)
}
TMP = function () {
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}
function tooMuchTryingToCopyBBWayForThisWhichIsSuckyAndWrong() {
	tempScr = function (i, e) {
		t = qq($(
				'<script type="text/template" id="' + i + '">'
		))
		_e(e,
				function (e) {
					t(e)
				})
		return t
	}
	temp = function (a, b) {
		return _.template(
				$('#' + a).html(),
				ob(b))
	}
	Temp = function (i, h) {
		var s = ''
		if (A(h)) {
			_e(h,
					function (h) {
						s += h.oh()
					})
		}
		s = "<script type='text/template'>" + s + "</script>"
		$l('s: ' + unescape(s))
		return qq(
				$(s)
		).id(i).a()
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
		if (A(h)) {
			_e(h,
					function (h) {
						s += h.oh()
					})
		}
		s = "<script type='text/template'>" + s + "</script>"
		$l('s: ' + unescape(s))
		return qq(
				$(s)
		).id(i).a()
	}
	tempScr = function (i, e) {
		t = qq($(
				'<script type="text/template" id="' + i + '">'
		))
		_e(e,
				function (e) {
					t(e)
				})
		return t
	}
	temp = function (a, b) {
		return _.template(
				$('#' + a).html(),
				ob(b))
	}
	TP = function () {
		$.x().A(
				a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
				b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
				c = _.tp(
						'<%_.e(peep,function(name){%>' +
						'<li>' + '<%=name%>' + '</li>' +
						'<%})%>'
						, {peep: ['moe', 'curly', 'larry']})
		)
	}
	TP = function () {
		TP = function () {
			TP = function () {
				z()
				c1 = tp("hello: <%= name %>", {name: 'moe'})
				c1b = tp("hello: <%= name %>")({name: 'moe'})
				c2 = tp(
						"<% _e(people, function(name){%>  " +
						"<li>  " +
						"<%= name %>  " +
						"</li>  " +
						"<% }) %>",
						{people: ['moe', 'curly', 'larry']}
				)
				c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
				$b()(c2)
			}
			TP = function () {
				z()
				c1 = tp("hello: <%= name %>", {name: 'moe'})
				c1b = tp("hello: <%= name %>")({name: 'moe'})
				c2 = tp(
						"<% _e(people, function(name){%>  " +
						"<li>  " +
						"<%= name %>  " +
						"</li>  " +
						"<% }) %>",
						{people: ['moe', 'curly', 'larry']}
				)
				c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
				$b()(c2)
			}
			$.x().A(
					a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
					b = _.tp('<b><%-tag%></b>', {tag: '<script>'}),
					// <%- vs <%= ?
					c = _.tp(
							'<%_.e(peep,function(name){%>' +
							'<li>' + '<%=name%>' + '</li>' +
							'<%})%>'
							, {peep: ['moe', 'curly', 'larry']}
					)
			)
		}
		TP = function () {
			$.x().A(
					a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
					b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
					c = _.tp(
							'<%_.e(peep,function(name){%>' +
							'<li>' + '<%=name%>' + '</li>' +
							'<%})%>'
							, {peep: ['moe', 'curly', 'larry']})
			)
		}
		$.x().A(
				a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
				b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
				c = _.tp(
						'<%_.e(peep,function(name){%>' +
						'<li>' + '<%=name%>' + '</li>' +
						'<%})%>'
						, {peep: ['moe', 'curly', 'larry']})
		)
	}
	TMP = function () {
		$.x('r');
		$V({
			t: 'li', x: 'some-per', k: 'per',
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			r: function () {
				this.A().A(this.tp(this.model.toJSON()))
			},
			i: function () {
				$l(this.model);
				this.r()
			}
		})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
	}
}
TP = function () {
	z()
	c1 = tp("hello: <%= name %>", {name: 'moe'})
	c1b = tp("hello: <%= name %>")({name: 'moe'})
	c2 = tp(
			"<% _e(people, function(name){%>  " +
			"<li>  " +
			"<%= name %>  " +
			"</li>  " +
			"<% }) %>",
			{people: ['moe', 'curly', 'larry']}
	)
	c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
	$b()(c2)
}
Temp = function (i, h) {
	var s = ''
	if (A(h)) {
		_e(h,
				function (h) {
					s += h.oh()
				})
	}
	s = "<script type='text/template'>" + s + "</script>"
	$l('s: ' + unescape(s))
	return qq(
			$(s)
	).id(i).a()
}
tempScr = function (i, e) {
	t = qq($(
			'<script type="text/template" id="' + i + '">'
	))
	_e(e,
			function (e) {
				t(e)
			})
	return t
}
temp = function (a, b) {
	return _.template(
			$('#' + a).html(),
			ob(b))
}
PLV = function () {
	$.x('o', 'hi');
	$l('PLV')
	Per = $M({//name, age, occ
		d: {n: 'a', a: 20, o: 'p'}
	})
	p0 = Per()
	p1 = Per({n: 'b'})
	p2 = {n: 'c'}
	PerV = $V({
		t: 'li',
		x: 'some-per',  // id
		i: function () {
			this.r()
		}, //??
		r: function () {
			this.q.A('fasdfsfasd')
			this.q.A(
					this.tp(
							this.model
					)
			)
		},
		k: 'per',   // className
		tp: tp = _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
	})
	pV = PerV({m: p0})
	PepC = $Cl({m: Per})
	pC = PepC()
	pC.add([p0, p1, p2])
	PepV = $V({
		cl: PepC,
		el: ul = $.ul(),
		r: function () {
			ul = this.q.E()
			this.J(function (md) {
				PerV({m: md}, ul)
			})
		}
	})
	pCV = PepV({cl: pC})
	$.in(.2, function () {
		pCV.r()
	}, '*')
	$.in(.4, function () {
		pCV.r()
	}, '*')
}
NOWAY = PLV = function () {
	Per = _M({//name, age, occ
		d: {n: 'a', a: 20, o: 'p'}
	})
	p0 = Per()
	p1 = Per({n: 'b'})
	p2 = Per({n: 'c'})
	PerV = $V({
		t: 'li',
		x: 'some-per',  // id
		i: function () {
			this.r()
		}, //??
		r: function () {
			this.$el.A('fasdfsfasd')
			this.$el.A(
					this.tp(
							this.model
					)
			)
		},
		k: 'per',   // className
		tp: tp = _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
	})
	return
	pV = PerV({m: p0})
	PepC = $Cl({m: Per})
	pC = PepC()
	pC.add([p0, p1, p2])
	PepV = $V({
		cl: PepC,
		el: ul = $.ul(),
		r: function () {
			ul = this.$el.E()
			this.J(function (md) {
				PerV({m: md}, ul)
			})
		}
	})
	pCV = PepV({cl: pC})
	$.in(.2, function () {
		pCV.r()
	}, '*')
	$.in(.4, function () {
		pCV.r()
	}, '*')
}