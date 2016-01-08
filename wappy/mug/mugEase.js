EASING = function () {
	stage = createjs.stage(1000, 10000).tick().A()
	stage.mug(
			function (b) {
				bb = b
				b.sXY(.2).XY(50, 100)
				cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
				)
			})
	eas = function (y, e) {
		stage.mug(
				function (b) {
					b.sXY(.2).XY(50, y)
					cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
					b.$(function () {
						pop(e + ' : ' + oO('E', e))
					})
				})
	}
	eas(300, 'bO');
	eas(500, 'bI');
	eas(700, 'bIO')
	eas(900, 'bnO');
	eas(1100, 'bnI');
	eas(1300, 'bnIO')
	eas(1500, 'cO');
	eas(1700, 'cI');
	eas(1900, 'cIO')
	eas(2100, 'eO');
	eas(2300, 'eI');
	eas(2500, 'eIO')
	eas(2700, 'qO');
	eas(2900, 'qI');
	eas(3100, 'qIO')
	eas(3900, 'qnO');
	eas(4100, 'qnI');
	eas(4300, 'qnIO')
	eas(4500, 'sO');
	eas(4700, 'sI');
	eas(4900, 'sIO')
	eas(5100, 'qdO');
	eas(5300, 'qdI');
	eas(5500, 'qdIO')
}
EASING = function () {
	stage = createjs.stage(1000, 10000).tick().A()
	stage.mug(
			function (b) {
				bb = b
				b.sXY(.2).XY(50, 100)
				cjs.tween([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
				)
			})
	eas = function (y, e) {
		stage.mug(
				function (b) {
					b.sXY(.2).XY(50, y)
					cjs.tween([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
					b.$(function () {
						pop(e + ' : ' + oO('E', e))
					})
				})
	}
	eas(300, 'bO');
	eas(500, 'bI');
	eas(700, 'bIO')
	eas(900, 'bnO');
	eas(1100, 'bnI');
	eas(1300, 'bnIO')
	eas(1500, 'cO');
	eas(1700, 'cI');
	eas(1900, 'cIO')
	eas(2100, 'eO');
	eas(2300, 'eI');
	eas(2500, 'eIO')
	eas(2700, 'qO');
	eas(2900, 'qI');
	eas(3100, 'qIO')
	eas(3900, 'qnO');
	eas(4100, 'qnI');
	eas(4300, 'qnIO')
	eas(4500, 'sO');
	eas(4700, 'sI');
	eas(4900, 'sIO')
	eas(5100, 'qdO');
	eas(5300, 'qdI');
	eas(5500, 'qdIO')
}