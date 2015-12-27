ko.bH.fadeVisible = {
	init: function (el, valAcc) {
		// Initially set the el to be instantly visible/hidden depending on the value
		var value = valAcc();
		$(el).toggle(ko.unwrap(value));
		// Use "unwrapObservable" so we can handle values that may or may not be observable
	},
	update: function (el, valAcc) {
		// Whenever the value subsequently changes, slowly fade the el in or out
		var value = valAcc();
		ko.unwrap(value) ? $(el).fadeIn() :
				$(el).fadeOut();
	},
	
	alt: function () {
		//fade in/out
		ko.BH.fadeVs = {
			init: function (el, valAcc) {
				var shouldDisplay = valAcc();
				$(el).toggle(shouldDisplay)
			},// Start visible/invisible according to initial value
			update: function (el, valAcc) {
				var shouldDisplay = valAcc();
				shouldDisplay ? $(el).fadeIn() :
						$(el).fadeOut()
			}
		} // On update, fade in/out
		ko.BH.fadeVs = {
			init: function (el, valAcc) {
				var shouldDisplay = valAcc();
				$(el).toggle(shouldDisplay)
			},// Start visible/invisible according to initial value
			update: function (el, valAcc) {
				var shouldDisplay = valAcc();
				shouldDisplay ? $(el).fadeIn() :
						$(el).fadeOut()
			}
		} // On update,
	}
}

K3 = TABLE = function () {
	
	$BH({
		fadeVisible: {
			I: function (e, vA) {$(e).toggle(vA())},
			U: function (el, vA) {
				vA() ? $(el).fadeIn() :
				 $(el).fadeOut()
			}
		},
	
		jqButton: {
			I: function (e) {$(e).button()},
			U: function (e, vA) {
				$(e).button("option", "disabled", 
						vA().enable === false);
			}
		}
	})
	
	str = '<h3 data-bind="text: q"></h3>'
	str += '<p> distribute <b data-bind="text: pB"></b> points  </p>'
	str += ' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: As"><tr>'
	str += '<td data-bind="text: aT"></td>'
	str += ' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
	str += ' </tr> </tbody> </table>'
	str += '<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
	str += '<p><b data-bind="text: pB-pU()"></b> left</p>'
	str += '<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
	$(str).A()
	function VM(q, pB, As) {
		var vm = this
		vm.q = q
		vm.pB = pB
		vm.As = $.map(As, function (t) {
			return {aT: t, Ps: $o(1)}
		})
		vm.save = function () {
			alert('To do')
		}
		vm.pU = ko.c(function () {
			var t = 0;
			_.e(vm.As, function (a) {
				t += a.Ps()
			});
			return t
		}) //points Used
	}
	
	ok(new VM("factors?", 10, ["Functionality", "News",
		"dropshadows", "testimonials"]))
}