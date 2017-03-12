let greet = function(fn){
	fn();
};

var robot = {
	firstid:'DD',
	lastid:'-264',
	name:'Jundo',
	getFullId: function(){
		var fullid = this.firstid + this.lastid;
		return fullid;
	},
	hello:function(){
		console.log(`Hello ${this.name}`);
	},
	Hola:function(){
		greet(this.hello.bind(this));
	},
	Hola2:function(){
		greet(
			()=>console.log(`Hello ${this.name}`)
		);
	}
};

var logid = function(){
	console.log('logged ' + this.getFullId());
}

var logorobotname = logid.bind(robot);
logorobotname();

robot.Hola();
robot.Hola2();

