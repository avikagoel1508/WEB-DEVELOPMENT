let url = [
    'http://codingblocks.com/courses/cpp',  //=s
    'http://codingblocks.com/courses/java',
    'http://codingblocks.com/courses/python',
    'http://codingblocks.com/mentor/abhishek',
    'http://codingblocks.com/mentor/mosina',
    'http://codingblocks.com/mentor/kartik',
]
let y={};
for(let i=0; i<url.length; i++){
   let s=url[i];
   let a=s.split('/');      // a: ['http', ' ', "codingblocks.com", 'courses', 'cpp']
   let b=a[2].split('.');   // b:['codingblocks', 'com']
   let k=b[0];                // k--> codingblocks
   
   
   if(!y[k]){            //y:{ " codingblocks":{}}
    y[k]={}
   }
   
   let category=a[3]
   let item=a[4]
   if(!y[k][category]){
    y[k][category]=[];
   }
   y[k][category].push(item);
   
}
        console.log(y);


/* 
    {
        "codingblocks":{
            "courses": ['cpp', 'java', 'python'],
            "mentor": ['abhishek', 'mosina', 'kartik'],
        }
    }
*/

