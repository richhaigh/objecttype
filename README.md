# typenames  
Simple node package to determine object types  

##Installation  
	npm install typenames

##Usage  
###Basic Operation
	var typenames = require('typenames');
	
	var t = typenames.typeOf("foo");
	
	t = typenames.typeOf(new String("foo"));
	

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


