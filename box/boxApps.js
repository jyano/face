BOX = function () {boxCan(); w = $_W(0, 10)
	
	
	
	fD = $fD(_$pH())
	
	fD.H().SetAsArray([V(-1, 0), V(0, -1), V(1, 0)], 3)
	
	w.cB(bD = $sB(210, 210)).CF(fD)
	
	
	
	fD = $fD(_$pH())
	
	fD.shape.SetAsArray([V(-1, 0), V(0, -1), V(1, 0)], 3)
	
	w.cB(bD = $sB(120, 180)).CF(fD)
	
	
	
	w.bug()
	loadBalls()
	_.ev(1/60,step)
	

function loadBalls(){
	var i = 0
	bD.dyn()
	_.ev(1 / 10, function() {
		var b = w.cB(bD.XY(210, 0))
		b.CF(fD.H($_cH(1.5)))
		b.AI(V(i++ % 2 ? 0.5 : -0.5, 0), b.GetWorldCenter())
	})
}
	
	
	function step() {
	w.Step(1 / 60, 10, 10);
	w.DrawDebugData();
	w.ClearForces();
}



	
}

w.bug = function () {
	var w = this
	var dD = $dD()
	dD.SetSprite($0("#playground").getContext("2d"))
	dD.SetDrawScale(20.0)
	dD.SetFillAlpha(0.5)
	dD.SetLineThickness(1.0)
	dD.SetFlags(b2DebugDraw.e_shapeBit);
	w.SDD(dD)
}
function boxCan() {
	$('<canvas id="playground" width="500" height="200" ></canvas>').A()
}