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
NV3 = AUTOCP = function () {
	$.x('x', 'autocp')
	availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
		"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
		"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
	$.d([
		$.lb('Tags:').for('tags'), $.ip().id('tags')
	]).K('ui-widget')
	$(function () {
		$("#tags").autocomplete({source: availableTags})
	})
	function other() {
		AUTOCOMP = function () {
			z()
			$.lb('Select a programming language: ', "autocomplete")
			$.ip().id("autocomplete")
			tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
			$("#autocomplete").autocomplete({
				source: function (request, response) {
					var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
					response($.grep(tags, function (item) {
						return matcher.test(item);
					}));
				}
			})
		}
	}
	
	alt = function () {
		NV4 = UI56 = AUTOCP = function () {
			$.x('x', 'autocp')
			availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
				"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
				"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
			$.d([
				$.lb('Tags:').for('tags'), $.ip().id('tags')
			]).K('ui-widget')
			$(function () {
				$("#tags").autocomplete({source: availableTags})
			})
			function other() {
				AUTOCOMP = function () {
					z()
					$.lb('Select a programming language: ', "autocomplete")
					$.ip().id("autocomplete")
					tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
					$("#autocomplete").autocomplete({
						source: function (request, response) {
							var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
							response($.grep(tags, function (item) {
								return matcher.test(item);
							}));
						}
					})
				}
			}
		}
	}
}
NV4 = MENU = function () {
	$CSS({'.ui-menu': {w: 150}})
	$.ul([
		$.li(['Hockey']),
		$.li(['Football', $.ul([
			$.li('Iain Hume'),
			$.li('Del Piero'),
			$.li('David James')])]),
		$.li(['Cricket', $.ul([
			$.li('Sachin'),
			$.li('Ganguly'),
			$.li('Dravid'),
			$.li('yano')
		])]).A(),
		$.li(['KickBoxing']).K('ui-state-disabled'),
		$.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
	]).id('menu')
	$("#menu").menu()
}
EF1 = COLORANIM = CANIM = function () {
	function alt() {
		JU1 = COLORANIM = CANIM = function () {
			$.x()
			$CSS(
					{
						$el: {
							C: '#aaa', c: '#006', fZ: 25,
							tA: 'c', P: '1em'
						}
					}
			)
			$.d().id('el').A('-color anim-')
			$.bt('anim!', function () {
						$("#el").an({
							c: 'g',
							C: "rgb(20,20,20)"
						})
					}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
			 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
			
			 The following properties are supported:
			
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
			
			 link
			 */
		}
	}
	
	$.x()
	$CSS(
			{
				$el: {
					C: '#aaa', c: '#006', fZ: 25,
					tA: 'c', P: '1em'
				}
			}
	)
	$.d().id('el').A('-color anim-')
	$.bt('anim!', function () {
				$("#el").an({
					c: 'g',
					C: "rgb(20,20,20)"
				})
			}
	)
	/*
	 Color Animation
	 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
	 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
	
	 The following properties are supported:
	
	 backgroundColor
	 borderBottomColor
	 borderLeftColor
	 borderRightColor
	 borderTopColor
	 color
	 columnRuleColor
	 outlineColor
	 textDecorationColor
	 textEmphasisColor
	 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
	 Class Animations
	 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
	
	 link
	 */
}
EF2 = HIGHLIGHT = HLT = function () {
	$.h({
		p: {C: 'y', w: 200, B: '1px solid green'},
		d: {C: 'r', w: 100, h: 100}
	})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
	$.dK('target')
	$.bt('Highlight: ', function () {
		$(".target").ef("highlight",
				{color: "#669966"}, 3000)
	})
	function alt() {
		JU44 = HIGHLIGHT = HLT = function () {
			$.h({
				p: {C: 'y', w: 200, B: '1px solid green'},
				d: {C: 'r', w: 100, h: 100}
			})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
			$.dK('target')
			$.bt('Highlight: ', function () {
				$(".target").ef("highlight",
						{color: "#669966"}, 3000)
			})
		}
	}
}
EF3 = HIDESHOWNICE = HIDE = function () {
	$.s({
		p: {C: '#bca', w: 200, bor: '1px solid green'},
		div: {w: 100, h: 100, C: 'r'}
	})
	$.p('$')
	$.bt('hd').id('hd')
	$.bt('sh').id('sh')
	d = $.dK('tg')
	$('#hd').$(function () {
		d.hd('sl', {d: 'r'}, 500)
	})
	$('#sh').$(function () {
		d.sh('sl', {d: 'd'}, 2000)
	})
	function alt() {
		JU33 = HIDESHOWNICE = HIDE = function () {
			$.s({
				p: {C: '#bca', w: 200, bor: '1px solid green'},
				div: {w: 100, h: 100, C: 'r'}
			})
			$.p('$')
			$.bt('hd').id('hd')
			$.bt('sh').id('sh')
			d = $.dK('tg')
			$('#hd').$(function () {
				d.hd('sl', {d: 'r'}, 500)
			})
			$('#sh').$(function () {
				d.sh('sl', {d: 'd'}, 2000)
			})
		}
	}
}
EF4 = function () {
	$.x('o', 'jqls')
	$.d([$.h3('Pending')
		
		/*
		 ,  $.d([
		 $.dK('task-header').A('Sample Header'),
		 $.d([  '25/06/1992'  ]).K('task-date'),
		 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
		 ]).K('td-task')
		 */
	]).id('pending').K('task-list')
	$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
	$.d([$.h3('Completed')]).id('completed').K('task-list')
	$.d([
		$.h3('Add a task'),
		$.f([
			$.ip().ph('Title'),
			$.ta().ph('Description'),
			$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
			$.bt('Add Task').K('btn btn-primary')
		]).C('u').id('td-form'),
		$.bt('Clear Data').K('btn btn-primary'),
		$.d(['Drag Here to Delete']).id('delete-div')
	]).K('task-list')
	// {
	// width:250; // float:left;
	// mar:0;
	// background-color:gray;
	// min-height:240;
	// border-radius:10;
	// padding-bottom:15;
	// }
	$CSS({
		'.task-list': {
			w: '250px', float: 'left',
			mar: '0px', C: 'gray', 'min-height': '240px',
			'border-radius': '10px', 'padding-bottom': '15px'
		},
		h3: {'text-align': 'center'},
		'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
		'.task-list input': {h: '30px'},
		'.task-list input[type="button"]': {w: '100px', mar: '5px'},
		'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
		'.td-task > .task-header': {'font-weight': 'bold'},
		'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
		'.td-task > .task-desc': {'font-size': 'smaller'},
		'#delete-div': {
			C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
			'line-height': '75px', 'text-align': 'center'
		}
	})
	//<style type="text/css"> h3{text-align:center;  }</style>
	$l($('head').oh())
	data = _.jP($ls.g("tdData")) || {}
	codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
	options = {}
	td = {
		add: function () {
			var ips = $('#td-form :input'),
					id, title,
					desc, date,
					tempData
			if (ips.length !== 4) {
				return
			}
			title = ips[0].value
			desc = ips[1].value
			date = ips[2].value
			if (!title) {
				return $.dlg("!Title")
			}
			id = _.gT()
			tempData = {
				id: id, code: "1", title: title,
				date: date, desc: desc
			}
			data[id] = tempData
			$ls.s("tdData", _.jS(data))
			genEl(tempData)
			ips[0].value = "";
			ips[1].value = "";
			ips[2].value = ""
		},
		clear: function () {
			data = {}
			$ls.s('tdData', _.jS(data))
			$('.td-task').rm()
		}
	}
	genEl = function (pams) {
		$l('genEl')
		pams = pams || {}
		var parent
		if (!pams.code) {
			$l('!pams.code');
			return;
		}
		parent = $(codes[pams.code]), wrapper;
		if (!parent) {
			$l('!parent');
			return
		}
		wrapper = $.d()
				.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id}).a2(parent)
		$.d().at({class: 'task-header', text: pams.title}).a2(wrapper);
		$.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
		$.d({class: 'task-desc', text: pams.desc}).a2(wrapper)
		wrapper.draggable({
			start: function () {
				$("#" + 'delete-div').show()
			},
			stop: function () {
				$("#" + 'delete-div').hide()
			},
			revert: "invalid", revertDuration: 200
		})
	}
	rmEl = function (pams) {
		$('#task-' + pams.id).rm()
	}
	$.each(data, function (index, pams) {
		genEl(pams)
	})
	/*genEl({
	 id: "123", code: "1",
	 title: "asd",   date: "22/12/2013",  desc: "Blah Blah"     });*/
	/*rmEl({      id: "123",
	 code: "1",  title: "asd",
	 date: "22/12/2013",
	 desc: "Blah Blah"
	 });*/
	// Adding drop function to each category of task and del div
	$.each({"1": "#pending", "2": "#inProgress", "3": "#completed"},
			function (index, value) {
				$(value).droppable({
					drop: function (event, ui) {
						var element = ui.helper,
								css_id = element.attr('id'),
								id = css_id.replace('task-', ''),
								object = data[id]
						rmEl(object)
						object.code = index
						genEl(object)
						data[id] = object
						$ls.s("tdData", _.jS(data))
						$('#delete-div').hide()
					}
				})
			})
	$('#delete-div').droppable({
		drop: function (event, ui) {
			var element = ui.helper,
					css_id = element.attr("id"),
					id = css_id.replace('task-', ""),
					object = data[id];
			// Removing old element
			rmEl(object);
			// Updating local storage
			delete data[id];
			$ls.s("tdData", _.jS(data));
			// Hiding Delete Area
			$("#" + 'delete-div').hide();
		}
	})
	function alt() {
		JU16 = SAMPLER = EFFECTS = EFS = function () {
			$.x('x')
			$CSS({
				_toggler: {w: 500, h: 200, p: 'r'},
				$button: {pad: '.5em 1em', 'text-decoration': 'none'},
				$ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
				'$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
				'_ui-efs-transfer': {bor: '2px dotted gray'}
			})
			$.d([
				$.d([
					$.h3('Effect').K('ui-widget-header ui-corner-all'),
					$.p('afsdfsdfsa fasdsafdas fdsdfa')
				]).id('ef').K("ui-widget-content ui-corner-all")
			]).K('toggler')
			sl = $.sl().n('efs').id('efTypes')
			_.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
						'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
					function (a) {
						sl.A($.op(a))
					})
			$.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
			function runEf() {
				$l('runEf')
				var selEf = $("#efTypes").val()
				op = ( selEf === "scale" ) ? {percent: 0} :
						( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
								( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
				$("#ef").effect(selEf, op, 500, cb)
				function cb() {
					_.in(function () {
						$("#ef").removeAttr("style").hide().fadeIn()
					})
				}
				
				$("#button").$(function () {
					runEf();
					return false
				})
			}
		}
		JU13 = SAMPLER = EFFECTS = EFS = function () {
			$.x('x')
			$CSS({
				_toggler: {w: 500, h: 200, p: 'r'},
				$button: {pad: '.5em 1em', 'text-decoration': 'none'},
				$ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
				'$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
				'_ui-efs-transfer': {bor: '2px dotted gray'}
			})
			$.d([
				$.d([
					$.h3('Effect').K('ui-widget-header ui-corner-all'),
					$.p('afsdfsdfsa fasdsafdas fdsdfa')
				]).id('ef').K("ui-widget-content ui-corner-all")
			]).K('toggler')
			sl = $.sl().n('efs').id('efTypes')
			_.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
						'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
					function (a) {
						sl.A($.op(a))
					})
			$.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
			function runEf() {
				$l('runEf')
				var selEf = $("#efTypes").val()
				op = ( selEf === "scale" ) ? {percent: 0} :
						( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
								( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
				$("#ef").effect(selEf, op, 500, cb)
				function cb() {
					_.in(function () {
						$("#ef").removeAttr("style").hide().fadeIn()
					})
				}
				
				$("#button").$(function () {
					runEf();
					return false
				})
			}
		}
	}
}
DPB = function () {
	$.x('b', 'dpb')
	$CSS({
		$dgb: {C: 'r', w: 100, h: 100},
		$dpb: {
			p: 'a',
			C: 'o', c: 'b',
			l: 250, t: 0, w: 400, h: 400,
			pad: 10
		}
	})
	dp = $.d(['Drop here']).id('dpb')
	dg = $.d(['Drag me']).id('dgb')
	$("#dgb").dgb()
	$("#dpb").dpb({
		drop: function () {
			dp.C($r()).A(dg.XY(0, 0))
		}
	})
	function alt() {
		JU30 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
		JU31 = DPB = function () {
			$.x('b', 'dpb')
			$CSS({
				$dgb: {C: 'r', w: 100, h: 100},
				$dpb: {
					p: 'a',
					C: 'o', c: 'b',
					l: 250, t: 0, w: 400, h: 400,
					pad: 10
				}
			})
			dp = $.d(['Drop here']).id('dpb')
			dg = $.d(['Drag me']).id('dgb')
			$("#dgb").dgb()
			$("#dpb").dpb({
				drop: function () {
					dp.C($r()).A(dg.XY(0, 0))
				}
			})
		}
		JU32 = DGB = function () {
			$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
			$.dI('dgb', ['Drag me']).dgb()
		}
	}
}
UI1 = TIP = function () {
	$.p([
		$.a('text goes here: ').ti('description, yo'),
		$.ip().ti('little help..')
	])//.tooltip()
	$(document).tooltip()
}
UI2 = DIAL = function () {
	$.dlg = function (msg) {
		var dlg = $("#response-dialog")
		if (!dlg[0]) {
			dlg = $.d().at({
				title: "Messaage",
				id: "response-dialog"
			})
		}
		dlg.html(msg).dialog({
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
	$l('dial')
	$.x(null, 'dialog')
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(3, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
UI3 = PROG = function () {
	z();
	$.d().id('progressbar')
	$("#progressbar").progressbar({
		value: false
	})
}
IP1 = FOC = SPANFOCUS = function () {
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
IP3 = SETRADIOBTUI = function () {
	
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
	z()
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
function needs_wi_rz() {
//needs wi.rz :
	JU3 = FID = function () {
		z()
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
		$.h({
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
		$.rz(function () {
			ovL.WH($(document).W(), $(document).H()).hd().fI()
		})
	}
	JU33 = OVERLAY = FADEIN = FIN = function () {
		$.h({
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
		$.rz(function () {
			ovL.WH($(document).W(), $(document).H()).hd().fI()
		})
	}
}
function needs_ls() {
	JU63 = JQLS10 = function () {
		$.x('o', 'jqls')
		$.d([$.h3('Pending')
			
			/*
			 ,  $.d([
			
			 $.dK('task-header').A('Sample Header'),
			
			 $.d([  '25/06/1992'  ]).K('task-date'),
			
			 $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
			
			
			 ]).K('td-task')
			 */
		]).id('pending').K('task-list')
		$.d([$.h3('In Progress')]).id('inProgress').K('task-list')
		$.d([$.h3('Completed')]).id('completed').K('task-list')
		$.d([
			$.h3('Add a task'),
			$.f([
				$.ip().ph('Title'),
				$.ta().ph('Description'),
				$.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
				$.bt('Add Task').K('btn btn-primary')
			]).C('u').id('td-form'),
			$.bt('Clear Data').K('btn btn-primary'),
			$.d(['Drag Here to Delete']).id('delete-div')
		]).K('task-list')
		$CSS(JQLScss) //<style type="text/css"> h3{text-align:center;  }</style>
		$l($('head').oh())
		El = function (o) {
			var q
			if (q = $(codes[o.code])) {
				wrapper = $.dI('task-' + o.id).K('td-task').at('data', o.id)
				wrapper.A(
						$.d(o.tt).K('task-header'),
						$.d(o.date).K('task-date'),
						$.d(o.desc).K('task-desc')
				).a2(q)
			}
		}
		addItem = function (dat) {
			ips = $('#td-form :input')
			if (ips.length != 4) {
				return
			}
			if (!tt) {
				return $l("Title empty!")
			}
			El(dat[id = _.gT()] = {
				id: id,
				code: "1",
				tt: ips[0].value, date: ips[2].value, desc: ips[1].value
			})
			ips[0].value = ips[1].value = ips[2].value = ''
			$ls.s('tdData', _.jS(dat))
		}
		rmEl = function (o) {
			$('#task-' + o.id).rm()
		}
		exEl = El({
			code: "1", id: "123",
			tt: "My Uber Important Task", date: "5/2/2014",
			desc: "I have to do a lot of steps to implement this task!"
		})
		wrapper.dgb({
			start: function () {
				$('#delete-div').show()
			},
			stop: function () {
				$('#delete-div').hide()
			}
		})
		$ls.s("tdData", _.jS(data = _.jP($ls.g("tdData"))))
		$('.td-task').dgg()
		$.each(codes, function (k, v) {
			$(v).dpb({//on drop !!!
				drop: function (ev, ui) {
					el = ui.helper
					css_id = el.attr("id")
					id = css_id.replace(ops.taskId, '')
					ob = data[id]
					rmEl(ob)
					ob.code = k
					El(ob)
					data[id] = ob
					$ls.s("tdData", _.jS(data))
					$('#delete-div').hide()
				}
			})
		})
		$('#delete-div').dpb({
			drop: function (ev, ui) {
				el = ui.helper
				css_id = el.attr('id')
				id = css_id.replace(op.taskId, '')
				o = data[id]
				rmEl(o)
				delete data[id]
				$ls.s("tdData", _.jS(data))
				$('#delete-div').hide()
			}
		})
		data = _.jP($ls.g("tdData")) || {}
		codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
		options = {}
		td = {
			add: function () {
				var ips = $('#td-form :input'),
						id, title,
						desc, date,
						tempData
				if (ips.length !== 4) {
					return
				}
				title = ips[0].value
				desc = ips[1].value
				date = ips[2].value
				if (!title) {
					return $.dlg("!Title")
				}
				id = _.gT()
				tempData = {
					id: id, code: "1", title: title,
					date: date, desc: desc
				}
				data[id] = tempData
				$ls.s("tdData", _.jS(data))
				genEl(tempData)
				ips[0].value = "";
				ips[1].value = "";
				ips[2].value = ""
			},
			clear: function () {
				data = {}
				$ls.s('tdData', _.jS(data))
				$('.td-task').rm()
			}
		}
		genEl = function (pams) {
			$l('genEl')
			var parent = $(codes[pams.code]),
					wrapper
			if (!pams.code || !parent) {
				$l('!parent');
				return
			}
			wrapper = $.d()
			wrapper.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id})
					.a2(parent)
			$.d().at({class: 'task-header', text: pams.title}).a2(wrapper)
			$.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
			$.d().at({class: 'task-desc', text: pams.desc}).a2(wrapper)
			wrapper.draggable({
				start: function () {
					$("#" + 'delete-div').show()
				},
				stop: function () {
					$("#" + 'delete-div').hide()
				},
				revert: "invalid", revertDuration: 200
			})
		}
		rmEl = function (pams) {
			$('#task-' + pams.id).rm()
		}
		$.each(data, function (index, pams) {
			genEl(pams)
		})
		/*genEl({
		 id: "123",
		 code: "1",
		 title: "asd",
		 date: "22/12/2013",
		 desc: "Blah Blah"
		 });*/
		/*rmEl({
		 id: "123",
		 code: "1",
		 title: "asd",
		 date: "22/12/2013",
		 desc: "Blah Blah"
		 });*/
		// Adding drop function to each category of task and del div
		$.each(codes, function (index, value) {
			$(value).droppable({
				drop: function (event, ui) {
					var element = ui.helper,
							css_id = element.attr("id"),
							id = css_id.replace('task-', ""),
							object = data[id]
					rmEl(object)
					object.code = index
					genEl(object)
					data[id] = object
					$ls.s("tdData", _.jS(data))
					$('#delete-div').hide()
				}
			})
		})
		$('#delete-div').droppable({
			drop: function (event, ui) {
				var element = ui.helper,
						css_id = element.attr("id"),
						id = css_id.replace('task-', ""),
						object = data[id];
				// Removing old element
				rmEl(object);
				// Updating local storage
				delete data[id];
				$ls.s("tdData", _.jS(data));
				// Hiding Delete Area
				$("#" + 'delete-div').hide();
			}
		})
	}
}
$L() //UI-CHECK-BOX WIDGET
_create2 = function () {
	var wg = this
	var $el = this.element, ll = this.element
	wg._super()
	ll.K("ui-helper-hidden-accessible");
	wg.button = $.btAf($el)
			.K("ui-checkbox")
			.T("checkbox").button({
				text: false,
				icons: {primary: "ui-icon-blank"},
				create: function (e, ui) {
					$(wg).rmAt("title")
				}
			})
	wg._on(wg.button, {
		click: function (e) {
			var wg = this, ll = wg.element
			ll.prop("checked", !ll.iCh())
			_rf(wg)
		}
	})
	_rf(wg)
}
_refresh = function () {
	var wg = this, ll = wg.element
	wg.button.button("option", "icons", {
		primary: ll.iCh() ?
				"ui-icon-check" : "ui-icon-blank"
	})
}
_destroy = function () {
	var wg = this
	// Standard wg cleanup.
	wg._super();
	// Display the HTML checkbox and remove the button.
	wg.element
			.rmK("ui-helper-hidden-accessible")
	wg.button.button("destroy").rm()
}
_create1 = function () {
	
	// Call the default widget constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our widget class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.T("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			_rf(this);
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	_rf(this);
}
_create3 = function () {
	
	// Call the default wg constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our wg class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.text("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			this.refresh();
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	this.refresh();
}
ob1 = {
	_create: _create1,
	_destroy: _destroy,
	refresh: _refresh
}
ob2 = {
	_create: _create2,
	_destroy: _destroy,
	refresh: _refresh
}
ob3 = {
	_create: _create3,
	_destroy: _destroy,
	refresh: _refresh
}
CB1 = CB$(function () {
	$.H(html).wg("app.checkbox", ob1)
})
CB2 = CB$(function () {
	$.sp().A(
			$.d().A($.cb().id('sm'), $.chLb('Small')),
			$.d().A($.cb().id('md'), $.chLb('Medium')),
			$.d().A($.cb().id('lg'), $.chLb('Large'))
	).A()
	$.wg("app.checkbox", ob2);
})
CB3 = CB$(function () {
	$.H(html).wg("app.checkbox", ob3)
})
function _pre() {
	$.H = function (html) {
		$(html).A()
		return $
	}
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> ' +
	'<div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div>' +
	' <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
	$cb$ = function () {
// Create three checkbox instances.
		$("input[type='checkbox']").checkbox();
	}
	$CB$ = function (fn) {
		fn()
		$cb$()
	}
	CB$ = function (fn) {
		return function () {
			$CB$(fn)
		}
	}
	$.fn.wK = function () {
		this.K('ui-widget');
		return this
	}
	$.chLb = function (lbTx) {
		return $.lb(lbTx, 'check').wK()
	}
	$.cbI = function (id) {
		return $.cb().id(id)
	}
	$.cbDiv = function (id, lbTx) {
		return $.d().A($.cbI(id), $.chLb(lbTx || id))
	}
	$.spSmMdLg = function () {
		return $.sp().A(
				$.cbDiv('sm', 'Small'),
				$.cbDiv('md', 'Medium'),
				$.cbDiv('lg', 'Large')
		)
	}
	$.fn.iCh = function () {
		return this.is(":checked")
	}
	$.fn.UI_iCh = function () {
		return this.iCh() ? "ui-icon-check" : "ui-icon-blank"
	}
	UI_hide = function ($el) {
		return $el.rmK("ui-helper-hidden-accessible");
	}
	UI_btRm = function ($el) {
		$el.button.button("destroy").remove();
		return $el
	}
	$.btAf = function (what) {
		return $.bt().iA(what)
	}
	$.fn.op = $.fn.prop
	_rf = function (a) {
		a.refresh();
		return q
	}
	$.fn.UIHide = function () {
		return this.K("ui-helper-hidden-accessible")
	}
}
CB4 = CB$(function () {
	$.spSmMdLg()
	btOb = {
		text: false,
		icons: {
			primary: "ui-icon-blank"
		},
		create: function (e, ui) {
			$(this).rmAt("title");
		}
	}
	ob4 = {
		_create: function () {
			var wg = this, ll, $el;
			$el = ll = wg.element
			wg._super();
			// Hide the HTML checkbox, then insert our button.
			ll.K("ui-helper-hidden-accessible");
			// Configure the button by adding our wg class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			wg.bt = wg.button = $.btAf(ll).K("ui-checkbox").T("checkbox").button(btOb)
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			wg._on(this.button, {
				click: function (e) {
					var wg = this, ll = wg.element
					ll.prop("checked", !ll.iCh)
					_rf(wg);
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			_rf(wg)
		},
		_destroy: function () {
			this._super();
			// Display the HTML checkbox and remove the button.
			UI_hide(this)
			UI_btRm(this)
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.UI_iCh()
			})
		}
	}
	$.wg("app.checkbox", ob4)
})