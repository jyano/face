$.fn.dtp = $.fn.datepicker
//https://www.youtube.com/watch?v=fA1NW-T1QXc
 
$.dlg = function (msg) {
	var dlg = $.d().A(msg).at({title: "Messaage"}).dialog({
		autoOpen: true,
		width: 400, modal: true,
		closeOnEscape: true,
		buttons: {
			Ok: function () {
				dlg.dialog("close")
			}
		}
	})
}

 