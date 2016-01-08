VERSION = '1.6.1';
ENTITIES = {};

//from sugar.js
 multiArgs=function(args, fn) {
	var result = [], i;
	for (i = 0; i < args.length; i++) {
		result.push(args[i]);
		if (fn) fn.call(args, args[i], i);
	}
	return result;
}
//from underscore.string
escapeChars = {
	lt: '<',
	gt: '>',
	quot: '"',
	apos: "'",
	amp: '&'
};
//from underscore.string
 
reversedEscapeChars = {};

for (var key in escapeChars) {
	reversedEscapeChars[escapeChars[key]] = key;
}
 
ENTITIES = {
	"amp": "&",
	"gt": ">",
	"lt": "<",
	"quot": "\"",
	"apos": "'",
	"AElig": 198,
	"Aacute": 193,
	"Acirc": 194,
	"Agrave": 192,
	"Aring": 197,
	"Atilde": 195,
	"Auml": 196,
	"Ccedil": 199,
	"ETH": 208,
	"Eacute": 201,
	"Ecirc": 202,
	"Egrave": 200,
	"Euml": 203,
	"Iacute": 205,
	"Icirc": 206,
	"Igrave": 204,
	"Iuml": 207,
	"Ntilde": 209,
	"Oacute": 211,
	"Ocirc": 212,
	"Ograve": 210,
	"Oslash": 216,
	"Otilde": 213,
	"Ouml": 214,
	"THORN": 222,
	"Uacute": 218,
	"Ucirc": 219,
	"Ugrave": 217,
	"Uuml": 220,
	"Yacute": 221,
	"aacute": 225,
	"acirc": 226,
	"aelig": 230,
	"agrave": 224,
	"aring": 229,
	"atilde": 227,
	"auml": 228,
	"ccedil": 231,
	"eacute": 233,
	"ecirc": 234,
	"egrave": 232,
	"eth": 240,
	"euml": 235,
	"iacute": 237,
	"icirc": 238,
	"igrave": 236,
	"iuml": 239,
	"ntilde": 241,
	"oacute": 243,
	"ocirc": 244,
	"ograve": 242,
	"oslash": 248,
	"otilde": 245,
	"ouml": 246,
	"szlig": 223,
	"thorn": 254,
	"uacute": 250,
	"ucirc": 251,
	"ugrave": 249,
	"uuml": 252,
	"yacute": 253,
	"yuml": 255,
	"copy": 169,
	"reg": 174,
	"nbsp": 160,
	"iexcl": 161,
	"cent": 162,
	"pound": 163,
	"curren": 164,
	"yen": 165,
	"brvbar": 166,
	"sect": 167,
	"uml": 168,
	"ordf": 170,
	"laquo": 171,
	"not": 172,
	"shy": 173,
	"macr": 175,
	"deg": 176,
	"plusmn": 177,
	"sup1": 185,
	"sup2": 178,
	"sup3": 179,
	"acute": 180,
	"micro": 181,
	"para": 182,
	"middot": 183,
	"cedil": 184,
	"ordm": 186,
	"raquo": 187,
	"frac14": 188,
	"frac12": 189,
	"frac34": 190,
	"iquest": 191,
	"times": 215,
	"divide": 247,
	"OElig;": 338,
	"oelig;": 339,
	"Scaron;": 352,
	"scaron;": 353,
	"Yuml;": 376,
	"fnof;": 402,
	"circ;": 710,
	"tilde;": 732,
	"Alpha;": 913,
	"Beta;": 914,
	"Gamma;": 915,
	"Delta;": 916,
	"Epsilon;": 917,
	"Zeta;": 918,
	"Eta;": 919,
	"Theta;": 920,
	"Iota;": 921,
	"Kappa;": 922,
	"Lambda;": 923,
	"Mu;": 924,
	"Nu;": 925,
	"Xi;": 926,
	"Omicron;": 927,
	"Pi;": 928,
	"Rho;": 929,
	"Sigma;": 931,
	"Tau;": 932,
	"Upsilon;": 933,
	"Phi;": 934,
	"Chi;": 935,
	"Psi;": 936,
	"Omega;": 937,
	"alpha;": 945,
	"beta;": 946,
	"gamma;": 947,
	"delta;": 948,
	"epsilon;": 949,
	"zeta;": 950,
	"eta;": 951,
	"theta;": 952,
	"iota;": 953,
	"kappa;": 954,
	"lambda;": 955,
	"mu;": 956,
	"nu;": 957,
	"xi;": 958,
	"omicron;": 959,
	"pi;": 960,
	"rho;": 961,
	"sigmaf;": 962,
	"sigma;": 963,
	"tau;": 964,
	"upsilon;": 965,
	"phi;": 966,
	"chi;": 967,
	"psi;": 968,
	"omega;": 969,
	"thetasym;": 977,
	"upsih;": 978,
	"piv;": 982,
	"ensp;": 8194,
	"emsp;": 8195,
	"thinsp;": 8201,
	"zwnj;": 8204,
	"zwj;": 8205,
	"lrm;": 8206,
	"rlm;": 8207,
	"ndash;": 8211,
	"mdash;": 8212,
	"lsquo;": 8216,
	"rsquo;": 8217,
	"sbquo;": 8218,
	"ldquo;": 8220,
	"rdquo;": 8221,
	"bdquo;": 8222,
	"dagger;": 8224,
	"Dagger;": 8225,
	"bull;": 8226,
	"hellip;": 8230,
	"permil;": 8240,
	"prime;": 8242,
	"Prime;": 8243,
	"lsaquo;": 8249,
	"rsaquo;": 8250,
	"oline;": 8254,
	"frasl;": 8260,
	"euro;": 8364,
	"image;": 8465,
	"weierp;": 8472,
	"real;": 8476,
	"trade;": 8482,
	"alefsym;": 8501,
	"larr;": 8592,
	"uarr;": 8593,
	"rarr;": 8594,
	"darr;": 8595,
	"harr;": 8596,
	"crarr;": 8629,
	"lArr;": 8656,
	"uArr;": 8657,
	"rArr;": 8658,
	"dArr;": 8659,
	"hArr;": 8660,
	"forall;": 8704,
	"part;": 8706,
	"exist;": 8707,
	"empty;": 8709,
	"nabla;": 8711,
	"isin;": 8712,
	"notin;": 8713,
	"ni;": 8715,
	"prod;": 8719,
	"sum;": 8721,
	"minus;": 8722,
	"lowast;": 8727,
	"radic;": 8730,
	"prop;": 8733,
	"infin;": 8734,
	"ang;": 8736,
	"and;": 8743,
	"or;": 8744,
	"cap;": 8745,
	"cup;": 8746,
	"int;": 8747,
	"there4;": 8756,
	"sim;": 8764,
	"cong;": 8773,
	"asymp;": 8776,
	"ne;": 8800,
	"equiv;": 8801,
	"le;": 8804,
	"ge;": 8805,
	"sub;": 8834,
	"sup;": 8835,
	"nsub;": 8836,
	"sube;": 8838,
	"supe;": 8839,
	"oplus;": 8853,
	"otimes;": 8855,
	"perp;": 8869,
	"sdot;": 8901,
	"lceil;": 8968,
	"rceil;": 8969,
	"lfloor;": 8970,
	"rfloor;": 8971,
	"lang;": 9001,
	"rang;": 9002,
	"loz;": 9674,
	"spades;": 9824,
	"clubs;": 9827,
	"hearts;": 9829,
	"diams;": 9830
}
/*************************************
 /* Private Functions
 /*************************************/
