 
$a.PO('/changeMug', function (q, p) {  // could be a put?
	var ur = q.user
	ur.mug = q.b.url
	ur.sv(_send(p))
})
$myUn = function (q) {
	return {un: q.un}
}
$a.G('/myMug', function (q, p) {// $l('q.b: ' + q.b); $l('q.un: ' + q.un)
	Ur.f1($myUn(q), function (z, u) {
		//$l('in findOne callback'); $l('da: ' + da)
		p.se(u.mug)
	})
})
$a.g('/mugByUsername/:un', function (q, p) {
	//$l('q.params.un: ' + q.params.un)
	Ur.f1({un: q.pm.un}, function (z, u) {
		p.se(u.mug)
	})
})
$a.delete('/user', function (q, p, nx) {
	Ur.rm(q.b, function (z, da) {
		p.js(da)
	})
})
testMyMug = function () {
	$.g('/myMug', function (da) {
		$.h1('in callback..').A()
		$.i(da).A().C('black').drag()
	})
}
testMugByUsername = function (un) {
	un = un || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.g('/mugByUsername/' + un, function (da) {
		z()
		$.h1('in callback..').A()
		$.i(da).A().C('z').drag()
	})
}
//testDefaultMug = function () {$.i(defaultMug).A()}
testChangeMug = function () {
	//it automatically changes your userMug to the defaultMug
	$.po('/changeMug', {url: defaultMug}, function () {
		z();
		TWEEN()
	})
}
 
//FIND ALL
$a.G('/cutouts', function (q, p) {
	//find all   images on site // good: $findAllP('cutout', p)
	$findAll('cutout', _js(p))
})
//FIND MY
$a.G('/cutout', function (q, p) {//find 'my'  cutouts//      /img
	Cut.fi({un: q.un}, _js(p))
})
 
