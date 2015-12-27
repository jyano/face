ch$cb = function (bnd) {
	return $.cb().ch$(bnd)
}
$d_ch$cb = $d.ch$cb = function (text, ch$) {
	$.d().A(ch$cb(ch$), text)
}
spCh$Cb = sp_Ch$Cb = function () {
}
ch$cb = function (bnd) {
	return $.cb().ch$(bnd)
}
$d_ch$cb = $d.ch$cb = function (text, ch$) {
	$.d().A(ch$cb(ch$), text)
}
t$ = ok.t$ = t$d = $.d.t$ = function (bd, textVal) {
	return $.sp().t$(bd).A(textVal || '')
}
cl$ = function (bnd, kids) {
	var g = G(arguments)
	var bt = $.bt()
	return bt.A.apply(bt, A(g.s) ? g.s : g.r).cl$(bnd)
}
vs$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).vs$(bnd)
}
v$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).v$(bnd)
}
fc$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).fc$(bnd)
}
tI$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).tI$(bnd)
}
pw$ = function (bnd, kids) {
	var g = G(arguments)
	return $.pw(A(g.s) ? g.s : g.r).tI$(bnd)
}
ch$ = function (bnd) {
	return $.cb().ch$(bnd)
}
ip$ = function (ob) {
	return $.ip().b(ob)
}
d$ = function (ob) {
	return $.d().b(ob)
}
w$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).w$(bnd)
}
Ms = function (a) {
	return $.sp(a)
}
LIK = LIKECOMPONENT = function () {
	ko.cm.register('like', {
		viewModel: function (pams) {
			var vm = this
			vm.val = pams.val
			vm.like = function () {
				vm.val('like')
			}.bind(vm)
			vm.dislike = function () {
				vm.val('dislike')
			}.bind(vm) // i didnt overwrite bind did i?
		},
		
		template: $.sp([
		
			vs$('!val()',
			 ch$('like'),
			  ch$('dislike')
			  ).K("like-or-dislike"),
			vs$('val', 'You', t$('val'), 'it').K('result')
		])[0]
	})
	
	e$('prods', [
		t$('name'),
		$('<like>').at('params', {vote: 'vote'})
	
	
	//cm$('like', {vote: 'vote'})])
	//.at('params', "val: userRating")
	]) //.K("prod")// cm$('like', 'val:op')
//	e$('Msgs', [t$('ms'),
	cl$('Add')
	ok(vm = (function (pmOb) {
		var prods = [
			{n: 'liiick', op: $o(), userRating: 'fsad'},
			{n: 'Garlic', op: $o(), userRating: 'fsad'},
			{n: 'food', op: $o('like'), userRating: 'fsad'},  // This one was already 'liked'
			{n: 'gull', op: $o(), userRating: 'fsad'},
			{n: 'fun', op: $o(), userRating: 'fsad'}
		]
		return {
		
			prods: $oa(prods),
			
			Msgs: $oA([Ms('lick'), Ms('hi'), Ms('haha', '+'), Ms('lame')]),
			
			addMsg: function () {
			
				this.MS.push(Ms('item-' + this.pos()))
			},
			
			prodName: function () {
				return 'item-' + (_.s(this.prods()) + 1)
			},
			
			position: function () {
				return _.s(this.MS()) + 1
			},
			add: function () {
				var prod = {name: 'item-' + (_.s(this.prods()) + 1)}
				this.prods.push(prod)
			}
		}
	})()) //	ok(vm ={prods: $oA([Prod('brd'), Prod('chc'), Prod('sgh', 'like')])})
}


