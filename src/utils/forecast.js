import request from 'request'
import locationip from 'location-ip/location-ip.js'

const forecast = (callback)=>{
    locationip().then(data=>{
        request(`https://api.openweathermap.org/data/2.5/weather?lat=${data.location.latitude}&lon=${data.location.longitude}&appid=6decea5f402964f2a9dcef3edccbdfa1&units=metric`, {json: true}, (error, response)=>{
            if(error)
            {
                return callback(error, undefined)
            }
            return callback(undefined, response.body)
        })
    })
}

export default forecast