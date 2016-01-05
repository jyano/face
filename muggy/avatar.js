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