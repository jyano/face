RND= RANDOMODER = VIRT = function () {
	VIRT = function () {
		$.d().b({randomOrder: true})
		$.d('First')
		$.d('Second')
		$.d('Third')
		ko.bindingHandlers.randomOrder = {
			init: function (el, valAcc) {
				// Pull out each of the child els into an array
				var childElems = []
				while (el.firstChild)
					childElems.push(el.removeChild(el.firstChild))
				// Put them back in a random order
				while (childElems.length) {
					var randomIndex = M.fl(M.rn() * childElems.length),
							chosenChild = childElems.splice(randomIndex, 1);
					el.appendChild(chosenChild[0]);
				}
			}
		}
	}
	ko.BH.randomOrder = {
		init: function (el, valueAccessor) {
			
			// Build an array of child elements
			var ch = ko.vE.firstChild(el),
					CH = []
			while (ch) {
				CH.push(ch)
				ch = ko.vE.nextSibling(ch)
			}
			// Remove them all, then put them back in a random order
			ko.vE.emptyNode(el)
			while (CH.length) {
				ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
			}
		}, alt: function () {
			ko.bH.randomOrder = {
				init: function (el, vA) {
					var ch = ko.vE.firstChild(el)
					var CH = []
					while (ch) {
						CH.push(ch);
						ch = ko.vE.nextSibling(ch)
					}
					ko.vE.emptyNode(el)
					while (CH.length) {
						ko.vE.prepend(el,
								CH.splice(R(CH), 1)[0])
					}
				},
				init: function (el, valAcc) {
					var childElems = []
					while (el.firstChild)
						childElems.push(el.removeChild(el.firstChild))
					while (childElems.length) {
						var randomIndex = M.fl(M.rn() * childElems.length),
								chosenChild = childElems.splice(randomIndex, 1);
						el.appendChild(chosenChild[0]);
					}
				},
				init1: function (elem, valueAccessor) {
					// Build an array of child elements
					var child = ko.virtualElements.firstChild(elem),
							childElems = [];
					while (child) {
						childElems.push(child);
						child = ko.virtualElements.nextSibling(child);
					}
					// Remove them all, then put them back in a random order
					ko.virtualElements.emptyNode(elem);
					while (childElems.length) {
						var randomIndex = Math.floor(Math.random() * childElems.length),
								chosenChild = childElems.splice(randomIndex, 1);
						ko.virtualElements.prepend(elem, chosenChild[0]);
					}
				}
			}
		}
	}
	$.d().b({randomOrder: true})
	$.d('First')
	$.d('Second')
	$.d('Third')
	
}

RND1 = VIRT1 = function () {
	_$({
		C: 'p',
		A: [
			$.d().b({
				randomOrder: true
			}),
			$.d('First'),
			$.d('Second'),
			$.d('Third'),
			$.ul().e$('mDateTime').A($.li().A($.ul())),
			$.uE("$root.matter.index.type()[$data]", [$.li().A()])]
	})
}