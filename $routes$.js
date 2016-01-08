o = {}

o.Easel = ['cjs', 'cjsMC', 'createCore',
	//dobs
	'bitmap', 'cjsText', 'container', 'domElOb', 'objects', 'stage',
	//draw
	'cjsColor', 'cjsGrad', 'cjsGx', 'cjsShape', 'curve', 'globalComp',
	//'DOTS',
	//events
	'cjsEvents', 'ticker', 'loader', 'cjsMouse',
	'cache', 'filter',
	//shapes
	'cjsCir', 'cjsRec', 'cjsPoly',
	//trans
	'reggy', 'tran', 'transform', 'center', 'bounds'
]
o.EaselApps = ['domElApps', 'eventsApps', 'layers', 'textApps',
	//bitmap
	'assSketchApp', 'bitmapApps', 'interesting',
	//draw
	'awesomeGx', 'curvApps', 'graphTest', 'radGradApps',
	'filtApps', 'filteredSprites', 'mapFilterApp', 'alphaMaskReveal',
	'loaderApps', 'cirApps', 'polApps', 'recApps',
	'reggyApp', 'setTfApp', 'stgApps', 'tfApp']
o.Anim = ['tween', 'zoe', 'sprite', 'spriteSheet', 'ssBuilder',
	'easing', 'movie', 'timeline']
o.AnimApps = [
	'tweenApps', 'growApp', 'spriteApps', 'movieApps', 'mcApps',//'flashAnimApps'
	'gunnertron', 'SSData'
]
o.Front = [
	'jqui', 'ko', 'bb',
	'bone',//'bbBook',
	'bbBreakRoll',
	'bbColl', 'bbDirt', 'bbEvt', 'bbFiltColl',
	'bbRtr', 'bbView',
	'bbLS', 'bbServer', 'widLS',
	'uiWids', 'custWids', 'effects',
	'interactions', 'widUser', 'wid',
	'knock', 'koCustom',// 'koMore',
	'koSelectMisc'
]
o.FrontApps = [

	'bbCollApps', 'bbRoutApp', 'bbViewSaps', 'appyFront', 'koLikeSap',
	'ko_JQUI', 'bbBlogSap', 'bbTwitSap', 'uiWidSaps'

]

  o.Fiz = [
	  'bx', 'box', 'boxMouse', 'contact', 'distanceJt', 
	  'edges',   'listen',   'queryAB', 'apps'
	  //, 'yip'
]
 
 

 //, 'revoluteJt', 'prismaticJt',
o.Geo = ['clump', 'edges', 'explode', 'geeDfs', 'geo', 'scrape',
	'controllers', 'accel', 'bindCo', 'buoy', 'foCo', 'grav',
	'tensor', 'weldJt', 'pulleyJt',
	'gearJt', 'lineJt', 'jointsPlus',//,'jointsMore'
	'ray', 'polyCirc']
o.GeoApps = [
	  'geoApps', 'rayApps',
	'controlApps', 'forceCoApps', 'tensorApps', 'buoyApps',
	'accellCoApps',
	//clipper
	'clumpApps', 'explodeApps', 'scrapeApps', 'worldGpc'
]
o.Spaz = [
	'w.$h', 'the_w_D', 'the_b_f', 'b_bindSprite',
	'circSprite', 'f_al', 'f_ctDob', 'fizLoader',
	'spriteBox', 'sSDirectiionFlip', 'w_sun',
	'$W', 'makeWorld', 'q_xW', 'room', 'spazMake', 'spazWalls',
	'w_cen', 'w_UI', 'spazKill', 'w_killD',
	'cir', 'h_rec', 'pol', 'rec', 'fromLocalPt',
	'getLocalPt', 'stage2world',
	'addRandBalls', 'f_bSQ', 'f_set', 'warp',
	'f_spritePush', 'f_sp_sP', 'f_bS_cSP', 'f_rmSp_rpSp',
	//easel
	//
	'color', 'gradient', 'wBitmapFillRec', 'boxesBricks',
	'devDemo', 'dot', 'anim', 'playStopSSs', 'w_pack', 'getStage',
	'stag', 'stg', 'stgScale', 'loopTuickeer', 'tikr'
]

o.SpazApps = [
	'mjointApps', 'spazApps', 'spazRandomApps',
	'magic', 'meta', 'worldLoader', 'colorApps', 'gems',
	'grafApps', 'shapesApps',
	'BINDSPR', 'boxsprite', 'easelSpazApps', 'spriteBoxApps', 'errDuds',
	'easelWorldApps', 'worldBalls', 'worldStage'
]


