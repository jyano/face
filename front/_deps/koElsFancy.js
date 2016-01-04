 
ENAB0 = function () {
	$.mar().sp([
		'phone #:', ip$({v: 'num', en: 'hasPhone'}),
		ch$('hasPhone'), 'I have phone'])
	ok({
		hasPhone: $o(0), num: ''
	})
}
TEXT0 = function () {
	t$('textVal').C('p')
	ok$o('textVal', 'startValue')
	_.in(function () {
		vm.textVal('changed the view model!')
	})
}
CPD0 = function () {
	$.A('F: ', t$('f'),
			'L: ', t$('l'), 'F: ',
			v$('f'), 'L: ', v$('l'),
			'L: ', t$('fl'),
			$.bt('caps').cl$('capL')
	)
	vm = {
		f: $o('j'),
		l: $o('y'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KNOCKS = function () {
	$.A(pg('F: ', _B().b('t', 'f')),
			pg('L: ', _B().b('t', 'l')),
			pg('F: ', ip().b('V', 'f')),
			pg('L: ', ip().b('V', 'l')).id('l'),
			pg('L: ', _B().b('t', 'fl')),
			bt('caps').b('$', 'capL'))
	vm = {}
	vm.f = $o('j')
	vm.l = $o('y')
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	vm.capL = function () {
		vm.l(uC(vm.l()))
	}
	ok(vm)
}
KIP0 = function () {
	$.A('Login name:', tI$('un'),
			'Pw:', pw$('pw'),
			'vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	creds = {un: $o(''), pw: $o('abc')}
	ok(creds)
}
FOC0 = function () {
//bind cb and bind ip to 'enable'
	$.A('Name:',
			ip$({vs: 'editing', hasFocus: 'editing', v: 'name'}),
			d$({vs: '!editing()', t: 'name', cl: 'edit'})
	)
	$.p('Click the name to edit it; click elsewhere to apply changes')
	function VM(n) {
		var vm = this
		vm.name = $o(n)
		vm.editing = $o()
		vm.edit = function () {
			vm.editing(1)
		}
	}
	
	ok(new VM("Bert Bertington"))
}
K3 = VALUE = VAL = function () {
	$.A('Name:',
			ip$({v: 'editing', v: 'name', f: 'editing'}),
			d$({v: '!editing()', t: 'name', $: 'edit'}),
			$.p('Click the name to edit it; click elsewhere to apply changes'))
	ok({
		name: $o("Bert Bertington"),
		editing: $o(),
		edit: function () {
			vm.editing(true)
		}
	})//KOFCC
}
K1 = KOO = function () {
	$.A(
			'Hello, ', t$('fullName'), '!',
			'First name: ', v$('firstName'),
			'Last name: ', v$('lastName')
	)
	VM = function (first, last) {
		this.firstName = $o(first)
		this.lastName = $o(last)
		this.fullName = $cO(function () {
			return this.firstName() + " " + this.lastName();
		}, this)
	}
	ok(new VM("rigo", "ochoa"))
}
FOCUS = FCB = function () {//working!!!
	_$({
		C: 'u', t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().fc$("editingName"),
			$.h1('editing..').vs$('editingName'),
			$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
	})
}
SPAM0 = function () {
	$.A('spam?', ch$('want'),
			vs$('want', [
				'flavs:', $.cKO('Cherry', 'flav', 'cherry'),
				$.cKO('Almond', 'flav', 'almond'),
				$.cKO('Glut', 'flav', 'glut')
			])
	)
	ok(vm = {
		want: $o(1),
		flav: $oA(["cherry", "almond"])
	})
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
VIS0 = function () {
	$.h1().A('ALWAYS HERE!', vs$('vs', 'see me if true!'))
	ok(vm = {vs: $o(1)})
	_.in(function () {
		vm.vs(0);
	})
}
CLC0 = SMCL0 = function () {
	cl$('newDiv')
	ok({
		newDiv: function () {
			cl$('name',
					"i'm a freaking div").C($r())
		},
		name: function () {
			alert(this)
		}
	})
}
WITH0 = function () {
	w$('xy', [t$('city'), 'lat:', t$('lat'), 'lon:', t$('lon')])
	ok({city: "London", xy: {lat: 51, lon: -0.1}})
}
ADD00 = EACHDIVADD = EDA = function () {
	$.ip().tI$('name')
	$.h1().t$('name')
	$.ul().e$('arr').A($.li().t$())
	$.sm().cl$('A')
	_.in(1, function () {
		vm.name('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)
		})
	})
	e$('peep', t$('f'), ' ', t$('l'))
	ok(vm = {
		name: $o('zi'), arr: $oa(),
		A: function () {
			this.arr.push(this.name())
		}, peep: $oA()
	})
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD10 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey').t$('monkey')
	$.ip().v$('monkey')
	$.sm('hello').cl$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	e$('list', ['my name is ', t$('name'),
		' and i like ', t$('color')])
	vm = {
		monkey: $o(), list: $oa(),
		A: function () {
			this.list.push({name: 'j', color: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	_.ev(8, function () {
		vm.A()
	})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD20 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A(ch$('showDT'))
	e$('peep', [$.d([t$('n'), 'has',
		t$('ch().length'),
		'children &nbsp;',
		ch$('New', 'A')]),
		e$('ch', [t$(), vs$('$root.showDT').A(
				' (child rendered at ',
				t$('new Date().getSeconds()'), ')')])])
	ok({
		peep: peep,
		showDT: $o()
	})
	//add, conditional el
	//anonymous vm
}
DEL0 = ADD3 = ULP = function () {
	$.ul().e$('people').A(
			$.li().A(
					$.sp('pos/name: '),
					$.sp().t$('$index'),
					$.sp().t$('name'),
					$.a('X').cl$('$parent.rm'))
	)
	$.bt('add').cl$('add')
	vm = function () {
		var o = {}
		o.people = $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.remove = function () {
			o.people.rm(this)
		}
		return o
	}
	ok(vm())
}
REMM = ULDEL = ULD = function () {
	e$('peep', //bind bt 'click' to parent.rem
			['pos/name: ', t$('$index'), t$('n')//, cl$('rm')
			])
	cl$('A')
	ch$('rm')
	ok(vm = {
		peep: $oA({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + new Date()})
		},
		rm: function (a) {
			this.peep.remove(this)
		}
	})
}
ULINDEX = function () {
	format()
	s2(
			h4('People'),
			ul().b('E', 'people')(
					li()(
							sp('pos/name: '),
							sp().b('t', '$index'),
							sp().b('t', 'n'),
							lk(' X').b('$', '$parent.rem')
					)
			),
			bt('add').b('$', 'add')
	)
	vm = function () {
		var o = {}
		o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date()})
		}
		o.rem = function () {
			o.people.remove(this)
		}
		return o
	}
	ko.ab(vm()
	)
}
$.tdT = function (a, b) {
	var td = $.td()
	td.bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
$d.cm$ = function (a) {
//= $.dCm
	return $.d().cm$(a)
}
ko.cb = $.cC = function (a) {
	//$.cb_c =  $.cbC
	return $.cb().ch$(a)
}
ko.sp = function (t) {
	return $.sp().t$(t)
}
$.d_w = function (a, b) {
	var d = $.d().bW(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
	//= $.dW = $.dBw
}
$.aA = function (a, b, c, d) {
	return $.a(b, c, d).bA(a)
}
$.d_h = $.dH = function (a) {
	return $.d().bH(a)
}
$.d_cm = $.dCm = function (a) {
	return $.d().bCm(a)
}
ko.d.if = $.d_if = $.dIf = function (a, b) {
	var d = $.d().bI(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
}
$.sp_t = $.spT = $.spBt = function (a, b) {
	return $.sp(b).bT(a)
}
$.sp_t = $.sT = $.spT = function (a, b) {
	a = a || '$data'
	return $.sp(b).bT(a)
}
$.h1_bt = $.h1T = $.h1Bt = function (a, b) {
	var h1 = $.h1(a)
	h1.bT(b || a)
	return h1
}
$.li_t = $.liT = $.liBt = function (a) {
	return $.li().bT(a)
}
$.td_t = $.tdT = function (a, b) {
	var td = $.td()
	td.bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
$.h1T = $.h1Bt = function (a, b) {
	var h1 = $.h1(a)
	h1.bT(b || a)
	return h1
}
$.p_i = $.pI = function (a, b, c, d) {
	var p = $.p(b, c, d).bI(a)
}
$.p_t = $.pT = function (a) {
	var p = $.p()
	p.bT(a)
	return p
}
$.sT = $.spT = function (a, b) {
	return $.sp(b)
			.bT(a || '$data')
}
$.spVs = function (a) {
	return $.sp().bVs(a)
	return $.sp().b('vs', a)
}
$.dV = $.dVs = function () {
	var g = G(arguments),
			d = $.d().bVs(g.f)
	_.e(g.r, function (q) {
		d.A(q)
	})
	return d
}
$.dCm = function (a) {
	return $.d().bCm(a)
}
$.dIf = function (a, b) {
	var d = $.d().bI(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d//$.dI=
}
$.dW = $.dBw = function (a, b) {
	var d = $.d()
			.bW(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
}
$.dT = function (a) {
	return $.d().bT(a)
}
$.dH = function (a) {
	return $.d().bH(a)
}
$.dCm = function (a) {
	return $.d().bCm(a)
}
$.dT = function (a) {
	return $.d().bT(a)
}
$.dIf = function (a, b) {
	var d = $.d().bI(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
}
$.sT = $.spT = function (a, b) {
	return $.sp(b).bT(a || '$data')
}
$.ST = function (t) {
	return $.S().bT(t)
}
$.pT = function (a) {
	var p = $.p()
	p.bT(a);
	return p
}
$.h1T = function (a, b) {
	var h1 = $.h1(a)
	h1.bT(b || a)
	return h1
}
$.liT = function (a) {
	return $.li().bT(a)
}
$.tdT = function (a, b) {
	var td = $.td().bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
$.pI = function (a, b, c, d) {
	return $.p(b, c, d).if$(a)
}
///
$.ip.v$ = ValueBoundTextInput = function () {
	//= $.iV = $.ipV = $.ipBv = $.ip_v
	var g = G(arguments), ip
	ip = $.ip()
	ip.v$.apply(ip, g)
	return ip
}
TextInputBoundTextInput = $.ipTi = $.ip_tI = $.ip_ti = function (a) {
	return $.ip().tI$(a)
}
TextBoundPasswordInput = $.pwTi = $.pw_tI = $.pw_ti = function (a) {
	return $.pw().tI$(a)
}
EnableBoundSubmitButton = $.smEn = function (a) {
	return $.sm().en$(a)
}
EnableBoundSpan = $.b$ = $.bt$ = $.btB$ = function (a, b, c) {
	var bt = $.bt(a)
	bt.cl$(b || a)
	if (c) {
		bt.en$(c)
	}
	return bt
}
$.bt.cl$ = ClickBoundButton = $.$bt = function (a, b) {
	var g = G(arguments)
	b = b || a
	if (g.n) {
		b = '$parent.' + b
	}
	return $.bt(a).cl$(b)
}
$.cl$ = $.c$cl = $.c$ = function (fn) {
	return $.cb().ch$(fn)
}
ClickBoundSubmitButton = $.s$ = function (a, b, c, d) {
	return $.sm(b, c, d).cl$(a)
}
$.sp.cl$ = ClickBoundSpan = $.b$$ = function () {
	var sp = $.sp()
	_.e(arguments, function (a) {
		sp.A($.cl$(a))
	})
	return sp
}
$.sm.cl$ = ClickBoundSubmitButton = $sb_$ = $.s$ = function (a, b, c, d) {
	return $.sb(b, c, d).cl$(a)
}
$.cb.ch$ = CheckedBoundCheckbox = $.cC = $.cbC = function (a, val) {
	//if (U(a)) {a = '$'}
	var cb = $.cb().ch$(a)
	cb.val(val)
	return cb
}
$.p.ch.ch$ = CheckedBoundCheckboxInParagraph = cbKO = cb2 = function (m, binding, val) {
	var cb = CheckedBoundCheckbox(binding, val)
	var ch = [$.sp().A(m), cb]
	return $.p(ch)
}
$.p.sp.ch$ = CheckBoundSpanInP = $.cKO = function (m, b, v) {
	var cb = $.cb()
	cb.v(v)
	cb.ch$(b)
	return $.p().A(
			$.sp().A(m),
			cb
	)
	//=cbKO=cb2
}
$.a$ = function (t, fn) {
	return $.a(t).b('$', fn)
}
$.aA = function (a, b, c, d) {
	return $.a(b, c, d).at$(a)
}
$.t.vs$ = $.tVs = function (a) {
	return $.t().vs$(a)
}
$.em.t$ = function (t) {
//em_t = em$t = t$Em = $.emT = $.eT
	return $.em().t$(t)
}
$.sl._$ = SelectBound_ = $sl$ = _selectBind = $.slB = function (a) {
	var q = $.sl()
	q.b.apply(q, arguments)
	return q
}
sm$f = $.fSb = $.fBsb = function (a, b) {
	var f = $.f()
	f.b({sb: a})
	//f.bSb(a)
	if (A(b)) {
		_.e(b, function (el) {
			f.A(el)
		})
	}
	return f
}
SubmitBoundForm = $.f_sb = $.fSb = $.fBsb = $.fSm = $.fBSm = function (a, b) {
	var f = $.f()
	f.sm$(a)//f.b({sb: a})
	if (A(b)) {
		_.e(b, function (b) {
			f.A(b)
		})
	}
	return f
	$.fSbold = function (a, b) {
		var f = $.f();
		f.b({sb: a})
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
}
 