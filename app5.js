function b1(){
	var myVar = 3;
	console.log(myVar);
	(function c1(){
		console.log(myVar)
	})();
}

function a1(){
	var myVar = 1;
	b1();
	console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();

var x = 7;
var y = 7;
(()=>{
	var y;
	var z = x*y;
	y = 8;
	console.log('x * y = '+z);
  console.log(y);
})();