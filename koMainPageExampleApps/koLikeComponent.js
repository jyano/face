LIKE = function () {
	function thumbUpLike() {
		THMB1 = function () {
			tmpl = $('<template>').A(
					$.d([$.d([$.b$('Like it', 'like'),
						$.b$('Dislike it', 'dislike')
					]).K("like-or-dislike").bVs("!val()"),
						$.d(['You   ', $.S().t$('val'), '   it..']).K('result').bVs('val')
					])
			)
			$.ul([$.li([$.sT('n'), $cm('like', 'val:op')
			]).K('prd')]).bE("prds")
			$.b$('+', 'add')
			ok({
				add: function () {
					this.prds.p(Prd(this.prdN()))
				},
				prdN: function () {
					return 'item-' + (_.z(this.prds()) + 1)
				},
				prds: $oa([{n: 'lick', op: $o()},
					{n: 'Garlic', op: $o()},
					{n: 'food', op: $o('like')},
					{n: 'gull', op: $o()}, {n: 'fun', op: $o()}])
			})
		}
		THMB11 = function () {
			$.ul([$.li([$.sp().t$('n'),
				$cO('like', 'val:op')
			]).K('prd')]).e$("prds")
			$.cl$('+', 'add')
			ok({
				add: function () {
					this.prds.p(Prd(this.prdN()))
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
			$ok = function (vm, appCtn) {
				z()
				$.app(appCtn)
				ok(F(vm) ? vm() : vm)
			}
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
		function Prd(name, op) {
			return {
				name: name,
				op: $o(op)
			}
		}
	}
	
	//   use  it as a custom element:
	$.ulE('prods').A($.li().K("prod").A(
			$.str().t$('n'),
			$('<like>').at('params', "value: uRating")
	))
	$.ul().b('e', 'products').A(
			$.li().K("prod").A(
					$.str().t$('n'),
					$('<like-or-dislike>').at('params', "value: uRating")
			)
	)
	$.bt('Add a product').b$('A')
	OK(new VM())
	OK({prods: [Prod('brd'), Prod('chc'), Prod('sgh', 'like')]})
	LIKE = function () {
		tp = $.d([
			$.d([
				$.bt('like it').b('$', 'like'),
				$.bt('dislike').b('$', 'dislike')
			]).K("like-or-dislike").at('data-bind', "visible: !chosenValue()"),
			$.d(['You',
				$('<strong>').b('t', "chosenValue"), 'it'
			]).K('result').at('data-bind', "visible: chosenValue")
		])
		$.ulE('products').A( // should i not pass in arr as 2nd pam to ulE
				$.li().K("product").A(
						$('strong').b('t', 'name'),
						$('like-widget ').at('params', 'value: userRating')))
		ok({
			products: [
				new Prod('Garlic'), new Prod('Pain'), new Prod('Seag', 'like') // This one was already 'liked'
			]
		})
	}
}