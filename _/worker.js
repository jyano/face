//workers
jsBlob = function (f) {
	return new Blob(['(' + f.toString() + ')()'], {
		type: "text/javascript"
	})
}
function location() {
	$loc = function () {
		$w.location = $w.location// = rl
	}
	$rl = function () {
		location.reload(true) // = r
	}
	loc = $w.location
	loc.h = loc.href
	loc.hn = loc.hostname
	loc.ha = loc.hashn
	loc.H = loc.host
	loc.p = loc.port
	loc.pn = loc.pathname
	loc.P = loc.protocol
	loc.s = loc.search
	loc.rl = loc.reload
	loc.H = loc.host
	loc.rp = loc.replace
	loc.a = loc.assign
}
wrk = function (a) {
	cou = function (a) {
		return $w.URL.createObjectURL(a)
	}
	a = cou(jsBlob(a))
	var g = G(arguments),
			w = g.P ? new Worker(a) : new sharedWorker(a)
	w.t = w.terminate
	w.pm = w.postMessage
	w.m = function (f) {
		w.onmessage = f
	}
	return w
}
work = function () {
	w = wrk(function () {
		postMessage('hi')
	})
	w.m(function (e) {
		$l('Worker said: ' + e.data)
	})
}