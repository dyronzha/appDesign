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

class AT_Robot extends Robot{
	constructor(name,id,weapon){
		super(name,id);
		this.weapon = weapon;
	}
	printGreeting(){
		super.printGreeting();
		console.log('I can use ' + this.weapon + '.');
	}
}

var Robot1 = new Robot('Lanco','L113');
var Robot2 = new Robot('Fluco','F15');
Robot1.printGreeting();
Robot2.printGreeting();

Robot.prototype.printGreeting = function(){
	console.log(this.id + '  ERROR');
}

var Robot3 = new AT_Robot('Giando','G466','light saber');
Robot3.printGreeting();