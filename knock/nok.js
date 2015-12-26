$L('sty', 'html', 'attr', 'text', 'value', 'focus', 'iff',
		'able', 'visib', 'textIp', 'click', 'checked',
		'select', 'checkedApps', 'selApps')
$.fn.h$ = function (s) {
	//= $.fn.bH 
	return this.b('html', s)
	// = $.fn.bH
}
$.fn.t$ = function (bnd) {
	return this.b('text', bnd || '$data')
}
$.fn.at$ = $.fn.a$ = function (s) {
	return this.b('attr', s)
}
$.fn.v$ = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.fc$ = $.fn.f$ = function (s) {
	return this.b('hasFocus', s)
}
$.fn.if$ = function (s) {
	return this.b('if', s)
	// = $.fn.bI = $.fn.bIf
}
$.fn.n$ = $.fn.not$ = function (s) {
	return this.b('ifnot', s)
}
$.fn.en$ = function (s) {
	return this.b('enable', s)
}
$.fn.d$ = function (s) {
	return this.b('disable', s)
}
$.fn.vs$ = function (bnd) {
	return this.b('visible', bnd)
}
$.fn.w$ = function (s) {
	return this.b('with', s)
}
$.fn.cl$ = $.fn.b$ = function (s) {
	return this.b('click', s)
}
$.fn.ev$ = function (s) {
	return this.b('event', s)
}
$.fn.ch$ = function (bnd) {
	return this.b('checked', bnd)
}
$.fn.tI$ = function (s) {
	return this.b('textInput', s)
}
$.fn.st$ = function (s) {
	return this.b('style', s)
}
$.fn.css$ = function (s) {
	//= $.fn.bS
	return this.b('css', s)
}
 
