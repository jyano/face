$stc('', '../art', '_data',
		'web/both', 'web', 'web/css', 'web/dom','web/html',
		'front','graphics',
	
		'easel','easel/filter','filter', 'stage', 'anim', 'easel/anim', 
		
		'wappy',
		'box'
)

Deps = ['superUnder', 'superJ', 'superTime', 'jq', 'jqui',  'gpc', 'bx', 'cjs', 'cjsMC', 'ko', 'bb','setup']


Web= ['web', 'sJQ', 'webEvents', 'attributes','qAnim','traverse','value',
	 'media', 'rules', 'style', 'html', 'inputs','lists','submit','root', 'flex','ll']
	 
Front= ['sJQUI', 'bone', 'knock','wapUI']

Graphics = ['superCan', 'gpcApps']
Stage = [
	'createCore', 'cjsEvents','stage','ticker','loader','tran',
	 'objects','matrix','cjsXY','cjsWH','cjsPoly',
	'cjsGx','cjsShape',	'curve','domElOb', 'bitmap','cjsColor',
	 'cjsApps', 'shapeApps','reggy','transform','cjsText',
	 'dragStage','cjsCir','cjsRec','official','cache','filter',
	 'alphaMaskFilter','alphaMaskFilter','blurFilter','cache','colorFilter','colorMatrixFilter'
]
Fiz = ['superBox' ,'clip','debug', 'world','$walls','$vec','$state','$shapes',
	'$make','$generate','$fiz','$kinem']
Apps = ['da',   'cjsApps', 'boxApps','bbApps','koApps' ]

Anim=['tween','easing','sprite','ssBuilder','zoe', 'SSData','movie','timeline', 'gunnertron' ]


$a.g('/box/:app*', function (q, p) {

	app = q.params.app.toUpperCase()
	html = ''//' - '

	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js([Deps,  Web, Front, Graphics, Fiz,Apps, Stage,Anim])	
	
	
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
 