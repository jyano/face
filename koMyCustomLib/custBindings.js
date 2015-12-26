ko.bH.randomOrder = {
	init: function (el, vA) {
		var ch = ko.vE.firstChild(el), CH = []
		while (ch) {
			CH.push(ch);
			ch = ko.vE.nextSibling(ch)
		}
		ko.vE.emptyNode(el)
		while (CH.length) {
			ko.vE.prepend(
					el,
					CH.splice(R(CH), 1)[0])
		}
	},
	init: function (el, vA) {
		var ch = ko.vE.firstChild(el), CH = []
		while (ch) {
			CH.push(ch);
			ch = ko.vE.nextSibling(ch)
		}
		ko.vE.emptyNode(el)
		while (CH.length) {
			ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
		}
	},
	/*
	 init: function(el, valAcc) {
	 var childElems = []
	 while(el.firstChild)
	 childElems.push(el.removeChild(el.firstChild))
	 while(childElems.length) {
	 var randomIndex = M.fl(M.rn() * childElems.length),
	 chosenChild = childElems.splice(randomIndex, 1);
	 el.appendChild(chosenChild[0]);
	 }
	 }
	 */
	
	init: function (elem, valueAccessor) {
		// Pull out each of the child elements into an array
		var childElems = []
		while (elem.firstChild)
			childElems.push(elem.removeChild(elem.firstChild))
		// Put them back in a random order
		while (childElems.length) {
			var randomIndex = M.fl(M.rn() * childElems.length),
					chosenChild = childElems.splice(randomIndex, 1);
			elem.appendChild(chosenChild[0]);
		}
	},
	init: function (elem, valueAccessor) {
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
	},
	init: function (elem, valueAccessor) {
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
ko.bH.fadeVisible = {
	init: function (el, vA) {// 1st set el vs pop rel to val
		$(el).toggle(ko.unwrap(vA()))
	},
	init: function (el, valAcc) {
		// Initially set the el to be instantly visible/hidden depending on the value
		var value = valAcc();
		$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
	},
	update: function (el, vA) {//on change, slowly fade el in/out
		ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
	},
	init: function (el, vA) {// 1st set el vs pop rel to val
		$(el).toggle(ko.unwrap(vA()))
	},
	update: function (el, valAcc) {
		// Whenever the value subsequently changes, slowly fade the el in or out
		var value = valAcc();
		ko.unwrap(value) ? $(el).fadeIn() :
				$(el).fadeOut();
	},
	update: function (el, vA) {//on change, slowly fade el in/out
		ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
	}
}
ko.bH.hasFocus = {
	init: function (el, vA) {
		$(el).focus(function () {
			vA()(1)
		})
		$(el).blur(function () {
			vA()(0)
		})
	}, init: function (el, vA) {
		$(el).focus(function () {
			vA()(1)
		})
		$(el).blur(function () {
			vA()(0)
		})
	},
	update: function (el, vA) {
		ko.uw(vA()) ? el.focus() :
				el.blur()
	},
	update: function (el, vA) {
		ko.uw(vA()) ? el.focus() : el.blur()
	}
}
ko.bH.starRating = {
	init: function (element, valueAccessor) {
		$(element).addClass("starRating");
		for (var i = 0; i < 5; i++)
			$("<span>").appendTo(element);
		$("span", element).each(function (index) {
			$(this).hover(
					function () {
						$(this).prevAll().add(this).addClass("hoverChosen")
					},
					function () {
						$(this).prevAll().add(this).removeClass("hoverChosen")
					}
			);
		})
	},
	update: function (element, valueAccessor) {
		// Give the first x stars the "chosen" class, where x <= rating
		var observable = valueAccessor();
		$("span", element).each(function (index) {
			$(this).toggleClass("chosen", index < observable());
		});
	}
}
$bH('slV', function (el, vA) {
	var isChecked = ko.uw(vA())
	isChecked ? $(el).slD(1800) :
			$(el).slU(2000)
})