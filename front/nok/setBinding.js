$.fn.dB = function (dB) {
	this.at({'data-bind': dB})
	return this
}
KOob = {
	e: 'foreach', c: 'checked', t: 'text', v: 'value', h: 'html', i: 'if', $: 'click',
	f: 'hasFocus', w: 'with', s: 'css', y: 'style', a: 'attr', en: 'enable',
	vs: 'visible', tI: 'textInput',
	o: 'options',
	oT: 'optionsText',
	ev: 'event',
	sm: 'submit', sO: 'selectedOptions', n: 'ifnot', d: 'disable', u: 'uniqueName', vU: 'valueUpdate',
	cm: 'component', tp: 'template',
	alt: {
		t: 'text', h: 'html', s: 'css', y: 'style',
		a: 'attr', e: 'foreach', i: 'if', n: 'ifnot', w: 'with', $: 'click', ev: 'event', sb: 'submit',
		en: 'enable', d: 'disable', V: 'valueUpdate', vs: 'visible', f: 'hasFocus',
		c: 'checked', ch: 'checked', v: 'value', o: 'options',
		ti: 'textInput', so: 'selectedOptions', u: 'uniqueName', tp: 'template', cm: 'component'
	}
}
hasColon = function (str) {
	return str.indexOf(':') != -1
}
$KOob = function (k, v) {
	var g = G(arguments), o = [], str
	if (g.O) {
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	return (KOob[k] ? KOob[k] : k) + (v ? (': ' + v) : '')
}
$.fn._b = $.fn._ko = function (a, b) {
	var $el=this, g = G(arguments), o = [], str
	
 
	
	$el.dB(O(a) ? $KOob(a) : hasColon(a) ? a : $KOob(a, b || '$'))
			
	return $el
}
$.fn.ko = $.fn.b = function (a, b) {
	var g = G(arguments), o = [], str
	if (g.O) {
		_.e(g.f, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		str = o.join()
	}
	return this.dB(hasColon(a) ? (KOob[a] ? KOob[a] : a + ':' + b || '$') : a)
}