//advanced:
cjs.bulletHit = function (bullet, inWhat) {
	var x = bullet.centerX(),
			y = bullet.centerY()
	var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
	if (res == true) {
		$l('hit!')
	}
	return res
}
 
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.c(a, b, c)
	can2 = $.c('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
cjs.tripleStage = function (color, w, h) {
	var stage, can0, can1, can2
	can0 = $.can(color, w, h).P('a').XY(0, 0)
	can1 = $.can('X', w, h).P('a').XY(0, 0)
	can2 = $.can('X', w, h).P('a').XY(0, 0)//.opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.back = new cjs.Stage(can0[0]).tick()
	stage.back.linGrad = function (col1, col2) {
		col1 = oO('c', col1 || 'b');
		col2 = oO('c', col2 || 'r')
		var h = this.H(), w = this.W()
		this.shape.linGrad([col1, col2], [0, 1], 0, 0, 0, h).dr(0, 0, w, h)
	}
	stage.back.shape = stage.back.shape(0, 0, 'w')
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
function balls() {
	s.cannonBall = function (x, y) {
		var s = this, h
		h = s.h(x, y)
		h.rf('a', 'z', 18).dc(18).ef()
		return h
	}
	s.basketBall = function (x, y) {
		var s = this
		return this.h(x, y).rf('w', 'o', 18).dc(18).ef()
	}
	s.beachBall = function (x, y) {
		var s = this
		return s.h(x, y)
				.rf('b', 'r', 18).dc(18).ef()
	}
	s.snowBall = function (x, y) {
		var s = this
		return s.h(x, y).rf('a', 'w', 18).dc(18).ef()
	}
}
 