var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

greetSam = () => console.log('hi Sam');
greetSam();

greetYou = name => console.log('hi '+name+'!');
greetYou('hoo');

var square1 = function(num){return num*num};
var square2 = num =>{return num*num};
var square3 = num =>num*num;
var multiple = (num1,num2)=> num1*num2;
console.log(square1(5));
console.log(square2(6));
console.log(square3(7));
console.log(multiple(8,9));
