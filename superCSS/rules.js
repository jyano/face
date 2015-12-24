$.sty = function (h) {
	var styleTag = $('<style>')
			.at({type: 'text/css'});
	styleTag.h(h)
	return styleTag
}
$rule = function (sel, decs, rulesOb) {
	var str
	var SelOb = {
		bd: 'body', bt: 'button',
		sc: 'section', nv: 'nav', d: 'div',
		i: 'img', ip: 'input'
	}
	if (A(sel)) {
		alert('$rule')
		sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
	}
	sel = sel.replace('_', '.')
			.replace('$', '#')
	_.e(
			SelOb, function (v, k) {
				if (sel == k) {
					sel = v
				}
			}
	)
	
	return sel + ' ' + $decBlk(decs, rulesOb)
}
$rules = function (rulesOb) {
	var rulesStr = '\n\n';
	_.e(
			rulesOb, function (decs, sel) {
				rulesStr += $rule(sel, decs, rulesOb) + '\n'
			}
	)
	rulesStr += '\n'
	return rulesStr
}
$s =  s$= $CSS = $css=function () {
	var g=G(arguments), rulesOb
	if (g.u) {
		return $l($('style').oh())}
	if(g.O){
		rulesOb = g.f
	}
	else {
		rulesOb = {}
		rulesOb[g.f] =  g.s}
	var rulesStr = $rules(rulesOb)
	$('head').A($.sty(rulesStr))
	if(g.m){$l(rulesStr)}
	return rulesStr
}
$decBlk = function (decs, rulesOb) {
		var plugin = function (decsOb, plOb) {
			_.e(plOb, function (v, k) {
				$s.pg[k].apply(decsOb, v)
			})
			return decsOb
		}
	var decBlkStr = ' ', DECS = {}
	if (S(decs)) {return decs} //for @media ??
	
	if (decs.pl) {
	
	
		
		plugin(decs, decsOb.pl)
	}
	
	if (decs.mx) {
		//_.e(decs.mx, function (v, k) {$S.mx[k].apply(decs, v)})
		mixin = function (decsOb, rulesOb) {
			//tries to extend from one of its own first
			if (rulesOb && rulesOb[decsOb.mx]) {
				_.x(decsOb, rulesOb[decsOb.mx])
			}
			//then goes to global ($S.mx)
			else {
				_.x(decsOb, $s.mx[decsOb.mx])
			}
		}
		mixin(decs.mx, rulesOb)
	}
	_.e(decs, function (v, k) {
				var fn
				if (k !== 'mx' && k !== 'pl') {
					if (A(v)) {
						$l('$decBlk - plugin!');
						$d(v)
						fn = $s.fn[_.f(v)]
						if (F(fn)) {
							DECS[oO('s', k)] = fn.apply(null, _.r(v))
						}
						else {
							$l('$decBlk fn not a fn!!')
							if ($CSS.df[k]) {
								DECS[oO('s', k)] = $CSS.df[k][_.f(v)]
							}
						}
						return}
					DECS[oO('s', k)] = (N(v) && (v > 10)) ?
					String(v) + 'px' :
							oO(k, v, 'R')
				}
			}
	)
	_.e(
			DECS, function (v, k) {
				decBlkStr += k + ':' + v + '; '
			}
	)
	return '{ ' + decBlkStr + '}'
}
$subRules = function (rulesOb) {
//for meta (see Grail)
// GRAIL CALLS THIS
	return '{' + $rules(rulesOb) + '}'
	// GRAIL CALLS THIS
}