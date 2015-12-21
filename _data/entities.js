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