$stc('',
		'../art',
		//web (core)
		'core', 'core/superWeb', 'core/clip', 'core/can',
		'box',
		//fiz
		'fiz', 'fiz/hit', 'fiz/joins', 'fiz/steps',
		//stage
		'stage',
		'anim',
		'stageFiz', 'stageFiz/stageFizGames',
		'stageFizSpaz',
		//front
		  'bone', 'nok', 'UI',
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

Nok = ['ko', 'applyBindings', 'elBind', 'boundEls', 'koApps', 'koIPApps']
Jet = ['jqui', 'jquiCore',
	'wid', 'jquiApps', 'calc', 'multi', 'progBar', 'capt', 'sDialog', 'widFilt']
Bone = [
	'bb', 'bone', 'bbViews', 'bbRouter', 'bbLocalStorage', 'bbAppsData', 'bbColls', 'bbWasPerfect', 'bbAvail',
	'bbApps', 'bbAppsBasic', 'bbAppsCool', 'bbAppsMore'
]
Stage = ['toSort',
	'cjs', 'stage', 'dob', 'stageDraw', 'solve', 'iso',
	'stageApps', 'stageDrawApps', 'stageWorks', 'official'
]

Box = ['bx', 'box0', 'box', 'boxCx', 'filtering','listen', 'asBox', 'asCir', 'asPol', 'superBox', 'duperBox', 'boxApps']
 
 

$a.g('/box/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ' - '
	html += $js('both', Web.deps, Web.lib,  Stage,Sprite, Box, Nok, Jet, Bone
	)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
Fiz = ['world', 'debug', 'collide', 'handling', 'filtering', 'defs', 'entities', 'fizApps', 'boxCxApps']
Sprite = [
	'cjsMC', 'tween', 'animLoop', 'shake'
]