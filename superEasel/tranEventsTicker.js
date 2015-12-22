 
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
cjs.bindScale = SC = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'), pm = oE('pm'), b2 = b2 || b,
			cp = function (n) {
				return n < .2 ? .2 : n > 2 ? 2 : n
			}
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY,
						sx = b2.scaleX,
						sy = b2.scaleY
				b.on(pm,
						function (e) {
							if (g.n) {
								b2.sXY(cp(sx + (
										(e.rawX - X) / 200)),
										cp(sy - ((e.rawX - X) / 200))
								)
							}
							else if (g.p) {
								cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
							}
							else {
								b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
							}
						})
			}
	)
}
cjs.bindSkew = SK = function (b) {
	var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY
				b.on(pm, function (e) {
					b2.kXY(
							(e.rawY - Y) * .5, (e.rawX - X) * .5
					)
				})
			})
}
cjs.bindTransform = TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.bindSlide(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.bindScale(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.bindRotate(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}
cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1] || b
	cjs.SL(b);
	cjs.RT(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1] || b
	cjs.SL(b);
	cjs.RT(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.SL = function (b, b2) {
	var g = G(arguments),
			b = g[0], b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX, by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (!g.p) {
						b2.x = bx + e.rawX
					}
					if (!g.n) {
						b2.y = by + e.rawY
					}
				})
			}
	)
}
cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
cjs.bindSlide = SL = function () {
	var g = G(arguments),
			b = g[0],
			b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX,
						by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (g.P) {
						b2.x = bx + e.rawX
					}
					//if (g.N) {
					b2.y = by + e.rawY
					//}
				})
			})
}
cjs.LS = cjs.bindReverseSlide = function (b, b2) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b
	return b.on(d, function (e) {
		var bx = b2.x + e.rawX, by = b2.y + e.rawY
		b.on(pm, function (e) {
			if (g.P) {
				b2.x = bx - e.rawX
			}
			if (g.N) {
				b2.y = by - e.rawY
			}
		})
	})
}
cjs.reggy = function (o, s) {
	s = s || o.parent
	s.bm('me', function (b) {
		b.W(40).H(40)
		I(function () {
			b.XY(o.x + o.regX, o.y + o.regY)
		}, 100)
	})
}
cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b
	return b.on(d, function (e) {
		var bx = b2.x + e.rawX, by = b2.y + e.rawY
		b.on(pm, function (e) {
			if (g.P) {
				b2.x = bx - e.rawX
			}
			if (g.N) {
				b2.y = by - e.rawY
			}
		})
	})
}
cjs.RT = cjs.bindRotate = RT = function (b, b2) {
	//b = what the control is
	//b2 what it should control (default = itself!)
	//if(g.p){  //b.rgc( '+' )   }
	var g = G(arguments), b = g[0], b2 = g[1] || b
	return b.on('mousedown', function (e) {
		var X = e.rawX, Y = e.rawY, r = b2.rotation
		b.on('pressmove', function (e) {
			b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
		})
	})
}
cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
	
	
	//b = what the control is
	//b2 what it should control (default = itself!)
	var g = G(arguments), b = g[0], b2 = g[1] || b
	if (g.p) {  // b.rgc( '+' )
	}
	return b.on('mousedown',
			function (e) {
				var X = e.rawX, Y = e.rawY, r = b2.rotation
				b.on('pressmove', function (e) {
					b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
				})
			})
}
cjs.SC = cjs.bindScale = SC = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'), pm = oE('pm'), b2 = b2 || b,
			cp = function (n) {
				return n < .2 ? .2 : n > 2 ? 2 : n
			}
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY,
						sx = b2.scaleX,
						sy = b2.scaleY
				b.on(pm,
						function (e) {
							if (g.n) {
								b2.sXY(cp(sx + (
										(e.rawX - X) / 200)),
										cp(sy - ((e.rawX - X) / 200))
								)
							}
							else if (g.p) {
								cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
							}
							else {
								b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
							}
						})
			}
	)
}
cjs.SK = cjs.bindSkew = SK = function (b) {
	var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY
				b.on(pm, function (e) {
					b2.kXY(
							(e.rawY - Y) * .5, (e.rawX - X) * .5
					)
				})
			})
}
cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.SL(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.SC(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.RT(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}
i.rX = function () {
	var i = this, g = G(arguments), rX = g[0]
	if (U(rX)) {
		return i.regX
	}
	i.regX = g.p ? i.regX + rX : rX
	return i
}
i.rY = function () {
	var i = this, g = G(arguments), rY = g[0]
	if (g.p) {
		i.Y(i.y + (rY - i.regY))
	}
	if (U(rY)) {
		return i.regY
	}
	i.regY = rY
	return i
}
i.rXY = function () {
	var i = this, g = G(arguments),
			x = N(g.f, 0),
			y = N(g.s, x)
	return i.rX(x).rY(y)
}
i.rC = function () {
	var i = this, g = G(arguments), x, y, hW, hH
	x = i.W() / 2
	hW = x
	y = i.H() / 2
	hH = y
	return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
			i.rXY(hW, hH)
}
i.RT = function () {
	var i = this;
	cjs.RT(i);
	return i
}
i.grow = function () {
	$Tw(this, [{sxy: 10}, 10000]);
	return this
}
i.TR = function () {
	cjs.TR(this);
	return this
}
cjs.SC = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'), pm = oE('pm'), b2 = b2 || b,
			cp = function (n) {
				return n < .2 ? .2 : n > 2 ? 2 : n
			}
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY,
						sx = b2.scaleX,
						sy = b2.scaleY
				b.on(pm,
						function (e) {
							if (g.n) {
								b2.sXY(cp(sx + (
										(e.rawX - X) / 200)),
										cp(sy - ((e.rawX - X) / 200))
								)
							}
							else if (g.p) {
								cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
							}
							else {
								b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
							}
						})
			}
	)
}
cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
	var g = G(arguments), b = g[0], b2 = g[1] || b
	if (g.p) {
		alert('g.p')
		b.rgc('+')
	}
	return b.on('mousedown', function (e) {
		var X = e.rawX, Y = e.rawY, r = b2.rotation
		b.on('pressmove', function (e) {
			b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
		})
	})
}
cjs.TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.SL(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.SC(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.RT(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}

cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1] || b
	cjs.SL(b);
	cjs.RT(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
testImgRegCenter = function () {
	mockStage()
	s.bm('me', function (bm) {
		b1 = bm
		bm.spin().drag()
	})
	s.bm('me', function (bm) {
		b2 = bm
		bm.sXY(0.5, 0.3).spin().drag()
	})
	s.A(c = cjs.circle(4).XY(200))
}
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
i.grow = function () {
	$Tw(this, [{sxy: 10}, 10000]);
	return this
}
i.RT = function () {
	RT(this);
	return this
}
i.TR = function () {
	TR(this);
	return this
}
dO.SL = function () {
	SL(this)
	return this
}
 
tickX = function (e) {
	j.Y(e.delta / 1000 * 100, '-')
}
timeStamp2 = function (s, j, pxPerSec) {
	var fn = function (s, e) {
		if (!N(j.ts)) {
			j.ts = 0;
			j.lts = e.ts
		}
		else {
			j.ts = e.ts - j.lts;
			j.lts = e.ts
			j.y((j.ts / 1000) * pxPerSec, '-')
		}
	}
	return s.t(fn)
}
cj.tick2 = function (func) {
	cjs.Ticker.addEventListener('tick', func)
	return cjs.Ticker
}
cj.stopListening = function () {
	cjs.Ticker.removeAllEventListeners()
}
dO.dg = dO.drag = dO.SL = function () {
	drag(this);
	return this
}
eD.dE = eD.dispatchEvent
eD.hEL = eD.hasEventListener
eD.O = eD.off
eD.o = eD.on
eD.rAEL = eD.removeAllEventListeners
eD.rEL = eD.removeEventListener
eD.tS = eD.toString
eD.wT = eD.willTrigger
eD.aEL = eD.addEventListener
eD.init = function () {
	
	//note: 'initialize' is the only STATIC method of eventDispatcher
	this.initialize.apply(this, arguments)
	return this
}
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
EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
events = ['added',
	'mouseover', 'rollover', 'rollout', 'mouseout',
	'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
	'removed',
	'tick'
]
function KEYCONTROLSOB() {
	ob.keyControls = function (num) {
		var args = G(arguments),
				that = this
		if (args.P) {
			$.kD('left', function () {
				that.toL(num)
			})
			$.kD('right', function () {
				that.toR(num)
			})
		}
		if (args.N) {
			$.kD('up', function () {
				that.toU(num)
			})
			$.kD('down', function () {
				that.toD(num)
			})
		}
	}
}
function prevKeyFns() {
	$.k = $.key = $.kD = function self(k, fn) {
		if (O(k)) {
			_.e(k, function (fn, k) {
				if (s$(k).isUpper()) {
					$.kU(k.toLowerCase(), fn)
				}
				else {
					$.kD(k, fn)
				}
			})
			return
		}
		if (KEYOB[k]) {
			k = KEYOB[k]
		}
		$('body').on('keydown', function (e) {
			if (e.which == k) {
				fn(e, $.K)
			}
		})
	}
	$.kU = function (k, fn) {
		if (keyObj[k]) {
			k = keyObj[k]
		}
		$('body').on('keyup', function (e) {
			if (e.which == k) {
				fn(e, $.K)
			}
		})
	}
	$.spc = function (fn) {
		return $.kD('space', fn)
	}
	K = function (k, fn) {
		var g = G(arguments), o, key
		if (g.u) {
			if (K._loaded) {
				return
			}
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				K.l = $.K.l = $.K.left = true
				$.K.dir = 'left'
				K.l = 1;
				K.L = 0
			})
			$.kU('l', function () {
				if ($.test) {
					$l('left lifted')
				}
				K.l = $.K.l = $.K.left = false
				K.l = 0;
				K.L = 1
			})
			$.kD('r', function () {
				if ($.test) {
					$l('right pressed')
				}
				K.r = $.K.r = $.K.right = true
				$.K.dir = 'right'
				K.r = 1;
				K.R = 0
			})
			$.kU('r', function () {
				if ($.test) {
					$l('right lifted')
				}
				$.K.r = $.K.right = false
				K.r = 0;
				K.R = 1
			})
			$.kD('u', function () {
				if ($.test) {
					$l('up pressed')
				}
				$.K.u = $.K.up = true
				K.u = 1;
				K.U = 0
			})
			$.kU('u', function () {
				if ($.test) {
					$l('up lifted')
				}
				$.K.u = $.K.up = false
				K.u = 0;
				K.U = 1
			})
			$.kD('d', function () {
				if ($.test) {
					$l('down pressed')
				}
				$.K.d = $.K.down = true
				K.d = 1;
				K.D = 0
			})
			$.kU('d', function () {
				if ($.test) {
					$l('down lifted')
				}
				$.K.d = $.K.down = false
				K.d = 0;
				K.D = 1
			})
			K._loaded = 1
			return
		}
		if (O(k)) {
			if (g.p) {
				if (F(k.u)) {
					z(function () {
						if (K.u) {
							k.u(K.u)
						}
					})
				}
				if (F(k.d)) {
					z(function () {
						if (K.d) {
							k.d(K.d)
						}
					})
				}
				if (F(k.l)) {
					z(function () {
						if (K.l) {
							k.l(K.l)
						}
					})
				}
				if (F(k.r)) {
					z(function () {
						if (K.r) {
							k.r(K.r)
						}
					})
				}
			}
			else {
				_.e(k, function (fn, k) {
					K(k, fn)
				})
			}
			return
		}
		o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
		if (g.p) {
			return z(function () {
				if (K[k]) {
					fn()
				}
			})
		}
		key = Key(o.k)
		return $('body').on(o.on, function (e) {
			if (e.which == key) {
				fn(e)
			}
		})
		function Key(k) {
			var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
			return ob[k] ? ob[k] : k
		}
	}
}
$.K = function (o) {
	alert('$.K')
	if (!O(o)) {
		return
	}
	if (F(o.u)) {
		cjs.tick(function () {
			if ($.K.u) {
				o.u($.K.u)
			}
		})
	}
	if (F(o.d)) {
		cjs.tick(function () {
			if ($.K.d) {
				o.d($.K.d)
			}
		})
	}
	if (F(o.l)) {
		cjs.tick(function () {
			if ($.K.l) {
				o.l($.K.l)
			}
		})
	}
	if (F(o.r)) {
		cjs.tick(function () {
			if ($.K.r) {
				o.r($.K.r)
			}
		})
	}
}
cjs.watchKeys = function () {
	alert('cjs.watchKeys')
	$.K.l = $.K.left = false
	$.K.r = $.K.right = false
	$.K.u = $.K.up = false
	$.K.d = $.K.down = false
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = $.K.left = true
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = $.K.left = false
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = $.K.right = true
		$.K.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = $.K.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = $.K.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = $.K.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = $.K.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = $.K.down = false
	})
}
//$.space = function (fn) {return $.kD('space', fn)}
dO.underMouse = dO.uM = function () {
	var dO = this, stg = dO.getStage()
	if (stg.mouseInBounds) {
		var pt = dO.gTL(stg.mouseX, stg.mouseY)
		return dO.hitTest(pt.x, pt.y)
		// alt : return hitTest( pt )
	}
}
dO.mouEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.mouseEnabled
	}
	dO.mouseEnabled = g.f ? true : false
	return dO
}
dO.$ = dO.click = function (fn) {
	return this.on('click', fn)
}
dO.$$ = dO.dblclick = function (fn) {
	return this.on('dblclick', fn)
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
 
T.p = function () {
	T.setPaused(false);
	return T
}
T.P = T.s = function () {
	T.setPaused(true);
	return T
}
T.s = cjs.xL = function () {
	T.removeAllEventListeners()
}
T.$ = function () {
	T.setPaused(T.getPaused() == false ? true : false)
	return T
}
T.i = function () {
	//indicates the target time (in ms) between ticks
	//default is 50 (20 fps)
	//Note: actual time between ticks may be more than specified,
	//  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
	return T.interval
}
T.f = function (numTicks) {
	var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
	if (N(numTicks)) {
		T.setFPS(numTicks);
		return T
	}
	return g.n ?
			T.getFPS() :
			T.getMeasuredFPS() //returns *ACTUAL* frames
	// / ticks per second//
	// Depending on performance,
	// this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
	//Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
	T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
	return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
T.iP = function () {
	return T.getPaused()
}

ct.tkCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.tickChildren
	}
	ct.tickChildren = g.f ? true : false
	return ct
}