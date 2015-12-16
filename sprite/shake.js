rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}

 
