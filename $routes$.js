 
	Box = [
		'bx','box0','boxBool',
	
		'box', 'vec', 'world', 'worldBod', 'worldFix', 'debug',
		'bodies', 'bodyDefs', 'fixtures', 'fixtureDefs',
		'boxCir', 'boxPol', 'boxRec', 'edges',
		'bodFix', 'forces'
	
	
	
	]




 


$stc('', '../art',
		'web/both', 'web',
		 'web/css', 'web/dom', 'web/html', 'web/js',
		'wid', 'nok', 'bone',
		'graphics', 'graphics/can','graphics/gpc', 'graphics/ctx',
		'easel',
		'easel/bitmap', 'easel/dob', 'easel/dobs', 'easel/draw', 'easel/events',
		'easel/filter', 'easel/movieClip', 'easel/shapes', 'easel/sprite', 
		'mashUp','sync',
		'wappy','wappy/work','muggy',
		'box',
		'box/bods', 'box/collide', 'box/fixts',
		'box/geo', 'box/shapes', 'box/world',
		'worldQuery','collide','joints','control','yip','arcade','games','geo'
)

web()
 

jsArrs= [
	Both, Web,
	
	Box //, Graphics,Stage, Front, Wap
]
$a.get('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(jsArrs)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
function web(){
	Both = ['superUnder', 'superJ', 'superTime']
	Web = ['jq',
		'webColor', 'webCss', 'webFont', 'web',
		'rules', 'media', 'flex', 'styles',
		'sJQ', 'webEvents', 'attributes', 'qAnim', 'traverse',
		'html', 'inputs', 'lists', 'submit',
		'root', 'nest', 'll', 'appy', 'localStorage'
	]
}
function mods() {
	Graphics = [
		'gpc',   'pureDa',
		'jqGraphics', 'gpClipper', 'superCtx', 'superCan',
		'ctxDraw', 'ctxImg', 'ctxGlobComp', 'ctxGrad', 'ctxMug', 'ctxPixels', 'ctxShad',
		'ctxText', 'ctxTransform',
		'canDraw', 'canImg', 'canGlobComp', 'canGrad', 'canMug', 'canPixels', 'canShad',
		'canText', 'canTransform',
		'gpcCtx',
		'parallax'
	]
	Front = [
		'mock',
		'jqui', 'uiWids', 'custWids', 'widLS', 'effects', 'interactions', 'dog', 'wid', 'widLS',
		'bb', 'bone', 'bbColl', 'bbDirt', 'bbEvt', 'bbFiltColl', 'bbRtr', 'bbView', 'bbLS', 'bbServer', 'bbServerMore',
		'ko', 'knock', 'koCustom', 'koMore'
	]
	Stage = ['cjs', 'cjsMC',
		'createCore', 'cjsEvents', 'stage', 'ticker', 'loader', 'tran',
		'objects', 'matrix', 'cjsPoly',
		'cjsGx', 'cjsShape', 'curve', 'domElOb',
		'reggy', 'transform', 'cjsText', 'container',
		'cjsCir', 'cjsRec', 'official', 'cache', 'filter',
		'alphaMaskFilter', 'alphaMaskFilter', 'blurFilter', 'cache',
		'colorFilter', 'colorMatrixFilter', 'bitmap', 'cjsMouse',
		'tween', 'easing', 'sprite', 'ssBuilder', 'zoe', 'SSData',
		'movie', 'timeline', 'gunnertron'
	]
	Wap = ['wappy', 'users', 'login', 'social', 'widUser']
}
 