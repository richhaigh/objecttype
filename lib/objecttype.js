var bool = "boolean",
	number = "number",
	string = "string",
	func = "function",
	array = "array",
	date = "date",
	regexp = "regexp",
	object = "object";


var typenames = {
	"[object Boolean]": bool,
	"[object Number]": number,
	"[object String]": string,
	"[object Function]": func,
	"[object Array]": array,
	"[object Date]": date,
	"[object RegExp]": regexp,
	"[object Object]": object
};

module.exports.string = string;
module.exports.boolean = module.exports.bool = bool;
module.exports.number = number;
module.exports.function = func;
module.exports.array = array;
module.exports.date = date;
module.exports.regularExpression = module.exports.regexp = regexp;
module.exports.object = object;

module.exports.typeOf = function(obj) {
	return obj == null ? String(obj) : typenames[toString.call(obj)] || object;
}

