
const apiKey = 'dda019d72edee1983ad20afd4423ad57';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';


//Getting elements as variables. Mobile 
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


// GETTING ELEMENTS AS VARIABLE. DESKTOP
const inputFieldDekEle = document.querySelector('.js-inputField');
// const inputEle = document.querySelector('.js-inputField');
const searchBtnDekEle = document.querySelector('.js-search-btn');

const humidityDataDek = document.querySelector(".js-humidity-data-dek");
const pressureDataDek = document.querySelector('.js-pressure-data-dek');

const weatherIconDekEle = document.querySelector('.js-weather-icon-dek');
// const weatherDesciptionDekEle = document.querySelector('.js-fig-caption');
const tempDekEle = document.querySelector('.js-temperature-dek');
const cityNameDekEle = document.querySelector('.js-city-name-dek');
const feelsLikeDekEle = document.querySelector('.js-feels-like-dek');

const windSpeedDekEle = document.querySelector('.js-wind-speed-dek');
const gustSpeedDekEle = document.querySelector('.js-gust-dek');
const degDekEle = document.querySelector('.js-deg-dek');

// console.log(humidityDataDek);
// console.log(pressureDataDek);

// console.log(weatherIconDekEle);
// // console.log(weatherDesciptionDekEle);
// console.log(tempDekEle);
// console.log(cityNameDekEle);
// console.log(feelsLikeDekEle);


// console.log(windSpeedDekEle);
// console.log(gustSpeedDekEle);
// console.log(degDekEle);

// functions for working
function completeURL(cityname){
    return apiurl + `&q=${cityname}` + `&appid=${apiKey}`;
}


function updatePage(tempData, location, humidityData, windData, weatherIconCode,weatherDesciption, pressureData, feelsLikeData, degData)
{

    //Both mobile and desktop
    weatherIconUpadate(weatherIconCode,weatherDesciption);
    
    //Mobile
    tempEle.innerText = tempData + '°C';
    cityNameEle.innerText = location;
    humidityValue.innerText = humidityData +'%';
    windValue.innerText = windData + ' km/h';
    inputEle.value = '';

    //Desktop
    humidityDataDek.innerText = humidityData +'%';
    pressureDataDek.innerText = "Pressure: "+ pressureData + ' hPa';

    tempDekEle.innerText = tempData + '°C';
    cityNameDekEle.innerText = location;
    feelsLikeDekEle.innerText = `Feels Like: ${feelsLikeData} °C`;

    windSpeedDekEle.innerText = 'Speed:'+windData + ' km/h';
    // if(gustData === 'undefined'){
    //     gustSpeedDekEle.innerText = 'Gust: Not Available';
    // } else{
    //     gustSpeedDekEle.innerText = `Gust: ${gustData} km/h`;
    // }
    degDekEle.innerText = `Deg: ${degData}°`;

    inputFieldDekEle.value = '';
}

function weatherIconUpadate(weatherIconCode,weatherDesciption){
    let imageHTML = 
    `
        <img src="https://openweathermap.org/img/wn/${weatherIconCode}@2x.png" alt="weather-Icon">
        <p>${weatherDesciption}</p>
    `;
    //Mobile
    weatherIconEle.innerHTML = imageHTML;
    //Desktop
    weatherIconDekEle.innerHTML = imageHTML;
}

//Using API.
function fetchAPI(url){
    // let temp , cityName , humidity, windSpeed, weatherIconCode , weatherDesciption, pressureData, gustData, degData;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        
        // console.log(data);
        // console.log(data.main.pressure);
        let temp = data.main.temp;
        let cityName = data.name;
        let  humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let weatherIconCode = data.weather[0].icon;
        let weatherDesciption = data.weather[0].description;

        let feelslikeData = data.main.feels_like;
        let pressureData = data.main.pressure;


        // let gustData = data.wind.gust;
        let degData = data.wind.deg;
        // console.log(pressureData);

        // (tempData, location, humidityData, windData, weatherIconCode,weatherDesciption, pressureData, feelsLikeData, gustData, degData)

        updatePage(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption,pressureData,feelslikeData, degData);
    })
    .catch((error) => alert('City Entered is not Found. Please Re-enter.'));
    // console.log('Error Encountered:',error)
    // return [temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption];
}

// console.log(searchBtn);
// console.log(searchBtnDekEle);

function searchBtnClickHandle(){
    let citynameSearchField;

    //MOBILE
    // if(searchBtn !== 'null'){
    //     console.log('button reached');
    //     searchBtn.addEventListener('click' , (e) => {
    //         console.log('button working mobile')
    //         e.preventDefault();
    //         citynameSearchField = inputEle.value;
    //         // console.log(completeURL(citynameSearchField));
    //         let url = completeURL(citynameSearchField);
    //         fetchAPI(url);
    //         // let [temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption] = fetchAPI(completeURL(citynameSearchField));
    //         // console.log(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption)
    //         // updatePage(temp,cityName,humidity,windSpeed,weatherIconCode,weatherDesciption);
    //         // console.log(completeURL(cityname));
    //     });
    // }
    searchBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        citynameSearchField = inputEle.value;
        // console.log(completeURL(citynameSearchField));
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
    });

    //DESKTOP
    // if(searchBtnDekEle !== 'null'){
    //     searchBtnDekEle.addEventListener('click', (e) => {
    //         console.log('button workin deks');
    //         citynameSearchField = inputFieldDekEle.value;
    //         e.preventDefault();
    //         let url = completeURL(citynameSearchField);
    //         fetchAPI(url);
    //     })
    // }
    searchBtnDekEle.addEventListener('click', (e) => {
        citynameSearchField = inputFieldDekEle.value;
        e.preventDefault();
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
    })
}

searchBtnClickHandle();

// console.log(inputEle);
// console.log(inputFieldDekEle);

//Mobile Input enter button functionality
inputEle.addEventListener('keydown',(e)=> {
    // console.log(e.key);
    if(e.key === 'Enter'){
        let citynameSearchField = inputEle.value;
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
    }
})


//DESKTOP Input enter button functionality
inputFieldDekEle.addEventListener('keydown',(e)=> {
    if(e.key === 'Enter'){
        let citynameSearchField = inputFieldDekEle.value;
        let url = completeURL(citynameSearchField);
        fetchAPI(url);
    }
})


//Calling main function for working to start.
