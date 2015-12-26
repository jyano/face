ko.rg('nwsFd', {
	m: function (p) {
		this.vm = p.vm
	}
	//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
	//, t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
})
ko.rg('myCm', VM)
ko.rg('myCm', {
	m: {
		createVM: function (p, cmInf) {
			return new VM(p)
		}
	},
	t: '#d'
})
ko.rg('msgEd', {
	m: function (p) {
		this.t = ko.o(p && p.initT || '')
	},
	t: $.d([
		'Ms:',
		$.ip().v$('t'),
		'(len:', $.spT('t().length'), ')'
	])
})
ko.rg('message-editor', {
	viewModel: function (params) {
		this.text = ko.o(params && params.initialText || '')
	},
	template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
}) 
ko.rg('MyLs', {
	t: {el: 'MyLs-template'},
	m: function (p) {
		this.myItems = p.items
	}
}) 
ko.rg('like', {//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
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
ko.rg('like-widget', {
	viewModel: function (pams) {
		this.chosenValue = pams.value
		this.like = function () {
			this.chosenValue('like')
		}.bind(this)
		this.dislike = function () {
			this.chosenValue('dislike')
		}.bind(this) // i didnt overwrite bind did i?
	},
	template: tp
})
ko.r('my-cm', VM)
ko.r('my-cm', {
	m: {
		createVM: function (p, cmInf) {
			return new VM(p)
		}
	},
	t: '#d'
})
ko.r('message-editor', {
	m: function (p) {
		this.t = ko.o(p && p.initialText || '')
	},
	t: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')'])
})
ko.r('my-special-list', {
	t: {el: 'my-special-list-template'},
	m: function (p) {
		this.myItems = p.items
	}
})
ko.r('news-feed', {
	m: function (p) {
		this.vm = p.vm
	}
})
ko.r('news-feed', {
	m: function (p) {
		this.vm = p.vm
	},
	t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
})
ko.r("news-feed", {
	m: function (p) {
		this.vm = p.vm
	},
	t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
})
ko.r('my-cm', VM)
ko.r('my-cm', {
	m: {
		createVM: function (p, cmInf) {
			return new VM(p)
		}
	},
	t: '#d'
})
ko.r('message-editor', {
	m: function (p) {
		this.t = ko.o(p && p.initialText || '')
	},
	t: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')'])
})
ko.r('my-special-list', {
	t: {el: 'my-special-list-template'},
	m: function (p) {
		this.myItems = p.items
	}
})
ko.r('news-feed', {
	m: function (p) {
		this.vm = p.vm
	}
})
ko.r('news-feed', {
	m: function (p) {
		this.vm = p.vm
	},
	t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
})
ko.r("news-feed", {
	m: function (p) {
		this.vm = p.vm
	},
	t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
})
ko.r('test', {
	t: el, m: {a: 100, b: 'hello'}
})
$Cm('like', tmpl.ch(0).h(), function (pams) {
	var vm = this
	this.val = pams.val
	this.like = function () {
		vm.val('like')
	}
	this.dislike = function () {
		vm.val('dislike')
	}
})
$Cm('like', $.sp([ //can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()]
			$.d([
				$.cl$('Like it', 'like'),
				$.cl$('Dislike it', 'dislike')
			]).vs$("!val()").K("like-or-dislike"),
			$.d([
				'You   ',
				$.S().t$('val'), '   it..'
			]).K('result').vs$('val')
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