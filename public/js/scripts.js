const form = document.querySelector('form')
const temperature = document.querySelector('.temp')
const mylocation = document.querySelector('.temp-loc p')
const input = document.querySelector('form input')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const precip = document.querySelector('.precip')
const wind = document.querySelector('.wind')
const icon = document.querySelector('.icon')
document.querySelector('.main').style.display = 'none'

document.addEventListener('DOMContentLoaded', (e)=>{
    fetch('/ipweather')
    .then(response => response.json())
    .then(data=>{
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weathermap.weather[0].icon}@2x.png" alt="weather icon">`
        document.querySelector('.loading').classList.remove('d-flex')
        document.querySelector('.loading').style.display = 'none'
        document.querySelector('.main').style.display = 'flex'
        temperature.textContent = `${Math.round(data.weathermap.main.temp)}º`
        mylocation.textContent = `${data.locip.location.place}, ${data.locip.location.region}`
        humidity.textContent = `${data.weathermap.main.humidity}%`
        wind.textContent = `${data.weathermap.wind.speed}KM`
        description.textContent = `${data.weathermap.weather[0].description}`
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    // temperature.classList.add('placeholder')
    // mylocation.classList.add('placeholder')
    // fetch(`/weather?address=${input.value}`)
    // .then(response => response.json())
    // .then(data =>{
    //     temperature.classList.remove('placeholder')
    //     mylocation.classList.remove('placeholder')
    //     temperature.textContent = `${data.forecastdata.current.temperature}º`
    //     mylocation.textContent = `${data.forecastdata.location.name}, ${data.forecastdata.location.region}, ${data.forecastdata.location.country}`
    // })
    // input.value = ''
})