let arr=[1,2,3,4];
console.log(arr);
//ways of printing
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
}
arr[10]="hello";
console.log(arr);
//for of loop
for(let data of arr){
    console.log(data);
}