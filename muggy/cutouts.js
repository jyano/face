$.fn.selPic = function () {
	$('.pic').e(function () {
		$(this).C('b')
	})
	this.parent().C('y')
}

$.fn.dots = function () {
	var el = this
	el.copy()
	el.DOTS = []
	el.dats = []
	el.$(function (x, y) {
		x = parseInt(x)
		y = parseInt(y)
		el.cir(x, y)
		el.DOTS.push([x, y])
		el.dats.push(x);
		el.dats.push(y) //vestige from phaser physics?
		el.line(el.DOTS)
	})
	el.$$(function (X, Y) {
		var du
		//el.C('X')
		el.off('click')
		el.closePath()  //el.paste() // el.copy()  //el.save()
		el.clear() //du = el.toDataURL()
		el.clip()
		el.paste() //el.fit(du)
	})
	return el
}
$.fn.snap = function (fn) {
	$.po('/img', {
		d: this.canvas.toDataURL(),
		dats: this.dats //vestige from phaser physics?
	}, fn)
}

$.cut = function (m) {
	z();
	m = m || 'me'
	$('body').A(
			$.bt('save sprite', function () {
				c.snap(CUTOUTS)//; EDIT()
			}), $.br(2),
			$.bt('start cut', function () {
				c.dots()
			}), $.br(2),
			$.bt('restart cut', function () {
				$.cut(m)
			}), $.br(2),
			c = $.c('r', 500, 500).A().fit(m)
	)
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.aj({
				type: 'DELETE',
				url: o.url,
				data: o.data,
				success: function () {
					rmParOf(bt)
					function rmParOf(bt) {
						$(bt).pa().rm()
					}
				}
			})
		})
	}
	$.fm();
	section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
	y = 80
	$.eJ('/img', function (img) {
		var i
		i = $.i(img.d)
		i.WH(100, 100)
		i.$(function () {
			$.po('/changeMug', {url: img.d}, function () {
				i.selPic()
			})
		})
		$.dA('b', 100, 100, '+')
				.left(y).top(200)
				.K('pic')
				.A(i, $.btX('/img', img))
		y += 220
	})
}
CUTOUTS = function () {
	$.bX = $.btX = function () {
		var g = G(arguments), o = {url: g.f, data: g.s}
		return $.bt('X', function () {
			var bt = this
			$.aj({
				type: 'DELETE',
				url: o.url,
				data: o.data,
				success: function () {
					rmParOf(bt)
					function rmParOf(bt) {
						$(bt).pa().rm()
					}
				}
			})
		})
	}
	$.fm();
	section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
	y = 80
	$.eJ('/img', function (img) {
		var i
		i = $.i(img.d)
		i.WH(100, 100)
		i.$(function () {
			$.po('/changeMug', {url: img.d}, function () {
				i.selPic()
			})
		})
		$.dA('b', 100, 100, '+')
				.left(y).top(200)
				.K('pic')
				.A(i, $.btX('/img', img))
		y += 220
	})
}
sv = function (x, fn) {
	$.po('/img', {
		d: xx(C(x)).u(), dats: x.dats
	}, fn)
}
cut = function (m) {
	$.format()
	// x =   xx(  $.canvas().id('can').W(100).H(100)  ).bc('w').Z(7).fit(m||'me')
	x = $.c('r', 500, 500).A().fit(m || 'me')
	// x.dots()
	// x.copy()
	s1.A($.bt('save sprite', function () {
				x.snap()
				//fresh()
				EDIT()
			}),
			$.br(2),
			$.bt('start cut', function () {
				//x.copy()
				x.dots()
			}),
			$.br(2),
			$.bt('restart cut', function () {
				cut(m)
			}), $.br(2),
			$.bt('file uploads',
					function () {
						window.location = '/wap/uploads'
					}
			))
	s2.A(
			$.h2('click to start cut-out..'), x
			
			//   , dv('o',500,200).pp()(x)
	)
}
CUTOUTS = function () {
	$.fm()
	section1.A(
			$.h4('click a pic to select it as your mug, or the x to delete it'))
	$.getJSON('/img', function (cutouts) {
		var top = 80
		_.e(cutouts, function (cutout) {
			var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
			imgDiv.A(
					$.img(cutout.d).WH(100).$(function (q) {
						//	$l('changemug')
						$l(cutout.d)
						$.po('/changeMug', {
							url: cutout.d
						})
						////
						$('.pic').ea(function (index) {
							$(this).C('b')
						})
						$(this).parent().C('y')
					}),
					$.bt('X', function () {
						var that = this
						$.ajax({
							data: cutout,
							url: '/img',
							type: 'DELETE',
							success: function (res) {
								$(that).parent().remove()
							}
						})
					})
			)
			top += 220
		})
	})
}
$mug = function (fn) {
	$.get('/getMug', fn)
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
$cutout = function (q) {
	return {
		un: q.un,
		d: q.body.d,
		dats: q.body.dats,
		data: q.body.d,
		physicsData: q.body.dats
	}
} 