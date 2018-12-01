const promise = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('This is my resolve data.') 
      resolve('This is my OTHER resolved data.') 
    }, 3000)
    
});

promise.then((data) => {
    console.log(data);
})