$a.get('/things', function (q, p, nx) {
	p.render('things')
})

$a.get('/thing', function (q, p, nx) {
	$l('get thing')
	models.thing.find({},
			function (err, things) {
				$l('err: ', err)
				if (things) {
					$l('things')
					$l(things)
					p.json(things)
				}
			})
})
$a.get('/thingAdd', function (q, p, nx) {
	$l('get thing')
	models.thing.create({name: 'helloAgain', age: 4}, function (err, things) {
		if (things) {
			$l('things')
			$l(things)
			p.json(things)
		}
	})
})
$a.post('/thing', function (q, p, nx) {
	$l('get thing')
	models.thing.create(q.body, function (err, things) {
		if (things) {
			$l('things')
			$l(things)
			p.json(things)
		}
	})
})


