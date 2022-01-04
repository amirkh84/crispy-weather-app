// variables
const temp = document.querySelector(".temp");
const lowest = document.querySelector(".lowest");
const highest = document.querySelector(".highest");
const feel = document.querySelector(".feel");
const hum = document.querySelector(".hum");
const skystatus = document.querySelector(".status");
const overall = document.querySelector(".overall");
const city = document.querySelector(".city");
const bottom = document.querySelector(".bottom");
const img = document.createElement("img");
const box = document.querySelector(".box");
const clocation = document.querySelector(".location");
const input = document.querySelector(".search");
const submit = document.querySelector(".submit");
const key = "ee97d14b9394ca29f9fc4adcca4350ca";
let cityName = "tehran";
let url;
// test for first enter of client
getInfo(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
// functions
function submitData() {
    cityName = "";
    cityName = input.value;
    box.style.display = "none";
    console.log(cityName);
    url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    getInfo(url);
    input.value = "";
};
// i use a variable that have the link instead of directly using the link
function getInfo(urlm) {
fetch(urlm)
.then((res) => res.json())
.then(
    function(data) {
     let obi = data;
     // import data into html
     temp.innerHTML = obi.main.temp + "°";
     lowest.innerHTML = "↓ " + obi.main.temp_min + "°";
     highest.innerHTML = "↑ " + obi.main.temp_max + "°";
     city.innerHTML = obi.name +","+ obi.sys.country;
     skystatus.innerHTML = obi.weather[0].description;
     overall.innerHTML = obi.weather[0].main;
     feel.innerHTML = "Real feel: " + obi.main.feels_like + "°";
     hum.innerHTML = "Humidity: " + obi.main.humidity + "%";
     let icc = obi.weather[0].icon;
     img.setAttribute("src",`http://openweathermap.org/img/wn/${icc}@2x.png`);
     bottom.appendChild(img)
    });
};
// city search popup
function popup() {
    box.style.display = "flex";
};
//event listeners
clocation.addEventListener("click",popup);
submit.addEventListener("click",submitData);