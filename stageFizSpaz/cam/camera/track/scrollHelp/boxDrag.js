w.$cv=function(){
	return this.hud.c
}
w.$cvM=function(ob){
	return this.$cv().m(ob)
}

w.dragX = function () {
	var w = this
	var  dif
	
	w.$cvM({
		
		mD: function (x,y) {dif = x - w.stage.x},
		
		pM: function (x,y) {w.stage.x = x - dif}
	})
	
	return w
}



w.dragY = function () {
	var w = this
	var  d
	
	w.$cvM({
		mD: function (x, y) {d = y - w.stage.y},
		pM: function (x, y) {w.stage.y = y - d}
	})
	
	return w
}



w.drag = function () {
	var w=this
	w.dragX()
	w.dragY()
	return w
}



w.dragScale = function () {var w = this 
	
	
	var o = {}
	
	$cv = $(w.s.HUD.canvas)
	
	$cv.mousedown(function (e) {
		o.Scl = w.z
		o.Y = e.clientY
	})
	
	$cv.pressmove(
	
	
	function (e) {
		var x = e.clientX
		var y = e.clientY
		
		var newSc = o.Scl + (o.Y - e.clientY) * .005
		
		newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
		
		w.ZOOM(newSc)
	})
	
	
	return w
}
	