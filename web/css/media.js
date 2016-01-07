$L('phone', 'tablet','cutoffs')
$subRules = function (rulesOb) {
	return _brace($rules(rulesOb))
	//for meta (see Grail)
}
function cutoffs(){
	minW = above = greaterThan = atLeast = min = function (num, str) {
		return '@media all and (min-width: ' + num + 'px) ' + (str || '')
	}
	maxW = below = lessThan = max = function (num, str) {
		return '@media all and (max-width: ' + num + 'px) ' + (str || '')
	}
	between = within = function (n1, n2, str) {
		maxMin = function (n1, n2, str) {
			return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
		}
		return maxMin(n2, n1, str)
	}
}
function phone(){
	_$phone = function (ob) {
		return _phone + $rules(ob)
	}
	$phone = function (ob) {
		$.Sty(_$phone(ob))
	}
}
function tablet(){
_$tablet = function (ob) {
	return _tablet + $rules(ob)
}
 

$tablet = function (ob) {
	$.Sty(_$tablet(ob))
}
}
function _pre() {
	_tablet = '@media screen and (max-width: 960px)'
	_phone = '@media screen and (max-width: 640px)'
	$tp = window['$tp'] || {}
	tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
	phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
}
 
