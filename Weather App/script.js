let btn=document.querySelector('#btn');
let apikey="49c86b289da0b18b1c6ccf3e0da32a95"
btn.addEventListener('click' , ()=>{
    let city=document.getElementById('city')
    // console.log(city.value)
 let cityname=city.value
let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`
fetch(url).then(res=>{
     return res.json()
}).then(data=>{
    console.log(data)
    let result=document.getElementById('result')
// result.innerHTML=`
// <h2>${data.name}</h2>
// <p>Weather: ${data.weather[0].main}</p>
// <p>Wind: ${data.wind.speed}</p>
// <p>Temp: ${data.main.temp}°C</p>
// `

let h2=document.createElement("h2");
h2.innerText=data.name;
let p=document.createElement("p")
p.innerText=data.weather[0].main
let p1=document.createElement("p1")
p1.innerText=data.wind.speed;
let div=document.createElement("div")
div.innerText=data.main.temp
result.appendChild(h2)
result.appendChild(p)
result.appendChild(p1)
result.appendChild(div)
})

})

// let promise=fetch(url)
// console.log(promise)




 