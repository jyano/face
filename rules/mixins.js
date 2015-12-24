// MIXINS ARE OBJECTS THAT EXTEND THE CSS OBJECT

$s.mixins = $s.mx = {
	// this lets you associate a selector with a bunch
	// of declarations at once, and you can add more, too
}
$s.mixins.icon = {
	transition: 'background-color ease .2s',
	margin: '0 .5em'
}
$mixin = function (decs, rules) {
	_.e(decs.mixins || {}, function(mixin){
		 	_.x(decs, rules && rules[mixin]? 
				    rules[mixin] : ($s.mixins[mixin] || {}))})
	
	
	
	//tries to extend from one of its own first
		//then goes to global ($S.mx)
	
}
	