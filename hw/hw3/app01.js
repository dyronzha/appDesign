
var hamburgers = ['egg','pork','beef','chicken','fish'];
var sandswitch;

//push

sandswitchs = [];
for (var i = 0 ; i <hamburgers.length; i++) {
	sandswitchs.push(hamburgers[i]);
}
console.log(sandswitchs);

//slice
sandswitchs = hamburgers.slice(1,4);
console.log(sandswitchs);


//foreach
for (var i = 0; i <hamburgers.length; i++) {
	console.log(hamburgers[i]);
}

hamburgers.forEach(
	(hamburger) => console.log(`This hamburger cintains ${hamburger}`));

//map
hamburgers = [
	{flavor:'pork',price:'50'},
	{flavor:'beef',price:'70'},
	{flavor:'chicken',price:'50'}
];

var prices = hamburgers.map((hamburger)=>hamburger.price);
console.log(prices);

//spread operator
sandswitchs = [...sandswitchs,...prices];
console.log(sandswitchs);



function adder (base, ...numbers) {
	numbers.forEach(function (number) {
		console.log(base + number);

	});
}
adder(3, 5, 7, 1);

function adder (base, ...numbers) {
	numbers.forEach(
		number=>console.log(base+number)
		);
}
adder(5,12,3,9);


/*
let state = {a:10,b:20,c:30};
hamburgers = {egg:30,beef:70,pork:50};
state = {...state, b:50};
console.log(state);
console.log(hamburgers);
*/