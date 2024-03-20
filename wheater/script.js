let searchBox = document.querySelector('#searchBar');
let search = document.querySelector('#search');
let hideDisplay = Array.from(document.getElementsByClassName('displayNone'));
    let isHideSun = true;
    let isHideCloud = true;

async function fetchData(cityName) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '391a15ac0fmsh6a850533304fb89p1463afjsn2e6e511c55c3',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        let cloudy = result.cloud_pct;
        let temp = Math.round(result.temp) + "°C";
        let humid = Math.round(result.humidity) + "%";
        let wind = Math.round(result.wind_speed) + "km/h";
        console.log(temp,humid,wind,cloudy);
        for(let i = 0; i < hideDisplay.length; i++){
                   hideDisplay[i].classList.remove('displayNone');
         }
         assignValue(cloudy,temp,humid,wind,cityName);
    } catch (error) {
        console.error(error);
    }
}

search.addEventListener('click',() =>{
    console.log(searchBox.value);
    fetchData(searchBox.value);
});

// let image = document.querySelector('.cloud');
let temperature = document.querySelector('#temperature');
let city = document.querySelector('.city');
let humidInf = document.querySelector('#humidityInf');
let windInfo = document.querySelector('#windInfo');

function assignValue(cloudy,temp,humid,wind,cityName){
    if(cloudy < 50){
        let sun = document.querySelector('.sun-image');
        if(isHideSun){
           sun.classList.remove('sun-image')
           isHideSun = false;
        }
    }else{
        let clouds = document.querySelector('.cloud-image');
        if(isHideCloud){
            clouds.classList.remove('cloud-image');
            isHideCloud = false;
        }
    }
    temperature.innerHTML = temp;
    city.innerHTML = cityName;
    humidInf.innerHTML = humid;
    windInfo.innerHTML = wind;
}