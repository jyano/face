cjs.adj2 = function (income, tax) {
	
	//tax ~ deltaLimit ~ buffer
	var income = income || 0
	var tax = tax || 0
	if (Math.abs(income) <= tax) {
		return 0
	}
	return income > 0 ? income - tax :
	income + tax
}
$capTop = function (n, max) {
	return cjs.cap(n, 0, max)
}
$t = function (fn) {
	cjs.tick(fn)
}
w = b2d.World.prototype
w.scrollLevel = function () {
	var w = this
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	w.S(400, 300, 'r', 200, 100)
	w.S(800, 300, 'z', 100, 100)
	w.S(1200, 300, 'b', 300, 100)
	w.S(1600, 300, 'z', 100, 100)
	w.S(2000, 300, 'r', 200, 100)
	return w
}
w.levelScrollCirs = function () {
	var w = this
	w.S(500, 500, 'o', 200)
	w.S(500, 500, 'r', 10)
	w.S(200, 200, 'm', 40)
	w.S(800, 200, 'b', 60)
	w.S(800, 800, 'l', 80)
	w.S(200, 800, 'g', 100)
	return w
}
  
_.t = _.times

w.bt = function (text, fn) {
	var w = this
	$.bt(text, fn).A().abs(w.gameW / 2, w.gameH)
			.WH(200, 100).css('fontSize', 40)
}
 
w.scaled = function (a) {
	return a * this.zoom()
}
w.zHalf=w.scaledHalf = function (a) {
	return this.scaled(a / 2)
}
w.scaledDouble = function (a) {
	return this.scaled(a * 2)
}

w.zDif= w.scaledDif = function (a, b) {
	return this.scaled(a - b)
}

w.scaledSum = function (a, b) {
	return this.scaled(a + b)
}
w.scaledQuotient = function (a, b) {
	return this.scaled(a / b)
}
w.scaledProduct = function (a, b) {
	return this.scaled(a * b)
}
w.scaledWorldW = function () {
	return this.scaled(this.worldW)
}
w.scaledWorldH = function () {
	return this.scaled(this.worldH)
}

_.in = function (secs, fn) {
	if (F(secs)) {
		_.in(1, secs)
	}
	setTimeout(fn, secs * 1000)
}
_.ev = function (secs, fn) {
	if (F(secs)) {
		_.ev(1, secs)
	}
	setInterval(fn, secs * 1000)
}
_.cap = cjs.cap

w.toX = function (x) {
	return N(x) ? x : this.W / 2
}
w.toY = function (y) {
	return N(y) ? y : this.H / 2
}

 _level_ = function () {
	W([1200, 600, 2400, 800], {g: [10, 10]}).scrollLevel()
	co = w.tensor()
	_.t(10, function (i) {
		co.body(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).rest(.2))
	})
	
	b = w.D(300, 300, 'w', 40).bo(.8).den(.1).bindSprite('flame')
	 cjs.rulers()
	return w
}
$FIREBALL = function(){_level_();return b}
		DEV = function () {
	_level_()
	w.db().dev().mark()
	t = w.ship(1250, 600).track()
}
w.stgX = function (x) {
	var w = this;
	if (U(x)) {
		return w.stage.x
	}
	w.stage.x = x
	return w
}
w.stgY = function (y) {
	var w = this;
	if (U(y)) {
		return w.stage.y
	}
	w.stage.y = y
	return w
}
w.stgXY = function (x, y) {
	var w = this
	w.stgX(x)
	w.stgY(y)
	return w
}
_.lower = function (a, b) {
	return a > b ? b : a
}
alpha = function () {
	w.tXY = function (x, y) {
		var w = this
		if (U(x)) {
			return {x: w.tX(), y: w.tY()}
		}
		y = N(y) ? y : x
		return w.tX(x).tY(y)
	}
}
//i thought i may want t for timer/ticker.. but time has no x and y !
//move the stage by manipulating the trackee x,y
//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
//SLK: no buffer to worry about //it lets u gradually move past the target point.. until hits limit