 
$.scroll = function (a) {
	return $(window).scroll(a || function () {
		$('body').C('*')
	})
}
$.fn.hv = $.fn.hover
$.tap = function (func) {
	this('body').on('keydown mousedown', func);
	return this
}
  
$.fn.fc = $.fn.focus 