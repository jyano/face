DIRT = function () {
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))))),
			$.br(),
			$.br()
	)
	ko.b({
		m: ko.oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: ko.oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
KODIRT = function () {
	messages = [
		{
			message: 'zi', score: 100, responses: [
			{
				response: 'good coder',
				comments: [{comment: '..eh'}]
			},
			{response: 'cool girl'}
		]
		},
		{
			message: 'yano',
			score: 3,
			responses: [
				{
					response: 'is cool guy',
					comments: [
						{comment: 'hi'},
						{comment: 'hello'}]
				},
				{response: 'a'},
				{response: 'b'},
				{response: 'fun'}]
		}, {
			message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
		}, {
			message: 'lame', score: 20, responses: [
				{
					response: 'weird', comments: [
					{comment: 'not!!!!1'}]
				},
				{
					response: 'lamer', comments: [
					{comment: 'fuck ya'}]
				}]
		},
		{message: 'rocks', score: 4, responses: []}
	]
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: $oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: $oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
	z()
	p1 = push1
	p2 = push2
	newComment = function (comments, comment) {
		comments.push({comment: comment})
	}
	TextBindingSpan = spb = function (a) {
		return $.span().b('text', a)
	}
	$.d('z').mg(20).fe('m')(
			$.h1().C('y', 'c')(
					TextBindingSpan('message'),
					$.span(' '),
					TextBindingSpan('score'),
					p1($.h2(
							$.input(400),
							$.button('new r')
					)),
					$.h2().feD('responses').C('r').A(
							p1.A(TextBindingSpan('response')),
							p2.A(
									$.h4(
											$.input(400), $.button('new c'))
							),
							$.h4().C('b').feD('comments').A(
									p2.A(
											TextBindingSpan('comment'))))),
			$.br(),
			$.br()
	).A()
	vm = {
		m: $oa(messages),
		responses: $oa([{response: 'one'}, {response: 'two'}])
	}
	ko.applyBindings(vm)
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: $oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: $oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: $oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: $oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}//MASTERPIECE
KOMASTERPIECE = DIRT = function () {
	 
	p1 = push1
	p2 = push2
	newComment = function (comments, comment) {
		comments.push({comment: comment})
	}
	 
	
	$.d().C('z').mar(20).e$('m')(
			$.h1().C('y', 'c').A(
					t$('message'),
					$.sp(' '),
					t$('score'),
					p1.A($.h2().A($.ip(400), $.bt('new r'))),
					
					$.d().e$('responses').C('r').A(
							p1.A(t$('response')),
							p2.A($.h4($.ip(400), $.bt('new c')))),
					$.d().C('b').e$('comments').A(p2.A(t$('comment'))						)),
			$.br(),
			$.br()
	)
	
	   
	ok(vm = {
		m: $oA(messages),
		responses: $oA([{response: 'one'}, {response: 'two'}])
	})

	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}

}
DIRT = function () {
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: ko.oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: ko.oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
DIRT = function () {
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: ko.oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: ko.oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
 
/// 
DIRTPAGE = function () {
	$.x()
	var newMsBox, newTopic, newMs, searchBox
	MsM = Bb.M.e({})
	MsC = Bb.C.e({m: 'MsM'})
	MsView = Bb.V.e({})
	MssView = Bb.V.e({})
	$.h1().A(
			$.a('Dirtpage', '/wap/dirtpage/')
	).A()
	$.dI('content')
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		function loadRes() {
			$.G('topics/' + wappyPam, function (msgs) {
				$('#results').ht($.h5('len: ' + msgs.length))
				_.e(msgs, function (ms) {
					$('#res').A($.h6(ms.ms))
				})
			})
		}
		
		loadRes()
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
}