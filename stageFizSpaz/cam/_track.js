w.trackeeSetup = function () {
	var w = this
	
	//setup default trackee, and originally assign actual trackee to that ref
	w.trackee = w._trackee = w.S(w.hW, w.hH, 'w',	// the 'trackee' is just a small white static sensor  top middle square !
			[[20, 2, '-']]).r(.8)
	
	// assign container-(sprite)  For Trackee :
	w.trackeeSprite = $Ct()
	w.trackeeSprite.XY(w.trackee.X(), w.trackee.Y())

	
	//add it to top stage
	w.i.A(w.trackeeSprite)
	$t(w.trackeeTick)
	return w
}

w.trackeeTick = function () {
	
	//run hook cb's
	F(w.trackee && w.trackee.cb) ? w.trackee.cb() :
			F(w.trackeeCb) ? w.trackeeCb() :
					null
			
			
	// this code brings 'stage to trackee' :
	
	w.st.x = w.stgXCap( (w.trackee.X()  +   w.W/2)/ w._zoom);
	
	w.st.y = w.stgYCap(  (w.trackee.Y()   +  w.H/2)/ w._zoom)
	
	
	
	// only run trackee not changed (still default trackee) ? 

	_.ev(3, function(){
		if (w.trackee == w._trackee) {
			$l('default trackee')
			w.trackee.copyXY(w.trackeeSprite)
			w.st.rt(w.trackeeSprite.rt())
			
		}
		
		
	})
	 
	
	
	 
}



w.stgYCap =   function (y) {
	var w = this, g = G(arguments)
	var max = (w.worldH() - w.gameH()) / w._zoom
	return _.capTop(y, max)
}

w.stgXCap =   function (x) {
	var w = this, g = G(arguments)
	var dif = ( w.worldW() - w.gameW()  )
	var max = dif / w._zoom
	return _.capTop(x, max)
}
w._stgX =   function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return g.n ? -w.st.x : w.st.x
	}
	w.st.x = g.n ? -x : x
	return w
}
w.stgX =  function (x) {
	var w = this, g = G(arguments)
	if (g.u) {
		return -w.st.x
	}
	w.st.x = -w.stgXCap(x)
	return w
}
w.stgY =  function (y) {
	var w = this, g = G(arguments)
	if (U(y)) {
		return -w.st.y
	}
	w.st.y = -w.stgYCap(y)
	return w
}
w.stgXY =   function () {
	var w = this, g = G(arguments)
	//if (g.u) {return {}}
	w.stgX(g.f)
	w.stgY(g.s)
	return w
}

w.getZ = function () {
	return this._zoom
}
w.updStgZoom = function () {
	var w = this
	w.st.scaleX = w._zoom
	w.st.scaleY = w._zoom
	return w
}
w.setZ = function () {
	var w = this, g = G(arguments)
	
	w._setZ = function (zoom) {
		var w = this, g = G(arguments)
		w._zoom = zoom
		return w.updStgZoom()
	}
	
	var zoom = g.f
	
	
	//zoom = g.n ? w.mZ : _.capTop(zoom, w.mZ)
	
	
	return w._setZ(zoom)
}


w.zoom = function () {
	var w = this, g = G(arguments)
	return g.u ? w.getZ() : w.setZ(g.f)
	//
	//if (g.u) {return w.z}
	//w.z = g.n ? w.mS : _.cap(g.f, w.mS)
	//w.st.sXY( w.z )
	//return w // get/set zoom.. ok cool :)
}


w.setTrackeeCallback = function (fn) {
	this.trackeeCb = fn;
	return this
}

w.zoomOut = function () {
	var w = this
	//knows when to stop :)
	w.setTrackeeCallback(function () {
		w.zoom(_.cap(w._zoom *= .98, w.maxZoom))
	})
	return w
}
w.zoomIn = function () {
	var w = this
	
	
	w.trackeeCb = function () {
		w.zoom( _.capTop( w._zoom *= 1.02, 4 ))
	}
	
	return w
}

w.inout = function () {
	var w = this, // now it works!!!!
			s = 1,
			up = true
	w.trackee.cb = function () {
		if (up) {
			if (s < 2) {
				s += .2;
			}
			else {
				up = false
			}
			w.zoom(s)
		}
		else {
			if (s > .8) {
				s -= .2
			}
			else {
				up = true
			}
			w.zoom(s)
		}
	}
	return w
}
w.showOff = function () {
	var w = this
	zin()
	function zout() {
		w.zoomOut();
		_.in(10, zin)
	}
	
	function zin() {
		w.zoomIn();
		_.in(4, zout)
	}
	
	return w
}
 
