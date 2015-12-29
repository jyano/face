ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	
	$.sp(['phone #:', v$('num').en$('hasPhone')])
	$.sp([ ch$('hasPhone'), 'I have phone'])
	ok({hasPhone: $o(0), num: ''})
}
TEXT =   function () {
	t$('textVal').C('p')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(function () {
		vm.textVal('changed the view model!')
	})
}
CPD = COMPUTED = function () {
	$.d([
		$.p('F: ', t$('f')),
		$.p('L: ', t$('l')),
		$.sp('F: ').A(v$('f')),
		$.p('L: ', v$('l')).id('l'),
		$.p('L: ', t$('fl')),
		cl$('capL')
		
	]) 
	
	vm = {
	
		f: $o('j'), l: $o('y'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	
	vm.fl = ko.c(function () {
		return vm.f()+' '+vm.l()
	})
	
	ok(vm)
	 
}
KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}
FOC = PERFECT_FOR_EDITTING_A_PROFILE_IP = KOFC = function () {
//bind cb and bind ip to 'enable'
	$.p('Name:').A(
			v$('name').b({visible: 'editing', hasFocus: 'editing'}),
			t$('name').b({
				//visible: '!editing()',
				click: 'edit'}))
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
SPAM = CHECKED = function () {
	
	$.p(['spam?', ch$('wantSpam')])
	
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])]).vs$('wantSpam')
	
	vm = {wantSpam: $o(1),
		flav: $oa(["cherry", "almond"])}
	
	ok(vm)
	_.in(2, function () {vm.wantSpam(0)})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
VIS = VISABLE = function () {
	$.h1('ALWAYS HERE!')
	$.h1('see me if true!').vs$('vs')
	ok(vm = {vs: $o(1)})
	_.in(function () {
		vm.vs(0);
		_.in(function () {
			vm.vs(1)
		})
	})
}
CLC = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r()).cl$('name')
		}
	}
	ok(vm)
}
WITH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', $.sp().t$('lat'),
			'lon:', $.sp().t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
BHTML = HTM = function () {
	init()
	$.d().fS(100).h$('htmlContent')
	ok(vm = {htmlContent: $o('wait..')})
	_.in(2, function () {
		vm.htmlContent(
				"<em>report: <a href=playboyUrl>here</a>.</em>"
		)
	})
	function init() {
		playboyUrl = 'http://www.playboy.com'
	}
}
ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			 t$('f'),
			' ',
		 t$('l')
	)]).e$('peep')
	vm = {peep: $oA([{f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}])}
	ok(vm)
	$.bt('push', function () {vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD1 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey')
	$.t$('monkey')
	v$('monkey')
	
	  
	$.sm('hello').cl$('A')
	
	$Ul( 'list',
			$.d(['my name is ',  t$('name'), 
			' and i like ',  t$('color')]))
	
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.push({
				name: 'j', color: $r()})}}
	
	vm.monkey('elephant')
	ok(vm)
	_.ev(1, function () {
		vm.A()
	})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD2 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A($.cb().ch$('showDT'))
	$Ul('peep',
			$.p([t$('n'), ' has ', t$('ch().length'), ' children']),
			$.a().ch$('New', 'A'),
			$Ul('ch', vs$('$root.showDT',t$())))
	ok({peep: peep, showDT: $o()})
	//add, conditional el
	//anonymous vm
	
	
}
KODEL = DELETEWORKS = ADD3 = ULP = function () {ok(function(){
	$s({bd:{C: 'x', c: 'y'}, $:{C:'n',c:'z',M:5,fS:42}, sp:{C:'o', c: 'z'}})
	
	cl$('add', 'ADD')
	e$('people', $.d(['name: ',
		t$('$index'), t$('name'), cl$('$root.rm', 'DELETE')]))
	cl$('add', 'ADD')
	var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
	o.add = function () {o.people.push({n: "New at " + new Date().time})}
	o.rm = function () {
		o.people.remove(this)}
	return o
	
	}())
	
	
}
 