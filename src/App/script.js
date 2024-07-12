
const apiKey = 'dda019d72edee1983ad20afd4423ad57';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const cityname = 'Padrauna';

// &q=padrauna
// let 

//Getting elements as variables.
const inputEle = document.querySelector('#input-area');
const searchBtn = document.querySelector('.js-search-icon');
const weatherIconEle = document.querySelector('.js-weather-icon');
const tempEle = document.querySelector('.js-temperature');
const cityNameEle =  document.querySelector('.js-city-name');
const humidityValue =  document.querySelector('.js-humidity-data');
const windValue =  document.querySelector('.js-wind-speed');

// console.log(inputEle);
// console.log(searchBtn);
// console.log(weatherIconEle);
// console.log(tempEle);
// console.log(cityNameEle);
// console.log(humidityValue);
// console.log(windValue);

// functions for working
function completeURL(cityname){
    return apiurl + `&q=${cityname}` + `&appid=${apiKey}`;
}



function updatePage(tempData, location, humidityData, windData, weatherIconCode,weatherDesciption){
    //
    inputEle.innerText = '';
    weatherIconUpadate(weatherIconCode,weatherDesciption);
    tempEle.innerText = tempData + '°C';
    cityNameEle.innerText = location;
    humidityValue.innerText = humidityData +'%';
    windValue.innerText = windData + ' km/h';
    inputEle.value = '';
}

function weatherIconUpadate(weatherIconCode,weatherDesciption){
    let imageHTML = 
    `
        <img src="https://openweathermap.org/img/wn/${weatherIconCode}@2x.png" alt="weather-Icon">
        <p>${weatherDesciption}</p>
    `;
    weatherIconEle.innerHTML = imageHTML;
}

//Using API.
function fetchAPI(url){
    let temp , cityName , humidity, windSpeed, weatherIconCode , weatherDesciption;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        temp = data.main.temp;
        cityName = data.name;
        humidity = data.main.humidity;
        windSpeed = data.wind.speed;
        weatherIconCode = data.weather[0].icon;
        weatherDesciption = data.weather[0].description;
        // console.log(temp);
        // console.log(cityName);
        // console.log(humidity);
        // console.log(windSpeed);
        // console.log(weatherIconCode);
        // console.log(weatherDesciption);
        updatePage(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption);
    })
    .catch((error) => alert('City Entered is not Found. Please Re-enter.'));
    // console.log('Error Encountered:',error)
    // return [temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption];
}


function searchBtnClickHandle(){
    let citynameSearchField;
    searchBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        citynameSearchField = inputEle.value;
        // console.log(completeURL(citynameSearchField));
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
        // let [temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption] = fetchAPI(completeURL(citynameSearchField));
        // console.log(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption)
        // updatePage(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption);
        // console.log(completeURL(cityname));
    })
}

searchBtnClickHandle();
inputEle.addEventListener('keydown',(e)=> {
    // console.log(e.key);
    if(e.key === 'Enter'){
        let citynameSearchField = inputEle.value;
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
    }
})