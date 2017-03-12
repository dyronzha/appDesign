let name,mod;
var robot = {
	firstnumber:'AA',
	lastnumber:'-01',
	name,
	mod,
	component:{
		attach0:'',
		attach1:''
	},
	hello:function(){
		console.log(`Hola ${this.firstnumber}${this.lastnumber}`);
	},
	printinfo(){
		console.log(`${this.name} is ${this.mod}`);
	},
	princon(){
		console.log(`${this.component.attach0},${this.component.attach1}`);
	}
};



robot.hello();
robot.name = 'Mossi';
robot.mod = 'fabulous';
robot.printinfo();
robot.component.attach0 = 'laser';
robot.component.attach1 = 'missle';
robot.princon();

