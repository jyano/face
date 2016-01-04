ColorFilter = $cFl = $cF = function (a, b, c, d, e, f, g, h) {
	return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
}
dO.cF = function (a, b, c, d, e, f, g, h) {
	var cf = $cF(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
FL1 = SCRATCHOFF = function () {
 
	var _mPt
	st = $St(1000).mO(1)
	st.bm('chicks', function (bm) {
		h = $H().s(.3)
		h.ss(45, 'r', 'round').ca(bm.image)
		bF = $bF(24, 24, 2)
		cMF = $cMF($cM(60))
		bm.fl(h.aF(), '-').ca(i)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			h.ca(i);
			bm.fl($aF(h), '-').ca(i);
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(
					M.av(_pt.x, mx),
					M.av(_pt.y, my)
			)
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
			bm.fl(h.aF(), '-').ca(i)
			_mPt = V(mPt)
		})
	})
}
FL2 = ERASEFL1 = function () {
	$.i('chicks', function (e, i) {
		$St()//cjs.Touch.enable(st)  //st.mO(1) !!!
		var isDrawing
		st.A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		)
		st.trDr()
		
		st.MD(function () {
			oldPt = st.m();
			oldMidPt = oldPt;
		});
		st.MU(function () {
			b.fl2($AF(h.ca(i))).ca()
		})
		st.MM(function () {
			var midPoint
			if (!st._dr) {
				return st.u()
			}
			midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
			h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			b.fl2($AF(h.ca(i))).ca()
		})
		//cursor
		st.h().f("#FFFFFF").dc(25)//.cu('pointer').bM()
	})
}

FL3 = ERASEFL11 = function () {
	$.i('chicks', function (e, i) {
		St().trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		).m({
					d: function () {
						oldPt = st.m();
						oldMidPt = oldPt;
					},
					u: function () {
						b.fl2($AF(h.ca(i))).ca()
					},
					m: function () {
						var midPoint
						if (!st._dr) {
							return st.u()
						}
						midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
						h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						b.fl2($AF(h.ca(i))).ca()
					}
				}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
	})
}
FL4 = ERASEDOT = function () {
	$.i('chicks', function (e, i) {
		St()
		st.enableMouseOver = true
		st.trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		)
		st.m({
			d: function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			},
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			m: function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
				oldPt = st.m()
				oldMidPt.x = V(midPoint)
				b.aF2(h.ca(i)).ca()
			}
		})
		cu = st.h('w').dc(25).cu('N')//.bM()
	})
}
FL5 = ERASEFL111 = function () {
	$.i('chicks', function (e, i) {
		St()
		st.enableMouseOver = true
		st.trDr().A(
				$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
		)
		cu = st.h('w').dc(25).cu('N').bM()
		st.m({
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			d: function () {
				mt = st.m()
			},
			m: function () {
				if (st._dr) {
					b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
				}
			}
		})
	})
}
FL6 = ERASEFLWORKS = function () {
	$.i('chicks', function (e, i) {
		St().trDr()
		//invisible ink!!!
		//so u constantly re-update the top layer's filter
		//it is an alpha filter so it only shows where u painted
		//so it starts of invisible
		//you can 'draw the layer' on
		h = $H().ss(40, 'r', 'r').C(.9).ca(i)
		b = $Bm(i).aF2(h)
		st.A(
				$Bm(i).al(.2).fl($FB(40), $CMF(20, -20, 80, 10), $FB(40)),
				$T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
				b)
		st.m({
			u: function () {
				b.fl2($AF(h.ca(i))).ca()
			},
			d: function () {
				m = st.m()
			},
			m: function () {
				if (st._dr) {
					h.dl(m, st.m()).ca(i)
					b.aF2(h).ca()
					m = st.m()
				}
			}
		})
	})
}
FL7 = ERASEFL = function () {
	$.i('chicks', function (e, i) {
		St().trDr()
		var m
		//invisible ink!!!
		//so u constantly re-update the top layer's filter
		//it is an alpha filter so it only shows where u painted
		//so it starts of invisible
		//you can 'draw the layer' on
		st.A(
				$Bm({
					i: i,
					fl: [$CMF(20, -20, 80, 10), $FB(40)],
					al: .2
				}),
				
				$Tc('Smudge!', 100, 'r', st),
				
				b = $Bm({
					i: i,
					aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
				})
		)
		
		st.m({
			u: function () {
				b.fl2(
						$AF(h.ca())
				).ca()
			},
			d: function () {
				m = st.m()
			},
			m: function () {
				if (st._md) {
					h.dl(m || st.m(), st.m()).ca()
					b.aF2(h).ca()
					m = st.m()
				}
			}
		})
	})
}