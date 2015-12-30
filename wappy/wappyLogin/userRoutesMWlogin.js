$Q = miniQ = q$ = req = function (q) {
	q.auth = function () {
		var q = this
		q.loggedIn = isLoggedIn(q)
		q.un = q.ss.un;
		// =  p.lc.loggedIn
		//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
		return q
	}
	q.un_ = function () {
		return un_(this.pm.un)
	}
	q.pm = q.params
	q.b = q.body
	q.un = function () {
		return {un: this.un}
	}
	q.parUr = q.parseUser = function (ur) {
		var q = this
		if (ur) {
			q.user = p.lc.user = ur   //res.locals.U = req.U =
			q.un = p.lc.un = ur.un//res.locals.u = req.u =
			q.uId = p.lc.urId = ur._id //res.locals.I = req.I =
		}
	}
	q.urs = q.users = function (fn) {
		Ur.fi(q.b, fn)
	} // q.users( wUrs )
	q.a = q.app;
	q.p = q.params;
	q.q = q.query;
	q.b = q.body;
	q.u = q.url
	q.bU = q.baseUrl;
	q.oU = q.originalUrl;
	q.h = q.hn = q.hostname
	//q.rt = q.route  //q.rt.pt = q.rt.path  // q.pt = q.rt.pt  // q.pt = q.path;
	q.pc = q.protocol  //q.s= q.secure;  q.fr= q.fresh; q.st= q.stale;
	// q.sd= q.subdomains; q.x= q.xhr  // q.ip= q.ip  // q.ips= q.ips
	if (q.session) {
		q.s = q.ss = sess(q.session)
	}
	// q.c= q.ck= q.cookies;
	// q.sC= q.signedCookies
	return q
}
$Ss = ss$ = function (ss) {
	ss.sv = ss.save;
	ss.s = ss.save
	ss.rg = ss.regenerate    // new SID and Session inst initd at q.ss.
	ss.rl = ss.reload // ss rl updd in cb
	ss.d = ss.destroy
	// cannot access session in cb
	// Destroys  ss, removing q.ss  (re-gens next req)
	//destroy session!!!
//  ssStor-based ss's has  met  called destroy(),
//     -used for    destroying ss's from the ssStor
//       –  proper way of tearing down a ssStor-based ss.
//     q.ss.destroy(); -accepts an opl cb
//        ( exd af  ss cleared from  store )
// q.ss.destroy(function () {  p.s('ss deleted') })
	ss.t = ss.touch  // Upds  maxAge prop   (ss mw usually does this).
	ss.c = ss.ck = s.cookie
	// s.a= s.maxAge
	ss.mA = function (a) {
		this.c.maxAge = a
	}
	ss.exp = function (a) {
		this.c.expires = new Date(Date.now() + a)
	}
	return ss
}
$P = miniP = p$ = $res = function (p) {
	p.js = p.j = p.json
	 p.da = function (da, fn) {
		fn = fn || function (a) {
			return a
		}
		if (da) {
			p.js(fn(da))
		}
	}
	p.daFn = function (fn) {
		var p = this
		return function (z, da) {
			p.da(da, fn)
		}
	}
	p.f1 = function (m, ob) {
		m.f1(ob, _js(this))
	} // ***
	p.s = p.send;
	p.j = p.json;
	p.jp = p.jsonp
	p.scrs = function (fns) {
		var p = this
		async.series(fns, function (z, scrs) {
			var str = ''
			scrs.forEach(function (js) {
				str += js
			})
			p.s(scrTag(str))
		})
	}
	p.js = function (JS) {
		var p = this, fns = []
		JS.forEach(function (js) {
			fns.push(function (cb) {
				$f.u8($tJs(js), function (z, j) {
					cb(null, j)
				})
			})
		})
		p.scrs(fns)
	}
	p.lc = p.l = p.locals;
	p.r = p.render
	p.rd = function (u) {
		var p = this;
		u = S(u) ? u : 'back';
		p.redirect(u)
	}
	p.xC = p.clearCookie //
	p.fm = p.format;
	p.a = p.append;
	p.e = p.end
	p.lc = p.location;
	p.lk = p.links
	p.f = p.sF = p.sendFile;
	p.at = p.attachment;
	p.dl = p.download
	p.st = p.status;
	p.sS = p.sSt = p.sendStatus
	p.t = p.ty = p.type;
	p.v = p.vary // ?
	p.s4 = p.s400 = function () {
		return this.STS(400)
	}
	p.h = p.g = p.hd = function (k, v) {
		var p = this
		//get/set header
		if (U(v)) {
			return p.get(k)
		}
		p.set(k, v)
		return p
	}
	p.cT = function (cT) {
		var p = this
		p.h('Content-Type', cT)
		return p
	}
	p.wH = function (a) {
		this.writeHead(a);
		return this
	};
	p.w = function (a) {
		this.write(a);
		return this
	}
	p.wB = function (a) {
		return this.write(a, 'binary')
	}
	p.e = p.end
	p.tx = function () {
		return this.wH(500, {"Content-Type": "text/plain"})
	}
	p.z = function (z) {
		return this.tx().w(z + "\n").e()
	}
	p.$p = function () {
		var g = G(arguments)
		this.s(
				_p.apply(null, g)
		)
	}
	p.wHwBE = function (a, b) {
		return this.wH(a).wB(b).e()
	}
	p.s403 = p.s4 = function () {
		return this.sTs(403)
	}
	p.ok = function () {
		return this.s('OK')
		n()
	}
	p.c = p.ck = p.cookie;
	// p.a = p.app;   // p.hdS = p.headersSent
	return p
}
$N = nx$ = function (nx) {
	nx.if = function (z) {
		if (z) {
			this(z)
		}
	}
	return nx
}
miniQP = function (q, p) {
	miniQ(q)
	miniP(p)
}
$w = $Mw = function (q, p, nx) {
	// regular (pre-user) middleware
	miniQP(q, p)
	q.loggedIn = isLoggedIn(q)
	q.un = q.ss.un;
	// =  p.lc.loggedIn
	//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
	nx()
}
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
g = $g = $get
G = function (url, fn) {
	g('/' + url, fn)
}



