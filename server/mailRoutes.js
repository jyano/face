 
$a.G('/gMsg', function (q, p, nx) {
	var o = {}
	o.map = function () {
		emit(
				this.from, {text: this.text, datetime: this.datetime}
		)
	}
	
	o.reduce = function (k, vals) {
		var d
		vals.forEach(function (v) {
			if (!d) {d = $dtMl(  v.datetime,  v.text,  k)}
			else if (v.datetime > d.datetime) {d = $dtMl(   v.datetime,   v.text, k)}
		})
		return d
	}
	
	Ml.mapReduce(o, function (z, reduction) {p.js(_.m(reduction, _val))
			})
})
 
// get mail FROM User, TO a sp. user
$a.G('/myMailFrom',  function (q, p, nx) {
	Ml.fi({to: q.un, from: q.query.un},
			function (z, da) {
				p.json(da)
			})
})
//get all mail TO ===or==== FROM user
$a.G('/myMailWith',   function (q, p) {
	Ml.fi(
			{
				$or: [
					{to: q.un, from: q.query.un},
					{to: q.query.un, from: q.un}
				]
			},
			function (z, da) {
				p.se(da)
			})
})
$a.G('/sentMail',   function (q, p, nx) {
	$l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))
	models.mail.find({from: q.un}, function (z, da) {
		p.send(da)
	})
})
$a.G('/sentMail0',   function (q, p) {
	var o = {};
	o.query = {from: q.un}
	o.map = function () {
		var o =this
		
		emit(o.to, {
			text: o.text, datetime: o.datetime, from: o.from
		})
	}
	
	o.reduce = function (k, vals) {
		var da
		vals.forEach(function (val) {
			if (!da) {
				da = {
					datetime: val.datetime,
					mail: val.mail,
					to: k,
					from: val.from
				}
			}
			else if (val.datetime > da.datetime) {
				da = {
					datetime: v.datetime, from: val.from,
					mail: val.mail,
					to: k
				}
			}
		})
		return da
	}
	
	Ml.mapReduce(o, function (z, da) {//$l(r)
		// r.find().exec(     function(z,r){   p.j(r)  })
		da = _.m(da, function (v) {return v.value})
		da.so({datetime: 1})
		p.js(da)
	})
})
  
