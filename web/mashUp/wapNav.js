$nav = Y.nav = function () {
	navbarCollapse = $.nbC().A($.n(
					// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
					$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
					$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
					$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
					$.dd('talk', ['chat', 'universe', 'post']),
					$.dd('social', ['users', 'profiles', 'posts'])
					
					
					//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
			),
			$.nR(
					$.dd('account', ['status', 'profile', 'messages']),
					$.liA('logged: ' + _username),
					$.liA('logout', Y.logOut)
			)
	)
	$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
}//=Y.n