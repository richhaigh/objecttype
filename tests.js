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

console.log(getType.getType(obj));

console.log(getType.getType(str));

console.log(getType.getType(num));

console.log(getType.getType(date));

console.log(getType.getType(func));

console.log(getType.getType(bool));

console.log(getType.getType(arr));

console.log(getType.getType(regex));

console.log(getType.getType(undefined));

console.log(getType.getType(null));

if(getType.getType(str) == getType.string){
	console.log("It's a string!");
}

if(getType.getType(date) == getType.object){
	console.log('This should not get hit');
} else {
	console.log('This is not an object, it is a', getType.getType(date));
}