////////////////////////////////////////////////
$user = toUser = function (o) {
	if (A(o)) {return _.m(o, $user)}
	return {id: o.id, un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status'
	}
}
un_ = function (un) { return {un: un} }
g('/user', function (q, p) {
	// *** sends back all the users,
	// but has to parse/filter them first 
	// we only want an ob with THESE FOUR properties 
	// {id, username, mug, status} 
	// (NOT all the actual properties on the ob instance)
	Ur.fi(p.daFn($user))
	// p.da( $user(da) ) // toUser
})
G('user/:un', function (q, p) { Ur.f1(q.un_(), p.daFn($user))
	p.j($user(user)) })
$post('/user', function (q, p, nx) {
	Ur.cr(q.b, function (z, u) {if (z) {p.js('z');nx(z)}
		else {
				// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
				//set session u=u.u (user name= user.username)
				q.ss.un = user.un //set session li=true (loggedIn=true)//q.ss.loggedIn = true
				//save ss and send back a json obj of username -so a string?
				//_.x(q.session, {un: u.un, loggedIn: true})
				q.ss.sv(function () {p.js(ur.un)})
			 
	}})
	
	//$l(z.code == 11000 ? '!!' : '!');//$d(z);
})//  for posting/creating a new user


$a.de('/user', function (q, p) {
////delete user  
// does this('del') work like post or get (in terms of express)?
	Ur.rm(q.b, _json(p)) })
////////////////////////////////////////////////










$logOut(function (q, p) {
	q.ss.un = null//	q.ss.loggedIn = q.ss.li = q.ss.u =
	q.ss.sv(function () {p.j('false')})
})
$a.po('/login', function (q, p, nx) {
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
	User.f1(accountCreds = {un: q.b.un, pw: q.b.pw}, function (er, user) {
		er ? nx(er) : user ?
			//that was easy
				p.pass(user.un) :
				p.fail()
	})
})
G('un', function (q, p) {
	$l('loggedIn? ... : ' + q.un)
	$l('q.un: ' + q.un)
	p.j(q.un)
})// '/loggedIn'// //send json of 'my username'
