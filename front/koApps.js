KNOCKS0 = function () {
	$.format()
	s2(
			$.h1('KNOCKOUT'),
			$.p('F: ', _B().b('t', 'first')),
			$.p('L: ', _B().b('t', 'last')),
			$.p('F: ', ip().b('V', 'first')),
			$.p('L: ', ip().b('V', 'last')).id('last'),
			$.p('L: ', _B().b('t', 'firstLast')),
			$.bt('caps').b('$', 'capL')
	)
	vm = {}
	vm.first = $o('j')
	vm.last = $o('y')
	vm.firstLast = ko.computed(function () {
		return vm.first() + ' ' + vm.last()
	})
	vm.capL = function () {
		vm.last(vm.last().toUpperCase())
	}
	ok(vm)
}
KNOCKS = function () {
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
KNOCKS1 = function () {
	format()
	s2(
			h2('Your seat reservations'),
			$.t().A($.tH().A($.tr().A(
							$.th('Passenger name'),
							$.th('Meal'), $.th('Surcharge'), $.th(''))
			), $.tB().b('fe', 'seats').A(
					$.tr().A(
							$.td().b('t', 'n'),
							$.td().b('t', 'm().mn'),
							$.td().A(
									// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
							),
							$.td().b('t', 'm().p')
					))),
			$.bt('reserve').b('$', 'add')
	)
	AM = [
		{mn: "fries", p: 10},
		{mn: "fish", p: 20},
		{mn: "noodles", p: 30}
	]
	sR = function (n, m) {
		return {
			n: n,
			m: ko.o(m)
		}
	}
	vm = {}
	vm.seats = ko.oa([
		sR('Jo', AM[0]), sR('Bo', AM[1])
	])
	vm.add = function () {
		vm.seats.push(
				sR('', AM[2])
		)
	}
	ko.ab(vm)
}
KNOCKS1 = function () {
	format()
	s2(
			h2('Your seat reservations'),
			_t()(
					thead()(
							tr()(
									th('Passenger name'),
									th('Meal'),
									th('Surcharge'),
									th(''))
					), tbody().b('fe', 'seats')(
							tr()(
									td().b('t', 'n'),
									td().b('t', 'm().mn'),
									td()(
											// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
									),
									td().b('t', 'm().p')
							))),
			bt('reserve').b('$', 'add')
	)
	AM = [
		{mn: "fries", p: 10},
		{mn: "fish", p: 20},
		{mn: "noodles", p: 30}
	]
	sR = function (n, m) {
		return {
			n: n,
			m: ko.o(m)
		}
	}
	vm = {}
	vm.seats = ko.oa([
		sR('Jo', AM[0]), sR('Bo', AM[1])
	])
	vm.add = function () {
		vm.seats.push(
				sR('', AM[2])
		)
	}
	ko.ab(vm)
}
KNOCKS4 = function () {
	$.format()
	s2(
			$.h3('Tasks'),
			$.f().b("S", "aT").A(
					"Add task: ",
					$.ip().b('v', 'nT').ph("What?"),
					$.bt('Add').at('t', 's')
			),
			$.ul().A(
					$.li().A(
							cb().b('ch', 'iD'),
							ip().b("value:t, disable:iD"),
							lk('Del').b('ch', '$parent.rmT')
					)
			).b("foreach:ts, visible:ts().length>0"),
			sp("You have"),
			$.B().A("&nbsp;").b('t', "inc().length"),
			$.sp("inc task(s)"),
			$.sp("- beer!").b("visible: inc().length==0")
	)
	ok(TLVM())
}
 
KKO = function () {
	d = $(str).A()
	ViewModel = function (first, last) {
		this.firstName = ko.observable(first);
		this.lastName = ko.observable(last);
		this.fullName = ko.computed(function () {
			// Knockout tracks dependencies automatically.
			// It knows that fullName depends on firstName and lastName,
			// because these get called when evaluating fullName.
			return this.firstName() + " " + this.lastName();
		}, this);
	};
	ok(new ViewModel("Planet", "Earth"))
}
CHL = function () {
	$.h1('shown!').slV()
	$.cC()
	ok()
}
FCB = function () {//working!!!
	_$({
		C: 'u', t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().b("hasFocus: editingName"),
			$.h1('editing..').bVs('editingName'),
			$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
	})
}
TLVM = function () {
	var o = {
		ts: $oa([]),
		nT: $o()
	}
	o.inc = ko.c(function () {
		return ko.ut.af(
				o.ts(),
				function (t) {
					return !t.iD()
				}
		)
	})
	o.aT = function () {
		o.ts.push(Task({t: o.nT()}))
		o.nT("")
	}
	o.rmT = function (t) {
		o.ts.remove(t)
	}
	$.gJ('/ts', function (d) {
		o.ts(_.m(d, function (i) {
			return Task(i)
		}))
	})
	return o
}
KOTEMP = function () {
	format()
	s2(
			ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
			ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
			hr(),
			_d().b('T', "{name: templateToUse, foreach: articles }"),
			script("summary")(_d().b('t', 'title')),
			script('details')(
					_d()(
							h2().b('t', 'title'),
							pg().b('t', 'content'),
							bt('edit').b('$', '$parent.selectedArticle'))
			),
			script('edit')(
					_d()(ip().b('v', 'title'),
							br(),
							ip().b('v', 'content'))
			))
	viewModel = {
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o()
	}
	viewModel.templateToUse = function (i) {
		return i === this.selectedArticle() ?
				'edit'
				: this.selectedView()
	}.bind(viewModel)
	ko.ab(viewModel)
}
KOTEMP2 = function () {
	_b()(
			scrp('tt')(
					h1('afsdfds')
			),
			_d().b('T', "{name:'tt'}")
	)
	ko.ab({})
}
KOTEMP = function () {
	format()
	s2(
			ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
			ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
			hr(),
			_d().b('T', "{name: templateToUse, foreach: articles }"),
			script("summary")(_d().b('t', 'title')),
			script('details')(
					_d()(
							h2().b('t', 'title'),
							pg().b('t', 'content'),
							bt('edit').b('$', '$parent.selectedArticle'))
			),
			script('edit')(
					_d()(ip().b('v', 'title'),
							br(),
							ip().b('v', 'content'))
			))
	viewModel = {
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o()
	}
	viewModel.templateToUse = function (i) {
		return i === this.selectedArticle() ?
				'edit'
				: this.selectedView()
	}.bind(viewModel)
	ko.ab(viewModel)
}
KOTEMP2 = function () {
	_b()(
			scrp('tt')(
					h1('afsdfds')
			),
			_d().b('T', "{name:'tt'}")
	)
	ko.ab({})
}
KOVIS = function () {
	format()
	s2(
			h1('you should seee if true!!!!').b('vs', 'ssm')
	)
	ko.ab(
			vm = {ssm: ko.o(true)}
	)
//vm.ssm(false); // ... now it's hidden
//vm.ssm(true); // ... now it's visible again
}
FCB = function () {
	_$({
		C: 'u',
		t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().b("hasFocus: editingName"),
			$.h1('editing..').bVs('editingName'),
			$.bt('Edit')
					.b("enable: !editingName(), click:function() { editingName(true) }")]
	})
}
BLM = function () {
	var o = {}
	o.itemToAdd = $o('')
	o.allItems = $oa(['a', 'b', 'c'])
	o.selectedItems = $oa(['d'])
	o.addItem = function () {
		if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
		) {
			o.allItems.push(o.itemToAdd());
			o.itemToAdd('')
		}
	}
	o.removeSelected = function () {
		o.allItems.removeAll(o.selectedItems())
		o.selectedItems([])
	}
	o.sortItems = function () {
		o.allItems.sort()
	}
	return o
}
KOSCR = function () {
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')),
			$.d().bT("{name:'tt'}")
	)
	ok({})
}
KOS = function () {
	$.d('Profit Information')
			.bS("{color:curProf()<0?'red':'black'}")
	ok({curProf: $o(50)})
	_.in(function () {
		vm.curProf(-50)
	})
}
KOAT = function () {
	_$({
		C: 'w',
		t: 'attributes.. unlikely to use?',
		vm: {
			url: $o("year-end.html"),
			tt: $o("stats report")
		},
		A: [$.aA('{href:url,title:tt}', 'report')]
	})
}
TXIP = TWOWAY = function () {
	$.dA('y', 100, 300, 200, 100).bT('NAME')
	$.ip().bTI('NAME')
	ok({NAME: $o('ph text')})
} // bT(text)  bTI(textInput)  $o
K1 = function () {
	$.p('f').A($.S().bT('f'))
	$.p('l').A($.S().bT('l'))
	$.p('f:').A($.ip().bV('f'))
	$.p('l:').A($.ip().bV('l'))
	$.p('full:').A($.S().bT('full'))
	$.bt('tU').b$('tU')
	vm = {
		f: $o('a'),
		l: $o('b'),
		tU: function () {
			this.l(_.tU(this.l()))
		}
	}
	vm.full = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
} //bT  bV(value)  b$ ko.c(computed)
TXIPROOT = TXI = function () {
	$.d([
		$.p(['un:', $.ipTi('un')]),
		$.p(['Pw:', $.pwTi('pw')]),
		'the vm: ',
		$.pre().bT('ko.toJSON($root,null,2)')
	])
	ok({
		un: $o('fred flintsone'),
		pw: $o('yaba daba password')
	})
}//$.ipTi  $.pwTi   $.pre  bT  ko.toJSON  $root
BHTML = HTM = function () {
	$.z().dH('details').fS(100);
	ok('h', $o('wait..'));
	_.in(2, function () {
		vm.h("<em>report:<a href='http://www.playboy.com'>here</a>.</em>")
	})
}// dH
ATTR = function () {
	$.aA('{href:url, title:tt}', 'report').fS(100)
	ok({url: $o("http://www.hustler.com"), tt: $o("statistics")})
}// aA
VISABLE = VIS = function () {
	$.z('y').h1('see me if true!').bVs('vs')
	$.h1('ALWAYS HERE!');
	ok('vs', $o(1))
	_.in(function () {
		vm.vs(0);
		_.in(function () {
			vm.vs(1)
		})
	})
}// bVs
IF = function () {
	$.d([
		'Display?', $.cC('ms'),
		$.pI('ms').A('Here is a message. Astonishing')
	])
	ok({ms: $o(0)})
	_.in(function () {
		vm.ms(1)
	})
} //$.cC  $.pI
ENABLE = EN = function () {
	$.p().A($.cbC('hasPhone'), 'I have phone')
	$.p('Your cellphone number').A(
			$.ip().b({v: 'num', en: 'hasPhone'}))
	ok({hasPhone: $o(0), num: ''})
}
VALUE = VAL = function () {
	$.x('K1');
	$Ms('K1')
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
SEL = CUNTS = function (n, v) {
	$.sO('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
COMPUTED = CPD = function () {
	$.z().h1('KNOCKOUT') //bT,bV and computed
	$.d().A(
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			$.p('L: ', $.b().bT('fl')),
			$.bt('caps').b$('capL')
	)
	vm = {
		f: $o('j'),
		l: $o('y'),
		capL: function () {
			this.l(_.tU(this.l()))
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
	function klassk() {
		KNOCKS = function () {
			format()
			s2(h1('KNOCKOUT'),
					pg('F: ', _B().b('t', 'f')),
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
			ko.ab(vm)
		}
	}
}
ULIF = function () {
	$.x()
	$.ulE('PL', [$.li([
		$.sp('Planet: '),
		$.b().bT('n'),
		$.dI('cap', [$.pT('cap.n')])
	])])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}},
		{n: 'Uranus'}
	])
}
SELMULTI = SLM = function () {
	$.x(null, 'selectedOptions')
	$.p(
			'Where you want to go?',
			$.sl().at({size: 5, multiple: true}).b({
				o: 'available', sO: 'chosen'
			}))
	ok({
		available: $oa(['France', 'Germany', 'Spain']),
		chosen: $oa(['Germany'])
	})
	_.in(function () {
		vm.chosen.push('France')
	})
}
BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	});
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
BCSS = function () {
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
WITH = function () {
	$.d([
		$.h1().bT('city'),
		$.p([
			'lat:', $.spT('lat'),
			'lon:', $.spT('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
STARRATING = function () {
	ko.bindingHandlers.starRating = {
		init: function (element, valueAccessor) {
			$(element).addClass("starRating");
			for (var i = 0; i < 5; i++)
				$("<span>").appendTo(element);
			$("span", element).each(function (index) {
				$(this).hover(
						function () {
							$(this).prevAll().add(this).addClass("hoverChosen")
						},
						function () {
							$(this).prevAll().add(this).removeClass("hoverChosen")
						}
				);
			})
		},
		update: function (element, valueAccessor) {
			// Give the first x stars the "chosen" class, where x <= rating
			var observable = valueAccessor();
			$("span", element).each(function (index) {
				$(this).toggleClass("chosen", index < observable());
			});
		}
	}
	str = '<h3 data-bind="text: question"></h3>'
	str += '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
	str += ' <table>'
	str += ' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: answers">'
	str += ' <tr>'
	str += '<td data-bind="text: answerText"></td>'
	str += '<td data-bind="starRating: points"></td>'
	str += ' </tr>'
	str += ' </tbody>'
	str += '  </table>'
	str += '<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
	str += '<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
	str += 'points left to use.</p>'
	str += '<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
	$(str).A()
	function Answer(text) {
		this.answerText = text;
		this.points = $o(1);
	}
	
	function VM(question, pointsBudget, answers) {
		this.question = question
		this.pointsBudget = pointsBudget
		this.answers = $.map(answers, function (text) {
			return new Answer(text)
		})
		this.save = function () {
			alert('To do')
		}
		this.pointsUsed = ko.c(function () {
			var total = 0;
			for (var i = 0; i < this.answers.length; i++)
				total += this.answers[i].points();
			return total;
		}, this);
	}
	
	ok(new VM("Which factors affect your technology choices?", 10, [
		"Functionality, compatibility, pricing - all that boring stuff",
		"How often it is mentioned on Hacker News",
		"Number of gradients/dropshadows on project homepage",
		"Totally believable testimonials on project homepage"
	]))
}
KOSPA = SPA = function () {
	$.ulE('folders').K('folders').A(
			$.liT('$data')
	)
	/*
	 <ul class="folders" data-bind="foreach: folders">
	 <li data-bind="text: $data,css: { selected: $data == $root.chosenFolderId() }, click: $root.goToFolder"></li>
	 </ul>
	
	
	
	
	
	 <table class="mails" data-bind="with: chosenFolderData">
	 <thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date</th></tr></thead>
	 <tbody data-bind="foreach: mails">
	 <tr data-bind="click: $root.goToMail">
	 <td data-bind="text: from"></td>
	 <td data-bind="text: to"></td>
	 <td data-bind="text: subject"></td>
	 <td data-bind="text: date"></td>
	 </tr>
	 </tbody>
	 </table>
	 <div class="viewMail" data-bind="with: chosenMailData">
	 <div class="mailInfo">
	 <h1 data-bind="text: subject"></h1>
	 <p><label>From</label>: <span data-bind="text: from"></span></p>
	 <p><label>To</label>: <span data-bind="text: to"></span></p>
	 <p><label>Date</label>: <span data-bind="text: date"></span></p>
	 </div>
	 <p class="message" data-bind="html: messageContent" />
	 </div>
	 */
	function WebmailViewModel() {
		// Data
		var self = this;
		self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
		self.chosenFolderId = $o();
		self.chosenFolderData = $o();
		self.chosenMailData = $o();
		// Behaviours
		self.goToFolder = function (folder) {
			self.chosenFolderId(folder);
			self.chosenMailData(null); // Stop showing a mail
			$.get('/mail', {folder: folder}, self.chosenFolderData);
		};
		self.goToMail = function (mail) {
			self.chosenFolderId(mail.folder);
			self.chosenFolderData(null); // Stop showing a folder
			$.get("/mail", {mailId: mail.id}, self.chosenMailData);
		};
		// Show inbox by default
		self.goToFolder('Inbox');
	};
	ko.applyBindings(new WebmailViewModel());
	ok(new (function WebmailVM() {
		var self = this
		this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
	}))
}
KOCSS = function () {
	$.d().fS(400).A('Profit Information')
			.bS("{color:curProf()<0?'red':'blue'}")
	ok({curProf: $o(50)})
	_.in(function () {
		vm.curProf(-50);
		$l('booya')
	})
}
//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
CHECK = SPAM = function () {
	$.cKO = function (m, b, v) {
		var cb = $.cb()
		var p = $.p().A($.sp().A(m), cb.bC(b))
		if (v) {
			cb.v(v)
		}
		return p
	}//=cbKO=cb2
	$.p(['spam?',
		$.cbC('wantSpam', 'wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])])
			.bVs('wantSpam')
	vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
initialData = [
	{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
	{name: "Speedy Coyote", sales: 89, price: 190.00},
	{name: "Furious Lizard", sales: 152, price: 25.00},
	{name: "Indifferent Monkey", sales: 1, price: 99.95},
	{name: "Brooding Dragon", sales: 0, price: 6350},
	{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
	{name: "Optimistic Snail", sales: 420, price: 1.50}
]
NOK = function () {
	d = $.d('r').dB('text: a')
	vm = $o('afsdafsfsdafsdfds')
	// ko.aB({a: vm})
	ko.aB({a: vm})
	_.in(function () {
		vm('changed the view model!')
	})
}