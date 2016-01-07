dO._ = function (fn) {
	var dO = this
	Q(function () {
		fn(dO)
	})
	return dO
}
dO.dot = function () {
	var dO = this
	dO.getStage().dot(dO.X(), dO.Y())
	return dO
}
dO.grow = function () {
	this.tween([{sxy: 10}, 10000]);
	return this
}
dO.flash = function () {
	var dO = this
	dO.opacity(0)
	setTimeout(function () {
		dO.opacity(1)
	}, 300)
	return dO
}
function easelPhys() {
	ob.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	ob.accelerate = function () {
		return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
	}
	ob.jerk = function () {
		return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
	}
	ob.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.vXY = function (x, y) {
		return this.vX(x).vY(y)
	}
	ob.aX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.aY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.brake = function () {
		this.vx = this.vy = 0
	}
	ob.toR = p.moveRight = function (num) {
		num = num || 20
		this.X(num, '+')
		return this
	}
	ob.toL = p.moveLeft = function (num) {
		num = num || 20
		this.X(num, '-')
		return this
	}
	ob.toU = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '-')
		return this
	}
	ob.toD = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '+')
		return this
	}
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
	ob.shootBullet = function () {
		shooter = this
		s = stage = shooter.stg()
		bullet = cjs.circ(8, 'w').XY(shooter).a2(s)
		bullet.startMoving(
				(shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
		)
	}
	ob.bounce = function (n) {
		n = N(n) ? n : 0
		var that = this,
				stage = this.getStage(),
				h = stage.H(),
				w = stage.W()
		cjs.tick(
				function () {
					var x = that.x, y = that.y
					if (x > w - that.W() - n || x < (n )) {
						that.vX('-')
					}
					if (y > h - that.H() - n || y < (n )) {
						that.vY('-')
					}
				})
		return this
	}
	ob.hitByBullet = ob.isPointInMyRectBounds = function (bullet) {
		var args = G(arguments), bullet = args[0],
				didHit = Math.pointInRectangle(
						bullet.cX(), bullet.cY(),
						{
							x: this.cX(),
							y: this.cY(),
							w: this.W(),
							h: this.H()
						}
				)
		if (args.n) {
			if (didHit) {
				this.remove()
			}
		}
		return didHit
	}
//chick for hits and remove if a hit
	ob.killAllIAmHitting = function () {
		var that = this,
				stage = this.getStage()
		_.each(stage.children, function (obj) {
			if (that != obj) {
				obj.hitByBullet(that, '-')
			}
		})
	}
	ob.makeMeAKiller = function () {
		var that = this
		cjs.tick(function () {
			that.killAllIAmHitting()
		})
		return this
	}
	ob.within = ob.inStage = function () {
		var args = G(arguments),
				x = this.x,
				y = this.y,
				stg = this.stg(),
				w = stg.W() - 100,
				h = stg.H() - 100,
				withinStage = x > 0 && x < w && y > 0 && y < h
		if (args.n) {
			if (!withinStage) {
				this.remove()
			}
		}
		return withinStage
	}
	ob.startMoving = function (x, y) {
		if (x) {
			this.vX(x)
		}
		if (y) {
			this.vY(y)
		}
		var that = this
		cjs.Ticker.on('tick', function () {
			that.X(that.X() + (that.vx || 0))
			that.Y(that.Y() + (that.vy || 0))
		})
		return this
	}
	ob.warpX = function (low, high, cush) {
		var that = this,
				warp = Math.warp(low, high, cush)
		cjs.tick(function () {
			that.x = warp(that.x)
		})
		return this
	}
	ob.warpY = function (low, high, cush) {
		var that = this,
				warp = Math.warp(low, high, cush)
		cjs.tick(function () {
			that.y = warp(that.y)
		})
		return this
	}
	ob.warp = function (n) {
		n = n || 0
		var stage = this.getStage()
		this.warpX(0, stage.W(), n)
		this.warpY(0, stage.H(), n)
		return this
	}
}
function easelPhys() {
	function warp() {
		ob.warpX = function (low, high, cush) {
			var that = this,
					warp = Math.warp(low, high, cush)
			cjs.tick(function () {
				that.x = warp(that.x)
			})
			return this
		}
		ob.warpY = function (low, high, cush) {
			var that = this,
					warp = Math.warp(low, high, cush)
			cjs.tick(function () {
				that.y = warp(that.y)
			})
			return this
		}
		ob.warp = function (n) {
			n = n || 0
			var stage = this.getStage()
			this.warpX(0, stage.W(), n)
			this.warpY(0, stage.H(), n)
			return this
		}
	}
	
	ob.shootBullet = function () {
		shooter = this
		s = stage = shooter.stg()
		bullet = cjs.circ(8, 'w').XY(shooter).a2(s)
		bullet.startMoving(
				(shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
		)
	}
	ob.bounce = function (n) {
		n = N(n) ? n : 0
		var that = this,
				stage = this.getStage(),
				h = stage.H(),
				w = stage.W()
		cjs.tick(
				function () {
					var x = that.x, y = that.y
					if (x > w - that.W() - n || x < (n )) {
						that.vX('-')
					}
					if (y > h - that.H() - n || y < (n )) {
						that.vY('-')
					}
				})
		return this
	}
	ob.hitByBullet = ob.isPointInMyRectBounds = function (bullet) {
		var args = G(arguments), bullet = args[0],
				didHit = Math.pointInRectangle(
						bullet.cX(), bullet.cY(),
						{
							x: this.cX(),
							y: this.cY(),
							w: this.W(),
							h: this.H()
						}
				)
		if (args.n) {
			if (didHit) {
				this.remove()
			}
		}
		return didHit
	}
//chick for hits and remove if a hit
	ob.killAllIAmHitting = function () {
		var that = this,
				stage = this.getStage()
		_.each(stage.children, function (obj) {
			if (that != obj) {
				obj.hitByBullet(that, '-')
			}
		})
	}
	ob.makeMeAKiller = function () {
		var that = this
		cjs.tick(function () {
			that.killAllIAmHitting()
		})
		return this
	}
	ob.startMoving = function (x, y) {
		if (x) {
			this.vX(x)
		}
		if (y) {
			this.vY(y)
		}
		var that = this
		cjs.Ticker.on('tick', function () {
			that.X(that.X() + (that.vx || 0))
			that.Y(that.Y() + (that.vy || 0))
		})
		return this
	}
	ob.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	ob.accelerate = function () {
		return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
	}
	ob.jerk = function () {
		return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
	}
	ob.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.vXY = function (x, y) {
		return this.vX(x).vY(y)
	}
	ob.aX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.aY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.brake = function () {
		this.vx = this.vy = 0
	}
	ob.toR = p.moveRight = function (num) {
		num = num || 20
		this.X(num, '+')
		return this
	}
	ob.toL = p.moveLeft = function (num) {
		num = num || 20
		this.X(num, '-')
		return this
	}
	ob.toU = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '-')
		return this
	}
	ob.toD = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '+')
		return this
	}
}
function easelPhys() {
	ob.startMoving = function (x, y) {
		if (x) {
			this.vX(x)
		}
		if (y) {
			this.vY(y)
		}
		var that = this
		cjs.Ticker.on('tick', function () {
			that.X(that.X() + (that.vx || 0))
			that.Y(that.Y() + (that.vy || 0))
		})
		return this
	}
	ob.warpX = function (low, high, cush) {
		var that = this,
				warp = Math.warp(low, high, cush)
		cjs.tick(function () {
			that.x = warp(that.x)
		})
		return this
	}
	ob.warpY = function (low, high, cush) {
		var that = this,
				warp = Math.warp(low, high, cush)
		cjs.tick(function () {
			that.y = warp(that.y)
		})
		return this
	}
	ob.warp = function (n) {
		n = n || 0
		var stage = this.getStage()
		this.warpX(0, stage.W(), n)
		this.warpY(0, stage.H(), n)
		return this
	}
	ob.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	ob.accelerate = function () {
		return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
	}
	ob.jerk = function () {
		return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
	}
	ob.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.vXY = function (x, y) {
		return this.vX(x).vY(y)
	}
	ob.aX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.aY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	ob.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	ob.brake = function () {
		this.vx = this.vy = 0
	}
	ob.toR = p.moveRight = function (num) {
		num = num || 20
		this.X(num, '+')
		return this
	}
	ob.toL = p.moveLeft = function (num) {
		num = num || 20
		this.X(num, '-')
		return this
	}
	ob.toU = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '-')
		return this
	}
	ob.toD = p.moveDown = function (num) {
		num = num || 20
		this.Y(num, '+')
		return this
	}
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
	ob.shootBullet = function () {
		shooter = this
		s = stage = shooter.stg()
		bullet = cjs.circ(8, 'w').XY(shooter).a2(s)
		bullet.startMoving(
				(shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
		)
	}
	ob.bounce = function (n) {
		n = N(n) ? n : 0
		var that = this,
				stage = this.getStage(),
				h = stage.H(),
				w = stage.W()
		cjs.tick(
				function () {
					var x = that.x, y = that.y
					if (x > w - that.W() - n || x < (n )) {
						that.vX('-')
					}
					if (y > h - that.H() - n || y < (n )) {
						that.vY('-')
					}
				})
		return this
	}
	ob.hitByBullet = ob.isPointInMyRectBounds = function (bullet) {
		var args = G(arguments), bullet = args[0],
				didHit = Math.pointInRectangle(
						bullet.cX(), bullet.cY(),
						{
							x: this.cX(),
							y: this.cY(),
							w: this.W(),
							h: this.H()
						}
				)
		if (args.n) {
			if (didHit) {
				this.remove()
			}
		}
		return didHit
	}
//chick for hits and remove if a hit
	ob.killAllIAmHitting = function () {
		var that = this,
				stage = this.getStage()
		_.each(stage.children, function (obj) {
			if (that != obj) {
				obj.hitByBullet(that, '-')
			}
		})
	}
	ob.makeMeAKiller = function () {
		var that = this
		cjs.tick(function () {
			that.killAllIAmHitting()
		})
		return this
	}
}
ob.tickX = function (func) {
	var ob = this
	cjs.tick(function () {
		ob.X(
				func()
		)
	})
	return this
}
ob.tickY = function (func) {
	var ob = this
	cjs.tick(function () {
		ob.Y(
				func()
		)
	})
	return this
}
ob.tickX = function (func) {
	var ob = this
	cjs.tick(function () {
		ob.X(
				func()
		)
	})
	return this
}
ob.tickY = function (func) {
	var ob = this
	cjs.tick(function () {
		ob.Y(
				func()
		)
	})
	return this
}
testInStage = function () {
	s = cjs.stg()
	s.bm('me', function (b) {
		me = b
		me.startMoving(10, 10)
		cjs.tick(function () {
			$l(me.inStage())
		})
	})
}