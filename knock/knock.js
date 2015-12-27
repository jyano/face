$L('sty', 'html', 'attr', 'text', 'value', 'focus', 'iff',
		'able', 'visib', 'textIp', 'click', 'checked',
		'select', 'checkedApps', 'selApps')
$.fn.h$ = function (s) {
	//= $.fn.bH 
	return this.b('html', s)
	// = $.fn.bH
}
$.fn.t$ = function (bnd) {
	return this.b('text', bnd || '$data')
}
$.fn.at$ = $.fn.a$ = function (s) {
	return this.b('attr', s)
}
$.fn.v$ = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.fc$ = $.fn.f$ = function (s) {
	return this.b('hasFocus', s)
}
$.fn.if$ = function (s) {
	return this.b('if', s)
	// = $.fn.bI = $.fn.bIf
}
$.fn.n$ = $.fn.not$ = function (s) {
	return this.b('ifnot', s)
}
$.fn.en$ = function (s) {
	return this.b('enable', s)
}
$.fn.d$ = function (s) {
	return this.b('disable', s)
}
$.fn.vs$ = function (bnd) {
	return this.b('visible', bnd)
}
$.fn.w$ = function (s) {
	return this.b('with', s)
}
$.fn.cl$ = $.fn.b$ = function (s) {
	return this.b('click', s)
}
$.fn.ev$ = function (s) {
	return this.b('event', s)
}
$.fn.ch$ = function (bnd) {
	return this.b('checked', bnd)
}
$.fn.tI$ = function (s) {
	return this.b('textInput', s)
}
$.fn.st$ = function (s) {
	return this.b('style', s)
}
$.fn.css$ = function (s) {
	//= $.fn.bS
	return this.b('css', s)
}
$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
	return this.b('options', s)
}
$.fn.sO$ = $.fn.bSO = function (s) {
	return this.b('selectedOptions', s)
}
$.fn.sm$ = function (s) {
	return this.b('submit', s)
}
$.fn.u$ = $.fn.uN$ = function (s) {
	return this.b('uniqueName' + s)
}
$.fn.tp$ = $.fn.bTp = function (s) {
	return this.b('template', s)
}
$.fn.e$ = function (s) {
//return this.b('foreach',S)
// = $.fn.bE
	// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
	var q = this, g = G(arguments)
	return g.p ? '$data.' + s : q.b('foreach', s)
//= $.fn.bindKOEach = $.fn.koE = $.fn.eKo = $.fn.bE = $.fn.ko_e 
}
$.fn.e$da = function (a) {
	//=$.fn.eD = $.fn.eB =  $.fn.bindKOEachData 
	return this.b('$data.' + a)
}
function _pre() {
	ko.o.prototype.rm = ko.o.prototype.remove
	$.sl.o$ = function (a) {
		//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
		return $.sl().o$(a)
	}
	t$sp = function () {
	}
	v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
	}
	Peep = function () {
		return [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
	}
}
 
	CSSDATACLICK = KNOCKS = function () {
		$.ul().K('fs').e$("fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = ko.o()
			o.gtf = function (f) {
				o.chFI(f)
			}
			return o
		}
		ok(MVM())
	}
	IIFI = function () {
		
		$.cb().b('checked', 'dispMs')
		
		$.sp('Disp ms')
		$.d().if$('dispMs').A(
				$.p('Here is a message. Astonishing'))
		
		ok(vm = {dispMs: $o(0)})
	}
	
	ROOT = UDA = ULDATA = function () {
		d = $.d().id('hover')
		//Show the div onmouseover.
		d.mouseover(function () {
			$(this).next("#box").tog()
		}).mouseout(function () {
			//Hide to div onmouseout
		})
		$.a($.i('me').t$('matterId'))
		$.ul().e$('mDateTime').A($.li().A(
				$.ul().e$('$root.matter.index.type()[$data]').A(
						$.li([
							d,
							//$.dI('box').none('cssDisplayNone').A($.a('Edit'), $.a('Copy'), $.a('Delete')),
							$.d({
								id: 'box', dp: 'none',
								children: [$.a('Edit'), $.a('Copy'), $.a('Delete')]
							})
						]),
						$.li().t$('matterTitle'),
						$.li().t$('matterComment')
				)
		))
	}
	KOFLM = function () {
		//filter the items using the filter text
		d = $.dI('hover').A($.a().A($.i('me').b().t$('matterId')))
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").toggle()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todoo:none
			}
		})
		$.ul().b().e$('mDateTime').A($.li().A($.ul()
				.e$('$root.matter.index.type()[$data]').A(
				$.li().A(d, $.dI('box').css('display', 'none').A(
						$.a().A('Edit'), $.a().A('Copy'),
						$.a().A('Delete'))),
				$.li().t$('matterTitle'),
				$.li().t$('matterComment'))))
		vm = {}
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}
	
 FIF= function(){
	 $.A(
  $('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>'),
 $(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>'))
	 _.in(function(){
		 ko.applyBindings({
			 displayMessage: ko.observable(false)
		 });
	 })

	 
 }
 
function classic() {
	knockoutBind2 = function (a) {

//= bd
		var g = G(arguments), a = g[0]
		if (g.p) {
			a = 'text: ' + a
		}
		if (g.n) {
			a = 'click: ' + a
		}
		if (g.m) {
			a = 'value: ' + a
		}
		if (g.d) {
			a = 'checked: ' + a
		}
		q.attr({'data-bind': a})
		return q
	}
}
VM = Feed = function (p) {
	this.ms = $o("Hi");
	this.ms = ko.o("Hi")
	this.feed = new Feed()
	this.feed2 = new Feed()
	this.feed.ms("Ms1")
	this.feed2.ms("Ms2")
	this.ms = ko.o("!")
	this.VM2 = {ms: $o("!")}
	this.somePop = p.smKey
	this.ms = ko.o("Hi");
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.feed.ms("Ms1");
	this.feed2.ms("Ms2");
}
Person = Per = function (n, ch) {
	var per = this
	per.n = n
	per.ch = ko.oa(ch)
	per.A = function () {
		per.ch.push('new ch')
	}
}
 