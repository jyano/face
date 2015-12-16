function touch() {
	SHALL = PRE = DRAWEDG = RC = EDG = DOT = function () {
		W([1200, 600, 2400, 600]);
		var p1, p2, d, l
		p = w.p(400, 400, '+')
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.edg(p1.x, p1.y, p2.x, p2.y).K('pf')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
		p.IsBullet(true)
		w.pre('pf', function (f, cx) {
			if (p.shall) {
				cx.en(0)
			}
		})
		w.b(function (cx) {
			p.shall = false
			if (!cx.pt().y && p.lV().y < 0) {
				return
			}
			cx.w(p, 'pf', function () {
				c = cx
				v = cx.pt()
				if (cx.pt().y) {
					dif = (p.Y()) - cx.pt().y
					$l(dif)
					if (dif > -10) {
						p.shall = true
					}
				}
			})
		})
		//w.end(function(cx){cx.w('pf', function(){$l('end')})})
	}
	TAPSHOOT = function () {
		W({g: 0}) // u cant shoot when ur dead!
		p = w.p(800, 300).cn('thrust').aD('++')
		w.tim(7)
		w.b(function (cx) {
			cx.w('bul', 'tim', function (tim) {
				tim.B().kill()
			})
			cx.w('bul', p, function () {
				this.B().kill()
			})
			cx.w('tim', p, function () {
				p.kill()
			})
		})
		$.click(function (e) {
			var x = e.pageX - p.X(),
					y = e.pageY - p.Y(),
					rot = M.tD(M.atan(y / x)),
					adj = x > 0 ? 90 : 270
			p.rot(rot + adj).I(x / 20, y / 20)
			w.bul(p.wP(0, -100), 10).bS({i: 'sun', sc: .1}).I(x, y)
		})
		//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
	}
}