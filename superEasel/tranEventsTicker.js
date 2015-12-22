 
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
function _apps(){
	 
		MU = HITC = HITCIRCLES = function () {
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(
					randomLocation(), randomLocation()).f(
					randomHSL()).dc(30).a2(ct)
		})
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
		})
		function randomLocation() {
			return M.random() * 300 - 150
		}
		
		function randomHSL() {
			return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
		}
		
		function alt() {
			MU8 = HITC1 = HITCIRCLES1 = function () {
				z()
				var pt
				st = $St(1000, '+') // look no .tick() necesary!! look below :)
				ct = $Ct()
				st.A(ct.XY(150))
				_.t(25, function () {
					$H().XY(
							randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
				})
				T.on("tick", function (e) {
					ct.rotation += 3
					n = ct.getNumChildren()
					ct.ch(function (ch) {
						uM = ch.uM()
						ch.alpha = ch.uM() ? 1 : 0.1
						pt = ch.globalToLocal(st.m().x, st.m().y)
						if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
							ch.al(1)
						}
					})
				})
				function randomLocation() {
					return M.random() * 300 - 150
				}
				
				function randomHSL() {
					return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
				}
				
				function alt() {


//beautiful demo i stole! :)
					MU2 = HITCIRCLES = function () {
						z()
						stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
						container = new createjs.Container()
						stage.A(container.XY(150))
						_.times(25, function () {
							var shape = new createjs.Shape()
							shape.graphics.f(randomHSL()).dc(0, 0, 30)
							holder.A(shape.XY(randomLocation(), randomLocation()))
						})
						cjs.Ticker.on("tick", tick)
						function randomLocation() {
							return Math.random() * 300 - 150
						}
						
						function randomHSL() {
							return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
						}
						
						function tick(event) {
							holder.rotation += 3
							var numChildren = holder.getNumChildren()
							_.each(holder.children, function (child) {
								child.alpha = child.underMouse() ? 1 : 0.1
							})
							/*
							 for(var i = 0; i < numChildren; i++){  //for each child
							
							 var child = holder.getChildAt(i)
							 child.alpha = 0.1
							 var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
							 if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
							 child.alpha = 1}
							 }
							 */
							stage.update(event)
						}
					}
				}
			}//A
		}//A
	}
		MU0 = ENTERST = function () {
			St()
			st.bm('me')
			st.on('mouseenter', function () {
				$.br().A()
				$('body').A('once<br>')
			}, null, true)
			st.on('mouseenter', function () {
				$('body').A('many<br>')
			}, null, false)
		}//A-
		MU1 = MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			st = $St(1600, 1000)
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			st.on('mouseenter', function () {
				$('body').C($r())
			})
			ct = (new cjs.Container().a2(st)).bm('me', function (bm) {
				bm.sXY(.2).XY(100, 80)
				bm.on('click', function () {
					$l('lit')
				}, this, true) //just once
			})
			//make a container
			st.ct(function (ct, st) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				// the middle size me demonstrates stopPropogation
				// if you click it, the container does not feel the click
				ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function (e) {
						$l('mid')
						e.stopPropagation()
					})
				})
				ct.bm('me', function (bm) {
					bm.sXY(1.5)
							.on('click', function () {
								$l('big')
							})
				})
				ct.on('click', function () {
					$l('con')
				})
			})
			function alt() {
				MU3 = MX0 = MATRIX0 = function () {
					st = $St(1600, 1000)
					// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
					// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
					$.d('b', 50, 50).A()
					// on stage enter, change background color, though you
					// cant see it here because stage fills screen
					// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
					st.on('mouseenter', function () {
						$('body').C($r())
					})
					st.A(ct = container = c = $Ct())
					ct.bm('me', function (bm) {
						//b.sxy(.2).xy(100,80)
						//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
					})
					//make a container
					st.ct(function (c, s) {
						
						//the little me clicks do not hit the 'big' me underneath it.  that's normal.
						//but it does hit the container.  but this example shows off 'remove', so it only hits once
						//however, it continues to propogate on to the container. hmmm..
						// the middle size me demonstrates stopPropogation
						// if you click it, the container does not feel the click
						ct.bm('me', function (b) {
							b.sXY(.4).XY(100, 180)
							//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
						})
						ct.b('me', function (b) {
							b.sXY(1.5)
							// b.o('$',fL('big'))  //on click, log('big')
						})
						//on click, log('con')
						//c.o('$',  fL('con'))
					})
					st.ct(function (c) {
						var vn = 0,
								rvn = 0,
								on = 0,
								ron = 0
						c.X(200)
						c.mug(
								function (b) {
									b.sXY(.8).XY(200, 80)
								})
						c.mug(
								function (b) {
									b.sXY(.8).XY(100, 280)
								})
						c.mg(
								function (b) {
									b.sXY(.8).XY(340, 180)
								})
						//this shows over/out vs rollover/rollout
						//over/out get retriggered when switching between connected sprites
						//rollover/rollout does not because it is still touching 'something'
						// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
						//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
						// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
						//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
					})//.MV(40)
					st.ct(function (c, s) {
						c.x(700)
						c.mg(function (b) {
							b.sxy(.8).xy(200, 80)
						})
						c.mg(function (b) {
							b.sxy(.8).xy(100, 280)
						})
						c.mg(function (b) {
							b.sxy(.8).xy(340, 180)
						})
						//this example shows which sprites are acted upon with over/rollover
						//over only affects one
						//rollover affects ALL
						//if you enter a sprite from outside, they all grow (via rollover),
						//and the one sprite grows double (via over)
						c.o('v', function (g, e) {
							$l('v')
							g.sxy(.01, '+')
						})
						c.o('rv', function (g, e) {
							$l('rv')
							g.sxy(.01, '+')
						})
						c.o('o', function (q, e, g) {
						})
						c.o('ro', function (q, e, g) {
						})
						// in summary,
						// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
						// BUT, they will all recieve events separately
					}).MV(40)
					st.ct(function (ct, st) {
						ct.X(1400)
						ct.bm('me', function (bm) {
							
							//make the little me slide the entire container
							//it acts as a handle! (for its container)
							lit = bm.sXY(.2).XY(100, 80)
							SL(bm, ct)
							ct.bm('me', function (bm) {
								//big me will scale the little me
								big = bm.sXY(2).XY(100, 180)
								SC(bm, lit)
								ct.bm('me', function (bm) {
									bm.sXY(.6).XY(150, 180)
									SL(bm)
									RT(bm, big)
								})
							})
						})
						//guy slides stage
						ct.bm('guy', function (bm) {
							bm.sXY(.4).XY(100, 180)
							SL(bm, stage)
						})
					})
				}
			}
		}
		MU2 = HAN = HANDEV = function () {
			St()
			st.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			st.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
				}
				b.on('pressmove', b)
			})
			st.t()
			function alt() {
				MU6 = HANDLEEVENT = function () {
					St()
					s.bm('me', function (b) {
						me = b
						cb = b.on('pressmove', function () {
							this.x++
						})
					})
					s.bm('guy', function (b) {
						b.handleEvent = function () {
							this.y++
						}
						b.on('pressmove', b)
					})
				}
			}
		}//B+
		BUBBLE = function () {
			z()
			stage = cjs.stage(500, 500).tick().A()
			output = new createjs.Text(
					"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
					"13px courier").lWH(280, 13).XY(190, 10)
			background = new cjs.Shape().N("background")
			background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
			label = new cjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
					.N('label')
					.tA("center")
					.tB("middle")
			button = new cjs.Container().XY(20).N('button').A(background, label)
			// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
			// button.mouseChildren = false;
			stage.A(button, output)
			// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
			_.e([stage, button, label, background], function (target) {
				target.on("click", handleClick, false);
				target.on("click", handleClick, true)
			})
			stage.update()
		}
		BUBBLE = function () {
			z()
			stage = cjs.stage(500, 500).tick().A()
			output = new createjs.Text(
					"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
					"13px courier").lWH(280, 13).XY(190, 10)
			background = new createjs.Shape().N("background")
			background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
			label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
					.N('label')
					.tA("center")
					.tB("middle")
			button = new cjs.Container().XY(20).N('button').A(background, label)
			// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
			// button.mouseChildren = false;
			stage.A(button, output)
			// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
			_.each([stage, button, label, background], function (target) {
				target.on("click", handleClick, false);
				target.on("click", handleClick, true)
			})
			stage.update()
		}
		BUBBLE = function () {
			z()
			stage = cjs.stage(500, 500).tick().A()
			output = new createjs.Text(
					"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
					"13px courier").lWH(280, 13).XY(190, 10)
			background = new createjs.Shape().N("background")
			background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
			label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
					.N('label')
					.tA("center")
					.tB("middle")
			button = new createjs.Container().XY(20).N('button').A(background, label)
			// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
			// button.mouseChildren = false;
			stage.A(button, output)
			// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
			_.each([stage, button, label, background], function (target) {
				target.on("click", handleClick, false);
				target.on("click", handleClick, true)
			})
			stage.update()
		}
		MU3 = MOUSE = BUB8 = MOUSEVENTS = BUBBBLE = function () {
			St()
			output = $T(
					"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
					"13px courier").lWH(280, 13).XY(190, 10)
			bg = $H().n("background")
			bg.graphics.f("red").rr(0, 0, 150, 60, 10)
			lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
			// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
			// button.mouseChildren = false;
			st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
			// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
			_.e([st, bt, lb, bg], function (tg) {
				tg.$(handleClick, false);
				tg.$(handleClick, true)
			})
			st.u()
			function handleClick(e) {
				if (e.currentTarget == st && e.eventPhase == 1) {
					output.text = "target : eventPhase : currentTarget\n"
				}// this is the first dispatch in the event life cycle, clear the output.
				output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
				if (e.currentTarget == st && e.eventPhase == 3) {
					st.u()
				}// this is the last dispatch in the event life cycle, render the stage.
			}
		}//B+
		MU4 = RMEVT8 = function () {
			function alt() {
				MU7 = REMOVEEVENT = function () {
					St()
					s.bm('me', function (b) {
						me = b
						cb = b.on('pressmove', function () {
							this.x++
						})
					})
					s.bm('guy', function (b) {
						b.handleEvent = function () {
							this.y++
							me.off('pressmove', cb)
						}
						b.on('pressmove', b)
					})
				}
			}
			
			St()
			st.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			st.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
					me.off('pressmove', cb)
				}
				b.on('pressmove', b)
			})
			///////
			s.can.P('a').XY(300)
			s.A(h = shape = $h())
			h.rec(100, 200, 0, 200, 'red')
					.rec(100, 100, 100, 20, 'green')
					.rec(145, 120, 10, 80, 'orange')
					.cir(105, 100, 20, 'blue')
					.cir(105, 100, 8, 'black')
					.cir(200, 100, 20, 'blue')
					.cir(200, 100, 8, 'black')
					.cir(100, 20, 100, 'green')
					.rXY(100, 300).XY(100, 300).drag()
			p = function () {
				shape.twL(
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
				shape.twL(
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
				)
			}
			p()
		}
		MU5 = MOUSEENTERSTAGE = function () {
			St()
			s.bm('me')
			s.on('mouseenter', function () {
				$('body').prepend('once<br>')
			}, null, true)
			s.on('mouseenter', function () {
				$('body').prepend('many<br>')
			}, null, false)
		}
		MOUSEENTERSTAGE = function () {
			z()
			stage = s = cjs.stage(500, 500).A().tick()
			s.bm('me')
			s.on('mouseenter', function () {
				$('body').prepend('once<br>')
			}, null, true)
			s.on('mouseenter', function () {
				$('body').prepend('many<br>')
			}, null, false)
		}
		HANDLEEVENT = function () {
			z()
			s = createjs.stage(500, 500).A().tick()
			s.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			s.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
				}
				b.on('pressmove', b)
			})
		}
		REMOVEEVENT = function () {
			z()
			s = createjs.stage(500, 500).A().tick()
			s.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			s.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
					me.off('pressmove', cb)
				}
				b.on('pressmove', b)
			})
		}
		handleClick = function (e) {
			if (e.currentTarget == stage && e.eventPhase == 1) {
				// this is the first dispatch in the event life cycle, clear the output.
				output.text = "target : eventPhase : currentTarget\n"
			}
			output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
			if (e.currentTarget == stage && e.eventPhase == 3) {
				// this is the last dispatch in the event life cycle, render the stage.
				stage.update()
			}
		}
	 
}