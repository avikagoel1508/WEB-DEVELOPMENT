let obj={
    "a" :10,
    'name': 'Tarun',
    'age': 20,
}
// destructuring syntax
const{name, hero}=obj; // basically to copy in it without usingobj.name
console.log(name);
console.log(hero);  // will give undefined
const { age, ...ans}=obj;