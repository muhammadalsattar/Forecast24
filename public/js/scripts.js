const form = document.querySelector('form')
const temperature = document.querySelector('.temperature-location h1')
const mylocation = document.querySelector('.temperature-location p')
const input = document.querySelector('form input')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')



document.querySelector('#use-location').addEventListener('click', ()=>{
    window.navigator.geolocation.getCurrentPosition((response)=>{
        const latitude = response.coords.latitude
        const longitude = response.coords.longitude
        fetch(`/autolocation?lat=${latitude}&long=${longitude}`)
        .then(response=>response.json())
        .then(data=>{
            temperature.textContent = `${Math.round(data.data.main.temp)}º`
            mylocation.textContent = `${data.data.name}, ${data.data.sys.country}`
            description.innerHTML = `${data.data.weather[0].description}`
            humidity.innerHTML = `<span>Humidity</span> ${data.data.main.humidity}%`
            wind.innerHTML = `<span>Wind</span> ${data.data.wind.speed} m/s`
        })
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch(`/weather?address=${input.value}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        temperature.textContent = `${Math.round(data.data.main.temp)}º`
        mylocation.textContent = `${data.data.name}, ${data.data.sys.country}`
        description.innerHTML = `${data.data.weather[0].description}`
        humidity.innerHTML = `<span>Humidity</span> ${data.data.main.humidity}%`
        wind.innerHTML = `<span>Wind</span> ${data.data.wind.speed} m/s`
    })
    input.value = ''
})