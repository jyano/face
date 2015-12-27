$stc('', '../art', '_data', 'superWeb/both', 'superWeb', 
		'front', 'bone', 'font/bone', 'front/jet', 'front/knock', 'knock','eachEls',
		'knock/bindings', 'knock/components', 'knock/custFunctions',
		 'knock/plugins', 'knock/viewModels')

Both = ['superUnder', 'superJ', 'superTime']

SuperWeb=['jq', 'first', 'second','cssData',
	'superJQ', 'superAnim', 'sty', 'rules' , 'flex',  'media' ,
	 'superHTML', 'superInput', 'superImage', 'htmlPlus']

Front= [  'bb', 'bone', 'bbPerfect',  
 'bbTweet','local', 'jqui', 'jet',
    'ko', 'knock0', 'knock', 'koInput', 'koEach', 'koEls',
    'koApps',
	'bindings', 'components', 'extenders', 'functions', 'plugins',
	
	'koAppsBasic', 'koAppsFancy','like',
	'superTemplate',  
]
    
$a.g('/box/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(Both,  SuperWeb, Front)	// Geo, Can, Stage, Fiz
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