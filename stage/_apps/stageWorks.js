MTLT = function () {
	St()
	h.graphics.C('r', 'b')
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 1390)
	if (R()) {
		h.cp()
	}
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
GROW = function () {
	z()
	$St(500, 500).bm('me', function (bm) {
		b = bm
		bm.grow().dg()
	})
}//F}}
//function ui() {
STF = SETTRANSFORM = function () {
	s = cjs.stage(800).A()
	s.bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
STGG = function () {
	$.c('y', 300, 100).id('someId')
	$St('someId').bm('me')
	$St($.c('o', 400, 200)).bm('me')
	$St('z', 500, 300).bm('me').GX()._dc()
	$St(1000, 500)
			.bm('me', function (bm) {
				bm.spin().drag()
			})
			.bm('me', function (bm) {
				bm.sXY(0.5, 0.3).spin().drag()
			})
			.Sh().XY(200).graphics.FS()._dc(4)
	_.t(10, function () {
		$St($r(), 200, 200).bm('me', function (me) {
			me.drag()
		})
	})
}
INST = INSTAGE = function () {
	$St().bm('me', function (me) {
		me.grow()
		$t(function () {
			me.x = me.x + 10;
			$l(me.inStage())
		})
	})
}
TX1 = BAS = BASELINE = function () {
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
	s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
}
TX2 = LINEH = function () {
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.A(
			t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
	)
	s.A(
			t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
	)
	s.A(
			t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
	)
}
TX3 = LINEW = function () {
	z()
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
	s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
}
TX4 = ALIGN = function () {
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
	})
	//textAlign
	s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
}
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