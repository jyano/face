$stc('', '../art', '_data', 'superWeb/both', 'superWeb', 'anim',
 'front','apps','poly','stage','box')
Both = ['superUnder', 'superJ', 'superTime']
SuperWeb=['jq', 'jqui', 'first', 'gpc', 'bx', 'superCan',
'superBox', 'cjs', 'cjsMC', 'create',
	'clip', 'ko', 'bb', 'bone','front', 
	'da', 'superInput', 'superImage']
Front= [ //'da',

	'apps' ,
	
	'colorTextShadow',
	'shapeGraphics','stageObjectsComposition','tranEventsTicker',
	'hitTestTransformBounds','matrixBitmapLoader',
	'canApps','cjsApps','shapeApps','bmApps','gpcApps'
]


$a.g('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(Both, SuperWeb, Front)	// Geo, Can, Stage, Fiz
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