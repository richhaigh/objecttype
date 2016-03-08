var objecttype = require('./index');

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

console.log(objecttype.getType(obj));

console.log(objecttype.getType(str));

console.log(objecttype.getType(num));

console.log(objecttype.getType(date));

console.log(objecttype.getType(func));

console.log(objecttype.getType(bool));

console.log(objecttype.getType(arr));

console.log(objecttype.getType(regex));

if(objecttype.getType(str) == objecttype.string){
	console.log("It's a string!");
}

if(objecttype.getType(date) == objecttype.object){
	console.log('This should not get hit');
} else {
	console.log('This is not an object, it is a', objecttype.getType(date));
}