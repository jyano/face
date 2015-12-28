KOFL = function () {
	
	//filter the items using the filter text
	vm.filteredItems = ko.c(function () {
		var t = this, fl
		fl = t.filter().toLowerCase()
		if (!fl) {
			return t.items();
		}
		else {
			return ko.utils.arrayFilter(t.items(),
					function (it) {
						return ko.utils.stringStartsWith(
								it.name().toLowerCase(), fl)
					})
		}
	}, vm)
}//???
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
LIST = function () {
	$.x('z')
	f = $.f().A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
	f.bSb('addItem')
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
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
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
}
KOOA = function () {
	$.x()
	OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
	$.dE('peep', [$.p(
			$.spT('f'), ' ', $.spT('l')
	)])
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD = function () {
	$.x('x', 'course')
	OK({
		cl: $oa(),
		a: function () {
			this.cl.p({
				n: 'j', c: $r()
			})
			return this
		}
	})
	$.s$('a', 'play'); //the order of these mets should reverse
	$.U('cl', [
		'name is ', $.sT('n'), ' and gusta ', $.sT('c')
	])
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
DELETE = function () {
	$.x()
//bind bt 'click' to parent.rem
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
ROOT = function () {
	$.x('x')
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	ok({
		fs: ['I', 'A', 'Se', 'Sp'],
		chFI: ko.o(),
		gtf: function (f) {
			$l('click: ' + 'f: ' + f + ', this: ' + this)
			f = f || 'frog'
			vm.chFI(f)
		}
	})
}
BARN = function () {
	$.x()
	$.ulE('PL', [$.li([
		$.sp('Planet: '),
		$.b().bT('n'),
		$.dI('cap', [$.pT('cap.n')])
	])])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}
workss()
function workss() {
	each()
	function each() { 
	}
}