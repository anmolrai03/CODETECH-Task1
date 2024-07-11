
const apiKey = 'dda019d72edee1983ad20afd4423ad57';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

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

function searchBtnClickHandle(){
    let cityname;
    searchBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        cityname = inputEle.value;
        console.log(completeURL(cityname));
    })
}

searchBtnClickHandle();

function updatePage(tempData, location, humidityData, windData, weatherCondition){
    //
    inputEle.innerText = '';
    weatherIconUpadate(weatherCondition);
    tempEle.innerText = tempData + '°C';
    cityNameEle.innerText = location;
    humidityValue.innerText = humidityData +'%';
    windValue.innerText = windData + ' km/h';
}

function weatherIconUpadate(weatherCondition){
    let src;
    switch (weatherCondition) {
        case value:
            
            break;
    
        default:
            break;
    }
    let imageHTML = `<img src="${src}" alt="${weatherCondition}">`;
}
//Using API.

// fetch(url + `&appid=${apiKey}`)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     console.log(data.main.temp);
//     console.log(data.weather[0].main);
//     console.log(data.main.temp);
// })
// .catch((error) => console.log('Error Encountered:',error));

