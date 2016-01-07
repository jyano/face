
window.examples = window.examples||{}
$L('distractor', 'promote', 'slider')

cjs.utils = function () {
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.sharedCode = function () {
	if (document.body) {
		setupEmbed()
	}
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	var o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function distractor() {

	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
		 document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
function promote() {
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
}
function slider() {
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
}

cjs.testCanvas = function () {
	return $.c(960, 400).id("testCanvas").a2($.d())
}

ASS_SKETCH=COOL = DRAWONCHICKS= function () {
	pt = 0
	h = $St().mO(1).h()
	h.graphics._ss('g', 40, 's', 'b', 1)
	st.MD(function () {
		pt = st.m()
	})
	st.MU(function () {
		pt = 0
	})
	st.MM(function () {
		if (pt) {
			h.line(pt, pt = st.m())
		}
	})
	st.bm('chicks', function (b) {
		b.XY(500, 300).al(.2)
	})
}
PROMOTE = JUSTLOGS=function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
DISTRACT = NOTHING=function () {
	 
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
} 