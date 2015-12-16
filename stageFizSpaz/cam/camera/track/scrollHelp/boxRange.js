$._range = function (x, y) {
	var w = this
	var r = $.range().A()
	r.abs(x, y)
	r.W(500) 
	r.attr({
	
		min:.2, 
		max:10, step:.2, value: 1
	
	})
	r.val(1)
	return r
}


$._range90 = function (x, y) {
	var w = this
	var r = $._range(x, y)
	return r.css('transform', 'rotate(90deg) scaleX(1.7) scaleY(3)')
}

$.fn.wValOnTk=function(fn){
	var r=this
	
	$t(function () {
	
		fn(r.val())})
	
	return r
}

w.range = function () {var w = this

	var r = $._range90(775, 500).wValOnTk(function(val){
		var zoom = val / 25 + 1
		w.ZOOM(zoom)
	})
	
	return r
}

 