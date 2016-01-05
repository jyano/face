$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	$md.pic.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
	$md.pic.find(function (err, data) {
		res.json(data)
	})
})
$a.g('/myPics', $w.user, function (q, p) {
	$md.pic.find({
				user: q.userId
			},
			function (z, pics) {
				p.json(pics)
			})
})
//remove a pic
$a.delete('/pic', function (q, p) {
	Ml.rm(q.b, _json(p))
})
//get all pics(files) (everyone's)
$a.get('/pics', function (q, p) {
	Fl.fi(_json(p))
})
//remove a pic
$a.delete('/pic', function (q, p) {
	Fl.rm(req.body, function (err, data) {
		res.json(data)
	})
})
//get all pics(files) (everyone's)
$a.get('/pics', function (q, p) {
	Fl.fi(function (err, data) {
		res.json(data)
	})
})
//change to get pics?
//find all User's pics
$a.get('/myPics', $w.user, function (q, p) {
	Fl.fi({user: req.userId},
			function (err, pics) {
				res.json(pics)
			})
})
$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	Fl.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (q, p) {  //get all pics(files) (everyone's)
	Fl.find(function (err, data) {
		res.json(data)
	})
})
$Mw.Pics = $Mw.P = function (q, p, nx) {
//$m.pic.find({u: q.I},
	//		function (z, pics) {
	//			p.l.I = _.m(pics, function () {return _S(pic._id) + pic.e})
	//			nx()
	//		})
	$picByUser(q.I, function (z, pics) {
		p.lc.images = p.lc.I = $arr(function (arr) {
			_.e(pics, function (pic) {
				arr.push(_S(pic._id) + pic.e)
			})
		})
		nx()
	})
}
$Mw.pic = $Mw.p = function (q, p, nx) {
	
	/*
	
	 $md.pic.findById(q.params.p,
	 function (z, i) {
	 if (z) {
	 n(z)
	 }
	 p.lc.image = p.lc.i = '/' + i._id
	 q.image = q.i = i
	 n()
	 })
	 */
	models.pic.findById(
			q.params.p,
			function (z, i) {
				if (z) {
					nx(z)
				}
				p.lc.i = '/' + i._id
				q.i = i
				nx()
			})
} 