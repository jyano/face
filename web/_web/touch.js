//prevent iphone/ipad default scrolling
$(function () {
	$('body').on('touchmove', function (e) {
		e.preventDefault()
	})
})
function touch() {
	function hammer() {
		HAMMER = function () {
			z()
			d = $divA().w(100).h(100).c('r').a().id('hammerdrag')
			var hammertime = new Hammer(d.el, {})
			// hammertime.on('pan', function(ev) {   console.log(ev);  d.left(d.left()+1  ) })
			hammertime.on('panright', function (ev) {
				// alert('pan')
				console.log(ev);
				d.left(d.left() + 1
				)
			})
			hammertime.on('panleft', function (ev) {
				// alert('pan')
				console.log(ev);
				d.left(d.left() - 1
				)
			})
		}
		HAMMER1 = function () {
			z()
			d = $div().w(100).h(100).c('r').a().id('hammerdrag')
			var hammertime = new Hammer(d.el, {})
			hammertime.on('pan', function (ev) {
				alert('pan')
				console.log(ev);
			})
			hammertime.get('pan').set({direction: Hammer.DIRECTION_ALL});
			c = $can().a()
			c.can.addEventListener('touchmove', function (ev) {
				$l('touchmove')
				e = ev
			})
			Hammer(c.can).on('drag', function () {
				alert('drag')
			})
			hammertime = new Hammer(c.can, {})
			hammertime.on('pan', function (ev) {
				c.x(c.x() + 10)
				console.log(ev)
			})
			//By default it adds a set of tap, doubletap, press, horizontal pan and swipe, and the multi-touch pinch and rotate recognizers. The pinch and rotate recognizers are disabled by default because they would make the element blocking, but you can enable them by calling:
			hammertime.get('pinch').set({enable: true});
			hammertime.get('rotate').set({enable: true});
			hammertime.on('pinch', function (ev) {
				alert('pinch')
			})
			ctx = c.can.getContext('2d')
		}
	}
	
	TOMAKETOUCHWORKAGAIN = function () {
		
		
		
		//  w._mouseJoint = null //  w._mouseIsDown = false
		w.mouseJoints()
		$.touchstart(function (e) {
			w._mouseIsDown = true
			recordMouseCoords(e)
			$.touchmove(recordMouseCoords)
			function recordMouseCoords(e) {
				var touch = e.originalEvent.touches[0]
				mX = (touch.clientX - w.x) / 30
				mY = (touch.clientY - w.y) / 30
			}
		}).touchend(function () {
			w._mouseIsDown = false
		})
		setInterval(function () {//handleMouseJoints()
			w.draw(1 / 60)
			if (F(ops.cb)) {
				ops.cb()
			}
			w.stage.update()
		}, 1000 / 60)
	}
//J.Touch.enable(st);
	touchEnable = function (s) {//important for ipad
//move this onto stage itself
		cjs.Touch.enable(s);
		return s
	}
}
$(function () {
	$('body').on('touchmove', function (e) {
		e.preventDefault()
	})
})
touchDrg = function (element) {
	var q = $b(qq(element).q).css({position: 'absolute'}).on('touchstart',
			function (e) {
				$l('touchstart')
				var offset = $(this).offset(),
						deltaX = e.originalEvent.touches[0].pageX - offset.left,
						deltaY = e.originalEvent.touches[0].pageY - offset.top
				$l(deltaX + ' : ' + deltaY)
				$('html').on('touchmove', function (e) {
					$l('touchmove')
					q.css({
						left: e.originalEvent.touches[0].pageX - deltaX,
						top: e.originalEvent.touches[0].pageY - deltaY
					})
				})
						.on('touchend', function () {
							$l('touchstop');
							$(this).off()
						})
			})
	return qq(element)
}
TOUCHSTART = function () {
	z()
	div = $.div('red', 100, 200).A()
	touchDrg(div)
}
EASELTOUCH = function () {
	z()
	stage = cjs.stage(500).tick().A()
	//this lets it work on apple !!
	createjs.Touch.enable(stage)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	$.div('red', 10000, 10).A()
}
//prevent iphone/ipad default scrolling
$(function () {
	$('body').on('touchmove', function (e) {
		e.preventDefault()
	})
})
touchDrg = function (element) {
	var q = $b(qq(element).q).css({position: 'absolute'})
			.on('touchstart',
			function (e) {
				$l('touchstart')
				var offset = $(this).offset(),
						deltaX = e.originalEvent.touches[0].pageX - offset.left,
						deltaY = e.originalEvent.touches[0].pageY - offset.top
				$l(deltaX + ' : ' + deltaY)
				$('html').on('touchmove', function (e) {
					$l('touchmove')
					q.css({
						left: e.originalEvent.touches[0].pageX - deltaX,
						top: e.originalEvent.touches[0].pageY - deltaY
					})
				})
						.on('touchend', function () {
							$l('touchstop');
							$(this).off()
						})
			})
	return $(element)
}
TOUCHSTART = function () {
	$.x('x')
	div = $.d('red', 100, 200).A()
	touchDrg(div)
}
EASELTOUCH = function () {
	z()
	stage = cjs.stage(500).tick().A()
	//this lets it work on apple !!
	cjs.Touch.enable(stage)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	$.d('red', 10000, 10).A()
}
touchDrg = function (element) {
	var q = $b(qq(element).q).css({position: 'absolute'}).on('touchstart',
			function (e) {
				$l('touchstart')
				var offset = $(this).offset(),
						deltaX = e.originalEvent.touches[0].pageX - offset.left,
						deltaY = e.originalEvent.touches[0].pageY - offset.top
				$l(deltaX + ' : ' + deltaY)
				$('html').on('touchmove', function (e) {
					$l('touchmove')
					q.css({
						left: e.originalEvent.touches[0].pageX - deltaX,
						top: e.originalEvent.touches[0].pageY - deltaY
					})
				})
						.on('touchend', function () {
							$l('touchstop');
							$(this).off()
						})
			})
	return qq(element)
}
TOUCHSTART = function () {
	z()
	div = $.div('red', 100, 200).A()
	touchDrg(div)
}
EASELTOUCH = function () {
	z()
	stage = cjs.stage(500).tick().A()
	//this lets it work on apple !!
	createjs.Touch.enable(stage)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	stage.bm('me', SL)
	$.div('red', 10000, 10).A()
}