$.fn.dgb= $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.zLite=function(type, icon) {var e=this
    icon = icon? icon: (type === 'highlight')?
        'ui-icon-info': 'ui-icon-alert'

    return e.each(function(){var d
        $(this).K('ui-widget')
        d=$.d([$.sp().K("ui-icon '+icon+'").css({float:'left', 'margin-right':'3em'}),
            $(this).text() ])
        d.K('ui-state-'+type+'ui-corner-all').css({padding:'0 .7em'})
        $(this).html(d) })
}
$.fn.error=function(){this.zLite('error')}
$.fn.highlight=function(){this.zLite('highlight')}
$.fn.ef= $.fn.effect
$.fn.hd= function(ef, o, ms){
    if(ef=='sl'){
        ef='slide'}
    if(o&&o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='up'){o.d='up'}
        if(o.d=='down'){o.d='down'}
        o.direction = o.d
    }
    return this.hide(ef,o,ms)
}
$.fn.sh= function(ef, o, ms){
    if(ef=='sl'){ef='slide'}
    if(o&&o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='u'){o.d='up'}
        if(o.d=='d'){o.d='down'}
        o.direction = o.d}
    return this.show(ef, o, ms)
}
$.fn.ps= $.fn.position
$.fn.tIx=function(a,b){
    a= this.at('tabindex', a)
    if(b){a.v(b)}
    return a
}
$.fn.dtp= $.fn.datepicker // CSS Framework
//   list of the class names
// used by jQuery UI.
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
//jqAnim:
$.fn.st= $.fn.stop
$.fn.f2= $.fn.fadeTo
$.fn.fI= $.fn.fadeIn
 
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
JU0 =FID = function () {
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
JU1 =COLORANIM = CANIM = function () {
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
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
JU3 =FID = function () {
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
JU73 =COLORANIM = CANIM = function () {
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
JU63 =JQLS10 = function () {
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
JU13 =JQLS0 = function () {
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
}
JU3 =HIGHLIGHT = HLT = function () {
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
JU44 =HIGHLIGHT = HLT = function () {
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
JU16 =SAMPLER = EFFECTS = EFS = function () {
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
JU13 =SAMPLER = EFFECTS = EFS = function () {
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
JU12 =HIDESHOWNICE = HIDE = function () {
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
JU333 =OVERLAY = FADEIN = FIN = function () {
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
JU33 =HIDESHOWNICE = HIDE = function () {
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
JU3 =OVERLAY = FADEIN = FIN = function () {
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
JU30 =DGB = function () {
	$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
	$.dI('dgb', ['Drag me']).dgb()
}
JU31 =DPB = function () {
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
JU32 =DGB = function () {
	$.s({$dgb: {w: 100, h: 100, C: 'r'}}, 'o', 'dgb')
	$.dI('dgb', ['Drag me']).dgb()
}
JU33= DPB = function () {
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
 