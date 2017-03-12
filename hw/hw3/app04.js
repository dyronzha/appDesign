var person = {
	firstname:'Shart',
	lastname:'milly',
	greet0:function(){
		console.log(this);
	},
	greet1:()=>{
		console.log(this);
	},
	greet2:function(){
		(()=>{
			console.log(this)
		})();
		
	}
}


person.greet0();
person.greet1();
person.greet2();