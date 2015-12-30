$stc('', '../art', '_data', 'superWeb/both', 'superWeb')
$stc(
		'wid',
		'bone','superBone', 'duperBone','boneLoop',
		'knock', 'knockLoop', 'knockCust',
		 'loop', 'sync', 'sappy','webSite'
		   
)

Both = ['superUnder', 'superJ', 'superTime']

SuperWeb=[
		
		
	'jq', 'first', 'second','cssData', 'superJQ', 'superAnim', 'sty', 'rules' ,
	'flexy',  'media' ,
	 'superHTML', 'superInput',
	  'superImage', 'htmlPlus',
	  
	 'checkbox',
	  
	'$mock'
]

Bone= [ 

	'bb', 'bonePre',
	'bone',
	
	'models','collections','views','router',
	'routerApps', 'bbPerfect', 'bbRecs',
	'bbApps', 'bbTweet', 'local', 'superTemplate',
 'boneQuery', 'course',//'bbBook',
 'bbAdder', 'blogRoll', 'bbSort', 'bbLoop', 
 'bbTweet', 'dirt', 'tut','breakRoll','bbLS','local'
  
,
 
 
	 'ko', 'knock00', 'knock0', 'knock',    'koEls',
	 'koApps','eachEls','avail',
	 
	//  'customizing',
	 'koAppsBasic', 'koAppsFancy', 'like',
	 
	 //'scrp',
	// 'liveExamples',
	 'list','workingEachApps',
	  'documentRouter'
 
,
		
	'jqui',   'checkbox',
	  'wid', 'calc', 'uiApps', 'uiAppsMore',
	'widFilt', 
	 'widSuperDlg','widLS','cheese','countdownTimer','widCaption',
	 
	 'front','works','err'
]

 
$a.g('/box/:app*', function (q, p) {
	
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(Both, SuperWeb, Bone)	// Geo, Can, Stage, Fiz

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