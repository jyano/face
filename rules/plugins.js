// PLUGINS ARE FUNCTIONS THAT EXTEND THE CSS OBJECT

$s.plugins =  {
	// these are functions that take pams
	// and ctx-bound to the dec obj
	// so its main use is to add decs directly on it
	// but one function can add multiple decs
	//(plugins)
}
/*

 example:
 {	
 d: {C:'r'},
  plugins : {	doSomething : ['red', 6]	}
 }

 $s.doSomething = function(color, num){
 this.somethingElse = color + num
 }

 */
$plugin = function (decs) {
	if (decs.plugins) {
		_.e(decs.plugins, function (pams, pluginName) {
			var plugin = $s.plugins[pluginName]
			if (F(plugin)) {
				A(pams) ? plugin.apply(decs, pams) :
						_.b(plugin, decs)(pams)
			}
		})
	}
}
