//current date

let date = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[date.getDay()];
let currentDay = document.querySelector("#weekday");
currentDay.innerHTML=day;

let hours = date.getHours();
let minutes=date.getMinutes();
let currentHour= document.querySelector("#current-hour");
let currentMinute= document.querySelector("#current-minute");
currentHour.innerHTML=hours;
currentMinute.innerHTML=minutes

//city search
function searchCity(event){
  event.preventDefault();
  let searchedCity = document.querySelector(".search-bar#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML=searchedCity.value;
}
let form = document.querySelector(".weather-form");
form.addEventListener("submit",searchCity);
