$.fn.cm$  = function (s) {
//= $.fn.cmp$ = $.fn.bCm
	return this.b('component', s)
}
_$cm = function (n, pam) {
	return $('<' + n + ' params = ' + (pam || '') + ' >')
}//=OK
ko.component$ = ko.$ = function (n, b) {
	var g = G(arguments), o,
			n = _.tL(n)
	return !b ? _.p(_$cm, n) :
			_$cm(n, O(b) ?
					ob2s(b) : b)
	function ob2s(ob) {
		ob = ob || {};
		var o = []
		_.e(ob, function (v, k) {
			o.push(k + ':' + v)
		})
		return o.join()
	}
}//=$$$
ko.cm = ko.cmp = ko.comp = ko.components
ko.cm.rg = ko.cm.reg = ko.cm.register
ko.cm.iR = ko.cm.isRegistered
ko.r = ko.rg = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
	ko.r = ko.rg = ko.cm.rg = ko.cm.reg = function () {
		var g = G(arguments), o
		o = {n: g.f, op: g.s}
		o.op = o.op || {}
		if (!o.op.viewModel) {
			//op.viewModel = op.vm || op.m
			if (op.vm) {
				op.viewModel = op.vm
			}
			else if (op.m) {
				op.viewModel = op.m
			}
		}
		if (S(o.op.viewModel) || (
				O(o.op.viewModel) && !o.op.viewModel.element  )) {
			o.op.viewModel = {element: o.op.viewModel}
		}
		o.op.viewModel = o.op.viewModel || {vm: o.op}
		if (!op.template) {
			if (op.tp) {
				op.template = op.tp
			}
			else if (op.t) {
				op.template = op.t
			}
		}
		cm = ko.cm.reg(o.n, o.op)
		return cm
	}
}
ko._ = function (a, t, m) {
	var g = G(arguments),
			ob = {
				t: $('<template>').A($.d(A(t) ? t : g)).ch(0).h(),
				m: m
			}
	ob.template = ob.template || ob.t
	ob.viewModel = ob.viewModel || ob.vm || ob.m
	return ko.rg(_.tL(a), ob)
}

 
ko.rg('myCm', { // ??? alt:ko._('myCm', { ????
	m: {createVM: function (p, cmInf) {return new VM(p)}},
	t: '#d'
})

