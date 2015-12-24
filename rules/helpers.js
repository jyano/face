// HELPERS ARE FUNCTIONS THAT RETURN VALUES FOR CSS PROPERTIES

$s.helpers = $s.fn = {
	// (value-)helper functions:
	// lets you write/call functions that
	//produce a complicated value to a
	// particular property,
	// so you don't have to write out
	// the full location of the function
	// -helps with namespacing
}

$s.helpers.B = $s.fn.bor = function (c) {

	return  '8px solid ' + oO('c', c || 'z')
}
FL2 = BASIS = function () {
	str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
	' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
	// http://jsfiddle.net/jakub_g/s5jAB/
	// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
	$s({
		_ch: {c: 'w', P: 10, M: 10},
		_ct: {
			C: 'y', P: 10,
			d: '$'
		},
		_ch1: {
			C: "u",
			fl: '8 1 600px'
		},// If there's more space, the first one grows 5x faster than the second.
		_ch2: {
			C: 'g',
			dp: 'fl',
			fl: '1 2 400px',
			wr: 'w'
		}, // If there's less space, the second one shrinks 3x faster than the first.
		d: {Bor: ['bor', 'b']}
	})
	$.dK('ct').A(
			$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
			div = $.dK('ch ch2').A('Two')
	)
	_.t(20, function () {
		$.d($r(), 40, 40).K('ch1').a2(div)
	})
	$s()
	/*
	
	 div { border:8px solid Blue; }
	 .ct { display:flex; padding:10px; background-color:Yellow; }
	 .ch { padding:10px; margin:10px; color:White; }
	 .ch1 { flex:8 1 600px; background-color:Purple; }
	 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
	
	
	
	 */
}
$s.helpers.bpLarge = function (cont) {
	return ['@media only screen and (max-width: 400px)', cont]
}
$s.helpers.bpMid = function (cont) {
	return ['@media only screen and (max-width: 600px)', cont
	]
}
$s.helpers.bpSmall = function (cont) {
	return [
		'@media only screen and (max-width: 800px)', cont
	]
}

$helperValue = function (v, k) {
	
	if(F($s.helpers[_.f(v)])){
		return $s.helpers[_.f(v)].apply(null, _.r(v))
	}
		
	return $default(v, k)
}
 