$a.get('/admin/allUsers', function (q, p) {
	User.find(function (z, users) {
		if (z) {
			$l('z')
		}
		else {
			$l(JSON.stringify(users))
			p.send(users)
		}
	})
})

$a.get('/admin/addRndUser', function (q, p) {
	$l('addRndUser')
	var mockUser = {
		un: 'larry' + R(1000000),
		pw: 'password' + R(100)
	}
	$l('new user: ' + mockUser.un)
	User.create(mockUser, function (z, user) {
		if (z) {
			$l("z")
		}
		p.send(user)
	})
})
