$.fn.animloop = function () {
	var that = this
	this.show("slow")
	this.animate({"marginLeft": "300px"}, 2000)
			.animate({"marginLeft": "0px"}, 2000)
	this.hide("slow", function () {
		that.animloop()
	})
}
 
testShape = function(){z()

    stage = createjs.stage(600).tick().A()
    shape = new createjs.Shape()
    stage.A(shape)
    shape.graphics.f('red').s('black').dc(400,400,200).dr(100,0,200,200)

}
function handleClick(e) {
	if (e.currentTarget == stage && e.eventPhase == 1) {
		// this is the first dispatch in the event life cycle, clear the output.
		output.text = "target : eventPhase : currentTarget\n"
	}
	output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
	if (e.currentTarget == stage && e.eventPhase == 3) {
		// this is the last dispatch in the event life cycle, render the stage.
		stage.update()
	}
}
$.fn.animloop=function(){var that=this
    this.show( "slow" )
    this.animate({"marginLeft": "300px" } , 2000 )
        .animate({"marginLeft" : "0px" } , 2000 )
    this.hide( "slow", function(){that.animloop()})
} 
MOUSEENTERSTAGE = function () {
	z()
	stage = s = cjs.stage(500, 500).A().tick()
	s.bm('me')
	s.on('mouseenter', function () {
		$('body').prepend('once<br>')
	}, null, true)
	s.on('mouseenter', function () {
		$('body').prepend('many<br>')
	}, null, false)
}
HANDLEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
		}
		b.on('pressmove', b)
	})
}
REMOVEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
	})
}
 
function handleClick(e) {
	if (e.currentTarget == stage && e.eventPhase == 1) {
		// this is the first dispatch in the event life cycle, clear the output.
		output.text = "target : eventPhase : currentTarget\n"
	}
	output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
	if (e.currentTarget == stage && e.eventPhase == 3) {
		// this is the last dispatch in the event life cycle, render the stage.
		stage.update()
	}
}

 



