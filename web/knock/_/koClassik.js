 
	KOEACH = function () {
		format()
		s2(
				_t()(
						thead()(
								tr()(
										th()('First name'),
										th()('Last name')
								)
						),
						tbody().b('E', 'people')(
								tr()(
										td().b('t', 'fn'),
										td().b('t', 'ln'))
						)
				)
		)
		ko.ab({
			people: [
				{fn: 'B', ln: 'Bert'},
				{fn: 'Ch', ln: 'Char'},
				{fn: 'De', ln: 'Dent'}
			]
		})
	}
