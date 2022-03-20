const form = document.querySelector('form')
const temperature = document.querySelector('.temperature-location h1')
const mylocation = document.querySelector('.temperature-location p')
const input = document.querySelector('form input')



document.addEventListener('DOMContentLoaded', ()=>{
    window.navigator.geolocation.getCurrentPosition((response)=>{
        const latitude = response.coords.latitude
        const longitude = response.coords.longitude
        fetch(`/autolocation?lat=${latitude}&long=${longitude}`)
        .then(response=>response.json())
        .then(data=>{
            temperature.textContent = `${Math.round(data.data.main.temp)}º`
            mylocation.textContent = `${data.data.name}, ${data.data.sys.country}`
        })
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch(`/weather?address=${input.value}`)
    .then(response => response.json())
    .then(data =>{
        temperature.textContent = `${Math.round(data.data.main.temp)}º`
        mylocation.textContent = `${data.data.name}, ${data.data.sys.country}`
    })
    input.value = ''
})