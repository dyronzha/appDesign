
function hello(callback){
	console.log('Hola');
	var data1 = {
		mod:'mad',
		mod2:'fast'
	};
	var data2 = {
		mod:'sad',
		mod2:'slow'
	};
	callback(data1,data2);
}

hello((a1,a2)=>{
	console.log("invoked");
	console.log(a1.mod +", "+ a2.mod2);
});