// CREATE
$a.PO('/cutout', function (q, p) {
//img//new cutout (image)
	Cut.cr($cutout(q), _js(p))
})
// DELETE
$a.DEL('/cutout', function (q, p) {
	Cut.rm(q.b, _js(p))
})
// DATA
$a.PO('/dat', function (q, p) {
	Cut.fId(
			q.b.dat,
			_js(p)
	)
	//   _se//$a.PO('/getimagebyid', function (q, p) {Cut.fId(q.b.d, _js(p)) })
	//** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's?? 
	// $l('dud'); $l('q.body.data');
	// $l(q.body.d)// /dats//Cutout.findById(q.body.data, _send(p) )	
	// '54d4506172f7e12a05000012'
})
function old() {
	$a.get('/game/:app/:pam?', function (req, res) {
		res.render('game', {
			app: req.params.app,
			pam: req.params.pam
		})
	})
	$a.get('/things', function (req, res, next) {
		res.render('things')
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
	$a.post('/thing', function (q, p) {
		$l('get thing')
		models.thing.create(
				q.body, function (z, things) {
					if (things) {
						p.j(things)
					}
				})
	})
//need to deprecate
//get a durl from an img-ob id
	$a.post('/dud', function (q, p, next) {
		//'54d4506172f7e12a05000012',
		models.img.findById(q.body.d,
				function (err, data) {
					$l('data: ')
					console.dir(data)
					p.se(data)
				})
	})
	$a.PO('/newObj', function (q, p, n) {
		var o = {
			t: q.b.t,
			u: q.u,
			c: '',
			i: []
		}
		$l(o)
		MC.connect(mUrl,
				function (z, db) {
					if (z)throw z
					var cl = db.collection('objs')
					cl.insert(o, function () {
					})
					// {name:'rigo', game:'shmigo'},
					// {name:'jason',   game:'shmason',  kids:[{s:0},{s:1}]   },
					// cl.remove({},
					// function(z,d){
					//  cl.count(function(z,c){l('count: '+c)})
					// cl.find({  name:'jason'  })
					// cl.update({name:'jason'}, {$set: {a:{name:'ya',game:'na'}}},function(z,r){
					// .toArray(function(z,r){  l(r); db.close()  })
					// })
				})
	})
	$a.G('/objects', function (q, p, n) {
		MC.connect(mUrl,
				function (z, db) {
					if (z)throw z
					var cl = db.collection('objs')
					cl.find({u: u}).toArray(function (z, r) {
						l(r);
						p.j(r)
						db.close()
					})
					// })
				})
	})
//get your profile
	$a.PO('/getMyProfile', function (q, p) {
		p.f1({un: q.un})
	})
//update your profile
	$a.PO('/myprofile', function (q, p) {
		Pf.f1({un: q.un}, function (z, pf) {
			if (!pf) {
				q.b.un = q.un
				Pf.cr(q.b, function () {
					p.se('created!')
				})
			}
			else {
				Pf.upd({un: q.un}, q.b, function () {
					p.se('updated!')
				})
			}
		})
	})
//get someones profile
	$a.get('/profile/:username', function (req, res) {
		$l('/profile/:username')
		$l('req.params.username: ' + req.params.username)
		Profile.findOne({username: req.params.username}, function (err, profile) {
			res.json(profile)
		})
	})
	$a.post('/getProfile', $w.user,
			function (req, res) {
				$l('getProfile')
				var username = req.body.username || 'a'
				Profile.findOne({
							username: username
						},
						function (err, profile) {
							$l(profile)
							res.send('yes')
							// res.json(profile)
						})
			})
	$a.PO('/newPf', function (q, p) {
		Pf.cr(q.b.pf)
	})
	$a.PO('/updPf', function (q, p) {
		var un = q.B.un
		var pf = q.B.pf
		Pf.f1Upd({un: un}, pf)
	})
//////
///
////
////
//create new status
	$a.post('/status', $w.user, function (q) {
		var ur = q.ur
		ur.status = q.B.text
		ur.sv(function () {
			return 'saved!'
		})
	})
//send request from User to sp. user
	$a.PO('/sendRequest', function (q, p) {
		$m.req.cr({to: q.body.to, fr: q.u}, p)
	})
	$a.PO('/acceptRequest', function (q, p, n) {
		(q.U.buds = q.U.buds || []).push(q.b.u)
		f1('user', {u: q.b.u}, function (z, u) {
			(u.buds || []).push(q.u)
			u.save()
		})
		q.U.save()
	})
	$a.G('/getRequests', function (q, p, n) {
		find('req', {to: q.u}, p)
	})
	$a.G('/buds', function (req, res, next) {
		all('user', function (err, u) {
			res.j(_.filter(u, function (u) {
				return _.contains(req.U.buds, u.u)
			}))
		})
	})
	$a.PO('/buds', function (req, res) {
		$m.user.findOne(req.body,
				function (err, uu) {
					$l(uu.u)
					models.user.find(
							function (err, u) {
								res.json(_.filter(u, function (u) {
									return _.contains(uu.buds, u.u)
								}))
							})
				})
	})
//send someone an email !!!!!
	$a.post('/sendMail', $w.user, function (req, res) {
		models.mail.create({
					to: req.body.to,
					from: req.username,
					text: req.body.text
				},
				function (err, data) {
					res.json(data)
				}
		)
	})
	$a.get('/gMsg', $w.user, function (req, res, next) {
		var o = {}
		o.map = function () {
			emit(this.from, {
				text: this.text,
				datetime: this.datetime
			})
		}
		o.reduce = function (k, vals) {
			var d
			vals.forEach(function (v) {
				if (!d) {
					d = {datetime: v.datetime, text: v.text, from: k}
				}
				else if (v.datetime > d.datetime) {
					d = {datetime: v.datetime, text: v.text, from: k}
				}
			})
			return d
		}
		models.mail.mapReduce(o,
				function (err, reduction) {
					res.json(
							_.map(reduction, function (val) {
								return val.value
							}))
				})
	})
// get mail FROM User, TO a sp. user
	$a.get('/myMailFrom', $w.user, function (req, res, next) {
		models.mail.find({to: req.username, from: req.query.username},
				function (err, data) {
					res.json(data)
				})
	})
//get all mail TO ===or==== FROM user
	$a.get('/myMailWith', $w.user, function (req, res) {
		models.mail.find(
				{
					$or: [
						{to: req.username, from: req.query.username},
						{to: req.query.username, from: req.username}
					]
				},
				function (err, data) {
					res.send(data)
				})
	})
	$a.get('/sentMail', $w.user, function (req, res, next) {
		$l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))
		models.mail.find({from: req.username}, function (err, data) {
			res.send(data)
		})
	})
	$a.get('/sentMail0', $w.user, function (req, res) {
		var o = {};
		o.query = {from: req.username}
		o.map = function () {
			emit(this.to, {
				text: this.text, datetime: this.datetime, from: this.from
			})
		}
		o.reduce = function (k, vals) {
			var data
			vals.forEach(function (val) {
				if (!data) {
					data = {
						datetime: val.datetime,
						mail: val.mail,
						to: k,
						from: val.from
					}
				}
				else if (val.datetime > data.datetime) {
					data = {
						datetime: v.datetime, from: val.from,
						mail: val.mail,
						to: k
					}
				}
			})
			return data
		}
		models.mail.mapReduce(o, function (err, data) {//$l(r)
			// r.find().exec(     function(z,r){   p.j(r)  })
			data = _.map(data,
					function (v) {
						return v.value
					})
			data.sort({datetime: 1})
			res.json(data)
		})
	})
//create new topic
	$a.post('/topic', $w.user, function (req, res) {
		cre('topic', {
					u: req.u, t: req.b.c
				},
				res)
	})
//get all topics
// ALL('/topic', 'topic')
//get topic 1 ? by t?
	$a.get('/topic', function (req, res) {
		Topic.get(function (err, data) {
			res.json(data)
		})
	})
	$a.get('/topic1', function (req, res) {
		models.topic.findOne({topic: req.query.topic}, function () {
		})
	})
//post vote
	$a.post('/vote', $w.user, function (req, res) {
		f1('topic', {t: req.b.t},
				function (err, t) {   // if(q.b.dr=='u'){
					//  var ti = _.map(t.i, function(i){
					//      if(O(i) && i.t==q.b.i){
					//          if(q.b.dr=='u'){i.s=i.s+1}
					//          if(q.b.dr=='d'){i.s=i.s-1}}
					//     return i})
					var ti = _.map(t.i,
							function (i) {
								if (O(i) && i.t == req.b.i) {
									if (req.b.dr == 'u') {
										i.s = i.s + 1
									}
									if (req.b.dr == 'd') {
										i.s = i.s - 1
									}
								}
								return i
							})
					t.i = []
					t.i = ti;
					t.save(
							function (err, data) {
								$l('error ob:');
								$l(err)
								$l('suc ob:');
								$l(data)
								res.j(data)
							}
					)
				})
	})
	$a.get('/book', $w.user, function (req, res, next) {
		models.post.find({username: req.username}, function (err, data) {
			res.json(data)
		}) //recent?
	})
	$a.post('/newBook', $w.user, function (req, res, next) {
		models.status.create({
					username: req.username,
					title: req.body.title,
					content: req.body.content
				},
				function (err, data) {
					res.json(data)
				})
	})
//post a user's item
	$a.post('/item', $w.user, function (req, res, next) {
		models.topic.findOne({topic: req.body.topic}, function (err, data) {
			data.items.push({
				topic: req.body.content,
				s: 0
			})
			data.save(function (err, data) {
				res.json(data)
			})
		})
	})
//post a user's sort  //should refernce a parent sort?!  :)
	$a.post('/sort', $w.user, function (req, res) {
		models.sort.create({
			username: req.username, t: req.body.c
		}, function (err, data) {
			res.json(data)
		})
	})
	$a.get('/sort', $w.user, function (req, res) {
		models.sort.find({username: req.username}, function (err, data) {
			res.json(data)
		})
	})
////
////
///
	$a.get('/ball', function (req, res) {
		res.json(ball)
	})
	$a.post('/ball', function (req, res) {
		ball.x = Number(req.body.x)
		ball.y = Number(req.body.y)
		res.json(ball)
	})
	$a.get('/godzilla', function (req, res) {
		res.json(godzilla)
	})
	$a.get('/wap/workerFile', function (req, res) {
		res.send('/workerFile.js')
	})
}
