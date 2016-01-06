 
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
 	PAINT1 = function () {
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
	PAINT1 = function () {
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
	PAINT1 = function () {
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
 