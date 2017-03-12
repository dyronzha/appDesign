function greet(){
	console.log('hi');
}
var greetMe = function(){
	console.log('Hi Mr.Stark!');
}
function loogGreet(fn){
	fn();
}
greet();
greetMe();
loogGreet(greet);
loogGreet(greetMe);
