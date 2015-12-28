module.exports=function(){

    $a.get('/testBook',function(req, res, n){

        res.json([

            {t:'sss', iD:false},
            {t:'sfs', iD:true},
            {t:'ssass', iD:false},
        ])

    })

    //book
    $a.get('/books', $w.user, function(q,p,n){
        Book.find({author: q.I})
            .populate('author').execFind(
            function(z,bs){p.j(bs)})})
    $a.get('/chapters',$w.user,function(q,p,n){
        Chapter.find({book:q.q.b},
            function(z,ch){p.j(ch)})})
    $a.get('/pages',$w.user,function(q,p,n){
        Page.find({chapter:q.q.c},
            function(z,ch){p.j(ch)})})
    $a.post('/newBook',$w.user,function(q,p,n){$l(bk={name:q.b.n,author:q.I})
        Book.create(bk,
            function(z,b){
                $l(z)
                p.j(b)})})
    $a.post('/delBook',  $w.user,function(req, res, n){

                $l(req.body)

        Book.findByIdAndRemove(req.body.book,
            function(err, data){

                res.json(data)

        })

    })
    $a.post('/delChapter',  $w.user,  function(req,res,n){

            $l(req.body)

            Chapter.findByIdAndRemove(req.body.content,
                function(err,data){

                   res.json(data)

                })

        })
    $a.post('/newChapter',$w.user,function(q,p,n){
        $l(ch={title:q.b.t,book:q.b.b})
        Chapter.create(ch,function(z,c){p.j(c)})})
    $a.post('/newPage',$w.user,function(q,p,n){
        $l(pg={
            name:q.b.n, chapter:q.b.c
        })

        Page.create(pg,
            function(z,c){p.j(c)}
        )})


    //objects
   

}
module.exports = function () {
	$a.get('/testBook', function (req, res, n) {
		res.json([
			{t: 'sss', iD: false},
			{t: 'sfs', iD: true},
			{t: 'ssass', iD: false},
		])
	})
	//book
	$a.get('/books', $w.user, function (q, p, n) {
		Book.find({author: q.I})
				.populate('author').execFind(
				function (z, bs) {
					p.j(bs)
				})
	})
	$a.get('/chapters', $w.user, function (q, p, n) {
		Chapter.find({book: q.q.b},
				function (z, ch) {
					p.j(ch)
				})
	})
	$a.get('/pages', $w.user, function (q, p, n) {
		Page.find({chapter: q.q.c},
				function (z, ch) {
					p.j(ch)
				})
	})
	$a.post('/newBook', $w.user, function (q, p, n) {
		$l(bk = {name: q.b.n, author: q.I})
		Book.create(bk,
				function (z, b) {
					$l(z)
					p.j(b)
				})
	})
	$a.post('/delBook', $w.user, function (req, res, n) {
		$l(req.body)
		Book.findByIdAndRemove(req.body.book,
				function (err, data) {
					res.json(data)
				})
	})
	$a.post('/delChapter', $w.user, function (req, res, n) {
		$l(req.body)
		Chapter.findByIdAndRemove(req.body.content,
				function (err, data) {
					res.json(data)
				})
	})
	$a.post('/newChapter', $w.user, function (q, p, n) {
		$l(ch = {title: q.b.t, book: q.b.b})
		Chapter.create(ch, function (z, c) {
			p.j(c)
		})
	})
	$a.post('/newPage', $w.user, function (q, p, n) {
		$l(pg = {
			name: q.b.n, chapter: q.b.c
		})
		Page.create(pg,
				function (z, c) {
					p.j(c)
				}
		)
	})
	//objects
	$a.post('/newObj', $w.user, function (q, p, n) {
		var o = {
			t: q.b.t,
			u: q.u,
			c: '',
			i: []
		}
		$l(o)
		MC.connect(mUrl,
				function (z, db) {
					if (z)throw z
					var cl = db.collection('objs')
					cl.insert(o, function () {
					})
					// {name:'rigo', game:'shmigo'},
					// {name:'jason',   game:'shmason',  kids:[{s:0},{s:1}]   },
					// cl.remove({},
					// function(z,d){
					//  cl.count(function(z,c){l('count: '+c)})
					// cl.find({  name:'jason'  })
					// cl.update({name:'jason'}, {$set: {a:{name:'ya',game:'na'}}},function(z,r){
					// .toArray(function(z,r){  l(r); db.close()  })
					// })
				})
	})
	$a.get('/objects', $w.user, function (q, p, n) {
		MC.connect(mUrl,
				function (z, db) {
					if (z)throw z
					var cl = db.collection('objs')
					cl.find({u: u}).toArray(function (z, r) {
						l(r);
						p.j(r)
						db.close()
					})
					// })
				})
	})
	//dirtpage
	$a.get('/messages', function (q, p, n) {
		var topic = q.params['topic']
		console.log(
				topic
		)
		$m['Message'].find({},
				function (err, messages) {
					if (err) {
						console.log(err)
					}
					console.log(messages.length)
					p.j(messages)
				})
	})
	$a.post('/messages', function (q, p, n) {
		var topic = q.body.topic
		console.log(topic)
		var message = q.body.message
		console.log(message)
		$m['Message'].create(
				{topic: topic, message: message},
				function (err, message) {
					p.j(message)
				})
	})
	$a.get('/topics/:topic', function (q, p, n) {
		var topic = q.params['topic']
		console.log(
				topic
		)
		$m['Message'].find({topic: topic},
				function (err, messages) {
					if (err) {
						console.log(err)
					}
					console.log(messages.length)
					p.j(messages)
				})
	})
}


