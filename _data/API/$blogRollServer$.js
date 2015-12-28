 
$S= String
BlogSchema = new $mg.Schema({
	author:$S, title: $S, url: $S})
$mg.model('blog', BlogSchema)
Blog = $mg.model('blog')
//$l('setting routs..')

$a.get('/api/blogs', function (q, p) {
	Blog.find(function (z, docs) {
		_.e(docs, function (item) {
			$l('got request for _id: ' + item._id)})
		p.send(docs)
	})
})

$a.post('/api/blogs', function (q, p) {
	// $l('recieved post request') 
	// for (var key in q.body) {$l(key + ': ' + q.body[key])}
	var blog = new Blog(q.body)
	blog.save(function (z, doc) {p.send(doc)})
})


$a.delete('/api/blogs/:id', function (q, p) {
	var id = q.params.id
	var jsOb= {_id: id}
	Blog.remove(jsOb, function (z, d) {
		p.send(jsOb)
	})
})


$a.put('/api/blogs/:id', function (q, p) {$l('a.put')
	Blog.update({_id: q.params.id}, q.body, function (z, doc) {
		p.send({_id: q.params.id})
	})
})

//$l('set: get post delete put')
 