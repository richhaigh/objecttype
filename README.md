# typenames  
Simple node package to determine object types  

##Installation  
	npm install typenames

##Usage  
###Basic Operation  
####Return the type of the an object  

	var typenames = require('typenames');
	
	var t = typenames.typeOf("foo");
	
	t = typenames.typeOf(new String("foo"));


####Return the type name of an object  

	function bar () {}
	
	var myObject = new bar();
	
	console.log(typenames.typeOf(myObject)); // Object
	console.log(typenames.typeName(myObject)); // bar
	

Custom objects need to implement the constructor pattern in order for the name to be identified.  

###Supported Types  
The list below are the default types included.  

	
	typenames.string;
	typenames.boolean;
	typenames.bool;
	typenames.number;
	typenames.function;
	typenames.array;
	typenames.date;
	typenames.regularExpression;
	typenames.regexp;
	typenames.object;
	typenames.math;
	typenames.json;
	typenames.error;
	typenames.arguments
	typenames.null;
	typenames.undefined;
	typenames.error;
	typenames.typeError;
	typenames.symbol;
	


###Comparison Operations
	var d = new Date();
	var bool = true;
	
	var checkType = function(obj){
		switch(typenames.typeOf(obj)){
			case typenames.date:
				console.log('The date is ' + d)
				break;
			case typenames.boolean:
				console.log('bool');
				break;
			case typenames.object:
				console.log('Just an object');
				break;
			default:
				console.log('The object is a ' + typenames.typeOf(obj));
				break;
		}
	}
	
	checkType(d);
	checkType(bool);
	checkType('foo');

Custom objects will return a type of *object*. This can be used in conjunction with the *typeName* method to identify the object. An example is shown below.

	function bar () {}
	
	var myObject = new bar();
	
	if(typenames.typeOf(moObject) == typenames.object){
		if(typenames.typeName(myObject) == bar.name){
			// True
		} else {
			// Another object	
		}
	}
	
