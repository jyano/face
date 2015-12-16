function more() {
	_.extend(Soma, {
		cre: {
			deps: ['cjs', 'easelData'],
			dirs: ['cre', '_/_cre', '_/creGames'],
			lib: ['cre', 'superCret', 'dob', 'superDob', 'easelDraw', 'easelProtos', 'easelText', 'easelMatrix', 'easelFilters', 'graphicsDraw'],
			apps: ['loaderCreateApps', 'loaderCanApps', 'graphicsDrawApps', 'easelPolyApps', 'easelGradApps', 'easelDrawApps', 'easelColorApps', 'createApps',
				'bitmapFillApps', 'createExamples']
		},
		creAnim: {
			deps: ['cjsMC', 'gunnerMC', 'gunnertron', 'SSData'],
			dirs: ['cre/creAnim', '_/_/animData', '_/_creAnim'],
			lib: ['movie', 'spriteSheet', 'tween'],
			apps: [
				'animApps', 'flashAnimApps', 'mcApps', 'movieApps', 'spriteApps', 'SSApps', 'tweenApps'
			]
		},
		box: {
			deps: [],
			dirs: ['box', 'box/vecs', 'box/klass', 'box/query', 'boxBodies', 'boxShapes', 'boxWorld'],
			lib: [
				'bx', 'boxBasics', 'sep', 'preBox', 'worldCreation', 'basicBods', 'boxDebug', 'boxBool', 'boxMouse', 'boxShapes',
				'polyShape', 'vector', 'worldQuery', 'boxBodDef', 'boxBods', 'boxFxts', 'boxKlass', 'ray', 'geo', 'geoDif', 'geoMeet', 'bush', 'box'
			],
			apps: []
		},
		bone: {
			deps: ['bb', 'bbAppsData'],
			dirs: ['bone', '_/_bone'],
			lib: ['bone', 'bbRouter', 'bbTweet', 'bbViews', 'qT_superTemplate', 'bbLocalStorage', 'bbImgGal', 'bbDirtpage', 'bbBlogRoll', 'bbBookView',
				'bbBreakfastRoll', 'bbColls', 'bbDirectoryAdmin', 'superBone', 'smitha'],
			apps: ['bbAppsBasic', 'bbApps', 'bbAppsMore', 'bbCollApps', 'bbCollTemplateApps', 'bbRouterApps', 'bbSyncApps', 'bbViewTemplateApps'],
		},
		dudes: {
			deps: [],
			dirs: ['ket'],
			lib: [],
			apps: []
		}
	})
	$stc([
		Soma.cre.dirs, Soma.creAnim.dirs, Soma.bone.dirs, Soma.box.dirs, Soma.dudes.dirs
	])
	$a.g('/z/:app', function (q, p) {
		app = q.params.app.toUpperCase();
		var html = $js(
				Soma.deps,
				Soma.web.deps, Soma.web.lib, Soma.web.apps,
				Soma.cre.deps, Soma.cre.lib, Soma.cre.apps,
				Soma.creAnim.deps, Soma.creAnim.lib, Soma.creAnim.apps,
				Soma.bone.deps, Soma.bone.lib, Soma.bone.apps
		)
		html += '<script> $(function(){$l("app:  ' + app + '"); ' + app + '()})</script>'
		$l('here is the html..\n\n' + html)
		p.send(html)
	})
	$a.g('/u/:app', function (q, p) {
		$l('z')
		app = q.params.app.toUpperCase();
		$l('app: ' + app)
		log = '<script>console.log("' + msg + '");</script>'
		var html = log + $js(
						FrontDeps,
						Libs.SuperWeb,
						Libs.Cret,
						Libs.Bone,
						//	Libs.Box,
						Apps.Web, Apps.Cret, Apps.CretAnim, Apps.Bone
				)
		html += '<script> $(LOGIN)  </script>'
		//$l('here is the html..\n\n'+ html)
		$l('login? -> ' + q.session.un)
		p.send(html)
	})
	$a.g('/as', function (q, p) {
		log = '<script>console.log("' + msg + '");</script>'
		var html = log + $js(
						FrontDeps,
						Libs.SuperWeb,
						Libs.Cret,
						Libs.Bone,
						//	Libs.Box,
						Apps.Web, Apps.Cret, Apps.CretAnim, Apps.Bone
				)
		html += '<script> $(AS)  </script>'
		//$l('here is the html..\n\n'+ html)
		$l('login? -> ' + q.session.un)
		p.send(html)
	})
}
function past() {
	$a.get('/', function (q, p) {
		p.send(' / / /// ')
	})
	$a.g('/js', function (q, p) {
		p.send('<h1>hi</h1>bye' + $js('us'))
	})
	$a.g('/j', function (q, p) {
		scripts = $jsA(both)
		p.send('<h1>hi</h1>bye' + scripts)
	})
	$a.g('/w', function (q, p) {
		p.send('<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty, 'init'))
	})
	$a.g('/a/:app', function (q, p) {
		app = q.params.app.toUpperCase()
		$l('app: ' + app)
		html = '<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty)
		html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
		p.send(html)
	})
	$a.g('/g/:app', function (q, p) {
		app = q.params.app.toUpperCase()
		$l('app: ' + app)
		html = '<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty, graphics)
		html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
		p.send(html)
	})
	$a.g('/b/:app', function (q, p) {
		app = q.params.app.toUpperCase()
		$l('app: ' + app)
		html = '-' + $Js(superWeb)
		html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
		p.send(html)
	})
}
function moreOld() {
	srv = function () {
		$a.ls($a.port(), function () {
			$l(lA = 'listening at ... ' + srv.port) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)
			host = srv.address()
			port = srv.a().port
			$l('listening still at ' + host + ' ' + port)
		})
	}
	srv.a = function () {
		var a = this.address()
		a.p = a.port
		a.a = a.address
		return a
	}
	function moreButUnneeded() {
	}
	
	function moreButNotSureIfFromExpress3() {
		$w = middleware = require('./middleware')
		$a.use(middleware)
		$a.get('/render/:page', function (req, res, next) {
			res.render(req.params.page)
		})
		require('../routes/routes')()
		require('../routes/socialRoutes')()
		require('../routes/bookRoutes')()
		$a.use($a.router)
		//
		//where i can publically, statically fetch items from
		_.e(fileDirs, function (dir) {
			$a.use(
					$e.static(
							$p.join(__dirname, dir)
					))
		})
		httpServer = http.createServer($a)
		httpServer.listen(80, function () {
			$l('BOOOOOOOOX  on port 8080')
		})
		io = socketIO.listen(httpServer)
		io.set('log level', 1)
		require('./sockets')(
				io,
				new sessionSocketIO(io, mongoStore, cookieParser)
		)
		io = socketIO.listen(httpServer)
		io.set('log level', 1)
		require('./sockets')(
				io,
				new sessionSocketIO(io, mongoStore, cookieParser)
		)
	}

// san leanro med record system: sorian from cerner
//$a.uCP().g('/', function(q){$l("cks: ", q.cks)})
	notGreat = function () {
		$a.r = $a.rt = $a.rtr = function () {
			var $a = this, g = G(arguments),
					o = {pt: g.f, rts: g.s},
					r = $Rtr()
			_.e(o.rts || {}, function (cb, pt) {
				r.g(parPt(pt), cb)
			})
			$a.u(parPt(p.pt), r)
			return $a
		}
	}
// useSomethingPath  $a.uCP().g('/', function(q){$l("cks: ", q.cks)})
//  $a.ls(port,[hostN],[backlog],[cb])  Binds/listens for cns  on  spec  host/port ~ $h.s.ls()
//    conven met  ~ fn: return http.createServer($a).listen.apply(srv, g) // hSrv = ht.Srv($a, 80)
//$a.s('port', process.env.PORT || 3000)
// $a is req-handling fn ,designed to be passed to $h srv
	function $Rts(rtrs) {	// this is a cool function
// it lets me design a rtr object and then pass it to it
// {hello:fn, fun:fn}
// it calls $a.rt ... ?
		_.e(rtrs, function (rtr, rtrNm) {
			$a.rt(rtrNm, rtr.mw, rtr.rts)
		})
	}
}
srv = function () {
	var srv
	lA = 'listening at ... '
	$a.ls(
			$a.port(), function () {
				$l(lA + srv.a().p) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)
				host = srv.a().a
				port = srv.a().p
				$l('listening still at ' + host + ' ' + port)
			})
}
srv.a = function () {
	var a = this.address()
	a.p = a.port
	a.a = a.address
	return a
}
