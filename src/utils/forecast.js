import request from 'request'

const forecast = (coords, callback)=>{
    request(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[1]}&lon=${coords[0]}&appid=6decea5f402964f2a9dcef3edccbdfa1&units=metric`, {json: true}, (err, res)=>{
        if(err)
        {
            return callback(undefined, err)
        }
        return callback(res.body, undefined)
    })
}

export default forecast