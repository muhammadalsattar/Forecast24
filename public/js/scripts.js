const form = document.querySelector('.main > form')
const message = document.querySelector('.message')
const input = document.querySelector('form input')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    message.textContent = 'Loading...'
    fetch(`/weather?address=${input.value}`)
    .then(response => response.json())
    .then(data =>{
        if (data.Error){
            message.textContent = data.Error
        }
        else
        {
            message.textContent = `${data.weather_description}. It's ${data.temperature} now in ${data.location}. There's a ${data.precip}% chance of rain.`
        }
    })
    .catch(err => message.textContent = `${err}`)
    input.value = ''
})