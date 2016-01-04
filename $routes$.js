$stc('', '../art', '_data',
		'web/both', 'web', 'web/css', 'web/dom','web/html',
		'front','graphics',
	
		'easel','easel/filter','filter',
		'easel/bitmap','easel/dob','easel/dobs','easel/draw','easel/events','easel/movieClip',
		'easel/shapes','easel/sprite',
		  'stage', 'anim', 'easel/anim', 
		
		'wappy',
		'box','box/bods','box/fixts','box/shapes','box/world'
)

Deps = ['superUnder', 'superJ', 'superTime', 'jq', 'jqui',  'gpc', 'bx', 'cjs', 'cjsMC', 'ko', 'bb','pureDa']


Web= ['web', 'sJQ', 'webEvents', 'attributes','qAnim','traverse','value',
	 'media', 'rules', 'style', 'html', 'inputs','lists','submit','root', 'flex','ll']
	 
Front= ['sJQUI', 'bone', 'knock','wapUI']

Graphics = ['superCan', 'gpcApps']
Stage = [
	'createCore', 'cjsEvents','stage','ticker','loader','tran',
	 'objects','matrix', 'cjsPoly',
	'cjsGx','cjsShape',	'curve','domElOb', 
	  'reggy','transform','cjsText',
 'cjsCir','cjsRec','official','cache','filter',
	 'alphaMaskFilter','alphaMaskFilter','blurFilter','cache','colorFilter','colorMatrixFilter', 'bitmap'
]
Box = ['box' ,  'vec','world', 'worldBod','worldFix', 'debug', 


'bodies','bodyDefs','fixtures','fixtureDefs',

	'boxCir','boxPol','boxRec','edges',
	
	
	'bodFix','forces'
	
]
	
	
	
Apps = [  'bbApps','koApps' ]

Anim=['tween','easing','sprite','ssBuilder','zoe', 'SSData','movie','timeline', 'gunnertron' ]


$a.g('/box/:app*', function (q, p) {

	app = q.params.app.toUpperCase()
	html = ''//' - '

	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js([Deps,  Web, Front, Graphics, Box,Apps, Stage,Anim])	
	
	
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
 