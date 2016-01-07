require('./$$setup$')
require('./goo/$mong$')
require('./xap/midware/$connectMW$')
$a.use(require('./xap/midware/$$Mw$'))

require('./$dudes$')
require('./$api$')


$a.g('/', function (q, p) {p.send('it worked jason..')})
_string = function (fn) {
	var str = '';
	fn(str);
	return str
}
$= function(){}
$.scr = $.scrTag=   function (src) {
	return '<script src="/' + src + '.js"></script>'
}

Web= {
	deps: ['jq', 'ooo', 'cssData'],
	lib: ['web', 'superWeb', 'der', 'superDer', 'inputs', 'forms', 'rules', 'local', 'webApps'] 
}
Can = {
	deps:['gpc', 'dfDefs','polyData'],
	lib:['can',  'superCan', 'ctx',  'superCtx', 'clip', 'superClip', 'canClip', 'canApps']
}
 
 
$stc = function () {
	 _.e(arguments, function(arg){A(arg)? _.e(arg, $stc) : Use(arg)})
	function Use(arg){
		use(name(arg))
		use(name(arg + '/_deps'))
		use(name(arg + '/_data'))
		use(name(arg + '/_apps'))
		function name(dir) {return __dirname + '/' + dir}
		function use(dir) {$a.use($e.static(dir))}}}

$stc('../art', '', 'both',  'web',  'can', 'clip', 'wid', 'box')



$js = function () { 
	//if(A(arguments[0])){return $js.apply(null, g.f)}
	var str = ''
	_.e(arguments, function (js) {
		if(A(js)){
			_.e(js, function(arg){
				str += $js(arg)
			})}
		else {
			str += $.scrTag(js)
		}
	})
	
	return str
}


//$a.use($e.static(__dirName + '/both'))

$a.g('/both/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ' - '
	html += $js(['us', 'string', 'moment', 'both', 'superBoth','bothApps'], Web.deps, Web.lib, Can.deps, Can.lib, 'dudesLogin')
	html += '<script> $(function(){$l("app:  ' + app + '"); ' + app + '()})</script>'
	$l('here is the html..\n\n' + html)
	p.send(html)
 
})

/*

$a.g('/w/:app', function (q, p) {app = q.params.app.toUpperCase()
	
	html = ' - '
	html+= $js(
			Soma.deps,
			Soma.both.deps, Soma.both.lib, Soma.both.apps,
			Soma.web.deps, Soma.web.lib, Soma.web.apps
	)
			
	html += '<script> $(function(){$l("app:  ' + app + '"); ' + app + '()})</script>'
	$l('here is the html..\n\n' + html)
	p.send(html)
})*/
 
require('./$servers$')
//$a.g('/render/:page', function (q, p) {p.render(q.params.page)})
//////////////////////////////////////////////////////
//before $libs$:
/*
 $a.g('/www/:a?/:p?', function (q, p) {
 $l("rendering basic jode.. " + Math.random())
 p.render('basic', {
 app: q.params.a,
 pam: q.params.p
 })
 })

 //require('./_staticServer')(__dirname)

 */