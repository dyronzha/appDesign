//return直接執行
var addclosure = () =>{
	var counter = 0;
	return (() =>{
		counter +=1;
		console.log(counter);
	})();
};

addclosure();
addclosure();
addclosure();

//外層是不是值?
var x = (()=>{
  return(5+5);
})();
console.log(x);
var addclosure2 = (() =>{
	var counter = 0;
	return (() =>{
		counter +=1;
		console.log(counter);
	})();
})();
console .log(addclosure2);

//正確
var addclosure3 = (()=>{
	var counter = 0;
	return() =>{
		counter++;
		console.log(counter);
	}
})();
addclosure3();
addclosure3();
addclosure3();

var add = (x) =>{
	return (y) =>{
		console.log(x+y);
	};
}
var add7 = add(7);
add7(6);

var add4 = function(y){
  return 4+y;
}
console.log(add4(2));