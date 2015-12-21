b.shootX = function () {
	var vec, bullet
	bullet = this.GetWorld().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(b2.V(0, -100))
	bullet.impulse(vec.x / 20, vec.y / 20)
} 
 w.C = function (color) {var w=this

	$(w.st.canvas).C(color)

	return w
}

b.thrustify = function () {
	var b = this.aD(.5)
	//takes a spritebox!
	//uses cjs.watchKeys()
	K({
		l: function () {b.rt(8, '-')},
		r: function () {b.rt(8, '+')},
		d: function () {b.push(.2).p('thrust')},
		u: function () {b.p('shoot')}
	})
	return b
}

 SHIPSPRITE = SSP = function () {

	W({g: 1})

	//w.chalk('spritebox example')
	
	sp=	w.spriteBox({
				"framerate": 24,
				"images": ["thrusty.png"],
				"frames": [
					[0, 0, 512, 512, 0, -53, -36],
					[512, 0, 512, 512, 0, -53, -36],
					[1024, 0, 512, 512, 0, -53, -36],
					[0, 512, 512, 512, 0, -53, -36],
					[512, 512, 512, 512, 0, -53, -36],
					[1024, 512, 512, 512, 0, -53, -36],
					[0, 1024, 512, 512, 0, -53, -36],
					[512, 1024, 512, 512, 0, -53, -36],
					[1024, 1024, 512, 512, 0, -53, -36],
					[0, 1536, 512, 512, 0, -53, -36],
					[512, 1536, 512, 512, 0, -53, -36]],
				"animations": {
					"die": {"speed": 1, "frames": [8, 9, 10], next: false},
					"shoot": {"speed": 1, "frames": [1, 2, 3, 4, 0], next: false},
					"thrust": {"speed": 1, "frames": [5, 6, 7, 0], next: false}
				}
			})
			
	
	sp.thrustify()
	
	sp.con('thrust')
	 
}
 
//w.circ(200,130, 6).stat()
//w.circ(100,200, 6).stat()
//iceGround(  800   )
// grassGround(  300   )
/// 0:1,  300:1.1, 600:1.2
//  cjs.Tween.get(w.s).to({scaleX:1.3,scaleY:1.3}, 2000).to({scaleX:.7,scaleY:.7}, 6000).to({scaleX:1,scaleY:1}, 3000)
//cjs.Tween.removeAllTweens()
// w.st.tween(  [{x: p.dif().x},  000]   )
// w.st.tween(  [{y: p.dif().y},  1000]   )
//  cjs.Tween.get(w.s, {override:true}).to({y: p.dif().y}, 5000)
// cjs.Tween.get(w.s , {override:true}  ).to({  y: p.dif().y * w.st.scaleY }, 2000)
