sSB = cjs.SpriteSheetBuilder.prototype
sSB.sc= sSB.Z = function (sc) {
	if (U(sc)) {
		return this.scale
	}
	this.scale = sc;
	return this
}
sSB.maxW = function (sc) {
	if (U(sc)) {
		return this.maxWidth
	}
	this.maxWidth = sc;
	return this
}

sSB.oRd =sSB.oC= sSB.complete = function (fn) {
	this.on("complete", fn)
	return this
}

sSB.bA=function(a){
	this.buildAsync(a)
	return this
}

sSB.oRdA = sSB.loadA = sSB.async = function () {var sSB=this,g=G(arguments),o
	o = g.F_? {readyFn: g.f, build: g.s } : {build: g.f}
	if(o.readyFn){sSB.oRd(o.readyFn)}
	return sSB.bA(o.build)
}

sSB.aMC = sSB.A = function (mc) {
	this.addMovieClip(mc)
	return this
}