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