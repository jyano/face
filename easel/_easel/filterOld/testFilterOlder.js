BMC = function () {
	W()._(function () {
		h = w.i.h(0, 0, '+')
				.cir({r: 150, bf: 'me'})
				.cir({x: 500, y: 200, r: 100, bf: 'me'})
	})
}
BLUR = blr = function () {
	wMb(function (b) {
		var ag = 0, rg = 100, sp = 0.04
		z()
		s = St(500).drg().a().c('x').a(b.xy(100).cc())
		tt(function (e) {
			v = sin(ag += sp) * rg
			b.cc('+').fl([blF(v, v, 2)])
			s.u(e)
		})
	})
}
MASK = msk = function () {
	sss = function () {
		var args = G(arguments)
		z()
		stage = SuperStage(600).a()
		if (args.f) {
			stage.a(args.f)
			_.each(args.r,
					function (arg) {
						if (F(arg)) {
							arg(args.f)
						}
					})
		}
		return stage
	}
	wMb(function (b) {
		sss(b, TR)
		b.fl([
			aMF(
					Gx().lf(
							trx(1, 0), [0, 1], 0, 0, 200, 200
					).dr0(400).H().cc(400).cc('*')
			)
		]).cc(400)
	})
}
COLOR = clr = function (r) {
	var ag = 0, rg = 100, sp = 0.04
	wMb(function (b) {
		z();
		s = St(500).drg().a().c('X').a(b.xy(100))
		b.cc().fl([r == 'g' ? clF(.3, 1, .3, 1, 0, 0, 0, 0)
				: r == 'b' ? clF(.3, .3, 1, 1, 0, 0, 0, 0)
				: r == 'r' ? clF(1, .1, 1, 1, 0, 0, 0, 0)
				: r == 'rg' ? clF(1, 1, .1, 1, 1, 1, 20, 0)
				: clF(1, .1, 1, 1, 0, 0, 0, 0)]).cc('+')
	})
}
COLORMATRIX = cmx = function () {
	var g = G(arguments);
	g[0] = g[0] || 'a'
	wMb(function (b) {
				b.xy(100).cc();
				_e(g, function (mf) {
					b.clMF(mf, '+')
				})
			},
			St(500).drg().a().c('X'))
}
BLURFILT = function () {
	z()
	stage = createjs.stage('black', 800).tick().A()
	shape = new createjs.Shape().XY(100)
	stage.A(shape)
	shape.graphics.f("red").dc(0, 0, 50)
	var blurFilter = new createjs.BlurFilter(50, 50, 10)
	shape.filters = [blurFilter]
	var bounds = blurFilter.getBounds()
	shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height)
	shape.startMoving()
	shape.vx = 1
	shape.vy = 1
}
BLURFILT2 = function () {
	z()
	stage = createjs.stage('black', 800).tick().A()
	stage.bm('me',
			function (bm) {
				var blurFilter = new createjs.BlurFilter(5, 10)
				bm.filters = [blurFilter]
				var bounds = blurFilter.getBounds()
				bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
			}
	)
}
BLURFILT3 = function () {
	z()
	$l('welcome to BLUFILTER3')
	$l('here we will attempt an animated blur filter')
	stage = createjs.stage('black', 800).tick().A()
	stage.bm('me',
			function (bm) {
				bm.XY(100, 300).drag()
				var blurFilter = $blurFilter(5, 10)
				bm.filters = [blurFilter]
				var bounds = blurFilter.getBounds()
				bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
				var blurAmount = 0,
						blurMultiple = 40,
						speed = 0.06
				createjs.Ticker.on('tick', function () {
					$l('tick')
					var blur = Math.sin(blurAmount += speed) * blurMultiple;
					bm.filters = [$blurFilter(blur, blur, 2)]
					bm.updateCache()
				})
			})
}
 //
	BLUR = blr = function () {
		wMb(function (b) {
			var ag = 0, rg = 100, sp = 0.04
			z()
			s = St(500).drg().a().c('x').a(b.xy(100).cc())
			tt(function (e) {
				v = sin(ag += sp) * rg
				b.cc('+').fl([blF(v, v, 2)])
				s.u(e)
			})
		})
	}
	MASK = msk = function () {
		sss = function () {
			var args = G(arguments)
			z()
			stage = SuperStage(600).a()
			if (args.f) {
				stage.a(args.f)
				_.each(args.r,
						function (arg) {
							if (F(arg)) {
								arg(args.f)
							}
						})
			}
			return stage
		}
		wMb(function (b) {
			sss(b, TR)
			b.fl([
				aMF(
						Gx().lf(
								trx(1, 0), [0, 1], 0, 0, 200, 200
						).dr0(400).H().cc(400).cc('*')
				)
			]).cc(400)
		})
	}
	COLOR = clr = function (r) {
		var ag = 0, rg = 100, sp = 0.04
		wMb(function (b) {
			z();
			s = St(500).drg().a().c('X').a(b.xy(100))
			b.cc().fl([r == 'g' ? clF(.3, 1, .3, 1, 0, 0, 0, 0)
					: r == 'b' ? clF(.3, .3, 1, 1, 0, 0, 0, 0)
					: r == 'r' ? clF(1, .1, 1, 1, 0, 0, 0, 0)
					: r == 'rg' ? clF(1, 1, .1, 1, 1, 1, 20, 0)
					: clF(1, .1, 1, 1, 0, 0, 0, 0)]).cc('+')
		})
	}
	COLORMATRIX = cmx = function () {
		var g = G(arguments);
		g[0] = g[0] || 'a'
		wMb(function (b) {
					b.xy(100).cc();
					_e(g, function (mf) {
						b.clMF(mf, '+')
					})
				},
				St(500).drg().a().c('X'))
	}
	BLURFILT = function () {
		z()
		stage = createjs.stage('black', 800).tick().A()
		shape = new createjs.Shape().XY(100)
		stage.A(shape)
		shape.graphics.f("red").dc(0, 0, 50)
		var blurFilter = new createjs.BlurFilter(50, 50, 10)
		shape.filters = [blurFilter]
		var bounds = blurFilter.getBounds()
		shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height)
		shape.startMoving()
		shape.vx = 1
		shape.vy = 1
	}
	BLURFILT2 = function () {
		z()
		stage = createjs.stage('black', 800).tick().A()
		stage.bm('me',
				function (bm) {
					var blurFilter = new createjs.BlurFilter(5, 10)
					bm.filters = [blurFilter]
					var bounds = blurFilter.getBounds()
					bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
				}
		)
	}
	BLURFILT3 = function () {
		z()
		$l('welcome to BLUFILTER3')
		$l('here we will attempt an animated blur filter')
		stage = createjs.stage('black', 800).tick().A()
		stage.bm('me',
				function (bm) {
					bm.XY(100, 300).drag()
					var blurFilter = $blurFilter(5, 10)
					bm.filters = [blurFilter]
					var bounds = blurFilter.getBounds()
					bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
					var blurAmount = 0,
							blurMultiple = 40,
							speed = 0.06
					createjs.Ticker.on('tick', function () {
						$l('tick')
						var blur = Math.sin(blurAmount += speed) * blurMultiple;
						bm.filters = [$blurFilter(blur, blur, 2)]
						bm.updateCache()
					})
				})
	}