import request from 'request'
import 'dotenv/config'

const forecast = (coords, callback)=>{
    request(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[1]}&lon=${coords[0]}&appid=${process.env.OWMAPPID}&units=metric`, {json: true}, (err, res)=>{
        if(err)
        {
            return callback(undefined, err)
        }
        return callback(res.body, undefined)
    })
}

export default forecast