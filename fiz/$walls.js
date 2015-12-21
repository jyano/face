 
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht)
				.stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
w.flat = function () {
		var w = this, b
		return b
	}
 
	
 
 
 function _post(){
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}}
function alpha() {
	w.R = function (c, W, H, x, y) {
		alert('w.R')
		var w = this, g = G(arguments),
				wC = w.cen(),
				r
		if (!S(g.f)) {
			y = x;
			x = H;
			H = W;
			W = c;
			c = 'x'
		}
		if (U(W)) {
			W = 200
			H = 200
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(H)) {
			H = W
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(x)) {
			x = wC.x - W / 2;
			y = wC.y - H / 2
		}
		return w.S(
				x + W / 2,
				N(y, x) + H / 2,
				c,
				W, H
		)
		old = function () {
			/*
			 x=N(g[0])?g[0]:wC.x
			 y=N(y)?y:N(g[0])?N(g[0]):wC.y
			 W=N(W)?W:100
			 H=N(H)?H:W
			 */
		}
	}
	w.vW = function (col, H, x, y) {
		alert('w.vW')
		var w = this, g = G(arguments),
				cW = w.can.W(),
				cH = w.can.H()
		if (!S(col)) {
			y = x;
			x = H;
			H = col;
			col = 'x'
		}
		H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
		if (U(x)) {
			x = cW / 2;
			y = cH / 2 - H / 2
		}
		else if (U(y)) {
			x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
			y = cH / 2 - H / 2
		}
		//x-=10?
		return w.R(col, 20, H, x, y).bo(.2).K('wall')
	}
}// w.R, w.vW
old = function () {
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
}
  
 