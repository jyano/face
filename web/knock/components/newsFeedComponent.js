NEWSFEEDCOMPONENT = CMNEWS = function () {
	//http://jsfiddle.net/rniemeyer/fssXE/
	ko.rg('nwsFd', {//'news-feed'
		m: function (p) {
			this.vm = p.vm
		},
		//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
		//, t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
		t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
	})
	$.qAP('news-feed', 'vm', 'VM')
	$.qAP('news-feed', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<news-feed params="vm: feed"></news-feed>').A()
	$('<news-feed>').at('params', "vm: feed2").A()
	ko._('news-feed', {
		m: function (p) {
			this.vm = p.vm
		},
		t: $.d([
			$.h2('News! Feed'), $.dT('vm.m')
		])[0]
	})
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
	vm.VM.ms("1");
	vm.VM2.ms("2")
}
