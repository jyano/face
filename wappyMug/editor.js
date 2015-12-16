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
  
 
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
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
FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
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
 
  
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
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
FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
}
 function avatar(){
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
	 AVATAR = function () {
		 z()
		 //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
		 //  s=St(400)
		 st = $.dragStage().t()
		 //d = qq( st.ob.canvas )
		 //d2=$.d().drg().w(500).h(500).c('o')
		 //CT(d, st).o('$$',  sav(st,'avatar') )
		 st.$$(function () {
			 st.snap('avatar')
		 })
		 d = $.d('x', '+')
		 $.Gj('img', function (i) {
			 _.e(i, function (img) {
				 d.A($.c(100, 100).A().fit(img.d).$(function () {
					 st.bm(img.d, TR, '+')
				 }))
			 })
		 })
		 //d2( st )
	 }
	 AVATAR = function () {
		 z()
		 //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
		 //  s=St(400)
		 st = $.dragStage().t()
		 //d = qq( st.ob.canvas )
		 //d2=$.d().drg().w(500).h(500).c('o')
		 //CT(d, st).o('$$',  sav(st,'avatar') )
		 st.$$(function () {
			 st.snap('avatar')
		 })
		 d = $.d('x', '+')
		 $.Gj('img', function (i) {
			 _.e(i, function (img) {
				 d.A($.c(100, 100).A().fit(img.d).$(function () {
					 st.bm(img.d, TR, '+')
				 }))
			 })
		 })
		 //d2( st )
	 }
 }
 function fancy(){
	 $.dragStage = function (x, y) {
		 dragFrame = function (div) {
			 var outerDiv = $.div('r').drag().pad(20).A()
			 div = div || $.div('y', 50, 50).mar(20)
			 div.on('mousedown', function (e) {
				 e.stopPropagation()
			 })
			 outerDiv.A(div)
			 return outerDiv
		 }
		 c = $.canvas('g', 400)
		 s = new cjs.Stage(c[0]).tick()
		 dragFrame(c).A()
		 return s
	 }
	 FANCYEDIT = function (x, y) {
		 z()
		 canvas = $.canvas('g', 400)
		 stage = new cjs.Stage(canvas[0]).tick()
		 frame = $.dragFrame(theSpan = $.span())
		 theSpan.A(
				 $.button('X', function () {
					 frame.remove()
				 }),
				 $.button('pics', function () {
					 $.imagesDiv(stage)
				 }),
				 $.button('transform'),
				 $.button('text'),
				 $.button('paint', function () {
					 _paintColor = '#0FF'
					 var size = 10, oX = 0, oY = 0, shape
					 var paintStage = $.dragStage()
					 // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					 paintStage.bm(
							 stage.du(), //?
							 function (m) {
								 m.XY(40).sXY(.4)
								 stagePainter(paintStage)
							 })
				 }),
				 $.button('cut'),
				 $.button('save'))
		 theSpan.A($.br(), canvas)
		 theSpan.A($.div().A(
				 $.button('clear', function () {
					 stage.removeAllChildren()
				 }),
				 $.button('flat', function () {
					 stage.removeAllChildren()
					 stage.bm(stage.toDataURL(), function (bm) {
						 bm.drag()
					 })
				 }),
				 $.button('clone', function () {
					 var newSpan = $span()
					 var newStage = dragStage(newSpan)
					 newStage.bm(stage.du(), function (bm) {
						 SL(bm)
					 })
				 }),
				 $.button('recur', function () {
					 stage.bm(stage.du(), function (bm) {
						 bm.sxy(.4)
						 SL(bm)
					 })
				 }),
				 $.button('copy', function () {
					 _copy = stage.du()
				 }),
				 $.button('paste', function () {
					 stage.bm(_copy, function (bm) {
						 bm.drag()
					 })
				 }),
				 $.button('replace', function () {
					 stage.rm()
					 stage.bm(_copy, function (bm) {
						 bm.drag()
					 })
				 })
		 ))
		 theSpan.dblclick(function () {
			 $('button').toggle()
		 })
		 theSpan.A()
	 }
	 $.colorPicker = $.ColorPicker = function () {
		 z()
		 colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
		 colorPicker.change(function () {
			 $l(colorPicker.val())
		 })
	 }
 }
 
 function paint(){
	 PAINT = function () {
		 _paintColor = 'blue'
		 _paintSize = 10
		 canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
		 stage = canvas.stage.tick()
		 shape = new createjs.Shape()
		 stage.mug(function (mug) {
			 mug.sXY(.4)
			 stage.A(shape)
		 })
		 graphics = shape.graphics
		 graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
				 .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
		 stage.on('stagemousedown', function (e) {
			 graphics.beginStroke(_paintColor)
			 stage.on('stagemousemove', function (e) {
				 graphics.lineTo(e.stageX, e.stageY)
			 })
		 })
		 stage.on('stagemouseup', function () {
			 stage.removeAllEventListeners('stagemousemove')
		 })
		 div = $.div().K('controls').appendTo($('body'))
		 colorPicker = $(' <input   type="color">')
		 div.A(colorPicker, $.span(10), $.span(20), $.span(30))
		 colorPicker.on('input', function () {
			 $l('input ')
			 _paintColor = $l(colorPicker.val())
			 graphics.beginStroke(_paintColor)
		 })
		 $('.controls span').click(function () {
			 graphics.setStrokeStyle(parseInt($(this).text()))
		 })
	 }
	 PAINT = function () {
		 _paintColor = 'blue'
		 _paintSize = 10
		 canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
		 stage = canvas.stage.tick()
		 shape = new createjs.Shape()
		 stage.mug(function (mug) {
			 mug.sXY(.4)
			 stage.A(shape)
		 })
		 graphics = shape.graphics
		 graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
				 .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
		 stage.on('stagemousedown', function (e) {
			 graphics.beginStroke(_paintColor)
			 stage.on('stagemousemove', function (e) {
				 graphics.lineTo(e.stageX, e.stageY)
			 })
		 })
		 stage.on('stagemouseup', function () {
			 stage.removeAllEventListeners('stagemousemove')
		 })
		 div = $.div().K('controls').appendTo($('body'))
		 colorPicker = $(' <input   type="color">')
		 div.A(colorPicker, $.span(10), $.span(20), $.span(30))
		 colorPicker.on('input', function () {
			 $l('input ')
			 _paintColor = $l(colorPicker.val())
			 graphics.beginStroke(_paintColor)
		 })
		 $('.controls span').click(function () {
			 graphics.setStrokeStyle(parseInt($(this).text()))
		 })
	 }
	 function more() {
		 PAINT = function () {
			 _paintColor = 'blue'
			 _paintSize = 10
			 canvas = $.c('r', 400, 400).A().P('a', 100, 50)
			 st = canvas.stage.t()
			 shape = new cjs.Shape()
			 st.mug(function (mug) {
				 mug.sXY(.4)
				 st.A(shape)
			 })
			 graphics = shape.graphics
			 graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
					 .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
			 st.on('stagemousedown', function (e) {
				 graphics.beginStroke(_paintColor)
				 st.on('stagemousemove', function (e) {
					 graphics.lineTo(e.stageX, e.stageY)
				 })
			 })
			 st.on('stagemouseup', function () {
				 st.removeAllEventListeners('stagemousemove')
			 })
			 div = $.dK('controls')
			 div.a2($('body'))
			 colorPicker = $(' <input   type="color">')
			 div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
			 colorPicker.on('input', function () {
				 _paintColor = $l(colorPicker.val())
				 graphics.beginStroke(_paintColor)
			 })
			 span = $('.controls span')
			 if (span && F(span.$$)) {
				 span.$$(function () {
					 graphics.setStrokeStyle(parseInt($(this).T()))
				 })
			 }
		 }
		 PAINT = function () {
			 _paintColor = 'blue'
			 _paintSize = 10
			 canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
			 stage = canvas.stage.tick()
			 shape = new createjs.Shape()
			 stage.mug(function (mug) {
				 mug.sXY(.4)
				 stage.A(shape)
			 })
			 graphics = shape.graphics
			 graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
					 .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
			 stage.on('stagemousedown', function (e) {
				 graphics.beginStroke(_paintColor)
				 stage.on('stagemousemove', function (e) {
					 graphics.lineTo(e.stageX, e.stageY)
				 })
			 })
			 stage.on('stagemouseup', function () {
				 stage.removeAllEventListeners('stagemousemove')
			 })
			 div = $.div().K('controls').appendTo($('body'))
			 colorPicker = $(' <input   type="color">')
			 div.A(colorPicker, $.span(10), $.span(20), $.span(30))
			 colorPicker.on('input', function () {
				 $l('input ')
				 _paintColor = $l(colorPicker.val())
				 graphics.beginStroke(_paintColor)
			 })
			 $('.controls span').click(function () {
				 graphics.setStrokeStyle(parseInt($(this).text()))
			 })
		 }
		 PAINT = function () {
			 _paintColor = 'blue'
			 _paintSize = 10
			 canvas = $.c('r', 400, 400).A().P('a', 100, 50)
			 st = canvas.stage.t()
			 shape = new cjs.Shape()
			 st.mug(function (mug) {
				 mug.sXY(.4)
				 st.A(shape)
			 })
			 graphics = shape.graphics
			 graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
					 .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
			 st.on('stagemousedown', function (e) {
				 graphics.beginStroke(_paintColor)
				 st.on('stagemousemove', function (e) {
					 graphics.lineTo(e.stageX, e.stageY)
				 })
			 })
			 st.on('stagemouseup', function () {
				 st.removeAllEventListeners('stagemousemove')
			 })
			 div = $.dK('controls')
			 div.a2($('body'))
			 colorPicker = $(' <input   type="color">')
			 div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
			 colorPicker.on('input', function () {
				 _paintColor = $l(colorPicker.val())
				 graphics.beginStroke(_paintColor)
			 })
			 span = $('.controls span')
			 if (span && F(span.$$)) {
				 span.$$(function () {
					 graphics.setStrokeStyle(parseInt($(this).T()))
				 })
			 }
		 }
	 }
 }
 function textAdder(){
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
 function tweenArt(){
	 TWEENART = function (a) {
		 //wMb makes bitmap mug and passes it to a callback
		 //optionally? can pass a stage to append it to before the callback runs
		 s = $St()
		 s.mug(function (b) {
					 b.XY(300);
					 b.rC(); //centers it's reg point?
					 SK(b)
					 $Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					 s.mug(function (b) {
						 b.XY(200);
						 b.rC();
						 b.WH(200);
						 SL(b);
						 $Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						 s.mug(function (b) {
							 b.rC();
							 b.XY(600);
							 SC(b)
							 $Tw([b, 'l'], {kxy: 0},
									 [{kxy: 20}, 500],
									 [{kxy: 0}, 500])
						 })
					 })
				 },
				 EDIT()
		 )
	 }
	 TWEENART = function (a) {
		 //wMb makes bitmap mug and passes it to a callback
		 //optionally? can pass a stage to append it to before the callback runs
		 s = $St()
		 s.mug(function (b) {
					 b.XY(300);
					 b.rC(); //centers it's reg point?
					 SK(b)
					 $Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					 s.mug(function (b) {
						 b.XY(200);
						 b.rC();
						 b.WH(200);
						 SL(b);
						 $Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						 s.mug(function (b) {
							 b.rC();
							 b.XY(600);
							 SC(b)
							 $Tw([b, 'l'], {kxy: 0},
									 [{kxy: 20}, 500],
									 [{kxy: 0}, 500])
						 })
					 })
				 },
				 EDIT()
		 )
	 }
 }