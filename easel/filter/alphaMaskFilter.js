forMaskFilter = function trx(n) {
	var g = G(arguments)
	var a = []
	//for making mask filter
	if (g.n) {
		return 'rgba(0,0,0,' + g[0] || 0 + ')'
	}
	_.e(g, function (n) {
		a.push(trx(n, '-'))
	})
	return a
}
dO.aF = function (h) {
	var ob = this
	ob.fl($AF(h))
	return ob
}
dO.aF2 = function (h) {
	var ob = this
	this.fl2($AF(h))
	return ob
}
AlphaMaskFilter = $aFl = $Afl = $AF = $Af = $aF = function (a, b, c, d, e) {
	//Map an image's alpha channel to the alpha channel of a display object
	var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
	if (O(a) && a.cacheCanvas) {
		a = a.cacheCanvas
	}
	fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
	return fl
}
dO.aF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
 
AMR = ALPHAMASKREVEAL = function () {
	cjs.testCanvas()//  cjs.sharedCode()
	var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
			image, bitmap, maskFilter, cursor, text, blur
	examples.showDistractor()
	image = new Image();
	image.onload = handleComplete
	image.src = "/chicks.png"
	stage = new createjs.Stage("testCanvas");
	text = new createjs.Text("Loading...", "20px Arial", "#FFF");
	text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
	text.textAlign = "center"
	function handleComplete() {
		examples.hideDistractor();
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);
		stage.addEventListener("stagemousemove", handleMouseMove);
		drawingCanvas = new createjs.Shape();
		bitmap = new createjs.Bitmap(image);
		blur = new createjs.Bitmap(image);
		blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
		blur.cache(0, 0, 960, 400);
		text.text = "Click and Drag to Reveal the Image.";
		stage.addChild(blur, text, bitmap);
		updateCacheImage(false);
		cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
		cursor.cursor = "pointer";
		stage.addChild(cursor);
	}
	
	function handleMouseDown(event) {
		oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt;
		isDrawing = true;
	}
	
	function handleMouseMove(event) {
		cursor.x = stage.mouseX;
		cursor.y = stage.mouseY;
		if (!isDrawing) {
			stage.update();
			return;
		}
		var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
		drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
				.beginStroke("rgba(0,0,0,0.2)")
				.moveTo(midPoint.x, midPoint.y)
				.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;
		oldMidPt.x = midPoint.x;
		oldMidPt.y = midPoint.y;
		updateCacheImage(true);
	}
	
	function handleMouseUp(event) {
		updateCacheImage(true);
		isDrawing = false;
	}
	function updateCacheImage(update) {
		if (update) {
			drawingCanvas.updateCache();
		} else {
			drawingCanvas.cache(0, 0, image.width, image.height);
		}
		maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
		bitmap.filters = [maskFilter];
		if (update) {
			bitmap.updateCache(0, 0, image.width, image.height);
		} else {
			bitmap.cache(0, 0, image.width, image.height);
		}
		stage.update();
	}
	 
} 
/*This example demonstrates revealing an image using another image as the
 mask. The mask is created by drawing a
 shape, and then caching the shape to make an image with an alpha
 channel. It is then applied to the image as
 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
 */