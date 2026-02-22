let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("Hey from promise 1") 
    }, 2000);
})
let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hey from promise 2")
    }, 1000);
})
Promise.race([p1,p2])
.then(data =>{
    console.log(data)
})

