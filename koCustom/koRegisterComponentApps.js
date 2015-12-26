CMNEWS = function () {
	$.x('y', 'news feed')
	//http://jsfiddle.net/rniemeyer/fssXE/
	$.qAP('news-feed', 'vm', 'VM')
	$.qAP('news-feed', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<news-feed params="vm: feed"></news-feed>').A()
	$('<news-feed>').at('params', "vm: feed2").A()
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok(new VM())
	ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
	vm.VM.ms("1");
	vm.VM2.ms("2")
}
WEBCM = function () {
	//For example, instead of writing this:
	$.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
	//  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:
	$('<flight-deals>')
	//   < params='from: "lhr", to: "sfo"'></flight-deals>
}
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
 
//add, conditional el
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
	$.uE('peep', [
		$.li().A(
				$.d([
					$.spT('n'), 'has',
					$.spT('ch().length'),
					'children &nbsp;',
					$.a$('New', 'A')
				]),
				$.ulE('ch', [
					$.li([
						$.spT(), $.spVs('$root.showDT').A(
								' (child rendered at ', $.spT('$Dt().getSeconds()'), ')'
						)])])
		)
	])
	$.cbC('showDT').a2Lb('Show time:')
	//anonymous vm
	OK({
		peep: peep,
		showDT: kO()
	})
}
VM = function () {
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.VM2 = {ms: $o("!")}
}
CMNEWS = function () {
	//http://jsfiddle.net/rniemeyer/fssXE/
	$.qAP('news-feed', 'vm', 'VM')
	$.qAP('news-feed', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<news-feed params="vm: feed"></news-feed>').A()
	$('<news-feed>').at('params', "vm: feed2").A()
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok(new VM())
	ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
	vm.VM.ms("1");
	vm.VM2.ms("2")
}
WEBCM = function () {
	//For example, instead of writing this:
	$.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
	//  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:
	$('<flight-deals>')
	//   < params='from: "lhr", to: "sfo"'></flight-deals>
}
LIKE = function () {
	OK('LIKE', [
		$.dV("!vt()", $.b$$('like', 'hate')),
		$.dV('vt', 'you:', $.ST('vt'))
	], Vm)
	$.ul().e$('MS').A(
			$.sp().t$('ms'),
			ko.$('like', {vt: 'vt'})// ko.$('like', 'vt:vt')
	)
	$.bt('+').cl$('add')
	ok({
		MS: $oA(Ms('lick'),
				Ms('hi'), Ms('haha', '+'),
				Ms('lame')),
		add: function () {
			this.MS.push(Ms('item-' + this.pos()))
		},
		pos: function () {
			return _.s(this.MS()) + 1
		}
	})
}
CMLDR = function () {
	$.tp("my-special-list-template").A(
			$.h3('Here is a special list')
	)
	$.ulE("{ data: myItems, as: 'myItem' }").A(
			$.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
	$.tg = function (a) {
		return $('<' + a + '>')
	}
	$.tg('my-special-list').at('params', 'items: PEEP')
			.A('The person', $.em().b('t', 'name'),
			'is', $.em().b('t', 'age'), 'years old.')
	ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
	ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
		tgNLower = nd.tagName && nd.tagName.toLowerCase()
		return ko.cm.iR(tgNLower) ? tgNLower :
				tgNLower === "special-el" ? "MyCm" :
						null
		// If the el's name matches a reg-ed cm, use that cmt
		// For the el <special-el>, use the component
		// "MySpecialComponent" (whether or not it was preregistered)
		// Treat anything else as not representing a component
	}
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
	// Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"
	// 'params' is an object whose k/v pairs are the pams
	// passed from the cm bd or cust el.
	// - 'cmtInf.el'
	// is the el the component is being//
	//  injected into. When createVM is called, the template has//
	//  already been injected into this el, but isn't yet bound.
	// - 'componentInfo.templateNodes'
	// is an array containing any DOM
	//   nodes that have been supplied to the component. See below.
	// Return the desired view model instance, e.g.:
}
CM = function () {
	$.x()
	q = $.d([$.hr(), 'cm cm cm', $.hr()]).C('b')
	el = q[0]
	$('<test>').A('hello1')
	$('<test>').A('hello2')
	$('<test>').A('hello3')
}
CREATEVM = function () {
	ko._('myCm', {
		m: {
			createVM: function (p, cmInf) {
				return new VM(p)
			}
		}, t: '#d'
	})
}
CMNEWS = function () {
	$.x('y', 'news feed') //http://jsfiddle.net/rniemeyer/fssXE/
	$.qAP('news-feed', 'vm', 'VM')
	$.qAP('news-feed', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<news-feed params="vm: feed"></news-feed>').A()
	$('<news-feed>').at('params', "vm: feed2").A()
	ko._('news-feed', {
		m: function (p) {
			this.vm = p.vm
		},
		t: $.d([
			$.h2('News! Feed'), $.dT('vm.m')
		])[0]
	})
}
MSGEDIT = function () {
	ko._('msgEd', {
		m: function (p) {
			this.t = $o(p && p.initT || '')
		},
		t: $.d([
			'Ms:', $.ipV('t'),
			'(len:', $.spT('t().length'), ')'
		])
	})
	//ko._('myCm', VM)
	//ko._('MyLs', {t: { el: 'MyLs-template' }, m: function(p) {this.myItems = p.items}})
	$.tp("MyLsTp").A($.h3('spcl ls:'))
	$.ulE("{ data: myItems, as: 'myItem' }").A(
			$.li().A($.h4('more my spc items'), $({
				tp: {nodes: $componentTemplateNodes, data: 'myItem'}
			})))
	$.tg('MyLs').at('params', 'items: PEEP')
			.A('The person', $.emT('name'),
			'is', $.emT('age'), 'years old.')
	ok(new VM())
	vm.VM.ms("1");
	vm.VM2.ms("2")
	$.x('b', 'First instance, without parameters')
	//$.z().h4('First instance, without parameters')
	$.d().cm$('message-editor')
	$.h4('Second instance, passing parameters')
	ko._('message-editor', {
		m: function (params) {
			this.text = ko.o(params && params.initialText || '')
		},
		t: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
	})
	$.d().cm$(
			'component:{name:"message-editor",params:{initialText:"Hello,world!"}}'
	)
	ok()
}
COMP = function () {
	$.d([
		$.p('F: ', $.b().t$('f')),
		$.p('L: ', $.b().t$('l')),
		$.p('F: ', $.ip().v$('f')),
		$.p('L: ', $.ip().v$('l')).id('l'),
		$.p('L: ', $.b().t$('fL')),
		$.bt('caps').b$('capL')
	])
	ok({
		f: ko.o('j'),
		l: ko.o('y'),
		fL: ko.c(function () {
			return this.f() + ' ' + this.l()
		}),
		capL: function () {
			this.l(
					S.tU(this.l()))
		}
	})
}
KOCM = function () {
	$.z().h4('First instance, without parameters')
	$.d().bCm('message-editor')
	$.h4('Second instance, passing parameters')
	$.dCm(
			'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
	)
	ko.applyBindings()
}
KOCM = function () {
	$.z().h4('First instance, without parameters')
	$.d().bCm('message-editor')
	$.h4('Second instance, passing parameters')
	$.dCm(
			'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
	)
	ko.applyBindings()
}
CM = function () {
	d = $.d().A($.hr(), 'hrrrr', $.hr())
	ko.r('test', {t: d[0], m: {a: 100, b: 'hello'}})
	$('<test>').A()
			.C('b').A('hello')
	$('<test>').A()
			.C('b').A('hel1')
	$('<test>').A()
			.C('b').A('hello2')
}
CMLDR = function () {
	$.tp("MyLsTp").A($.h3('spcl ls:'))
	$.ulE(
			"{ data: myItems, as: 'myItem' }"
	).A(
			$.li().A(
					$.h4('more my spc items'),
					$({
						tp: {nodes: $componentTemplateNodes, data: 'myItem'}
					})
			)
	)
	$.tg('MyLs').at('params', 'items: PEEP').A(
			'The person', $.emT('name'), 'is', $.emT('age'), 'years old.')
	ko.b({
		PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])
	})
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
	// Now curObsrvInst is either
	// observable1 or obsrv2//
	// and you would read its value with "curObsrvInst()"
	// 'params' is an object whose k/v pairs are the pams
	// passed from the cm bd or cust el.
	// - 'cmtInf.el'
	//  is the el the component is being//
	//  injected into. When createVM is called, the template has//
	//  already been injected into this el, but isn't yet bound.
	// - 'componentInfo.templateNodes'
	// is an array containing any DOM
	//   nodes that have been supplied to the component. See below.
	// Return the desired view model instance, e.g.:
}
CMNEWS = function () {
	$.x('y', 'news feed')
	//http://jsfiddle.net/rniemeyer/fssXE/
	$.qAP('nwsFd', 'vm', 'VM')
	$.qAP('nwsFd', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<nwsFd params="vm: feed"></nwsFd>').A()
	$('<nwsFd>').at('params', "vm: feed2").A()
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok(new VM())
	ok({
		ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}
	})
	vm.VM.ms("1")
	vm.VM2.ms("2")
}
WEBCM = function () {
	
	
	//instead of writing this:
	$.d().b('cmN', '{n:"flDeals", params:{from:"lhr",to:"sfo"}}'
	)
	//  <div data-bind='component: {
	// name: "flight-deals", params: { from: "lhr", to: "sfo" }
	// }'></div>
//… you can write:
	$('<FlDeals>')  //   < params='from: "lhr", to: "sfo"'></flight-deals>
}
KOCM = function () {
	$.x('b', 'First instance, without parameters')
	$.d().bCm('message-editor')
	$.h4('Second instance, passing parameters')
	$.dCm(
			'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
	)
	ko.applyBindings()
}
CMLDR = function () {
	$.tp("my-special-list-template").A(
			$.h3('Here is a special list')
	)
	$.ulE("{ data: myItems, as: 'myItem' }").A(
			$.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
	$.tg = function (a) {
		return $('<' + a + '>')
	}
	$.tg('my-special-list').at('params', 'items: PEEP')
			.A('The person', $.em().b('t', 'name'),
			'is', $.em().b('t', 'age'), 'years old.')
	ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
	// Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"
	// 'params' is an object whose k/v pairs are the pams
	// passed from the cm bd or cust el.
	// - 'cmtInf.el'
	// is the el the component is being//
	//  injected into. When createVM is called, the template has//
	//  already been injected into this el, but isn't yet bound.
	// - 'componentInfo.templateNodes'
	// is an array containing any DOM
	//   nodes that have been supplied to the component. See below.
	// Return the desired view model instance, e.g.:
}
 