$L('distractor', 'promote', 'slider')
cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}

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
		var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
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
function _pre() {
 
	examples = {}
}
 
cjs.testCanvas = function () {
	return $.c(960, 400).id("testCanvas").a2($.d())
}
WINDING = function () {
	cjs.Shape.prototype.same = function () {
		return $h(this)
	} //h.copy
	cjs.manifest = function (func) {
		var q = cjs.loadQueue()
		q.complete(
				function () {
					func(function (getResult) {
						return q.getResult(getResult)
					})
				})
				.manifest([{
					id: "chicks", src: "/chicks.png"
				},
					{id: "me", src: "/me.png"},
					{id: "guy", src: "/guy.png"},
					{id: "sun", src: "/sun.png"}])
	}
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
	}
	cjs.manifest(function (q) {
		$.hdr().A($.h1('grahics winding')).A()
		$.d().A($.c(960, 400).id("testCanvas"))
		st = s = stage = $St(["testCanvas"])
		h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
		cjs.bm = function (img) {
			var g = G(arguments), img = g[0],
					bm = new cjs.Bitmap(img)
			if (g.N) {
				bm.rC()
			}
			return bm
		} //warning: can't yet change to $Bm!!
		bm = cjs.bm(q("chicks"), '-')
				.a2(s).X(470).drag()
		bm.mask = h.same().X(470)
	})
}
COOL = function () {
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
PROMOTE = function () {
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
TWOSTAGES = function () {
	z()
	$.hdr().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
			.right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = new cjs.Stage(canvasName).tick()
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.ct().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
}
DISTRACT = function () {
	z()
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}
WINDING1 = function () {
	cjs.Shape.prototype.same = function () {
		return $h(this)
	} //h.copy
	cjs.manifest = function (func) {
		var q = cjs.loadQueue()
		q.complete(
				function () {
					func(function (getResult) {
						return q.getResult(getResult)
					})
				})
				.manifest([{
					id: "chicks", src: "/chicks.png"
				},
					{id: "me", src: "/me.png"},
					{id: "guy", src: "/guy.png"},
					{id: "sun", src: "/sun.png"}])
	}
	cjs.manifest(function (q) {
		$.hdr().A($.h1('grahics winding')).A()
		$.d().A($.c(960, 400)
				.id("testCanvas"))
		st = s = stage = $St(["testCanvas"])
		h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
		cjs.bm = function (img) {
			var g = G(arguments), img = g[0],
					bm = new cjs.Bitmap(img)
			if (g.N) {
				bm.rC()
			}
			return bm
		} //warning: can't yet change to $Bm!!
		bm = cjs.bm(q("chicks"), '-')
				.a2(s).X(470).drag()
		bm.mask = h.same().X(470)
	})
} //Uncaught TypeError: Cannot read property 'image' of undefined
	