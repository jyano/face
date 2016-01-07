$L()
an = function (q, a) {
	alert('an')
	if (q.han) {
		_.xI(q.han)
	}
	if (a.u) {
		q.bi(a.u)
	}
	if (a.n > 1) {
		q.han = _.sI(function () {
			a.c++
			if (!a.l && a.c > a.n) {
				_.xI(q.han);
				q.han = false
			}
			else {
				a.c %= a.n
			}
			q.sFr(a)
		}, a.r)
	}
}
$.an = function () {
	var bd = $.bd();
	return bd.j.apply(
			bd, G(arguments))
}
$.aF = $.anFr = $.anf = function (n, w) {
	var c = 0;
	n = n || 10;
	w = w || 20;
	$.ev(function () {
		q.sFr(c, w)
		c = (c + 1) % n
	})
}
$.notAn = function (a) { // sel
	return a.filter(':not(:animated)')
}
$.fn.a = function (a, b, c, d) {
	ANob = {
		B: 'bottom', L: 'left', R: 'right', T: 'top',
		b: 'borderWidth', bb: 'borderBottomWidth',
		bl: 'borderLeftWidth', br: 'borderRightWidth',
		bt: 'borderTopWidth', bs: 'borderSpacing',
		C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
		mh: 'minHeight', mw: 'minWidth',
		i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
		m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
		mt: 'marginTop', o: ' outlineWidth',
		p: ' padding', pb: 'paddingBottom',
		pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
		ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
	}
	var g = G(arguments), o
	o = g.f
	var q = this
	if (O(a)) {
		if (a.c) {
			a.color = oO('c', a.c)
		}
		if (a.C) {
			a.backgroundColor = oO('c', a.C)
		}
	}
	q.animate(a, b, c, d)
	return q
	if (o.C) {//$l(o.C+'-->');
		o.C = oO('c', o.C);
		//$l(o.C)
	}
	_.e(o, function (v, k) {
		if (ANob[k]) {
			o[ANob[k]] = v
		}
	})
	if (N(g.s)) {
		g.s *= 1000
	}
	_p = o
	this.an(o, g.s, g.t, g[3], g[4])
	return this
	$.an = $.j = function () {
		var bd = $.bd();
		return bd.j.apply(bd, G(arguments))
	}
}
$.fn.an = function (a, b, c, d) {
	var g = G(arguments), q = this
	//if (N(g.s)) {g.s *= 1000}
	this.animate($sty(g.f), g.s, g.t, g[3], g[4])
	return this
}
$.fn.anFr = $.fn.animateFrames
$.fn.qu = $.fn.queue
$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.dq = $.fn.dqu = $.fn.dequeue
function _post() {
	$.fn.animloop = function () {
		var that = this
		this.show("slow")
		this.animate({"marginLeft": "300px"}, 2000)
				.animate({"marginLeft": "0px"}, 2000)
		this.hide("slow", function () {
			that.animloop()
		})
	}
}

function _pre() {
	$.fn.st = $.fn.stop
	$.fn.fdT = $.fn.fd2 = $.fn.f2 = $.fn.fT = $.fn.fadeTo
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
}
 