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
EACH = function () {
	OK(TLVM())
	$.fo({submit$: 'aT'},
			"Add task: ", $.ip("What?").v$('nT'), $.bt('Add').at('t', 's')
			//alt = $.fo.sm$("aT").A("Add task: ", $.ip("What?").v$('nT'), $.bt('Add').at('t', 's')),
	)
	$.ul({
		enable$: 'ts',
		visible$: 'ts().length>0',
		child: $.li([
			$.cb.checked$('iD'),
			$.ip({value$: 't', disable$: 'iD'}),
			$.a({checked$: '$parent.rmT'}, 'Del')
		])  //alt = $.ul().A($.li().A($.cb().ch$('iD'), ip().b("value:t, disable:iD"), lk('Del').b('ch', '$parent.rmT'))).b("foreach:ts, visible:ts().length>0"),
	})
	$.d([
		"You have",
		$.B({text$: "inc().length"}, "&nbsp;"),
		$.sp({vs$: "inc().length==0"}, "inc task(s)   - beer!")
	])
}
EACHDIVADD = EDA = function () {
	$.dE('peep', [$.p($.spT('f'), ' ', $.spT('l'))])
	vm = {peep: $oa([{f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}])}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
WITHPARENT = WPA = function () {
	$.fo.sm$('getTwts').A(
			'Twt-acc:',
			$.ip.v$('twtN'),
			$.sm('Get twts')
	)
	$.d([
		$.h3(['Rec twts fetched at', $.spT('retrDt')]),
		$.ol().e$('topTwts')
				.A($.liT('text')),
		$.bt('Clear twts')
				.cl$('$parent.clearRes')])
			.w$('resDa')
	ok(new Twit)
}
VIRT = function () {
	_$({
		C: 'p',
		A: [
			$.d().b({
				randomOrder: true
			}),
			$.d('First'),
			$.d('Second'),
			$.d('Third'),
			$.ul().e$('mDateTime').A($.li().A($.ul())),
			$.uE("$root.matter.index.type()[$data]", [$.li().A()])]
	})
}
ULDATA = function () {
	d = $.d({
		id: 'hover',
		//Show the div onmouseover.
		mouseover: function () {
			$(this).next("#box").tog()
		},
		mouseout: function () {//Hide to div onmouseout
			function onMouseOut(obj) {
			}
		}
	}, $.a($.i('me').t$('matterId')))
	$.ul({
		e$: 'mDateTime',
		childLi: [
			$.ul({
				e$: '$root.matter.index.type()[$data]',
				children: [
					$.li([
						d,
						//$.dI('box').none('cssDisplayNone').A($.a('Edit'), $.a('Copy'), $.a('Delete')),
						$.d({
							id: 'box', dp: 'none',
							children: [$.a('Edit'), $.a('Copy'), $.a('Delete')]
						})
					]),
					$.li.t$('matterTitle'),
					$.li.t$('matterComment')
				]
			})
		]
	})
}
TWT = function () {
	OK({
		un: $o('@ex'), da: $o(),
		g: function () {
			vm.da({
				dt: new Date,
				MS: _.m(['a', 'b'],
						function (t) {
							return {ms: vm.un() + ':' + t}
						})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
	$.d([
		$.h3('dt:', $.spT('dt')),
		$.ol('MS').e$($.li.t$('ms')),
		$.bt('clr').cl$('$parent.clr')
	]).w$('da')
	$.fo(['un:', $.ip().v$('un'), $.sb('Get')]).sm$('g')
}
OLTWT = function () {
	$.fo(['un:', $.ip.v$('un'), $.sm('Get')]).sm$('get')
	$.d([
		$.h3('dt:', $.sp().t$('dt')),
		$.olE('MS',
				$.li().t$('ms')),
		$.bt$('clr', ' $parent.clr')
	]).w$('da')
	ok({
		un: $o('@ex'),
		da: $o(),
		get: function () {
			vm.da({
				dt: new Date,
				MS: _.m(['a', 'b'], function (t) {
					return {ms: vm.un() + ':' + t}
				})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
}
ULTIARR = function () {
	$.ip().tI$('name');//textInput
	$.h1().t$('name');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
	//ul each 'array'
	$.ul.e$('arr', $.li.t$())
	$.sm().cl$('A')
	ok({
		name: $o('zi'),
		arr: $oa(),
		A: function () {
			this.arr.push(this.name())
		}
	})
	_.in(1, function () {
		vm.name('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)
		})
	})
}
BINDUL = BUL = MONK = function () {
	$.h1('monkey').t$('monkey')
	$.iV('monkey')
	$.sm('hello').cl$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	$.u().$('list').A($.li([
		'my name is ', $.sT('name'), ' and i like ', $.sT('color')]))
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
	vm.A()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ULADD = ULA = function () {
	$.lb('Show time: ').A($.cbC('showDT'))
	$.ul.e$('peep').A($.li().A(
			$.d([$.spT('n'), 'has',
				$.spT('ch().length'),
				'children &nbsp;',
				$.a$('New', 'A')]),
			$.ul.e$('ch').A([
				$.li([
					$.spT(), $.sp().vs$('$root.showDT').A(
							' (child rendered at ', $.spT('new Date().getSeconds()'), ')'
					)])
			])
	))
	ok({
		peep: peep,
		showDT: $o()
	})
	peep()
	//add, conditional el
	//anonymous vm
}
ULDEL = ULD = function () {
	OK({
		peep: $oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
	$.ul().e$('peep',
			//bind bt 'click' to parent.rem
			$.li([
				$.sp('pos/name: '),
				$.sp.t$('$index'),
				$.sp.t$('n'),
				$.$bt('del', 'rm', '-')
			]))
	$.$bt('A')
	function klassic() {
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
}
ULROOT = function () {
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	$.A(
			ul().k('fs').b('E', "fs")(
					li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf")))
	MVM = function () {
		var vm = {
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: $o()
		}
		vm.gtf = function (f) {
			vm.chFI(f)
		}
		return vm
	}
	ok(MVM())
}
KOCL = function () {
	$.x('x').h2('Peeep')
	$.u().$('peep').A(
			$.li().A(
					$.d([
						$.spT('n'), 'has',
						$.spT('ch().length'),
						'children &nbsp;',
						$.a$('New', 'A')
					]),
					$.ul().e$('ch').A(
							$.li([
								$.spT(), $.sp.vs$('$root.showDT').A(
										' (child rendered at ',
										$.spT('$Dt().getSeconds()'),
										')'
								)]))
			))
	$.cb().ch$('showDT').a2($.lb('Show time:'))
	//anonymous vm
	OK({peep: peep, showDT: $o()})
}
KOEACH2 = function () {
	$.h4('People')
	$.ul().e$('people').A(
			$.li().A($.sp('pos/name: '),
					$.sp.t$('$index'),
					$.sp.t$('name'),
					$.a('X').cl$('$parent.remove')))
	$.bt('add').cl$('add')
	vm = function () {
		var o = {}
		o.people = $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date})
		}
		o.remove = function () {
			o.people.remove(this)
		}
		return o
	}
	ok(vm())
}
ULNEST = function () {
	$.ul().e$('peep', $.d([
				// name has length children
				$.sp.t$('name'), 'has',
				$.sp.t$('ch().length'),
				'children &nbsp;',
				$.a.cl$('New', 'A')
			]),
			$.uL.e$('ch').A(
					$.sp.t$(), //child name
					$els(
							'(child rendered at ',
							$.spT('$Dt().getSeconds()'),
							')'
					).vs$('$root.showDT')
			)
	)
	$.lb('show time: ').A($.cb().ch$('showDT'))
	//anonymous vm
	ok({peep: peep, showDT: $o()})
}
TABLE = TTR = function () {
	bd.fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.tdT('l')]))
	$.ko.table('peep', {
		tH: [$.tr([$.th('F'), $.th('L')])],
		tr: [$.tr([$.td().t$('f'), ', ', $.tdT('l')])]
	})
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok.oA('peep', [{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
K3 = TABLE = function () {
	ko.h$({
		fadeVisible: {
			i: function (e, v) {
				var v = v()
				$l('v:' + v)
				$(e).toggle(v)
			}, u: function (el, vAc) {
				vAc() ? $(el).fadeIn() : $(el).fadeOut()
			}
		},
		jqButton: {
			i: function (e) {
				$(e).button()
			}, u: function (e, vA) {
				$(e).button("option", "disabled", vA().enable === false);
			}
		}
	})
	str = '<h3 data-bind="text: q"></h3>'
	str += '<p> distribute <b data-bind="text: pB"></b> points  </p>'
	str += ' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: As"><tr>'
	str += '<td data-bind="text: aT"></td>'
	str += ' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
	str += ' </tr> </tbody> </table>'
	str += '<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
	str += '<p><b data-bind="text: pB-pU()"></b> left</p>'
	str += '<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
	$(str).A()
	function VM(q, pB, As) {
		var vm = this
		vm.q = q
		vm.pB = pB
		vm.As = $.map(As, function (t) {
			return {aT: t, Ps: $o(1)}
		})
		vm.save = function () {
			alert('To do')
		}
		vm.pU = ko.c(function () {
			var t = 0;
			_.e(vm.As, function (a) {
				t += a.Ps()
			});
			return t
		}) //points Used
	}
	
	ok(new VM("factors?", 10, ["Functionality", "News",
		"dropshadows", "testimonials"]))
}
KOEACH = TABLE = function () {
	$.format()
	s2(
			$.t().A(
					thead()(
							$.tr().A($.th()('First name'),
									th()('Last name'))),
					tbody().b('E', 'people')(tr()(
									td().b('t', 'fn'),
									td().b('t', 'ln'))
					)
			)
	)
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KOSPA = SPA = TABLE = function () {
	$.ul().e$('folders').K('folders').A(
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
ULIF = function () {
	$.ul().e$('PL').A($.li([
		$.sp('Planet: '),
		$.b().t$('n'),
		$.dI('cap', [$.p().t$('cap.n')])
	]))
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}},
		{n: 'Uranus'}
	])
}
function VM() {
	this.prods = $oA()
}
VM = Feed = function (p) {
	this.ms = $o("Hi");
	this.ms = ko.o("Hi")
	this.feed = new Feed()
	this.feed2 = new Feed()
	this.feed.ms("Ms1")
	this.feed2.ms("Ms2")
	this.ms = ko.o("!")
	this.VM2 = {ms: $o("!")}
	this.somePop = p.smKey
	this.ms = ko.o("Hi");
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.feed.ms("Ms1");
	this.feed2.ms("Ms2");
}
VM.prototype.A = function () {
	this.prods.push(Prod('Prod ' + (this.prods().length + 1)))
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
koTask = koTsk = Task = function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
Person = Per = function (n, ch) {
	var per = this
	per.n = n
	per.ch = ko.oa(ch)
	per.A = function () {
		per.ch.push('new ch')
	}
}
Twit = function () {
	var vw = this
	vw.twtN = $o('@ex')
	vw.resDa = $o(0)
	vw.clearRes = function () {
		vw.resDa(undefined)
	}
	vw.getTwts = function () {
		var n = vw.twtN();
		vw.resDa({
			topTwts: [{text: n + ':nice'}, {text: n + ':trump'}, {text: n + ':sex'}],
			retrDt: new Date()
		})
	}
}
function Ms(ms, vt) {
	var g = G(arguments)
	return {
		ms: ms,
		vt: $o(g.p ? 'like' : vt || '')
	}
}
Ms = function (m) {
	return {m: $o(m || '')}
}
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
Prod = function (n, rating) {
//return {n: n, uRatg: ko.o(ratg || null)}
	this.name = n;
	this.userRating = ko.o(rating || null)
}
Feed = function () {
	this.ms = $o('pf!')
}
KOCL = function () {
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
}
VM = function () {
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.VM2 = {ms: $o("!")}
}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components
CUSTOMBINDING = PLANET = function () {
	Planets = function () {
		this.planets = $oa([
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]);
		this.typeToShow = $o("all");
		this.displayAdvancedOptions = $o(false);
		this.addPlanet = function (type) {
			this.planets.push({
				name: "New planet",
				type: type
			})
		}
		this.planetsToShow = ko.pc(function () {
			// Represents a filtered list of planets
			// i.e., only those matching the "typeToShow" condition
			var desiredType = this.typeToShow();
			if (desiredType == "all") return this.planets();
			return ko.utils.arrayFilter(this.planets(), function (planet) {
				return planet.type == desiredType;
			});
		}, this);
		// Animation callbacks for the planets list
		this.showPlanetElement = function (el) {
			if (el.nodeType === 1) $(el).hide().slideDown()
		}
		this.hidePlanetElement = function (el) {
			if (el.nodeType === 1) $(el).slideUp(function () {
				$(el).remove();
			})
		}
	}
	$.x('g', 'Plan')
	$.p().A($.lb().A($.cb().ch$('displayAdvancedOptions'), 'Display advanced options')
	)
	$.p().A(
			'Show:',
			$.lb([$.ip()]),
			$.lb([$.ip()]),
			$.lb([$.ip()])
	)
	/*
	 <p data-bind='fadeVisible: displayAdvancedOptions'>
	 Show:
	 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
	 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
	 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
	 </p>*/
	$.d([$.d([$.d()])])
	/*
	
	 <div data-bind='template: { foreach: planetsToShow,
	 beforeRemove: hidePlanetElement,
	 afterAdd: showPlanetElement }'>
	 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
	 </div>
	
	 */
	$.p().A(
			$.bt('add rocky plan')
					.b('click: addPlanet.bind($data, "rock")'),
			$.bt('add gas giant')
					.b('click: addPlanet.bind($data, "gasgiant")')
	).b('fadeVisible: displayAdvancedOptions')
	// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
	// Could be stored in a separate utility library
	ok(new Planets())
	function alt() {
		PLAN = function () {
			$.p().A($.lb().A(
							$.cC('displayAdvancedOptions'), 'Display advanced options'
					)
			)
			$.p().A('Show:',
					$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
			)
			/*
			 <p data-bind='fadeVisible: displayAdvancedOptions'>
			 Show:
			 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
			 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
			 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
			 </p>*/
			$.d([$.d([$.d()])])
			/*
			
			 <div data-bind='template: { foreach: planetsToShow,
			 beforeRemove: hidePlanetElement,
			 afterAdd: showPlanetElement }'>
			 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
			 </div>
			
			 */
			$.p([$.bt(), $.bt()])
			/*
			 <p data-bind='fadeVisible: displayAdvancedOptions'>
			 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
			 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
			 </p>
			 */
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
			ok(new Planets())
		}
	}
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
AppVM = function () {
	this.items = [
		{
			binding: 'vs',
			desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
		},
		{
			binding: 't',
			desc: 'causes the assoc DOM el to display the text value of your pam.'
		},
		{
			binding: 'cm',
			desc: 'injects a spec cm into an el, and optly passes pams to it.'
		}
	]
}
Feed = function () {
	this.ms = ko.o('pf!')
}
Ms = function (m) {
	return {m: ko.o(m || '')}
}
function tasks() {
	$task = function (d) {
		return {t: $o(d.t), iD: $o(d.iD)}
	}
	tasks = $oa([
		new Task('Find new desktop background', true),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', true)
	])
	$task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	Task = function (title, done) {
		this.tt = this.title = $o(title)
		this.done = $o(done)
	}
}
Per = function (n, ch) {
	this.n = n
	this.ch = $oa(ch)
	this.A = function () {
		this.ch.p('new ch ' + $r())
	}
}
function seats(){
	SEATS = KNOCKS1 = function () {
		$.format()
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
	SEATS = KNOCKS1 = function () {
		$.format()
		s2(h2('Your seat reservations'),
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
	SEATS = TPLIST = function () {
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		$.h2('Your seat reservations').A(
				$.sp().bT('seats().length')
		)
		$.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
				$.s().bT('totalSurcharge().toFixed(2)')
		)
		$.t().A(
				$.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge'))),
				$.tB().bTp("{name:'reservationTemplate', foreach: seats}")
		)
		$.bt('Reserve another seat').b({
			$: 'addSeat',
			en: 'seats().length < 5'
		})
		$('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
				$.tr().A(
						$.td().A($.ip().bV('name')),
						$.td().A($.sl().b({o: 'availableMeals', ot: 'mealName'})),
						$.td().A($.a('Remove').b$('remove')))
		)
		// Raw catalog data - would come from the server
		var availableMeals = [
			{mealName: "Standard (sandwich)", price: 0},
			{mealName: "Premium (lobster)", price: 34.95},
			{mealName: "Ultimate (whole zebra)", price: 290}
		]
		// Class to represent a row in the reservations grid
		seatReservation = function (name) {
			this.name = name;
			this.availableMeals = availableMeals;
			this.meal = ko.observable(availableMeals[0]);
			this.remove = function () {
				viewModel.seats.remove(this)
			}
			this.formattedPrice = ko.dependentObservable(function () {
				var price = this.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			}, this);
		}
		// Overall viewmodel for this screen, along with initial state
		vm = {
			seats: ko.observableArray([
				new seatReservation("Steve"),
				new seatReservation("Bert")
			])
			, addSeat: function () {
				this.seats.push(new seatReservation());
			}
		}
		vm.totalSurcharge = ko.dependentObservable(function () {
			var total = 0;
			for (var i = 0; i < this.seats().length; i++)
				total += this.seats()[i].meal().price;
			return total;
		}, vm);
		ko.b(vm)
		ok(vm)
	}
	OLDSEATS = TUTC1 = function () {
		availableMeals = [
			{mealName: "Standard (sandwich)", price: 0},
			{mealName: "Premium (lobster)", price: 34.95},
			{mealName: "Ultimate (whole zebra)", price: 290}
		]
		$.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
		$.t().A(
				$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
				$('<tbody>').e$('seats').A($.tr().A(
						$.td().bT('name'),
						$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
						$.td().bT('formattedPrice'),
						$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
		$.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = $o(initialMeal);
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
			self.seats = $oa([
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
	} //full collection app from website !!!!!!!
	SEATS = K4 = TUTC = COL = TABLE = function () {
		$.h2(['seats:(',
			$.sp().t$("_.z(Ss())"),
			')'])
		$.t([$.tH([$.tr([$.th('n'), $.th('M'), $.th('$$'), $.th()])]),
			$.tBT('Ss', $.tdT('n'), $.td($.slB({o: '$root.Ms', v: 'm', oT: "'n'"})),
					$.tdT('fm'), $.td([$.a$('XX', "$root.rm")]))])
		$.h3(['$$: $', $.sp().t$('_.tF($$())')]).bVs('$$()>0');
		$.bt('+').b({$: 'A', en: '_.z(Ss())<5'})
		ok(new (function () {
			var vm = this;
			vm.Ms = [{n: "bat", $$: 0}, {n: "pig", $$: 3.9}, {n: "zeb", $$: 29}]
			vm.Ss = $oa([Res("jas"), Res("rig")]);
			vm.$$ = ko.c(function () {
				var $$ = 0, Ss = vm.Ss();
				_.e(Ss, function (s) {
					$$ += s.m().$$
				});
				return $$
			});
			vm.A = function () {
				vm.Ss.p(Res())
			};
			vm.rm = function (s) {
				vm.Ss.rm(s)
			};
			function Res(n, m) {
				var r = {n: n || 'ano', m: $o(m || vm.Ms[0])}
				r.fm = ko.c(fm);
				return r;
				function fm() {
					return fm(r.m().$$)
					function fm($$) {
						return !$$ ? 'Name' : '$' + _.tF($$)
					}
				}
			}
		}))
	}
	MENU = TABLE = function () {
		$.h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().e$('seats').A(
						$.tr().A(
								$.td().t$('n'),
								$.td().t$('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().t$('m().p')
						)
				)
		)
		ok({
			seats: $oa([
				{n: 'Jo', m: ko.o(AM[0])},
				{n: 'Bo', m: ko.o(AM[1])}]),
			A: function () {
				vm.seats.push({
					n: 'hahaha',
					m: ko.o({n: 'noodles', p: 30})
				})
			}
		})
	}
//  cust bind:
	SEATS = TABLE = TPLIST = function () {
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
}