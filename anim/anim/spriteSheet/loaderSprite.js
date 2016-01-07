Sp = spriteQLoader = function (sS, fn, st) {
	return Ql({
		manfifest: makeManifest(sS),
		complete: function (i) {
			var sp = $Sp($SS(sS))
			if (fn) {
				fn(sp)
			}
			if (st) {
				st.A(sp)
			}
		}
	})
}
