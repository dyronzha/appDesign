let promise = new Promise((resolve, reject)=>{
   resolve();
});

promise.then(()=>{
   console.log('finish1');
});

promise.catch(()=>{
   console.log('nooooooooo');
});

promise
   .then(()=>console.log('finish2'))
   .then(()=>console.log('yeeeah5'));

promise
   .then(()=>console.log('finish3'))

promise
   .then(()=>console.log('finish4'))
   .then(()=>console.log('finish6'))
   .catch(()=>console.log('uh oh!'));


   


   


