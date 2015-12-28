Bb.tr = Bb.trV = Bb.trVw = function (ob) {
	ob = _.x(ob || {}, {tagName: 'tr'})
	var view = Bb.V.x(ob)
	return view
}
Bb.ul = $.uV = $.ulV = function (ob) {
	ob = ob || {};
	ob.tagName = 'ul';
	return $V(ob)
} // make a bb view with t:ul
$.fn.$V = function (ob) {
	ob = ob || {};
	ob.el = this;
	return $V(ob)
}//$.fn.V
$.fn.C$ = function () {
	return this.C($r())
}