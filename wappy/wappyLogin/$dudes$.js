Dude = $mg.model('Dude', {un: String, pw: String})
$a.post('/login', function (q, p) {
	$l('post /login')
	var creds = q.body
	Dude.findOne(creds, function (err, user) {
		if (err) {
			$l('err: ' + err)
			p.send('err: ' + err)
		}
		else if (user) {
			p.send(user.un)
		}
		else {
			p.send(false)
		}
	})
})
$a.get('/login', function (q, p) {
	p.send('fred')
})
$a.post('/dudes', function (q, p) {
	$l('dudes')
	$l(q.body)
	Dude.create(q.body, function (z, dude) {
		if (z) {
			$l('z')
		}
		else {
			$l(dude)
		}
	})
})
$a.post('/un', function (q, p) {
	$l('un')
	un = q.body.un
	$l('un: ' + un)
	q.session.un = un
	q.session.save(function () {
		$l('q.session: ' + q.session)
		p.send(q.session)
	})
})
