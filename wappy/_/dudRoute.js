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

 