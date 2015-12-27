ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	$.sp('phone #:').A($.ip().b({v: 'num', en: 'hasPhone'}))
	$.sp([$.cb().ch$('hasPhone'), 'I have phone'])
	ok({hasPhone: $o(0), num: ''})
}
TEXT =   function () {
	t$('textVal').C('p')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(function () {
		vm.textVal('changed the view model!')
	})
}
CPD = COMPUTED = function () {
	$.d().A(
			$.p('F: ', $.b().t$('f')),
			$.p('L: ', $.b().t$('l')),
			$.sp('F: ').A($.ip().v$('f')),
			$.p('L: ', $.ip().v$('l')).id('l'),
			$.p('L: ', $.b().t$('fl')),
			$.bt('caps').cl$('capL')
	)
	vm = {
		f: $o('j'), l: $o('y'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
	 
}
KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A(
			$.pw().tI$('pw')
	)     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}
FOC = PERFECT_FOR_EDITTING_A_PROFILE_IP = KOFC = function () {
//bind cb and bind ip to 'enable'
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
 
}
SPAM = CHECKED = function () {
	$.p(['spam?',
		$.cC('wantSpam', 'wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])]).dB('visible', 'wantSpam')
	vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
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
CLC = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r()).cl$('name')
		}
	}
	ok(vm)
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
ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			$.sp().t$('f'),
			' ',
			$.sp().t$('l')
	)]).e$('peep')
	vm = {
		peep: $oA([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}
		])
	}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD = UAR = ULTIARR = function () {
	$.ip().tI$('name')
	$.h1().t$('name')
	//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
	//ul each 'array'
	$.ul().e$('arr').A($.li().t$())
	$.sm().cl$('A')
	_.in(1, function () {
		vm.name('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)
		})
	})
	ok({
		name: $o('zi'),
		arr: $oa(),
		A: function () {
			this.arr.push(this.name())
		}
	})
}
ADD1 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey').t$('monkey')
	$.ip().v$('monkey')
	$.sm('hello').cl$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	$.ul().e$('list').A(
			$.li([
				'my name is ', $.sp().t$('name'),
				' and i like ', $.sp().t$('color')
			]))
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.push({
				name: 'j', color: $r()
			})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	_.ev(1, function () {
		vm.A()
	})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD2 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A($.cb().ch$('showDT'))
	$.ul.e$('peep').A($.li().A(
			$.d([$.sp().t$('n'), 'has',
				$.sp().t$('ch().length'),
				'children &nbsp;',
				$.a().ch$('New', 'A')]),
			$.ul().e$('ch').A([
				$.li([
					$.sp().t$(),
					$.sp().vs$('$root.showDT').A(
							' (child rendered at ',
							$.sp().t$('new Date().getSeconds()'), ')'
					)])
			])
	))
	ok({
		peep: peep,
		showDT: $o()
	})
	//add, conditional el
	//anonymous vm
}
DELETE = ADD3 = ULP = function () {
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
	REM = ULDEL = ULD = function () {
		$.ul().e$('peep',
				//bind bt 'click' to parent.rem
				$.li([
					$.sp('pos/name: '),
					$.sp().t$('$index'),
					$.sp().t$('n'),
					$.bt('delete').cl$('rm')
				]))
		$.bt('A').cl$('A')
		$.bt('rm').ch$('rm')
		ok({
			peep: $oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + $D()})
			},
			rm: function (a) {
				vm.peep.remove(this)
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
}
 