let obj={
    a: 10,
    name: 'Tarun',
    age: 20,
    ' ': 'i am a space',
    'first name': 'coding'
}
// written already on notion
console.log(obj);
console.log(obj.a);
console.log(obj[' '])
console.log(obj['first name'])
for(let key in obj){
// console.log(key);        
//         console.log(key, “ : “ , obj[key];        to print both the keys and value
console.log(key); 
}
for(let key in obj){
    //   to print both the keys and value
 console.log(key, " : ", obj[key]);        
console.log(key); 
}