bindingAsCustElSyntax= function () {
	//For example, instead of writing this:
	$.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
	//  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:
	$('<flight-deals>')
	//   < params='from: "lhr", to: "sfo"'></flight-deals>
}
 
  
 CUSTOMBINDINGTEST = REGISTERTEST=  function () {
	d = $.d().A($.hr(), 'hrrrr', $.hr())
	ko.rg('test', {t: d[0], m: {a: 100, b: 'hello'}})
	q = $.d([$.hr(), 'cm cm cm', $.hr()]).C('b')
	el = q[0]
	$('<test>').A()
			.C('b').A('hello')
	$('<test>').A()
			.C('b').A('hel1')
	$('<test>').A()
			.C('b').A('hello2')
}
NEWSFEEDCOMPONENT = CMNEWS = function () {
	//http://jsfiddle.net/rniemeyer/fssXE/
	ko.rg('nwsFd', {//'news-feed'
		m: function (p) {
			this.vm = p.vm
		},
		//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
		//, t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
		t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
	})
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
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
	vm.VM.ms("1");
	vm.VM2.ms("2")
}
MESSAGE_EDITOR_COMPONENT = KOCM = function () {
	ko.rg('msgEd', {
		//'message-editor'
		viewModel: function (params) {
			this.t = this.text = $o(params && params.initialText || '')
		},
		template: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')']),
		// 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		m: function (p) {
			this.t = ko.o(p && p.initT || '')
		},
		t: $.d([
			'Ms:',
			$.ip().v$('t'),
			'(len:', $.spT('t().length'), ')'
		])
	})
	$.z().h4('First instance, without parameters')
	$.d().cm$('msgEd')
	$.h4('Second instance, passing parameters')
	$.d().cm$('component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}')
	ok()
	function alt() {
		DIKE = function () {
			ko._('message-editor', [
						'Message:',
						$.ip().bV('text'),
						'( length: ',
						$.spT('text().length'), ' )'],
					function (p) {
						this.text = $o('wow')
					})
			$.d().A(
//         ko.$('message-editor', {text:'text'}), ko.$('message-editor', {text:'text'}) ,
					//$.sp('First instance, without parameters'),
					ko.$('message-editor'),
					//  $.h4('Second instance, passing parameters'),
					ko.$('message-editor', {text: 'Hello, world!'})
			)
			ok({text: $o('wow')})
		}
		MSEDTR = function () {
			z() // ex: declares a component, injects two instances of it into a view
			ko._('message-editor', tmpl, function (p) {
				this.text = $o(p.text || 'happy')
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
	}
}
LIKECOMPONENT = LIKE = function () {
	Prd = function (name, op) {
		return {
			name: name,
			op: $o(op)
		}
	}
	ko.rg('like', {
		viewModel: function (pams) {
			this.chosenValue = pams.value
			this.like = function () {
				this.chosenValue('like')
			}.bind(this)
			this.dislike = function () {
				this.chosenValue('dislike')
			}.bind(this) // i didnt overwrite bind did i?
		},
		template: tp,
		alt: function () {
			ko.rg('like1', {
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//   reg  is optional, comp def specs vm, tp
				model: function (o) {
					var cm = this
					cm.chosenValue = o.value   // Data: v is null|'like'|'dislike'
					cm.like = function () {
						cm.chosenValue('like')
					}
					cm.dislike = function () {
						cm.chosenValue('dislike')
					}
				},
				template: $.sp().A(
						$.dK("like-or-dislike").vs$('!chosenValue()').A(
								$.bt('like it').ch$('like'),
								$.bt('Dislike it').ch$('dislike')
						),
						$.dK('result').vs$('chosenValue').A(
								'You', $.str().t$('chosenValue'), 'it'
						)
				)
			})
		},
		alpha: function () {
			$Cm('like', tmpl.ch(0).h(),
					function (pams) {
						var vm = this
						this.val = pams.val
						this.like = function () {
							vm.val('like')
						}
						this.dislike = function () {
							vm.val('dislike')
						}
					})
			$Cm('like', $.sp([
				//can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()]
				$.d([$.cb('Like it').cl$('like'), $.cb('Dislike it').cl$('dislike')]).vs$("!val()").K("like-or-dislike"),
				$.d(['You   ', $.S().t$('val'), '   it..']).K('result').vs$('val')
			]), function (pams) {
				var vm = this
				vm.val = pams.val
				vm.like = function () {
					vm.val('like')
				}
				vm.dislike = function () {
					vm.val('dislike')
				}
			})
		}
	})
	tp = $.d([
		$.d([
			$.bt('like it').b('$', 'like'),
			$.bt('dislike').b('$', 'dislike')
		]).K("like-or-dislike").at('data-bind', "visible: !chosenValue()"),
		$.d(['You',
			$('<strong>').b('t', "chosenValue"), 'it'
		]).K('result').at('data-bind', "visible: chosenValue")
	])
	$.ul().e$('products').A( // should i not pass in arr as 2nd pam to ulE
			$.li().K("product").A(
					$('strong').t$('name'),
					$('like-widget ').at('params', 'value: userRating'))
	)
	ok({
		prods: $oA([
			new Prod('Garlic'),
			new Prod('Pain'),
			new Prod('Seag', 'like') // This one was already 'liked'
		])
	})
	function alt() {
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
//   use  it as a custom element:
		LIKE = function () {
			$.ul().e$('prods').A(
					$.li().K("prod").A(
							$.str().t$('n'),
							$('<like>').at('params', "value: uRating"))
			)
			$.bt('Add a product').cl$('A')
			//OK(new VM())
			ok({
				prods: $oA([
					Prod('brd'),
					Prod('chc'),
					Prod('sgh', 'like')
				])
			})
		}
		THMB1 = function () {
			tmpl = $('<template>').A(
					$.d([$.d([$.b$('Like it', 'like'),
						$.b$('Dislike it', 'dislike')
					]).K("like-or-dislike").bVs("!val()"),
						$.d(['You   ', $.S().t$('val'), '   it..']).K('result').bVs('val')
					])
			)
			$.ul([$.li([$.sT('n'), $cm('like', 'val:op')
			]).K('prd')]).e$("prds")
			$.b$('+', 'add')
			ok({
				add: function () {
					this.prds.push(Prod(this.prdN()))
				},
				prdN: function () {
					return 'item-' + (_.s(this.prds()) + 1)
				},
				prds: $oA([
					{n: 'lick', op: $o()},
					{n: 'Garlic', op: $o()},
					{n: 'food', op: $o('like')},
					{n: 'gull', op: $o()}, {n: 'fun', op: $o()}
				])
			})
		}
		THMB11 = function () {
			$.ul([$.li([
				$.sp().t$('n'), $.cb('like').o$('val:op')
			]).K('prd')]).e$("prds")
			$.cl$('+', 'add')
			ok({
				add: function () {
					this.prds.p(Prod(this.prdN()))
				},
				prdN: function () {
					return 'item-' + (_.z(this.prds()) + 1)
				},
				prds: $oa([{n: 'liiick', op: $o()},
					{n: 'Garlic', op: $o()},
					{n: 'food', op: $o('like')},
					{n: 'gull', op: $o()}, {n: 'fun', op: $o()}])
			})
		}
		THMBALPHA = function () {
			$ok({
				prds: $oa([
					{n: 'liiick', op: $o()}, {n: 'Garlic', op: $o()}, {n: 'food', op: $o('like')},
					{n: 'gull', op: $o()}, {n: 'fun', op: $o()}]),
				add: function () {
					this.prds.push({
						name: 'item-' +
						(_.s(this.prds()) + 1)
					})
				}
			}, [
				$.u().e$("prds").A(
						$.sp().t$('name'),
						OK('like', 'val:op')),
				$.bt('+').cl$('add')
			])
		}
	}
} 
function betterListCompo(){
	List = Lst = function () {
		var lst = this
		lst.tA = $o('')
		lst.all = $oA(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
		lst.sl = $oA(['Hm'])
		lst.A = function () {
			var lst = this
			if (lst.tA() != '' && lst.all.indexOf(lst.tA()) < 0) {
				lst.all.push(lst.tA())
				lst.tA('')
			}
		}
		lst.xSl = function () {
			var lst = this
			lst.all.removeAll(lst.sl())
			lst.sl([])
		}
		lst.srt = function () {
			this.all.sort()
		}
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
	}
	ko.rg('MyLs', {
		t: {el: 'MyLs-template'},
		m: function (p) {
			this.myItems = p.items
		}
		/*
		 ko.rg('my-special-list', {
		 t: {el: 'my-special-list-template'},
		 m: function (p) {
		 this.myItems = p.items
		 }
		 }) 
		 */
	})
	LIST = CMLDR = function () {
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
	}
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
	CMLDR = function () {
		$.tp("my-special-list-template").A(
				$.h3('Here is a special list')
		)
		$.ulE("{ data: myItems, as: 'myItem' }").A(
				$.li().A($.h4('Here is another one of my special items'),
						$("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
		$.tg('my-special-list').at('params', 'items: PEEP')
				.A('The person', $.em().b('t', 'name'),
				'is', $.em().b('t', 'age'), 'years old.')
		ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
	}
	$.tg = function (a) {
		return $('<' + a + '>')
	}
//sort, remove
	BTRLST1 = function () {
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		$b(new Lst())
	}
	Lst = function () {
		this.tA = $o('')
		this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
		this.sl = $oa(['Hm'])
		this.A = function () {
			if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
				this.all.push(this.tA())
				this.tA('')
			}
		}
		this.A = function () {
			if (this.tA() &&
					this.all.indexOf(this.tA()) < 0
			) {
				this.all.push(this.tA())
				this.tA('')
			}
		}
		this.xSl = function () {
			this.all.removeAll(this.sl())
			this.sl([])
		}
		this.srt = function () {
			this.all.sort()
		}
		this.xSl = function () {
			this.all.removeAll(this.sl())
			this.sl([])
		}
		this.srt = function () {
			this.all.sort()
		}
	}
	BTRLST = function () {
		f = $.fSb('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').bEn('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
	}
	LST = EACHS = SELLISTMISC = function () {
		$.d().A($.fo().b('S', 'addItem')(
						$.sp('add item'),
						$.ip().b({
							v: 'itemToAdd'//,vu:'afterkeydown'
						}),
						$.sm('add').e$('itemToAdd().length>0')),
				$.d().A($.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok(o = BLM())
		form = f = $.f()
		form.sm$('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').en$('itemToAdd().length>0'))
		$.d().A(form,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems', sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		f = $.f().A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sm('add').en$('itemToAdd().length>0')
		)
		f.sm$('addItem')
		$.d().A(f, $.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							sO: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		f = $.fo().sm$('A', ['Add:',
			$.ip().v$('tA'),
			$.sb('Add').en$('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({
				$: 'srt',
				en: 'all().length > 1'
			})
		])
		ok(new Lst())
		//sort, remove
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		f = $.fSm('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').en$('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		ok(new Lst())
		f = $.f()
		f.bSb('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').e$('itemToAdd().length>0')
		)
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
		ok(new Lst())
	}
}
function somethingCalledBindingProvider(){
	ko.bP = ko.bindingProvider;
	ko.bP.inst = ko.bP.i = ko.bP.instance
	ko.bindingProvider.instance.preprocessNode = function (node) {
		// Only react if this is a comment node of the form <!-- template: ... -->
		if (node.nodeType == 8) {
			var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
			if (match) {
				// Create a pair of comments to replace the single comment
				var c1 = document.createComment("ko " + match[1]),
						c2 = document.createComment("/ko");
				node.parentNode.insertBefore(c1, node);
				node.parentNode.replaceChild(c2, node);
				// Tell Knockout about the new nodes so that it can apply bindings to them
				return [c1, c2];
			}
		}
	}
	function compoPreprocess() {
		ko.bP.inst.ppsN = function (node) {
			ko.bP.inst.ppN = ko.bP.inst.preprocessNode
			ko.bP.inst.ppN = function (node) {
				// Only react if this is a comment node of the form <!-- template: ... -->
				if (node.nodeType == 8) {
					var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
					if (match) {
						// Create a pair of comments to replace the single comment
						var c1 = document.createComment("ko " + match[1]),
								c2 = document.createComment("/ko");
						node.parentNode.insertBefore(c1, node);
						node.parentNode.replaceChild(c2, node);
						// Tell Knockout about the new nodes so that it can apply bindings to them
						return [c1, c2];
					}
				}
			}
			// Only react if this is a comment node of the form <!-- template: ... -->
			if (node.nodeType == 8) {
				var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
				if (match) {
					// Create a pair of comments to replace the single comment
					var c1 = document.createComment("ko " + match[1]),
							c2 = document.createComment("/ko");
					node.parentNode.insertBefore(c1, node);
					node.parentNode.replaceChild(c2, node);
					// Tell Knockout about the new nodes so that it can apply bindings to them
					return [c1, c2];
				}
			}
		}
		ko.bindingProvider.instance.preprocessNode = function (node) {
			// Only react if this is a comment node of the form <!-- template: ... -->
			if (node.nodeType == 8) {
				var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
				if (match) {
					// Create a pair of comments to replace the single comment
					var c1 = document.createComment("ko " + match[1]),
							c2 = document.createComment("/ko");
					node.parentNode.insertBefore(c1, node);
					node.parentNode.replaceChild(c2, node);
					// Tell Knockout about the new nodes so that it can apply bindings to them
					return [c1, c2];
				}
			}
		}
		ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
			ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
				tgNLower = nd.tagName && nd.tagName.toLowerCase()
				return ko.cm.iR(tgNLower) ? tgNLower : tgNLower === "special-el" ? "MyCm" : null
				// If the el's name matches a reg-ed cm, use that cmt
				// For the el <special-el>, use the component
				// "MySpecialComponent" (whether or not it was preregistered)
				// Treat anything else as not representing a component
				ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
					tgN = nd.tagName && _.tL(nd.tagName)
					return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
					// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
					// use cm "MySpecialComponent" (regardless if pre-regd)
					// Treat anything else as !repg a cm
				}
			}
			tgN = nd.tagName && _.tL(nd.tagName)
			return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
			// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
			// use cm "MySpecialComponent" (regardless if pre-regd)
			// Treat anything else as !repg a cm
		}
	}
}
function raw() {
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
	/*
	 MARKUP=function(){z()
	
	
	 //Sometimes you may want to create a component that receives
	 // markup and uses it as part of its output.
	 //    Consider a special list component that can be invoked as follows:
	
	 ok.$('my-special-list', {items: someArrayOfPeople}).A(//$("<!-- Look, Im putting markup inside a custom element -->"),
	 'The person' ,
	 $.em().bT('name'), $.em().bT('age') , 'years old.')
	
	
	 $('<template>').id("my-special-list-template").A(
	 $.h3('Here is a special list'),
	 $.uE("{ data: myItems, as: 'myItem' }").A(
	
	 $.li().A(
	 $.h4('Here is another one of my special items'),
	 // '<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->'))
	 ok.$('my-special-list',{items:'someArrayOfPeople'}).A(
	 //'<!-- Look, I'm putting markup inside a custom element -->',
	 'The person', $.em().bT('name'),  'is', $.em().bT('age'),'years old.'))
	 )
	
	 ko._('my-special-list', {
	 t: { element: 'my-special-list-template' },
	 m: function(params) {this.myItems = params.items}
	 })
	
	 ok({
	 someArrayOfPeople: ko.observableArray([
	 { name: 'Lewis', age: 56 },
	 { name: 'Hathaway', age: 34 }
	 ])
	 })
	
	 //This “special list” example does nothing more than insert a
	 // heading above each list item. But the same technique
	 // can be used to create sophisticated grids, dialogs, tab sets, and so on,
	 // since all that is needed for such UI elements is common UI markup
	 // (e.g., to define the grid or dialog’s heading and borders) wrapped around arbitrary supplied markup.
	 //
	 //    This technique is also possible when using components without
	 // custom elements, i.e., passing markup when using the component binding directly.
	 }
	 CUSTTAGNAMES=function(){
	 z()
	
	 //    If you want to have different custom element tag names,
	 // you can override getComponentNameForNode to control this. For example,
	 //
	 ko.cm.getComponentNameForNode = function(node) {
	
	 var tagNameLower = node.tagName && _.tL(node.tagName)
	 if (ko.cm.iR(tagNameLower)) {return tagNameLower}         // If the element's name exactly matches a preregistered// component, use that component
	 else if (tagNameLower === "special-element") { return "MySpecialComponent"}// For the element <special-element>, use the component// "MySpecialComponent" (whether or not it was preregistered)
	 else {return null; }// Treat anything else as not representing a component
	 }
	
	 //You can use this technique if, for example, you want to control which subset of
	 // registered components may be used as custom elements.
	 //
	 ko.$('my-custom-element', { })//No config needed
	
	 //Alternatively, you can override getComponentNameForNode to control
	 // dynamically which elements map to which component names,
	 // independently of preregistration.
	 }
	 COMBINE=function() {
	
	 //    Note: Combining custom elements with regular bindings
	 //A custom element can have a regular data-bind attribute
	 // (in addition to any params attribute)
	 ko.$('products-list', {category: 'chosenCategory'}).bVs('shouldShowProducts')
	
	
	 //However, it does not make sense to use bindings that would modify
	 // the element’s contents, such as the text or template bindings,
	 // since they would overwrite the template injected by your component.
	 //
	 //    Knockout will prevent the use of any bindings that use
	 // controlsDescendantBindings, because this also would clash
	 // with the component when trying to bind its viewmodel to
	 // the injected template. Therefore if you want to use a control
	 // flow binding such as if or foreach, then you must wrap it around
	 // your custom element rather than using it directly on the custom element, e.g.,:
	 //
	
	 //$("<!-- ko if: someCondition --><products-list></products-list> <!-- /ko -->")
	
	 //or:
	 $.ulE('allProducts').A(ko.$('product-details', {product: '$data'}))
	
	 //Note: Custom elements cannot be self-closing
	 //You must write <my-custom-element></my-custom-element>,
	 // and not <my-custom-element />. Otherwise, your custom element is not closed and subsequent elements will be parsed as child elements.
	 //    This is a limitation of the HTML specification and is outside the scope of what Knockout can control.
	 // HTML parsers, following the HTML specification, ignore any self-closing slashes (except on a small number of special “foreign elements”, which are hardcoded into the parser). HTML is not the same as XML.
	
	 }
	 RAMPAMS=function() {
	 z()
	
	
	 //Advanced: Accessing $raw parameters
	 //Consider the following unusual case, in which useObservable1, observable1, and observable2 are all observables:
	
	 ok.$('some-component', {
	 myExpr: 'useObservable1() ? observable1 : observable2'
	 })
	 //Since evaluating myExpr involves reading an observable (useObservable1), KO will supply the parameter to the component as a computed property.
	 //
	 //    However, the value of the computed property is itself an observable. This would seem to lead to an awkward scenario, where reading its current value would involve double-unwrapping (i.e., params.myExpr()(), where the first parentheses give the value of the expression, and the second give the value of the resulting observable instance).
	 //
	 //This double-unwrapping would be ugly, inconvenient, and unexpected, so Knockout automatically sets up the generated computed property (params.myExpr) to unwrap its value for you. That is, the component can read params.myExpr() to get the value of whichever observable has been selected (observable1 or observable2), without the need for double-unwrapping.
	 //
	 //    In the unlikely event that you don’t want the automatic unwrapping, because you want to access the observable1/observable2 instances directly, you can read values from params.$raw. For example,
	 //
	 function MyComponentViewModel(p) {
	 var currentObservableInstance = p.$raw.myExpr();
	 }
	
	 // Now currentObservableInstance is either observable1 or observable2
	 // and you would read its value with "currentObservableInstance()"
	 //This should be a very unusual scenario,
	 // so normally you will not need to work with $raw.
	 }
	 */
}