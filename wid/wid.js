HLF = HIGHLIGHTFADE = function () {
	$s({
		_ct: {
			C: 'r', P: 10
			//B:'40px solid green'
		},
		_gg: {C: 'o', w: 100, h: 100}
	})
	// ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"
	d = $('<div>').A().A('Click to tog ').K('gg')
	d.a2($.dK('ct'))
	$.$(function () {
		$l('$.$')
		$(".gg").toggle("highlight")
	})
}
NV1 = UITAB = function () {
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
	alt = function () {
		NV8 = UITAB = function () {
			z()
			$.d([
				$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
					$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
					$('<li><a href="#fragment-3"><span>Three</span></a></li>')
				]),
				$.dI('fragment-1').A(
						$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
				$.dI('fragment-2').A(l1),
				$.dI('fragment-3').A(l2)
			]).tabs()
		}
	}
}
NV2 = ACCORD = ACC = function () {
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
	alt = function () {
		NV5 = UI54 = ACCORD = ACC = function () {
			z()
			ul = $.ul([
				$.li('List item 1'),
				$.li('List item 2'),
				$.li('List item 3')
			])
			$.d([
				$.h3('Section 1'), $.d([$.p(l1)]),
				$.h3('Section 2'), $.d([$.p(l2)]),
				$.h3('Section 3'), $.d([$.p(l1), ul])
			]).accordion()
		}
	}
}
UIBT = IP6 = UI15 = UIBUT = function () {
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	_.in(3, function () {
		$.C('o')
		$.d().A('hello').WH(70, 50).button()
		$.d().A('hello').WH(70, 50).H(200).css({
			borderColor: 'blue',
			borderStyle: 'dashed',
			borderWidth: 20
		})
	})
}
UI0 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
NV5 = UISLMENU = USM = function () {
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
JU3 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
JU333 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$('body').resize(function () {
		ovL.WH($(document).W(), $(document).H()).hd().fI()
	})
}
DGG = DRAGGY = function () {
	$.d('r', 500, 500).K('sel')
	$('.sel').dgb({
		delay: 1000,
		distance: 100,
		helper: "clone",
		addClasses: false,
		snapMode: "inner",
		grid: [50, 20],
		snap: true
	})
}
APP2 = function () {
	k = $('.k')
	k.dgb({appendTo: "body"})
	k.dgb({helper: "clone"})
}
TABSELIX = function () {
	$s({
		ip: {bor: '1px solid #000'}, d: {pad: 5}
	})
	$.d([
		'no tabindex'
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d(['-tIx',
		$.ip().tIx(-1, '-tIx')
	])
	$(":tabbable").bdC("red")
}
MENU1 = function () {
	$s({
		'.ui-menu': {
			width: 200,
			C: 'r'
		}
	})
	$.ul().A(
			$.li('Item 1'),
			$.li('Item 2'),
			$.li().A(
					'Item 3',
					$.li('Item 3-1'),
					$.li('Item 3-2'),
					$.li('Item 3-3'),
					$.li('Item 3-4'),
					$.li('Item 3-5')),
			$.li('Item 4'),
			$.li('Item 5')
	).id("menu")
	$("#menu").menu()
}
JUSTREDDIV = IXSTAT = function () {
	$.x()
	k = $.d('r', 500, 200)
	// to clb bT-like elS. Applies clb df ct stys to el
	// and its ch t, lks, and icons.
	k.K('.ui-state-default')
	//   on mv to clb bt-oid. Applies "clickable hover" ct stys
	// to an element and its child text, links, and icons.
	k.K('.ui-state-hover')
	//  on kb fcs to clb btoids. Applies "clickable focus"
	// ct stys  to el and its child text, links, and icons.
	k.K('.ui-state-focus')
	//   on md to clb btoids. Applies "clickable active" cot stysto an el
	// and its ch t, lks, and icons.
	k.K('.ui-state-active')
}
DATESCR = function () {
	$.x('b', 'jqui')
	('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
	('<script src="/jquery-ui.min.js">').A()
	d = $.d('b', 400, 400).A(
			ip = $.ip('date').datepicker()
	).pad(20)
}
DROP = function () {
	$CSS({
		$dgb: {
			w: 100, h: 50, pad: '0.5em', fl: 'l',
			mar: '22px 5px 10px 0'
		},
		$dpb: {w: 130, h: 90, pad: '0.5em', mar: 10, fl: 'l'},
		div: {w: 400, h: 300, C: 'r', c: 'y'},
		$dgb2: {w: 100, h: 50, pad: '0.5em', mar: '0px 5px 10px 0'},
		'#dpb2,#dpb3,#dpb4,#dpb5': {w: 12, h: 90, pad: '0.5em', fl: 'l', mar: 10}
	})
	$.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
	$.d().id('dpb').K('ui-widget-header').A($.p('here'))
	$("#dgb").dgb()
	$("#dpb").dpb()
	Dpb(2, 'Drag me to my target', 'ui-widget-content')
	Dpb(2, 'here');
	Dpb(3, "dsbld !drop");
	Dpb(4, 'tol toch');
	Dpb(5, 'tol fit')
	$("#dgb2").dgb()
	$("#dpb2").dpb({
		drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb3").dpb({
		disabled: "true", drop: function (ev, ui) {
			$(this)
					.K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb4").dpb({
		tolerance: 'touch', drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd w tch")
		}
	})
	$("#dpb5").dpb({
		tolerance: 'fit', drop: function (ev, ui) {
			$(this).K("ui-state-highlight")
					.find("p").html("Dpd whn fulfit")
		}
	})
	function Dpb(id, pT, k) {
		k = k || "ui-widget-header"
		return $.d().id('dpb' + id).K(k).A($.p(pT))
	}
}
CRAZYWEIRD = POSI = function () {
	$s({
		$par: {
			C: 'b', ta: 'c', w: '60%', ht: 40,
			mar: '10px auto', pad: 5, bor: '1px solid #777'
		},
		_psb: {
			p: 'a', ds: 'b',
			r: 0, b: 0, C: 'r', ta: 'c'
		},
		$psb1: {w: 75, h: 75},
		$psb2: {w: 120, h: 40},
		'select,input': {mL: 15}
	})
	$.d([$.p('This is the ps par el')]).id('par')
	$.dK('psb').id("psb1")
	$.p('to ps')
	$.d([$.p('to ps2')]).K('psb', 'psb2')
	$.d().mgT(75).pad(20), 'ps...'
	$.d().pdB(20)
	$.b().A('my:')
	$.sl('my_hz', 'left', 'center', 'right')
	$.sl("my_vrt", 'top', 'center', 'bottom')
	$.d().pdB(20)
	$.p().A('at:')
	$.sl("at_hz", 'left', 'center', 'right')
	$.sl("at_vrt", 'top', 'center', 'bottom')
	$.d([
		$.b().A('cl:'),
		$.sl('cl_vrt', 'flip', 'flit', 'flipfit', 'none'),
		$.sl('cl_hz', 'flip', 'flit', 'flipfit', 'none')
	]).pdB(200)
	$("select, input").bind("click keyup change", ps)
	$("#par").dgb({drag: ps})
	$(".psb").al(.5)
	ps()
	function ps() {
		$(".psb").ps({
			of: $("#par"),
			my: $("#my_hz").v() + $("#my_vrt").v(),
			at: $("#at_hz").v() + $("#at_vrt").v(),
			collision: $("#cl_hz").v() + $("#cl_vrt").v()
		})
	}
}
BLANK = LAYOUTHELP = function () {
	k = $('.k')
	k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
	k.K('ui-helper-hidden-accessible')// Hides cont
	k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
	k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
	k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
	k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
	k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
	k.K('.ui-widget-content')
	// : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
	// (can be appld to par  or sib  of hdr).
}
NOTWORKING = ICONN = function () {
	$.x('y', 'icon')
	$.sp('helllloooo1')
	$.sp('helllloooo2')
			.K("ui-icon ui-icon-arrowthick-1-n")
	k = $.d('k', 500, 500)
	k.K('ui-icon ui-icon-triangle-1-e')
	/*
	 Base class to be applied to an icon element.
	 Sets dimensions to a 16px square
	 block,
	 hides inner text,
	 sets background image to
	 "content" state sprite image.
	
	 Note: ui-icon class will be given    different sprite background image
	 depending on its parent container.
	
	 For example,
	 a ui-icon element
	 within a ui-state-default container
	 will get colored according to
	 the ui-state-default's icon color.
	 Icon types
	
	 After declaring a ui-icon class,
	 you can follow up with a second class
	 describing the type of icon.
	 Icon classes generally follow a syntax
	
	
	 */
	//  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
	//    .ui-icon-triangle-1-e
	//  ThemeRoller provides
	// full set of CSS framework icons  in  prev col
	//  Hv over them to see the class name.
}
NOTHINGATALL = VLAYSHAD = function () {
	k = $('.k')
	k.K('ui-widget-overlay')
	/*
	
	 Applies 100% width & height dimensions to an overlay screen,
	 along with background color/texture, and screen opacity.
	 k.K('ui-widget-shadow')
	 appy to vlay widg shad els
	 Applies bg    c/texture, cust cor rad, al,
	 top/left ofs and shd "thickness".
	 Thickness is appld via pad  all sides of shad  that
	 set to mat  the dims of the overlay el .
	 Offsets are appld via t and l  margs  (can be pos  or neg ).
	 */
	// https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
}
ITHINKNOTHING = CORRAD = function () {
	$.x('o')
	$.d('d', 500, 500)
	k = $.d('d', 500, 500)
	/*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
	 k.K('.ui-corner-tr')// t r cor
	 k.K('.ui-corner-bl')//to bt l corn
	 k.K('.ui-corner-br')// bt r cor
	 k.K('.ui-corner-top')//o both t cors
	 k.K('.ui-corner-bottom')//both bt cors
	 k.K('.ui-corner-right')// both r cors
	 k.K('.ui-corner-left')// both left cors
	 k.K('.ui-corner-all')//all 4 cors
	 */
}
STUCKLOGINFORM = UICT = function () {

//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
	num = 3
	if (num == 1) {
		$.dK("ui-widget").A(
				$.dK("ui-widget-header ui-corner-top").A(
						$.h2('his is a ui-widget-header container')),
				$.dK("ui-widget-content ui-corner-bottom").A(
						$.p('This is a ui-widget-content container')))
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.a('clickable and selected')),
				$.d([
					$.a('clickable but not selected')
				]).K("ui-state-default ui-corner-all"))
	}
	$('.ui-state-default a').hv(function () {
		$(this).parent().K("ui-state-hover")
	}, function () {
		$(this).parent().xK("ui-state-hover")
	})
	if (num == 2) {
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
				$.dK("ui-state-default ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"),
						$.a('clb, !selected')))
		$(".ui-state-default a").hv(function () {
					$(this).pa().K("ui-state-hover")
				},
				function () {
					$(this).pa().xK("ui-state-hover")
				})
	}
	if (num == 3) {
		$CSS({
			'_ui-form': {w: 470, mar: '0 auto'},
			'_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
			'_ui-form _ui-widget-content': {padding: 20},
			'_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
			'_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
			'_ui-form _ui-state-error': {pad: 4},
			'_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
			'_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
		})
		$.dK("ui-widget ui-form").A(
				$.dK("ui-widget-header ui-corner-all").A(
						$.h2('Login Form')),
				$.dK("ui-widget-content ui-corner-all").A(
						$.f().K('ui-helper-clearfix').A(
								$.lb('Username').K("ui-helper-reset"),
								$.d("ui-state-error ui-corner-all").A(
										$.ip(), $.dK("ui-icon ui-icon-alert"),
										$.p('Required field')
												.K("ui-helper-reset ui-state-error-text")))))
	}
	// <link rel="stylesheet" type="text/css" href="css/ui.form.css">
