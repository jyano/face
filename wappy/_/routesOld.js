$a.get('/pinball', function (req, res) {
	res.render('pinball')
})
// huh?
$a.get('/game/:app/:pam?', function (req, res) {
	res.render('game', {app: req.params.app, pam: req.params.pam})
})
$a.get('/ui/:app/:pam?', function (req, res) {
	res.render('ui', {app: req.params.app, pam: req.params.pam})
})
////////////////
//////
////
///
$a.get('/things', function (req, res, next) {
	res.render('things')
})
$a.get('/thing', function (req, res, next) {
	console.log('get thing')
	models.thing.find({},
			function (err, things) {
				console.log('err: ', err)
				if (things) {
					console.log('things')
					console.log(things)
					res.json(things)
				}
			})
})
$a.get('/thingAdd', function (req, res, next) {
	console.log('get thing')
	models.thing.create({name: 'helloAgain', age: 4}, function (err, things) {
		if (things) {
			console.log('things')
			console.log(things)
			res.json(things)
		}
	})
})
$a.post('/thing', function (req, res, next) {
	console.log('get thing')
	models.thing.create(req.body, function (err, things) {
		if (things) {
			console.log('things')
			console.log(things)
			res.json(things)
		}
	})
})
//need to deprecate
//get a durl from an img-ob id
$a.post('/dud', function (req, res, next) {
	$l('dud')
	$l('req.body.d')
	$l(req.body.d)
	models.img.findById(
			//'54d4506172f7e12a05000012',
			req.body.d,
			function (err, data) {
				$l('data: ')
				console.dir(data)
				res.send(data)
			})
})
 