function booksExample(){
	aaron = new Book({name: 'Aaron'})
	aaron.save(function () {
		chapter1 = new Chapter({
			chapterTitle: "Once upon",
			book: aaron._id
		})
		chapter1.save()
	})
	Chapter.findOne({chapterTitle: 'Once upon'}).populate('book').exec(function (z, s) {
		$l('The creator is %s', s.book.name);
	})
	Chapter.findOne({chapterTitle: /timex/i}).populate('book', 'name').exec(function (z, s) {
		$l('The creator is %s', s.book.name)
		$l('The creators age is %s', s.book.age)
	})
	Chapter.find().populate('fans book').exec()
	Chapter.find().populate('fans').populate('book').exec()
	Chapter.find().populate({
		path: 'fans', match: {age: {$gte: 21}},
		select: 'name -_id', options: {limit: 5}
	}).exec()
	aaron.chapters.push(chapter1);
	aaron.save(callback)
	Book.findOne({name: 'Aaron'}).populate('chapters').exec(function (z, p) {
		$l(p)
	})
	Chapter.find({
		book: aaron._id
	}, function (z, s) {
		$l('The chapters are an array: ', s)
	})
	guille = new Book({name: 'Guillermo'})
	guille.save(function (z) {
		s.book = guille;
		$l(s.book.name)
		chapter.save(function (z) {
			Chapter.findOne({chapterTitle: /timex/i}).populate({path: 'book', select: 'name'}).exec(function (z, s) {
				$l('The creator is %s', s.book.name)
			})
		})
	})
}
$a.G('/book', function (q, p, nx) {
	$m.post.find({un: q.un}, _json(p)) //recent?
})
$a.PO('/newBook', function (q, p, nx) {
	$m.status.create({
				un: q.un,
				title: q.body.title,
				content: q.body.content
			},
			_json(p))
})
//post a user's item
$a.PO('/item', function (q, p, nx) {
	$m.topic.findOne({topic: q.body.topic}, function (z, da) {
		da.items.push({
			topic: q.body.content,
			s: 0
		})
		da.save(_json(p))
	})
})
//post a user's sort  //should refernce a parent sort?!  :)
$a.PO('/sort', function (q, p) {
	$m.sort.create({
		un: q.un, t: q.body.c
	}, _json(p))
})
$a.G('/sort', function (q, p) {
	$m.sort.find({un: q.un}, _json(p))
})
function N$(z, next) {
	if (z) {
		next(z)
	}
}
function bookByUser(user, fn) {
	$m.book.find({user: user}, fn)
}
function $findOneBook(ob, fn) {
	$m.book.findOne(ob, fn)
}
Midware.Books = Midware.B = function (q, p, next) {
	bookByUser(q.I, function (z, bks) {
		N$(z, next)
		if (!bks) {
			'no bk!'
		}
		p.lc.bks = bks
		next()
	})
}
Midware.bk = Midware.bk = function (q, p, next) {
	$findOneBook({u: q.I, title: q.p.t}, function (z, bk) {
		N$(z, next)
		p.lc.bk = bk
		if (q.params.n) {
			var c = p.lc.n = bk.c[n]
		}
		if (p.params.h) {
			p.lc.h = c[n][h]
		}
		next()
	})
}
 
 