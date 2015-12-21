//https://vimeo.com/22686559
$.wg("aj.flb", {//filterable
	options: {k: ''},
	_create: function () {
		var wg = this, q = wg.element;
		wg.op = wg.options
		wg.flEls = q.ch()
		wg.flEls.K("ui-widget-content " + wg.op.k)
		wg.flIp = $.ip().iB(q).wr(
				"<div class='ui-widget-header " + wg.op.k + "'>"
		)
		wg._on(this.flEls, {
			mouseenter: "_hover",
			mouseleave: "_hover"
		})
		this._focusable(this.flIp)   // :toggles ui-state-focus
		// _hoverable works for ui-state-hover, but we will do something slighty different in our hover
		this._on(this.flIp, {"keyup": "filter"})
		this.timeout = false;
	},
	filter: function (e) {
		var wg = this
		// Debounce the keyup event with a timeout, using the specified delay
		_.cT(wg.timeout)
		wg.timeout = wg._delay(
				function () {
					var visible = this.flEls.filter(function () {
						var q = $(this)
						var re = new RegExp(
										wg.flIp.val(),
										"i"),
								matches = re.test(q.text())
						q.tK("ui-helper-hidden", !matches)
						return matches;
					})
					// Trigger a callback so the user
					// can respond to filtering being complete
					// Supply  an object of useful
					// parameters with the second argument to _trigger
					this._trigger("filtered", event, {visible: visible})
				},
				this.op.delay);
	},
	_hover: function (e) {
		var q = $(e.target)
		q.tK("ui-state-active", e.type === "mouseenter")
		this._trigger("hover", e, {hovered: q})
	},
	_setOption: function (k, v) {
		switch (k) {
			case "length":
				break;
		}
		return this._superApply(arguments)
	},
	_destroy: function () {
		var wg = this
		wg.flIp.parent().rm()// Remove any new elements that you created
		wg.flEls.rK(
				"ui-widget-content ui-helper-hidden ui-state-active " +
				wg.op.k) // Remove classes you applied
		return wt._super()
	}
})


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
	$('<div>').id('reg').A(
			'One pound of each would cost',
			$.sp().id('total')
	)
	total = $("#total")
	cheeses = $("#cheeses")
	reg = $("#reg")
	price = $("<span>")
	$.bt('activate', function () {
		if (cheeses.is(":aj-flb")) {
			alert('cheese is!')
			return cheeses.flb("destroy")
		}
		cheeses.flb({
			k: "cheese",
			create: function () {
				reg.K("ui-widget-header cheese").sh()
			},
			filtered: function (e, ui) {
				var t = 0
				ui.visible.each(function () {
					t += _.pF($(this).da("price"))
				})
				total.text(t.toFixed(2))
			},
			setOption: function (e, ui) {
				ui.option === "k" && reg.tK([ui.original, ui.current].join(" "));
			},
			hover: function (e, ui) {
				if (e.originalEvent.type === "mouseenter") {
					price.text(" - " + ui.hovered.data("price") + " per lb").appendTo(ui.hovered);
				} else {
					price.detach();
				}
			}
		})
		cheeses.on("flbdestroy", function (e, ui) {
			reg.rK("ui-widget-header " + ui.op.k).hd()
		})
		cheeses.flb("filter")
		_.in(3, function () {
			$.C('r')
			cheeses.flb("option", "k", "cheesePlease")
		})
	}).button({icons: {primary: "ui-icon-search"}})
}