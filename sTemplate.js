$.scr = function (scr, fn) {return $.getScript(scr, fn)}
$.getMultiScripts = function (arr, path) {
	var _arr = $.map(arr, function (scr) {
		return $.getScript((path || "") + scr)
	})
	//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
	return $.when.apply($, _arr)
}
SCRIPTS = _.map([
	"socket.io/socket.io", "string", 'bb', 'bbmn', 'ko', 'mel', 'gq', 'objects', 'defaultMug', 'spriteSheets',
	'core', 'jqueryplugins', 'html', 'boot', 'ui', 'can', 'sys', 'images', 'event', 'socket', 'ranky', 'routeTests', 'nav', 'api', 'j3', 'display', 'animate', 'imagine', 'work', 'tween', 'universe', 'create', 'easel', 'displayObject', 'shape', 'text', 'mobile', 'animation', 'sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve', 'playgame', 'users', 'share', 'chat', 'messages', 'knock', 'bbtemps', 'backbone1', 'people', 'mar', 'backbone', 'angu'
	
	// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
	// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
	//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
	//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
], function (js) {
	return "/" + js + ".js"
})
// _.each(SCRIPTS, function(scr){$.scr(scr)})
/*
 dfr = $.getMultiScripts(SCRIPTS)
 dfr.done(function(){alert('done')})
 .always(function(){
 alert('always')
 $.scr('app')
 })
 .fail(function(){alert('fail')})
 */
GSCR = function () {
	$.scr = function (scr, fn) {
		return $.getScript(scr, fn)
	}
	$.getMultiScripts = function (arr, path) {
		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr)
		})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($, _arr)
	}
	$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
		console.log(a + b + c)
		d = c
		$l('got script')
		$.$(function () {
			$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
		})
	})
	dfr = $.Deferred(function (dfrd) {
		d = dfrd
		// $(dfrd.resolve)
	})
	testx = 100
	$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
	).done(function () {
				$l(testx)
			})
}
$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}
LOADSCRIPTS = function () {
	$(function () {
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )
		$.j('/us.js')
		$.j('/string.js')
		$.j('/both.js')
		//$.j('/jq.js')
		//$.j('/jqSer.js')
		$.j('/bs.js')
		$.j('/frontOb.js')
		$.j('/handy.js')
		$.j('/sty.js')
		$.j('/rules.js')
		$.j('/flex.js')
		$.j('/bb.js')
		$.j('/bbCore.js')
		$.j('/bbLs.js')
		arr = [
			"us", 'string', 'both', 'jq', 'jqSer', 'bs', 'frontOb', 'handy', 'sty',
			'rules', 'flex', 'flexApps', 'boot', 'bb', 'bbCore', 'bbLs', 'bbTemplate',
			'bbApps', 'avail', 'bbLsApps', 'BfRoll', 'blog'
		]
	})
}
$.fn.none = function () {
	return this.css('display', 'none')
}
Ap = {M: {}, C: {}, V: {}, T: {}}
Temp = function (i, h) {
	var s = ''
	return _.tp($('#' + i).html(), h || {})
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	s = "<script type='text/template'>" + s + "</script>"
	return $(s).id(i).A()
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return _.tp($('#' + i).html(), h || {})
}
__ = 'fadsfasasdf'
$Df = function (ob) {
	return $M({df: ob})
}
//function qT_superTemplate() {
qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	return fn(ob, $el || $._d())
}
function QTexample() {
	function sampleTemplates() {
		$tp.thed = function (ob, $el) {
			return $el.A(
					$.thead().A(
							$.tr().K('header').A(
									$.th('Name'),
									$.th('Age')
							)
					)
			)
			// $tp.thed :  use like this:  t=qT(thed).a()
		}
		$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
			//two ways ok!!!!
//can pass:
//1) jq/el
			return $el.A($.li(ob.me), $.li(ob.me))
			//2)
			// or .... array
			return [$.li().A(ob.me), $.li().A(ob.me)]
		}
	}
	
	e = qT($tp.lii, {me: 'jason'}).a()
}
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
qT = function (fn, ob, el) {
	return fn(ob, $(el) || $.d())
}
//a sample template
lii = function (o, e) {
	return e(li(o.me), li(o.me))
}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
thed = function (o, e) {
	return e(
			thead()(
					tr().k('header')(
							th()('Name'), th()('Age')
					)
			)
	)
}
// t=qT(thed).a()
Temp = function (i, h) {
	var s = ''
	return _.tp(
			$('#' + i).html(), h || {}
	)
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return $(s).id(i).A()
}
listTp = function () {
	$.d().C('o').id('list-tp').A($.li().A($.a()))
} 