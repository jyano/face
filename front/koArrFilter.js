 
 
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}
 
	KOFLM = function () {
		$.z('x')
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
				$.li().A(d,
						$.dI('box').css('display', 'none').A(
								$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
				),
				$.li().bT('matterTitle'),
				$.li().bT('matterComment')
		)))
	}
