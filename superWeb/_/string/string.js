__nsp = String.prototype;
extendPrototype=function() {
	for (var name in __sp) {
		(function (name) {
			var func = __sp[name];
			if (!__nsp.hasOwnProperty(name)) {
				methodsAdded.push(name);
				__nsp[name] = function () {
					String.prototype.s = this;
					return func.apply(this, arguments);
				}
			}
		})(name);
	}
}

restorePrototype=function() {
	for (var i = 0; i < methodsAdded.length; ++i)
		delete String.prototype[methodsAdded[i]];
		methodsAdded.length = 0;
}
S =  function (str) {
	
	return new S(str);
	
	function S(s) {
		initialize(this, s);
	}
}

__sp = S.prototype = {
	between: function (left, right) {
		var s = this.s;
		var startPos = s.indexOf(left);
		var endPos = s.indexOf(right);
		var start = startPos + left.length;
		return new this.constructor(endPos > startPos ? s.slice(start, endPos) : "");
	},
	//# modified slightly from https://github.com/epeli/underscore.string
	camelize: function () {
		var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function (mathc, sep, c) {
			return (c ? c.toUpperCase() : '');
		});
		
		return new this.constructor(s);
	},
	
	
	capitalize: function () {
		return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
	},
	charAt: function (index) {
		return this.s.charAt(index);
	},
	chompLeft: function (prefix) {
		var s = this.s;
		if (s.indexOf(prefix) === 0) {
			s = s.slice(prefix.length);
			return new this.constructor(s);
		} else {
			return this;
		}
	},
	chompRight: function (suffix) {
		if (this.endsWith(suffix)) {
			var s = this.s;
			s = s.slice(0, s.length - suffix.length);
			return new this.constructor(s);
		} else {
			return this;
		}
	},
	//#thanks Google
	collapseWhitespace: function () {
		var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
		return new this.constructor(s);
	},
	contains: function (ss) {
		return this.s.indexOf(ss) >= 0;
	},
	count: function (ss) {
		var count = 0
				, pos = this.s.indexOf(ss)
		while (pos >= 0) {
			count += 1
			pos = this.s.indexOf(ss, pos + 1)
		}
		return count
	},
	//#modified from https://github.com/epeli/underscore.string
	dasherize: function () {
		var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
		return new this.constructor(s);
	},
	decodeHtmlEntities: function () { //https://github.com/substack/node-ent/blob/master/index.js
		var s = this.s;
		s = s.replace(/&#(\d+);?/g, function (_, code) {
			return String.fromCharCode(code);
		})
				.replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
					return String.fromCharCode(parseInt(hex, 16));
				})
				.replace(/&([^;\W]+;?)/g, function (m, e) {
					var ee = e.replace(/;$/, '');
					var target = ENTITIES[e] || (e.match(/;$/) && ENTITIES[ee]);
					if (typeof target === 'number') {
						return String.fromCharCode(target);
					}
					else if (typeof target === 'string') {
						return target;
					}
					else {
						return m;
					}
				})
		return new this.constructor(s);
	},
	endsWith: function (suffix) {
		var l = this.s.length - suffix.length;
		return l >= 0 && this.s.indexOf(suffix, l) === l;
	},
	escapeHTML: function () { //from underscore.string
		return new this.constructor(this.s.replace(/[&<>"']/g, function (m) {
			return '&' + reversedEscapeChars[m] + ';';
		}));
	},
	
	ensureLeft: function (prefix) {
		var s = this.s;
		if (s.indexOf(prefix) === 0) {return this}
		else {return new this.constructor(prefix + s)}

	},
	
	
	
	ensureRight: function (suffix) {
		var s = this.s;
		if (this.endsWith(suffix)) {
			return this;
		} else {
			return new this.constructor(s + suffix);
		}
	},
	humanize: function () { //modified from underscore.string
		if (this.s === null || this.s === undefined)
			return new this.constructor('')
		var s = this.underscore().replace(/_id$/, '').replace(/_/g, ' ').trim().capitalize()
		return new this.constructor(s)
	},
	isAlpha: function () {
		return !/[^a-z\xC0-\xFF]/.test(this.s.toLowerCase());
	},
	isAlphaNumeric: function () {
		return !/[^0-9a-z\xC0-\xFF]/.test(this.s.toLowerCase());
	},
	isEmpty: function () {
		return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
	},
	isLower: function () {
		return this.isAlpha() && this.s.toLowerCase() === this.s;
	},
	isNumeric: function () {
		return !/[^0-9]/.test(this.s);
	},
	isUpper: function () {
		return this.isAlpha() && this.s.toUpperCase() === this.s;
	},
	left: function (N) {
		if (N >= 0) {
			var s = this.s.substr(0, N);
			return new this.constructor(s);
		} else {
			return this.right(-N);
		}
	},
	lines: function () { //convert windows newlines to unix newlines then convert to an Array of lines
		return this.replaceAll('\r\n', '\n').s.split('\n');
	},
	pad: function (len, ch) { //https://github.com/component/pad
		ch = ch || ' ';
		if (this.s.length >= len) return new this.constructor(this.s);
		len = len - this.s.length;
		var left = Array(Math.ceil(len / 2) + 1).join(ch);
		var right = Array(Math.floor(len / 2) + 1).join(ch);
		return new this.constructor(left + this.s + right);
	},
	padLeft: function (len, ch) { //https://github.com/component/pad
		ch = ch || ' ';
		if (this.s.length >= len) return new this.constructor(this.s);
		return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
	},
	padRight: function (len, ch) { //https://github.com/component/pad
		ch = ch || ' ';
		if (this.s.length >= len) return new this.constructor(this.s);
		return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
	},
	parseCSV: function (delimiter, qualifier, escape, lineDelimiter) { //try to parse no matter what
		delimiter = delimiter || ',';
		escape = escape || '\\'
		if (typeof qualifier == 'undefined')
			qualifier = '"';
		var i = 0, fieldBuffer = [], fields = [], len = this.s.length, inField = false, self = this;
		var ca = function (i) {
			return self.s.charAt(i)
		};
		if (typeof lineDelimiter !== 'undefined') var rows = [];
		if (!qualifier)
			inField = true;
		while (i < len) {
			var current = ca(i);
			switch (current) {
				case escape:
					//fix for issues #32 and #35
					if (inField && ((escape !== qualifier) || ca(i + 1) === qualifier)) {
						i += 1;
						fieldBuffer.push(ca(i));
						break;
					}
					if (escape !== qualifier) break;
				case qualifier:
					inField = !inField;
					break;
				case delimiter:
					if (inField && qualifier)
						fieldBuffer.push(current);
					else {
						fields.push(fieldBuffer.join(''))
						fieldBuffer.length = 0;
					}
					break;
				case lineDelimiter:
					if (inField) {
						fieldBuffer.push(current);
					} else {
						if (rows) {
							fields.push(fieldBuffer.join(''))
							rows.push(fields);
							fields = [];
							fieldBuffer.length = 0;
						}
					}
					break;
				default:
					if (inField)
						fieldBuffer.push(current);
					break;
			}
			i += 1;
		}
		fields.push(fieldBuffer.join(''));
		if (rows) {
			rows.push(fields);
			return rows;
		}
		return fields;
	},
	replaceAll: function (ss, r) {
		//var s = this.s.replace(new RegExp(ss, 'g'), r);
		var s = this.s.split(ss).join(r)
		return new this.constructor(s);
	},
	right: function (N) {
		if (N >= 0) {
			var s = this.s.substr(this.s.length - N, N);
			return new this.constructor(s);
		} else {
			return this.left(-N);
		}
	},
	setValue: function (s) {
		initialize(this, s);
		return this;
	},
	slugify: function () {
		var sl = (new S(this.s.replace(/[^\w\s-]/g, '').toLowerCase())).dasherize().s;
		if (sl.charAt(0) === '-')
			sl = sl.substr(1);
		return new this.constructor(sl);
	},
	startsWith: function (prefix) {
		return this.s.lastIndexOf(prefix, 0) === 0;
	},
	stripPunctuation: function () {
		//return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
		return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
	},
	stripTags: function () { //from sugar.js
		var s = this.s, args = arguments.length > 0 ? arguments : [''];
		multiArgs(args, function (tag) {
			s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
		});
		return new this.constructor(s);
	},
	template: function (values, opening, closing) {
		var s = this.s
		var opening = opening || S.TMPL_OPEN
		var closing = closing || S.TMPL_CLOSE
		var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
		var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$')
		var r = new RegExp(open + '(.+?)' + close, 'g')
		//, r = /\{\{(.+?)\}\}/g
		var matches = s.match(r) || [];
		matches.forEach(function (match) {
			var key = match.substring(opening.length, match.length - closing.length);//chop {{ and }}
			if (typeof values[key] != 'undefined')
				s = s.replace(match, values[key]);
		});
		return new this.constructor(s);
	},
	times: function (n) {
		return new this.constructor(new Array(n + 1).join(this.s));
	},
	toBoolean: function () {
		if (typeof this.orig === 'string') {
			var s = this.s.toLowerCase();
			return s === 'true' || s === 'yes' || s === 'on';
		} else
			return this.orig === true || this.orig === 1;
	},
	toFloat: function (precision) {
		var num = parseFloat(this.s)
		if (precision)
			return parseFloat(num.toFixed(precision))
		else
			return num
	},
	toInt: function () { //thanks Google
		// If the string starts with '0x' or '-0x', parse as hex.
		return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
	},
	trim: function () {
		var s;
		if (typeof __nsp.trim === 'undefined')
			s = this.s.replace(/(^\s*|\s*$)/g, '')
		else
			s = this.s.trim()
		return new this.constructor(s);
	},
	trimLeft: function () {
		var s;
		if (__nsp.trimLeft)
			s = this.s.trimLeft();
		else
			s = this.s.replace(/(^\s*)/g, '');
		return new this.constructor(s);
	},
	trimRight: function () {
		var s;
		if (__nsp.trimRight)
			s = this.s.trimRight();
		else
			s = this.s.replace(/\s+$/, '');
		return new this.constructor(s);
	},
	truncate: function (length, pruneStr) { //from underscore.string, author: github.com/rwz
		var str = this.s;
		length = ~~length;
		pruneStr = pruneStr || '...';
		if (str.length <= length) return new this.constructor(str);
		var tmpl = function (c) {
					return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
				},
				template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'
		if (template.slice(template.length - 2).match(/\w\w/))
			template = template.replace(/\s*\S+$/, '');
		else
			template = new S(template.slice(0, template.length - 1)).trimRight().s;
		return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr);
	},
	toCSV: function () {
		var delim = ',', qualifier = '"', escape = '\\', encloseNumbers = true, keys = false;
		var dataArray = [];
		
		function hasVal(it) {
			return it !== null && it !== '';
		}
		
		if (typeof arguments[0] === 'object') {
			delim = arguments[0].delimiter || delim;
			delim = arguments[0].separator || delim;
			qualifier = arguments[0].qualifier || qualifier;
			encloseNumbers = !!arguments[0].encloseNumbers;
			escape = arguments[0].escape || escape;
			keys = !!arguments[0].keys;
		} else if (typeof arguments[0] === 'string') {
			delim = arguments[0];
		}
		if (typeof arguments[1] === 'string')
			qualifier = arguments[1];
		if (arguments[1] === null)
			qualifier = null;
		if (this.orig instanceof Array)
			dataArray = this.orig;
		else { //object
			for (var key in this.orig)
				if (this.orig.hasOwnProperty(key))
					if (keys)
						dataArray.push(key);
					else
						dataArray.push(this.orig[key]);
		}
		var rep = escape + qualifier;
		var buildString = [];
		for (var i = 0; i < dataArray.length; ++i) {
			var shouldQualify = hasVal(qualifier)
			if (typeof dataArray[i] == 'number')
				shouldQualify &= encloseNumbers;
			if (shouldQualify)
				buildString.push(qualifier);
			if (dataArray[i] !== null && dataArray[i] !== undefined) {
				var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
				buildString.push(d);
			} else
				buildString.push('')
			if (shouldQualify)
				buildString.push(qualifier);
			if (delim)
				buildString.push(delim);
		}
		//chop last delim
		//console.log(buildString.length)
		buildString.length = buildString.length - 1;
		return new this.constructor(buildString.join(''));
	},
	toString: function () {
		return this.s;
	},
	//#modified from https://github.com/epeli/underscore.string
	underscore: function () {
		var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
		if ((new S(this.s.charAt(0))).isUpper()) {
			s = '_' + s;
		}
		return new this.constructor(s);
	},
	unescapeHTML: function () { //from underscore.string
		return new this.constructor(this.s.replace(/\&([^;]+);/g, function (entity, entityCode) {
			var match;
			if (entityCode in escapeChars) {
				return escapeChars[entityCode];
			} else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
				return String.fromCharCode(parseInt(match[1], 16));
			} else if (match = entityCode.match(/^#(\d+)$/)) {
				return String.fromCharCode(~~match[1]);
			} else {
				return entity;
			}
		}));
	},
	valueOf: function () {
		return this.s.valueOf();
	}
}

methodsAdded = [];

