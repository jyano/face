cjs.bindSlide =cjs.SL = SL= function (b, b2) {
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

 

dO.SL = function () {
	SL(this)
	return this
}
cjs.bindScale = cjs.SC = SC = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
	function alt() {
		cjs.SC = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
		cjs.bindScale = SC = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
	}
}
cjs.bindSkew = cjs.SK = SK = function (b) {
	var g = G(arguments), b = g[0], b2 = g[1], d = 'mousedown', pm = 'pressmove', b2 = b2 || b
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
cjs.bindRotate = cjs.RT = RT = function (b, b2) {
	function alt() {
		RT = function () {
			RT(this);//cjs.RT(i);
			return this
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
	}
	
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
cjs.bindTransform = cjs.TR = TR = function TR(b, b2, m) {
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
	function alt() {
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
	}
}
dO.TR = function () {
	TR(this);
	return this
}
 