getNativeStringProperties = function () {
	var names = getNativeStringPropertyNames();
	var retObj = {};
	for (var i = 0; i < names.length; ++i) {
		var name = names[i];
		var func = __nsp[name];
		try {
			var type = typeof func.apply('teststring', []);
			retObj[name] = type;
		} catch (e) {
		}
	}
	return retObj;
}
getNativeStringPropertyNames = function () {
	var results = [];
	if (Object.getOwnPropertyNames) {
		results = Object.getOwnPropertyNames(__nsp);
		results.splice(results.indexOf('valueOf'), 1);
		results.splice(results.indexOf('toString'), 1);
		return results;
	} else { //meant for legacy cruft, this could probably be made more efficient
		var stringNames = {};
		var objectNames = [];
		for (var name in String.prototype)
			stringNames[name] = name;
		for (var name in Object.prototype)
			delete stringNames[name];
		//stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
		for (var name in stringNames) {
			results.push(name);
		}
		return results;
	}
}
//******************************************************************************
// Added an initialize function which is essentially the code from the S
// constructor.  Now, the S constructor calls this and a new method named
// setValue calls it as well.  The setValue function allows constructors for
// modules that extend string.js to set the initial value of an object without
// knowing the internal workings of string.js.
//
// Also, all methods which return a new S object now call:
//
//      return new this.constructor(s);
//
// instead of:
//
//      return new S(s);
//
// This allows extended objects to keep their proper instanceOf and constructor.
//******************************************************************************
initialize = function (object, s) {
	if (s !== null && s !== undefined) {
		if (typeof s === 'string')
			object.s = s;
		else
			object.s = s.toString();
	} else {
		object.s = s; //null or undefined
	}
	object.orig = s; //original object, currently only used by toCSV() and toBoolean()
	if (s !== null && s !== undefined) {
		if (object.__defineGetter__) {
			object.__defineGetter__('length', function () {
				return object.s.length;
			})
		} else {
			object.length = s.length;
		}
	} else {
		object.length = -1;
	}
}

