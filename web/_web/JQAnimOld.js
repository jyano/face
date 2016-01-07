anim = function (o) {
	o = o || {}
	return {
		u: o.u || 'chicks', n: o.n ||
		1, w: o.w || 64, r: o.r || 60, c: o.c ||
		0, l: o.l || false
	}
}
an = function (q, a) {
	if (q.han) {
		_.xI(q.han)
	}
	if (a.u) {
		q.bi(a.u)
	}
	if (a.n > 1) {
		q.han = _.sI(
				function () {
					a.c++
					if (!a.l && a.c > a.n) {
						_.xI(q.han);
						q.han = false
					}
					else {
						a.c %= a.n
					}
					q.sFr(a)
				}, a.r
		)
	}
}