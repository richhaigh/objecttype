var bool = "boolean",
	number = "number",
	string = "string",
	func = "function",
	array = "array",
	date = "date",
	regexp = "regexp",
	object = "object",
	error = "error",
	typeError = "TypeError",
	math = "math",
	json = "json",
	args = "arguments",
	_null = "null",
	_undefined = "undefined";


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
	"TypeError": typeError,
	"Object": object,
	"Error": error
};

module.exports.string = string;
module.exports.boolean = module.exports.bool = bool;
module.exports.number = number;
module.exports.function = func;
module.exports.array = array;
module.exports.date = date;
module.exports.regularExpression = module.exports.regexp = regexp;
module.exports.object = object;
module.exports.math = math;
module.exports.json = json;
module.exports.error = error;
module.exports.arguments = args
module.exports.null = _null;
module.exports.undefined = _undefined;

module.exports.typeOf = function(obj) {
	var t = obj == null ? String(obj) : typenames[toString.call(obj)] || toString.call(obj); 
	if (t == object || t == error) {
		return obj.constructor ? typenames[obj.constructor.name]: t;
	}
	return t;
}
