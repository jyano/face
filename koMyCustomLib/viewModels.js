Gft=Gift = function (gifts) {
	Gift = function (gifts) {
		var vm = this
		vm.gifts = ko.oa(gifts)
		vm.addGift = function () {
			vm.gifts.push({name: "", price: ""})
		}
		vm.removeGift = function (gift) {
			vm.gifts.remove(gift)
		}
		vm.save = function (form) {
			alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
		}
		// To actually transmit to server as a regular form post, write this:
		// ko.utils.postJson($("form")[0], self.gifts)
	}
	var vm = this
	vm.gifts = $oA(gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}
	// To actually transmit to server as a regular form post, write this:
	// ko.utils.postJson($("form")[0], self.gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
}
koTask= koTsk= Task =  function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
List= Lst = function () {
	var lst = this
	lst.tA = $o('')
	lst.all = $oA(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
	lst.sl = $oA(['Hm'])
	lst.A = function () {
		var lst = this
		if (lst.tA() != '' && lst.all.indexOf(lst.tA()) < 0) {
			lst.all.push(lst.tA())
			lst.tA('')
		}
	}
	lst.xSl = function () {
		var lst = this
		lst.all.removeAll(lst.sl())
		lst.sl([])
	}
	lst.srt = function () {
		this.all.sort()
	}
	function alt() {
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
	}
}
Person = Per = function (n, ch) {
	var per = this
	per.n = n
	per.ch = ko.oa(ch)
	per.A = function () {
		per.ch.push('new ch')
	}
}
Twit = function () {
	var vw = this
	vw.twtN = $o('@ex')
	vw.resDa = $o(0)
	vw.clearRes = function () {
		vw.resDa(undefined)
	}
	vw.getTwts = function () {
		var n = vw.twtN();
		vw.resDa({
			topTwts: [{text: n + ':nice'}, {text: n + ':trump'}, {text: n + ':sex'}],
			retrDt: new Date()
		})
	}
}
 
function Ms(ms, vt) {
	var g = G(arguments)
	return {
		ms: ms,
		vt: $o(g.p ?
				'like' : vt || '')
	}
}
Ms = function (m) {
	return {m: $o(m || '')}
}
VM = Feed = function (p) {
	this.ms = $o("Hi");
	this.ms = ko.o("Hi")
	this.feed = new Feed()
	this.feed2 = new Feed()
	this.feed.ms("Ms1")
	this.feed2.ms("Ms2")
	this.ms = ko.o("!")
	this.VM2 = {ms: $o("!")}
	this.somePop = p.smKey
	this.ms = ko.o("Hi");
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.feed.ms("Ms1");
	this.feed2.ms("Ms2");
}
VM.prototype.doSmg = function () {
}
function VM() {
	this.prods = $oA()
}
function Vm(p) {
	var vm = {vt: p.vt || ''}
	vm.like = function () {
		this.vt('like')
	}
	vm.hate = function () {
		this.vt('hate')
	}
	return vm
}
VM.prototype.A = function () {
	this.prods.push(Prod('Prod ' + (this.prods().length + 1)))
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
Prod = function (n, rating) {
//return {n: n, uRatg: ko.o(ratg || null)}
	this.name = n;
	this.userRating = ko.o(rating || null)
}
Feed = function () {
	this.ms = $o('pf!')
}
peep = [
	new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
	new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
	new Per("Charles", ["Cayenne", "Cleopatra"])
]

//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
initialData = [
	{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
	{name: "Speedy Coyote", sales: 89, price: 190.00},
	{name: "Furious Lizard", sales: 152, price: 25.00},
	{name: "Indifferent Monkey", sales: 1, price: 99.95},
	{name: "Brooding Dragon", sales: 0, price: 6350},
	{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
	{name: "Optimistic Snail", sales: 420, price: 1.50}
]
