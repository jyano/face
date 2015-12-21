eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
sav = function (stage, a) {
	return function () {
		stage.sv(a)
	}
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.times(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
$.fit = fit = function (a, b, c) {
	return $.canvas(c || 'r', b || 700, b || 700).A().fit(a || 'me')
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
PROPBOX = function () {
	var imagesDiv = $div()
	dA = $divA('y', 200)(
			$span('prop box'),
			$hr(),
			$span('selected cutout:')
	)
	stage = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							stage.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable stage problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return stage
}
PROPBOX = function () {
	var imagesDiv = $.d()
	dA = $.dA('y', 200)($.sp('prop box'), $.hr(), $.sp('selected cutout:'))
	st = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, st).o('$$', sav(st, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							st.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable st problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return st
}
PROPBOX = function () {
	var imagesDiv = $.d()
	dA = $.dA('y', 200)($.sp('prop box'), $.hr(), $.sp('selected cutout:'))
	st = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, st).o('$$', sav(st, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							st.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable st problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return st
}
function selected(){
	SELECTED = function () {
		selected = function (bm) {
			SL(bm)
			bm.$(function () {
				cjs.Tween.removeAllTweens()
				bitmap = bm
				cjs.scaleShake(bm.dO)
			})
		}
		TextAdder = function (stage) {
			var f = $.f().a().C('x').P(10).W(300).dg()
			f.A(
					$.ip().id('text'),
					$.bt('for text', function () {
						var _text, theText, val = $l($('#text').val())
						$('#text').val('')
						_t = $T(val, 'w', 30, 100, 10)
						t = $Ct().A(_t)
						t.dO = _t
						SL(t)
						st.A(t)
						selected(t)
					}))
			return f
		}
		TextAdder2 = function (stage) {
			var form = $.f().C('x').P(10).W(300).dg()
			form(
					$textInput().id('text'),
					$.bt('for text', function () {
						var val = $l($('#text').val())
						$('#text').val('')
						var theText = EaselText(val, 'w', 30, 100, 10)
						SL(theText)
						stage.a(theText)
					}))
			return form
		}
		z()
		st = $.dragStage()
		st.bm('coin', function (bm) {
			coin = bm;
			SL(coin)
			selected(bm)
		})
		st.bm('sun', function (bm) {
			sun = bm;
			SL(bm)
			selected(bm)
		})
		TextAdder(st)
		st.bm('me', function (bm) {
			me = bitmap = bm
			SL(bm)
			bm.rgc('+')
			cjs.scaleShake(bm)
			//rotateShake(bm)
			selected(bm)
			st.bm('flame', function (bm) {
				flame = bm;
				SL(bm);
				selected(bm)
			})
			st.bm('guy', function (bm) {
				guy = bm;
				SL(bm);
				selected(bm)
			})
		})
		d = $.d('y', '+')
		loadImagesDiv = function () {
			d.E()
			$.eG('img', function (img) {
				d.A(
						$.imageSizeFuncCan(
								img.d, 1, function () {
									st.bm(img.d, function (bm) {
										SL(bm.sXY(.4));
										bm.rgc('+');
										selected(bm)
									})
								})
				)
			})
		}
		loadImagesDiv()
		d = $.dA('y', 500).A(
				$.bt('freeze', cjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bm.x(bm.x() + 10)
				}),
				$.bt('left', function () {
					bm.x(bm.x() - 10)
				}),
				$.bt('up', function () {
					bm.y(bm.y() - 10)
				}),
				$.bt('down', function () {
					bm.y(bm.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bm.sXY(1.1, '*')
				}),
				$.bt('smaller', function () {
					bm.sXY(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bm.sx(bm.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bm.sx(bm.sx() * .9)
				}),
				$.bt('taller', function () {
					bm.sy(bm.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bm.sy(bm.sy() * .9)
				}), $.br(),
				$.bt('CW', function () {
					bm.rt(bm.rt() + 10)
				}),
				$.bt('CCW', function () {
					bm.rt(bm.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bm))
				}),
				$.bt('set index to 3', function () {
					st.ix(bm, 3)
					pop('index: ' + st.ix(bm))
				}),
				$.bt('z-up', function () {
					st.ix(bm, st.ix(bm) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bm, st.ix(bm) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bm)
				}),
				$.bt('clone', function () {
					st.A($Ct().A(bm.ob.clone()))
				}), $.br(),
				$.bt('save', function () {
					st.sv(function () {
						loadImagesDiv()
					})
				}),
				$.bt('paint', function () {
					stagePainter(st)
				}),
				$.bt('', function () {
				})
		)
	}
	selected = function (bm) {
		
		//SL(bm)
		bm.$(function () {
			cjs.Tween.removeAllTweens()
			bm = bm
			scaleShake(bm.dO)
		})
	}
	SELECTED = function () {
		st = $dragStage()
		st.wBm('coin', function (bm) {
			coin = bm;
			SL(coin)
			selected(bm)
		})
		st.wBm('sun', function (bm) {
			sun = bm;
			SL(bm)
			selected(bm)
		})
		TextAdder(st)
		st.wBm('me', function (bm) {
			me = bm = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			//rotateShake(bm)
			selected(bm)
			st.wBm('flame', function (bm) {
				flame = bm;
				SL(bm);
				selected(bm)
			})
			st.wBm('guy', function (bm) {
				guy = bm;
				SL(bm);
				selected(bm)
			})
		})
		theImagesDiv = $div().a().drg().c('y')
		loadImagesDiv = function () {
			theImagesDiv.E()
			eaI(function (img) {
				theImagesDiv(
						$imageSizeFuncCan(
								img.d, 1, function () {
									st.wBm(img.d, function (bm) {
										SL(bm.sxy(.4));
										bm.rgc('+');
										selected(bm)
									})
								})
				)
			})
		}
		loadImagesDiv()
		d = $.dA(500).c('y')(
				$.bt('freeze', createjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bm.x(bm.x() + 10)
				}),
				$.bt('left', function () {
					bm.x(bm.x() - 10)
				}),
				$.bt('up', function () {
					bm.y(bm.y() - 10)
				}),
				$.bt('down', function () {
					bm.y(bm.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bm.sxy(1.1, '*')
				}),
				$.bt('smaller', function () {
					bm.sxy(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bm.sx(bm.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bm.sx(bm.sx() * .9)
				}),
				$.bt('taller', function () {
					bm.sy(bm.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bm.sy(bm.sy() * .9)
				}),
				$.br(),
				$.bt('CW', function () {
					bm.rt(bm.rt() + 10)
				}),
				$.bt('CCW', function () {
					bm.rt(bm.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bm))
				}),
				$.bt('set index to 3', function () {
					st.ix(bm, 3)
					pop('index: ' + st.ix(bm))
				}),
				$.bt('z-up', function () {
					st.ix(bm, st.ix(bm) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bm, st.ix(bm) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bm)
				}),
				$.bt('clone', function () {
					st.A(
							$Ct().A(
									bm.clone()
							)
					)
				}),
				$.br(),
				$.bt('save', function () {
					st.sv(function () {
						loadImagesDiv()
					})
				}),
				$.bt('paint', function () {
					stPainter(st)
				}),
				$.bt('', function () {
				})
		)
	}
	SELECTED = function () {
		selected = function (bm) {
			SL(bm)
			bm.$(function () {
				cjs.Tween.removeAllTweens()
				bitmap = bm
				cjs.scaleShake(bm.dO)
			})
		}
		TextAdder = function (stage) {
			var f = $.f().a().C('x').P(10).W(300).dg()
			f.A(
					$.ip().id('text'),
					$.bt('for text', function () {
						var _text, theText, val = $l($('#text').val())
						$('#text').val('')
						_t = $T(val, 'w', 30, 100, 10)
						t = $Ct().A(_t)
						t.dO = _t
						SL(t)
						st.A(t)
						selected(t)
					}))
			return f
		}
		TextAdder2 = function (stage) {
			var form = $.f().C('x').P(10).W(300).dg()
			form(
					$textInput().id('text'),
					$.bt('for text', function () {
						var val = $l($('#text').val())
						$('#text').val('')
						var theText = EaselText(val, 'w', 30, 100, 10)
						SL(theText)
						stage.a(theText)
					}))
			return form
		}
		z()
		st = $.dragStage()
		st.bm('coin', function (bm) {
			coin = bm;
			SL(coin)
			selected(bm)
		})
		st.bm('sun', function (bm) {
			sun = bm;
			SL(bm)
			selected(bm)
		})
		TextAdder(st)
		st.bm('me', function (bm) {
			me = bitmap = bm
			SL(bm)
			bm.rgc('+')
			cjs.scaleShake(bm)
			//rotateShake(bm)
			selected(bm)
			st.bm('flame', function (bm) {
				flame = bm;
				SL(bm);
				selected(bm)
			})
			st.bm('guy', function (bm) {
				guy = bm;
				SL(bm);
				selected(bm)
			})
		})
		d = $.d('y', '+')
		loadImagesDiv = function () {
			d.E()
			$.eG('img', function (img) {
				d.A(
						$.imageSizeFuncCan(
								img.d, 1, function () {
									st.bm(img.d, function (bm) {
										SL(bm.sXY(.4));
										bm.rgc('+');
										selected(bm)
									})
								})
				)
			})
		}
		loadImagesDiv()
		d = $.dA('y', 500).A(
				$.bt('freeze', cjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bm.x(bm.x() + 10)
				}),
				$.bt('left', function () {
					bm.x(bm.x() - 10)
				}),
				$.bt('up', function () {
					bm.y(bm.y() - 10)
				}),
				$.bt('down', function () {
					bm.y(bm.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bm.sXY(1.1, '*')
				}),
				$.bt('smaller', function () {
					bm.sXY(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bm.sx(bm.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bm.sx(bm.sx() * .9)
				}),
				$.bt('taller', function () {
					bm.sy(bm.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bm.sy(bm.sy() * .9)
				}), $.br(),
				$.bt('CW', function () {
					bm.rt(bm.rt() + 10)
				}),
				$.bt('CCW', function () {
					bm.rt(bm.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bm))
				}),
				$.bt('set index to 3', function () {
					st.ix(bm, 3)
					pop('index: ' + st.ix(bm))
				}),
				$.bt('z-up', function () {
					st.ix(bm, st.ix(bm) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bm, st.ix(bm) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bm)
				}),
				$.bt('clone', function () {
					st.A($Ct().A(bm.ob.clone()))
				}), $.br(),
				$.bt('save', function () {
					st.sv(function () {
						loadImagesDiv()
					})
				}),
				$.bt('paint', function () {
					stagePainter(st)
				}),
				$.bt('', function () {
				})
		)
	}
	SELECTED = function () {
		st = dragStage()
		st.wBm('coin', function (bm) {
			coin = bm;
			SL(coin)
			selected(bm)
		})
		st.wBm('sun', function (bm) {
			sun = bm;
			SL(bm)
			selected(bm)
		})
		TextAdder(st)
		st.wBm('me', function (bm) {
			me = bitmap = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			//rotateShake(bm)
			selected(bm)
			st.wBm('flame', function (bm) {
				flame = bm;
				SL(bm);
				selected(bm)
			})
			st.wBm('guy', function (bm) {
				guy = bm;
				SL(bm);
				selected(bm)
			})
		})
		theImagesDiv = $div().a().drg().c('y')
		loadImagesDiv = function () {
			theImagesDiv.E()
			eaI(function (img) {
				theImagesDiv(
						$imageSizeFuncCan(
								img.d, 1, function () {
									st.wBm(img.d, function (bm) {
										SL(bm.sxy(.4));
										bm.rgc('+');
										selected(bm)
									})
								})
				)
			})
		}
		loadImagesDiv()
		d = $divA(500).c('y')(
				$.bt('freeze', createjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bitmap.x(bitmap.x() + 10)
				}),
				$.bt('left', function () {
					bitmap.x(bitmap.x() - 10)
				}),
				$.bt('up', function () {
					bitmap.y(bitmap.y() - 10)
				}),
				$.bt('down', function () {
					bitmap.y(bitmap.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bitmap.sxy(1.1, '*')
				}),
				$.bt('smaller', function () {
					bitmap.sxy(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bitmap.sx(bitmap.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bitmap.sx(bitmap.sx() * .9)
				}),
				$.bt('taller', function () {
					bitmap.sy(bitmap.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bitmap.sy(bitmap.sy() * .9)
				}),
				$.br(),
				$.bt('CW', function () {
					bitmap.rt(bitmap.rt() + 10)
				}),
				$.bt('CCW', function () {
					bitmap.rt(bitmap.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('set index to 3', function () {
					st.ix(bitmap, 3)
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('z-up', function () {
					st.ix(bitmap, st.ix(bitmap) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bitmap, st.ix(bitmap) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bitmap)
				}),
				$.bt('clone', function () {
					st.a(
							EaselContainer().a(
									SuperDisplayObject(bitmap.ob.clone())
							)
					)
				}),
				$.br(),
				$.bt('save', function () {
					st.sv(function () {
						loadImagesDiv()
					})
				}),
				$.bt('paint', function () {
					stPainter(st)
				}),
				$.bt('', function () {
				}),
				///////////
				$.bt('freeze', createjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bitmap.x(bitmap.x() + 10)
				}),
				$.bt('left', function () {
					bitmap.x(bitmap.x() - 10)
				}),
				$.bt('up', function () {
					bitmap.y(bitmap.y() - 10)
				}),
				$.bt('down', function () {
					bitmap.y(bitmap.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bitmap.sxy(1.1, '*')
				}),
				$.bt('smaller', function () {
					bitmap.sxy(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bitmap.sx(bitmap.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bitmap.sx(bitmap.sx() * .9)
				}),
				$.bt('taller', function () {
					bitmap.sy(bitmap.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bitmap.sy(bitmap.sy() * .9)
				}),
				$.br(),
				$.bt('CW', function () {
					bitmap.rt(bitmap.rt() + 10)
				}),
				$.bt('CCW', function () {
					bitmap.rt(bitmap.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('set index to 3', function () {
					st.ix(bitmap, 3)
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('z-up', function () {
					st.ix(bitmap, st.ix(bitmap) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bitmap, st.ix(bitmap) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bitmap)
				}),
				$.bt('clone', function () {
					st.a(
							EaselContainer().a(
									SuperDisplayObject(bitmap.ob.clone())
							)
					)
				}),
				$.br(),
				$.bt('save', function () {
					st.sv(function () {
						loadImagesDiv()
					})
				}),
				$.bt('paint', function () {
					stPainter(st)
				}),
				$.bt('', function () {
				})
		)
	}
}