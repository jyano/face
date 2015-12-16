LOGIN = function () {
	unIp = $.lIp('username', 'un').rm()
	pwIp = $.lIp('password', 'pw').rm()
	$.HR()
	asDiv = $.d().h4('as:  loading..')
	$.HR()
	btsDiv = $.d().A(
			But('new user', $.okP('dudes', $.IVOb('un', 'pw'), suc)),		
			But('login', $.ok()))
	dudesForm = $.fAc('dudes').a2(btsDiv)
	$.HR()
	$.btCA('b', [
		$.ipStPr('ip2'),
		$.spC('y', ' cheat')
	], cheatFn)
	$.HR()
	$.G('login', function (un) {
		asDiv.eH4('as: ' + un || 'guest')
	})
}
function But(title, arr) {
	var g = G(arguments)
	return $.bt(title, btFn)
	function btFn() {
		dudesForm.eH1(title)
		dudesForm.A(unIp, pwIp)
		A(arr) ? _.e(arr, add) : _.e(g.r, add)
	}
	
	function add(ch) {
		dudesForm.A(ch)
	}
}
function suc() {
	$l('suc')
}
function cheatFn() {
//	$.P('un', {un: $l($.IV('ip2')), inAs)
}
function inAs(ss) {
	$l('logged in as: ' + un + 'ss:' + ss)
}
AS=function(){
	$.h1('in as')
	form =  $.f().C('g')
	form.A('login AS',
	  $.lb('username:'),
	  $.ip().id('un'), 
	  $.ok()
	).suPrDf(fn)
	function fn() {
		$l('submit username: ' + $.iV('un'))
		$.P$d('as', 'un', 'ss')}
}
SUDO=function(){
	
	
}