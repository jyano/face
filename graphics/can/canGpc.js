 

CPX = PIXEL = function () {
	c = $.c();
	$Ld(['me'], function (ld) {
		me = ld.get('me')
		c.drawImage(me, 100, 100)
		d = c.gD(100, 100, 500, 500)
		// c.pD(d , 120, 120 )
		zeros = nums = 0
		_.e(d.data, function (d) {
			if (d == 0) {
				zeros++
			} else {
				nums++
			}
		})
		$l('zeros: ' + zeros + ' - nums: ' + nums)
	})
}
CP1 = PIXELTEST = function () {
	c = __C();
	$Ld(
			['me'], function (q) {
				me = q.get('me')
				c.drawImage(me, 100, 100)
				d = c.gD(100, 100, 500, 500)
				// c.pD(d , 120, 120 )
				zeros = 0
				nums = 0
				_.each(
						d.data, function (d) {
							if (d == 0) {
								zeros++
							} else {
								nums++
							}
						}
				)
				$l('zeros: ' + zeros + ' - nums: ' + nums)
			}
	)
}


CVL = function () {
	__C()
	Q(['me'], function (q) {
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}

CLD = CANVASQLOADER = function () {
	__C();
	$Ld(['me'], function (q) {
				me = q.get('me')
				c.drawImage(me, 100, 100)
				c.pD(c.gD(100, 100, 500, 500), 120, 120)
				c.f("red").fr(10, 10, 50, 50)
				imgData = c.gD(10, 10, 50, 50)
				c.pD(imgData, 10, 70)
			}
	)
}

 