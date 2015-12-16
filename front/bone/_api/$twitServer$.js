//home and twits are 'controllers'
$S=String

Twit=$mg.model('Twit',{un: $S, sts: $S})
///to get work on client:
//1) url proprty on coll

$a.get('/twits', function (q, p) {
///to get work on client:
//2) coll.fetch (during init)
	Twit.find(function (z, docs) {
		_.e(docs, function (item) {
			$l('got request for _id: ' + item._id)
		})
		if (er) {
			return p.status(500)
					.send({status: 'Failed to find twits!'})}
		p.send(docs)
	})
})
$a.post('/twits', function(q, p) {

///to get work on client:
//2) model.save

	var twit = new Twit(q.body)
	twit.save(function (z, doc) {
		if (er) {
			return p.status(500).send({
				status: p.send(q.body)
			})
		}
		p.send(doc)
	})
	//alt: Twit.create(q.body, function (er, doc) {})
})

$a.delete('/twits/:id', function (q, p) {
	var id = q.params.id
	Twit.remove({_id: id}, function (z, d) {
		p.send({_id: id})
	})
})


$a.put('/twits/:id', function (q, p) {
	Twit.update({_id: q.params.id}, q.body, function (z, doc) {
		p.send({_id: q.params.id})
	})
})


//$a.post('/twits/:id', function (q, p) {})

//https://www.youtube.com/watch?v=hHlqisQeERk
//Michael Yagudaev Introduction to Backbone.js Part 2 - Server-side

//video mins
//num mins of nothing:9 refactor file into routes.js 10 //make home controller

//8:30 restful resource
//12 restful resource on browser
// 12: home controller and RESTFUL
//13:  home controller ACTIONS
/// **** OFFICIAL: START RIGHT AT 13:15/////////////////////////

//13:15 INDEX ACTION
//14:17 CREATE ACTION
//18: FETCH

//END PART 20?
///////////////////////////////
//20:13 LETS ROLL BACK: TALKING ABOUT BBSYNC//////////////////////////
//2220 url method
//2720 NEXT , COME BACK
//3130 sanitize
// 3213 npm undersxore
//update
//3305 client side
//END PART 36
/////////////////////////////////////////////////////////////
// 36: show method 
// 41: router
//4440 define router mets
// 47: define new ct for our twt-details view (in index page)
 //4930 push state = true
 //5020 problem, 2 answers.. 