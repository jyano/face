var mX, mY, mPVec, isMDown, selB, mJt
BXEX2 = function () {
	cv = l({l: 'c', W: 800, H: 500, a: 1})
	cv._ps = cv.os()
	w = new bx.W(V(0, 10), true)  //allow sleep
	w.SDD($dD().SS(cv.gC()).SDS(30)
			.SFA(0.5).SLT(1).SF(bx.hBit | bx.jBit))
	_.ev(1 / 60, function () {
		handleMJt();
		w.step(1 / 60, 10, 10).DDD().CF()
	})
	
	$.D(function (e) {
		isMDown = true
		onMove(e)
		$.mm(onMove).tm(onMove)
	}).U(function () {
		$.mm_(onMove).tm_(onMove)
		isMDown = mX = mY = undefined;
	})
	
	
	bD = $bD().ty(bx.sB)
	fD = $fD().de(1).fr(.5).re(.2).H($pH().SAB(20, 2))
	
	// walls 
	w.CB(bD.Set(10, 400 / 30 + 1.8)).CF(fD)
	w.CB(bD.Set(10, -1.8)).CF(fD)
	w.CB(bD.Set(-1.8, 13)).CF(fD.SAB(2, 14))
	w.CB(bD.Set(21.8, 13)).CF(fD)
	
	//  balls 
	bD.ty(bx.dB)
	_.t(10, function (i) {
		w.CB(bD._X(M.r() * 10)._Y(M.r() * 10))
				.CF(fD.H((M.r() > 0.5) ?
						$pH().SAB(M.r() + 0.1, M.r() + 0.1) :
						$cH(M.r() * 30 + 3)))})
}

function handleMJt() {
	if (!mJt) {if (!isMDown) {return}; makeMJt()}
	else if (isMDown) {mJt.SetTarget(V(mX, mY))}
	else {w.DJ(mJt);mJt = null}
	
	function makeMJt() {
		var b = getBodyAtM()
		if (!b) {return}
		b.wake()
		
		var md = new bx.MJD()
		md.bodyA = w.GGB()
		md.bodyB = b
		
		md.target.Set(mX, mY)
		md.collideConnected = true
		md.maxForce = 300.0 * b.GM()
		
		mJt = w.CJ(md)
		 
	}
}

function getBodyAtM() {

	var ab, selB

	mPVec = V(mX, mY)
	
	ab = new bx.AB()
	
	ab.lowerBound.Set(mX - 0.001, mY - 0.001)
	ab.upperBound.Set(mX + 0.001, mY + 0.001)
	
	selB = null
	
	w.QAB(function (f) {
	
		if (f.bTy() == bx.dB && f.TP(f.tf(), mPVec)) {
			selB = f.B()
		}
		else {return 1}
	}, ab)
	
	return selB
}

function onMove(e) {
	$.pD(e)
//if (e.clientX) {
	var clX = e.clientX;
	var clY = e.clientY
	//} 
	/*
	 else if (e.changedTouches && e.changedTouches.length > 0) {
	 var touch = e.changedTouches[e.changedTouches.length - 1]
	 clX = touch.clientX;
	 clY = touch.clientY
	 }	
	 else {return}
	 */
	// bx x,y !!! (not page/web/$ (px) x,y)
	mX = (clX - cv._ps.x) / 30;
	mY = (clY - cv._ps.y) / 30
} 
 
function videoTut() {
// https://www.youtube.com/watch?v=Ubfqc983jN8
// video note: he only uses one body.. so joint is global ('spring')
// transform of box is just x,y,r (see setTransform)
// explains why b2d teleportation is bad
// remember: 'mouse' in mouse joint is JUST an x and y .. 
// (can use perlin noise random walk.. ?)
// 1:50 starts mouse jt
// tug body with string, like dJt with body and mouse
// mouse 'tugs' body around (as it (is) moves(ed))
// destroy jt and set ref to null
// START 3:10
// mouse is ground body
// 7:42 code
// END 10:17 'aha!'
// -> KIN..also cool
}