$a.PO('/newObj',   function (q, p, n) {
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

$a.G('/objects',   function (q, p, n) {
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
 