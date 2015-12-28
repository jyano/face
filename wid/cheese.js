//flilterbale?
SLIDES = function () {
	$Ms('SLIDES')
	$.ul([
		$.li('asdf').data('price', '23.23'),
		$.li('bsdf').data('price', '2.23'),
		$.li('xsdf').data('price', '213.23'),
		$.li('dsdf').data('price', '233'),
		$.li('asdf').data('price', '3.23')
	]).id('cheeses')
	
	$.dI('reg')
			.A('One pound of each would cost',
			$.sp().id('total')
	)
	
	total = $("#total")
	cheeses = $("#cheeses")
	reg = $("#reg")
	
	price = $.sp()
	
	
	$.bt('activate', function () {
		if (cheeses.is(":aj-flb")) {
			alert('cheese is!')
			return cheeses.flb("destroy")
		}
	
		
		cheeses.flb({
			k: "cheese",
			create: function () {reg.K("ui-widget-header cheese").sh()},
			filtered: function (ev, ui) {var t = 0
				ui.visible.each(function () {t += _.pF($(this).da("price"))})
				total.T( t.toFixed(2))
			},
			
			setOption: function (e, ui) {ui.option === "k" && reg.tK([ui.original, ui.current].join(' '))},
			hover: function (e, ui) {
				if (e.originalEvent.type === "mouseenter") {price.text(" - " + ui.hovered.data("price") + " per lb").a2(ui.hovered)}
				else {price.detach()}
			}
		})
		
		
		cheeses.on("flbdestroy", function (e, ui) {reg.rK("ui-widget-header " + ui.op.k).hd()})
		
		cheeses.flb("filter")
		
		_.in(3, function () {$.C('r')
			cheeses.flb("option", "k", "cheesePlease")
		})
		
		
		
	}).button({
		icons: {primary: "ui-icon-search"}
	})
	
	
}
// book, movement: pleasurable js (or javascript for pleasure)
