let form = document.querySelector("form");
let searchInp = document.querySelector("#searchInp");
let searchBtn = document.querySelector("#searchBtn");
let country = document.querySelector("#country");
let temperatur = document.querySelector("#temperatur");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let apiKey = "9b6673fd7060dfa115efcd4394a8207b";
let datas;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInp.value == "") {
    alert("Input is empty!");
  } else {
    let city = searchInp.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "city not found") {
          alert("City not found...");
          searchInp.value = "";
        } else {
          searchInp.value = "";
          datas = res;
          let humidityTag = `<i class="fas fa-droplet"></i> <br><span>${datas.main.humidity} %</span>`;
          let windTag = `<i class="fa-solid fa-wind"></i><br><span>${datas.wind.speed} m/s</span>`;
          let countryTag = `<h2>${datas.name}, <span class="country-code">${datas.sys.country}</span></h2>`;
          let temperaturTag=`<h1>${Math.round(datas.main.temp-273.15)}℃</h1>`
          temperatur.innerHTML=temperaturTag
          wind.innerHTML = windTag;
          humidity.innerHTML = humidityTag;
          country.innerHTML = countryTag;
        }
      })
      .catch((err) => console.error(err.message));
  }
});
