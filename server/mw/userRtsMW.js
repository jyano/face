$a.post('/user/user', function (q, p, nx) {
	User.create(q.body, function (z, user) {
		if (z) {p.j('z');
			nx(z)}
		else {
			$l(user)
			var ss = q.ss = q.session
			// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
			//set session u=u.u (user name= user.username)
			q.ss.un = user.un //set session li=true (loggedIn=true)//q.ss.loggedIn = true
			//save ss and send back a json obj of username -so a string?
			//_.x(q.session, {un: u.un, loggedIn: true})
			q.ss.save(function () {
				p.json(ss)
			})
		}
	})
	
	//$l(z.code == 11000 ? '!!' : '!');//$d(z);
})
$a.get('/user/session', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
	}
	else {
		ss.views = 1
	}
	p.send(ss)
})
$a.get('/user/ses', function (q, p) {
	var ss = q.session
	$l('ss: ')
	$l(ss)
	if (ss.views) {
		ss.views++
		p.setHeader('Content-Type', 'text/html')
		p.write('<p>views: ' + ss.views + '</p>')
		p.write('<p>expires in: ' + (ss.cookie.maxAge / 1000) + 's</p>')
		p.write(JSON.stringify(ss, null, '\t'))
		p.end()
	}
	else {
		ss.views = 1
		p.end('welcome to the session demo. refresh!')
	}
})

$a.post('/user/unIsAvail', function (q, p) {
	User.findOne({un: q.body.un}, function(z, user){
		p.send(user ? false: q.body.un)
		
	})

})

 $a.get('/login', function (q, p) {
	p.send('fred')
})
$a.post('/user/login', function (q, p, nx) {
	var accountCreds
	p.fail = function () {
		$l('FAIL -> guest');
		this.j('guest')
	}
	p.pass = function (un) {
		var p = this
		$l('logged in: ' + un + ' !')
		q.ss.un = un //=q.un =q.ss.loggedIn = q.loggedIn = q.ss.u= q.ss.li
		q.ss.sv(function () {
			$l('q.ss.un: ' + q.ss.un)
			p.j(un)
		})
	}
	//check if un and pw are legit
	accCreds = {
		un: q.b.un, pw: q.b.pw
	}
	
	User.findOne(accCreds, function (er, user) {
		er ? nx(er) : user ?
			//that was easy
				p.pass(user.un) :
				p.fail()
	})
})
$a.post('/login', function (q, p) {
	$l('post /login')
	var creds = q.body
	Dude.findOne(creds, function (err, user) {
		if (err) {
			$l('err: ' + err)
			p.send('err: ' + err)
		}
		else if (user) {
			p.send(user.un)
		}
		else {
			p.send(false)
		}
	})
})

$a.post('/dudes', function (q, p) {
	$l('dudes')
	$l(q.body)
	Dude.create(q.body, function (z, dude) {
		if (z) {
			$l('z')
		}
		else {
			$l(dude)
		}
	})
})
$a.post('/un', function (q, p) {
	$l('un')
	un = q.body.un
	$l('un: ' + un)
	q.session.un = un
	q.session.save(function () {
		$l('q.session: ' + q.session)
		p.send(q.session)
	})
})
$a.delete('/user', function (q, p) {
////delete user  
// does this('del') work like post or get (in terms of express)?
	
	User.remove(q.body, function(z,u){
		
		if(!z){
			p.send(q.body.un)
		}
		else{$l('z')}
		
	})
	
})


// 'user' middleware:
// what can it do?
// it can see is someone is 'authed'
// how does it know?  requests from authorized users have 'loggedIn' property set to true
// so just check that property
// /W =
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
//  for posting/creating a new user
/*
 g('/user', function (q, p) {
 // *** sends back all the users,
 // but has to parse/filter them first 
 // we only want an ob with THESE FOUR properties 
 // {id, username, mug, status} 
 // (NOT all the actual properties on the ob instance)
 Ur.fi(p.daFn($user))
 // p.da( $user(da) ) // toUser
 })
 G('user/:un', function (q, p) {
 Ur.f1(q.un_(), p.daFn($user))
 p.j($user(user))
 })

 */
$Mw.ur = $Mw.user = qp(function (q, p, nx) {
	if (q.lI || q.loggedIn) {
		Ur.f1(q.un(), function (z, ur) { // if (z) { nx(z) }
			nx.if(z);
			q.parUr(ur);
			nx()
		})
	}	//$l('.user mw.. loggedIn?= ' + q.loggedIn) //req.li ||//Midware.u =
	else {
		p.se('guest');
		return
	} //$l('mw says NOT logged in :(')
	//auth(q, p, next, function (q, p, nx) {
	//	$md.user.findOne({un: q.un},
	//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
	//				nx()})})
	//
})