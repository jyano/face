// FROM THIS AMAZING VIDEO (not on youtube): https://vimeo.com/22686559


$.wg("aj.flb", {//filterable
	
	options: {k: ''},
	
	_create: create,
	
	
	_hover: function (e) {
		var q = $(e.target)
		q.tK("ui-state-active", 
		e.type === "mouseenter")
		this._trigger("hover", e, {hovered: q})
	},
	
	
	_setOption: function (k, v) {var g=G(arguments)
		switch (k) {case "length":break}
		return this._superApply(g)
	},
	
	
	_destroy: function () {
		var wg = this
		wg.flIp.parent().rm()// Remove any new elements that you created
		wg.flEls.rK(
				"ui-widget-content ui-helper-hidden ui-state-active " +
				wg.op.k) // Remove classes you applied
		return wt._super()
	}, 
	
	
	
	filter: function filt(e) {
		var wg = this
		 
		// Debounce the keyup event with a timeout, using the specified delay
		
		_.cT(wg.timeout)
		
		wg.timeout = wg._delay(
		
				function () {
					
					// Trigger a callback so the user
					// can respond to filtering being complete
					// Supply  an object of useful
					// parameters with the second argument to _trigger
					
					this._trigger("filtered", event, {
					
						visible: this.filterEls.filter(function () {
						
							var q = $(this)
						
							var matches = $REi( wg.filterIp.val() ).test(  q.text()  ) 
							
							q.tK("ui-helper-hidden", !matches)
							
							return matches
						})
					})
				},
				
				op.delay
		)
	}

})



function create() {var wg = this, q = wg.element,  op = wg.options
	q.ch().K("ui-widget-content " +  op.k)
	wg.filterIp  = $.ip().iBf(q).wr( $.dK('ui-widget-header',op.k)  )
	wg.timeout = false
	wg._on(q.ch(), {
		mouseenter: "_hover",
		mouseleave: "_hover"
	})
	
	this._focusable(ip)   // :toggles ui-state-focus
	// _hoverable works for ui-state-hover,
	// but we will do something slighty different in our hover
	
	this._on(ip, {
		keyup: "filter"
	})
	
}

$RE=function(rx, flags){
	return new RegExp(rx, flags)
}
$REi = function (rx) {
	return new RegExp(rx, 'i')
}
 