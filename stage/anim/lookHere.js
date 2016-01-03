$it = function (i) {
	var _$it = function (i) {
		return {src: _.src(i), id: i}
	}
	return S(i) ? _$it(i) : i
}
$its = function (its) {
	var g = G(arguments)
	if (!g.A) {
		its = g
	}
	return _.m(its, $it)
}
cjs.testCanvas = function () {
	return $.div().A($.canvas(960, 400)
			.id("testCanvas")).A()
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
cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}
examples = {}
examples.showDistractor = function (id) {
	var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
	div.className += " loading"
}
examples.hideDistractor = function () {
	var div = document.querySelector(".loading")
	div.className = div.className.replace(/\bloading\b/)
}
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
guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
cjs.src = _.src
obX = function (o) { // ************
	var g = G(arguments);
	return !O(o) ? {}
			: g.p ? o.clone()
			: o
}
cj.adj = cj.camAdj = function (income, tax) {//tax ~ deltaLimit ~ buffer
	var income = income || 0, tax = tax || 0
	if (income > 0) {
		return income > tax ? income - tax : 0
	}
	return -income > tax ? income + tax : 0
}
cj.cap = function (n, m, M) {
	if (U(m)) {
		return n
	}
	if (A(m)) {
		M = m[1]
		m = m[0]
	}
	return n < m ? m
			: n > M ? M
			: n
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
IX1 = INDEXX = function () {
	z()
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}
IX2 = function () {
	z()
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}
//tk = $pt.tk = cj.Tk.prototype
cj.rim = function (rad, lineWid, x, y) {
	// = cjs.circle2
	var z = lineWid
	if (!S(r)) {
		return rim('r', rad, z, x)
	}
	var gx = $Gx().ss(z / 8)._f(r, 'z')._dc(50)
	return $Sh(gx).XY(N(x, 0), N(y, 0))
}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
$df = {}
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d.cn = b2d.controls = {}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
/*
 //will set cols unless you pass in 0
 if(o.c==0){o.c=null}
 if(o.c==00){o.c=null;o.C=null}
 if(o.c=='*'){o.c=$r()}
 if(o.c=='**'){o.c=$r();o.C=$r()}
 o.c =o.c||'z'
 o.C =o.C||'w'
 o.l = _.tN(o.l,4)
 o.c1 = o.c1||'z'
 o.c2 = o.c2||'w'
 o.s1= _.tN(o.s1)
 o.s2= _.tN(o.s2,1)
 //
 o.x1 = _.tN(o.x1)
 o.y1 = _.tN(o.y1)
 o.x2 =_.tN(o.x2);
 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
 o.r1=_.tN(o.r1)
 o.r2=_.tN(o.r2,200)
 // o.i image
 //o.k kind
 // o.p  layer position


 //o.bm//o.bM
 //o.g gradient

 //o.m mass
 //o.t type
 // o.v = o.v || [] //verts
 //o.X
 //o.z clr
 */
pastNames = {}
pastNames.f = {
	_pts: ['_vs'],
	pts: ['vs', 'points', 'verts', 'vertices'],
	wPts: ['f.wVerts', 'f.V'],
	wPtsA: ['f.wV'],
	wPtsGP: ['tGP', 'gPolyWorldVerts'],
	GP: ['tGP', 'gPolyWorldVerts']
}
pastNames.b = {
	GP: ['b.wPolygon'],
	lGP: ['polygon'],
	pts: ['points', 'ps'],
	ptsGP: ['verts'],
	wPtsGP: ['gPolyVerts', 'wV', 'vs', 'gPolyVerts'],
	wPts: ['wVerts'],
	rtWPts: ['V', 'rotWorVerts'],
	rtPts: ['rotatedVerts', 'rtVs', 'rV']
}
events1 = ['added',
	'mouseover', 'rollover', 'rollout', 'mouseout',
	'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
	'removed',
	'tick'
]
events = ['drawend',
	'drawstart',
	'mouseenter',
	'mouseleave',
	'stagemousedown',
	'stagemousemove',
	'stagemouseup',
	'tickend',
	'tickstart'
]
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
function alpha() {
	i.flash = function () {
		var i = this
		i.al(0)
		$.in(.3, function () {
			i.al(1)
		})
		return i
	}
	i.rZero = function (a) {
		var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
		if (g.p) {
			i.rX(0, '+').rY(0, '+')
		}//i.X(a, i.regX()-a, '+')
		else {
			i.rXY(0, 0)
		}
		return i
	}//
	tw.Plugin = function (a, b) {
		var g = G(arguments), a = g[0], b = g[1]
		if (U(a)) {
			return g.p ? w.pluginData.data : w.pluginData
		}
		if (U(b)) {
			w.pluginData = a;
			return w
		}
		w.pluginData[a] = b
		return w
	}
}