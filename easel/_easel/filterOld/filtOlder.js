BlurFilter = blF=function(bx,by,q){
    return new createjs.BlurFilter(bx,by,q)
}

AlphaMaskFilter = aMF=function(mask){
    return new createjs.AlphaMaskFilter(mask)
}

forMaskFilter = trx = function(n){
    var g=G(arguments),
        a=[]

    //for making mask filter
    if(g.n){
        return 'rgba(0,0,0,' +  g[0]||0  + ')'   }

    _.each(g,function(n){
        a.push(trx(n,'-'))})

    return a
}
cjs.blurFilter = function(x,y,c){return new cjs.BlurFilter(x,y,c)}
//T$ = cjs.Ticker  //dep
ColorFilter = clF=function(a,b,c,d,e,f,g){return new createjs.ColorFilter(a,b,c,d,e,f,g)}
ColorMatrixFilter = clMF=function(m){return new createjs.ColorMatrixFilter(m)}
ColorMatrix = CM=function(){
    var c=new createjs.ColorMatrix()
    c.b=c.adjustBrightness
    c.c=c.adjustColor
    c.C=c.adjustContrast
    c.h=c.adjustHue
    c.s=c.adjustSaturation
    c.cl=c.clone
    c.cc=c.concat
    c.m=c.copyMatrix
    c.r=c.reset
    c.A=c.toArray
    c.S=c.toString
    return c}
 //
BlurFilter = blF = function (bx, by, q) {
	return new createjs.BlurFilter(bx, by, q)
}
AlphaMaskFilter = aMF = function (mask) {
	return new createjs.AlphaMaskFilter(mask)
}
forMaskFilter = trx = function (n) {
	var g = G(arguments),
			a = []
	//for making mask filter
	if (g.n) {
		return 'rgba(0,0,0,' + g[0] || 0 + ')'
	}
	_.each(g, function (n) {
		a.push(trx(n, '-'))
	})
	return a
}
cjs.blurFilter = function (x, y, c) {
	return new cjs.BlurFilter(x, y, c)
}
//T$ = cjs.Ticker  //dep
ColorFilter = clF = function (a, b, c, d, e, f, g) {
	return new createjs.ColorFilter(a, b, c, d, e, f, g)
}
ColorMatrixFilter = clMF = function (m) {
	return new createjs.ColorMatrixFilter(m)
}
ColorMatrix = CM = function () {
	var c = new createjs.ColorMatrix()
	c.b = c.adjustBrightness
	c.c = c.adjustColor
	c.C = c.adjustContrast
	c.h = c.adjustHue
	c.s = c.adjustSaturation
	c.cl = c.clone
	c.cc = c.concat
	c.m = c.copyMatrix
	c.r = c.reset
	c.A = c.toArray
	c.S = c.toString
	return c
}
//scott says ibbobb is a jason game
