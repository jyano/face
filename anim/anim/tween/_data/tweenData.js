_TW = tweens = {}
_TW.rott = function (a) {
	return $Tw(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
tweens.rott = function (a) {
	return cjs.tween(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
_TW.shakeX = function (a) {
	return $Tw(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
tweens.shakeX = function (a) {
	return cjs.tween(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
_TW.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	$Tw(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
tweens.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	cjs.tween(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
rotateShake = cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
rotateShake = cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
scaleShake = cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
_TW.prod1 = function (a) {
	return $Tw(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
_TW.prod2 = function (a) {
	return $Tw(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
tweens.prod1 = function (a) {
	return cjs.tween(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
tweens.prod2 = function (a) {
	return cjs.tween(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
_TW.rpunch = function (arm) {//arm=arm|| c1.g('arm')
	return $Tw(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.rpunch = function (arm) {
	
	//arm=arm|| c1.g('arm')
	return cjs.tween(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
_TW.lpunch = function (lf) {
	return $Tw(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
tweens.lpunch = function (lf) {
	return cjs.tween(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
