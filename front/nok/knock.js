$L('nok','baseApps','listApps')
$.okPD = function (fn) {
	return $.ok(function (ev) {
		_.pD(ev)
		return fn(ev)
	})
}
$.lIp = function (lbTx, id) {
	var ip = $.ip()
	ip.id(id || lbTx)
	var p = $.p()
	p.A($.lb(lbTx + ': '), ip)
	p._ip = ip
	return p
}
$.fo = function (title, chArr, fn) {
	var f = $.f()
	f.A($.h1(title))
	if (A(chArr)) {
		_.e(chArr, function (ch) {
			f.A(ch)
		})
	}
	if (F(fn)) {
		f.A($.okPD(fn))
	}
}
$.fAc = function (ac) {
	return $.f().ac(ac)
}
$.ipStPr = function (id) {
	var ip = $.ip().stPr()
	if (S(id)) {
		ip.id(id)
	}
	return ip
}
$.spC = $.spCA = function (C, CH) {
	var g = G(arguments)
	var $el = $.sp()
	$el.C(C)
	A(CH) ? _.e(CH, add) : _.e(g.r, add)
	return $el
	function add(ch) {
		$el.A(ch)
	}
}
$.btC = $.btCA = function (C, chArr, fn) {
	var bt = $.bt(' ', fn).C(C)
	_.e(chArr, function (ch) {
		bt.A(ch)
	})
	return bt
}
$.okP = $.okPo = function (url, da, fn) {
	$.okPD(function () {
		$.P(url, da, fn)
	})
}
$.iV = function (id) {
	return $(S.eL(id, '#')).v()
}
$.IV = function (id) {
	return $(S.eL(id, '#')).V()
}
$.IVOb = function () {
	var g = G(arguments)
	var ob = {}
	_.e(g, function (arg) {
		ob[arg] = $.IV(arg)
	})
	return ob
}
$.fn.su = function (fn) {
	var $el = this
	$el.submit(fn)
	return $el
}
$.fn.suPD = $.fn.suPrDf = function (fn) {
	var $el = this
	$el.su(function (ev) {
		$.pD(ev)
		fn(ev)
	})
	return $el
}
$.P$d = function (url, ipId, title) {
	$.P(url, $.IV(ipId), $cDFn(title))
}
$.cDFn = function (title) {
	return function (da) {
		$cD(title, da)
	}
}
$.cD = function () {
	var g = G(arguments), o
	o = (g.S_ && g.s) ?
	{title: g.f, da: g.s} :
			g.S_ ? {title: g.f, da: window[g.f]} :
			{da: g.f}
	$l(o.title + ' ->')
	console.dir(o.da)
	return o.da
}
$.dHr = function () {
	var d = $.d.apply($, arguments)
	return $.d().A(d, $.hr())
}
$.pD = _.pD = function (ev) {
	ev.preventDefault()
	return ev
}
$.fS = function (size) {
	$s({$: {fS: (N(size, 40))}})
	return $
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
$KOob = function (k, v) {
	var g = G(arguments)
	if (g.O) {
		var o = []
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	k = KOob[k] ? KOob[k] : k
	v = v ? ': ' + v : ''
	return k + v
}
e$ = function (bnd, kids) {
	var g = G(arguments)
	var sp = $.sp(A(g.s) ? g.s : g.r)
	sp.e$(bnd)
	return sp
}
ok$o = function (key, val) {
	vm = $Ob(key, $o(val))
	ok(vm)
}
//$.sl.o$ = function (a) {return $.sl().o$(a)}//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
t$sp = function () {
}
v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
}
function nok(){
 
	$.ok = function (fn) {
		return $.bt('ok', fn)
	} ///////
	ok = function self(vm, el) {
		if (A(vm)) {
			return self(vm[0], vm[1])
		}
		if (S(vm)) {
			return self($Ob(vm, el))
		}
		window.vm = vm
		ko.aB(vm, el)
		return vm
	}
	$ok = function self() {

// ???? pass plain object and element(string or ob?) :)
		var g = G(arguments)
		if (g.p) {
			_.in(0, function () {
				self.apply(null, g)
			})
		}
		// pass nothing -> {da: $o(1)} Note: 'da' replaced '$'
		if (g.u) {
			g.f = 'da'
		}
		// pass a single key, value -> {key:value}
		vm = S(g.f) ? Ob(g.f, D(g.s) ? g.s : $o(g.n)) :
			// pass just a value -> {$: value}
				F(g.f) || N(g.f) || A(g.f) ?
						Ob('da', g.f)
					// pass just plain obj (normal)
						: g.f
		ok(vm)
	}
	OK = function (vm) {
		_.in(.1, function () {
			ok(vm)
		})
	}
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
	$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
		return this.b('options', s)
	}
	$.fn.sO$ = $.fn.bSO = function (s) {
		return this.b('selectedOptions', s)
	}
	$.fn.sm$ = function (s) {
		return this.b('submit', s)
	}
	$.fn.u$ = $.fn.uN$ = function (s) {
		return this.b('uniqueName' + s)
	}
	$.fn.tp$ = $.fn.bTp = function (s) {
		return this.b('template', s)
	}
	$.fn.e$ = function (s) {
//return this.b('foreach',S)
// = $.fn.bE
		// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
		var q = this, g = G(arguments)
		return g.p ? '$data.' + s : q.b('foreach', s)
//= $.fn.bindKOEach = $.fn.koE = $.fn.eKo = $.fn.bE = $.fn.ko_e 
	}
	$.fn.e$da = function (a) {
		//=$.fn.eD = $.fn.eB =  $.fn.bindKOEachData 
		return this.b('$data.' + a)
	} 
	$o = function () {
		var g = G(arguments)
		g[0] = D(g.f) ? g.f :
				D(g.s) ? g.s : g.n ?
						0 : 1
		return ko.o.apply(ko, g)
	}
	$oA = $oa = function () {
		var g = G(arguments)
		return ko.oA(g.A_ ? g.f : g)
	}
	$cO = $c = function () {
		return ko.computed.apply(ko, arguments)
	}
	$.fn.dB = function (dB, p2) {
		return this.at({'data-bind': p2 ? (dB + ':' + p2) : dB})
	}
	$.fn.ko = function (a, b) {
		var o = []
		if (O(a)) {
			_.e(a, function (v, k) {
				if (KOob[k]) {
					k = KOob[k]
				}
				o.push(k + ':' + v)
			})
			this.b($l(o.join()))
		}
		else {
			if (KOob[a]) {
				a = KOob[a]
			}
			str = a + ':' + b;  // str= oO('b', a)
			this.at({'data-bind': str})
		}
		return this
	}
	$.fn.b = function (a, b) {
		var q = this, g = G(arguments)
		var str = g.O ? $KOob(g.f) :
				hasCln(a) ? a :
						$KOob(a, b || 't')
		return q.dB(str)
		function hasCln(str) {
			return str.indexOf(':') != -1
		}
	}
	ok.oA = function (key, oA) {
		ok($Ob(key, $aO(oA)))
	}
	$.ko = function () {
	}
	t$ = ok.t$ = t$d = $.d.t$ = function (bd, textVal) {
		return $.sp().t$(bd).A(textVal || '')
	}
	cl$ = function (bnd, btTx) {
		var g = G(arguments)
		var bt = $('<button>').A()
		bt.cl$(bnd)
		bt.A(D(btTx) ? btTx : bnd)
		return bt
	}
	vs$ = function (bnd, kids) {
		var g = G(arguments)
		return $.sp(A(g.s) ? g.s : g.r).vs$(bnd)
	}
	v$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).v$(bnd)
	}
	fc$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).fc$(bnd)
	}
	tI$ = function (bnd, kids) {
		var g = G(arguments)
		return $.ip(A(g.s) ? g.s : g.r).tI$(bnd)
	}
	pw$ = function (bnd, kids) {
		var g = G(arguments)
		return $.pw(A(g.s) ? g.s : g.r).tI$(bnd)
	}
	ch$ = function (bnd) {
		return $.cb().ch$(bnd)
	}
	ip$ = function (ob) {
		return $.ip().b(ob)
	}
	d$ = function (ob) {
		return $.d().b(ob)
	}
	w$ = function (bnd, kids) {
		var g = G(arguments)
		return $.sp(A(g.s) ? g.s : g.r).w$(bnd)
	}
}
function baseApps(){

	K99 = CSSDATACLICK = KNOCKS = function () {
		$.ul().K('fs').e$("fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = $o()
			o.gtf = function (f) {
				$l('gtf')
				o.chFI(f)
			}
			return o
		}
		ok(MVM())
	}
	KOH= KOHTML= function () {
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
	KOAT=  KOATTR = function () {
		$.a('report').fS(100).at$('{href: urlName, title:titleName}')
		ok({
			urlName: $o("http://www.hustler.com"),
			titleName: $o("statistics")
		})
	}
	KOIF=  function () {
		$.cb().b('checked', 'dispMs')
		$.sp('Disp ms')
		$.d().if$('dispMs').A(
				$.p('Here is a message. Astonishing'))
		ok(vm = {dispMs: $o(0)})
	function alt(){
		KOIF = KO15 = function () {
			$.A(
					$('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>').C('r'),
					$(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>').C('b')
			)
			_.in(function () {
				ok({
					displayMessage: $o(false)
				});
			})
		}}
	}
	KOEN= ENAB = PHONENUMBER = function () {
		$s({$: {M: 10}})
		$.sp(['phone #:', v$('num').en$('hasPhone')])
		$.sp([ch$('hasPhone'), 'I have phone'])
		ok({
			num: '',
			hasPhone: $o(0)
		})
	}
	KOT= KOTEXT = function () {
		t$('textVal')
		ok(vm = $Ob('textVal', $o('startValue')))
		_.in(4, function () {
			vm.textVal('changed the view model!')
		})
	}
	KOW= KOWITH = function () {
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
	KOVS= KOVISABLE = function () {
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
	KOCL= KOCLICK= function () {
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
	KOCP= COMP=KOCOMPUTED = function () {
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
	KOPRE= KIP = function () {
		$.p('Login name:').A($.ip().tI$('un'))
		//$.p('Login name:').A($.ipTi('un'))
		$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
		//$.p('Pw:').A($.pwTi('pw'))
		// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
		$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
		ok(vm = {un: $o(''), pw: $o('abc')})
	}
}
function listApps(){
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
	KO2 = SEAT = SEAT_RESERVATIONS = function () {
		$Ms('TUTC')
		$.h2().A('Your seat reservations (', t$("seats().length"), ')')
		$.t().A(
				$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
				$('<tbody>').e$('seats').A($.tr().A(
						$.td().t$('name'),
						$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
						$.td().t$('formattedPrice'),
						$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
		$.h3().A('Total surcharge: $', $.sp().t$('totalSurcharge().toFixed(2)')).vs$('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.totalSurcharge = ko.computed(function () {
				var total = 0;
				for (var i = 0; i < self.seats().length; i++)
					total += self.seats()[i].meal().price;
				return total;
			})
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
			self.removeSeat = function (seat) {
				self.seats.remove(seat)
			}
		}
	}
	KO3 = KOADDER = function () {
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
	KO4 = BETTERLIST = function (n, ch) {
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
	KO5 = TBE = function () {

		$.t([$.tH().A($.tr().A(
				$.th().A('First name'),
				$.th().A('Last name'))),
			
			$.tB().e$('people').A(
					$.tr().A($.td().t$('fn'),
							$.td().t$('ln'))
							
			)])
		ok({
			people: [
				{fn: 'B', ln: 'Bert'},
				{fn: 'Ch', ln: 'Char'},
				{fn: 'De', ln: 'Dent'}
			]
		})
	}
	KO6 = TBTR = function () {
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
	KO7 = KOCL = function () {
		Per = function (n, ch) {
			var per = this
			per.n = n
			per.ch = ko.oa(ch)
			per.A = function () {
				per.ch.push('new ch')
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.ul().e$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a('New').ch$('A')]),
						$.ul().e$('ch').A(
								$.li([$.sp().t$(), $.sp().vs$('$root.showDT').A(
										' (child rendered at ',
										$.sp().t$('$Dt().getSeconds()'), ')')]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		ok({peep: peep, showDT: $o()})
	} }
function _pre(){
	KOob = {
		e: 'foreach',
		ch: 'checked', c: 'checked',
		t: 'text',
		v: 'value',
		h: 'html',
		i: 'if',
		$: 'click',
		fc: 'hasFocus', hF: 'hasFocus', f: 'hasFocus',
		w: 'with',
		at: 'attr', a: 'attr',
		en: 'enable',
		vs: 'visible', tI: 'textInput',
		o: 'options',
		oT: 'optionsText',
		ev: 'event',
		sm: 'submit',
		sO: 'selectedOptions',
		n: 'ifnot',
		d: 'disable',
		///////////
		u: 'uniqueName', vU: 'valueUpdate',
		cm: 'component', tp: 'template',
		////////////////////
		s: 'css', sty: 'style', y: 'style'
	}
	ko.ut = ko.u = ko.utils
	ko.cm = ko.components
	ko.vE = ko.ve = ko.virtualElements
	ko.aB = ko.ab = ko.applyBindings
	ko.o = ko.observable
	ko.c = ko.computed
	ko.pC = ko.pc = ko.pureComputed
	ko.oA = ko.oa = ko.observableArray
	ko.aF = ko.ut.aF = ko.u.af = ko.u.arrayFilter
	ko.cm.rg = ko.cm.register
	ko.bH = ko.bh = ko.BH = ko.bindingHandlers
	ko.rTp = ko.rT = ko.renderTemplate
	ko.dO = ko.do = ko.dependentObservable
	ko.uw = ko.unwrap
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bD = ko.applyBindingsToDescendants
	ko.cm.iR = ko.cm.isRegistered
	ko.vE.aB = ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.cm = ko.cmp = ko.comp = ko.components
	ko.rg = ko.cm.rg = ko.cm.reg = ko.cm.register
	ko.cm.iR = ko.cm.isRegistered
	ko.o.prototype.rm = ko.o.prototype.remove
}