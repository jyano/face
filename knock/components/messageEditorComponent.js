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
   