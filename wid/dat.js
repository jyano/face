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
$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
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