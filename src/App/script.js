console.log("hii project");
const apiKey = 'dda019d72edee1983ad20afd4423ad57';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=padrauna';


let d = new Date();
console.log(d.toLocaleTimeString())
//Using API.
fetch(url + `&appid=${apiKey}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    console.log(data.main.temp);
    console.log(data.weather[0].main);
    console.log(data.main.temp);
})
.catch((error) => console.log('Error Encountered:',error));