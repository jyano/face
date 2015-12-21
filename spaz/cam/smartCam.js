 function smartCam(){
	 // dumb //
	 w.ZOOM = function (zm) {
		 var w = this
		 if (U(zm)) {
			 return $N(w._zoom)
		 }
		 w._zoom = zm
		 w.stage.scaleX = zm
		 w.stage.scaleY = zm
		 return w
	 }
	 w.CAMX = function (x) {
		 var w = this;
		 if (U(x)) {
			 return -w.stgX()
		 }
		 return w.stgX(-x)
	 }
	 w.CAMY = function (y) {
		 var w = this;
		 if (U(y)) {
			 return -w.stgY()
		 }
		 w.stgY(-y)
		 return w
	 }
	 T1 = ZSC = ZOOMSCALE = function () {
		 W([1000, 1000], {g: 0}).levelScrollCirs()
		 w.drag()
		 r = $._range90(800, 500)
		 r.wValOnTk(function (val) {
			 w.ZOOM(val)
		 })
		 w.textDsp(function text() {
			 var txt = 'scale: ' + r.val()
			 return txt
		 })
	 }
	 ZIP = T11 = ZOOMINPLACE = function () {
		 W([1000, 1000], {g: 0}).levelScrollCirs()
		 stg = w.stage
		 o = {lastZm: 1, stgX: 0, stgY: 0}
		 r = $._range90(800, 500)
		 r.wValOnTk(function (zm) {
			 o.x = stg.x
			 o.y = stg.y
			 if (zm != w.zoom()) {
				 zoomChanged(zm, o)
			 }
			 o.zoom = w.zoom()
		 })
		 function zoomChanged(zm, o) {
			 var oldZm = w.zoom()
			 var zmRat = zm / oldZm
			 w.ZOOM(zm)
			 o.stgX = o.stgX - (10 * zmRat)
			 stg.X(o.stgX)
		 }
		
		 $.mouseup(function () {
			 var zm = w.zoom()
			 o.stgX = stg.x
			 o.stgY = stg.y
			 o.zmDif = o.lastZm - zm
			 o.lastZm = zm
		 })
		 w.$cvM({
			 mD: function (x, y) {
				 o.dx = x - stg.x;
				 o.dy = y - stg.y
			 },
			 pM: function (x, y) {
				 stg.x = x - o.dx;
				 stg.y = y - o.dy
			 }
		 })
		 _.ev(function () {
			 console.log(o)
		 })
	 }
// SMART //
// smart cam cap algorithms for stage dims:
// scale max: 4,  scale min: smaller dim- multiple
// x/y min: 0,   x/y max:  world x/y  * scale - game x/y 
	 w.camScaleMin = w.camZoomMin = function () {
		 return 1 / _.lower(this.wMultiple, this.hMultiple);
	 }
	 w.camXMax = function () {
		 return this.scaledWorldW() - this.gameW
	 }
	 w.camYMax = function () {
		 return this.scaledWorldH() - this.gameH
	 }
	 w.camX = function (x) {
		 w.camXCap = function (x) {
			 return $capTop(x, this.camXMax())
		 }
		 return this.CAMX(U(x) ? null : this.camXCap(x))
	 }
	 w.camY = function (y) {
		 w.camYCap = function (y) {
			 return $capTop(y, this.camYMax())
		 }
		 return this.CAMY(U(y) ? null : this.camYCap(y))
	 }
	 w.camXY = function (x, y) {
		 var w = this;
		 w.camX(x)
		 w.camY(y)
		 return w
	 }
	 w.zoom = function (zm) {
		 var w = this
		 return U(zm) ? w._zoom :
				 w.ZOOM(cjs.cap(zm, w.minScale, 4))
	 }
	 w.capCamPos = function () {
		 var w = this
		 w.camX(w.camX())
		 w.camY(w.camY())
		 return w
	 }
	 ZSC1 = function () {
		 W([1000, 1000], {g: 0}).levelScrollCirs().drag()
		 r = $._range90(800, 500)
		 r.wValOnTk(function (val) {
			 w.zoom(val)
		 })
		 w.textDsp(function text() {
			 var txt = 'range val: ' + r.val() + ', zoom: ' + w.zoom()
			 return txt
		 })
	 }
	 T2 = ZOM = function () {
		 W().G(10)
		 _.t(4, function () {
			 w.ship().Y(120)
		 })
		 _.in(function () {
			 w.ZOOM(2)
			 _.in(function () {
				 w.camXY(400, 4000)
			 })
		 })
		 w.bt('zoom out (again)', function () {
			 w.ZOOM(1).capCamPos()
		 })
	 }
	 w.zoomIn = function () {
		 var w = this
		 w.tCb = function () {
			 w.zoom(w.zoom() * 1.02)
		 }
		 return w
	 }
	 w.zoomOut = function () {
		 var w = this
		 w.tCb = function () {
			 w.zoom(w.zoom() * .98)
		 }
		 return w
	 }
	 w.showOff = function () {
		 var w = this
		 zin()
		 return w
		 function zout() {
			 setTimeout(zin, 10000);
			 w.zoomOut()
		 }
		
		 function zin() {
			 setTimeout(zout, 4000);
			 w.zoomIn()
		 }
	 }
	 T3 = ZIN = function () {
		 W().scrollLevel()
		 $t(function () {
			 w.callTrackeeCb()
		 })
		 _.in(function () {
			 w.zoomIn()
		 })
		 w.textDsp(function text() {
			 return 'zoom: ' + w.zoom()
		 })
		 w.bt('zoomOut', function () {
			 w.zoomOut()
		 })
	 }
	 T8 = SLOOM = function () {
		 _level_()
		 y = w.ship(200, 200)
		 w.track(y)
		 $t(function () {
			 w.callTrackeeCb()
		 })
		 w.dot(600, 300)
		 w.hud.dot(600, 300)
		 w.dot(1200, 600)
		 w.hud.dot(1200, 600)
		 w.showOff()
		 w.bt('my face', function () {
			 y.bindSprite('me', .5)
		 }, 10000)
	 }
 }