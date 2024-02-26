function ktoc(kelvin) {
    return (kelvin - 273.15).toFixed(2);

}
const search = async () => {
    if (place.value !== '') {
        let cityName = place.value;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8e21e00b9bc53215038bd9c1741b2a65`);
        console.log(response);
        response.json().then((data) => {

            container.innerHTML = `<div>
        <h1 class="temp">${ktoc(data.main.temp)}&#176;C</h1>
        <div class="city-time">
            <h1 class="name">${data.name}</h1>
        </div>
        <div class="weather">
            <span class="condition">${data.weather[0].main}</span>
            <img src="./img/1.png" alt="" class="icon" width="50" height="50">
            
        </div>
    </div>`


            result_container.innerHTML = `<div class="card rounded-5" style="background: rgba(239, 241, 240, 0.192); color:white;"width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Weather Details</h5>
            <img src="./img/cloud.png" width="70" height= "50">
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color:white;">Min Temperature: ${ktoc(data.main.temp_min)}&#176;C</li>
            <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color:white;">Max Temperature: ${ktoc(data.main.temp_max)}&#176;C</li>
            <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color:white;">Humidity: ${data.main.humidity}%</li>
            <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color:white">Pressure: ${data.main.pressure}hPa</li>
            <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color:white">Wind Speed: ${data.wind.speed}m/s</li>


            
        </ul>
       
    </div>`
})
}
}
