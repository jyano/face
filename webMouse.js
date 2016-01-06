$L('upStart','downEnd','move')
function upStart() {
	$.mu = function (fn) {
		$('body').on('mouseup', fn);
		return $
	}
	$.mu_ = function (fn) {
		$('body').off('mouseup', fn);
		return $
	}
	$.ts = function (fn) {
		$('body').on('touchstart', fn);
		return $
	}
	$.ts_ = function (fn) {
		$('body').off('touchstart', fn);
		return $
	}
	$.U=   function (fn) {return $.mu(fn).ts(fn)}
	$.U_ = function (fn) {
		return $._mu(fn)._ts(fn)
	}
}

function downEnd(){
	 
	 
	$.md =  function (fn) {
		$('body').on('mousedown', fn);
		return $
	}
	$.md_ = function (fn) {
		$('body').off('mousedown', fn);
		return $
	}
	$.te = function (fn) {
		$('body').on('touchend', fn);
		return $
	}
	$.te_ = function (fn) {
		$('body').off('touchend', fn);
		return $
	}
	
	$.D =  function (fn) {return $.md(fn).te(fn)}
	
	$.D_ = function (fn) {return $.md_(fn).te_(fn)}
}

function move(){
 
	$.mm =  function (fn) {
		$('body').on('mousemove', fn);
		return this
	}
	
	$.mm_ = function (fn) {
		$('body').off('mousemove', fn)
		return $
	}

	$.tm =  function (fn) {
		$('body').on('touchmove', fn)
		return $
	}

	$.tm_ = function (fn) {
		$('body').off('touchmove', fn);
	return this
}
	
	$.M =  function (fn) {
		return $.mu(fn).tm(fn)
	}
	
	$.M_ = function (fn) {
		return $.mu_(fn).tm_(fn)
	}
}

function clicks() {
	$.off = function () {
		var dc = $(document)
		dc.off.apply(dc, arguments)
		return $
	}
	$.$ = function (f) {
		return $(document).on('click', _v(f))
		/*
		 $.$=function(){
		 var b=$('html')
		 b.click.apply(b, arguments)
		 return $
		 }*/
	}

	
	$.click = m$ = function (f) {
		return $(document).on('click', _v(f))
	}
	$.dblclick = m$$ = function (f) {
		return $(document).on('dblclick', _v(f))
	}
	$.fn.mCl = $.fn.cl = $.fn.$ = function (fn) {
		return this.click(fn)
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.fn.xPrp = function () {
		this.on('mousedown', function (e) {
			e.stopPropagation()
		})
		return this
	}
}

$.on = function () {
	var dc = $(body) // document ???
	dc.on.apply(dc, arguments)
	return $
}

$.$$ = function (f) {
	return $(body).on('dblclick', _v(f)) // document??
	//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}


function worldTouch() {$.ts(function (e) {w._mD = 1
		$mXY(e)
		$.touchmove($mXY)
		function $mXY(e) {
			$l('mXY')
			var touch = e.originalEvent.touches[0]
			mX = (touch.clientX - w.x) // / 30
			mY = (touch.clientY - w.y) // / 30
		}
	})
	$.te(function () {
		w._mD = 0
	})
}

$.fn.mU = function (l) {
	var q = this
	q.mouseup(function (e) {
		l(e.clientX, e.clientY)
	})
	return q
}
	
function short(){
	$.oMM = function (fn) {
		$.mm(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.oMD = $.fn.mD = function (fn) {
		$.md(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
 
	$.oMU = function (fn) {
		$.mu(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	
}