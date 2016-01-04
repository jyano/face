function But(title, arr) {
	var g = G(arguments)
	return $.bt(title, btFn)
	function btFn() {
		dudesForm.eH1(title)
		dudesForm.A(unIp, pwIp)
		A(arr) ? _.e(arr, add) : _.e(g.r, add)
	}
	
	function add(ch) {
		dudesForm.A(ch)
	}
}
loginBt = function sbm(e) {
	$.pD(e)//e.preventDefault()
	var fDat = f.serJ() // $l(formData)
	$.po('/login', fData, verifyLogin)
}
signupBt = function sbmAlt(e) {
	un = unInput.fi('input').v()
	pw = pwInput.fi('input').v()
	$.po('/user', {un: un, pw: pw}, login)
}
$.bt('new account', function () {
})
$.bt('login', function () {
})
  
 