$L('sassy')

$rule = function (sel, decs, rulesOb) {
	//if (A(sel)) {sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'}
	sel = sel.replace('_', '.').replace('$', '#')
	_.e(SelOb, function (v, k) {
		if (sel == k) {sel = v}
	})
	return sel + ' ' + $decBlk(decs, rulesOb)
}
$rules = function (rulesOb) {
	var rulesStr = '\n\n'
	_.e(rulesOb, addRule)
	return rulesStr + '\n'
	function addRule(decs, sel) {
		rulesStr +=  ( $rule(sel, decs, rulesOb) + '\n' )
	}
}
$s = $CSS =function () {
 
	var g=G(arguments), rulesOb
	if (g.u) {
		return $l($('style').oh())
	}
		
	if(g.O){
		rulesOb = g.f
	}
	
	else if(g.s) {
		rulesOb = {}
		rulesOb[g.f] =  g.s
	}
	
	var rulesStr = $rules(rulesOb)
	if (g.m) {
		$l(rulesStr)
	}
	
	$('head').A(
			$.sty(rulesStr)
	)
	
	return  rulesStr
	
	  
}

$decBlk = function (decs, rulesOb) {
	var decBlkStr = ' '
	var DECS = {}
	
	if (S(decs)) {return decs} //for @media ??
	if (decs.pl) {
		$plugin(decs, decsOb.pl)
	}
	if (decs.mx) {
		//_.e(decs.mx, function (v, k) {$S.mx[k].apply(decs, v)})
		$mixin(decs.mx, rulesOb)
	}
	_.e(decs, function (v, k) {
		var fn
		
		if (plain(k)) {
			if (A(v)) {
				fn = $s.fn[_.f(v)]
				if (F(fn)) {
					DECS[oO('s', k)] = fn.apply(null, _.r(v))
				}
				else {
					if ($CSS.df[k]) {
						DECS[oO('s', k)] = $CSS.df[k][_.f(v)]
					}
				}
				return
			}
			DECS[oO('s', k)] = (N(v) && (v > 10)) ?
			$S(v) + 'px' : oO(k, v, 'R')
		}
	})
	
	function plain(k){
	return k !== 'mx' && k !== 'pl'
	}
	
	_.e(DECS, function (v, k) {
		decBlkStr += k + ':' + v + '; '
	})
	
	return  $brace(decBlkStr)  
	 
}

$brace  = function(str){return '{'+(str ||'') +'}'}

$subRules = function (rulesOb) {
//for meta (see Grail)
// GRAIL CALLS THIS
	return '{' + $rules(rulesOb) + '}'
	// GRAIL CALLS THIS
}
function _pre() {
	SelOb = {
		bd: 'body', bt: 'button',
		sc: 'section', nv: 'nav', d: 'div',
		i: 'img', ip: 'input'
	}
}
function sassy() {
	$plugin = $decPl = $decPlugin = plugin = function (decsOb, plOb) {
		_.e(plOb, function (v, k) {
			$s.pg[k].apply(decsOb, v)
		})
		return decsOb
	}
	$mixin = mixin = function (decsOb, rulesOb) {
		//tries to extend from one of its own first
		if (rulesOb && rulesOb[decsOb.mx]) {
			_.x(decsOb, rulesOb[decsOb.mx])
		}
		//then goes to global ($S.mx)
		else {
			_.x(decsOb, $s.mx[decsOb.mx])
		}
	}
}