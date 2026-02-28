let movie1=document.getElementById('movie-1')
console.log(movie1)
let allmovies=document.getElementsByClassName('movie')
console.log(allmovies)
let m1=document.querySelector('#movie-1')// select only single element
console.log(m1)
let am=document.querySelectorAll('.movie')// select multiplr elements
console.log(am)
m1.innerText="Hello World"
m1.innerHTML='<h1>Hulk</h1>'