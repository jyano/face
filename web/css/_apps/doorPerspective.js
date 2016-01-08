DOR=DOOR = CSS_TRANSFORM_PERSPECTIVE = function () {
	$s({
	
		bd:{C:'o'},
		
		$div1: {
			position: 'relative',
			 h: 150, w: 150, 
			 M: 50, P: 10,
			  bor: '1px solid black',
			   perspective: 150
		},
		
		$div2: {
			P: 50, position: 'absolute',
			 bor: '1px solid black',
			  C: 'r', transform: 'rotateX(45deg)'
		}
	})
	
	$.dI('div1')
	
	$.dI('div2').A('HELLO')
}
//http://jsfiddle.net/dbpas/3Z4bS/