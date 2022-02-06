let iconWeather = document.getElementById("iconweather");


fetch('https://api.openweathermap.org/data/2.5/weather?id=3836951&appid=6166d72636703fa3f3b3a0c58d96009c&units=metric')
    .then(response => response.json())
    .then(data => {
        $("#temp").text(data.main.temp.toFixed(0) + "°C");
        $("#humidity").text(data.main.humidity+"%");
        $("#wind").text(data.wind.speed+"km/h");
        
        const icon = data.weather[0].icon;
        iconWeather.innerHTML = `<img src='icons/${icon}.png'></img>`
        $("iconweater").text(data.weather[0].icon);
        

    })

