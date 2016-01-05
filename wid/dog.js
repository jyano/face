DOG = function () {
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')
	]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(1, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
DOGS = function () {


	$s({
	
	bd: {C: $r() },	
	$: {  M:10}
	
	})
	
	mainDlg()

}


function mainDlg() {
	$('.dlg').rm()
	$.d([
		$.p('YOU ARE NOT LOGGED IN'),
		$.bt('login', tryLogin),
		$.bt('new account',   newAcc )
		
	]).id('main').K('dlg').dialog({
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
	title: 'wappy'})
}

function newAcc() {
	$('.dlg').rm()
	var d = $.d().K('dlg').A(
	
			$.p('enter username, password..'),
			$.f().A(
			$.ip().ph('username').id('un'),
			$.ip().ph('password').id('pw'),
			$.bt('do it!', function(){
			
			})).submit(function(ev){
						$.pD(ev)
						var ob = {un: $('#un').V(), pw: $('#pw').V()}
						$l(ob)
						
						$.po('/wap/user', ob, function(da){
						
						
						})
					
					}))
	d.dialog({
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
		close: function (event, ui) {
			$('.dlg').rm()
			mainDlg()
		},
		title: 'new account'
	})
	//d.dialog("close")
}


function tryLogin() {
	$('.dlg').rm()
	
	
	$.d([
		$.p('enter username, password..'),
		$.ip().ph('username'),
		$.ip().ph('password')
	]).K('dlg').dialog({
	
		show: {effect: "blind", duration: 800},
		hide: {effect: "explode", duration: 1000},
		close: function (event, ui) {
			$('.dlg').rm()
			mainDlg()
		},
		title: 'log into your account, user'
	})
	
	
	$("#dialog").dialog("close")
}