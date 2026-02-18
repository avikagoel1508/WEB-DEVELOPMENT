console.log("5==5", 5==5);
console.log("'5'==5", '5'==5);
console.log("5===5", 5===5); // strict equality

let arr=[1,2,3,4];
let arr1=[1,2,3,4];
console.log('arr==arr1', arr==arr1);
//ans is false because both the arrays have diff memory but same values(diff address)
let arr2=arr;
console.log('arr==arr2', arr==arr2);
console.log("+[]", +[]); // converting array to number
console.log('0==[]', 0==[]);
console.log("+{", +{});
console.log('0=={}', 0=={});
console.log('\\t==0', 0=='\t');
console.log('\\n==0', 0=='\n');
console.log('\\t==\\n', '\t'=='\n');// dono same data type ke h toh koii conversion nhi hua that's whyy vo as a string compare hua h toh false aa gaya
console.log("+[1,2]", +[1,2]);