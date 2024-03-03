const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('weather-img');
const Temperature = document.querySelector('.Temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind-speed');
const location_not_found = document.querySelector('.location_not_found');


async function checkwhether(city){
    const api_key = "9c05edce03d2f88c008bfda9d7755109";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const whether_data = await fetch(`${url}`).then(response => response.json());
    // console.log(whather_data)

    if(whether_data.cod = `404`){
        location_not_found.style.display = "flex";
        console.log('error');
        return;
    }
    Temperature.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${whether_data.weather[0].description}`;
    humidity.innerHTML = `${whether_data.main.humidity }%`;
    wind_speed.innerHTML = `${whether_data.main.wind_speed}km/H`;

    switch(whether_data.whether[0].main){
        case 'Clouds': 
        weather_img.src="cloud.png";
        break;
        case 'Clear': 
        weather_img.src="clear.png";
        break;
        case 'Rain': 
        weather_img.src="rain.png";
        break;
        case 'Mist': 
        weather_img.src="mist.png";
        break;
        case 'Snow': 
        weather_img.src="snow.png";
        break;
    }

}
searchBtn.addEventListener('click', ()=>{
    checkwhether(inputBox.value);
});