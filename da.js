oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
$df = {}
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d.cn = b2d.controls = {}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
/*
 //will set cols unless you pass in 0
 if(o.c==0){o.c=null}
 if(o.c==00){o.c=null;o.C=null}
 if(o.c=='*'){o.c=$r()}
 if(o.c=='**'){o.c=$r();o.C=$r()}
 o.c =o.c||'z'
 o.C =o.C||'w'
 o.l = _.tN(o.l,4)
 o.c1 = o.c1||'z'
 o.c2 = o.c2||'w'
 o.s1= _.tN(o.s1)
 o.s2= _.tN(o.s2,1)
 //
 o.x1 = _.tN(o.x1)
 o.y1 = _.tN(o.y1)
 o.x2 =_.tN(o.x2);
 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
 o.r1=_.tN(o.r1)
 o.r2=_.tN(o.r2,200)
 // o.i image
 //o.k kind
 // o.p  layer position


 //o.bm//o.bM
 //o.g gradient

 //o.m mass
 //o.t type
 // o.v = o.v || [] //verts
 //o.X
 //o.z clr
 */
$pt = {
	dD: _pt(bx.DD),
	v: _pt(bx.Vec2),
	b: _bPt('B')
}
/// clip ///
$pt.pD = gpcas.geometry.PolyDefault.prototype//////////////////
$pt.ps = gpcas.geometry.PolySimple.prototype/////////////////////////
//// canvas ////
$pt.c = HTMLCanvasElement.prototype
$pt.x = ctx = xx = CanvasRenderingContext2D.prototype
$pt.xGr = CanvasGradient.prototype
test = function () {
	$pt.xGr({
		a: function () {
		}
	})
}
$P = function () {
	bb = Backbone
	md = bb.Model.prototype
	vw = bb.View.prototype
	rt = bb.Router.prototype
	cl = bb.Collection.prototype
}
h = $pt.h = cjs.Shape.prototype
pastNames = {}
pastNames.f = {
	_pts: ['_vs'],
	pts: ['vs', 'points', 'verts', 'vertices'],
	wPts: ['f.wVerts', 'f.V'],
	wPtsA: ['f.wV'],
	wPtsGP: ['tGP', 'gPolyWorldVerts'],
	GP: ['tGP', 'gPolyWorldVerts']
}
pastNames.b = {
	GP: ['b.wPolygon'],
	 lGP: ['polygon'],
	pts: ['points', 'ps'],
	ptsGP: ['verts'],
	wPtsGP: ['gPolyVerts', 'wV', 'vs', 'gPolyVerts'],
	wPts: ['wVerts'],
	rtWPts: ['V', 'rotWorVerts'],
	rtPts: ['rotatedVerts', 'rtVs', 'rV']
}
Cols = gpc.Cols = ['r', 'g', 'o', 'B'];
cols2 = gpc.cols2 = ['r', 'g', 'b', 'y']
col = gpc.col = "rgba(255, 0, 0, 0.1)"
cols = gpc.cols = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
gpc.ops = ['difference', 'intersection', 'union', 'xor']
window.b2d = window.b2d || {}
$eM = {}
$eM.fixts = function () {
	return w.D(100, 100, [
		[50, 200], //rect
		[100, 200, 100],  //circle shifted to the right by 100
		[100, 100, 300, 100], //rect shifted to the right by 100
		$cF(42),
		$rF(200, 100),
	])
}
//entity manager
$eM.pFs = function () {
	return w.D(500, 400, [
		$pF(20, 20, -100, 50, 60),
		$pF(100, 120, 0, 0, 100),
		$pF(100, 20),
		$pF(10, 300)
	])
}
$eM.compound = b2d.compoundShape = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(60, 30, 40),//$rF(60, 30, 0, 0, 40),
		$rF(120, 30, 29),//	$rF(120, 30, 0, 0, 29),
		$rF(60, 10, 0, 50, 60),
		$rF(84, 10, 15, 80, -120)])
}
$eM.compound2 = b2d.compoundShape2 = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(20, 20),
		$rF(20, 10, 10),
		$rF(40, 10, 50, 0, 45),
		$rF(84, 10, 15, 80, -120),
		$rF(60, 10, 0, 50, 60)
	])
}
$eM.star = b2d.compoundStar = function () {
	return w.A(
			$dB(300, 200), [
				$rF(10, 10),
				$cF(20),
				$rF(4, 80, 300, 300, 135),
				$rF(4, 80, 45),
				$rF(4, 80, 100, 0, 90),
				$rF(4, 80, 180)]
	)
}
//lets study how to make a circle
BALS = function () {
	W().G(50)
	w.addTenBalls();
	w.addMe();
	w.addMe();
	w.addMe()
}
// meet entity manager
//just for namepacing
//aF is great.. it will let u simply pass in an 
//array of arrays
// can use it with w.D.. example:
$eM.tri = function () {
	return w.D(400, 400, [
		// this does NOT work currently: [[230, 30], [20, 140], [10, 10]]
		//must use this
		$aF([230, 30], [20, 140], [10, 10])
	])
}
//*** NOTE: in b2dWEB use CW, not CCW
$show = function (what) {
	W()
	if (!S(what)) {
		return alert('must pass string')
	}
	fn = $eM[what]
	if (!fn) {
		return alert('$eM dont have that')
	}
	if (!F(fn)) {
		return alert('$eM have that but must be fn')
	}
	b = $eM[what]()
}
//must be LAST! really now ??
//b2d.triangleFixt =   $aF[-100,0], [0,-100 ], [100,0] )
//b2d.triangleFixt2 =  $aF[-200,0],[0,-200],[200,0])
//this is a premade fixture
//b2d.triangle3 = $aF([-100, 0], [0, -50], [400, 0])
b2d.fricky = function () {
	return w.A($dB(300, 200),
			[
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).f(0).r(0),
				$pF(20, 40, 0, 0, 180).f(0).r(0)])
}
b2d.bouncy = function () {
	return w.A($dB(300, 200), [$pF(10, 10),
		$pF(20, 40, 0, 0, 90).r(.9).f(1),
		$pF(20, 40, 0, 0, 180).r(.9).f(1)])
}
b2d.massy = function () {
	return w.A($dB(300, 200),
			[$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(2).f(1),
				$pF(20, 40, 0, 0, 180).d(2).f(1)])
}
b2d.fluffy = function () {
	return w.A(
			$dB(300, 200), [
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(.1).f(1),
				$pF(20, 40, 0, 0, 180).d(.1).f(1)]
	)
}
verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
guyInBed = [[30], [20, 30, 30], [100, 30]]
dick = [[50, 300, 0, -100], [50, 100, 150], [50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]
turtle2 = [['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]], ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]], ['yellow', [-50, 10], [-50, -10], [-40, -10], [-40, 10]], ['yellow', [-10, 10], [-10, -10], [0, -10], [0, 10]]]
dick = [
	[50, 300, 0, -100],
	[50, 100, 150],
	[50, -100, 150]
]
guyInBed = [
	[30],
	[20, 30, 30],
	[100, 30]
]
cjs.somePolyFixt = [
	[
		[-100, 0], [0, -100],
		[100, 0], [60, 50]]]
cjs.compoundShape = [
	[50, 10],
	[60, 30, 0, 0, 40],
	[120, 30, 0, 0, 29],
	[60, 10, 0, 50, 60],
	[84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
	[50, 10],
	[20, 20],
	[20, 10, 0, 0, 10],
	[40, 10, 50, 0, 45],
	[84, 10, 15, 80, -120],
	[60, 10, 0, 50, 60]
]
cjs.compoundStar = [
	[10, 10],
	[20],
	[4, 80, 10, 30, 135],
	[4, 80, 0, 0, 45],
	[4, 80, 100, 0, 90],
	[4, 80, 0, 0, 180]
]
v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
turtle = [
	['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
	, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
	, ['yellow',
		[-50, 10], [-50, -10], [-40, -10], [-40, 10]
	]
	, ['yellow',
		[-10, 10], [-10, -10], [0, -10], [0, 10]
	]
]
pin = [
	['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
	['w', 8, 0, -75],
	['w', 8, -20, 20],
	['w', 8, 20, 20]
]
p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
]
$vs = {}
$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
$vs.witch = [[[-40, -20], [0, -100], [50, 25]]]
$vs.CoolPlat = [['g', 50, 200], ['o', 200, 50], ['r', 100, 100]]
sqr = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
combo = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
flatTri = [[400, 0], [800, 100], [120, 120]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
vs3 = [
	[190, 140],
	[170, 180],
	[160, 160]
]
vs4 = [
	[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
]
tictactoe = [
	[[200, 0], [200, 600]],
	[[400, 0], [400, 600]],
	[[0, 200], [600, 200]],
	[[0, 400], [600, 400]]
]
sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
v = [[-100, 0], [0, -100], [100, 50]]
vs = [
	[[-100, 0], [0, -100], [100, 50]],
	[[-200, 0], [-100, -100], [0, 50]],
	[[0, 200], [0, -200], [400, -300], [400, 300]]
]
cirs = [{r: 150}, {x: 200, r: 150}, [300, 100, 100], [400, 100, 100]]
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
$Mk = function () {
	$mk = function () {
	}
	ipsum()
	mks()
	function mks() {
		$mk.strs = ['wallaby', 'Macropus', 'agilis',
			'Agouti', 'Dasyprocta', 'leporina']
		$mk.Doc = function (title, content) {
			title = title || $mk.l1()
			content = content || $mk.lI()
			return {
				title: title,
				content: content
			}
		}
		$mk.Docs = function (num) {
			var docs = []
			_.t(N(num, 27), function () {
				docs.push($mk.Doc())
			})
			return docs
		}
		$mk.docs = $mk.Docs(12)
		var Doc = $mk.Doc
		$mk.obs = [
			new Doc('title1', 'content1'),
			new Doc('title2', 'content2'),
			new Doc('title3', 'content3'),
			new Doc('title4', 'content4'),
			new Doc('title5', 'content5'),
		]
		$mk.ob = {
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
		$mk.ob = {
			ob: $mk.ob,
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
	}
	
	function ipsum() {
		$mk.lI = function (n) {
			n = N(n, R(40))
			var str = _.sample($mk.strs)
			_.t(n, function () {
				str += ' ' + _.sample($mk.strs)
			})
			return str
		}
		$mk.l1 = function () {
			return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
		}
	}
}
$Sa = function () {
	$sa = function (a, b) {
		if (U(b)) {
			return _.partial($sa, a)
		}
		return _.sample(arguments)
	}
	$sa.S = $sa('')
}
$Sa()
$Mk()
//$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
$mk.$ = function () {
	$s($mk.css)
	return $
}
red = {C: 'r'}
black = {c: 'z'}
displayNone = {display: 'none'}
body = {C: 'z', c: 'w'}
divWrapper = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
divTools = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
username = {'font-size': 20, 'text-decoration': 'underline'}
rightBox = {
	float: 'left', width: '250px',
	'margin-left': '20px', border: '3px solid blue'
}
leftBox = {
	float: 'left', padding: '20px', border: '3px solid red'
}
aFilter = {
	C: 'b',
	c: 'y',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
aFilterHelper = {
	C: 'y',
	c: 'b',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
bucCSS = {$leftbox: leftBox, $rightbox: rightBox}
twtCss = {_un: username, _sts: {}}
CssOb = {
	body: body,
	'.details': displayNone,
	'.active': red,
	'a.filter': aFilter,
	'a.filter:hover': aFilterHelper,
	'div#wrapper': divWrapper,
	'div.tools': divTools,
	'input#searchBox': black
}
JQLScss = {
	// {
	// width:250; // float:left;
	// mar:0;
	// background-color:gray;
	// min-height:240;
	// border-radius:10;
	// padding-bottom:15;
	// }
	'.task-list': {
		w: '250px', float: 'left',
		mar: '0px', C: 'gray', 'min-height': '240px',
		'border-radius': '10px', 'padding-bottom': '15px'
	},
	h3: {'text-align': 'center'},
	'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
	'.task-list input': {h: '30px'},
	'.task-list input[type="button"]': {w: '100px', mar: '5px'},
	'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
	'.td-task > .task-header': {'font-weight': 'bold'},
	'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
	'.td-task > .task-desc': {'font-size': 'smaller'},
	'#delete-div': {
		C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
		'line-height': '75px', 'text-align': 'center'
	}
}
yA = yAr = yanofski = ['y', 'a', 'n', 'o', 'f', 's', 'k', 'i']
uA = usAr = users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
	{'id': 2, 'name': 'Ted', 'last': 'White'},
	{'id': 3, 'name': 'Frank', 'last': 'James'},
	{'id': 4, 'name': 'Ted', 'last': 'Jones'}
]
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
bksArr = [
	{title: 'yaba daba', author: 'wanda'},
	{title: 'clawface', author: 'deez nuts'},
	{title: 'under the knee', author: 'p .qu rstly'}
]
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
initialData = [
	{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
	{name: "Speedy Coyote", sales: 89, price: 190.00},
	{name: "Furious Lizard", sales: 152, price: 25.00},
	{name: "Indifferent Monkey", sales: 1, price: 99.95},
	{name: "Brooding Dragon", sales: 0, price: 6350},
	{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
	{name: "Optimistic Snail", sales: 420, price: 1.50}
]
PLANS = [
	{name: "Mercury", type: "rock"},
	{name: "Venus", type: "rock"},
	{name: "Earth", type: "rock"},
	{name: "Mars", type: "rock"},
	{name: "Jupiter", type: "gasgiant"},
	{name: "Saturn", type: "gasgiant"},
	{name: "Uranus", type: "gasgiant"},
	{name: "Neptune", type: "gasgiant"}
]
availableMeals = [
	{mealName: "Standard (sandwich)", price: 0},
	{mealName: "Premium (lobster)", price: 34.95},
	{mealName: "Ultimate (whole zebra)", price: 290}
]
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
Peep = function () {
	return [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
}
__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}
server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
yada = function (n) {
	n = N(n, 20)
	var str = ''
	_.t(n, function () {
		str += 'yada '
	})
	return str
}
$s.defaults = $s.df = {}
$s.defaults.Bor = {}
$s.defaults.Bor.b = '1px blue border'
$s.d = function () {
	var g = G(arguments), rulesOb
	if (g.O) {
		rulesOb = g.f
	}
	else {
		rulesOb = {}
		rulesOb[g.f] = g.s
	}
	$s('div', rulesOb)
}
$default = function (v, k) {
	return $s.defaults[k] ?
			$s.defaults[k][_.f(v)] :
			null
}