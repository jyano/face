$L('color', 'load',
		'crop', 'clip', 'dataUrl', 'center')

x.cv = x.cv0 = function () {
	return this.canvas
}
x.$cv = x.$ = function () {
	return $(this.cv())
}
x.H = function () {
	return this.cv().height
}
x.W = function () {
	return this.cv().width
}
x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
x._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}
function color() {
	x.fS = x.f = x.c = x.fs = function (c, C, l) {
		var g = G(arguments)
		if (g.u) {
			this.fill()
			if (g.p) {
				this.s()
			}
			return this
		}
		this.fillStyle = oO('c', c)
		if (C) {
			this.C(C)
		}
		if (N(l)) {
			this.l(l)
		}
		return this
	}
	x.sS = x.s = x.C = x.ss = function () {
		var g = G(arguments), o
		if (g.u) {
			this.stroke();
			if (g.p) {
				this.f()
			}
			return this
		}
		o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
		if (o.C) {
			this.strokeStyle = oO('c', o.C)
		}
		if (N(o.l)) {
			this.l(o.l)
		}
		return this
	}
	x.al = function (al) {
		this.globalAlpha = al;
		return this
	}
}
 
$.fn.ctx = function () {
	return this[0].getContext('2d')
}
$.cx = function () {
	return $.c.apply($, arguments).cx()
}
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
$.c = $.can = function (c, width, h, x, y) {
	var g = G(arguments), o, el
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	o.c = o.c || 'x'
	el = $('<canvas>')
	el.attr({width: o.w, height: o.h})
	el.C(o.c)
	if (N(o.x)) {
		el.abs(o.x, o.y)
	}
	if (g.p) {
		el.drag()
	}
	el.A().al(.8)
	el = superCanvas(el)
	return el
}
$superCan = superCanvas = function (el) {
	el = $(el) //to be called internally by $.c //works on FIRST canvas in jquery obj
	el.canvas = el[0]
	el.context = el.canvas.getContext('2d')
	//if (O(window['cjs'])) {el.stage = new cjs.Stage(el.canvas)}
	var cv = el
	_canBasic(el)
	_canIndex(el)
	return el
}
__C = function () {
	z();
	c = $.c('y').drag()
	x = c.ctx()
	return c
}
$.fn.drag = $.fn.drag || function () {
	return this
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
_canIndex = function (el) {
	_canDrawImg(el)
	_canGrad(el)
	_canEvents(el)
	_canShadow(el)
	_canPixel(el)
	_canText(el)
	_canTransform(el)
	_canDraw(el)
	//_canMug(el)
	return el
}
_canBasic = function (el) {
	el.cx = function () {
		return this[0].getContext('2d')
	}
	el.W = function (width) {
		var args = G(arguments)
		width = args[0]
		if (U(width)) {
			return this.attr('width')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('width', width)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.H = function (height) {
		var args = G(arguments)
		height = args[0]
		if (U(height)) {
			return this.attr('height')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('height', height)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.WH = function (w, h) {
		if (U(w)) {
			var width = this.W(),
					height = this.H()
			return {
				width: width, w: width,
				height: height, h: height
			}
		}
		h = h || w
		return this.W(w).H(h)
	}
	el.Z = function (d) {
		d = d || 5;
		return this.WH(d * 100, d * 100)
	}
	el.osL = el.offsetLeft = el.l = function (theOffset) {
		if (!theOffset) {
			return offsetLeft(x.q)
		}
		return parseInt(theOffset - x.offsetLeft())
	};
	//  el.ox=function(){return x.q.q.offset().left}
	el.osT = el.offsetTop = el.t = function (y) {
		if (!y) {
			return offsetTop(y.q)
		}
		;
		return parseInt(y - x.offsetTop())
	};
	//  el.oy=function(){return x.q.q.offset().top}
	el.cp = el.copy = function () {
		el.img.src(el.toDataURL())
		return el
	}
	el.ps = el.paste = function () {
		var g = G(arguments)
		if (g.N) {
			el.clearRect()
		}
		if (g.p) {
			el.fit(el.img)
		}
		else {
			el.draw(el.img.src())
		}
	}
	el.S = el.save = function () {
		el.context.save()
		return el
	}
	el.R = el.restore = function () {
		el.context.restore()
		return el
	}
	el.al = el.globalAlpha = el.alpha = el.op = function (alpha) {
		//dont mix up with element/jquery alpha //maybe opacity for element and alpha for canvas?
		if (U(alpha)) {
			return this.context.globalAlpha
		}
		this.context.globalAlpha = alpha
		return this
	}
	return el
}
_canEvents = function (el) {
	el.$ = function (func) {
		el.click(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.$$ = function (func) {
		el.dblclick(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.over = el.MV = function (func) {
		el.mouseover(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.out = el.MO = function (func) {
		el.mouseout(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.enter = el.ME = function (func) {
		el.mouseenter(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.leave = el.ML = function (func) {
		el.mouseleave(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.up = el.MU = function (func) {
		el.mouseup(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.move = el.MM = function (func) {
		el.mousemove(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.down = el.MD = function (func) {
		el.mousedown(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	return el
}
CANAPP = BIGCANDEMOAPP = SHOWEDITATONEANDONLYGAMEDEVMEETUP = function () {
	var picHolder
	$.format()
	picHolder = $.sp().id('pics')
	s2.A(picHolder)
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(function () {
			var mouse = $('#mouse')
			mouse.val('click')
			mouse.change()
			mug = img.d
		})
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			c = cv = x = canvas = $.c('y', 1000, 800))
	//  _.ev(10, function(){x.bc()})
	s1.A($.lb('mouse'),
			/*
			 $.scv('none','click','enter','leave','move').id('mouse').o(
			 function(s){
			 x.q.ub()
			 if(s=='click'){
			 x.$(function(X,Y){
			 x.Cd(mug,X,Y)
			 })}
			
			
			 if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})
			
			 x.MU(function(){x.q.ub('mousemove')})}
			
			
			 }),
			
			
			 */
			$.label('global comp'),
			//scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt('SAVE(sv)', function () {
				x.sv()
			}), $.br(2),
			$.bt('CUT(dots)', function () {
				x.q.q.unbind()
				qi('mouse').v('none')
				x.dots()
			}), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				c.dr(
						$w['mug'] || 'me'
				)
			}), $.br(2),
			$.bt('dC:draw center', function () {
				cv.dC(window['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt('tictactoe',
					function () {
						x.ln(tictactoe)
					}), $.br(4),
			$.bt('sampLinGrad',
					function () {
						x.sampLinGrad()
					}), $.br(2),
			$.bt('sampRadGrad',
					function () {
						x.sampRadGrad()
					}), $.br(2),
			$.bt('ctxx',
					function () {
						xxx('barney')
					}), $.br(2),
			$.bt('bads',
					function () {
						bad(x, 200, 8)
					}), $.br(2),
			$.bt('coins',
					function () {
						coin(x, 200, 8)
					}), $.br(2)
	)
}
CAN3 = THREECANS = function () {
	c1 = $.can('r', 800, 400)
	c2 = $.can('b', 800, 400)
	c3 = $.can('X', 800, 400)
}
CAN1FORMAT = CV10 = function () {
	var picHolder
	$.fm()
	s2.A(picHolder = $.sp().id('pics'))
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(
				function () {
					var mouse = $('#mouse')
					mouse.val('click')
					mouse.change()
					mug = img.d
				}
		)
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			x = canvas = $.c('yellow', 1000, 800)
	)
	setInterval(
			function () {
				//  x.bc()
			}, 10000
	)
	s1(
			$.lb('mouse'),
			$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
					function (s) {
						x.q.ub()
						if (s == 'click') {
							x.$(
									function (X, Y) {
										x.Cd(mug, X, Y)
									}
							)
						}
						if (s == 'enter') {
							x.ME(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'leave') {
							x.ML(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'move') {
							x.MD(function () {
								x.MM(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							})
							x.MU(function () {
								x.q.ub('mousemove')
							})
						}
					}
			),
			$.lb('global comp'),
			$.sl.apply(this, V(oO('g'))).$(function (v) {
				x.gc(v)
			}),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt(
					'SAVE(sv)', function () {
						x.sv()
					}
			), $.br(2),
			$.bt(
					'CUT(dots)', function () {
						x.q.q.unbind()
						qi('mouse').v('none')
						x.dots()
					}
			), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				x.d($w['mug'] || 'me')
			}), $.br(2),
			$.bt('dC:draw center', function () {
				x.dC($w['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt(
					'tictactoe', function () {
						x.ln(tictactoe)
					}
			), $.br(4),
			$.bt(
					'sampLinGrad', function () {
						x.sampLinGrad()
					}
			),
			$.br(2),
			$.bt(
					'sampRadGrad', function () {
						x.sampRadGrad()
					}
			),
			$.br(2),
			$.bt(
					'xxx', function () {
						xxx('barney')
					}
			), $.br(2),
			$.bt(
					'bads', function () {
						bad(x, 200, 8)
					}
			), $.br(2),
			$.bt(
					'coins', function () {
						coin(x, 200, 8)
					}
			), $.br(2)
	)
}
FLEXCAN = CV15 = function () {
	c1 = $.c('r', 200, 400)
	c2 = $.c('b', 50, 50)
	c4 = $.c('y', 100, 10)
	d = $.d().C('o')
	d.A(c1, c2, c4).css({
		'display': 'flex',
		'justify-items': 'center'
	})
	$('canvas').attr({
		width: 'auto', height: 'auto'
	}).css({
		width: 'auto', height: 'auto',
		'flex-grow': 1,
		'flex-shrink': 1
	})
	$('canvas').e(function () {
		$(this).ctx().jD('me')
	})
}
PAPGERBAG = CV16 = TXC = function () {
	__C()
	c.dr('me')
	c.paperBag()
}
DRAWN = CV27 = function () {
	__C()
	x.s('u').l(6).lC('round')
}
CV17 = FAAD = SLOWFADE = function (opacity) {
	//makes a yellow square and black dot??
	c = $.c('y', 500, 500)
	c.cir(10, 10, 10)
	opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001
	c.al(opacity)
	c.ctx().fS('red')
	c.fillRect()
	if (opacity < 1) {
		setTimeout(
				function () {
					self(opacity)
				}, 30
		)
	}
}
function fullCan() {
	CV25 = FULLCAN1 = function () {
		$('html').css({
			height: '100%'//, of:'h'
		})
		$('body').css({
			margin: 0,
			//g:0,
			height: '100%'
		})
		var s = 'Click or tap the screen to start the game',
				fo = 'bold 16px Arial',
				x = $.c('p',
						$('body').W(),
						$('body').H()
				).A()
		//
		// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
		$.i('me', function (image) {
			image = $(image.target)
			var origW = image.W()
			image.W(Math.round((50 * $('body').W()) / 100))
			image.H(Math.round((image.W() * image.H() ) / origW))
			x.draw(
					image,
					x.W() / 2 - image.W() / 2,
					x.H() / 2 - image.H() / 2
			)
		})
	}
	CV11 = FULLCAN = function () {
		$('html').css(
				{
					height: '100%'//, of:'h'
				}
		)
		$('body').css(
				{
					margin: 0,
					//g:0,
					height: '100%'
				}
		)
		var s = 'Click or tap the screen to start the game',
				fo = 'bold 16px Arial',
				x = $.c('pink', $('body').W(), $('body').H()).A()
		// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
		$.i(
				'me', function (image) {
					image = $(image.target)
					var origW = image.W()
					image.W(Math.round((50 * cW()) / 100))
					image.H(Math.round((image.W() * image.H() ) / origW))
					x.draw(
							image,
							x.W() / 2 - image.W() / 2,
							x.H() / 2 - image.H() / 2
					)
				}
		)
	}
}
FAN = CV6 = function () {
	$l('fan')
	x = $.c('y', 1000, 800).A()
	y = $.c('x', 400).A()
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	guidewires = false
	dragging = false
	mousedown = {}
	loc = {}
	restoreDrawingSurface = function () {
	}
	updateRubberband = function (m) {
		x.ln(
				mousedown.x,
				mousedown.y,
				m.x,
				m.y
		)
	}
	drawGuidewires = function () {
	}
	x.MD(
			function (X, Y) {
				dragging = true
				mousedown = {x: X, y: Y}
			}
	)
	x.MM(
			function (X, Y) {
				if (dragging) {
					restoreDrawingSurface()
					updateRubberband({x: X, y: Y})
				}
				if (guidewires) {
					drawGuidewires(loc.x, loc.y)
				}
			}
	)
	x.MU(
			function (X, Y) {
				dragging = false
				restoreDrawingSurface()
				updateRubberband({x: X, y: Y})
			}
	)
}
HULL = CV12 = function () {
	z()
	c = $.c('y', 800, 400).id('canvas').A()
	window.onload = init
	function init() {
		var canvas = c[0],        // main canvas element
				fps = 10,                                        // drawing frames per second
				convex = new Convex(),                            // convex hull
				dots = []                                     // dots, which are not in the convex hull
		// adjust canvas proportions
		// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
		// assign canvas context
		ctx = canvas.getContext("2d");
		setInterval(
				function () {
					
					// get a blank canvas //// clear
					ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
					// draw convex dots
					convex.draw()
					// draw dots
					dots.map(function (dot) {
						dot.draw()
					})
				}, 1000 / fps
		)
		// clicked on canvas
		c.click(
				function (evt) {
					var x = evt.clientX - canvas.getBoundingClientRect().left,
							y = evt.clientY - canvas.getBoundingClientRect().top
					// clear convex
					convex.dots = []
					// add dot
					dots.push(new Dot(new V(x, y)))
				}
		)
		$.bt(
				'draw convex', function () {
					// move dots to canvas
					dots.map(function (dot) {
						convex.addDot(dot)
					})
					// clear dots
					dots = []
				}
		).A()
	}
	
	var Dot = function (pos) {
		this.pos = pos
	}
	Dot.prototype = {
		draw: function () {
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
		}
	}
	Convex = function () {
		this.dots = []
	} // a convex hull
	Convex.prototype = {
		draw: function () {
			var _this = this, refDots;
			// loop through dots
			this.dots.map(
					function (el) {
						var dotAfter;
						// draw dot
						el.draw();
						refDots = _this.copyDots(_this.dots); // copy dots
						// remove el from reference dots
						for (var i = 0; i < refDots.length; i++) {
							if (refDots[i] != el) continue;
							refDots.splice(i, 1);
						}
						// get dot after this dot
						dotAfter = _this.getDotAfter(_this.dots, el);
						// draw direct line
						ctx.moveTo(el.pos.x, el.pos.y);
						ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
						ctx.stroke();
					}
			)
		},
		addDot: function (dot) {
			// the dot cannot be added, because it wouldn't be a convex anymore
			if (this.isDotInsideConvex(this.dots, dot)) return;
			// add dot intentionally
			this.dots.push(dot);
			// less than four dots are always a convex
			if (this.dots.length < 4) return;
			// remove dots, which are not in the convex (anymore)
			this.composeConvexHull();
		},
		composeConvexHull: function () {
			var refDots,        // all dots, except the one we are testing
					dot,            // the dot, supposed to be in the new convex
					newDots = [];    // dots, which are definitely part of the convex
			// loop dots
			for (var i = 0; i < this.dots.length; i++) {
				
				// reset dots reference
				refDots = this.copyDots(this.dots);
				// assig dot to the current index
				dot = refDots[i];
				// remove dot from refDots
				for (var h = 0; h < refDots.length; h++) {
					if (h != i) continue;
					refDots.splice(h, 1);
					break;
				}
				// the dot is not inside of the convex, therefore add it
				if (!this.isDotInsideConvex(refDots, dot)) {
					newDots.push(dot);
				}
			}
			// assign new convex
			this.dots = newDots;
		},
		//  copy dots object,, this is done due to call by reference
		copyDots: function (ref) {
			var dots = [];
			ref.map(
					function (dot) {
						dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
					}
			);
			return dots;
		},
		isDotInsideConvex: function (convexDots, dot) {
			var dotBefore, dotAfter, sign;
			// at least three dots required for a convex
			if (convexDots.length < 3) return false;
			// the dot is definitely not inside the convex hull
			if (this.dotOutsideConvexRect(convexDots, dot)) return false;
			// assign dot before to the closest dot by the angle, which is negative
			dotBefore = this.getDotBefore(convexDots, dot);
			// assign dot after to the closest dot by the angle, which is positive
			dotAfter = this.getDotAfter(convexDots, dot);
			// dot on the inside of the line from dotBefore to dotAfter
			return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
		},
		//  is the dot outside of the convex rectangle?
		dotOutsideConvexRect: function (convexDots, dot) {
			var outside = [true, true, true, true];
			for (var i = 0; i < convexDots.length; i++) {
				if (convexDots[i].pos.x < dot.pos.x)
					outside[0] = false;
				if (convexDots[i].pos.x > dot.pos.x)
					outside[1] = false;
				if (convexDots[i].pos.y < dot.pos.y)
					outside[2] = false;
				if (convexDots[i].pos.y > dot.pos.y)
					outside[3] = false;
			}
			return outside[0] || outside[1] || outside[2] || outside[3];
		},
		//  get middle position as vector from the bounding dots
		getCenter: function (dots) {
			var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
			dots.map(
					function (dot) {
						if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
						if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
						if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
						if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
					}
			);
			return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
		},
		//   get the closest dot before dot from dots
		getDotBefore: function (dots, dot) {
			var center, bgRad = -Math.PI * 2, dotBefore;
			center = this.getCenter(dots);
			dotRad = center.angleTo(dot.pos);
			dots.map(
					function (needleDot) {
						var needleRad = center.angleTo(needleDot.pos),
								refRad = needleRad - dotRad;
						if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
						if (refRad <= bgRad) return;
						bgRad = refRad;
						dotBefore = needleDot;
					}
			);
			return dotBefore;
		},
		//  get the closest dot after dot from dots
		getDotAfter: function (dots, dot) {
			var center, smRad = Math.PI * 2, dotAfter
			center = this.getCenter(dots)
			dotRad = center.angleTo(dot.pos)
			dots.map(
					function (needleDot) {
						var needleRad = center.angleTo(needleDot.pos),
								refRad = needleRad - dotRad;
						if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
						if (refRad >= smRad) return
						smRad = refRad
						dotAfter = needleDot
					}
			)
			return dotAfter
		}
	}
	var V = function (x, y) {
		this.x = x
		this.y = y
	}
	V.prototype = {
		subtract: function (v) {
			return new V(this.x - v.x, this.y - v.y);
		},
		// this = center, v = destination
		angleTo: function (v) {
			var ref = this.subtract(v)
			return Math.atan2(ref.y, ref.x) + Math.PI
		},
		// 0 = on line, 1 = inside, -1 = outside
		getSide: function (v1, v2) {
			return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
		}
	}
}
function paralax() {
	function DivLayer(bg) {
		var div = $.d('y', 500, 500).P('a').width('100%').H(256)
		if (bg) {
			div.css('backgroundImage', bg)
		}
		return div
	}
	
	function transparent(i, num) {
		if (!N(num)) {
			return 'transparent url(' + i + '.png)'
		}
		return 'transparent url(' + i + '.png)' + num + '% 0px'
	}
	
	function CanvasLayer(bg) {
		var can = $.c('y', 500, 500).A()
				.P('a').width('100%').H(256)
		if (bg) {
			can.bg(bg)
		}
		return can
	}
	
	function int() {
		xp += speed
		back.bgP(xp + 'px 0px')
		front.bgP((xp * 3) + 'px 0px')
	}
	
	function mOut(e) {
		speed = 0
	}
	
	function mMove(e) {
		speed = e.pageX - ( W() / 2 )
		speed /= ( W() / 2 )
		$l(speed)
	}
	
	LAX = PARALLAX = function () {
		CanvasLayer(transparent('me', 10)).A()
		CanvasLayer(transparent('guy', 300)).A()
	}
	PBM = PARALLAXBYMOUSE = function () {
		//awesome!!!!!
		back = DivLayer(transparent('me'))
		front = DivLayer(transparent('guy'))
		speed = 0
		xp = 0
		$('body').mousemove(mMove)
		$('body').mouseout(mOut)
		setInterval(int, 30)
	}
}
// https://www.youtube.com/watch?v=2p4YunDAzsk
$S.styCan = {canvas: {outline: 'red 10px dashed'}}
$.c2 = function (w, y) {
	var c = $.c(w || 960, h || 200)
	c.id('canvas')
	c.k('canvas can')
	return c
}
x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'])) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
		}
	}
	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	g[1] = N(g[1], 0)
	g[2] = N(g[2], 0)
	x.drawImage.apply(x, g)
	return x
}
x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	if (S(o.i)) {
		if (O(window['Q']) && Q.ran) {
			o.i = Q.i(o.i)
		}
		else {
			$.i(g[0], function (i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
}
x.jD = function (img, p1, p2, p3, p4) {
	var x = this, i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
 
function center() {
	x.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.i(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.i(i, function (i) {
				that.dr(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	} //draw it where u say, but as if its reg point was its center
	x.drawRegCenter = function f(i, x, y) {
		var that = this
		$.i(i, function (e, i) {
			that.draw(i[0],
					(that.W() / 2) - (i.W() / 2),
					(that.H() / 2) - (i.H() / 2))
		})
		return this
	}
}
function crop() {
	x.cr = function (x1, y1, x2, y2) {
		var ctx = this
		var cv = ctx.cv()
		var i = this.u()
		if (A(x1)) {
			return ctx.crop(
					x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
			)
		}
		ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
		return cv
	}
}
function clip() {
	x.clp = x.cl = function () {
		this.clip();
		return this
	}
}
function dataUrl() {
	x.dU = x.tDU = x.u = function () {
		return this.cv().toDataURL()
	}
}
_canDrawImg = function (el) {
	el.me = function me(n) {//randomly draw my face
		var g = G(arguments), n = g[0] || 200
		if (x.me.d) {
			clearInterval(x.me.d);
			x.me.d = false
		}
		else {
			x.me.d = I(function () {
				x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
			}, n)
		}
		return x
	}
	el.me.shouldDrawMeId = false
	el.mugX = function (m) {
		qP('/mug', {u: m}, function (m) {
			x.fit(m)
		})
		return x
	}
	el.tick = function () {
		var ctx = this.ctx()
		ctx.tick.apply(ctx, arguments)
		return this
	}
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//this just a simple proxy to drawImage // dont use?
	el.drawImage = el.dI = function () {
		var el = this, g = G(arguments)
		g[1] = N(g[1]) ? g[1] : 0
		g[2] = N(g[2]) ? g[2] : 0
		$(el)[0].getContext('2d').drawImage.apply(
				$(el)[0].getContext('2d'), g
		)
	}
	//this will create the image (from string), and then draw it
	el.dr = el.draw = function () {
		$l('el.dr')
		var el = this, g = G(arguments)
		$.i(g.f, function (i) {
			g[0] = i
			__g = g
			el.dI.apply(el, g)
		})
	}
	el.fit = function f(i, x, y) {
		var el = this//$l('fit: - el.W():' + el.W())
		i = i || 'me'
		x = x || 0
		y = y || 0
		el.draw(i, x, y, el.W(), el.H())
		//el.draw(img, X, Y, el.width(), el.height())
		return el
	}
	el.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.img(i, function (i) {
				that.draw(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	}
	//draw it where u say, but as if its reg point was its center
	el.drawRegCenter = el.dC2 = function f(i, x, y) {
		var that = this
		$.img(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
		return this
	}
	el.Cd = function (a, x, y) {
		var that = this
		a = a || 'me'
		x = x || 100
		y = y || 100
		$.img(a,
				function (img) {
					that.drawImage(
							img.src,
							x - img.W() / 2,
							y - img.H() / 2
					)
				})
	}
	return el
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
_canMug = function (el) {
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//wap specific
	el.snap = function (func) {
		pams = {
			d: el.toDataURL(),
			dats: el.dats
		}
		$.post('/img', pams, func)
	}
	//el.img = $.img()
	//el.img.src(el.toDataURL())
	el.dots = function () {
		el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x)
			el.dats.push(y)
			el.line(el.DOTS)
		})
		el.$$(function (X, Y) {
			var du
			//el.C('X')
			el.off('click')
			el.closePath()  //el.paste() // el.copy()  //el.save()
			el.clear() //du = el.toDataURL()
			el.clip()
			el.paste() //el.fit(du)
		})
		return el
	}
	return el
}
_canPixel = function (el) {
	el.gD = el.getData = function (x, y, w, h) {
		//historic.. dont delete ! data = x('G', X, Y, w, h).res
		var g = G(arguments),
				x = g[0] || 0,
				y = g[1] || 0,
				w = g[2] || this.W(),
				h = g[3] || this.H(),
				data = this.context.getImageData(x, y, w, h)
		// data.h = data.height
		// data.w = data.width
		// data.d = data.data
		return data
	}
	el.pD = el.putData = function (data, x, y) {
		x = x || 0
		y = y || 0
		this.context.putImageData(data, x, y)
		return this
	}
	el.gP = el.getPut = function (a, x, y) {
		var g = G(arguments),
				a = g[0],
				x = g[1],
				y = g[2],
				data = this.gD.apply(this.context, a)
		if (g.n) {
			this.clear()
		}
		return x.pD(data, x, y)
	}
	el.pixelsNegative = function () {
		var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1]
			data[i + 2] = 255 - data[i + 2]
			data[i + 3] = 255
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsInvert = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 225 - data[i];
			data[i + 1] = 225 - data[i + 1]
			data[i + 2] = 225 - data[i + 2]
		}
		this.pD(imgData)
	}
	el.pixelsGrayscale = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg
			data[i + 1] = avg
			data[i + 2] = avg
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsFade = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 7; i < _.size(data); i += 4) {
			data[i] = 90
		}
		this.pD(imgData)
		return el
	}
	return el
}
x.cD = function () {
	this.createImageData()
	return this
}
x.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.getImageData(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
x.pD = function (d, x, y) {
	this.putImageData(d, N(x, 0), N(y, 0))
	return this
}
CVL = function () {
	__C()
	Q(['me'], function (q) {
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}
CLD = CANVASQLOADER = function () {
	__C();
	$Ld(['me'], function (q) {
				me = q.get('me')
				c.drawImage(me, 100, 100)
				c.pD(c.gD(100, 100, 500, 500), 120, 120)
				c.f("red").fr(10, 10, 50, 50)
				imgData = c.gD(10, 10, 50, 50)
				c.pD(imgData, 10, 70)
			}
	)
}
CPX = PIXEL = function () {
	c = $.c();
	$Ld(['me'], function (ld) {
		me = ld.get('me')
		c.drawImage(me, 100, 100)
		d = c.gD(100, 100, 500, 500)
		// c.pD(d , 120, 120 )
		zeros = nums = 0
		_.e(d.data, function (d) {
			if (d == 0) {
				zeros++
			} else {
				nums++
			}
		})
		$l('zeros: ' + zeros + ' - nums: ' + nums)
	})
}
CP1 = PIXELTEST = function () {
	c = __C();
	$Ld(
			['me'], function (q) {
				me = q.get('me')
				c.drawImage(me, 100, 100)
				d = c.gD(100, 100, 500, 500)
				// c.pD(d , 120, 120 )
				zeros = 0
				nums = 0
				_.each(
						d.data, function (d) {
							if (d == 0) {
								zeros++
							} else {
								nums++
							}
						}
				)
				$l('zeros: ' + zeros + ' - nums: ' + nums)
			}
	)
}
LOADER = CV21 = FLOATCVQ = function () {
	Q(function () {
		__C()
		x.b(400, 100, 'r', 'o', 30).l(600, 400)
		x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
		x.b().a(400, 75, 50, 0, 340, '-')
		x.tl(-100, 0, R(30), 2)
				.b(400, 100, 'x', 'b', 30)
				.l(600, 400)
		x.d('me')
		x.d(x, 300, 300)
		x.d(x, 300, 300)
		//x.scICen('guy', .7)
		//Uncaught TypeError: Cannot read property 'd' of undefined
	})
}
LOADER = GC1 = XORMORE = function () {
	c = __C()
	Q(function () {
				x.d('me', 100, 100)
				x.d('me', 200, 100)
				x.d('me', 300, 100)
				x.d('me', 400, 100)
				x.d('me', 500, 100)
				x.d('me', 150, 150) //  x.sO(); x.dO()
				x.xo()
				c.$(
						function () {
							var g = G(arguments), o
							o = {x: g.f, y: g.s}
							x.d('guy', o.x, o.y)
						}
				)
			}
	)
}
LOADER = ADB = mugmug = function () {
	_ADBE = function (fn) {
		return function () {
			$Ld(function () {
				__C()
				j = x.d('me', 100, 300)
				i = x.d('chicks', 600, 300)
				fn()
			})
		}
	}
	ADBE = _ADBE(function () {
		c.$(function (x1, y1) {
			x.a(x1, y1, 10).s()
		})
	})
	ADBE()
}
GPC = CTXGPC = function () {
	w.pDraw = function (p, x, y) {
		var w = this,
				b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	h.drawPolygon = function (V, c, C, l) {
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	x.setup = function () {
		var x = this
		x.clearRect(0, 0, 400, 400)
		x.drawPolyD(pol1, "blue", 0, -30);
		x.drawPolyD(pol2, "red", 0, -30);
	}
	x.drawPolyD = function (pD, col, ox, oy) {
		var x = this
		pD.ePol(function (pol, i) {
			x.drawPol(pol.pts(), pD.getCol(i, col), pol.isHole(), ox, oy)
		})
	}
	pD.getCol = function (i, col) {
		return getCol(i, this.numPol(), col)
	}
	function getCol(i, num, strCol) {
//if more than one poly produced, use multiple color to display
		return i == 0 ? strCol :
				["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num]
	}
	
	function createPoly(pts) {
		var res = $pD()
		_.e(pts, function (pt) {
			res.addPoint(new Point(pt[0], pt[1]))
		})
		return res;
	}
	
	function easelCanvasContext() {
		x.Cd = function (i, x, y) {
			var ctx = this
			x = N(x, 100)
			y = N(y, 100)
			i = Q.i(i || 'me')
			ctx.d(i, x - i.W() / 2, y - i.H() / 2)
			return ctx
		}
		x.scImCen = function (i, s, x, y) {
			if (S(i) && i.length < 100) {
				i = Q.i(i)
			}
			x = N(x, 0)
			y = N(y, 0)
			var w = this.W(),
					h = this.H(),
					s = s || 1
			this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
		}
		x.scaleImCenSpiralMe = function () {
			var scaleNum = 1,
					that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.scaleImCenSpiral = function () {
			var scaleNum = 1, that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.cjsTick = x.tick = function (func) {
			var x = this
			cjs.tick(function () {
				x.temp(func)
			})
			return this
		}
		tempDrawOnTickerTick = x.t = function (fn) {
			var x = this;
			T.t(function () {
				x.temp(fn)
			});
			return this
		}
	}
	
	w.pDraw = function (p, x, y) {
		var w = this, b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	createPoly = function (points) {
		var res = $pD()
		for (var i = 0; i < points.length; i++) {
			res.addPoint(new Point(points[i][0], points[i][1]));
		}
		return res;
	}
	vs1 = v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
		[105, 200], [141, 163], [48, 139], [74, 117]]
	vs2 = v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	colsArr = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
	vertices1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	poly1 = p1 = createPoly(vertices1);
	vertices2 = p2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	poly2 = createPoly(vertices2);
	opFns = {}
	opFns.difference = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.difference(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.intersection = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.intersection(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.union = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.union(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.xor = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.xor(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	getPolygonVertices = function (poly) {
		var vertices = [];
		var numPoints = poly.getNumPoints();
		var i;
		for (i = 0; i < numPoints; i++) {
			vertices.push([poly.getX(i), poly.getY(i)]);
		}
		return vertices;
	}
	drawSinglePoly = function (vertices, strokeColor, hole, ox, oy) {
		var i;
		if (ox == undefined)    ox = 0;
		if (oy == undefined)    oy = 0;
		x.beginPath();
		x.moveTo(vertices[0][0] + ox, vertices[0][1] + oy);
		for (i = 1; i < vertices.length; i++) {
			x.lineTo(vertices[i][0] + ox, vertices[i][1] + oy);
		}
		x.lineWidth = 12
		x.strokeStyle = strokeColor;
		x.fillStyle = "rgba(255, 0, 0, 0.1)";
		if (hole == true) {
			x.fillStyle = "#ffffff";
		}
		x.closePath();
		x.stroke();
		x.fill();
	}
	clearScreen = function () {
		x.clearRect(0, 0, 400, 400);
	}
	colors = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]//if more than one poly produced, use multiple color to display
	drawPoly = function (polygon, strokeColor, ox, oy) {
		var num = polygon.getNumInnerPoly();
		var i;
		for (i = 0; i < num; i++) {
			var poly = polygon.getInnerPoly(i);
			var vertices = getPolygonVertices(poly);
			if (i == 0) {
				drawSinglePoly(vertices, strokeColor, poly.isHole(), ox, oy);
			}
			else {
				drawSinglePoly(vertices, colors[i % num], poly.isHole(), ox, oy);
			}
		}
	}
	GP = function () {
		$('<title>GPCJS example</title>').A()
		$cv = $('<canvas id="canvas" width="400px" height="400px">').A();
		canvas = $cv[0];
		x = $cv.ctx()
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		GP.opBtns()
	}
	GP.opBtns = function () {
		opsArr = ['difference', 'intersection', 'union', 'xor']
		$.br().A()
		_.e(opsArr, function (op) {
			$.bt(op, opFns[op]).A()
		})
	}
	GP()
	function alt() {
		GP = function () {
			GP.pols()
			$cv = $.c('c', 400, 400)
			x = $cv.ctx()
			$.br().A()
			_.e(['difference', 'intersection', 'union', 'xor'], function (op) {
				$.bt(op, {
					difference: opFn('difference'),
					intersection: opFn('intersection'),
					union: opFn('union'),
					xor: opFn('xor')
				}[op]).A()
			})
			function opFn(op) {
				return function () {
					x.setup()
					x.drawPolyD(applyOp(op), "green", 0, 150);
				}
				function applyOp(op) {
					return pol1[op](pol2)
				}
			}
			
			x.drawPolyD(pol1, "blue", 0, -30);
			x.drawPolyD(pol2, "red", 0, -30);
		}
		GP.pols = function () {
			vxs1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]]
			vxs2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
			pol1 = createPoly(vxs1);
			pol2 = createPoly(vxs2);
		}
	}
}
function _pre() {
	x = ctx = CanvasRenderingContext2D.prototype
}