module.exports.string = string = "String";
module.exports.boolean = module.exports.bool = bool = "Boolean";
module.exports.number = number = "Number";
module.exports.

function = func = "Function";
module.exports.array = array = "Array";
module.exports.date = date = "Date";
module.exports.regularExpression = module.exports.regexp = regexp = "RegExp";
module.exports.object = object = "Object";
module.exports.math = math = "Math";
module.exports.json = json = "JSON";
module.exports.error = error = "Error";
module.exports.typeError = typeError = "TypeError"
module.exports.arguments = args = "Arguments";
module.exports.symbol = symbol = "Symbol";
module.exports.null = _null = "null";
module.exports.undefined = _undefined = "undefined";

var typenames = {
	"[object Boolean]": bool,
	"[object Number]": number,
	"[object String]": string,
	"[object Function]": func,
	"[object Array]": array,
	"[object Date]": date,
	"[object RegExp]": regexp,
	"[object Object]": object,
	"[object Error]": error,
	"[object Math]": math,
	"[object JSON]": json,
	"[object Arguments]": args,
	"[object Symbol]": symbol,
	"TypeError": typeError,
	"Object": object,
	"Error": error,
	"[object Undefined]": _undefined
};

module.exports.typeOf = function(obj) {
	var t = typenames[toString.call(obj)] == undefined ? String(obj) :
		typenames[toString.call(obj)] || toString.call(obj);
	if (t == object || t == error) {
		return obj.constructor.name ? typenames[obj.constructor.name] || t : t;
	}
	return t;
}

module.exports.typeName = function(obj) {
	var t = this.typeOf(obj);
	if (t == object || t == _undefined) {
		return obj.constructor.name ? obj.constructor.name : t;
	} else {
		return t;
	}
}
