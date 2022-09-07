$(function () {
    let city = ["Lviv", "Lisbon", "Paris", "Kyiv", "Tokyo", "Venice", "Rome", "Belgrade", "Rio", "Odesa", "Sydney","Caire"];
    
    if (document.cookie === "") {
        console.log('Empty Cookies')
        // getWeather()
        // createCookie() 
        CookieStore.onchange = createCookie();
        CookieStore.onchange = getWeather();
    } else {
        console.log('Full cookies')
        getWeatherLOCAL()
    }        

    async function getWeather() {

        for (let i = 0; i <= city.length - 1; i++) {

            $('.weather').append(`<div class="weather-type weather-type-${city[i]}"></div>`)
            $(`.weather-type-${city[i]}`).append(`<div class="weather_inside weather_inside-${city[i]}"></div>`)
            $(`.weather-type-${city[i]}`).css('overflow', `hidden`)
            $(`.weather_inside-${city[i]}`).append(`<p class="city">${city[i]}</p>`)
            $(`.weather_inside-${city[i]}`).append(`<div class="weather_info weather_info-${city[i]}"></div>`)
            $(`.weather_info-${city[i]}`).append(`<p class="cels cels-${city[i]}"></p>`)
            $(`.weather_info-${city[i]}`).append(`<div class="icon_box icon_box-${city[i]}"></div>`)

            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city[i]}&units=metric&lang=ua&appid=f885d5aaa13b8269687a0cd856467bfc`)
                .then(function retJson(resp) {
                    return resp.json()
                })
                .then(function (data) {
                    window.localStorage.setItem(`data${city[i]}`, JSON.stringify(data));
                    $(`.cels-${data.name}`).html(`${Math.floor(data.main.temp)}°C`)
                    $(`.icon_box-${data.name}`).append(`<img class="animate__animated animate__zoomInDown weather_icon weather_icon-${data.name}" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`)
                })
        }
    }

    async function getWeatherLOCAL() {
        for (let i = 0; i <= city.length - 1; i++) {

            $('.weather').append(`<div class="weather-type weather-type-${city[i]}"></div>`)
            $(`.weather-type-${city[i]}`).append(`<div class="weather_inside weather_inside-${city[i]}"></div>`)
            $(`.weather-type-${city[i]}`).css('overflow', `hidden`)
            $(`.weather_inside-${city[i]}`).append(`<p class="animate__animated animate__zoomIn city">${city[i]}</p>`)
            $(`.weather_inside-${city[i]}`).append(`<div class="weather_info weather_info-${city[i]}"></div>`)
            $(`.weather_info-${city[i]}`).append(`<p class="animate__animated animate__zoomInDown cels cels-${city[i]}"></p>`)
            $(`.weather_info-${city[i]}`).append(`<div class="icon_box icon_box-${city[i]}"></div>`)

            async function getData() {
                let resp= localStorage.getItem(`data${city[i]}`);
                let respJson = await JSON.parse(resp)
                $(`.cels-${city[i]}`).html(`${Math.floor(respJson.main.temp)}°C`)
                $(`.icon_box-${city[i]}`).append(`<img class="animate__animated animate__zoomInDown weather_icon weather_icon-${city[i]}" src="http://openweathermap.org/img/wn/${respJson.weather[0].icon}.png"/>`)
            }
            getData()
        }
    }
    function createCookie() {
        let time = new Date().getTime();

        let calcTime = new Date(time + (2 * 60 * 60 * 1000)).toUTCString()
        document.cookie = `user=anonym;expires=${calcTime}`;
    }
})