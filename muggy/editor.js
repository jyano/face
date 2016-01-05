EDIT = function () {
	st = $St('z', 400)
	ct = $.Ct().A(d = $.d(), st.canvas)
	$.eJ('/img', function (i) {
		c = d.Can('o', 40, 40)
		c.fit(i.d)
		c.$(function () {
			st.bm(i.d, function (bm) {
				bm.rC(200, 200).XY(200, 300).TR()
			})
		})
		c.mar(20).C('r')
		// d.A($.btX('/img', i, '-'))
	})
	$.$$(function () {
		$.po('/img', {d: st.du()}, $.rl)
	})
	d.C('b').al(.6).W(400).H(100)
	d.ov('scroll').css('overlflow-y', 'auto')
}
EDIT0 = function () {
	st = St(800)
	var imgHolder = $.d()
	CT(imgHolder, st).o('$$', sav(st, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return st
}
EDIT1 = function () {
	st = St(800)
	var imgHolder = $.d()
	container = CT(imgHolder, st)
	container.o('$$', sav(st, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).click(function () {
					st.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return st
}
EDITOR = function () {
	z()
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
			st = $.dragStage(),
			imgHolder = $.d('y', '+')
	$.eG('img', function (i) {
		imgHolder($.imgSizeFnCan(
				i.d, 1, function () {
					st.bm(i.d, function (bm) {
						SL(bm.sxy(.4))
					}, '+')
				}))
	})
	TextAdder2(st)
}
EDIT = function () {
	st = $St('z', 400)
	ct = $.Ct().A(d = $.d(), st.canvas)
	$.eJ('/img', function (i) {
		c = d.Can('o', 40, 40)
		c.fit(i.d)
		c.$(function () {
			st.bm(i.d, function (bm) {
				bm.rC(200, 200).XY(200, 300).TR()
			})
		})
		c.mar(20).C('r')
		// d.A($.btX('/img', i, '-'))
	})
	$.$$(function () {
		$.po('/img', {d: st.du()}, $.rl)
	})
	d.C('b').al(.6).W(400).H(100)
	d.ov('scroll').css('overlflow-y', 'auto')
}
EDIT0 = function () {
	st = St(800)
	var imgHolder = $.d()
	CT(imgHolder, st).o('$$', sav(st, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return st
}
EDIT1 = function () {
	st = St(800)
	var imgHolder = $.d()
	container = CT(imgHolder, st)
	container.o('$$', sav(st, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).click(function () {
					st.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return st
}
EDITOR = function () {
	z()
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
			st = $.dragStage(),
			imgHolder = $.d('y', '+')
	$.eG('img', function (i) {
		imgHolder($.imgSizeFnCan(
				i.d, 1, function () {
					st.bm(i.d, function (bm) {
						SL(bm.sxy(.4))
					}, '+')
				}))
	})
	TextAdder2(st)
}
EDIT0 = function () {
	stage = St(800)
	var imgHolder = $div()
	CT(imgHolder, stage).o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return stage
}
EDIT1 = function () {
	stage = St(800)
	var imgHolder = $div()
	container = CT(imgHolder, stage)
	container.o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.canvas('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
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
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}

EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
sav = function (st, a) {
	return function () {
		st.sv(a)
	}
}
EDIT0 = function () {
	St()
	var imgHolder = $.d()
	CT(imgHolder, st).$$(sav(st, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return st
}
EDIT1 = function () {
	St()
	var imgHolder = $.d()
	ct = CT(imgHolder, stage)
	ct.$$(sav(st, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).$(function () {
					st.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
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
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					
					
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}
EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})mug.js:2817
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
  
 
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}

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
EDIT0 = function () {
	stage = St(800)
	var imgHolder = $div()
	CT(imgHolder, stage).o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return stage
}
EDIT1 = function () {
	stage = St(800)
	var imgHolder = $div()
	container = CT(imgHolder, stage)
	container.o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.canvas('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
}
 
 
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}
EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
 
    