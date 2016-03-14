var getType = require('./index');

var obj = {value: 'Hello world'};
var str = 'Hello world';
var num = 999;
var date = new Date();
var func = function(){
	console.log('Hello world');
}
var bool = true;
var arr = [1,2,3];
var regex = /test/;

var func2 = new func();

// Write the getType.typeOfs to the console

console.log(getType.typeOf(obj)); // object
console.log(getType.typeOf(new Object()) ); // object

console.log(getType.typeOf(obj.value)); // string
console.log(getType.typeOf(str)); // string
console.log(getType.typeOf(new String(''))); // string

console.log(getType.typeOf(num)); // number
console.log(getType.typeOf(new Number('1'))); // number
console.log(getType.typeOf(NaN)); // number
console.log(getType.typeOf(Infinity)); // number

console.log(getType.typeOf(date)); // date
console.log(getType.typeOf(new Date())); // date

console.log(getType.typeOf(func)); // function
console.log(getType.typeOf(new Function())); // function

console.log(getType.typeOf(bool)); // boolean
console.log(getType.typeOf(new Boolean())); // boolean

console.log(getType.typeOf(arr)); // array
console.log(getType.typeOf(new Array())); // array

console.log(getType.typeOf(regex)); // regular expression
console.log(getType.typeOf(new RegExp('^not', 'g'))); // regular expression

console.log(getType.typeOf(undefined)); // undefined
console.log(getType.typeOf(null)); // null

console.log(getType.typeOf(new Error('error')) ); // error
console.log(getType.typeOf(new TypeError('typeerror')) ); // typeerror

console.log(getType.typeOf(Math)); // math
console.log(getType.typeOf(JSON) ); // json
console.log(getType.typeOf((function(){ return arguments; })()));  // arguments


// Simple comparison operations on the returned types

if(getType.typeOf(str) == getType.string){
	console.log("It's a string!");
}

if(getType.typeOf(date) == getType.object){
	console.log('This should not get hit');
} else {
	console.log('This is not an object, it is a', getType.typeOf(date));
}


