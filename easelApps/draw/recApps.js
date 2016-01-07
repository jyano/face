REC = function () {
	$St()
	h = st.Sh().dg()
	gx = h.graphics
	gx.FS()._dr()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	h.dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 30)
}
GRID = function () {
	stage = s = $St(1000, 1000)
	container = c = new createjs.Container()
	stage.A(container)
	cjs.bindSlide(container)
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.times(rows * cols, function (i) {
		drawSquare(container,
				sqSP * (i % cols),
				sqSP * Math.floor(i / cols)
		)
	})
	function drawSquare(container, x, y) {
		var rectangle = new createjs.Shape()
		container.A(rectangle)
		rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
		if (x) {
			rectangle.X(x)
		}
		if (y) {
			rectangle.Y(y)
		}
		return rectangle
	}
}
GRIDD = NEEDSDRAWSQUARE = function () {
	$St()
	ct = st.ct()
	ct.SL()
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.t(rows * cols, function (i) {
		drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
		)
	})
	st.update()
}//A-