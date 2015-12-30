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

