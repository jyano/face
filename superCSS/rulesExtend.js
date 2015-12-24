//to extend
$s.fn = {
	// (value-)helper functions:
	// lets you write/call functions that
	//produce a complicated value to a
	//particular property,
	// so you don't have to write out
	// the full location of the function
	// -helps with namespacing
}
$s.fn.B = $s.fn.bor = function (c) {
	return '8px solid ' + oO('c', c || 'z')
}
$s.mx = {
	// this lets you associate a selector with a bunch
	// of declarations at once, and you can add more, too
}
$s.mx.icon = {
	transition: 'background-color ease .2s',
	margin: '0 .5em'
}
$s.pl = {
	// these are functions that take pams
	// and ctx-bound to the dec obj
	// so its main use is to add decs directly on it
	// but one function can add multiple decs
	//(plugins)
}
$s.df = {}
$s.df.B = {}
$s.df.B.b = '1px blue border'