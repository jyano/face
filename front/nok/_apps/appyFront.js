KOAT = function () {
	_$({
		// color
		C: 'r',
		// app hw title header 
		t: 'attributes.. unlikely to use?',
		vm: {
			url: $o("year-end.html"),
			tt: $o("stats report")
		},
		A: [
			$.a('report').at$('{href:url,title:tt}')
		]
	})
}
KOBVS = function () {
	_$({
		C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
		el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
		_: function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		}
	})
}
$ok = function (vm, appCtn) {
	$.app(appCtn)
	ok(F(vm) ? vm() : vm)
}
FOCUS = function () {
	_$({
		C: 'u',
		t: 'read&write els “focusedness”  by binding it to  obserb',
		vm: {editingName: $o()},
		A: [
			$.ip().b("hasFocus: editingName"),
			$.h1('editing..').bVs('editingName'),
			$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")
		]
	})
}
VISABLE = function () {
	_$({
		C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
		el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
		_: function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		}
	})
}
ATTR = function () {
	_$({
		C: 'w',
		t: 'attributes.. unlikely to use?',
		vm: {url: $o("year-end.html"), tt: $o("stats report")},
		A: [$.aA('{href:url,title:tt}', 'report')]
	})
}
KOCSS = function () {
	_$({
		c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
		_: function () {
			vm.n(-5)
		}
	})
}