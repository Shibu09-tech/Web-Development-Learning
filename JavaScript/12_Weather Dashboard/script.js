document.addEventListener('DOMContentLoaded',() =>{
    const cityInput = document.getElementById("city-input");
    const getWeatherButton =  document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay= document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "5558b216415476fbfe606f83c7881a87";

    getWeatherButton.addEventListener("click", async() =>{
        const city = cityInput.value.trim();
        if(!city) return;
        
        //it may throw error
        //server/database is always in another continent

        try {
            const weatherData= await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            
        }

    })
      // gets the data    
    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response= await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE",response);

        if(!response.ok){
            throw new Error("City Not Found");
        }
        const data = await response.json();

        return data;

     }

     // display
     function displayWeatherData(data){
        console.log(data);
        const {name,main,weather} = data
        cityNameDisplay.textContent= name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`;
        descriptionDisplay.textContent = `${weather[0].description}`;


        //unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden")
        
     }

     //shows the error
     function showError(){
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
     }
})