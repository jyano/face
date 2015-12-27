KOSCR = function () {// SCRIPTING??!
	$.A($.scrp('tt').A($.h1('afsdfds')),
			$.d().t$("{name:'tt'}"))
	// kob= ko.observable.prototype; kob.rm= kob.remove
	ok({})
}
KOSCR = function () {
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')),
			$.d().t$("{name:'tt'}")
	)
	ok({})
}
KOSCR = function () {
	KOTEMP = function () {
		$.format()
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
		$.B().A(
				scrp('tt').A($.h1('afsdfds')
				),
				$.d().b('T', "{name:'tt'}")
		)
		ok({})
	}
//
//1 parameter: object that you want to use as the context for binding descendant elements.
//    If the expression you supply evaluates to null or undefined,
// descendant elements will not be bound at all,
// but will instead be removed from the document.
//    If the expression you supply involves any observable values,
// the expression will be re-evaluated whenever any of those observables change.
// Then, descendant elements will be cleared out,
// and a new copy of the markup will be added to your document and
// bound in the context of the new evaluation result.
//Note 1: Using “with” without a container element
//Just like other control flow elements such as if and foreach,
// you can use with without any container element to host it.
// This is useful if you need to use with in a place where
// it would not be legal to introduce a new container element just
// to hold the with binding.
//<ul>
//<li>Header element</li>
//<!-- ko with: outboundFlight -->
//...
//<!-- /ko -->
//<!-- ko with: inboundFlight -->
//...
//<!-- /ko -->
//</ul>
//The <!-- ko --> and <!-- /ko --> comments act as start/end markers, defining a “virtual element” that contains the markup inside. Knockout understands this virtual element syntax and binds as if you had a real container element.
	KOC = function () {
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().t$("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().t$('title')),
				$.scrp('details').A(
						$.d([$.h2().t$('title'), $.p().t$('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().v$('title'), $.br(), $.ip().v$('content')])
		)
		ko.b({
			articles: [
				{id: 1, title: "Article One", content: "Content for article one."},
				{id: 2, title: "Article Two", content: "Content for article two."},
				{id: 3, title: "Article Three", content: "Content for article three."}
			],
			selectedView: ko.o("summary"),
			selectedArticle: ko.o(),
			templateToUse: function (i) {
				return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
			}
		})
	}
	$.bd().A(
			$.scrp('tt')
					.A($.h1('afsdfds')),
			$.d().t$("{name:'tt'}")
	);
	ok({})
}