w.trackeeX = w.tX = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.X()
	}
	w.trackeeSprite.X.apply(w.trackeeSprite, arguments)
	return w
}
w.trackeeY = w.tY = function (t) {
	var w = this, g = G(arguments)
	if (g.u) {
		return w.trackeeSprite.Y()
	}
	w.trackeeSprite.Y.apply(w.trackeeSprite, arguments)
	return w
}
w.trackeeXY = w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
w.bufExcl = function (t, cX, cY) {
	var w = this
	$l('w.bufExcl')
	$t(function () {
		var sX = w._zoom * (t.X() - cX)
		sX = sX * 1 / ( 1 + w.hW / w.w )
		var sY = w._zoom * (t.Y() - cY)
		sY = sY / (1 + w.hH / w.h)
		w.stgXY(sX, sY)
	})
	return w
}
w.balls = function () {
	var w = this
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).de(.1)
	})
	return w
}
w.bufPol = function (bf) {
	var w = this
	$l('w.bufPol=')
	return w
	w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
	w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
	w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
	w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
	w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
	w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
	return w
}
w.pan = function (o) {
	$l('w.pan')
	var w = this, g = G(arguments), o = g[0]
	var mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3,
			up = true
	var l
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.zoom(z / w.mZ)
		}
	}
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.zoom(z / w.mZ)
		}
	}
	w.track.cb = l
	return w
}
b.cenSc = b.centerScale = function (z) {
	$l('b.cenSc = b.centerScale')
	var b = this, w = b.W(), st = w.st
	st.stgXY(z)
	st.X(w.hW - (  (b.X() - w.hW) * z))
	st.Y(w.hH - (  (b.Y() - w.hH)) * z)
	return b
}
w.tRightLeft = function () {
	$l('w.tRightLeft')
	var w = this, left
	$t(function () {
		if (!left) {
			w.tX(10, '+')
			if (w.tX() > 2000) {
				left = 1
			}
		}
		else {
			w.tX(10, '-')
			if (w.tX() < 400) {
				left = 0
			}
		}
	})
	return w
}
w._track = function (t, cX, cY) {
	var w = this
	return w
	//run pre-scroll hook cb's
	$l('_tracke')
	if (F(w.trackee.cb)) {
		w.trackee.cb()
	}
	else if (F(w.track.cb)) {
		w.track.cb()
	}
	// if the designated trackee optionally has its own cb,
	// that overrules the (also optional) 'w.track.cb' cb
	var x = w._zoom * w.hW + w._zoom * ( t.X() - cX) - w.hW
	var y = w._zoom * w.hH + w._zoom * ( t.Y() - cY) - w.hH   //var y = w.z * (w.hH + t.Y() - cY ) - w.hH
	//w.sX(x)
	//w.sY(y)
	return w
	//each tick, literally just sets scale (via  w.sXY ) based on:
	// world dimensions, world zoom, and trackee position
	// $t(this)?
}
w.sBuf = function (bf) {
	var w = this
	bf.x = N(bf.x) ? bf.x : w.w / 2
	bf.y = N(bf.y) ? bf.y : w.h / 2
	bf.w = N(bf.w) ? bf.w : 0
	bf.h = N(bf.h) ? bf.h : 0
	bf.mX = N(bf.mX) ? bf.mX : 1
	bf.mY = N(bf.mY) ? bf.mY : 1
	return bf
}
w.trackNeg = function (trackee, cX, cY) {
	var w = this
	$t(function () {
		w.st.x = (cX - trackee.X()) * w._zoom - w.W * (w._zoom / 2 - .5)
		w.st.y = (cY - trackee.Y()) * w._zoom - w.H * (w._zoom / 2 - .5)
	})
	return w
}

w.tr = w.track = function (t, cX, cY, bf) {
	var w = this, g = G(arguments)
	w.trackee = g.f// ||  w._trackee
	cX = N(cX, w.W / 2);
	cY = N(cY, w.H / 2)
	if (O(bf)) {
		w.bufPol(w.sBuf(bf))
		$t(function () {
			w.stgXY(
					bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX,
					bf.y - w.hH + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX
			)
		})
		return w
	}
	//option to set based on t's CURRENT X/Y?
	return bf == '-' ? w.trackNeg(t, cX, cY) :
			(bf == '!') ? w.bufExcl(t, cX, cY) :
					w._track(t, cX, cY)
	//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
}
w.trackBasic = function (trackee, cX, cY) {
	var w = this, halfW = w.W / 2, halfH = w.H / 2
	w.trackee = trackee
	//return  w._track(w.trackee, N(cX, halfW), N(cY, halfH))
}
 
 