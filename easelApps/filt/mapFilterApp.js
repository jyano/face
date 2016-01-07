MAPF = function () {
	$St()
	$.i('me', function (i) {
		var box = new createjs.Shape();
		box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
		box.graphics.drawRect(0, 0, 100, 100);
		box.cache(0, 0, 100, 100);
		var bmp = new createjs.Bitmap(i);
		bmp.filters = [
			new createjs.AlphaMapFilter(box.cacheCanvas)
		];
		bmp.cache(0, 0, 100, 100);
		st.addChild(bmp);
	})
}