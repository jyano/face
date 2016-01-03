$stc('', '../art', '_data', 'web/both', 'web', 'anim', 'front','apps','poly','stage','stage/anim', 'box')
Both = ['superUnder', 'superJ', 'superTime']
Deps = ['jq', 'jqui',  'gpc', 'bx', 'cjs', 'cjsMC', 'ko', 'bb','setup']
//



SuperWeb=['first', 'sJQ', 'sHtml', 'superInput', 'superImage', 'sCss', 'jqAnim']

Front= ['sJQUI', 'bone', 'knock','wapUI']


Graphics = [
	
	'superCan', 'create', 'clip', 'colorTextShadow',
	'shapeGraphics', 'stageObjectsComposition', 'tranEventsTicker',
	'hitTestTransformBounds', 'matrixBitmapLoader',
	'canApps', 'cjsApps', 'shapeApps', 'bmApps', 'gpcApps'
]



Fiz = ['superBox','debug', 'world','$walls','$vec','$state','$shapes','$make','$generate','$fiz','$kinem']


Apps = ['da','webApps', 'frontApps', 'canApps', 'cjsApps', 'boxApps' ]



$a.g('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(Both, Deps, SuperWeb, Front, Graphics, Apps, Fiz)	
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})


function graphics(){
	
	//Deps: 'dfDefs' 'ko', 'jqui', 'gpc', 'bx', 'cjs', 'cjsMC',
	
	Can = ['superCan']
	
	Geo = ['clip', 'clipDraw', 'geo', 'clump', 'scrape', 
	'separate', 'polyCircle', 'explode']
	
	Create = ['easel', 'shapes', 'objects',
	'graphics', 'container', 'writing', 'loader',
	'official', 'stageFilt',
	'justEaselApps', 'stageDrawApps', 'bmFillApps','tween',
	 'animLoop', 'shake', 'justEaselApps']

	Fiz = ['box', 'world', 'debug', '$walls', '$vec', '$state', '$shapes', '$make',
	'$generate', '$fiz', '$mouseWorld', '$query', 'mouseQuery', 'worldEach',
	'$collide', '$contact', '$filtering', '$handle', '$listen']


}

// <---  100 google fonts?