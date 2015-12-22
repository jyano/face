$stc('', '../art', '_data',
		//front
		'front', 'front/both', 'front/superWeb', 'front/can',
		'front/bone', 'front/nok', 'front/UI', 'front/wid',
		//geo
		'geo',
		//stage
		'stage', 'superEasel', 'stage/anim', 'stage/loader',
		//fiz
		'fiz', 'fiz/collide', 'fiz/query', 'fiz/joints', 'fiz/control',
		'spaz', 'spaz/cam', 'spaz/arcade',
		//wappy
		'wappy'
)
Deps = [
	//dep libs
	'both', 'jq', 'bb', 'ko', 'jqui', 'gpc', 'bx', 'cjs', 'cjsMC',
	//data
	'ooo', 'cssData', 'dfDefs' 
]

Front = [
	'manip', 'sty', 'll', 'rules', 'local',
	'can', 'ctx',
 
	'webApps', 'canApps' ,'entities'
]


Nok = ['applyBindings', 'elBind', 'boundEls', 'koApps', 'koIPApps']
Jet = ['jquiCore', 'wid', 'jquiApps', 'calc', 'multi', 'progBar', 'capt', 'sDialog', 'widFilt']
Bone = [
	'bone', 'bbViews', 'bbRouter', 'bbLocalStorage', 'bbAppsData', 'bbColls', 'bbWasPerfect', 'bbAvail',
	'bbApps', 'bbAppsBasic', 'bbAppsCool', 'bbAppsMore'
]
Geo = ['clip', 'clipDraw','geo', 'clump', 'scrape', 'separate', 'polyCircle', 'explode']
Stage = [
	'easel', 'dob', 'stageDraw', 'solve', 'iso',
	'stageApps', 'stageDrawApps', 'stageWorks', 'official',
	'tween', 'animLoop', 'shake', 'justEaselApps'
]
Easel = ['easel','stage', 'tick','shape','recs','polygons','objects','graphics','container','containerShapes','colors','cirs','bitmaps', 'writing', 'justEaselApps','stageDrawApps','graphicsTest']

Fiz = [  'box', 'world', 'debug', '$walls', '$vec', '$state', '$shapes','$make',
	'$generate', '$fiz', '$mouseWorld', '$query', 'mouseQuery', 'worldEach',
	'$collide', '$contact', '$filtering', '$handle','$listen'

 
	]

$a.g('/box/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ' - '
	html += $js(Deps, Front, Nok, Jet, Bone, Easel, Fiz, Geo)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})