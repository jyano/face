$stc('', '../art',
		'web/both', 'web', 'web/css', 'web/dom', 'web/html', 'web/js','login','work',
		'front',
		'graphics', 'graphics/can','graphics/gpc', 'graphics/ctx',
		'easel', 'easel/filter', 
		'easel/bitmap', 'easel/dob', 'easel/dobs', 'easel/draw', 'easel/events', 'easel/movieClip',
		'easel/shapes', 'easel/sprite',
		'wappy','muggy',
		'box', 'box/bods', 'box/fixts', 'box/shapes', 'box/world',
		'box/collide', 'box/geo')


Deps = ['superUnder', 'superJ', 'superTime', 'jq', 'jqui', 'gpc', 'bx', 'cjs', 
	'cjsMC', 'ko', 'bb', 'pureDa']


Web = [
	'webColor', 'webCss', 'webFont', 'web', 
	'rules',  'media', 'flex', 'styles',
	'sJQ', 'webEvents', 
	'attributes', 
	'qAnim',
	'traverse',
	'html', 'inputs', 'lists', 'submit',
	'root', 'nest', 
	'll',
	'appy'
]

Graphics = [
	'jqGraphics', 'gpClipper', 'superCtx', 'superCan',
	'ctxDraw', 'ctxImg', 'ctxGlobComp', 'ctxGrad', 'ctxMug','ctxPixels', 'ctxShad', 
	'ctxText', 'ctxTransform',
	'canDraw', 'canImg', 'canGlobComp', 'canGrad','canMug', 'canPixels','canShad', 
	'canText', 'canTransform',
	'parallax']

Wid = ['mock', 'sJQUI','widgets','widLS']
Bone = [ 'bone', 'bbRtr', 'bbColl', 'bbView','bbEvt']
Nok = ['knock','koCustBind','koCustComps','koMenuSeats']

Stage = [
	'createCore', 'cjsEvents', 'stage', 'ticker', 'loader', 'tran',
	'objects', 'matrix', 'cjsPoly',
	'cjsGx', 'cjsShape', 'curve', 'domElOb',
	'reggy', 'transform', 'cjsText', 'container',
	'cjsCir', 'cjsRec', 'official', 'cache', 'filter',
	'alphaMaskFilter', 'alphaMaskFilter', 'blurFilter', 'cache',
	'colorFilter', 'colorMatrixFilter', 'bitmap', 'cjsMouse']

Anim = ['tween', 'easing', 'sprite', 'ssBuilder', 'zoe', 'SSData',
	'movie', 'timeline', 'gunnertron']

Wap = ['wappy', 'users', 'login', 'social', 'koApps']

Box = ['box', 'vec', 'world', 'worldBod', 'worldFix', 'debug',
	'bodies', 'bodyDefs', 'fixtures', 'fixtureDefs',
	'boxCir', 'boxPol', 'boxRec', 'edges',
	'bodFix', 'forces'
]

jsArrs= [
	Deps, Web,
	Graphics,
	Stage, Anim, Wid,
	Bone, Nok,Wap,
	Box
]

$a.g('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(jsArrs)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
 