PACK = function () {
	stage = cjs.stage(800).A()
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
	sprite.framerate = 6
	sprite.play()
}





