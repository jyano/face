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
 