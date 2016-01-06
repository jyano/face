_$Bfl = function (x, y, q) {
	return new cjs.BlurFilter(x, y, q)
}
$Bfl = BlurFilter = $bFl = $BF = $Bf = $FB = $FlB = $bF = function () {
	var g = G(arguments), fl, o
	o = {x: g.f, y: g.s, q: g.t}
	o.y = N(o.y) ? o.y :
			o.x
	o.q = o.q || 1
	return _$Bfl(o.x, o.y, o.q)
}
dO.flBds = function () {
	return this.gFl().getBounds()
}
dO.bF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
BLR = function () {
	$St().bm('me', function (bm) {
		bm.dg()
		bm.aFl(_$Bfl(20, 10))
		var b = bm.flBds()
		bm.cache(
				b.x - 50,
				b.y - 50,
				b.width + 400,
				b.height + 400)
	})
}
function withMug() {
	BL1 = BLUR = function () {
		s = $St(500).dg()
		s.mug(function (b) {
			var ag = 0, rg = 100, sp = 0.04
			z()
			s.C('x')
			b.XY(100)
			b.cc()
			T.on('tick', function (e) {
				v = M.sin(ag += sp) * rg
				b.cc('+').fl([blF(v, v, 2)])
				s.u(e)
			})
		})
	}
}
BL2 = BLURFILT = function () {
	st = $St('z', 800)
	h = $H().XY(100).a2(st).f('r').dc(50)
	fl = h.fl($bF(50, 50, 10))
	bd = fl.getBounds()
	h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
	/*
	 h.startMoving()
	 h.vx = 1
	 h.vy = 1
	 */
}
BL4 = ANIMBLUR = function () {
	$l('welcome to BLUFILTER3')
	$l('here we will attempt an animated blur filter')
	st = stage = $St()
	var blurAmount = 0, blurMultiple = 40, speed = 0.06
	st.bm('me',
			function (bm) {
				bm.XY(100, 300).dg()
				bF = $bF(5, 10)
				bm.filters = [bF]
				bd = bounds = bF.getBounds()
				bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
				/*
				 T.on('tick', function () {
				 blur = M.sin(blurAmount += speed) * blurMultiple;
				 bm.filters = [$bF(blur, blur, 2)]
				 bm.ca()
				 })*/
			})
}
BLR4 = function () {
	Q(function () {
		st = $St().t()
		h = st.h(100, 100, 'r').cir(50)
		$.in(1, function () {
			h.cF(0, 0, 0, 1, 0, 0, 255, 0)
			h.ca(-50, -50, 100, 150)
		})
		$.in(2, function () {
			f = h.bF(59, 59, 1)
			bd = f.b()
			h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h)
		})
	})
}
CHARCOAL = BLF2 = function () {
	var isDrawing
	st = $St()
	t = $T("Loading...")
	t.set({x: st.W() / 2, y: st.H() - 40})
	t.textAlign = "center"
	$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
		i = img[0]
		h = $H().a2(st)
		bm = new cjs.Bitmap(i)
		bl = new cjs.Bitmap(i)
		bl.filters = [
			new cjs.BlurFilter(24, 24, 2),
			new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
		]
		bl.cache(0, 0, 960, 400)
		t.text = "Click and Drag to Reveal the Image.";
		st.A(bl, t, bm)
		st.A(cu = $H('r').dc(25))
		cu.cursor = "pointer"
		st.enableMouseOver()
		st.on("stagemousedown", function (e) {
			o = new cjs.Point(st.mouseX, st.mouseY)
			oM = o;
			isDrawing = true
		})
		st.on("stagemouseup", function (e) {
			isDrawing = false
		})
		st.on("stagemousemove", function (e) {
			var m
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return
			}
			m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
			$l('draw')
			h.graphics.ss(40, "round", "round");
			h.graphics.s("rgba(0,0,0,0.2)")
			// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
			h.graphics.mt(m.x, m.y)
			h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
			o.x = st.mouseX;
			o.y = st.mouseY;
			oM.x = m.x;
			oM.y = m.y
		})
	})
}
/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */
BLF1 = function () {
	st = $St()
	var isDrawing
	$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
		i = img[0]
		h = $H().a2(st)
		bm = new cjs.Bitmap(i)
		bl = new cjs.Bitmap(i)
		bl.filters = [
			new cjs.BlurFilter(24, 24, 2),
			new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
		]
		bl.cache(0, 0, 960, 400)
		//t.text = "Click and Drag to Reveal the Image.";
		st.A(bl, t, bm)
		updateCacheImage(false)
		st.A(cu = $H('r').dc(25))
		cu.cursor = "pointer"
		st.enableMouseOver()
		st.on("stagemousedown", function (e) {
			oldPt = new cjs.Point(st.mouseX, st.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		})
		st.on("stagemouseup", function (e) {
			updateCacheImage(true);
			isDrawing = false
		})
		st.on("stagemousemove", function (e) {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return;
			}
			midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
			h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
			h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true)
		})
	})
}
function updateCacheImage(upd) {
	if (upd) {
		h.updateCache()
	}
	else {
		h.ca(0, 0, i.width, i.height)
	}
	mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
	bm.filters = [mskF]
	if (upd) {
		bm.ca(i)
	}
	else {
		bm.ca(i)
	}
	st.u()
}
BLF3 = function () {
	$.i('me', function (img) {
		iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
		s = $St();
		s.enableMouseOver()
		h = $H().a2(s)
		i = img[0]
		bm = $Bm(i)
		bl = $Bm(i)
		bl.Fl($bF(24, 24, 2), i)
		bl.Fl($cMF($cM(60)), i)
		bl.ca(0, 0, 960, 400)
		s.A(bl, bm)
		h.ca(i)
		bm.fl($aF(s.cc()), i);
		s.u()
		// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
		s.MU(function (e) {
			iDr = 0
			h.ca(i)
			bm.fl($aF(s), i)
			s.u()
		})
		s.MD(function (e) {
			iDr = oM = o = s.m()
		})
		s.MM(function (e) {
			var mP             //   cu.x = s.mX(); cu.y = s.mY()
			if (!iDr) {
				s.u();
				return
			}
			mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
			h.ss(40, "round", "round")
					.C("rgba(0,0,0,0.2)")
					.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
			o = s.m()
			oM = V(mP)
			h.ca(i)
			bm.fl($aF(s.cc()), i);
			s.u()
		})
	})
}
 
 