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

// Write the typenames to the console

console.log(getType.typeOf(obj)); // object

console.log(getType.typeOf(obj.value)); // string

console.log(getType.typeOf(str)); // string

console.log(getType.typeOf(num)); // number

console.log(getType.typeOf(date)); // date

console.log(getType.typeOf(func)); // function

console.log(getType.typeOf(bool)); // boolean

console.log(getType.typeOf(arr)); // array

console.log(getType.typeOf(regex)); // regular expression

console.log(getType.typeOf(undefined)); // undefined

console.log(getType.typeOf(null)); // null


// Simple comparison operations on the returned types

if(getType.typeOf(str) == getType.string){
	console.log("It's a string!");
}

if(getType.typeOf(date) == getType.object){
	console.log('This should not get hit');
} else {
	console.log('This is not an object, it is a', getType.typeOf(date));
}


