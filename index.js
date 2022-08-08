let container = document.getElementById("container")

document.getElementById("search").addEventListener("click", () => {

    let cityname = document.getElementById("cityName").value 

   let getData =  async () => {
        try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b0324faedf95e2040f497d15941a2b64&units=metric`)
            let data = await res.json()
            console.log(data)
            displayData(data)
        }
        catch (err){
            console.log(err)
        }
    }
    getData()
})

let displayData = (data) =>{
    container.innerHTML = " "
    let weatherCard = document.createElement("div")

    let city = document.createElement("p")
    city.setAttribute('id','name');
    city.innerText =  data.name


    let temp = document.createElement("p")
    temp.innerText = "temp: " + "" + data.main.temp + " " + "°C"

    let pressure =  document.createElement("p")
    pressure.innerText = "pressure: " + " " + data.main.pressure 

    let humidity =  document.createElement("p")
    humidity.innerText = "humidity: " + " " + data.main.humidity 

    let windspeed =  document.createElement("p")
    windspeed.innerText = "windspeed: " + " " + data.wind.speed

    let sunrise =  document.createElement("p")
    sunrise.innerText = "sunrise: " + " " + data.sys.sunrise 

    let sunset =  document.createElement("p")
    sunset.innerText = "sunset: " + " " + data.sys.sunset 

    let descriptionDiv = document.createElement("div")
    descriptionDiv.setAttribute("class", " descriptionDiv")

    let weatherdescription =  document.createElement("p")

    let icon = document.createElement("img")
    
    if (data.weather[0].description == "clear sky"){
        weatherdescription.innerText = "weather description: " + " " + "clear sky" 
        icon.src =  "data:image/png;base64,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"
    }
    else{
        weatherdescription.innerText = "weather description: " + " " + data.weather[0].description
        icon.src =  "data:image/jpeg;base64,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"
    }

    descriptionDiv.append(weatherdescription, icon)

    weatherCard.append(city,temp,pressure,humidity,windspeed,sunrise,sunset,descriptionDiv )


    let iframe = document.createElement("iframe")

    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    container.append(weatherCard, iframe)
}
