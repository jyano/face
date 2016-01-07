w.rWx = function (col, h) {
	var w = this
	if (!S(col)) {
		h = col;
		col = 'b'
	}
	h = N(h) ? h : w.H()
	return w.S(10, w.H() - (h), col, 20, h)
}
w.bWx = function (col, W) {
	var w = this
	if (!S(col)) {
		W = col;
		col = 'b'
	}
	W = N(W) ? W : w.W()
	return w.S((W / 2), w.H() + (h / 2) - 10, col, W, 20)
}
w.hWx = function (col, W, x, y) {
	var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
	if (!S(col)) {
		y = x;
		x = W;
		W = col;
		col = 'x'
	}
	if (U(y)) {
		y = x;
		x = null
	}
	W = (W == '+') ? cW : N(W) ? W : cW / 3
	x = N(x) ? x : cW / 2 - W / 2
	y = (y == '+') ? cH - 10 : (y == '-') ? 10 : N(y) ? y : cH / 2
	y -= 10
	return w.R(col, W, 20, x, y).bo(.2).K('wall')     //default bo?
}
w.boxWallsx = w.xWx = function (col, W, h) {
	var w = this
	if (!S(col)) {
		h = W;
		W = col;
		col = 'o'
	}
	W = N(W) ? W : w.W()
	h = N(h) ? h : w.H()
	w.floor = w.R(col, W, 20, 0, h - 20)
	w.right = w.R(col, 20, h, W - 20, 0)
	w.roof = w.R(col, W, 20, 0, 0)
	w.left = w.R(col, 20, h, 0, 0)
	w.w = W
	w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}
	return w
}
w.bodyX = w.AX = function (bD, fD) {
	var w = this, b
	if (b2d.isBDef(bD)) {
		b = w.CreateBody(bD)
	}
	if (fD) {
		b.fixt(fD)
	}
	//b.den(1)
	return b
}
/*
 if (A(o.w)){     c = o.w[0]
 if (!S(c)){ h = W;     W = c;     c = 'o'  }
 o.c = o.c || 'o'
 w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
 w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
 w.roof = w.R(o.c, w.wW, 20, 0, 0)
 w.left = w.R(o.c, 20, w.wH, 0, 0)}*/