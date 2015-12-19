IP1 = UI111 = SPANFOCUS = FOC = function () {
	$.x()
	$.sp('Some Span').id("my-span").at('tabindex', "0")
	$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
	$.sp('Some Span2').id("my-span2").at('tabindex', "0")
	document.getElementById('my-span').focus()
	document.getElementById('my-span2').focus()
}
IP2 = DATEPICK = function () {
	$.x('b', 'jqui')
	$.d().id("datepicker")
	$("#datepicker").datepicker()
	function alt() {
		$.p('Date: ').A($.ip().id('dtp'))
		$('#dtp').dtp()
		d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
	}
}
IP3 = RBUI = BUTSET = RADIOBTUI = function () {
	
	/*
	 $.f([$.fs([$.lg('Favorite jQuery Project'),
	 $.dI('radio',[
	 $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
	 $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
	 $.lb('Color','color'), $.rb('project', 'color')
	 ])
	 ])])
	 */
	$.dI('radio', [
		$.lb('Sizzle', 'sizzle'), $.rb('project', 'sizzle'),
		$.lb('Qunitz', 'color'), $.rb('project', 'color'),
		$.lb('Color', 'qunit'), $.rb('project', 'qunit', '+')
	])
	$("#radio").buttonset()
}
IP4 = SLIDER = RANGEUI = function () {
	$CSS({_slider: {M: 12}});
	$.dI('slider').slider()
}
IP5 = NUMSPINN = function () {
	$.ip().A().C('o').spinner()
}
IP6 = UI15 = UIBUT = function () {
	$.C('o')
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).H(200).css({
		borderColor: 'blue',
		borderStyle: 'dashed',
		borderWidth: 200
	})
}//
 