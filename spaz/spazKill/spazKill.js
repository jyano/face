w.dJRopeBall=function(){var w=this
	var b = w.brk(255, 50, 60, 15, 'g') 
	var link = b
	for (var i = 1; i <= 10; i++) {
		b = w.brk(255, i * 30, 3, 15, 'w') 
		w.rJ(link, b)
		link = b
	}
	w.rJ(link, w.bal(255, 330, 20, 'w') )
	return w
}
w.mePyr=function() {var w=this
	_.t(8, function () {w.me().XY(700, 400)})
	_.t(4, function () {w.me().XY(700, 300)})
	_.t(1, function () {w.me().XY(700, 200)})
	return w
}
ROPB=function(){
	W(20).dJRopeBall()
}
 

/*
 isHooked = false
 distJ = false
 hero = w.rect(320, 460, 20, 20, 'b')
 $can = superCanvas($(w.s.HUD.canvas))
 $can.MD(function (x, y) {
 w.QueryPoint(function (fixture) {
 var touchedBody = fixture.body()
 if (touchedBody.isStat()) {
 distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
 isHooked = true
 }
 return false
 }, V(x, y).div())
 }) //if(distJ){w.DestroyJoint(distJ)}
 $can.MU(function () {
 if (distJ) {
 w.DestroyJoint(distJ)
 }
 })   // if I release the mouse, I destroy the distance joint

 $t(function () {// as long as the hook is active, I shorten a bit joint distance
 if (isHooked) {
 hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
 distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
 }
 })
 */
b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
f.removeSprites = function () {
	var f = this
	f.sprites = f.sprites || []
	_.each(f.sprites,
			function (s) {
				if (O(s) && s.parent) {
					s.remove()
				}
			}
	)
	f.sprites = []
	return this
}
f.kill = f.remove = function () { // if(this.sprite  ){this.sprite.remove()}
	this.removeSprites()
	this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}
f.kill = function () {
	var f = this, b = f.B(), w = b.W()
	if (!f) {
		return
	}
	if (w._fPreKill) {
		w._fPreKill(f)
	}
	if (b) {
		b.rmF(f)
	}
}//= f.xx = f.remove
f.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.remove();
	return
}
b.destroySpaz = b.kill = b.rm = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.ds()
}
b.destroyFixt = b.destroyFixture = function (f) {
	this.DestroyFixture(f)
	return this
}
b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.destroy()
}
b.destroy = function () {
	this.W().DestroyBody(this)
}
b.setDestroy = function () {
	return this.K('destroy')
}
b.setDestroyIf = function (data) {
	if (this.is(data)) {
		this.setDestroy()
	}
}