$L('apps')

$sel=function(sel) {
	if (A(sel)) {
		sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
	}
	if(sel == '$'){return '*'}
	sel = sel.replace('_', '.')
			.replace('$', '#')
	_.e({
		bd: 'body',
		bt: 'button',
		sc: 'section', nv: 'nav',
		d: 'div',
		i: 'img', ip: 'input'
	}, function (v, k) {
		if (sel == k) {
			sel = v
		}
	})
	return sel
}

$val = function (v, k) {
	if(A(v)){return  $helperValue(v, k) }
	return N(v) && v > 10 ? $S(v) + 'px' :
			oO(k, v, 'R')
}


$decBlk = function (decs, ob) {
	ob = ob || {}
	var decBlk  = ' ', 
	Decs = {}
	
	if (S(decs)) {
		return decs
	} //for @media ??
	
	$plugin(decs)
	$mixin(decs, ob)
	_.e(decs, function (v, k) {
		if (k == 'mixins' || k == 'plugins') {
			return
		}
		$setPropVal = function (ob, key, val) {
			ob[key] = $val(val, key)
		}
		
		Decs[oO('s', k)] = $val(v, k)
	})
	
	_.e(Decs, function (v, k) {
	
		var dec = _dec(v, k)
		$l('dec: ' + dec)
		decBlk  += dec
	})
	$l('decBlk: ' + decBlk )
	return _brace(decBlk )
}


$rule = function (sel, decs, rulesOb) {
	return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
}

$rules = function (rulesOb) {
	var rulesStr = '\n\n'
	_.e(rulesOb, function(decs, sel) {
		rulesStr += $rule(sel, decs, rulesOb) + '\n'
	})
	return rulesStr + '\n'
}
 
function _pre() {
	_dec = function (v, k) {
		return k + ':' + v + '; '
	}
	_brace = function (str) {
		return '{' + (str || '') + '}'
	}
}
function apps(){
	SEL = function () {
		t = $.t()
		sels = [
			'd', '_klas_klas', '$id$id', '$'
		]
		_.e(sels, function (sel) {
			t.A(
					$.tr().A(
							$.td(sel).W(100),
							$.td($sel(sel)).W(100)
					)
			)
		})
	}
	VAL = function () {
		t = $.t()
		sels = {
			C: 'r',
			dp: 'flex'
		}
		_.e(sels, function (val, key) {
			t.A($.tr().A($.td(key + ': ' + val).W(100),
					$.td($val(val, key)).W(100)))
		})
	}
	RUL = function () {
		var ru = $rule('d', {C: 'r', c: 'b'})
		$.h1(ru)
	}
	
	RUS=function(){
		css= {d: {C: 'r', c: 'b'}, bt: {C: 'b', c: 'r'}}
		$.h1($rules(css))
		$.br().A()
		$.h1($subRules(css))
	}
}
function _post() {
	$CSS = function () {
		var res = $s.apply(null, arguments)
		$l(res)
		return res
	}
}
 