cjs.bindReverseSlide = cjs.LS = LS = function (b, b2) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	function alt() {
		cjs.LS = cjs.bindReverseSlide = function (b, b2) {
			var g = G(arguments),
					b = g[0],
					b2 = g[1],
					d = 'mousedown',
					pm = 'pressmove',
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
	}
}
//
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
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown',
			pm = 'pressmove',
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
	return b.on('pressup',
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}