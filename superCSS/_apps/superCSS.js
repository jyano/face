$L(  'text','font', 'border','color','backgr','bckgrImg')
function color(){
	$.toColor = function (n1, n2, n3, n4) {
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
	}
	$.fn.al = function (z) {
		if (U(z)) {
			return this.css('opacity')
		}
		this.css('opacity', z)
		return this
	}
	$.fn.col = function (col) {
		return this.css('color', oO('c', col))
	}
	$.fn.C = function (col, c2) {
		if (c2) {
			return this.C(col).col(c2)
		}
		if (col == '*') {
			col = Yano.random()
		}
		return this.css('backgroundColor', oO('c', col))
	}
	$.C = function (Col, col) {
		var bd = $('body')
		bd.C(Col)
		if (col) {
			bd.col(col)
		}
		return $
	}
}
$.fn.k = $.fn.K = function () {
		$.fn.addClass.apply(this, arguments);
		return this
}
$.fn.tK = $.fn.ggK = $.fn.toggleClass	
$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
function text(){
	$.fn.T = function () {
		var g = G(arguments)
		if (g.u) {
			return this.text()
		}
		this.text(g.f)
		return this
	}
	$.fn.tA = $.fn.textAlign = function (z) {
		this.css('text-align', z)
		return this
	}
	
}
function font(){
	$.fn.fS = $.fn.fZ = $.fn.fontSize = function (z) {
		this.css('font-size', z)
		return this
	}
	$.Fo = $.font = $f = function (a, b) {
		var g = G(arguments)
		if (O(a)) {
			return ss(
					oB(b), {fz: a || 50}
			)
		}
		a = N(a) ? _S(a) : U(a) ? '' : a;
		var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
		_.e(
				a.split(' '), function (p) {
					if (M(p[0])) {
						p = p.split('/')
						Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
					}
					F = Oo('ff', p) || F
					W = Oo('fw', p) || W
					S = Oo('fs', p) || S
				}
		)
		return [W, S, Z, F].join(' ')
	}
}
$.Ol = $.outline = function OL() {
		var g = G(arguments), o, ol
		o = g.N_ ? {w: g.f} :
				Oo('c', o) ?
				{c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
		/*
		 if(S(g.f)){
		 o= g.f.split(' ')
		 ol= _.j([
		 $r('c',o[0]),  oO('ow',o[1]||5) +'px',
		 oO('os',o[2]||'-') ])
		 $l(ol)
		 return ol}
		 ol=  _.j([
		 $r('c',o.c),
		 N(o.w)? o.w+'px'$r('ow',o.w),
		 $r('os',o.s)
		 ])*/
		//$l( ol )
		return ol
	}
function border(){
	$.fn.bdC = $.fn.borCol = $.fn.bdC = $.fn.borderColor = function (a) {
		return this.css("border-color", oO('c', a || 'r'))
	}
	$.fn.bS = $.fn.borSty = $.fn.borderStyle = function (style) {
		this.css('border-style', style)
		return this
	}
	$.fn.borWidth = $.fn.bW = $.fn.borderWidth = function (w) {
		this.css('border-width', w)
		return this
	}
	$.fn.bor = function (border) {
		if (U(border)) {
			return this.css('border')
		}
		this.css('border', border);
		return this
	}
}
function bckgr(){
	 
	
	$.fn.bg = function (bg) {
		if (U(bg)) {return this.css('background')}
		this.css('background', bg)
		return this
	}
	$.fn.bgP = function (bg) {
		if (U(bg)) {
			return this.css('backgroundPosition')
		}
		this.css('backgroundPosition', bg)
		return this
	}
	
}
function bckgrImg() {
	$.fn.bgI = function (url) {//set background image
		this.bgI('url("' + $.src(url) + '")');
		return this
	}
	$.fn.pBgI = $.fn.bp = function (x, y) {
		var g = G(arguments), x = g[0], y = g[1];
		x = N(x) ? x : 0;
		y = N(y) ? y : 0;
		this.css({backgroundPos: x + 'px ' + y + 'px'});
		return this
	}
}
 