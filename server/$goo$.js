$md = $m = {}
$mg = require('mongoose')
$Sc= Schema = $mg.Schema
$mg.connect("mongodb://localhost/final", function () {
	$l(' - mg - ')
})

picSchema = new $mg.Schema({
	user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
	//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
	date: {type: Date, default: Date.now},
	modified: Date,
	size: Number,
	name: String,
	ext: String
})

imageSchema = new $mg.Schema({
	username: String,
	date: Date,
	data: String,
	name: String,
	dats: [Number],
	physicsData: [Number]
})

userSchema = new $mg.Schema({
	un: {type: String, required: true},
	pw: String,
	pf: Object,
	mug: {type: String, default: '/me.png'},
	mugURL: String,
	buds: [String]
})

User = $mg.model('User', userSchema)
  
qp = qpn$ = function (fn, q, p, nx) {
	 q = q$(q)
	 q.ss = ss$(q.session)
	 p = p$(p)
	 nx = nx$(nx)
	 return function () {
		 fn(q, p, nx)
	 }
 }


q$ = $Q = miniQ = req = function (q) {

	q= q||{}
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

ss$ = $Ss = function (ss) {
	ss = ss || {}
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
	 ss.c = ss.ck = ss.cookie
	 // s.a= s.maxAge
	 ss.mA = function (a) {
		 this.c.maxAge = a
	 }
	 ss.exp = function (a) {
		 this.c.expires = new Date(Date.now() + a)
	 }
	 return ss
 }

p$ = $P = miniP = $res = function (p) {
	p=p ||{}
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
 
N$ = n$ = $N = nx$ = function (nx) {
	nx = nx ||{}
	 nx.if = function (z) {
		 if (z) {
			 this(z)
		 }
	 }
	 
	 return nx
 }
 
  