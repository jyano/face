
$.wg("cust.sdlg", $.ui.dialog, {
	open: function () {
		$l("open");
		return this._super()
	},
	setOption: function (k, v) {
		this._super(k, v);
		this._superApply(arguments)
	},
	
	red: function (r) {
		this.element.C('r')
	}
})

WIJ = function () {
	$.x('b', 'wijj');
	d = $.d(['i am red']);
	d.sDlg().sDlg('red')
	$.in(function () {
		d.sDlg("close")
	})
}


SDLG = function () {
	$.x('g', 'sdlg')
	// Mets overridden on the ptt affect all insts of wid.
// both insts of the dlg use the same open() met
	d = $.d().sDlg().data("ui-dialog");// Retrieve the dialog's instance and store it.
	// sometimes you only need to change the bhr for a sing  inst  of the wid.  //To do this, obtain   ref  to   inst  and override the met  using  normal js
	d.close = function () {
		$l("close")
	}
	$.d().sDlg()
	$(':data(ui-dialog)').dlg("close") // Select both dialogs and call close() on each of them--> "close" will only be logged once.
}