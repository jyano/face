Pf = Profile = $m.profile


//get your profile
$a.PO('/getMyProfile',   function (q,p) {
	
	var un = q.b.un || 'a'
	
	Pf.f1({un: q.un}, _json(p)	)
	
})




$a.PO('/getProfile', function (q,p) {
			var un=  q.b.un|| 'a'
			Pf.f1({un: un}, 
					function (z, pf) { p.se('yes')}) //$l(pf)	// res.json(profile)
})
		
  





//update your profile
$a.PO('/myprofile', function (q, p) {
	Pf.f1(
			{un: q.un},
			function (z, pf) {
				if (!pf) {
					q.b .un = q.un
					Pf.cr (
							q.b , function () {
								p.se ('created!')
							})
				}
				else {
					Pf.upd({un: q.un},
							q.b , function () {
								p.se ('updated!')
							})
				}
			})
})

$a.PO('/updateProfile', function (q, p) {
		Pf.f1Upd({un: q.b.un}, q.b.pf)})
		

$a.PO('/newProfile', function (q, p) {Pf.cr(q.b.pf) })
$a.G('/myStatus', function (q, p) {
	$m.user.findOne({un: q.un}, function (z, da) {
		p.send(da.status || 'no status')
	})
})
$a.PO('/status', function (q, p) {
	q.user.status = q.body.text
	q.user.save(function () {
		return 'saved!'
	})
})
$a.PO('/changeStatus', function (q, p) {
	q.user.status = q.body.status
	q.user.save(function (z, user) {
		p.json(user.status)
	})
})
$a.G('/gMsg', function (q, p, nx) {
	var o = {}
	o.map = function () {
		emit(
				this.from, {text: this.text, datetime: this.datetime}
		)
	}
	o.reduce = function (k, vals) {
		var d
		vals.forEach(function (v) {
			if (!d) {
				d = $dtMl(v.datetime, v.text, k)
			}
			else if (v.datetime > d.datetime) {
				d = $dtMl(v.datetime, v.text, k)
			}
		})
		return d
	}
	Ml.mapReduce(o, function (z, reduction) {
		p.js(_.m(reduction, _val))
	})
})
// get mail FROM User, TO a sp. user
$a.G('/myMailFrom', function (q, p, nx) {
	Ml.fi({to: q.un, from: q.query.un},
			function (z, da) {
				p.json(da)
			})
})
//get all mail TO ===or==== FROM user
$a.G('/myMailWith', function (q, p) {
	Ml.fi(
			{
				$or: [
					{to: q.un, from: q.query.un},
					{to: q.query.un, from: q.un}
				]
			},
			function (z, da) {
				p.se(da)
			})
})
$a.G('/sentMail', function (q, p, nx) {
	$l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))
	models.mail.find({from: q.un}, function (z, da) {
		p.send(da)
	})
})
$a.G('/sentMail0', function (q, p) {
	var o = {};
	o.query = {from: q.un}
	o.map = function () {
		var o = this
		emit(o.to, {
			text: o.text, datetime: o.datetime, from: o.from
		})
	}
	o.reduce = function (k, vals) {
		var da
		vals.forEach(function (val) {
			if (!da) {
				da = {
					datetime: val.datetime,
					mail: val.mail,
					to: k,
					from: val.from
				}
			}
			else if (val.datetime > da.datetime) {
				da = {
					datetime: v.datetime, from: val.from,
					mail: val.mail,
					to: k
				}
			}
		})
		return da
	}
	Ml.mapReduce(o, function (z, da) {//$l(r)
		// r.find().exec(     function(z,r){   p.j(r)  })
		da = _.m(da, function (v) {
			return v.value
		})
		da.so({datetime: 1})
		p.js(da)
	})
})
$a.PO('/sendRequest', function (q, p) {
	Req.cr($toFr(q), p)
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
$a.G('/buds', function (q, p, nx) {
	all('user', function (z, u) {
		p.j(_.filter(u, function (u) {
			return _.contains(q.user.buds, u.u)
		}))
	})
})
$a.PO('/buds', function (q, p) {
	User.findOne(q.body,
			function (z, uu) {
				$l(uu.u)
				$m.user.find(
						function (z, u) {
							p.json(_.filter(u, function (u) {
								return _.contains(uu.buds, u.u)
							}))
						})
			})
})
Po = Post = $m.posts
$a.PO('/post', function (q, p) {
//create new post
	$m.post.create(
			$post(q), _json(p))
})

$a.G('/posts', function (q, p) {
//get all posts
	Po.fi(_json(p))
	// from most recent
})
$a.G('/post', function (q, p) {
//get User posts (by unsername)
	// from most recent
	Po.fi({un: q.un}, _json(p))
})
$a.G('/userRecentPosts', function (q, p) {
//User recent post(s?)
	Po.fi({un: q.query.un}, // from most recent
			_json(p))
})
$a.G('/postsByTitle', function (q, p) {
//rescent post(s?)
	$m.posts.find(_title(q), _json(p))
})
//create new post
$a.PO('/pst', function (req, res) {
	models.post.create({
				username: req.username,
				title: req.body.title,
				content: req.body.content,
				dataURL: req.body.dataURL
			},
			function () {
			})
})
//get all posts
$a.G('/posts', function (req, res) {
	models.posts.find(function (err, posts) {
		res.json(posts)
	})  // from most recent
})
//get User posts (by unsername)
$a.G('/post', function (req, res) {
	models.posts.find({username: req.username},
			function (err, posts) {
				res.json(posts)
			})  // from most recent
})
//User recent post(s?)
$a.G('/userRecentPosts', function (req, res) {
	models.posts.find({username: req.query.username}, // from most recent
			function (err, posts) {
				res.json(posts)
			})
})
//rescent post(s?)
$a.G('/postsByTitle', function (req, res) {
	models.posts.find({title: req.query.title}, function (err, posts) {
		res.json(posts)
	})
})
