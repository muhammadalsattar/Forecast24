const form = document.querySelector('form')
const temperature = document.querySelector('.temperature-location h1')
const mylocation = document.querySelector('.temperature-location p')
const input = document.querySelector('form input')
const description = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

const getWeatherByLocation = ()=>{

    // Get weather with user location
    window.navigator.geolocation.getCurrentPosition((response)=>{
        const latitude = response.coords.latitude
        const longitude = response.coords.longitude
        fetch('/weather', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({geolocation: [longitude, latitude]})
        }).then(response => response.json()).then((data)=>{
            temperature.textContent = `${Math.round(data.main.temp)}º`
            mylocation.textContent = `${data.name}, ${data.sys.country}`
            description.innerHTML = `${data.weather[0].description}`
            humidity.innerHTML = `<span>Humidity</span> ${data.main.humidity}%`
            wind.innerHTML = `<span>Wind</span> ${data.wind.speed} m/s`
        })
    })

}

document.addEventListener('DOMContentLoaded',  ()=>{
    getWeatherByLocation()

    // disable submit button
    input.addEventListener('keyup', ()=>{
        if(input.value !== ''){
            document.querySelector('form #submit').removeAttribute('disabled')
        } else {
            document.querySelector('form #submit').setAttribute('disabled', true)
        }
    })
})

document.querySelector('#use-location').addEventListener('click', ()=>{
    getWeatherByLocation()
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch('/weather', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({query: input.value})
    }).then(response=> response.json()).then(result=>{
        if(result.error){
            document.querySelector('.temperature-location #error').innerHTML = 'Unable to find location. Try again'
            temperature.textContent = ``
            mylocation.textContent = ``
            description.innerHTML = ``
            humidity.innerHTML = ``
            wind.innerHTML = ``
        } else {
            document.querySelector('.temperature-location #error').innerHTML = ''
            temperature.textContent = `${Math.round(result.main.temp)}º`
            mylocation.textContent = `${result.name}, ${result.sys.country}`
            description.innerHTML = `${result.weather[0].description}`
            humidity.innerHTML = `Humidity ${result.main.humidity}%`
            wind.innerHTML = `Wind ${result.wind.speed} m/s`
        }
        input.value = ''
    })
})