//http://www.w3.org/TR/html4/strict.dtd">
}
LOOKSLIKEHIGHLIGHT = DOESNOTHING = INTX = function () {
	$.x()
	$CSS({
		$d: {C: 'r'}
	})
	k = $('.k')
	// to highlighted/selected els
	// Applies "highlight" ct sty to an el and
	// its ch text, links, and icons.
	k.K('.ui-state-highlight')
	// appl to z msg ct eles. Applies z ct stys to   el
	// and its ch text, links, and icons.
	k.K('.ui-state-error')
	//  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
	k.K('.ui-state-error-text')
	//// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
	k.K('.ui-state-disabled')
	//    apl2 priority-1 bt when need bt hier
	k.K('.ui-priority-primary')
	k.K('.ui-priority-secondary')
	//: Class to be applied to a priority-2 button in situations where button hierarchy is needed.
	j = $('<div>').A($.h3('hello'))
			.id('d').WH(100, 100).A()
			.K('.ui-state-highlight')
	$.d('r', 100, 100).A($.h3('hello'))
}
BROKENMENUMAYBE = HLFDL = function () {
	$.d(['z1']).K('error')
	$.d(['z2']).K('error')
	$.d(['hl1']).K('highlight')
	$.d(['hl2']).K('highlight')
	//   http://jsfiddle.net/774wH/
	function errorHighlight(e, type, icon) {
		if (!icon) {
			if (type === 'highlight') {
				icon = 'ui-icon-info';
			} else {
				icon = 'ui-icon-alert';
			}
		}
		return $(this).each(function () {
			$(this).addClass('ui-widget');
			var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
			h += '<p>';
			h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
			h += $(this).text();
			h += '</p>';
			h += '</div>';
			$(this).html(h);
		});
	}

//error dialog
	(function ($) {
		$.fn.error = function () {
			errorHighlight(this, 'error');
		};
	})(jQuery);
//highlight (alert) dialog
	$.fn.highlight = function () {
		errorHighlight(this, 'highlight');
	};
	$('.error').error()
	$('.highlight').highlight()
}
// https://msdn.microsoft.com/en-us/magazine/ff706600
$Ul = function (bnd) {
	var g = G(arguments)
	var ul = $.ul().e$(bnd)
	_.e(A(g.s) ? g.s : g.r, function (q) {
		$.li().A(q).a2(ul)
	})
	return ul
}
$Cb = function (bnd, tx) {
	return $.sp().A($.lb((D(tx) ? tx : bnd) + ': '), ch$(bnd))
}
ULI = SHOWTIME = ROOT = $$$TWOLAYERSDEEPNESTED$$$ = function () {
	e$('peep').A(
			t$('n'), ' has ', t$('ch().length'), ' children',
			cl$('A').mar(10),
			$Ul(
					'ch',
					t$(),
					vs$('$root.showDT',
							'(child rendered at ',
							t$('$Dt().getSeconds()'),
							')')
			))
	$Cb('showDT', 'show time')
	//anonymous vm
	ok({
		peep: Peep(),
		showDT: $o(),
		A: function () {
		}
	})
}
function alt() {
	KOCL = SHOWTIME = function () {
		$.ul().$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a$('New', 'A')
						]),
						$.ul().e$('ch').A(
								$.li([
									$.sp().t$(), $.sp().vs$('$root.showDT').A(
											' (child rendered at ',
											$.sp().t$('$Dt().getSeconds()'),
											')'
									)]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		//anonymous vm
		OK({
			n: 'j',
			ch: Peep(),
			showDT: $o()
		})
	}
}
ULE = function () {
	$.ul().e$('PL').A(
			$.li().A(
					$.sp('Planet: '), $.b().t$('n'),
					$.d().t$('cap.n')))
	ok({
		PL: $oA([
			{n: 'Merc', cap: {n: 'afsdfads'}},
			{n: 'Earth', cap: {n: 'Barn'}},
			{n: 'Uranus', cap: {n: 5}}
		])
	})
}
ULROOT = function () {
	$.ul().e$('fs').A([
		$.li().b({t: '$data', sl: '{selected: $data==$root.chFI()}', cl: '$root.gtf'})
	]).K('fs')
	//$.ul().K('fs').e$("fs").A($.li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf"))
	MVM = function () {
		var vm = {
			selected: $(),
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: $o()
		}
		vm.gtf = function (f) {
			vm.chFI(f)
		}
		return vm
	}
	ok(MVM())
}
SEL = CUNTS = function (n, v) {
	$.sl().o$('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
SEL1 = SELPUSH = CHERRY = function () {
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).vs$('wants')
	_.in(function () {
		vm.flav.push("glut")
	})
	ok({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
SELMULTI = SLM = function () {
	$.p('Where you want to go?', $.sl().at({
		size: 5, multiple: true
	}).b({
		o: 'available', sO: 'chosen'
	}))
	ok({
		available: $oa(['France', 'Germany', 'Spain']),
		chosen: $oa(['Germany'])
	})
	_.in(function () {
		vm.chosen.push('France')
	})
}
KOS = function () {
	_$({
		c: 'v',
		t: 'css example.. will i use it?',
		vm: vm = {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}")
	})
	_.in(function () {
		vm.n(-5)
	})
}
K5 = BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'},
		_profPos: {C: 'b', c: 'r'}
	})
	d = $.d(['Prof Info'])
	str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
	d.b({y: str})
	vm = {curProf: $o(150000)}
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
K6 = BCSS = function () {
	$s({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40).b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
GIFT = CUSTBDJ = function () {
	Gift = function (gifts) {
		var vm = this
		vm.gifts = ko.oa(gifts)
		vm.addGift = function () {
			vm.gifts.push({name: "", price: ""})
		}
		vm.removeGift = function (gift) {
			vm.gifts.remove(gift)
		}
		vm.save = function (form) {
			alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
		}
		// To actually transmit to server as a regular form post, write this:
		// ko.utils.postJson($("form")[0], self.gifts)
	}
	var vm = this
	vm.gifts = $oA(gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}
	// To actually transmit to server as a regular form post, write this:
	// ko.utils.postJson($("form")[0], self.gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	$.d('You have selected the option').b({
		slVs: 'wrap',
		slDur: 600
	})
	$.lb().A($.cbC('wrap'), 'Gift wrap')
	ok({wrap: $o(1)})
}
AC0 = ARICLE = KOC1 = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView')
	$.sp('summary')
	$.ip('r').at({
		name: 'choices',
		value: 'details'
	}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
AC1 = KOOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}//broken select and inputs
AC2 = KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'), $.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
BDSMPGRD = SIMPLEGRIDPLUGIN = function () {
	
	// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
	ko.simpleGrid = {
		// Defines a view model class you can use to populate a grid
		// If you don't specify columns configuration, we'll use scaffolding
		m: function (cf) {
			this.data = cf.data
			this.currentPageIndex = ko.o(0);
			this.pageSize = cf.pageSize || 5;
			this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
			this.itemsOnCurrentPage = ko.c(function () {
				var startIndex = this.pageSize * this.currentPageIndex();
				return ko.ut.uo(this.data)
						.slice(startIndex, startIndex + this.pageSize);
			}, this);
			this.maxPageIndex = ko.c(function () {
				return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
			}, this)
		}
	}
	/*
	 // Templates used to render the grid
	 var templateEngine = new ko.jqueryTmplTemplateEngine();
	 templateEngine.addTemplate("ko_simpleGrid_grid", "\
	 <table class=\"ko-grid\" cellspacing=\"0\">\
	 <thead>\
	 <tr>\
	 {{each(i, columnDefinition) columns}}\
	 <th>${ columnDefinition.headerText }</th>\
	 {{/each}}\
	 </tr>\
	 </thead>\
	 <tbody>\
	 {{each(i, row) itemsOnCurrentPage()}}\
	 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
	 {{each(j, columnDefinition) columns}}\
	 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
	 {{/each}}\
	 </tr>\
	 {{/each}}\
	 </tbody>\
	 </table>");
	 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
	 <div class=\"ko-grid-pageLinks\">\
	 <span>Page:</span>\
	 {{each(i) ko.utils.range(1, maxPageIndex)}}\
	 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
	 ${ i + 1 }\
	 </a>\
	 {{/each}}\
	 </div>");
	 */
	// The "simpleGrid" binding
	function gScafCols(d) {
		var cols
		if ((typeof d.length != 'number') || d.length == 0) {
			return []
		}
		cols = [];
		for (var popN in d[0])
			cols.push({headerText: popN, rowText: popN});
		return cols
	}
}
$.fn.cm$ = function (bnd) {
	return this.b('component', bnd)
}
cm$ = function (name, params) {
	//= ko._
	var ob2s = function (ob) {
		ob = ob || {};
		var o = []
		_.e(ob, function (v, k) {
			o.push(k + ':"' + v + '"')
		})
		return o.join()
	}
	var _params = function (n, pam) {
		return $('<' + n + ' params = ' + (pam || '') + ' >')
	}
	if (name) {
		var q = $('<' + name + '>').A()
		if (params) {
			if (O(params)) {
				params = (   ob2s(params) )
			}
			q.at('params', params)
		}
		return q
	}
}
$rg = function (name, ob) {
	var $tpEl = function () {
		var g = G(arguments)
		var $q = $.sp().rm()
		_.e(g.A ? g.f : g, function (q) {
			$q.A(q)
		})
		return {element: $q[0]}
	}
	ob = ob || {}
	ob.viewModel = ob.viewModel || ob.vM
	ob.template = ob.template || ob.tp
	ob.template = $tpEl((ob.template))
	return ko.cm.rg(name, ob)
}
REG = function () {
	$s({i: {w: 40, h: 40}})
	$rg('test', {
		vM: function (pm) {
			this.text = $o(pm.name, 'default')
		},
		tp: $.d(['hello, ', t$('text'), ' ! ', $.i('me')])
	})
	cm$('test')
	cm$('test', {name: "tesfadsafdst"})
	ok({})
}
EXA = function () {
	$.mar()
	$rg('editor', {
		vM: function (pm) {
			this.text = $o(pm.initText, '')
		},
		tp: ['Message: ', v$('text'),
			'[', 'length:', t$('text().length'),
			']']
	})
	$.h4('First instance, without parameters')
	cm$('editor')
	$.h4('Second instance, passing parameters')
	cm$('editor', {initText: "Heldflo, world!"})
	ok({})
}
LIKE = function () {
	$.mar(10)
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	$rg('like', {
		vM: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like')
			}.bind(this)
			this.dislike = function () {
				this.chosenValue('dislike')
			}.bind(this);
		},
		tp: $.d().A(
				vs$('!chosenValue()').A(
						cl$('like'),
						cl$('dislike')).K("like-or-dislike"),
				vs$('chosenValue').A('You ', t$('chosenValue'), ' it').K('result')
		).bor('4px solid yellow')
	})
	e$('products', $.d().A(
			t$('name'),
			cm$('like', 'value:userRating')
	).C('g'))
	ok({
				products: [
					new Product('Garlic bread'),
					new Product('Pain au chocolat'),
					new Product('Seagull spaghetti', 'like') // This one was already 'liked'
				]
			}
	)
}