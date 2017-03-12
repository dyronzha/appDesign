'use strict'

class Robot{
	constructor(name,id){
		this.name = name;
		this.id = id;
	}
	printGreeting(){
		console.log(`Hi, I am ${this.name}!`);
		console.log(`My ID is ${this.id}!`);
	}
}

var Robot1 = new Robot('Lanco','L113');
var Robot2 = new Robot('Fluco','F15');
Robot1.printGreeting();
Robot2.printGreeting();