ko.ext = ko.ext || {};
ko.ext.utils = ko.ext.utils || {};
ko.ext.utils.cloneNodes = function () {
	if (ko.utils.cloneNodes) {
		return ko.utils.cloneNodes
	}
	else {
		return function (nodesArray, shouldCleanNodes) {
			for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
				var clonedNode = nodesArray[i].cloneNode(true);
				newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
			}
			return newNodesArray;
		}
	}
} 
	ko.bP = ko.bindingProvider;
	ko.bP.inst = ko.bP.i = ko.bP.instance
	ko.bP.inst.ppN= ko.bP.inst.preprocessNode
	ko.bP.inst.ppN = function (node) {
		// Only react if this is a comment node of the form <!-- template: ... -->
		if (node.nodeType == 8) {
			var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
			if (match) {
				// Create a pair of comments to replace the single comment
				var c1 = document.createComment("ko " + match[1]),
						c2 = document.createComment("/ko");
				node.parentNode.insertBefore(c1, node);
				node.parentNode.replaceChild(c2, node);
				// Tell Knockout about the new nodes so that it can apply bindings to them
				return [c1, c2];
			}
		}
	}
	ko.bP.inst.ppsN = function (node) {
	// Only react if this is a comment node of the form <!-- template: ... -->
	if (node.nodeType == 8) {
		var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
		if (match) {
			// Create a pair of comments to replace the single comment
			var c1 = document.createComment("ko " + match[1]),
					c2 = document.createComment("/ko");
			node.parentNode.insertBefore(c1, node);
			node.parentNode.replaceChild(c2, node);
			// Tell Knockout about the new nodes so that it can apply bindings to them
			return [c1, c2];
		}
	}
}
	ko.bindingProvider.instance.preprocessNode = function (node) {
		// Only react if this is a comment node of the form <!-- template: ... -->
		if (node.nodeType == 8) {
			var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
			if (match) {
				// Create a pair of comments to replace the single comment
				var c1 = document.createComment("ko " + match[1]),
						c2 = document.createComment("/ko");
				node.parentNode.insertBefore(c1, node);
				node.parentNode.replaceChild(c2, node);
				// Tell Knockout about the new nodes so that it can apply bindings to them
				return [c1, c2];
			}
		}
	}
	ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
		tgNLower = nd.tagName && nd.tagName.toLowerCase()
		return ko.cm.iR(tgNLower) ? tgNLower : tgNLower === "special-el" ? "MyCm" : null
		// If the el's name matches a reg-ed cm, use that cmt
		// For the el <special-el>, use the component
		// "MySpecialComponent" (whether or not it was preregistered)
		// Treat anything else as not representing a component
		ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
			tgN = nd.tagName && _.tL(nd.tagName)
			return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
			// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
			// use cm "MySpecialComponent" (regardless if pre-regd)
			// Treat anything else as !repg a cm
		}
	}
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
	ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
		tgN = nd.tagName && _.tL(nd.tagName)
		return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
		// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
		// use cm "MySpecialComponent" (regardless if pre-regd)
		// Treat anything else as !repg a cm
	}