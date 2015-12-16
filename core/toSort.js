$P = function () {
	bb = Backbone
	md = bb.Model.prototype
	vw = bb.View.prototype
	rt = bb.Router.prototype
	cl = bb.Collection.prototype
}
EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
toHandy = function () {
	$.pre = function () {
		return $("<pre>").A()
	}
}
function scrp() {
	$.scrp = function (i, t) {
		var scr = $("<script type='text/html'>")
		scr.id(i)
		if (t) {
			scr.A(t)
		}
		scr.A()
		return scr
	}
	script = scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
	$.scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
}
format = $.fm = $.format = function () {
	$l('in fm')
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
};