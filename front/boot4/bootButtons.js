_A = function ($el, ch) {var g = G(arguments)
	_.e(A(ch) ? ch : [ch], function (childEl) {$el.A(childEl)})
	return $el
}
z = function () {
	$('body').empty()
}
Bs.A=function(){
	var g=G(arguments)
	var $el=this
	_A()
}

Bs.bt = function (tx, fn) {

var bt = $('<button>')

	bt.click(fn)
	
	bt.attr('text', tx)
	
	bt.addClass('btn')
	$('body').A(bt)
	return bt
}



Bs.btGpD = Bs.btGp = function () {
	return _A($.dK("btn-group"), G(arguments))
}


Bs.vBtGpD = Bs.vBtGr = Bs.btGpV = $.btGpV = function () {

	return _A($.dK("btn-group-vertical"), G(arguments))
}


$.fn.$btGp = function (sub) {
	var $q = this
	if (A(sub)) {
		$q.K('btn-group')
		_.e(
				sub, function (k) {
					$q.K('btn-group-' + k)
				}
		)
		return $q
	} else if (U(sub)) {
		return $q.K('btn-group')
	} else if (S(sub)) {
		return $q.K('btn-group-' + sub)
	}
}
Bs.btGpD = function () {
	return _A($.d().K('btn-group'), G(arguments))
}
Bs.btGpDLg = function () {
	return _A(Bs.btGpD().K('btn-group-lg'), G(arguments))
}
Bs.btGpDSm = function () {
	return _A(
			Bs.btGpD().K('btn-group-sm'), G(arguments)
	)
}
Bs.btGpDMd = function () {
	return _A(
			Bs.btGpD().K('btn-group-md'), G(arguments)
	)
}
Bs.btTlbD = Bs.tlbD = function () {
	return _A($.dK("btn-toolbar"), G(arguments))
}
$.fn.$bt = function (sub) {
	var $q = this, g = G(arguments)
	if (A(sub)) {
		$q.K('btn')
		_.e(sub, function (k) {
			$q.K('btn-' + k)
		})
		return $q
	} else if (U(sub)) {
		return $q.K('btn btn-primary')
	} else if (S(sub)) {
		g.e(
				function (sub) {
					$q.K('btn-' + sub)
				}
		)
		return $q
	}
}
$.fn.$btOl = function (sty) {
	return this.K('btn-' + sty + '-outline')
}
Bs.btDd = function () {
	var bt = Bs.bt().K('dropdown-toggle').at('data-toggle', 'dropdown')
	return _A(bt, $(arguments))
}
Bs.dDd = function () {
	return _A($.dK('dropdown-menu'), G(arguments))
}
Bs.aDd = function () {
	return _A($.a().K('dropdown-item'), G(arguments))
}
Bs.ddGgBt = function (tx, fn) {
	return Bs.bt(tx, fn).K("dropdown-toggle").at('data-toggle', 'dropdown')
}
$.fn.T=function(tx){return this.attr('text', tx)}
$.fn.$=function(fn){return this.click(fn)}
BSBT = function () {
/*
	//STYLES
	Bs.bt('Primary').K('btn btn-primary')
	Bs.bt('Secondary').K('btn btn-secondary')
	Bs.bt('Success').K('btn btn-success')
	Bs.bt('Warning').K('btn btn-warning')
	Bs.bt('Danger').K('btn btn-danger')
	Bs.bt('Link').K('btn btn-link')

 //outline
 Bs.bt('Pridmary').K('btn-primary-outline')
 Bs.bt('Secondary').K('btn-secondary-outline')
 Bs.bt('Success').K('btn-success-outline')
 Bs.bt('Warning').K('btn-warning-outline')
 Bs.bt('Danger').K('btn-danger-outline')
 Bs.bt('Link').K('btn-link-outline')
	*/
	
	//sizes
	Bs.bt('lg').K("btn-primary btn-lg")
	Bs.bt('lg').K("btn-secondary btn-lg")
	Bs.bt('sm').K("btn-primary btn-sm")
	Bs.bt('sm').K("btn-secondary btn-sm")
	Bs.bt('blk').K("btn-primary btn-lg btn-block")
	Bs.bt('blk').K("btn-secondary btn-lg btn-block")
	
	
}
BSBTS = function () {
	z()
	$.bt('Primary').$bt()//~(['primary'])
	$.bt('Seconddary').$bt(['secondary'])
	$.bt('Success').$bt(['success'])
	$.bt('Warning').$bt(['warning'])
	$.bt('Danger').$bt(['btn-danger'])
	$.bt('Link').$bt(['link'])
	Bs.vBtGpD([Bs.bt('Thailand'), Bs.bt('Combodia'), Bs.bt('Vietname')])
	$.br(5).A()
	Bs.bt('Primary').$btOl('primary')
	Bs.bt('Secondary').$btOl('secondary')
	Bs.bt('Success').$btOl('success')
	Bs.bt('Warning').$btOl('warning')
	Bs.bt('Danger').$btOl('danger')
	Bs.bt('Link').$btOl('link')
	$.br(5).A()
	Bs.bt('Large button').$bt("primary", "lg")
	Bs.bt('Large button').$bt("secondary", "lg")
	Bs.bt('Small button').$bt("primary", "sm")
	Bs.bt('Small button').$bt("secondary", "sm")
	$.br(5).A()
	Bs.bt('Block level button').$bt('secondary', 'lg', 'block')
	Bs.bt('Block level button').$bt('primary', 'lg', 'block')
	$.br(5)
	Bs.tlbD(
			[
				Bs.btGpD(
						[
							Bs.bt('Gp1'), Bs.bt('Gp1'), Bs.bt('Gp1')
						]
				), Bs.btGpD(
					[
						Bs.bt('Gp2'), Bs.bt('Gp2')
					]
			)
			]
	)
}
BTGROUPSIZE = GRZ = function () {
	z();
	$CSS(
			{
				div: {M: 10}
			}
	)
	/*
	 Bs.btGpD('xs').A(  Bs.bt('xsmall'),  Bs.bt('xsmall'),  Bs.bt('sxmall'))
	
	 $.d().$btGp(['sm']).A(  Bs.bt('small'),   Bs.bt('small'),   Bs.bt('small'))
	
	 $.d().K('btn-group').A(
	 Bs.bt('default'),
	 Bs.bt('default'),Bs.bt('default')
	 )
	 */
	Bs.btGpDLg(
			[
				Bs.bt('lg'), Bs.bt('lg'), Bs.bt('lg')
			]
	)
	Bs.btGpDMd(
			[
				Bs.bt('md'), Bs.bt('md'), Bs.bt('md')
			]
	)
	Bs.btGpDSm(
			[
				Bs.bt('sm'), Bs.bt('sm'), Bs.bt('sm')
			]
	)
}
SPLITDD = SDD = BTGROUPWITHDD = BGD = function () {
	z()
	function $splBt() {
		return Bs.btGpD(
				[
					Bs.bt('Action').$bt('danger'), $('<button class="btn">').$bt('danger').K('dropdown-toggle').D('toggle', "dropdown").A($.sp('Toggle Dropdown').K('sr-only')), $.dK("dropdown-menu").A(
						$('<a class="dropdown-item" href="#">Action</a>'), $('<a class="dropdown-item" href="#">Another action</a>'), $('<a class="dropdown-item" href="#">Something else here</a>'), $('<div class="dropdown-divider"></div>'), $('<a class="dropdown-item" href="#">Separated link</a>')
				)
				]
		)
	}
	
	btGp1 = Bs.btGpD([Bs.bt('hello'), $splBt(), Bs.bt('nice to see ya'), $splBt(), Bs.bt('goodbye')])
	btGp2 = Bs.btGpD(
			[
				Bs.ddGgBt('About Us'), Bs.dDd(
					[
						Bs.aDd('strasdoy'), Bs.aDd('stdy'), Bs.aDd('stroy')
					]
			)
			]
	)
	Bs.btTlbD([btGp1, btGp2])
}