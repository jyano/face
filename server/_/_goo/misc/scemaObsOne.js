file = pic = {
	user: {ty: $Ty.ObjectId, ref: 'user', rq: 1},
	//user: {ty: $mg.Schema.Types.ObjectId, ref:'user', rq:1},
	date: {ty: $D, df: $D.now},
	modified: $D,
	size: Number,
	name: $S,
	ext: $S,
}
cut = cutout = img = {
	un: $S, u: $S,
	date: $D,
	data: $S, d: $S,
	name: $S,
	dats: [Number],
	physicsData: [Number]
}
sts = avail = {
	datetime: {ty: $D, df: $D.now},
	un: {ty: $S, rq: 1},
	text: $S
}
budReq = req = {
	from: {ty: $S, rq: 1},
	to: {ty: $S, rq: 1},
	datetime: {ty: $D, df: $D.now}
}
 post = {
	datetime: {ty: $D, df: $D.now},
	un: {ty: $S, rq: 1},
	title: $S,
	text: $S,
	dataURl: $S
}
msg = mail = { //msg
	from: {ty: $S, rq: 1},
	to: {ty: $S, rq: 1},
	datetime: {ty: $D, df: $D.now},
	title: $S,
	text: $S
}
prof = { //userId
	un: $S,
	aboutMe: $S,
	iEnjoy: $S,
	iSeek: $S
}
userSc = $Sc(user)
fileSc = imgFileSc = picSc = $Sc(pic)
cutSc = imgSc = $Sc(img)
stsSc = $Sc(sts)
availSc = $Sc(avail)
postSc = $Sc(po)
budReqSc = $Sc(req)
mailSc = $Sc(mail)
pfSc = $Sc(prof)
Ur = User = $Md('User', userSc)
Pf = Profile = $Md('Profile', pfSc)


Ur_ = User_ = $S.user = $S({
	un: {ty: $S, rq: 1, ix: {
			uniq: 1
		}},
	pw: {ty: $S, rq: 1},
	mug: {ty: $S, df: '/me.png'//df: dfMug
		
	}, 
	
	mugURL: $S, //mugData.. no mugId
	sts: {ty: $S, df: 'nothing much'},
	pf: $O,
	buds: [$S]
})


Ur = User = $M.user  = $M('user', User_)






schemaObs  = {
	user: {
		un: {
			ty: $S, rq: 1, ix: {
				uniq: 1
			}
		},
		pw: {
			ty: $S, rq: 1
		},
		mug: {
			ty: $S, df: '/me.png'
		}, //df: dfMug
		mugURL: $S,//mugData.. no mugId
		sts: {
			ty: $S, df: 'nothing much'
		},
		pf: $O,
		buds: [$S]
	},
	
	
	pic: pic,
	img: img,
	sts: sts,
	avail: avail,
	post: post,
	msg: msg,
	budReq: budReq
}

$m = {};


_.e(schemaObs, function(ob, name){
 
	
	$m[name] = $Md(name, $Sc(schemaObs[name]))

})




for (var md in schemaObs) {

	sc = $Sc(schemaObs[md])
	
	$m[md] = $Md(md, sc)

}



module.exports = $m
 