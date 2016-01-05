//http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
Bb.H = Bb.History
Bb.h = Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
R$R = $rR = function (fn) {
	return R$({R: fn})
}
anchorClickBlocker = function () {
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
	$('body').on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		r.n($(this).attr('href'))
	})
}
knockAncs = function (ev) {
	ev.preventDefault()
	rtr.n($(this).attr('href',
			{trigger: true}))
}
$TrRtrFn = notUsed = function (rtr, fn) {
	//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
	return function (md) {
		$Trg(rtr, fn(md))
	}
}
$Rt = function (o, root) {
	if (!o['routes'] && !o['rts'] && !o['rt'] && !o['R']) {
		o = {routes: o}
	}
	return $rt(Bb.R.x(o), root)
}
rtr = Bb.R.prototype
$trg = function () {
	$ev.trigger.apply($ev, arguments)
}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
V$R = function (fn) {
	return V$({R: fn})
}
Bb.Co = Bb.Controller = function (Vw, md) {
	return new Vw({model: md})
}
Bb.el = function (Vw, md) {
	return new Vw({model: md}).el
}
$start = $route = function () {
	_$start = function () {
		Bb.h.s()
	}
	Bb.h.s({pushState: true})
	return new Rtr
}
sRtr = function (rtr) {
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
	rtr.rt = rtr.A = rtr.oR = function (rt, fn) {
		var rtr = this
		if (O(rt)) {
			//_.e(rt, function (v, k) {rtr.on('route:' +k, v)})
		}
		else {
			rtr.on('route:' + rt, fn)
		}
		return rtr
	}
	rtr.rp = function (url, op) {
		return this._n(url, _.x({replace: true},
				G(arguments).n ? {trigger: true} : {}))
	}//navigate: replace
// history:
	rtr.Fn = function () {
		return function (url) {
			this.N(url)
		}
	}
	return rtr
}
$R = $Rtr = R$ = function (ob) {
	ob = ob || {}
	if (O(ob.R)) {
		ob.routes = ob.R
	}
	ob.routes = ob.R ? ob.R : (ob.routes || ob.rt || ob.r || {}) //if (ob.i) {ob.initialize = ob.i}
	//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
	//if (ob.x) {ob.index = ob.x}
	//if (ob.h) {ob.home = ob.h}
	//ob.routes[''] = ob.routes[''] || 'index'
	//ob.routes = _.x({'': '_'}, ob.routes)
	//ob.routes['*other'] = 'd'
	//ob = _.x({
	//_: function () {$l('INDEX ( _ ) ')},
	//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
	//}, ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
	//metaClass.. no need for 'new' //= $$R
	var rtr = Bb.R.x(ob)
	return rtr
	//rt._ = _$start
	//rt.$ = $start
	// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 

// BEST VIDEO (WATCH ALL, KNOW ALL)  
//  https://www.youtube.com/watch?v=cIq6Z_Vv4nY
// RTR ALL U NEED TO KNOW!!!      


}


$RoApp = function (name, CALLBACK) {
	window[name] = function () {
		name = name.toUpperCase()
		$.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
		$.sp(name).fS(100).C('o', 'x')
		$.hr()
		d = $.d().id('ct').fS(40)
		CALLBACK()
		Bb.h.s({pushState: true, root: "/box/" + name + "/"})
	}
}
$rt = function (Rtr, root, ob) {
	if (Rtr) {
		rtr = rt(Rtr, ob)
	}
	Bb.h.s({
		root: root,
		pushState: true
	})
	return rtr
	function rt(Rtr, ob) {
		return sRtr(new Rtr(ob))
	}
}
BB4 = ROUT = function () {
	ct = $.d()
	_.e(['home', 'about'], function (o) {
		ct.A($nav(o))
		$mockPage(o)
		$('.' + o + '-nav').$(function () {
			rtr.N(o)
		})
	})
	$Rt({
		'': sh('home'), home: sh('home'),
		about: sh('about')
	}, '/box/rout')
	function sh(o) {
		return function () {
			$('.pg').hd()
			$('*').rmK('A')
			$('#' + o + '-pg').sh()
			$('.' + o + '-nav').K('A')
		}
	}
	
	$s({_A: {C: 'y', c: 'z'}})
}