function works() {
	BHTML = HTM = function () {
		init()
		$.d().fS(100).h$('htmlContent')
		ok(vm = {htmlContent: $o('wait..')})
		_.in(2, function () {
			vm.htmlContent(
					"<em>report: <a href=playboyUrl>here</a>.</em>"
			)
		})
		function init() {
			playboyUrl = 'http://www.playboy.com'
		}
	}
	TEXT = NOK = function () {
		$.d('r').t$('textVal')
		ok(vm = {textVal: $o('afsdafsfsdafsdfds')})
		_.in(function () {
			vm.textVal('changed the view model!')
		})
	}
	ATTR = function () {
		$.a('report').fS(100).at$('{href: urlName, title:titleName}')
		ok({
			urlName: $o("http://www.hustler.com"),
			titleName: $o("statistics")
		})
	}
	VISABLE = VIS = function () {
		$.h1('ALWAYS HERE!')
		$.h1('see me if true!').vs$('vs')
		ok(vm = {vs: $o(1)})
		_.in(function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		})
	}
	PERFECT_FOR_EDITTING_A_PROFILE_IP = KOFC = function () {
		$.p('Name:').A(
				$.ip().b({
					visible: 'editing',
					hasFocus: 'editing',
					value: 'name'
				}),
				$.d('r').b({
					//visible: '!editing()',
					text: 'name',
					click: 'edit'
				})
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
		function altWorksToo() {
			K3 = VALUE = VAL = function () {
				$.p('Name:').A($.ip().b({
							v: 'editing',
							v: 'name',
							f: 'editing'
						}),
						$.d('r').b({v: '!editing()', t: 'name', $: 'edit'}))
				$.p('Click the name to edit it; click elsewhere to apply changes')
				ok({
					name: $o("Bert Bertington"),
					editing: $o(),
					edit: function () {
						vm.editing(true)
					}
				})//KOFCC
			}
		}
	}
	K1 = KOO = function () {
		sp = $.sp().t$('fullName')
		$.h2().A('Hello, ', sp, '!')
		$.p().A('First name: ', $.ip().v$('firstName'))
		$.p().A('Last name: ', $.ip().v$('lastName'))
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
	IF = function () {
		$.cb().ch$('dispMs')
		$.sp('Disp ms')
		$.p('Here is a message. Astonishing').if$('dispMs')
		ok({dispMs: $o(1)})
	}
	ENABLE = EN = function () {
		$.p().A($.cbC('hasPhone'), 'I have phone')
		$.p('Your cellphone number').A(
				$.ip().vs$('num').en$('hasPhone')
		)
		ok({hasPhone: $o(0), num: ''})
	}
	WITH = function () {
		$.d([
			$.h1().t$('city'),
			$.p([
				'lat:', $.sp().t$('lat'),
				'lon:', $.sp().t$('lon')
			]).b('w', 'xy')
		])
		ok({
			city: "London",
			xy: {lat: 51, lon: -0.1}
		})
	}
	KOIP = function () {
		$.p('Login name:').A(
				$.ip().tI$('un'))
		$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
		$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
		ok({un: $o(''), pw: $o('abc')})
	}
	CLICK = SMCL = function () {
		$$s({M: 10, C: 'r', c: 'w'})
		_.ev(function () {
			$.C($r())
		})
		vm = {
			name: function () {
				alert('so smart')
			}
		}
		$.sp.cl$('name', 'button text')
		$.sm.cl$('name', 'button text')
		$.bt('afsfasd').cl$('name')
		ok(vm)
	}
}
function koSty() {
	KOS1 = function () {
		$.d('Profit Information').css$("{color:curProf()<0?'red':'black'}")
		ko.b({curProf: ko.o(50)})
		_.in(function () {
			vm.curProf(-50)
		}, '*')
	}
	KOS = function () {
		_$({
			c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
			A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
			_: function () {
				vm.n(-5)
			}
		})
	}
	KOSS = function () {
		d = $.d().A('Profit Information')
		d.dB('css', "{color:curProf()<0?'red':'black'}")
		vm = {curProf: $o(50)}
		ok(vm)
		_.in(function () {
			vm.curProf(-50)
		})
	}
	K5 = BSTY = function () {
		$s({
			bd: {fS: 100, C: 'p'},
			_profWarn: {C: 'r', c: 'b'},
			_profPos: {C: 'b', c: 'r'}
		})
		d = $.d(['Prof Info'])
		str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
		d.b({y: str})
		vm = {curProf: $o(150000)}
		ok(vm)
		_.in(2, function () {
			// Causes the "profitPositive" class to be removed
			// and "profitWarning" class to be added
			vm.curProf(-50)
		})
	}
	K6 = BCSS = function () {
		$s({
			_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
		})
		$.d(['Prof Info']).fS(40).b({s: 'profSts'})
		vm = {
			curProf: $o(150000)
		}
		vm.profSts = ko.pureComputed(function () {
			var res = this.curProf() < 0 ? "profWarn" : "profPos"
			return res
		}, vm)
		ok(vm)
		_.in(2, function () {
			// Causes the "profitPositive" class to be removed
			// and "profitWarning" class to be added
			vm.curProf(-50)
		})
	}
	CSSDATACLICK = KNOCKS = function () {
		$.format()
		s2($.ul().k('fs').b('E', "fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		)))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = ko.o()
			o.gtf = function (f) {
				o.chFI(f)
			}
			return o
		}
		ko.ab(MVM())
	}
	KOFLM = function () {
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todoo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul()
				.e$('$root.matter.index.type()[$data]').A(
				$.li().A(d, $.dI('box').css('display', 'none').A(
						$.a().A('Edit'), $.a().A('Copy'),
						$.a().A('Delete'))),
				$.li().t$('matterTitle'),
				$.li().t$('matterComment'))))
	}
}
function Vm(p) {
	var vm = {vt: p.vt || ''}
	vm.like = function () {
		this.vt('like')
	}
	vm.hate = function () {
		this.vt('hate')
	}
	return vm
}

 
COMPUTEDOBSERVABLE = function () {
	$.d([
		$.p('F: ', $.b().t$('f')),
		$.p('L: ', $.b().t$('l')),
		$.p('F: ', $.ip().v$('f')),
		$.p('L: ', $.ip().v$('l')).id('l'),
		$.p('L: ', $.b().t$('fL')),
		$.bt('caps').ch$('capL')
	])
	ok({
		f: $o('j'),
		l: $o('y'),
		fL: $cO(function () {
			return this.f() + ' ' + this.l()
		}),
		capL: function () {
			this.l(
					S.tU(this.l()))
		}
	})
}
function click() {
	VWW = function () {
		d = $.d('r', 200).A(
				$.h1('hello'),
				$.bt(__)
		)
		//d.$(function(){v.r()})
		mOv = function () {
			$l('mouse over !')
		}
		v = $V({
			e: {
				'click button': function () {
					$l('$')
				},
				$$: 'r',
				v: mOv
			},
			q: d,
			r: function () {
				alert('double click')
				$.bd().C($r())
			}
		})()
	}
}