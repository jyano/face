//Bindings jqueryui widgets
//https://github.com/knockout/knockout/wiki/Bindings---jqueryui-widgets

function jqUI_koBinding(){
	ko.BH.jqBt = {
		init: function (el) {
			$(el).button();
		}, // Turns the el into a jQuery UI button
		update: function (el, valAcc) {
			var curVal = valAcc();
			$(el).button("option", "disabled", curVal.enable === false);
		}
	}// Here we just update the "disabled" state, but you could update other properties too
}
K3 = TABLE = function () {
	$BH({
		fadeVisible: {
			I: function (e, vA) {
				$(e).toggle(vA())
			},
			U: function (el, vA) {
				vA() ? $(el).fadeIn() :
						$(el).fadeOut()
			}
		},
		jqButton: {
			I: function (e) {
				$(e).button()
			},
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