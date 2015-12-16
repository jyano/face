/*************************************
 /* Attach Native JavaScript String Properties
 /*************************************/

nativeProperties = getNativeStringProperties();
for (var name in nativeProperties) {
	(function (name) {
		var stringProp = __nsp[name];
		if (typeof stringProp == 'function') {
			//console.log(stringProp)
			if (!__sp[name]) {
				if (nativeProperties[name] === 'string') {
					__sp[name] = function () {
						//console.log(name)
						return new this.constructor(stringProp.apply(this, arguments));
					}
				} else {
					__sp[name] = stringProp;
				}
			}
		}
	})(name);
}
/*************************************
 /* Function Aliases
 /*************************************/

__sp.repeat = __sp.times;
__sp.include = __sp.contains;
__sp.toInteger = __sp.toInt;
__sp.toBool = __sp.toBoolean;
__sp.decodeHTMLEntities = __sp.decodeHtmlEntities //ensure consistent casing scheme of 'HTML'
//******************************************************************************
// Set the constructor.  Without this, string.js objects are instances of
// Object instead of S.
//******************************************************************************
__sp.constructor = S;
//attach exports to StringJSWrapper
S.extendPrototype = extendPrototype;
S.restorePrototype = restorePrototype;
S.VERSION = VERSION;
S.TMPL_OPEN = '{{';
S.TMPL_CLOSE = '}}';
S.ENTITIES = ENTITIES;

  