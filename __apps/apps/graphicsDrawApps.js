function graphicsApps() {
	$S$ = function () {
		return st = _$St().t()
	}
	GXPOL = function () {
		$S$().Gx().FS().poly([vs1])
	}
	GXLT = function () {
		$S$().Gx().FS()._mt(100, 300)._lt(300, 100)._lt(500, 200)._lt(800, 200)
				._lt(100, 300)
	}
	GXP = function () {
		$S$().Gx().FS()._pol(vs1)
	}
	GX1 = function () {
		st = _$St().t()
		//good gx = $Sh().a2(st).graphics
		//good gx = st.Sh().graphics
		gx = st.Gx()
		gx.C('b').dc(200, 100, 40)
	}
	GX2 = function () {
		st = _$St().t()
		//good gx = $Sh().a2(st).graphics
		//good gx = st.Sh().graphics
		gx = st.Gx().SS()
		$.i('me', function (img) {
			gx.F()
			gx.dc(200, 200, 200).S()
			gx.dc(400, 400, 200).S()
			gx.dc(700, 700, 200).S()
			gx._bf(img)
			gx.dc(200, 200, 200).S()
			gx.dc(400, 400, 200).S()
			gx.dc(700, 700, 200).S()
		})
	}
	GOB = function () {
		st = _$St().t()
		//good gx = $Sh().a2(st).graphics
		//good gx = st.Sh().graphics
		h = st.Sh().drag()
		gx = h.graphics.SS()
		$.i('me', function (img) {
			gx.F()
			//gx._bf(img)
			gx.dcO({x: 100, y: 200, r: 200})
			gx.C('R').dcO({x: 200, y: 200, r: 200})
			gx.C('b', 'g', 30)._dc(100, 300)
		})
	}
	REC1 = function () {
		st = _$St().t()
		h = st.Sh().drag()
		gx = h.graphics
		gx.FS()._dr()
	}
	GDR = function () {
		st = _$St().t()
		gx = st.Gx().FS()._dr(100, 100, 500, 10)
		st.Gx().FS()._dr(500, 10)
	}
	graphicsTestApp()
	function graphicsTestApp() {
		GRAPHTEST8 = function () {
			St();
			img = $.i('me', function () {
				s.ct().A(h = $Sh())
				gx = h.graphics.FS()
				s.A($Bm(img))
				gx.ss(32).dr(20, 20, 920, 360);
				fns = [
					function () {
						return $Sh(12, 10)
								.lf('b', 'g', 130).dr(130)
					},
					function () {
						return $Sh(40, 10, 'b', 16)
								.ls('r', 'w', 70, 140).de(70, 140)
					},
					function () {
						return $Sh(80, 80)
								.C('b', 8).rf('w', 'y', 40).dc(40)
					},
					function () {
						return $Sh(12, 10, 18)
								.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
					},
					function () {
						return $Sh(12, 12, 'g', 'r', 8)
								.rr(130, 30)
					}, //w(h) and r
					function lt() {
						return $Sh().C('o')
								.ss(16, 'round', 'round')
								.mt([40, 10], [90, 90], [90, 140])
					},
					function star() {
						return $Sh(80, 85, 'y', 'b', 3)
								.pStr(0, 0, 80, 5, .8, -95)
					},
					function hex() {
						return $Sh(80, 40, 'p')
								.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
					}
				]
				_.e(fns, withEachFn)
				function withEachFn(cont, i) {
					var W = 155, H = 155, P = 5, C = 4 //pad, cols
					s.A(tile(cont()).XY(
							42 + (W + P) * (i % C),
							42 + (i / C | 0) * (H + P)))
				}
			})[0]
			tile = createTile = function (x, y) {
				var bg, til
				bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
				til = cjs.ct().A(bg)
				if (N(x)) {
					til.X(x)
				}
				if (N(y)) {
					til.Y(y)
				}
				if (O(x)) {
					til.A(x)
				}
				return til
			}
		}
		XX6 = GXTX = GRAPHICSTEST = function () {
			stage = cjs.stage(800, 500).A()
			canvas = stage.canvas
			// grab canvas width and height for later calculations:
			w = canvas.width
			h = canvas.height
			img = $.img('me', layout)[0]
			function layout() {
				var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
					createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
				var padding = 5
				var _width = 155
				var _height = 155
				var cols = 4
				var space = 0
				var border = createBorder();
				_.times(arr.length, function (i) {
					var tile = arr[i]()
					tile.x = 42 + (_width + padding) * (i % cols)
					tile.y = 42 + (i / cols | 0) * (_height + padding)
					stage.A(tile)
				})
				stage.A(border)
				stage.update()
			}
			
			function createBorder() {
				var s = cjs.shape()
				s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
				return cjs.container().A(s)
			}
			
			function createBitmapFill() {
				var container = createTile();
				var s = cjs.shape().XY(12, 10)
				var mtx = new createjs.Matrix2D().rotate(1)
				s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
						.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
				return cjs.container().A(s)
			}
			
			function createRectGradientFill() {
				var s = cjs.shape().XY(12, 10)
				s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
				return createTile().A(s)
			}
			
			function createEllipse() {
				var s = cjs.shape().XY(40, 10)
				s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
						.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
						.drawEllipse(0, 0, 70, 140, 8)
				return createTile().A(s)
			}
			
			function createRadialGradientFill() {
				var s = cjs.shape().XY(80)
				s.graphics.ss(8).beginStroke("#f0f")
						.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
				return createTile().A(s)
			}
			
			function createLineTo() {
				var s = cjs.shape()
				s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
						.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
				return createTile().A(s)
			}
			
			function createHex() {
				var s = cjs.shape().XY(80, 40)
				s.graphics.beginFill("pink")
						.drawPolyStar(0, 0, 40, 6)
						.drawPolyStar(0, 75, 40, 6)
						.drawPolyStar(45, 45, 20, 6)
				return createTile().A(s)
			}
			
			function createStar() {
				var s = cjs.shape().XY(80, 85)
				s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
						.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
				return createTile().A(s)
			}
			
			function createRoundRect() {
				var s = cjs.shape().XY(12)
				s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
				return createTile().A(s)
			}
			
			function createTile() {
				var bg = cjs.shape()
				bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
				bg.alpha = 0.25
				return cjs.container().A(bg)
			}
		}
	}
}
	