setPaths()
setArrs()
function setPaths() {
	$stc('', '../art',
			'web',
			'graphics',
			'graphics/apps_',
			'graphics/ctx',
			'graphics/clipper',
			'graphics/can',
			//Easel
			'easel', 'easel/apps_',
			'easel/dobs', 'easel/draw', 'easel/events', 'easel/filter', 'easel/shapes', 'easel/trans',
			//Anim
			'anim', 'anim/apps_', 'anim/tween', 'anim/sprite', 'anim/movie', 'anim/flash',
			//Front
			'front', 'front/apps_', 'front/bone', 'front/wid', 'front/nok', 'front/sync',
			//Box
			
		
			'fiz/box', 
			'fiz', 'fiz/apps_',
			 'fiz/query', 'fiz/yip',
			
			
			//Geo
			'geo', 'geo/apps_', 'geo/clipper', 'geo/control', 'geo/joints', 'geo/ray',
			//Spaz
			'spaz', 'spaz/apps_',
			'spaz/bindSprite', 'spaz/sprites', 'spaz/world',
			'spaz/makeWorld', 'spaz/bridge',
			'spazKill',
			'spaz/easel', 'spaz/easel/color', 'spaz/easel/draw', 'spaz/easel/spriteSheets', 'spaz/easel/stage', 'spaz/easel/ticker',
			//Arcade
			'arcade', 'arcade/apps_',
			'arcade/cam', 'arcade/controls',
			'arcade/movement', 'arcade/player',
			'arcade/scrolling', 'arcade/shooter', 'arcade/webMan',
			//Wappy
			'wappy', 'wappy/accounts', 'wappy/mug', 'wappy/social', 'wappy/wapUI', 'wappy/work'
	)
}
function setArrs(){
	
 
	o.Web = [  'both', 'jq', 'web', 'l']
	o.WebApps = ['waps']
	o.Graphics = ['gpc',
		 'superCan', 'gpClipper',
		'ctxDraw', 'ctxGlobComp',
		 'ctxGrad', 'ctxImg', 'ctxPattern',
		 'ctxPixels', 'ctxShad', 'ctxText', 'ctxTransform',
		'canDraw', 'canGlobComp', 'canImg',// 'canMug',
		// 'canPattern',
		'canPixels', 'canShad', 'canText', 'canTransform',
		'parallax' 
	]
	o.GraphicsApps = ['canApps', 'clipperCtx',
			'canDrawApps','canGradSuperApp','ctxDrawApps',
			'globCompApps','shadowApps',
			'canDrawingApps',
		'ctxDrawingApps','ctxLoadApps',//'ctxMug',
		'canPixApps','ctxPixelArt','canTextApps','ctxTfApps'
	]

 
	o.Arcade = ['camPre','cam','track','scroll','makeWorldTrack',
	
			'$_con','b2d_controls','power','abovePlayerGlobally','towards','walking',
			
			'levels','bike','mario','playerMath','playerWorld',
			'shooter','touchGameShooter','boxWeb','play'
	]
	o.ArcadeApps = ['_player','playerApps','spazNice','tx']

	o.Wappy = ['wappy', 'users', 'login', 'profile',
		'social', 'buds','posts','userCard',
		'home','wapNav'  //'wapInit',
		//'widUser'
	]
	o.Waps = []
	
}

$a.get('/box/:app*', function (q, p) {

	var jsArrs = _.m([//o.Data, o.Both,
		o.Web,// o.WebApps, o.Graphics, o.GraphicsApps, o.Easel, o.EaselApps,
		o.Box, o.BoxApps
		//o.Anim, o.AnimApps,
		//o.Front, o.FrontApps,
		, 
		
		o.Fiz, o.FizApps//, o.Geo, o.GeoApps, o.Spaz, o.SpazApps, o.Arcade, o.ArcadeApps, o.Wappy, o.Waps
		
		
	], function (arr) {
		return A(arr) ? arr : [arr]
		forNoReason = jsArrS = [
		
			'Both', 'Web', 'WebApps', 'Graphics', 'GraphicsApps',
			'Easel', 'EaselApps', 'Anim', 'AnimApps',
			'Front', 'FrontApps',
			'Box', 'BoxApps', 'Fiz',
			'FizApps', 'Geo', 'GeoApps',
			'Spaz', 'SpazApps',
			'Arcade', 'ArcadeApps',
			'Wappy'
		]
	})
	
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(jsArrs)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	
	p.send(html)
	
})
 


	 