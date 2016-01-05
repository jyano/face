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
CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug', {url: defaultMug},
			function () {
				z()
				TWEEN()
			})
}
CHANGEMUGTX = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug', {url: defaultMug},
			function () {
				z()
				TWEEN()
			})
}
selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		createjs.Tween.removeAllTweens()
		bitmap = bm
		scaleShake(bm.dO)
	})
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
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
function textAdder() {
	TextAdder2 = function (st) {
		var f = $.f().c('x').P(10).W(300).dg()
		f.A(
				$.ip().id('text'),
				$.bt('for text', function () {
					var val = $l($('#text').v())
					$('#text').v('')
					st.A($Tx(val, 'w', 30, 100, 10).SL())
				}))
		return form
	}
	TextAdder = function (st) {
		var f = $.f().A().c('x').P(10).w(300).dg().A(
				$.ip().id('text'),
				$.bt('for text', function () {
					var val = $l($('#text').v())
					$('#text').val('')
					var theText = $Ct().A($Tx(val, 'w', 30, 100, 10)).SL().a2(st)
					theText.dO = _text
					selected(theText)
				}))
		return f
	}
	EDITOR = function () {
		var r = '#0FF', size = 2, oX = 0, oY = 0, shape
		var st = dragStage()
		imgHolder = $div().a().drg().c('y')
		eaI(function (img) {
			imgHolder($imageSizeFuncCan(
							img.d, 1, function () {
								st.bm(img.d,
										function (bm) {
											SL(bm.sxy(.4))
										}
										, '+')
							} //rgc
					)
			)
		})
		TextAdder2(st)
	}
}
selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		createjs.Tween.removeAllTweens()
		bitmap = bm
		scaleShake(bm.dO)
	})
}
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}