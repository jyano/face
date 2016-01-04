 pre()
$jFn = function (p, str) {// pjdX = function (p) {return function (z, da) {p.j(da)}}
	return F(str) ? function (z, da) {
		if (da) {
			da = str(da);
			p.j(da)
		}
	} :
			function (z, da) {
				if (S(str)) {
					da = da[str]
				}
				;
				p.j(da)
			}
} // = $j = jD = pjd = Js = Json
_pm = function (q, pm) {
	return q.params[pm]
}
_byUn = function (q) {
	return _un(_pm(q, 'un'))
}
_fByUn = function (m) {
	return function (q, p) {
		$m[m].fi(_byUn(q), _json(p))
	}
} 
 


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


function moreSchemas(){
	statusSchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	})
	availabilitySchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	})
	postSchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		title: String,
		text: String,
		dataURl: String
	})
	buddyRequestSchema = new $mg.Schema({
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now}
	})
	mailSchema = new $mg.Schema({
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now},
		title: String,
		text: String
	})
}
function pre(){
	$mg = require('mongoose')
	Schema = $mg.Schema
	$mg.connect("mongodb://localhost/final", function () {
		$l(' - mg - ')
	})
	$md = $m = {}
	}
function old() {
	function classic() {
		SCHEMAS = {
			user: {
				username: {type: String, required: true},     //username: {type:String, required:true},
				password: String,
				//m: { type: String, default: '/me.png' },
				//mug: { type: String, default: '/me.png' },  //mugData.. no mugId //mugData.. no mugId
				mug: {
					type: String//, default: require('./defaultMug')
				},
				status: {type: String, default: 'nothing much'},
				buds: [String]
			},
			pic: {
				user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
				//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
				date: {type: Date, default: Date.now},
				modified: Date,
				size: Number,
				name: String,
				ext: String
			},
			img: {
				username: String, u: String,
				date: Date,
				data: String, d: String,
				name: String,
				dats: [Number],
				physicsData: [Number]
			},
			thing: {name: String, age: Number},
			//guy: {n: {type: S, required: true}, m: S, x: N, y: N}, //map:{n:S, guys:O},
			book: {
				userId: {
					type: $mg.Schema.Types.ObjectId,
					ref: 'user', required: true
				},
				title: String,
				chapters: ['chapter']  // ???
			},
			sort: {
				username: {type: String, required: true},
				datetime: {type: Date, default: Date.now},
				title: String,
				items: {type: [{}], default: []}
			},
			status: {
				datetime: {type: Date, default: Date.now},
				username: {type: String, required: true},
				text: String
			},
			availability: {
				datetime: {type: Date, default: Date.now},
				username: {type: String, required: true},
				text: String
			},
			post: {
				datetime: {type: Date, default: Date.now},
				username: {type: String, required: true},
				title: String,
				text: String,
				dataURl: String
			},
			message: { //msg
				from: {type: String, required: true},
				to: {type: String, required: true},
				datetime: {type: Date, default: Date.now},
				title: String,
				text: String
			},
			//buddy request
			buddyRequest: {
				from: {type: String, required: true},
				to: {type: String, required: true},
				datetime: {type: Date, default: Date.now}
			},
			Topic: {
				topic: String,
				items: {type: [{}], default: []}
			}, Message: {
				topicId: Number, //?
				topicName: String,
				text: String,
				score: Number
			}, Comment: {},
			link: {
				title: String,
				url: String
			}
		}
		for (var model in SCHEMAS) {
			
			//str += (' - ' + model )
			$md[model] = $mg.model(
					model,
					$mg.Schema(SCHEMAS[model])
			)
		}
		//	Profile = $mg.model('Profile', pfSchema)
		Ml = Mail = $m.mail
		Req = $m.req
		Ur = User = $m.user
		PngFile = Fil = Fl = $m.file
		Cut = Cutout = $m.cutout
	}
	qp = qpn$ = function (fn, q, p, nx) {
		q = q$(q)
		q.ss = ss$(q.session)
		p = p$(p)
		nx = nx$(nx)
		return function () {
			fn(q, p, nx)
		}
	}
//
	json_ = jD = pjd = function (p, str) {
		return function (z, da) {
			S(str) ? p.js(da [str]) : p.js(da)
		}
	}
	_findP = function (m, byOb) {
		return function (q, p) {
			p.fi($m[m], byOb)
		}
	}
	_se = __send = function (p) {
		return _pFn('send')
	}
	function helpers() {
		$post = function (q) {
			return {
				un: q.un,
				title: q.b.title,
				content: q.b.content,
				dataURL: q.b.dataURL
			}
		}
		$datetimeMail = $dtMail = $dtMl = function (dt, tx, fr) {
			return {datetime: dt, text: tx, from: fr}
		}
		$datURL = function (q) {
			return {
				uId: q.uId, dU: q.du
			}
		}
		f1 = function (m, o, f) {
			if (!F(f)) {
				f = function (z, da) {
					f.j(da)
				}
			}
			// can pass in EITHER p .. or an ACTUAL function BRILLIANT
			$m[m].f1(o, f)
		}
		fById = function (m, o, f) {
			$m[m].findById(o, F(f) ? f : pjd(f))
		}
		ALL = function (route, m) {
			$a.get(route, function (req, res) {
				$m[m].find(function (z, data) {
					return res.json(data)
				})
			})
		}
		all = function (m, f) {
			if (!F(f)) {
				f = function (err, data) {
					f.json(data)
				}
			}
			$m[m].find(f)
		}
		$fi = $find = find = function (m, o, f) {
			$m[m].find(o, F(f) ? f : json_(f))
		}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
		$f1 = f1 = function (m, o, f) {
			if (!F(f)) {
				f = function (err, data) {
					f.json(data)
				}
			}
			$m[m].findOne(o, f)
		}
		$fId = $fById = fById = function (m, o, f) {
			$m[m].findById(o, F(f) ? f : pjd(f))
		}
		$ALL = ALL = function (route, model) {
			$a.get(route, function (req, res) {
				$m[model].find(function (err, data) {
					return res.json(data)
				})
			})
		}
		$all = all = function (m, f) {
			if (!F(f)) {
				f = function (err, data) {
					f.json(data)
				}
			}
			$m[m].find(f)
		}
		$find = function () {
			var g = G(arguments)
			$m[g.f].find.apply($m[g.f], g.r)
		}
		$findAll = function (m, fn) {
			$find(m, {}, fn)
		}
		$findAllP = function (m, p) {
			$findAll(m, _json(p))
		}
		find = function (m, o, f) {
			if (!F(f)) {
				f = pjd(f)
			}
			$m[m].find(o, f)
		}
	}
	
	function recent() {
		$recent = rec = function (m, criteria, fn) {
			var o = criteria
			$m[m].fi(o).so({dt: -1}).execFi(F(fn) ? fn : function (z, da) {
				fn.j(da)
			})
		}
		$recent1 = rec1 = function (a, b, f) {
			$m[a].f1(b).so({dt: -1}).execFi(f)
		}
	}
	
	$cr = $create = create = function (m, q, p) {
		$m[m].create({
					un: q.un, content: q.body.content
				}, _json(p)
		)
	}
	$crP = $createP = createP = function (a) {
		$a.PO('/' + a, function (q, p) {
			create(a, q, p)
		})
	}
	$cre = cre = function (m, o, f) {
		if (!F(f)) {
			f = pjd(f)
		}
		$m [m].create(o, f)
	}
//rm
	$rmId = $rmById = rmById = function (m, i, f) {
		if (O(i)) {
			i = i._id
		}
		if (!F(f)) {
			f = pjd(f)
		}
		$m[m].findByIdAndRemove(
				i,
				f
		)
	}
	$rm = $remove = remove = function (m, o, f) {
		$m[m].remove(o, f)
	}
	rmById = function (m, i, f) {
		if (O(i)) {
			i = i._id
		}
		if (!F(f)) {
			f = pjd(f)
		}
		models[m].findByIdAndRemove(
				i,
				f
		)
	}
	remove = function (m, o, f) {
		models[m].remove(o, f)
	}
	/*$js = function (p, da) {
	 p.j(da)
	 }
	
	 _pFn = function (p, met) {
	 return function (z, da) {
	 p[met](da)
	 }
	 }
	
	 _js = _json = function (p) { return _pFn('json') }
	 */
	create = function (model, q, p) {
		models[model].create(
				{un: q.un, content: q.body.content},
				function (z, da) {
					p.j(da)
				}
		)
	}
	createP = function (a) {
		$a.post('/' + a, $w.u, function (q, p) {
			create(a, q, p)
		})
	}
	cre = function (model, o, f) {
		if (!F(f)) {
			f = pjd(f)
		}
		models[model].create(o, f)
	}
}
