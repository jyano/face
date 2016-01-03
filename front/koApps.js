KO1 = KODEL = DELETEWORKS = ADD3 = ULP = function () {
	ok(function () {
		$s({
			bd: {C: 'x', c: 'y'}, $: {
				C: 'n', c: 'z',
				M: 5, fS: 42
			}, sp: {C: 'o', c: 'z'}
		})
		cl$('add', 'ADD')
		e$('people', $.d([
			'name: ',
			t$('$index'), t$('name'),
			cl$('$root.rm', 'DELETE')
		]))
		cl$('add', 'ADD')
		var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.rm = function () {
			o.people.remove(this)
		}
		return o
	}())
}
KO2 = ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			t$('f'),
			' ',
			t$('l')
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
KO3 = LST = function (n, ch) {
	LST1 = function (n, ch) {
		$s({
			_sl: {
				fS: 16,
				C: 'i', c: 'j',
				position: 'relative',
				display: 'inline-block',
				P: 66,
				h: '60%'
			}
		})
		$.f().A('Add item:',
				$.ip().tI$('itemToAdd'),
				$.sm('Add').en$('itemToAdd().length > 0')
		).sm$('addItem')
		$.p('Your values: ')
		$.sl().at({multiple: "multiple", height: 5})
				.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
		$.d([
			$.bt('Remove').b({cl: 'removeSelected', en: 'selectedItems().length > 0'}),
			$.bt('Sort').b({cl: 'sortItems', en: 'allItems().length > 1'})
		])
		var BetterListModel = function () {
			this.itemToAdd = ko.observable("");
			this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
			this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
			this.addItem = function () {
				$l('add')
				if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
				// Prevent blanks and duplicates
					this.allItems.push(this.itemToAdd());
				this.itemToAdd(""); // Clear the text box
			};
			this.removeSelected = function () {
				this.allItems.removeAll(this.selectedItems());
				this.selectedItems([]); // Clear selection
			};
			this.sortItems = function () {
				this.allItems.sort();
			};
		}
		ok(vm = new BetterListModel());
	}
	$s({
		_sl: {
			fS: 16,
			C: 'i', c: 'j',
			position: 'relative',
			display: 'inline-block',
			P: 66,
			h: '60%'
		}
	})
	$.f().A('Add item:',
			$.ip().tI$('itemToAdd'),
			$.sm('Add').en$('itemToAdd().length > 0')
	).sm$('addItem')
	$.p('Your values: ')
	$.sl().at({multiple: "multiple", height: 5})
			.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
	$.d([
		cl$('removeSelected', 'Remove')
				.en$('selectedItems().length > 0'),
		cl$('sortItems', 'Sort').en$('allItems().length > 1')
	])
	var BetterListModel = function () {
		this.itemToAdd = ko.observable("");
		this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
		this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
		this.addItem = function () {
			$l('add')
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
			// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		}
		this.removeSelected = function () {
			$l('rm')
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		}
		this.sortItems = function () {
			$l('sort')
			this.allItems.sort();
		}
	}
	ok(vm = new BetterListModel());
}
KO4 = TBE = function () {
	$.t([$.tH().A($.tr().A(
			$.th().A('First name'),
			$.th().A('Last name')
	)),
		$.tB().e$('people').A(
				$.tr().A($.td().t$('fn'),
						$.td().t$('ln')))])
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KO5 = TBTR = function () {
	$.bd().fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.td().t$('l')]))
	$.t().e$('peep').A(
			$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tr() [
					$.tr([$.td().t$('f'),
						', ', $.td().t$('l')])])
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
KO6 = CSSDATACLICK = KNOCKS = function () {
	$.ul().K('fs').e$("fs").A($.li().b(
			"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
	))
	MVM = function () {
		var o = {}
		o.fs = ['I', 'A', 'Se', 'Sp']
		o.chFI = ko.o()
		o.gtf = function (f) {
			o.chFI(f)
		}
		return o
	}
	ok(MVM())
}
KO7 = BHTML = HTM = function () {
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
KO8 = ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
KO9 = IIFI = function () {
	$.cb().b('checked', 'dispMs')
	$.sp('Disp ms')
	$.d().if$('dispMs').A(
			$.p('Here is a message. Astonishing'))
	ok(vm = {dispMs: $o(0)})
}
KO10 = ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	$.sp(['phone #:', v$('num').en$('hasPhone')])
	$.sp([ch$('hasPhone'), 'I have phone'])
	ok({
		num: '',
		hasPhone: $o(0)
	})
}
KO11 = TEXT = function () {
	t$('textVal')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(4, function () {
		vm.textVal('changed the view model!')
	})
}
KO12 = WITH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', t$('lat'),
			'lon:', t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
KO13 = VIS = VISABLE = function () {
	$.d().A('ALWAYS HERE!')
	$.d().A('see me if true!').vs$('shouldIBeVisible')
	ok(vm = {shouldIBeVisible: $o(1)})
	_.in(4, function () {
		vm.shouldIBeVisible(0)
		_.in(2, function () {
			vm.shouldIBeVisible(1)
		})
	})
}
KO14 = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r())//.cl$('name')
		}
	}
	ok(vm)
}
KO15 = FIF = function () {
	$.A(
			$('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>').C('r'),
			$(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>').C('b')
	)
	_.in(function () {
		ok({
			displayMessage: $o(false)
		});
	})
}
KO16 = CPD = COMPUTED = function () {
	$s({$: {P: 5, c: 'o', fS: 50}})
	$.d().A(
			$.d().A('F: ', $.sp().t$('f')),
			$.d().A('L: ', $.sp().t$('l')),
			$.d().A('FL: ', $.sp().t$('fl')),
			$.sp().A('F: ', $.ip().v$('f')),
			$.d().A('L: ', $.ip().v$('l')), //.id('l'), 
			$.bt('click me').cl$('capL')
	).C('b').pad(20)
	vm = {
		f: $o('jason'),
		l: $o('yanofski'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KO17 = KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}
 