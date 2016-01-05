TWEENART = function (a) {
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	s = $St()
	s.mug(function (b) {
				b.XY(300);
				b.rC(); //centers it's reg point?
				SK(b)
				$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
				s.mug(function (b) {
					b.XY(200);
					b.rC();
					b.WH(200);
					SL(b);
					$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
					s.mug(function (b) {
						b.rC();
						b.XY(600);
						SC(b)
						$Tw([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			},
			EDIT()
	)
}
TWEENART = function (a) {
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	s = $St()
	s.mug(function (b) {
				b.XY(300);
				b.rC(); //centers it's reg point?
				SK(b)
				$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
				s.mug(function (b) {
					b.XY(200);
					b.rC();
					b.WH(200);
					SL(b);
					$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
					s.mug(function (b) {
						b.rC();
						b.XY(600);
						SC(b)
						$Tw([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			},
			EDIT()
	)
}