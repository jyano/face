meSprite = function () {
	return $sprite(SS).XY(10).drag()
}
SPRITE = function (sprite) {
	sprite = $sprite(sprite || SS).XY(10).drag()
	stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
	stage.A(sprite)
	controls = {
		jump: function () {
			sprite.gotoAndPlay('jump')
		},
		explode: function () {
			sprite.gotoAndPlay('explode')
		},
		spin: function () {
			sprite.gotoAndPlay('spin')
		},
		stop: function () {
			sprite.stop()
		},
		play: function () {
			sprite.play()
		}
	}
	$.div('yellow', 460, 89).css({
		position: 'absolute',
		top: 200,
		left: 300,
		padding: 20,
		opacity: .9
	}).A().drag().A(
			$.span(' '),
			$.button('spin', function () {
				controls.spin()
			}), $.span(' '),
			$.button('jump', function () {
				controls.jump()
			}), $.span(' '),
			$.button('explode', function () {
				controls.explode()
			}), $.span(' '),
			$.button('play', function () {
				controls.play()
			}), $.span(' '),
			$.button('stop', function () {
				controls.stop()
			}), $.span(' '),
			$.button('meta', function () {
				SPRITE()
			})
	)
	s = sprite
	return controls
}
SPRITE2 = function () {
	stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),
	stage.A(sprite = $sprite(SS).XY(10).drag())
}
