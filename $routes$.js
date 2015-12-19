$stc('',
		'../art',
		//web (core)
		'core', 'core/superWeb', 'core/clip', 'core/can',
		'box',
		//fiz
		'fiz', 'fiz/hit', 'fiz/joins', 'fiz/steps',
		//stage
		'stage',
		'sprite',
		'stageFiz', 'stageFiz/stageFizGames',
		'stageFizSpaz',
		//front
		'front', 'front/bone',
		'front/nok',
		'front/jetUI',
		'jetUI',
		'wid',
		//wappy
		'wappy', 'login', 'muggy')
Web = {
	deps: ['jq', 'ooo', 'cssData', 'gpc', 'dfDefs', 'polyData'],
	lib: [
		'superWeb', 'der', 'rules', 'local',
		'can', 'ctx',
		'clip',
		'webApps', 'canApps', 'canClip'
	]
}
Box = ['bx', 'box', 'debug', 'boxMath', 'defs', 'entities', 'world', 'makeWorld', 'worldCreate', 'fixture', 'body',
	'collide', 'handling', 'filtering']
Stage = ['toSort',
	'cjs', 'stage', 'dob', 'stageDraw', 'solve', 'iso',
	'stageApps', 'stageDrawApps', 'stageWorks', 'official'
]
Nok = ['ko','nok']// 'koCore', 'koApps', 'knock']
Jet = ['jqui', 'jquiCore', 'cbw','jqIPApps','navApps',
 'wid', 'jquiApps','calc','multi','progBar','slides','capt','sDialog','widFilt']

Bone = [
		'bb', 'bone', 'bbViews', 'bbRouter','bbLocalStorage', 'bbAppsData', 'bbColls', 'bbWasPerfect' , 'bbAvail',
		'bbApps', 'bbAppsBasic', 'bbAppsCool', 'bbAppsMore'
]


Sprite = [
	'cjsMC','tween', 'animLoop', 'shake'
]
$a.g('/box/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ' - '
	html += $js('both', Web.deps, Web.lib,  Stage,Sprite, Box, Nok, Jet, Bone
	)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
