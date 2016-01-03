$stc('', '../art', '_data',
		'web/both', 'web', 'web/css', 'web/dom','web/html',
		'front','graphics',
		'stage','stage/anim', 'wappy',
		'box'
)

Deps = ['superUnder', 'superJ', 'superTime', 'jq', 'jqui',  'gpc', 'bx', 'cjs', 'cjsMC', 'ko', 'bb','setup']


Web= ['web', 'sJQ', 'webEvents', 'attributes','qAnim','traverse','value',
	 'media', 'rules', 'style', 'html', 'inputs','lists','submit','root', 'flex','ll']
	 
Front= ['sJQUI', 'bone', 'knock','wapUI']

Graphics = [
	'superCan', 'create', 
	'shapeGraphics', 'stageObjectsComposition', 'tranEventsTicker',
	'hitTestTransformBounds', 
	 'cjsApps', 'shapeApps',   'gpcApps'
]
Fiz = ['superBox' ,'clip','debug', 'world','$walls','$vec','$state','$shapes',
	'$make','$generate','$fiz','$kinem']
Apps = ['da', 'frontApps',
	'canApps', 'cjsApps', 'boxApps','bbApps','koApps' ]

$a.g('/box/:app*', function (q, p) {

	app = q.params.app.toUpperCase()
	html = ''//' - '

	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(
			Deps,  Web, Front, Graphics, Fiz,Apps
	)	
	
	
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
 