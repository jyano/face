g('/user', function (q, p) {
	Ur.fi(p.daFn($user))})
G('user/:un', function (q, p) {
	Ur.f1(
			q.un_(), 
			
			p.daFn($user))
	p.j($user(user)) 
})

$post('/user', function (q, p, nx) {

	Ur.cr(q.b, function (z, user) {
		 	
		 	q.ss.un = user.un
		 	
		 	q.ss.sv(function () {
			    p.js(user.un)
		    })
			    
	})
			    

}) 


$a.de('/user', function (q, p) {
	Ur.rm(q.b, _json(p))})
$user = function (o) {if (A(o)) {

	return _.m(o, $user)}
	return {
		id: o.id,
		un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status' }
		
}