$a.G('/myStatus', function (q, p) {
	$m.user.findOne({un: q.un}, function (z, da) {
		p.send(da.status || 'no status')
	})
})
$a.PO('/status', function (q, p) {
	q.user.status = q.body.text
	q.user.save(function () {
		return 'saved!'
	})
})
$a.PO('/changeStatus', function (q, p) {
	q.user.status = q.body.status
	q.user.save(function (z, user) {
		p.json(user.status)
	})
})
 