_$_ = function (a) {
	a = a || ''
	return $('<' + a + '>')
}
e$ = function (bnd, kids) {
	var g = G(arguments)
	var sp = $.sp(A(g.s) ? g.s : g.r)
	sp.e$(bnd)
	return sp
}
VoteFns = function (vm, whats) {
	_.e(A(whats) ? whats : [whats], function (what) {
		vm[what] = function () {
			vm.vote(what)
		}
	})
	return vm
}
Prod = function (name, op) {
	return {name: name, op: $o(op)}
}
//	return VoteFns(vm = {vote: pmOb.vote || ''}, ['like', 'hate'])
//can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()
$.mar = function (num) {
	$s({$: {M: N(num, 10)}})
	return $
}
ok$o = function (key, val) {
	vm = $Ob(key, $o(val))
	ok(vm)
}
ENAB0 = function () {
	$.mar().sp([
		'phone #:', ip$({v: 'num', en: 'hasPhone'}),
		ch$('hasPhone'), 'I have phone'])
	ok({
		hasPhone: $o(0), num: ''
	})
}
TEXT0 = function () {
	t$('textVal').C('p')
	ok$o('textVal', 'startValue')
	_.in(function () {
		vm.textVal('changed the view model!')
	})
}
CPD0 = function () {
	$.A('F: ', t$('f'),
			'L: ', t$('l'), 'F: ',
			v$('f'), 'L: ', v$('l'),
			'L: ', t$('fl'),
			$.bt('caps').cl$('capL')
	)
	vm = {
		f: $o('j'),
		l: $o('y'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KNOCKS = function () {
	$.A(pg('F: ', _B().b('t', 'f')),
			pg('L: ', _B().b('t', 'l')),
			pg('F: ', ip().b('V', 'f')),
			pg('L: ', ip().b('V', 'l')).id('l'),
			pg('L: ', _B().b('t', 'fl')),
			bt('caps').b('$', 'capL'))
	vm = {}
	vm.f = $o('j')
	vm.l = $o('y')
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	vm.capL = function () {
		vm.l(uC(vm.l()))
	}
	ok(vm)
}
KIP0 = function () {
	$.A('Login name:', tI$('un'), 
			'Pw:', pw$('pw'),
			'vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	creds = {un: $o(''), pw: $o('abc')}
	ok(creds)
}
FOC0 = function () {
//bind cb and bind ip to 'enable'
	$.A('Name:',
			ip$({vs: 'editing', hasFocus: 'editing', v: 'name'}),
			 d$({vs: '!editing()', t: 'name', cl: 'edit'})
	)
	$.p('Click the name to edit it; click elsewhere to apply changes')
	function VM(n) {
		var vm = this
		vm.name = $o(n)
		vm.editing = $o()
		vm.edit = function () {
			vm.editing(1)
		}
	}
	
	ok(new VM("Bert Bertington"))
}
K3 = VALUE = VAL = function () {
	
	$.A('Name:',
			ip$({v: 'editing', v: 'name', f: 'editing'}),
			d$({v: '!editing()', t: 'name', $: 'edit'}),
			$.p('Click the name to edit it; click elsewhere to apply changes'))
	ok({
		name: $o("Bert Bertington"),
		editing: $o(),
		edit: function () {
			vm.editing(true)
		}
	})//KOFCC
}
K1 = KOO = function () {
	 
	$.A(
			'Hello, ', t$('fullName'), '!',
	'First name: ',  v$('firstName'),
	'Last name: ',  v$('lastName')
	)
	VM = function (first, last) {
		this.firstName = $o(first)
		this.lastName = $o(last)
		this.fullName = $cO(function () {
			return this.firstName() + " " + this.lastName();
		}, this)
	}
	ok(new VM("rigo", "ochoa"))
}
FOCUS = FCB = function () {//working!!!
	_$({
		C: 'u', t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().fc$("editingName"),
			$.h1('editing..').vs$('editingName'),
			$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
	})
}
SPAM0 = function () {
	
	$.A('spam?', ch$('want'),
	vs$('want', [
	'flavs:', $.cKO('Cherry', 'flav', 'cherry'),
		$.cKO('Almond', 'flav', 'almond'), 
		$.cKO('Glut', 'flav', 'glut')
	])
	
	)
	ok(vm = {
		want: $o(1),
		flav: $oA(["cherry", "almond"])
	})
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
VIS0 = function () {
	$.h1().A('ALWAYS HERE!', vs$('vs', 'see me if true!'))
	ok(vm = {vs: $o(1)})
	_.in(function () {
		vm.vs(0);})
}
CLC0 = SMCL0 = function () {
	cl$('newDiv')
	ok({
		newDiv: function () {
			cl$('name',
			 "i'm a freaking div").C($r())
		},
		name: function(){alert(this)}
	})
}
WITH0 = function () {
	w$('xy', [t$('city'), 'lat:', t$('lat'), 'lon:', t$('lon')])
	ok({city: "London", xy: {lat: 51, lon: -0.1}})
}
ADD00 = EACHDIVADD = EDA = function () {
	$.ip().tI$('name')
	$.h1().t$('name')
	$.ul().e$('arr').A($.li().t$())
	$.sm().cl$('A')
	_.in(1, function () {vm.name('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)})})
	e$('peep', t$('f'), ' ', t$('l'))
	ok(vm = {name: $o('zi'), arr: $oa(),
		A: function () {this.arr.push(this.name())
		}, peep: $oA()
	})
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD10 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey').t$('monkey')
	$.ip().v$('monkey')
	$.sm('hello').cl$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	
	 e$('list',['my name is ',  t$('name'), 
				' and i like ',  t$('color')])
	vm = {monkey: $o(), list: $oa(),
		A: function () {
		this.list.push({name: 'j', color: $r()})}
	}
	vm.monkey('elephant')
	ok(vm)
	_.ev(8, function () {vm.A()})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD20 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A( ch$('showDT'))
	 e$('peep',[$.d([ t$('n'), 'has',
				 t$('ch().length'),
				'children &nbsp;',
				 ch$('New', 'A')]),
		 e$('ch',[t$(), vs$('$root.showDT').A(
						 ' (child rendered at ',
						 t$('new Date().getSeconds()'), ')')])])
	ok({peep: peep,
		showDT: $o()
	})
	
	//add, conditional el
	//anonymous vm
}
DEL0 = ADD3 = ULP = function () {
	$.ul().e$('people').A(
			$.li().A(
					$.sp('pos/name: '),
					$.sp().t$('$index'),
					$.sp().t$('name'),
					$.a('X').cl$('$parent.rm'))
	)
	$.bt('add').cl$('add')
	vm = function () {
		var o = {}
		o.people = $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.remove = function () {
			o.people.rm(this)
		}
		return o
	}
	ok(vm())

}
REMM = ULDEL = ULD = function () {
 
	e$('peep', //bind bt 'click' to parent.rem
			 ['pos/name: ', t$('$index'), t$('n')//, cl$('rm')
				 ])
	  cl$('A')
	 ch$('rm')
	ok(vm={
		peep: $oA({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {this.peep.push({n: "New at " + new Date()})},
		rm: function (a) {this.peep.remove(this)
		}
	})
}
ULINDEX = function () {
	format()
	s2(
			h4('People'),
			ul().b('E', 'people')(
					li()(
							sp('pos/name: '),
							sp().b('t', '$index'),
							sp().b('t', 'n'),
							lk(' X').b('$', '$parent.rem')
					)
			),
			bt('add').b('$', 'add')
	)
	vm = function () {
		var o = {}
		
		o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date()})
		}
		o.rem = function () {
			o.people.remove(this)
		}
		return o
	}
	ko.ab(vm()
	)
}