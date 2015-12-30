//dirtpage
$a.get('/messages', function (q, p, n) {

/*
 var topic = q.body.topic
 console.log(topic)
 var message = q.body.message
 console.log(message)
 $m['Message'].create(
 {topic: topic, message: message},
 function (err, message) {
 p.j(message)
 })
 */
	var topic = q.params['topic']
//	console.log(topic)
	$m['Message'].find({},
			function (err, messages) {
				if (err) {
					//console.log(err)
				}
				//console.log(messages.length)
				p.j(messages)
			})
})
 

$a.get('/topics/:topic', function (q, p, n) {

	var topic = q.params['topic']
	//console.log(topic)
	$m['Message'].find({topic: topic},
			function (err, messages) {
				if (err) {//console.log(err)
				}
				//console.log(messages.length)
				p.j(messages)
			})
})
//create new topic
$a.post('/topic', $w.user, function (req, res) {
	cre('topic', {
				u: req.u, t: req.b.c
			},
			res)
})
//get all topics
// ALL('/topic', 'topic')
//get topic 1 ? by t?
$a.get('/topic', function (req, res) {
	Topic.get(function (err, data) {
		res.json(data)
	})
})
$a.get('/topic1', function (req, res) {
	models.topic.findOne({topic: req.query.topic}, function () {
	})
})
//post vote
$a.post('/vote', $w.user, function (req, res) {
	f1('topic', {t: req.b.t},
			function (err, t) {   // if(q.b.dr=='u'){
				//  var ti = _.map(t.i, function(i){
				//      if(O(i) && i.t==q.b.i){
				//          if(q.b.dr=='u'){i.s=i.s+1}
				//          if(q.b.dr=='d'){i.s=i.s-1}}
				//     return i})
				var ti = _.map(t.i,
						function (i) {
							if (O(i) && i.t == req.b.i) {
								if (req.b.dr == 'u') {
									i.s = i.s + 1
								}
								if (req.b.dr == 'd') {
									i.s = i.s - 1
								}
							}
							return i
						})
				t.i = []
				t.i = ti;
				t.save(
						function (err, data) {
							$l('error ob:');
							$l(err)
							$l('suc ob:');
							$l(data)
							res.j(data)
						}
				)
			})
})