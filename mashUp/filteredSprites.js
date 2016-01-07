SPRITESWITHFILTERS = function () {
	stage = $St()
	$t("tick", function tick(event) {
		color += 5;
		grant3.filters = [
			new cjs.BlurFilter(10, 10, 1),
			new cjs.ColorFilter(1, 1, 1, 1, color % 255, color / 2 % 255, color / 3 % 255)
		];
		grant3.updateCache(); // Sprite has to be updated. EXPENSIVE!
		st.update();
	})
	// Preload the image. Image is coming from CORS-enabled server.
	var img = document.createElement("img");
	img.crossOrigin = "Anonymous";
	img.src = "http://php5.gskinner.com/CORS/runningGrant-easel.png";
	img.onload = createSprites;
	var grant3; // Stored to allow access in the tick
	var color = 0;
	
	function createSprites() {
		
		// 1. Default Sprite. No blur.
		var data = new createjs.SpriteSheet({
			"images": [img],
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant = new createjs.Sprite(data, "run");
		stage.addChild(grant);
		// 2. Cache the image. 
		// Note that this is faster (one time cache), but obviously requires
		// some padding on each frame to prevent the edge bleed
		var bmp = new createjs.Bitmap(img);
		bmp.filters = [new createjs.BlurFilter(10, 10, 1)];
		bmp.cache(0, 0, img.width, img.height);
		var data2 = new createjs.SpriteSheet({
			"images": [bmp.cacheCanvas], // Note we are using the bitmap's cache
			"frames": {"height": 292, "width": 165},
			"animations": {"run": [0, 25, "run", 2]}
		});
		var grant2 = new createjs.Sprite(data2, "run");
		grant2.x = 185;
		stage.addChild(grant2);
		// 3. Cache the Sprite instead
		// More expensive because it needs to be updated each frame (see tick below)
		grant3 = new createjs.Sprite(data, "run");
		grant3.x = 185 * 2;
		grant3.cache(0, 0, 165, 292);
		stage.addChild(grant3);
	}
}