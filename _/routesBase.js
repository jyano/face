Y = {}
Y.directTo = Y.load = load = function (a) {
	window.location = '/wap/' + a
}
Y.run = function (app) {
	app = app.toUpperCase()
	app = Y[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}
Y.render = function (page) {
	page = Y[page]
	if (page) {
		page();
		return true
	}
	return false
}
$(appInit)
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
require('./defaultMug')
require('./dirs')
$a.u($mw = require('./mw'))
$a.g('/render/:page', function (q, p, nx) {
	p.render(
			q.params.page)
})
$a.get('/play/:app/:pam?', function (req, res) {
	res.render('play', {app: req.params.app, pam: req.params.pam})
})
$a.get('/game/:app/:pam?', function (req, res) {
	res.render('game', {app: req.params.app, pam: req.params.pam})
})
$a.get('/pinball', function (req, res) {
	res.render('pinball')
})
$a.get('/ui/:app/:pam?', function (req, res) {
	res.render('ui', {app: req.params.app, pam: req.params.pam})
})
function wap() {
	$a.get('/wap', function (req, res) {
		res.render('wap')
	})
	$a.get('/wap', function (req, res) {
		res.render('wap')
	})
	$a.get('/wap/:app/:pam?', function (req, res) {
		res.render('wap', {app: req.params.app, pam: req.params.pam})
	})
	$a.get('/wap/:app/:pam?', function (req, res) {
		res.render('wap', {app: req.params.app, pam: req.params.pam})
	})
}
function mounts() {
	$a.g('/', function (q, p) {
		p.send('this is a test')
	})
	$a.get('/', function (req, res) {
		res.send('this is a test')
	})
	$a.g('/web/:a/:p?', function (q, p) {
		p.render('web', {
			app: q.params.a,
			pam: q.params.p
		})
	})
	$a.g('/play/:a/:p?', function (q, p) {
		p.render('play', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/wap/:a/:p?', function (q, p) {
		p.render('wap', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
		p.render('mvc', {app: q.params.a, pam: q.params.p})
	})
	$a.g('/web/:a/:p?', function (q, p) {
		p.render('web', {
			app: q.params.a,
			pam: q.params.p
		})
	})
	$a.g('/play/:a/:p?', function (q, p) {
		p.render('play', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/wap/:a/:p?', function (q, p) {
		p.render('wap', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
		p.render('mvc', {app: q.params.a, pam: q.params.p})
	})
}
function staticRoutes(){
function superWeb() {
	$a.use($e.static('./../core/both'))
	$a.use($e.static('./../core/both/deps'))
	$a.use($e.static('./../core/canvas'))
	$a.use($e.static('./../core/jquery'))
	$a.use($e.static('./../core/jquery/deps'))
}
function create() {
	$a.use($e.static('./../core/create'))
	$a.use($e.static('./../core/create/deps'))
	$a.use($e.static('./../core/anim'))
}
function front() {
	$a.use($e.static('./../mvc/knockout'))
	$a.use($e.static('./../mvc/knockout/deps'))
	$a.use($e.static('./../mvc/bootstrap'))
	$a.use($e.static('./../mvc/bootstrap/deps'))
	$a.use($e.static('./../mvc/jqueryUI'))
	$a.use($e.static('./../mvc/jqueryUI/deps'))
	$a.use($e.static('./../mvc/backbone'))
	$a.use($e.static('./../mvc/backbone/deps'))
	$a.use($e.static('./../mvc/dirtpage'))
	$a.use($e.static('./../mvc/knockout'))
	$a.use($e.static('./../mvc/bootstrap'))
	$a.use($e.static('./../mvc/jqueryUI'))
}
function box() {
	$a.use($e.static('./../boxCore/geo'))
	$a.use($e.static('./../boxCore/polygon'))
	$a.use($e.static('./../boxCore/polygon/deps'))
	$a.use($e.static('./../joints'))
	$a.use($e.static('./../joints/advanced'))
	$a.use($e.static('./../joints/distance'))
	$a.use($e.static('./../joints/mouse'))
	$a.use($e.static('./../joints/prismatic'))
	$a.use($e.static('./../joints/revolute'))
	$a.use($e.static('./../joints/weld'))
	$a.use($e.static('./../controllers'))
	$a.use($e.static('./../collisions'))
}
}
function stat() {
	_.e(fileDirs, function (dir) {
		$a.u(
				$e.static(
						$p.j(__dirname, dir)))
	})
	module.exports = function routing(dirN) {
		_.e(dirs, function (dir) {
			$a.use($e.static(dirN + '/' + dir))
		})
	}
}
function gameRts() {
	$a.get('/ball', function (q, p) {
		p.j(ball)
	})
	$a.post('/ball', function (req, res) {
		ball.x = Number(req.body.x)
		ball.y = Number(req.body.y)
		res.json(ball)
	})
	$a.g('/godzilla', function (q, p) {
		p.j(godzilla)
	})
}
function workerRts() {
	$a.g('/wap/workerFile', function (q, p) {
		p.send('/workerFile.js')
	})
}
$a.PO('/picOld', function (q, p, n) {
	var imgFile = q.files.png ? q.files.png : q.files.i
	$f.readFile(imgFile.path, function (z, $FILEDATA$) {//img file props
		var nm = imgFile.name
		var sz = imgFile.size
		var mod = imgFile.lastModifiedDate
		var filePath = imgFile.path
		var ext = $p.extname(filePath) || '.png'  //make new mongoose model
		// i create this model too early 
		PngFile.create({name: nm, ext: ext, size: sz, mod: mod, uId: q.uId}, function (z, imgFileModel) {
			if (z) {
				$l(z)
			}
			filePath = $p.resolve(filePath, '../../pics/', _.tS(imgFileModel._id)) + imgFileModel.ext
			$f.writeFile(filePath, $FILEDATA$, function (z) { //save model
				imgFileModel.path = filePath
				imgFileModel.sv(function (z) {
					if (z) {
						n(z)
					} else {
						p.back()
					}
				})
			})
		})
	})
})
$a.PO('/picOld2MongoCalls', function (q, p, n) {
	var imgFile = q.files.png ? q.files.png : q.files.i
	$f.readFile(imgFile.path, function (z, $FILEDATA$) {//img file props
		var nm = imgFile.name
		var sz = imgFile.size
		var mod = imgFile.lastModifiedDate
		var filePath = imgFile.path
		var ext = $p.extname(filePath) || '.png'  //make new mongoose model
		// i create this model too early 
		Fl.cr({name: nm, ext: ext, size: sz, mod: mod, uId: q.uId}, function (z, imgFileModel) {
			if (z) {
				$l(z)
			}
			filePath = $p.resolve(filePath, '../../pics/', _.tS(imgFileModel._id)) + imgFileModel.ext
			$f.writeFile(filePath, $FILEDATA$, function (z) { //save model
				imgFileModel.path = filePath
				imgFileModel.sv(function (z) {
					if (z) {
						n(z)
					} else {
						p.back()
					}
				})
			})
		})
	})
})
$a.PO('/pic', function (q, p, nx) {
	var imgFile, ext
	if (q.files.png) {
		q.files.i = q.files.png
	}
	imgFile = q.files.i;
	ext = $p.extname(imgFile.path) || '.png'
	Fl.create({
		user: q.uId, name: imgFile.name,
		size: imgFile.size, modified: imgFile.lastModifiedDate, ext: ext
	}, function (z, flMd) {
		fs.readFile(imgFile.path, function (z, fl) {
			flMd.path = $p.resolve(imgFile.path,
					'../../pics/', _.tS(flMd._id) + flMd.ext)
			fs.writeFile(flMd.path, fl, function (z) {
				flMd.sv(function (z) {
					if (z) {
						nx(z)
					}
					else {
						p.rd('back')
					}
				})
			})
		})
	})
})
WRITEFILE = $a.PO('/uplI', function (q, p, nx) { //{u: req.userId, d: req.du}
	PngFile.create($datURL(q), function (z, img) {
		$f.readFile(img.path, function (z, file) {
			$f.writeFile(
					$p.resolve(img.path, '../../p/', _.tS(img._id)) + img.e,
					file, function (z) {
						img.save(function (z) {
							_back(p)
						})
					}
			)
		})
	})
})
//upload a dataUrl!!
//$l('req.body.data: ' + req.body.d); $l(da)
//'54d4506172f7e12a05000012';
//upload a dataUrl!!
//if(req.f.png){req.f.i= q.f.png}
// var i=req.f.i